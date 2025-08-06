import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    // Residential Projects
    {
      id: 1,
      title: "Modern Living Room Makeover",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description:
        "Complete interior transformation with modern color scheme and accent wall",
    },
    {
      id: 2,
      title: "Bedroom Suite Painting",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Peaceful bedroom colors with textured feature wall",
    },
    {
      id: 3,
      title: "Kitchen Cabinet Refinishing",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Kitchen cabinet painting and wall color coordination",
    },
    {
      id: 4,
      title: "Villa Exterior Painting",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Complete exterior makeover with weather-resistant paints",
    },
    // Commercial Projects
    {
      id: 5,
      title: "Corporate Office Interior",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Professional office space with branded color scheme",
    },
    {
      id: 6,
      title: "Retail Showroom",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description:
        "Attractive retail space designed to enhance customer experience",
    },
    {
      id: 7,
      title: "Restaurant Interior",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Warm and inviting restaurant atmosphere with custom colors",
    },
    // Exterior Projects
    {
      id: 8,
      title: "Apartment Building Exterior",
      category: "exterior",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Multi-story building exterior with waterproofing",
    },
    {
      id: 9,
      title: "Commercial Building Facade",
      category: "exterior",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Professional building facade renovation",
    },
    // Design Work
    {
      id: 10,
      title: "Textured Accent Wall",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Custom textured wall with artistic patterns",
    },
    {
      id: 11,
      title: "Metallic Finish Feature Wall",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Elegant metallic finish for luxury interior",
    },
    {
      id: 12,
      title: "Stencil Design Work",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      beforeImage: "/placeholder.svg?height=400&width=600",
      description: "Custom stencil patterns for unique wall decoration",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "exterior", label: "Exterior" },
    { id: "design", label: "Design Work" },
  ];

  const getFilteredProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our digital catalogue showcasing the quality and
            craftsmanship of Bhavirav Painting Service
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredProjects(category.id).map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-orange-500 capitalize">
                        {project.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>

                      {/* Before/After Toggle */}
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-medium mb-2">Before</p>
                            <Image
                              src={project.beforeImage || "/placeholder.svg"}
                              alt={`${project.title} - Before`}
                              width={300}
                              height={200}
                              className="w-full h-32 object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium mb-2">After</p>
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={`${project.title} - After`}
                              width={300}
                              height={200}
                              className="w-full h-32 object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <section className="mt-20 bg-gray-50 rounded-lg p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                24/7
              </div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-orange-500 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Project?</h2>
          <p className="text-xl mb-8">
            Let us transform your space with our expert painting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-black hover:bg-white/80 bg-white"
            >
              <a
                href="https://share.google/PjD7LnuEzR7axOt67"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Reviews
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
