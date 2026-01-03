"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@lenauves.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+33 1 23 45 67 89",
      description: "Monday - Friday, 9:00 AM - 6:00 PM CET"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Paris, France",
      description: "European headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 - 18:00",
      description: "Central European Time"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold tracking-tight text-black">LENAUVES</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/shop" className="text-gray-600 hover:text-black transition-colors">Shop</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Collections</a>
              <a href="/about" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="/contact" className="text-black font-medium border-b-2 border-black">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about our products, need styling advice, or want to share feedback? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-32"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black mb-1">{info.title}</h3>
                            <p className="text-xl text-black font-medium mb-1">{info.content}</p>
                            <p className="text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Lenauves.
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">What are your shipping options?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer free standard shipping across Europe for orders over €75. Express shipping is available for €9.99. 
                  Orders are typically processed within 1-2 business days and delivered within 3-7 business days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">What is your return policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unworn items in original condition with tags attached. 
                  Returns are free within the EU. Simply contact us to initiate a return and we'll send you a prepaid label.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">How do I find the right size?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each product page includes detailed size charts and fit information. Our pieces are designed with a relaxed, 
                  comfortable fit. If you're between sizes, we recommend sizing up for our oversized styles or staying true to size for regular fits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">Do you offer international shipping?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Currently, we ship throughout Europe. We're working on expanding to other regions. 
                  Sign up for our newsletter to be notified when we start shipping to your area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow us on social media for style inspiration and behind-the-scenes content.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">TikTok</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}