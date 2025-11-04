'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ConsultationForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.email?.split('@')[0] || '',
    email: user?.email || '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!db) {
        throw new Error('Firebase가 초기화되지 않았습니다.');
      }

      // Firestore에 상담 신청 데이터 저장
      await addDoc(collection(db, 'consultations'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        userId: user?.uid || null,
        createdAt: serverTimestamp(),
        status: 'pending',
      });

      setSuccess(true);
      
      // 폼 초기화
      setFormData({
        name: user?.email?.split('@')[0] || '',
        email: user?.email || '',
        phone: '',
        message: '',
      });

      // 3초 후 성공 메시지 제거
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err: any) {
      console.error('상담 신청 오류:', err);
      setError('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation-form" className="bg-gradient-to-r from-primary/20 via-secondary to-accent/20 py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">상담 신청</h2>
          <p className="text-lg text-muted-foreground">
            무료 상담을 신청하시면 빠른 시일 내에 연락드리겠습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg border p-6 sm:p-8">
          <div className="space-y-2">
            <Label htmlFor="name">성함 *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">전화번호 *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">상담내용 *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="상담 받고 싶은 내용을 자세히 입력해주세요."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
              rows={6}
              className="resize-none"
            />
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
              상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={loading}
          >
            {loading ? '신청 중...' : '신청하기'}
          </Button>
        </form>
      </div>
    </section>
  );
}

