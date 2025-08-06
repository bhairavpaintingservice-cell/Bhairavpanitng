import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Star, CheckCircle, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality Excellence",
      description:
        "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description:
        "We respect your time and commitments. Projects are completed on schedule, every time.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Craft",
      description:
        "Painting is not just our business, it's our passion. We love transforming spaces.",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "500+ Happy Customers",
      description: "Successfully completed projects across Mumbai",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "100% Quality Guarantee",
      description: "We stand behind every project we complete",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "5-Star Google Rating",
      description: "Consistently rated excellent by our clients",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled and experienced painting professionals",
    },
  ];

  const teamMembers = [
    {
      name: "Bhavirav",
      role: "Founder & Lead Painter",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "With over 10 years of experience in the painting industry, Bhavirav founded the company with a vision to provide quality painting services to every home and business in Mumbai.",
    },
    {
      name: "Painting Team",
      role: "Professional Painters",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Our skilled team of painters brings years of experience and dedication to every project, ensuring the highest standards of workmanship.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Bhavirav Painting Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional painting services in Mumbai,
            committed to transforming spaces with quality and care.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bhavirav Painting Service was founded with a simple yet
                  powerful mission: to make professional painting services
                  accessible and stress-free for everyone in Mumbai. What
                  started as a passion for transforming spaces has grown into a
                  trusted name in the painting industry.
                </p>
                <p>
                  We understand that your home or office is more than just a
                  space – it's where life happens, where memories are made, and
                  where business thrives. That's why we approach every project
                  with the care and attention it deserves, using only the finest
                  materials and proven techniques.
                </p>
                <p>
                  Our commitment goes beyond just applying paint to walls. We're
                  here to bring your vision to life, whether it's creating a
                  cozy family environment, a productive workspace, or a stunning
                  exterior that makes a lasting impression.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Bhavirav Painting Service Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20 bg-orange-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To transform every space we touch into a beautiful, lasting work
              of art while providing exceptional customer service and building
              long-term relationships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Achievements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Recognition and milestones that reflect our commitment to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The skilled professionals behind every successful project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <Badge className="mb-4 bg-orange-500">{member.role}</Badge>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 bg-gray-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Bhavirav Painting Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Premium Quality Materials
                  </h3>
                  <p className="text-gray-600">
                    We use only top-brand paints and materials for lasting
                    results
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Experienced Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our team brings years of expertise to every project
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    No hidden costs - clear, upfront pricing for all services
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Timely Completion
                  </h3>
                  <p className="text-gray-600">
                    We respect deadlines and complete projects on schedule
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Clean Work Environment
                  </h3>
                  <p className="text-gray-600">
                    We maintain cleanliness and protect your property during
                    work
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Ongoing support and maintenance advice after project
                    completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-orange-500 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8">
            Experience the Bhavirav Painting Service difference for your next
            project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Your Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-black  hover:bg-white/80 bg-white"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
