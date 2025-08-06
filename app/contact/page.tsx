"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Star, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll contact you soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      content: "+91 9158800517",
      action: "tel:+919158800517",
      actionText: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      content: "Bhairavpaintingservice@gmail.com",
      action: "mailto:Bhairavpaintingservice@gmail.com",
      actionText: "Send Email",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      content: "Mumbai, Maharashtra, India",
      action: "#",
      actionText: "View Coverage",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Mon-Sat: 8:00 AM - 7:00 PM",
      action: "#",
      actionText: "Schedule Call",
    },
  ];

  const services = [
    "Residential Painting",
    "Commercial Painting",
    "Building Exterior Painting",
    "Texture & Design Painting",
    "Color Consultation",
    "Other",
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch for a Free Consultation!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for expert advice
            and a transparent quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Request Your Free Quote
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Brief Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your project, preferred timeline, or any specific requirements..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <p className="text-gray-600">Get in touch with us directly</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-orange-500 mt-1">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{info.content}</p>
                      {info.action !== "#" && (
                        <Button asChild variant="outline" size="sm">
                          <a href={info.action}>{info.actionText}</a>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Google My Business */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Google My Business
                </CardTitle>
                <p className="text-gray-600">
                  Check out our reviews and ratings
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">5.0 Rating</span>
                </div>
                <p className="text-gray-600 mb-4">
                  See what our satisfied customers are saying about our painting
                  services.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://share.google/PjD7LnuEzR7axOt67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Google Reviews
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg bg-orange-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6">
                  Call us directly for urgent inquiries or immediate quotes
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="secondary" className="flex-1">
                    <a
                      href="tel:+919158800517"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Call +91 9158800517
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 text-orange-500 border-white hover:bg-white bg-transparent"
                  >
                    <a
                      href="https://wa.me/919158800517?text=Hi, I'm interested in your painting services. Can you provide me with a quote?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  How long does a typical painting project take?
                </h3>
                <p className="text-gray-600">
                  Project duration depends on the size and complexity. A single
                  room typically takes 1-2 days, while a full house can take 5-7
                  days. We provide detailed timelines during consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do you provide free color consultation?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer free color consultation and design advice to
                  help you choose the perfect colors and finishes for your
                  space.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  What brands of paint do you use?
                </h3>
                <p className="text-gray-600">
                  We use premium quality paints from top brands like Asian
                  Paints, Berger, and Dulux to ensure lasting results and
                  beautiful finishes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do you offer any warranty on your work?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide a warranty on our workmanship and stand behind
                  the quality of our painting services. Specific warranty terms
                  are discussed during the consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
