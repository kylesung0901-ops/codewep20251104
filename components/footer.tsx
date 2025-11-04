"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { Logo } from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="sm" />
              <span className="font-bold text-foreground">WeebStudio</span>
            </div>
            <p className="text-sm text-muted-foreground">스타트업과 중소기업의 성장을 돕는 웹 에이전시</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  웹사이트 제작
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  UI/UX 디자인
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  모바일 앱 개발
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                info@weebstudio.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                010-1234-5678
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                서울, 대한민국
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-sm text-muted-foreground">© 2025 WeebStudio. 모든 권리 보유.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* 정책 링크 */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-foreground hover:text-primary transition"
              >
                개인정보처리방침
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition"
              >
                서비스 이용약관
              </Link>
              <Link 
                href="/email-collection-policy" 
                className="text-muted-foreground hover:text-foreground transition"
              >
                이메일무단수집거부
              </Link>
              <Link 
                href="/copyright-policy" 
                className="text-muted-foreground hover:text-foreground transition"
              >
                저작권보호방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
