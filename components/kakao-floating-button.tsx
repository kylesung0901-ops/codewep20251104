'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStorageImageUrl } from '@/lib/firebase-storage';

const KAKAO_OPEN_CHAT_URL = 'https://open.kakao.com/o/sI6lIS0h';

export function KakaoFloatingButton() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadKakaoLogo = async () => {
      try {
        // Firebase Storage에서 카카오톡 로고 찾기
        const pathsToTry = [
          'kakao.jpg',
          'kakao.png',
          'kakao-logo.jpg',
          'kakao-logo.png',
          'kakaotalk.jpg',
          'kakaotalk.png',
          'logos/kakao.jpg',
          'logos/kakao.png',
          'images/kakao.jpg',
          'images/kakao.png',
        ];

        let foundUrl: string | null = null;

        // 여러 경로 시도
        for (const path of pathsToTry) {
          try {
            const url = await getStorageImageUrl(path);
            if (url) {
              foundUrl = url;
              break;
            }
          } catch (e) {
            continue;
          }
        }

        // 경로로 찾지 못하면 자동 검색
        if (!foundUrl) {
          try {
            const { ref, listAll, getDownloadURL } = await import('firebase/storage');
            const { storage } = await import('@/lib/firebase');
            
            if (storage) {
              const rootRef = ref(storage, '');
              const result = await listAll(rootRef);
              
              const allFiles: string[] = [];
              result.items.forEach(item => {
                allFiles.push(item.name);
              });

              // 폴더의 파일들도 검색
              for (const folderRef of result.prefixes) {
                try {
                  const folderList = await listAll(ref(storage, folderRef.name));
                  folderList.items.forEach(item => {
                    allFiles.push(`${folderRef.name}/${item.name}`);
                  });
                } catch (e) {
                  console.log('Error listing folder:', folderRef.name);
                }
              }

              // 카카오 관련 파일 찾기 (JPG 우선)
              const kakaoFiles = allFiles.filter(file => {
                const lowerFile = file.toLowerCase();
                return (lowerFile.includes('kakao') || lowerFile.includes('kakaotalk')) &&
                       (lowerFile.endsWith('.jpg') || lowerFile.endsWith('.jpeg') || lowerFile.endsWith('.png'));
              });

              // JPG 파일 우선 선택
              const jpgFiles = kakaoFiles.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
              const targetFile = jpgFiles.length > 0 ? jpgFiles[0] : kakaoFiles[0];

              if (targetFile) {
                const storageRef = ref(storage, targetFile);
                foundUrl = await getDownloadURL(storageRef);
              }
            }
          } catch (e) {
            console.error('Error searching for Kakao logo:', e);
          }
        }

        if (foundUrl) {
          setLogoUrl(foundUrl);
        } else {
          setError('Kakao logo not found');
        }
      } catch (err: any) {
        console.error('Failed to load Kakao logo:', err);
        setError(err.message || 'Failed to load logo');
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadKakaoLogo();
    }
  }, []);

  if (loading) {
    return (
      <Link
        href={KAKAO_OPEN_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-yellow-400 shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center animate-pulse"
        aria-label="카카오톡 오픈채팅"
      >
        <span className="text-white font-bold text-lg">K</span>
      </Link>
    );
  }

  if (error || !logoUrl) {
    // Fallback: 기본 카카오톡 아이콘
    return (
      <Link
        href={KAKAO_OPEN_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-yellow-400 shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center hover:scale-110"
        aria-label="카카오톡 오픈채팅"
      >
        <span className="text-white font-bold text-lg">K</span>
      </Link>
    );
  }

  return (
    <Link
      href={KAKAO_OPEN_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-all overflow-hidden bg-white"
      aria-label="카카오톡 오픈채팅"
    >
      <div className="relative h-full w-full">
        <Image
          src={logoUrl}
          alt="카카오톡 오픈채팅"
          fill
          className="object-contain p-2"
          unoptimized
          onError={(e) => {
            console.error('Kakao logo image load error:', e);
            setError('Image load failed');
          }}
        />
      </div>
    </Link>
  );
}

