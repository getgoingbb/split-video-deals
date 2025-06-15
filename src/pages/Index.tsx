
import { useState, useEffect } from "react";
import VideoShowcase from "@/components/VideoShowcase";
import ShoppingCart from "@/components/ShoppingCart";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

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
        <Header cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
        <HeroSection />
        <VideoShowcase videos={videos} onAddToCart={addToCart} />
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={removeFromCart}
          totalPrice={getTotalPrice()}
        />
        <Footer />
      </div>
    </>
  );
};

export default Index;
