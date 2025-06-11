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
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Setup video refs array and initialize all videos
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    
    // Preload all videos and mark them as loaded
    const loadedStatus = new Array(videos.length).fill(false);
    setVideosLoaded(loadedStatus);
    
    // Initialize all videos
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        // Set event listener for when the video is loaded
        videoRef.addEventListener('loadeddata', () => {
          setVideosLoaded(prev => {
            const newStatus = [...prev];
            newStatus[index] = true;
            return newStatus;
          });
          
          // Pause all videos except the first one
          if (index !== 0) {
            videoRef.pause();
            videoRef.currentTime = 0;
          }
        });
      }
    });
  }, [videos.length]);
  
  // Function to change videos with a more subtle transition
  const changeVideo = () => {
    setIsTransitioning(true);
    
    // After a short fade out animation, change the video
    setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      setIsTransitioning(false);
      
      // Ensure all videos are paused
      videoRefs.current.forEach((video, idx) => {
        if (video && idx !== nextIndex) {
          video.pause();
        }
      });
      
      // Play the next video
      const nextVideo = videoRefs.current[nextIndex];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(e => console.error("Video play error:", e));
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
      {/* Enhanced dark overlay with more coverage to cover text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75 z-10"></div>
      
      {/* Additional overlay to ensure even coverage */}
      <div className="absolute inset-0 bg-slate-900/40 z-5"></div>
      
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
            preload="auto"
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