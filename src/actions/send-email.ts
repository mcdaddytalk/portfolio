"use server";

import ContactFormEmail from "@/emailHandler/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { ErrorResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const defaultSender = process.env.RESEND_DEFAULT_SENDER ?? 'Contact Form <onboarding@resend.dev>'
const defaultReceiver = process.env.RESEND_DEFAULT_RECEIVER ?? 'netcool.dude@gmail.com'

export const sendEmail = async (formData: FormData) => {
    console.log('Running on server...')
    console.log(formData.get('senderName'))
    console.log(formData.get('senderEmail'))
    console.log(formData.get('message'))

    const name = formData.get('senderName')
    const sender = formData.get('senderEmail')
    const message = formData.get('message')

    // simple server-side validation
    if (!validateString(sender, 500)) {
        return {
            data: null,
            error: {
                statusCode: 500,
                name: 'validation_error',
                message: "Invalid sender email",
            } as ErrorResponse
        };
    }
    if (!validateString(message, 5000)) {
        return {
            data: null,
            error: 
            {
                statusCode: 500,
                name: 'validation_error',
                message: "Invalid message",
            } as ErrorResponse
        };
    }

    // const html = `<p><strong>Name:</strong>  ${name}</p><p><strong>Email:</strong>  ${sender}</p><p><strong>Message:</strong>  ${message}</p>`

    let data;
    try {
        const response = await resend.emails.send({
            from: defaultSender,
            reply_to: sender,
            to: defaultReceiver,
            subject: `[PORTFOLIO CONTACT FORM] Message from ${name}`,
            react: React.createElement(ContactFormEmail, {
                message,
                sender
            })
        });
        if (response.error) return { data: null, error: response.error }
        data = response.data;
    } catch (error: unknown) {
        return {
            data: null,
            error: {
                statusCode: 500,
                name: 'internal_server_error',
                message: getErrorMessage(error)
            } as ErrorResponse
        }
    }

    return { data, error: null }
}