
import { Video } from "@/pages/Index";

interface StructuredDataProps {
  videos: Video[];
}

const StructuredData = ({ videos }: StructuredDataProps) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Never Leave The Playground",
    "url": "https://neverleavetheplayground.com",
    "logo": "https://neverleavetheplayground.com/logo.png",
    "description": "Health & Wellness Video Collection focused on brain health, metabolism improvement, and skill development",
    "sameAs": [
      "https://speaker.neverleavetheplayground.com"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Never Leave The Playground - Videos",
    "url": window.location.origin,
    "description": "Discover engaging video programs designed to boost your brain health, improve your metabolism, and teach you exciting new skills.",
    "publisher": {
      "@type": "Organization",
      "name": "Never Leave The Playground"
    }
  };

  const productData = videos.map(video => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": video.title,
    "description": video.description,
    "image": video.thumbnail,
    "category": video.category,
    "brand": {
      "@type": "Brand",
      "name": "Never Leave The Playground"
    },
    "offers": {
      "@type": "Offer",
      "price": video.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Never Leave The Playground"
      }
    },
    "video": video.youtubePreviewUrl ? {
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": video.thumbnail,
      "duration": video.duration,
      "embedUrl": video.youtubePreviewUrl
    } : undefined
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      {productData.map((product, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(product)
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;
