"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define the schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Type for the form data
export type ContactFormValues = z.infer<typeof ContactFormSchema>

// Type for the form response
export type ContactFormResponse = {
  success: boolean
  message: string
}

export async function submitContactForm(formData: ContactFormValues): Promise<ContactFormResponse> {
  try {
    // Validate the form data
    const validatedData = ContactFormSchema.parse(formData)

    // Create the email content
    const { name, email, subject, message } = validatedData

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((e) => e.message).join(", ")
      return {
        success: false,
        message: `Validation error: ${errorMessage}`,
      }
    }

    // Check for authentication errors
    if (error instanceof Error && error.message.includes("authentication")) {
      console.error("Gmail authentication error. Check your credentials.")
      return {
        success: false,
        message: "Email service configuration error. Please try again later or contact directly via email.",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
