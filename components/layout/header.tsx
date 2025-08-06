"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Star } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">BP</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Bhavirav Painting</h1>
              <p className="text-sm text-gray-600">Professional Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <a
                href="https://share.google/PjD7LnuEzR7axOt67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4 text-yellow-500" />
                Reviews
              </a>
            </Button>
            <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
              <a href="tel:+919158800517" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="min-h-[44px] min-w-[44px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <span className="font-bold text-lg">BP</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Bhavirav Painting</h2>
                    <p className="text-sm text-gray-600">Professional Service</p>
                  </div>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-orange-500 font-medium py-3 px-2 border-b border-gray-100 min-h-[44px] flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3 pt-4">
                  <Button asChild variant="outline" className="w-full min-h-[48px] bg-transparent">
                    <a
                      href="https://share.google/PjD7LnuEzR7axOt67"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Star className="h-4 w-4 text-yellow-500" />
                      View Google Reviews
                    </a>
                  </Button>
                  <Button asChild className="w-full min-h-[48px] bg-orange-500 hover:bg-orange-600">
                    <a href="tel:+919158800517" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call +91 9158800517
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
