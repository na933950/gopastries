import React from 'react'
import FadeOnPageLoad from './FadeOnPageLoad';
import FadeOnScroll from "./FadeOnScroll";

interface Props {
    children: React.ReactNode;
    onPageLoad?: boolean;
    delay?: number;
    className?: string;
}

const Fade = ( {children, onPageLoad = false, delay, className}: Props ) => {
  return (
    onPageLoad? <FadeOnPageLoad className={className} delay={delay}>{children}</FadeOnPageLoad> : <FadeOnScroll>{children}</FadeOnScroll>
  )
}

export default Fade