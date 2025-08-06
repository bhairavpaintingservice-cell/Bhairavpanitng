import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star, ExternalLink } from "lucide-react";

export default function Footer() {
  const services = [
    "Residential Painting",
    "Commercial Painting",
    "Building Exterior Painting",
    "Texture & Design Painting",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">BP</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Bhavirav Painting</h3>
                <p className="text-sm text-gray-400">Professional Service</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming homes and offices in Mumbai with quality paints and
              expert designs. Your trusted painting partner since 2015.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">5.0 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a
                  href="tel:+919158800517"
                  className="text-gray-400 hover:text-white"
                >
                  +91 9158800517
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:contact@bhaviravpainting.com"
                  className="text-gray-400 hover:text-white"
                >
                  Bhairavpaintingservice@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">Mumbai, Maharashtra</span>
              </div>
            </div>
            <Button asChild className="mt-4 bg-orange-500 hover:bg-orange-600">
              <a
                href="https://share.google/PjD7LnuEzR7axOt67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                Google Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bhavirav Painting Service. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <Button asChild variant="ghost" size="sm">
              <a
                href="https://wa.me/919158800517"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
