
import { useState, useEffect } from "react";
import VideoShowcase from "@/components/VideoShowcase";
import ShoppingCart from "@/components/ShoppingCart";
import StructuredData from "@/components/StructuredData";
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
  payhipProductId?: string;
  youtubePreviewUrl?: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<Video[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const videos: Video[] = [
    {
      id: "1",
      title: "Never Leave The Playground Active Play Video",
      description: "Boost Your Brain and Health with Simple Games: Improve Attention and Metabolism. Are you looking to enhance your mental acuity and overall well-being? Join us in this engaging video as we introduce a program of simple yet effective games that can significantly benefit your attention span, metabolism, and brain function. By the end of this video, you'll have practical tools to not only sharpen your mind but also support a healthier lifestyle.",
      price: 9.95,
      thumbnail: "/lovable-uploads/9a49ccf9-6faa-42b0-a663-08971ad70a3b.png",
      duration: "45 min",
      category: "Health & Wellness",
      payhipUrl: "https://payhip.com/b/Mgw7n",
      payhipProductId: "Mgw7n",
      youtubePreviewUrl: "https://youtu.be/kxFTnQadcPw"
    },
    {
      id: "2", 
      title: "The 5 In One Juggling Uni-cycling Tight Rope Knife Throwing Video",
      description: "Learn Juggling, Uni-Cycling, Tight Rope Walking and More! This 58-minute digital video is packed with five different activities that are both fun and challenging. Stephen Jepson teaches juggling, uni cycling, knife throwing, balancing on a loose rope, and tight rope walking. Whether you want to learn how to juggle, improve your balance, or try your hand at some fun activities, this instructional video is informative and fun.",
      price: 9.95,
      thumbnail: "/lovable-uploads/6eb0b520-4580-4c05-abbe-22fa12bc970f.png", 
      duration: "58 min",
      category: "Skills & Activities",
      payhipUrl: "https://payhip.com/b/jK30s",
      payhipProductId: "jK30s",
      youtubePreviewUrl: "https://youtu.be/ll6aoSmWzKY"
    }
  ];

  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Never Leave The Playground - Health & Wellness Video Collection";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover engaging video programs designed to boost your brain health, improve your metabolism, and teach you exciting new skills. Expert instruction with instant download.');
    }

    // Add additional meta tags
    const head = document.head;
    
    // Keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'brain health, metabolism, juggling, unicycling, active play, health wellness, video courses, skill development');

    // Author meta tag
    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'author');
      head.appendChild(authorMeta);
    }
    authorMeta.setAttribute('content', 'Never Leave The Playground');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);
  }, []);

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
    <>
      <StructuredData videos={videos} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png" 
                alt="Never Leave The Playground Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Never Leave The Playground
                </h1>
                <p className="text-sm text-gray-600">Health & Wellness Video Collection</p>
              </div>
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
              Never Leave The Playground- Videos
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover engaging video programs designed to boost your brain health, improve your metabolism, 
              and teach you exciting new skills. From active play to juggling and beyond!
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8 max-w-md mx-auto">
              <p className="text-yellow-800 font-semibold">Special Offer!</p>
              <p className="text-yellow-700 text-sm">Buy both videos and get 50% off the second one</p>
            </div>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Instant Download
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                HD Quality MP4
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Expert Instruction
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
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-8">
                <a 
                  href="https://neverleavetheplayground.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Home
                </a>
                <a 
                  href="https://speaker.neverleavetheplayground.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Learn About Speaking Events
                </a>
              </div>
              <div className="text-center text-gray-600">
                <p>&copy; 2025 Never Leave The Playground. All rights reserved.</p>
                <p className="text-sm mt-2">Let's Start Playing!</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
