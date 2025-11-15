import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        We&apos;d love to hear from you. Please fill out the form below and
        we&apos;ll get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div className="space-y-0.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-darkColor/80 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-darkColor hoverEffect"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default ContactPage;