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
      
      {/* Video indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideoIndex(index);
              // Play the selected video
              const selectedVideo = videoRefs.current[index];
              if (selectedVideo) {
                selectedVideo.currentTime = 0;
                selectedVideo.play();
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentVideoIndex ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Show video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel; 