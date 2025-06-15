
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart as CartIcon } from "lucide-react";
import { Video } from "@/pages/Index";

interface HeaderProps {
  cartItems: Video[];
  onCartOpen: () => void;
}

const Header = ({ cartItems, onCartOpen }: HeaderProps) => {
  return (
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
          onClick={onCartOpen}
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
  );
};

export default Header;
