import { useState, useEffect, useRef } from 'react';

// Video carousel component for the hero section
const VideoCarousel = () => {
  const videos = [
    "/videos/data centers.mp4",
    "/videos/infra.mp4",
    "/videos/workers.mp4",
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Setup video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);
  
  // Function to change videos with a more subtle transition
  const changeVideo = () => {
    setIsTransitioning(true);
    
    // After a short fade out animation, change the video
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
      
      // If we have a ref to the new video, play it
      const nextVideo = videoRefs.current[currentVideoIndex];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play();
      }
    }, 600); // Shorter transition duration
  };
  
  // Auto-rotate videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(changeVideo, 10000);
    return () => clearInterval(interval);
  }, [currentVideoIndex]);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 z-10"></div>
      
      {/* Video elements with more subtle transitions */}
      {videos.map((videoSrc, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-800 ${
            index === currentVideoIndex 
              ? isTransitioning ? 'opacity-80' : 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <video
            ref={el => videoRefs.current[index] = el}
            className="w-full h-full object-cover"
            autoPlay={index === 0}
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel; 