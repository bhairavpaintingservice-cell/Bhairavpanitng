import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Star,
  CheckCircle,
  Users,
  Clock,
  Palette,
  Building,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Residential Painting",
      description:
        "Transform your home with our expert interior and exterior painting services",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial & Office Painting",
      description:
        "Professional painting solutions for offices, shops, and business spaces",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Building Exterior Painting",
      description:
        "Complete exterior painting solutions for residential and commercial buildings",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Texture & Design Painting",
      description:
        "Creative designs, accent walls, and textured finishes to bring your vision to life",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced & Professional Team",
      description: "Our painters are skilled and reliable professionals",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality Colours",
      description: "We use top brands for a lasting and beautiful finish",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Designs",
      description: "From modern accent walls to classic textures",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Project Completion",
      description: "We respect your time and deadlines",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Free Consultation & Quote",
      description: "Get expert advice and transparent pricing",
    },
  ];

  const portfolioPreview = [
    {
      title: "Modern Living Room",
      image: "/ModernLivingRoom.png?height=300&width=400",
      category: "Residential",
    },
    {
      title: "Office Space Transformation",
      image: "/OfficeSpaceTransformation.png?height=300&width=400",
      category: "Commercial",
    },
    {
      title: "Building Exterior",
      image: "/BuildingExterior.png?height=300&width=400",
      category: "Exterior",
    },
    {
      title: "Textured Accent Wall",
      image: "/TexturedAccentWall.png?height=300&width=400",
      category: "Design",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 4,
      text: "Excellent work! The team was professional and completed our home painting on time. Highly recommended!",
    },
    {
      name: "Rajesh Patel",
      rating: 5,
      text: "Great quality work at reasonable prices. Our office looks amazing after their painting service.",
    },
    {
      name: "Anita Desai",
      rating: 5,
      text: "Very satisfied with their texture painting work. The designs exceeded our expectations!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Painting Services in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transforming Your Homes and Offices with Quality Paints and Expert
              Designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-transparent"
              >
                <a href="tel:+919158800517">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete painting solutions for all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted painting partner in Pune
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-orange-500 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600">
              See the quality of our craftsmanship
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioPreview.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-orange-500">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              What our satisfied customers say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our painting services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    How long does a typical painting project take?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Project duration depends on the size and complexity. A
                    single room typically takes 1-2 days, while a full house can
                    take 5-7 days. Commercial projects may take 1-2 weeks
                    depending on the scope. We provide detailed timelines during
                    consultation and always stick to our promised deadlines.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Do you provide free color consultation?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Yes! We offer completely free color consultation and design
                    advice. Our experts will visit your space, understand your
                    preferences, and help you choose the perfect colors and
                    finishes that match your style and budget.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    What brands of paint do you use?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    We use premium quality paints from top brands like Asian
                    Paints, Berger Paints, Dulux, and Nerolac. We select the
                    best paint type based on your specific needs - whether it's
                    interior, exterior, or specialized finishes - to ensure
                    lasting results and beautiful appearance.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Do you offer any warranty on your work?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Yes, we provide a comprehensive warranty on our workmanship.
                    Interior painting comes with a 2-year warranty, while
                    exterior painting has a 1-year warranty. We also offer
                    maintenance support and will address any issues that arise
                    during the warranty period at no extra cost.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Do you provide all painting materials?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! We provide all necessary materials including
                    premium paints, brushes, rollers, protective coverings, and
                    cleaning supplies. All materials are included in our quoted
                    price with no hidden costs. You don't need to worry about
                    purchasing anything.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Can you work during weekends and holidays?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Yes! We offer flexible scheduling including weekends and
                    holidays to minimize disruption to your daily routine or
                    business operations. Weekend work may have a small
                    additional charge, which we'll discuss upfront during the
                    quotation process.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    How do you protect furniture and floors during painting?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    We take great care to protect your property. We use
                    high-quality plastic sheets, drop cloths, and masking tape
                    to cover furniture, floors, and fixtures. Our team is
                    trained in proper preparation techniques to ensure no paint
                    splatter or damage occurs to your belongings.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    What is included in your painting service?
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Our complete service includes surface preparation, primer
                    application, painting with premium paints, cleanup, and
                    final inspection. We also provide minor wall repairs,
                    filling cracks and holes, and ensuring smooth finishes.
                    Post-completion cleanup is thorough, leaving your space
                    spotless.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-8 py-3 "
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-3 text-white-500 border-white hover:bg-white bg-transparent"
            >
              <a href="tel:+919158800517">
                <Phone className="mr-2 h-5 w-5" />
                +91 9158800517
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
