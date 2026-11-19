import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  // Controls the outer box size (e.g. "w-full lg:w-1/2 h-96").
  // The image itself stays within this box at its own aspect ratio.
  className?: string;
}

export default function ImageCarousel({ images, alt = "", className = "" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Reset the loading state whenever we move to a different image
  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [index, images]);

  // No screenshots yet for this project -> show an explicit "coming soon"
  // placeholder instead of a broken image or an empty box.
  if (!images.length) {
    return (
      <div
        className={`
          flex flex-col items-center justify-center gap-2
          border border-dashed border-white/20
          bg-black/40 text-white/40 text-sm
          ${className}
        `}
      >
        <span className="text-2xl">📷</span>
        <span>Screenshot coming soon</span>
      </div>
    );
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className={`
        group relative overflow-hidden
        flex items-center justify-center
        bg-black/40
        ${className}
      `}
    >
      {/* Spinner shown until the current image finishes loading */}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
      )}

      {failed ? (
        <span className="text-white/40 text-sm">Image failed to load</span>
      ) : (
        <img
          key={images[index]}
          src={images[index]}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`
            max-w-full max-h-full object-contain
            transition-opacity duration-300
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      )}

      {images.length > 1 && (
        <>
          {/* Left hover zone */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="
              absolute left-0 top-0 h-full w-1/4
              flex items-center justify-start pl-3
              text-white text-2xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              bg-gradient-to-r from-black/40 to-transparent
              cursor-pointer
            "
          >
            ‹
          </button>

          {/* Right hover zone */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="
              absolute right-0 top-0 h-full w-1/4
              flex items-center justify-end pr-3
              text-white text-2xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              bg-gradient-to-l from-black/40 to-transparent
              cursor-pointer
            "
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
