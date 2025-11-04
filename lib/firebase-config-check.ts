/**
 * Firebase 설정 확인 유틸리티
 * 개발 환경에서 Firebase 설정이 올바르게 로드되는지 확인할 수 있습니다.
 */

export const checkFirebaseConfig = () => {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const missingKeys: string[] = [];
  
  Object.entries(config).forEach(([key, value]) => {
    if (!value) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length > 0) {
    console.error('⚠️ Firebase 설정 누락:', missingKeys);
    return false;
  }

  console.log('✅ Firebase 설정이 올바르게 로드되었습니다.');
  console.log('API Key:', config.apiKey?.substring(0, 10) + '...');
  console.log('Project ID:', config.projectId);
  
  return true;
};

// 예상되는 API 키 확인
export const verifyApiKey = (expectedKey: string) => {
  const actualKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  
  if (actualKey === expectedKey) {
    console.log('✅ API 키가 올바르게 설정되었습니다.');
    return true;
  } else {
    console.error('❌ API 키가 일치하지 않습니다.');
    console.log('예상:', expectedKey.substring(0, 10) + '...');
    console.log('실제:', actualKey?.substring(0, 10) + '...');
    return false;
  }
};

