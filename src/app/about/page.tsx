import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, RotateCcw } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Star,
      title: "Quality First",
      description: "We source only the finest materials and work with skilled craftspeople to ensure every piece meets our high standards."
    },
    {
      icon: Shield,
      title: "Sustainable Practices",
      description: "Our commitment to the environment drives us to use sustainable materials and ethical manufacturing processes."
    },
    {
      icon: Truck,
      title: "Fast & Reliable",
      description: "Quick shipping across Europe with tracking, so you can enjoy your new pieces as soon as possible."
    },
    {
      icon: RotateCcw,
      title: "Customer Satisfaction",
      description: "30-day returns and dedicated customer service ensure you're completely happy with your purchase."
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
              <a href="/about" className="text-black font-medium border-b-2 border-black">About</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Lenauves was born from a simple belief: that great style doesn't need to be complicated.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Simplicity as a Philosophy</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Lenauves was created with one idea in mind: <strong>simplicity</strong>. 
                  In a world filled with noise and complexity, we believe that true style comes from clean lines, 
                  quality materials, and thoughtful design.
                </p>
                <p>
                  We design pieces that fit effortlessly into everyday life — clean silhouettes, quality fabrics, 
                  and timeless design. Our focus is on creating clothing that feels as good as it looks, 
                  with attention to every detail from fabric selection to final construction.
                </p>
                <p>
                  Each piece in our collection is designed for the modern individual who values quality over quantity, 
                  and understands that true style comes from confidence, not complexity.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6819ae40-5209-4a98-a574-01c8d27199cc.png"
                alt="Lenauves design studio showcasing minimalist workspace and creative process"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            To create timeless streetwear that empowers individuals to express their authentic selves 
            through clean, confident style. We believe that when you feel good in what you wear, 
            you carry yourself with natural confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  Every piece is carefully constructed using premium materials and time-tested techniques. 
                  We partner with skilled artisans who share our commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Sustainable Future</h3>
                <p className="text-gray-600">
                  We're committed to responsible fashion. From sustainable materials to ethical manufacturing, 
                  every decision considers our impact on the planet and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">The People Behind Lenauves</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate team dedicated to creating exceptional streetwear experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/944073c1-02f1-4421-9582-2d6d7181dd90.png"
                alt="Lenauves team of creative professionals in collaborative workspace"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Built by Creators, for Creators</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings together designers, craftspeople, and style enthusiasts who understand 
                what it means to create clothing that truly resonates with modern life.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From our design studio to our customer service team, every person at Lenauves is committed 
                to delivering exceptional quality and service that exceeds expectations.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Lenauves</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our minimalist approach to streetwear can elevate your everyday style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}