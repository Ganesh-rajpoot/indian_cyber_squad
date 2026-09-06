'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  lines: string[];
  speed?: number;
}

export function TypingEffect({ lines, speed = 50 }: TypingEffectProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const timer = setTimeout(() => {
      const currentLine = lines[currentLineIndex];
      if (currentCharIndex < currentLine.length) {
        const newLines = [...displayedLines];
        if (newLines.length <= currentLineIndex) {
          newLines.push('');
        }
        newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
        setDisplayedLines(newLines);
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines, displayedLines, speed]);

  return (
    <div className="space-y-0.5">
      {displayedLines.map((line, index) => (
        <div key={index} className="typing-cursor">
          {line}
          {index === displayedLines.length - 1 && currentLineIndex < lines.length && (
            <span className="animate-pulse">_</span>
          )}
        </div>
      ))}
    </div>
  );
}