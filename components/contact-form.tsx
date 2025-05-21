"use client"

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm, type ContactFormValues } from "@/lib/actions"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { memo } from "react"
import { toast } from "sonner"
import { ScaleOnHover } from "./animations/motion-animations"

// Define the schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export const ContactForm = memo(function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Memoize the submit handler to prevent recreation on each render
  const onSubmit = useCallback(
    async (data: ContactFormValues) => {
      setIsSubmitting(true)

      try {
        const response = await submitContactForm(data)

        if (response.success) {
        
        toast("Success!", {
          description: response.message,})
          form.reset()
        } else {
        
            toast("Error", {
                description: response.message,
            })
        }
      } catch (error) {
        
        toast("Error", {
            description: "Something went wrong. Please try again later.",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [form, toast],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" className="bg-muted/50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" className="bg-muted/50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" className="bg-muted/50" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" className="min-h-[120px] bg-muted/50" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ScaleOnHover>
          <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </ScaleOnHover>

        {form.formState.isSubmitSuccessful && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md text-center"
          >
            Message sent successfully!
          </motion.div>
        )}
      </form>
    </Form>
  )
})
