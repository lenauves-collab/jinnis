import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, CheckCircle, XCircle, Clock } from "lucide-react";

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Email us at returns@lenauves.com or use our contact form to initiate your return."
    },
    {
      step: 2,
      title: "Receive Return Label",
      description: "We'll send you a prepaid return label within 24 hours (free for EU customers)."
    },
    {
      step: 3,
      title: "Package Your Items",
      description: "Pack items in original packaging with tags attached. Include your order number."
    },
    {
      step: 4,
      title: "Ship Your Return",
      description: "Drop off at any post office or schedule a pickup. We'll handle the rest."
    },
    {
      step: 5,
      title: "Receive Refund",
      description: "Once we receive your return, refunds are processed within 3-5 business days."
    }
  ];

  const eligibleItems = [
    "Unworn items with original tags",
    "Items in original packaging",
    "Items returned within 30 days",
    "Items without damage or stains",
    "Items that haven't been altered"
  ];

  const nonEligibleItems = [
    "Items worn or washed",
    "Items without original tags",
    "Items damaged by customer",
    "Items returned after 30 days",
    "Final sale items (marked as such)"
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
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Returns & Refunds</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Not completely satisfied? We offer hassle-free returns within 30 days.
          </p>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Return Policy</h2>
            <p className="text-xl text-gray-600">Simple, fair, and customer-friendly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">30-Day Window</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You have 30 days from delivery date to return any item for a full refund or exchange.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Free Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Free return shipping for all EU customers. We'll send you a prepaid return label.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-black">Quick Refunds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Refunds processed within 3-5 business days once we receive your returned items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How to Return</h2>
            <p className="text-xl text-gray-600">Follow these simple steps for a smooth return process.</p>
          </div>
          
          <div className="space-y-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-black text-white hover:bg-gray-800">
              Start a Return
            </Button>
          </div>
        </div>
      </section>

      {/* Eligible vs Non-Eligible Items */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Return Eligibility</h2>
            <p className="text-xl text-gray-600">What can and cannot be returned.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligible Items */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-black">Eligible for Return</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibleItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Non-Eligible Items */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-black">Not Eligible for Return</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {nonEligibleItems.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exchanges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Exchanges</h2>
            <p className="text-lg text-gray-600">Need a different size or color?</p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black mb-4">How Exchanges Work</h3>
                <p className="text-gray-600 mb-6">
                  We currently process exchanges as returns + new orders to ensure the fastest service. 
                  Simply return your original item and place a new order for your preferred size/color.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    💡 Pro Tip: Place your new order first to secure your preferred item, 
                    then return the original. We'll refund the returned item once received.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Refund Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Refund Information</h2>
            <p className="text-xl text-gray-600">Everything you need to know about refunds.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Refund Timeline</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Return received: 1-2 business days</li>
                  <li>• Quality check: 1-2 business days</li>
                  <li>• Refund processed: 1 business day</li>
                  <li>• Bank processing: 3-5 business days</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Total time: 5-10 business days from when we receive your return.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Refund Method</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Refunded to original payment method</li>
                  <li>• Credit card refunds: 3-5 business days</li>
                  <li>• PayPal refunds: 1-2 business days</li>
                  <li>• Bank transfer refunds: 5-7 business days</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Shipping costs are refunded for defective items only.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Returns */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help with Your Return?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our customer service team is here to make your return process as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Start Return Process
            </Button>
          </div>
          <p className="text-gray-400 mt-6">
            Email: returns@lenauves.com | Response time: Within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}