"use client"

import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your painting services. Can you provide me with more information?",
    )
    window.open(`https://wa.me/919158800517?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-lg animate-pulse min-h-[56px] min-w-[56px]"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
