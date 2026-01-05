import type { FC } from "react";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";
import { useI18n } from "../i18n";
import assets from "../../public/assets.json";

interface VideoPlayerProps {
  className?: string;
  caption?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ className = "", caption = "" }) => {
  const { locale } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const videoData = {
    src: assets.video.demo.src,
    title: assets.video.demo.title[locale as keyof typeof assets.video.demo.title] || assets.video.demo.title.en,
    description: assets.video.demo.description[locale as keyof typeof assets.video.demo.description] || assets.video.demo.description.en,
    poster: assets.video.demo.poster
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const changePlaybackSpeed = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ' ':
      case 'k':
        e.preventDefault();
        togglePlay();
        break;
      case 'm':
        e.preventDefault();
        toggleMute();
        break;
      case 'f':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (videoRef.current) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (videoRef.current) {
          videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 5);
        }
        break;
    }
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div 
      className={`video-player relative bg-black rounded-2xl overflow-hidden shadow-2xl ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`Video player: ${videoData.title}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoData.src}
        poster={videoData.poster}
        className="w-full aspect-[9/16] object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        playsInline
        preload="metadata"
      >
        <track kind="captions" srcLang="en" label="English" default />
        Your browser does not support the video tag.
      </video>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Custom Controls */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 ${isPlaying ? 'group-hover:opacity-100' : 'opacity-100'}`}
      >
        {/* Play/Pause Button (Center) */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className={`w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 ${prefersReducedMotion ? '' : 'animate-pulse'}`}>
            {isPlaying ? (
              <Pause className="w-10 h-10 text-gray-900" />
            ) : (
              <Play className="w-10 h-10 text-gray-900 ml-1" />
            )}
          </div>
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Seek video"
            />
            <div className="flex justify-between text-white/80 text-sm mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" />
                )}
              </button>

              {/* Mute/Unmute */}
              <button
                onClick={toggleMute}
                className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>

              {/* Playback Speed */}
              <button
                onClick={changePlaybackSpeed}
                className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 text-sm font-medium"
                aria-label={`Playback speed: ${playbackSpeed}x`}
              >
                {playbackSpeed}x
              </button>

              {/* Replay */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    setCurrentTime(0);
                  }
                }}
                className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
                aria-label="Replay video"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
              aria-label="Fullscreen"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="p-6 bg-surface">
        {caption && (
          <p className="text-sm text-text-tertiary mb-2 italic">{caption}</p>
        )}
        <h3 className="text-xl font-bold text-text-main mb-2">{videoData.title}</h3>
        <p className="text-text-muted text-sm">{videoData.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
