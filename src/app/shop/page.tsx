"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { Filter, Grid, List } from "lucide-react";

const allProducts = [
  {
    id: 1,
    name: "Essential Hoodie",
    price: "€89",
    priceValue: 89,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/730b6ce3-0403-4b4c-aac5-e8372a5010d8.png",
    badge: "Best Seller",
    colors: ["Black", "Grey", "Beige"],
    category: "hoodies",
    featured: true
  },
  {
    id: 2,
    name: "Comfort Sweatshirt",
    price: "€69",
    priceValue: 69,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f6ad028-3e6a-4873-8eae-ffa33451cfd5.png",
    badge: "New",
    colors: ["White", "Black", "Grey"],
    category: "sweatshirts",
    featured: true
  },
  {
    id: 3,
    name: "Relaxed Sweatpants",
    price: "€59",
    priceValue: 59,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9ca7a21-aa65-466d-b4b7-68e7786ed81c.png",
    badge: "",
    colors: ["Black", "Grey", "Beige"],
    category: "sweatpants",
    featured: true
  },
  {
    id: 4,
    name: "Matching Set",
    price: "€129",
    priceValue: 129,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8674c3d2-5e35-451d-93b5-b1b8053dafb1.png",
    badge: "Complete Look",
    colors: ["Black", "Grey"],
    category: "sets",
    featured: true
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    price: "€95",
    priceValue: 95,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/25b8b872-5017-4fb3-bf0e-ab570547a8be.png",
    badge: "",
    colors: ["Beige", "Black", "White"],
    category: "hoodies",
    featured: false
  },
  {
    id: 6,
    name: "Classic Sweatshirt",
    price: "€75",
    priceValue: 75,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b197b53-5c51-431f-a1f3-a402c153a957.png",
    badge: "",
    colors: ["Navy", "Black", "Grey"],
    category: "sweatshirts",
    featured: false
  },
  {
    id: 7,
    name: "Jogger Sweatpants",
    price: "€65",
    priceValue: 65,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1baac11e-5359-4b5b-ba35-c7b026a8cec9.png",
    badge: "",
    colors: ["Black", "Grey", "Navy"],
    category: "sweatpants",
    featured: false
  },
  {
    id: 8,
    name: "Premium Set",
    price: "€149",
    priceValue: 149,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b135c64-2adf-4ae9-adf2-03f51ef65a36.png",
    badge: "Limited",
    colors: ["Grey", "Black"],
    category: "sets",
    featured: false
  }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.priceValue - b.priceValue;
      case "price-high":
        return b.priceValue - a.priceValue;
      case "name":
        return a.name.localeCompare(b.name);
      case "featured":
      default:
        return b.featured ? 1 : -1;
    }
  });

  const handleAddToCart = (productId: number, selectedColor: string) => {
    console.log(`Added to cart: Product ${productId}, Color: ${selectedColor}`);
    // Here you would typically update your cart state
  };

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
              <a href="/shop" className="text-black font-medium border-b-2 border-black">Shop</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Collections</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Shop Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of minimalist streetwear. Each piece designed for comfort, style, and everyday confidence.
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-black text-white" : ""}
              >
                All Products
              </Button>
              <Button
                variant={selectedCategory === "hoodies" ? "default" : "outline"}
                onClick={() => setSelectedCategory("hoodies")}
                className={selectedCategory === "hoodies" ? "bg-black text-white" : ""}
              >
                Hoodies
              </Button>
              <Button
                variant={selectedCategory === "sweatshirts" ? "default" : "outline"}
                onClick={() => setSelectedCategory("sweatshirts")}
                className={selectedCategory === "sweatshirts" ? "bg-black text-white" : ""}
              >
                Sweatshirts
              </Button>
              <Button
                variant={selectedCategory === "sweatpants" ? "default" : "outline"}
                onClick={() => setSelectedCategory("sweatpants")}
                className={selectedCategory === "sweatpants" ? "bg-black text-white" : ""}
              >
                Sweatpants
              </Button>
              <Button
                variant={selectedCategory === "sets" ? "default" : "outline"}
                onClick={() => setSelectedCategory("sets")}
                className={selectedCategory === "sets" ? "bg-black text-white" : ""}
              >
                Matching Sets
              </Button>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-gray-200 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-r-none ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-l-none ${viewMode === "list" ? "bg-gray-100" : ""}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {allProducts.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
                  colors={product.colors}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="flex space-x-6 p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
                        <p className="text-2xl font-bold text-black mb-4">{product.price}</p>
                        <div className="flex space-x-2 mb-4">
                          {product.colors.map((color) => (
                            <div
                              key={color}
                              className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                                color === "Black" ? "bg-black" :
                                color === "Grey" ? "bg-gray-400" :
                                color === "White" ? "bg-white" :
                                color === "Beige" ? "bg-amber-100" :
                                color === "Navy" ? "bg-blue-900" : "bg-gray-200"
                              }`}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                      {product.badge && (
                        <Badge className="bg-black text-white">{product.badge}</Badge>
                      )}
                    </div>
                    <Button 
                      onClick={() => handleAddToCart(product.id, product.colors[0])}
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Stay Updated</h3>
          <p className="text-lg text-gray-600 mb-8">
            Get notified about new drops and exclusive offers.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800 rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}