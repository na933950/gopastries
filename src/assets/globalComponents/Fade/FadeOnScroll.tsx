import React, { useRef, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Fade = ({ children, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (fadeRef.current) {
      const elementTop = fadeRef.current.getBoundingClientRect().top;
      const containerTop = window.innerHeight * 0.8; // Adjust this value for the desired trigger point
      setIsVisible(elementTop < containerTop);
      fadeRef.current.style.transform = elementTop < containerTop ? 'none' : 'translateY(20px)'; // Slide-up offset: 20px
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={fadeRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Fade;
