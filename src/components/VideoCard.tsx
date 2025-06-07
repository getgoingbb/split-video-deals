
import { useState } from "react";
import { Video } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ShoppingCart, Youtube } from "lucide-react";
import VideoLightbox from "./VideoLightbox";

interface VideoCardProps {
  video: Video;
  onAddToCart: (video: Video) => void;
}

const VideoCard = ({ video, onAddToCart }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleYouTubePreview = () => {
    if (video.youtubePreviewUrl) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
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
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={handleYouTubePreview}
            >
              <div className="bg-white/90 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
                <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
              </div>
            </div>
            {video.youtubePreviewUrl && (
              <div className="absolute top-4 right-4">
                <Button
                  onClick={handleYouTubePreview}
                  size="sm"
                  variant="secondary"
                  className="bg-red-600 hover:bg-red-700 text-white border-0"
                >
                  <Youtube className="w-4 h-4 mr-1" />
                  Preview
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
            {video.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${video.price}
            </span>
            <span className="text-sm text-gray-500">Instant Download</span>
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
          
          {video.payhipProductId && (
            <div 
              className="w-full"
              dangerouslySetInnerHTML={{
                __html: `<a href="${video.payhipUrl}" class="payhip-buy-button w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-200 bg-background hover:bg-blue-50 hover:text-accent-foreground h-10 px-4 py-2 text-blue-600" data-theme="blue" data-product="${video.payhipProductId}">Buy Now</a>`
              }}
            />
          )}
          
          {video.youtubePreviewUrl && (
            <Button
              onClick={handleYouTubePreview}
              variant="outline"
              className="w-full border-red-200 text-red-600 hover:bg-red-50 transition-colors"
            >
              <Youtube className="w-4 h-4 mr-2" />
              Watch Preview
            </Button>
          )}
        </CardFooter>
      </Card>

      <VideoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        videoUrl={video.youtubePreviewUrl || ""}
        title={video.title}
      />
    </>
  );
};

export default VideoCard;
