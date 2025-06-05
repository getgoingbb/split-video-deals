
import { useState } from "react";
import { Video } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ShoppingCart, ExternalLink } from "lucide-react";

interface VideoCardProps {
  video: Video;
  onAddToCart: (video: Video) => void;
}

const VideoCard = ({ video, onAddToCart }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePayhipRedirect = () => {
    if (video.payhipUrl) {
      window.open(video.payhipUrl, '_blank');
    }
  };

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-900">
              <Clock className="w-3 h-3 mr-1" />
              {video.duration}
            </Badge>
            <Badge variant="secondary" className="bg-blue-600 text-white">
              {video.category}
            </Badge>
          </div>
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-white/90 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {video.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${video.price}
          </span>
          <span className="text-sm text-gray-500">One-time purchase</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 space-y-3">
        <Button
          onClick={() => onAddToCart(video)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        
        {video.payhipUrl && (
          <Button
            onClick={handlePayhipRedirect}
            variant="outline"
            className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Buy on Payhip
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
