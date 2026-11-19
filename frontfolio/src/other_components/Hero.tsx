import { useEffect, useRef, useState } from "react";
import { heroPhrases } from "./heroPhrases";

function getRandomPhrase(exclude?: string) {
  if (heroPhrases.length <= 1) return heroPhrases[0];
  let next = heroPhrases[Math.floor(Math.random() * heroPhrases.length)];
  // avoid picking the same phrase twice in a row
  while (next === exclude) {
    next = heroPhrases[Math.floor(Math.random() * heroPhrases.length)];
  }
  return next;
}

export default function Hero() {
  const [phrase, setPhrase] = useState(() => getRandomPhrase());
  const wasScrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) {
        wasScrolledRef.current = true;
      } else if (wasScrolledRef.current) {
        // Just scrolled back to the top -> swap the phrase
        wasScrolledRef.current = false;
        setPhrase((current) => getRandomPhrase(current));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="hero" className={`
      w-full h-screen relative 
      overflow-hidden 
    `} >

      {/* Background image */}
      <img
        src="images/image.png"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional subtle dark overlay for readability (safe to keep) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Big centered phrase */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-16">
        <h1
          key={phrase} // re-mount on change so a fade-in can replay if you add one
          className="hero-phrase text-center text-white
                     text-4xl sm:text-4xl lg:text-6xl
                     uppercase tracking-wide leading-[1.05]
                     max-w-6xl drop-shadow-lg"
        >
          {phrase}
        </h1>
      </div>

    </div>
  );
}
