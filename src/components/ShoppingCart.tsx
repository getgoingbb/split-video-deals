
import { Video } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trash2, CreditCard } from "lucide-react";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Video[];
  onRemoveItem: (videoId: string) => void;
  totalPrice: number;
}

const ShoppingCart = ({ isOpen, onClose, items, onRemoveItem, totalPrice }: ShoppingCartProps) => {
  const handlePayPalCheckout = () => {
    // PayPal integration with 50/50 split
    // In a real implementation, you would integrate with PayPal's API
    // and configure the split payment to two email addresses
    console.log("Processing PayPal payment with 50/50 split");
    console.log("Items:", items);
    console.log("Total:", totalPrice);
    
    // For now, we'll simulate the PayPal redirect
    alert(`Redirecting to PayPal for payment of $${totalPrice.toFixed(2)}\nRevenue will be split 50/50 between partners`);
    
    // In a real implementation:
    // 1. Create PayPal payment with split configuration
    // 2. Redirect user to PayPal
    // 3. Handle payment completion
    // 4. Split revenue automatically between the two email addresses
  };

  const splitAmount = totalPrice / 2;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 py-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <CreditCard className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Add some videos to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-lg font-bold text-blue-600">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <SheetFooter className="border-t pt-6">
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Revenue Split (50/50):</p>
                    <p>• Partner 1: ${splitAmount.toFixed(2)}</p>
                    <p>• Partner 2: ${splitAmount.toFixed(2)}</p>
                  </div>
                </div>
                
                <Button
                  onClick={handlePayPalCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Checkout with PayPal
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  Secure payment processing with automatic revenue splitting
                </p>
              </div>
            </SheetFooter>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
