"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Menu, X, Star, Crown, Sparkles } from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const featuredProducts = [
    {
      id: 1,
      name: "Essential Hoodie",
      price: "€89",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10547c77-c1c0-4f12-9a9d-d62b2ef73f42.png",
      badge: "Signature",
      colors: ["Black", "Grey", "Beige"]
    },
    {
      id: 2,
      name: "Comfort Sweatshirt",
      price: "€69",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee6a2cca-cc69-4ee8-a27a-b36979445be6.png",
      badge: "New Arrival",
      colors: ["White", "Black", "Grey"]
    },
    {
      id: 3,
      name: "Relaxed Sweatpants",
      price: "€59",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67065fa6-7eb5-4eca-b520-97e771128d13.png",
      badge: "",
      colors: ["Black", "Grey", "Beige"]
    },
    {
      id: 4,
      name: "Matching Set",
      price: "€129",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c1a3433-c05c-4e47-bcae-9697307fb5ab.png",
      badge: "Exclusive",
      colors: ["Black", "Grey"]
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Luxury Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-50">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Luxury Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-playfair font-bold tracking-wider text-black">LENAUVES</h1>
            </div>

            {/* Luxury Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-800 hover:text-black transition-all duration-300 font-light tracking-wide text-sm uppercase">Collections</a>
              <a href="#" className="text-gray-800 hover:text-black transition-all duration-300 font-light tracking-wide text-sm uppercase">Ready-to-Wear</a>
              <a href="#" className="text-gray-800 hover:text-black transition-all duration-300 font-light tracking-wide text-sm uppercase">Maison</a>
              <a href="#" className="text-gray-800 hover:text-black transition-all duration-300 font-light tracking-wide text-sm uppercase">Contact</a>
            </nav>

            {/* Luxury Cart & Mobile Menu */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="relative hover:bg-transparent">
                <ShoppingBag className="h-5 w-5 text-gray-800" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">0</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-50 py-8">
              <nav className="flex flex-col space-y-6">
                <a href="#" className="text-gray-800 hover:text-black transition-colors font-light tracking-wide text-sm uppercase">Collections</a>
                <a href="#" className="text-gray-800 hover:text-black transition-colors font-light tracking-wide text-sm uppercase">Ready-to-Wear</a>
                <a href="#" className="text-gray-800 hover:text-black transition-colors font-light tracking-wide text-sm uppercase">Maison</a>
                <a href="#" className="text-gray-800 hover:text-black transition-colors font-light tracking-wide text-sm uppercase">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Luxury Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/195f41e7-884b-431b-9e60-7c60e2f3f409.png"
            alt="LENAUVES luxury fashion model in sophisticated setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <h2 className="font-playfair text-6xl md:text-8xl font-light mb-8 tracking-wide leading-tight">
            The Art of<br />
            <span className="italic">Simplicity</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
            Where timeless elegance meets contemporary sophistication.<br />
            Discover the LENAUVES universe of luxury fashion.
          </p>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 text-sm uppercase tracking-widest px-12 py-4 font-light"
          >
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Luxury Featured Collections */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <h3 className="font-playfair text-5xl md:text-6xl font-light text-black mb-8 tracking-wide">
              Signature <span className="italic">Collections</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Meticulously crafted pieces that embody the essence of contemporary luxury.<br />
              Each creation represents our commitment to exceptional quality and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6">
                  {product.badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-black text-white px-4 py-2 text-xs uppercase tracking-widest font-light">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={`${product.name} - LENAUVES luxury fashion piece`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <h4 className="font-playfair text-2xl font-light text-black tracking-wide">{product.name}</h4>
                  <p className="text-lg text-gray-800 font-light">{product.price}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className={`w-4 h-4 rounded-full border border-gray-300 ${
                          color === "Black" ? "bg-black" :
                          color === "Grey" ? "bg-gray-400" :
                          color === "White" ? "bg-white" :
                          color === "Beige" ? "bg-amber-100" : "bg-gray-200"
                        }`}
                        title={color}
                      ></div>
                    ))}
                  </div>
                  
                  <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-xs uppercase tracking-widest px-8 py-3 font-light">
                    Discover
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Brand Heritage */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center">
          <h3 className="font-playfair text-5xl md:text-6xl font-light text-black mb-12 tracking-wide">
            Maison <span className="italic">Heritage</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
            <p className="text-2xl font-light leading-relaxed">
              LENAUVES was created with one philosophy in mind: <em className="font-playfair italic">simplicity</em>.
            </p>
            <p className="text-lg font-light leading-relaxed">
              We design pieces that fit effortlessly into everyday life — clean silhouettes, quality fabrics, and timeless design. 
              Our focus is on creating clothing that feels as good as it looks, with attention to every detail from fabric selection to final construction.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Each piece in our collection is designed for the modern individual who values quality over quantity, 
              and understands that true style comes from confidence, not complexity.
            </p>
          </div>
          
          <div className="mt-16">
            <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-500 text-xs uppercase tracking-widest px-12 py-4 font-light">
              Discover Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Editorial Section */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4614bbf-aabe-4d84-bd9e-62eaeb78935b.png"
                alt="LENAUVES luxury lifestyle photography in sophisticated urban setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <h3 className="font-playfair text-5xl md:text-6xl font-light text-black tracking-wide leading-tight">
                Crafted for<br />
                <span className="italic">Modern Life</span>
              </h3>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Our pieces are created for the moments that define contemporary elegance — from intimate gatherings to cosmopolitan adventures. 
                Where sophistication meets everyday luxury.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-playfair text-2xl font-light text-black mb-3 tracking-wide">Exceptional Materials</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Sourced from the finest mills, each fabric is selected for its superior quality and luxurious feel.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-playfair text-2xl font-light text-black mb-3 tracking-wide">Artisanal Craftsmanship</h4>
                    <p className="text-gray-600 font-light leading-relaxed">Every detail meticulously considered, from conception to creation, ensuring unparalleled quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Newsletter */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center">
          <h3 className="font-playfair text-5xl md:text-6xl font-light mb-8 tracking-wide">
            Join the <span className="italic">Maison</span>
          </h3>
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Receive exclusive access to new collections, private events, and the latest from the LENAUVES universe.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto">
            <div className="flex border-b border-gray-600 pb-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white border-0 placeholder-gray-400 focus:ring-0 text-lg font-light"
                required
              />
              <Button 
                type="submit" 
                className="bg-transparent text-white hover:text-gray-300 transition-colors text-xs uppercase tracking-widest font-light"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-white border-t border-gray-50 py-24">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Luxury Brand */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-playfair text-3xl font-bold text-black mb-6 tracking-wider">LENAUVES</h4>
              <p className="text-gray-600 mb-8 max-w-md font-light leading-relaxed">
                Luxury fashion maison dedicated to timeless elegance and contemporary sophistication. 
                Where exceptional craftsmanship meets modern design.
              </p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-black transition-colors text-sm uppercase tracking-wide">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors text-sm uppercase tracking-wide">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors text-sm uppercase tracking-wide">Twitter</a>
              </div>
            </div>

            {/* Collections */}
            <div>
              <h5 className="font-light text-black mb-6 text-sm uppercase tracking-widest">Collections</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Ready-to-Wear</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Signature Pieces</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Seasonal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Exclusive Sets</a></li>
              </ul>
            </div>

            {/* Maison */}
            <div>
              <h5 className="font-light text-black mb-6 text-sm uppercase tracking-widest">Maison</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Craftsmanship</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Sustainability</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Luxury Services */}
          <div className="border-t border-gray-100 mt-16 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <Crown className="h-6 w-6 text-gray-400" />
                <span className="text-gray-600 font-light text-sm">Complimentary shipping</span>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Sparkles className="h-6 w-6 text-gray-400" />
                <span className="text-gray-600 font-light text-sm">Exclusive member benefits</span>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Star className="h-6 w-6 text-gray-400" />
                <span className="text-gray-600 font-light text-sm">Personal styling service</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">© 2024 LENAUVES. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors font-light">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors font-light">Terms</a>
              <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors font-light">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}