import React from 'react';

interface SimpleTextProps {
  text: string;
  className?: string;
  parentClassName?: string;
  // Remove all animation-related props that were in DecryptedText
  // Keep only essential props for styling
}

export default function SimpleText({
  text,
  className = '',
  parentClassName = '',
}: SimpleTextProps) {
  return (
    <span className={parentClassName}>
      <span className={className}>
        {text}
      </span>
    </span>
  );
}
