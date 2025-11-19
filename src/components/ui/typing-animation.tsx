import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  className = "",
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === fullText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return fullText.substring(0, prev.length - 1);
          } else {
            return fullText.substring(0, prev.length + 1);
          }
        });
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <span className="inline-block">
      <span className={className}>
        {currentText}
        <span className="animate-pulse ml-1">|</span>
      </span>
    </span>
  );
}
