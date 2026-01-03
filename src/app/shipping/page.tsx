import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free over €75, otherwise €4.99",
      delivery: "3-7 business days",
      description: "Reliable delivery across Europe with tracking included"
    },
    {
      name: "Express Shipping",
      price: "€9.99",
      delivery: "1-3 business days",
      description: "Fast delivery for when you need your items quickly"
    },
    {
      name: "Next Day Delivery",
      price: "€19.99",
      delivery: "Next business day",
      description: "Available in select cities (Paris, Berlin, Amsterdam, London)"
    }
  ];

  const countries = [
    "Austria", "Belgium", "Denmark", "Finland", "France", "Germany", 
    "Ireland", "Italy", "Luxembourg", "Netherlands", "Portugal", 
    "Spain", "Sweden", "Switzerland", "United Kingdom"
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
              <a href="/about" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Shipping Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Fast, reliable delivery across Europe with tracking on every order.
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Shipping Options</h2>
            <p className="text-xl text-gray-600">Choose the delivery speed that works for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">{option.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-black mb-2">{option.price}</p>
                  <p className="text-lg text-gray-600 mb-4">{option.delivery}</p>
                  <p className="text-gray-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processing & Delivery Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Order Processing</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Processing Time</h3>
                    <p className="text-gray-600">
                      Orders are processed within 1-2 business days. Orders placed after 2 PM CET 
                      will be processed the next business day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Packaging</h3>
                    <p className="text-gray-600">
                      All items are carefully packaged in our signature eco-friendly packaging 
                      to ensure they arrive in perfect condition.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Tracking</h3>
                    <p className="text-gray-600">
                      You'll receive a tracking number via email once your order ships. 
                      Track your package in real-time until delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Delivery Information</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Business Days</h3>
                    <p className="text-gray-600 mb-4">
                      Delivery times are calculated in business days (Monday-Friday, excluding holidays).
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Orders placed Friday after 2 PM ship Monday</li>
                      <li>• Weekend orders ship Monday</li>
                      <li>• Holiday delays may apply</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Delivery Attempts</h3>
                    <p className="text-gray-600 mb-4">
                      Our carriers will attempt delivery up to 3 times. If unsuccessful:
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Package held at local depot for 7 days</li>
                      <li>• You'll receive pickup instructions</li>
                      <li>• After 7 days, package returns to us</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Countries */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">We Ship To</h2>
            <p className="text-lg text-gray-600">Currently delivering across Europe</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                <p className="text-gray-700 font-medium">{country}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your country? We're expanding our shipping network.
            </p>
            <a href="/contact" className="text-black font-medium hover:underline">
              Contact us for updates →
            </a>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Important Information</h2>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Customs & Duties</h3>
                <p className="text-gray-600">
                  For EU countries, no additional customs fees apply. For non-EU countries (UK, Switzerland), 
                  customers are responsible for any customs duties or taxes imposed by their country.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Address Accuracy</h3>
                <p className="text-gray-600">
                  Please ensure your shipping address is complete and accurate. We cannot be responsible 
                  for packages delivered to incorrect addresses provided by the customer.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Damaged Packages</h3>
                <p className="text-gray-600">
                  If your package arrives damaged, please contact us within 48 hours with photos. 
                  We'll arrange a replacement or refund immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}