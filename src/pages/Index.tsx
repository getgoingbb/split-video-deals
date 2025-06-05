
import { useState } from "react";
import VideoShowcase from "@/components/VideoShowcase";
import ShoppingCart from "@/components/ShoppingCart";
import { Button } from "@/components/ui/button";
import { ShoppingCart as CartIcon } from "lucide-react";

export interface Video {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  duration: string;
  category: string;
  payhipUrl?: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<Video[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const videos: Video[] = [
    {
      id: "1",
      title: "Advanced React Patterns",
      description: "Master advanced React patterns including render props, compound components, and custom hooks. Perfect for developers looking to level up their React skills.",
      price: 49.99,
      thumbnail: "/placeholder.svg",
      duration: "2h 30m",
      category: "Web Development",
      payhipUrl: "https://payhip.com/your-product-1"
    },
    {
      id: "2", 
      title: "Modern CSS Techniques",
      description: "Learn cutting-edge CSS techniques including Grid, Flexbox, animations, and responsive design. Transform your frontend development skills.",
      price: 39.99,
      thumbnail: "/placeholder.svg", 
      duration: "1h 45m",
      category: "Web Design",
      payhipUrl: "https://payhip.com/your-product-2"
    }
  ];

  const addToCart = (video: Video) => {
    if (!cartItems.find(item => item.id === video.id)) {
      setCartItems([...cartItems, video]);
    }
  };

  const removeFromCart = (videoId: string) => {
    setCartItems(cartItems.filter(item => item.id !== videoId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VideoHub Pro
            </h1>
            <p className="text-sm text-gray-600">Premium Video Courses</p>
          </div>
          <Button
            onClick={() => setIsCartOpen(true)}
            variant="outline"
            className="relative hover:bg-blue-50 transition-colors"
          >
            <CartIcon className="w-5 h-5 mr-2" />
            Cart ({cartItems.length})
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master Your Skills
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover premium video courses designed to accelerate your learning journey. 
            Expert-crafted content with lifetime access.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Lifetime Access
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              HD Quality
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Expert Content
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <VideoShowcase videos={videos} onAddToCart={addToCart} />

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 VideoHub Pro. All rights reserved.</p>
          <p className="text-sm mt-2">Revenue automatically split 50/50 between partners</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
