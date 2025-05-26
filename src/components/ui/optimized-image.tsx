
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  const imgProps = {
    src,
    alt,
    className,
    loading: priority ? 'eager' as const : loading,
    decoding: 'async' as const,
    ...(width && { width }),
    ...(height && { height })
  };

  return <img {...imgProps} />;
};

export default OptimizedImage;
