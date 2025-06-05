
import { Video } from "@/pages/Index";
import VideoCard from "./VideoCard";

interface VideoShowcaseProps {
  videos: Video[];
  onAddToCart: (video: Video) => void;
}

const VideoShowcase = ({ videos, onAddToCart }: VideoShowcaseProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 text-gray-900">Featured Courses</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handpicked premium video courses to help you master new skills and advance your career.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
