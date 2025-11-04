"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, LogOut, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthDialog } from "@/components/auth-dialog"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const { user, signOut, loading } = useAuth()

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="lg" />
            <span className="text-lg font-bold text-foreground">WeebStudio</span>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              서비스
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition">
              포트폴리오
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              소개
            </Link>
            
            {loading ? (
              <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.email}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={signOut}
                  className="gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAuthDialogOpen(true)}
              >
                로그인
              </Button>
            )}
            
            <button 
              onClick={scrollToConsultation}
              className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              상담 신청
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                서비스
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground">
                포트폴리오
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                소개
              </Link>
              
              {loading ? (
                <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
              ) : user ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{user.email}</span>
                  </div>
                  <Button
                    variant="outline"
                    onClick={signOut}
                    className="w-full gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    로그아웃
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => {
                    setAuthDialogOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  로그인
                </Button>
              )}
              
              <button 
                onClick={() => {
                  scrollToConsultation()
                  setIsOpen(false)
                }}
                className="w-full rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
              >
                상담 신청
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </header>
  )
}
