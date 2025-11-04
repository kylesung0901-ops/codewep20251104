import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './firebase';

/**
 * Firebase Storage에서 이미지 URL을 가져오는 함수
 * @param path Storage 경로 (예: 'logos/logo.png')
 * @returns 이미지 다운로드 URL
 */
export async function getStorageImageUrl(path: string): Promise<string | null> {
  try {
    if (typeof window === 'undefined') {
      console.error('Firebase Storage can only be accessed on client side');
      return null;
    }

    if (!storage) {
      console.error('Firebase Storage is not initialized');
      return null;
    }

    // 여러 경로 시도
    const pathsToTry = [
      path,
      `logos/${path}`,
      `images/${path}`,
      `logo/${path}`,
      path.replace(/^logos\//, ''),
      path.replace(/^images\//, ''),
      // 파일 이름만으로 시도
      path.split('/').pop() || path,
    ];

    // 중복 제거
    const uniquePaths = [...new Set(pathsToTry)];

    for (const tryPath of uniquePaths) {
      try {
        console.log('Trying path:', tryPath);
        const storageRef = ref(storage, tryPath);
        const url = await getDownloadURL(storageRef);
        console.log('Successfully got image URL:', url);
        return url;
      } catch (error: any) {
        console.log(`Path "${tryPath}" failed:`, error.code);
        // 마지막 경로가 아니면 계속 시도
        continue;
      }
    }

    // 모든 경로 실패 시 루트에서 파일 검색
    console.log('Trying to find logo in root directory...');
    try {
      const rootRef = ref(storage, '');
      const result = await listAll(rootRef);
      
      // 모든 파일 검색
      const allFiles: string[] = [];
      
      // 루트 파일들
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

      console.log('Found files in Storage:', allFiles);
      
      // 로고 파일 찾기 (png, jpg, jpeg, svg 확장자)
      const logoFiles = allFiles.filter(file => {
        const lowerFile = file.toLowerCase();
        return lowerFile.includes('logo') || 
               lowerFile.includes('chatgpt') ||
               lowerFile.includes('image 2025') ||
               (lowerFile.endsWith('.png') || lowerFile.endsWith('.jpg') || lowerFile.endsWith('.jpeg') || lowerFile.endsWith('.svg'));
      });

      if (logoFiles.length > 0) {
        console.log('Found logo candidates:', logoFiles);
        // 첫 번째 로고 파일 사용
        const logoPath = logoFiles[0];
        const storageRef = ref(storage, logoPath);
        const url = await getDownloadURL(storageRef);
        console.log('Successfully got logo URL:', url);
        return url;
      }
    } catch (listError) {
      console.error('Error listing files:', listError);
    }

    return null;
  } catch (error: any) {
    console.error('Error getting image URL from Firebase Storage:', error);
    return null;
  }
}

/**
 * 로고 이미지 경로 (환경 변수 또는 기본값 사용)
 */
export const LOGO_IMAGE_PATH = process.env.NEXT_PUBLIC_LOGO_IMAGE_PATH || '';

