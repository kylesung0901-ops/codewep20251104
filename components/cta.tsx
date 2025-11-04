export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary/20 via-secondary to-accent/20 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">지금 바로 시작하세요</h2>
        <p className="text-lg text-muted-foreground">
          당신의 비즈니스를 성장시킬 준비가 되셨나요? 지금 바로 무료 상담을 신청하세요.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition text-lg">
            무료 상담 신청
          </button>
          <button className="rounded-lg border border-primary px-8 py-4 font-semibold text-foreground hover:bg-primary/10 transition text-lg">
            포트폴리오 다시 보기
          </button>
        </div>
      </div>
    </section>
  )
}
