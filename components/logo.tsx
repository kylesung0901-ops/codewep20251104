'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getStorageImageUrl, LOGO_IMAGE_PATH } from '@/lib/firebase-storage';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  const sizeClass = sizeClasses[size];

  useEffect(() => {
    const loadLogo = async () => {
      try {
        // 환경 변수에서 경로 가져오기, 없으면 빈 문자열로 자동 검색
        const path = LOGO_IMAGE_PATH || '';
        console.log('Loading logo, path:', path || '(auto-search)');
        
        const url = await getStorageImageUrl(path);
        if (url) {
          console.log('Logo loaded successfully:', url);
          setLogoUrl(url);
        } else {
          console.warn('Logo URL is null, using fallback');
          setError('Failed to load logo');
        }
      } catch (err: any) {
        console.error('Failed to load logo:', err);
        setError(err.message || 'Failed to load logo');
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadLogo();
    }
  }, []);

  if (loading) {
    return (
      <div className={`${sizeClass} rounded-lg bg-primary animate-pulse flex-shrink-0 ${className}`} />
    );
  }

  if (error) {
    console.error('Logo error:', error);
    // Fallback: 로고를 불러올 수 없는 경우 기본 색상 박스
    return (
      <div className={`${sizeClass} rounded-lg bg-primary flex-shrink-0 ${className}`} />
    );
  }

  if (logoUrl) {
    return (
      <div className={`relative ${sizeClass} flex-shrink-0 ${className}`}>
        <Image
          src={logoUrl}
          alt="Logo"
          fill
          className="object-contain rounded-lg"
          priority
          unoptimized
          onError={(e) => {
            console.error('Image load error:', e);
            setError('Image load failed');
          }}
        />
      </div>
    );
  }

  // Fallback: 로고를 불러올 수 없는 경우 기본 색상 박스
  return (
    <div className={`${sizeClass} rounded-lg bg-primary flex-shrink-0 ${className}`} />
  );
}

