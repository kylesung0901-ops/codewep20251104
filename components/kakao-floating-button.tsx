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
        const { ref, listAll, getDownloadURL } = await import('firebase/storage');
        const { storage } = await import('@/lib/firebase');
        
        if (!storage) {
          console.error('Firebase Storage is not initialized');
          setError('Firebase Storage not initialized');
          setLoading(false);
          return;
        }

        console.log('Starting to search for Kakao logo in Firebase Storage...');

        // 재귀적으로 모든 파일 검색하는 함수
        const getAllFiles = async (path: string = ''): Promise<string[]> => {
          const allFiles: string[] = [];
          try {
            const pathRef = ref(storage, path);
            const result = await listAll(pathRef);
            
            // 현재 경로의 파일들 추가
            result.items.forEach(item => {
              const fullPath = path ? `${path}/${item.name}` : item.name;
              allFiles.push(fullPath);
            });

            // 하위 폴더들도 재귀적으로 검색
            for (const folderRef of result.prefixes) {
              const folderPath = path ? `${path}/${folderRef.name}` : folderRef.name;
              const folderFiles = await getAllFiles(folderPath);
              allFiles.push(...folderFiles);
            }
          } catch (e) {
            console.log('Error listing path:', path, e);
          }
          return allFiles;
        };

        // Firebase Storage에서 카카오톡 로고 찾기
        const pathsToTry = [
          'kakao.jpg',
          'kakao.jpeg',
          'kakao.png',
          'kakao-logo.jpg',
          'kakao-logo.jpeg',
          'kakao-logo.png',
          'kakaotalk.jpg',
          'kakaotalk.jpeg',
          'kakaotalk.png',
          'logos/kakao.jpg',
          'logos/kakao.jpeg',
          'logos/kakao.png',
          'images/kakao.jpg',
          'images/kakao.jpeg',
          'images/kakao.png',
        ];

        let foundUrl: string | null = null;

        // 여러 경로 시도
        for (const path of pathsToTry) {
          try {
            const storageRef = ref(storage, path);
            const url = await getDownloadURL(storageRef);
            if (url) {
              foundUrl = url;
              console.log('✅ Found Kakao logo at path:', path);
              break;
            }
          } catch (e) {
            continue;
          }
        }

        // 경로로 찾지 못하면 전체 Storage 검색
        if (!foundUrl) {
          console.log('🔍 Searching all files in Firebase Storage...');
          try {
            const allFiles = await getAllFiles();
            console.log('📁 Total files found in Storage:', allFiles.length);
            console.log('📋 All files:', allFiles);

            // 1순위: 카카오 관련 JPG 파일
            const kakaoJpgFiles = allFiles.filter(file => {
              const lowerFile = file.toLowerCase();
              const fileName = file.split('/').pop()?.toLowerCase() || '';
              return (lowerFile.includes('kakao') || 
                      lowerFile.includes('kakaotalk') ||
                      fileName.includes('kakao') ||
                      fileName.includes('kakaotalk')) &&
                     (lowerFile.endsWith('.jpg') || lowerFile.endsWith('.jpeg'));
            });

            // 2순위: 카카오 관련 PNG 파일
            const kakaoPngFiles = allFiles.filter(file => {
              const lowerFile = file.toLowerCase();
              const fileName = file.split('/').pop()?.toLowerCase() || '';
              return (lowerFile.includes('kakao') || 
                      lowerFile.includes('kakaotalk') ||
                      fileName.includes('kakao') ||
                      fileName.includes('kakaotalk')) &&
                     lowerFile.endsWith('.png');
            });

            // 3순위: 모든 JPG 파일 (카카오 키워드 없어도)
            const allJpgFiles = allFiles.filter(file => {
              const lower = file.toLowerCase();
              return lower.endsWith('.jpg') || lower.endsWith('.jpeg');
            });

            console.log('🎯 Kakao JPG files:', kakaoJpgFiles);
            console.log('🎯 Kakao PNG files:', kakaoPngFiles);
            console.log('📸 All JPG files:', allJpgFiles);

            // 우선순위에 따라 파일 선택
            const targetFile = kakaoJpgFiles[0] || kakaoPngFiles[0] || allJpgFiles[0];

            if (targetFile) {
              console.log('✅ Using file:', targetFile);
              const storageRef = ref(storage, targetFile);
              foundUrl = await getDownloadURL(storageRef);
              console.log('✅ Successfully loaded image URL');
            } else {
              console.warn('⚠️ No JPG files found in Firebase Storage');
            }
          } catch (e) {
            console.error('❌ Error searching for Kakao logo:', e);
          }
        }

        if (foundUrl) {
          console.log('✅ Kakao logo loaded successfully!');
          setLogoUrl(foundUrl);
        } else {
          console.warn('⚠️ Kakao logo not found in Firebase Storage');
          setError('Kakao logo not found');
        }
      } catch (err: any) {
        console.error('❌ Failed to load Kakao logo:', err);
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

