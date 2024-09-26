"use client"
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:yashita.mittal03@gmail.com?subject=Contact%20from%20Portfolio&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    // Reset Form Fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <section id="contact" className="container mx-auto py-16 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="mt-8 space-y-8">
            <div>
              <p className="text-muted-foreground">
                Feel free to reach out to me for any inquiries or collaboration opportunities.
              </p>
              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
              <div className="mt-4 space-y-2">
                <p><strong>Email</strong>: <span><a className="underline" href="mailto:yashita.mittal03@gmail.com">yashita.mittal03@gmail.com</a></span></p>
                <p><strong>Phone</strong>: <span><a className="underline" href="tel:+918285503325">+91 828 550 3325</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
