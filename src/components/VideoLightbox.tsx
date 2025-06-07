
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoLightbox = ({ isOpen, onClose, videoUrl, title }: VideoLightboxProps) => {
  const getEmbedUrl = (url: string) => {
    const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
    if (videoId) {
      const cleanId = videoId.split('&')[0];
      return `https://www.youtube.com/embed/${cleanId}`;
    }
    return url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="aspect-video">
            <iframe
              src={getEmbedUrl(videoUrl)}
              className="w-full h-full"
              allowFullScreen
              title={title}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoLightbox;
