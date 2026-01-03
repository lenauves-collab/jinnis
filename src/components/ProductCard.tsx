"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  colors: string[];
  onAddToCart?: (productId: number, selectedColor: string) => void;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  badge, 
  colors, 
  onAddToCart 
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id, selectedColor);
    }
  };

  const getColorClass = (color: string) => {
    switch (color.toLowerCase()) {
      case "black": return "bg-black";
      case "white": return "bg-white border-2 border-gray-300";
      case "grey": case "gray": return "bg-gray-400";
      case "beige": return "bg-amber-100";
      case "navy": return "bg-blue-900";
      default: return "bg-gray-200";
    }
  };

  return (
    <Card className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300 relative">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {badge && (
            <Badge className="absolute top-4 left-4 z-10 bg-black text-white">
              {badge}
            </Badge>
          )}
          
          {/* Like Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>

          <img
            src={image}
            alt={`${name} - Premium minimalist streetwear piece`}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-black hover:bg-gray-100"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
            {name}
          </h4>
          <p className="text-2xl font-bold text-black mb-4">{price}</p>
          
          {/* Color Selection */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Color: {selectedColor}</p>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color 
                      ? 'border-black scale-110' 
                      : 'border-gray-300 hover:border-gray-400'
                  } ${getColorClass(color)}`}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}