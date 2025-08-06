import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Palette, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Painting",
      description:
        "Complete painting solutions for homes, apartments, and villas",
      features: [
        "Interior painting for living rooms, bedrooms, kitchens",
        "Exterior house painting and maintenance",
        "Color consultation and design advice",
        "Premium quality paints and materials",
        "Clean and professional work environment",
      ],
      image: "/ModernLivingRoom.png?height=300&width=400",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Commercial Painting",
      description:
        "Professional painting services for offices, shops, and business spaces",
      features: [
        "Office and workspace painting",
        "Retail and showroom painting",
        "Minimal disruption to business operations",
        "Flexible scheduling including weekends",
        "Durable commercial-grade paints",
      ],
      image: "/OfficeSpaceTransformation.png?height=300&width=400",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Building Painting",
      description:
        "Complete painting solutions for entire residential and commercial buildings",
      features: [
        "Full building exterior painting",
        "Waterproofing and weather protection",
        "Structural painting and maintenance",
        "Large-scale project management",
        "Quality assurance and warranties",
      ],
      image: "/BuildingExterior.png?height=300&width=400",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Designer & Textured Painting",
      description: "Creative and artistic painting services for unique designs",
      features: [
        "Accent walls and feature designs",
        "Stencil and pattern work",
        "Metallic and special effect finishes",
        "Various texture techniques",
        "Custom design consultation",
      ],
      image: "/TexturedAccentWall.png?height=300&width=400",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional painting services tailored to meet all your residential
            and commercial needs in Mumbai
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-orange-500 mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl md:text-3xl">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Quote for This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Free site visit and color consultation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Quote</h3>
              <p className="text-gray-600">Detailed and transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">
                Professional painting with quality materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-gray-600">Final inspection and cleanup</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-orange-500 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white-500 border-white hover:bg-white bg-transparent"
            >
              <a href="tel:+919158800517">Call +91 9158800517</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
