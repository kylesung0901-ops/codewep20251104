'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { checkFirebaseConfig, verifyApiKey } from '@/lib/firebase-config-check';

/**
 * Firebase 연결 테스트 컴포넌트
 * 개발 환경에서 Firebase 연결 상태를 확인할 수 있습니다.
 */
export function FirebaseTest() {
  const [isConnected, setIsConnected] = useState(false);
  const [status, setStatus] = useState<string>('확인 중...');
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    const checkConnection = () => {
      try {
        // 환경 변수 확인
        const configValid = checkFirebaseConfig();
        const apiKeyValid = verifyApiKey('AIzaSyCfLE8MfaUm3CxaacPUdYXkZfu9pieglMU');
        
        // Firebase 인스턴스 확인
        if (auth && db) {
          setIsConnected(true);
          setStatus('✅ Firebase 연결 성공!');
          setApiKey(process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.substring(0, 15) + '...' || '');
        } else {
          setIsConnected(false);
          setStatus('❌ Firebase 인스턴스를 찾을 수 없습니다.');
        }
      } catch (error) {
        setIsConnected(false);
        setStatus(`❌ 오류: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="text-lg font-semibold mb-2">Firebase 연결 상태</h3>
      <div className="space-y-2">
        <p className={isConnected ? 'text-green-600' : 'text-red-600'}>
          {status}
        </p>
        {apiKey && (
          <p className="text-sm text-muted-foreground">
            API Key: {apiKey}
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'N/A'}
        </p>
      </div>
    </div>
  );
}

