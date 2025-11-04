export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            당신의 비즈니스를 위한{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              완벽한 웹사이트
            </span>
          </h1>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            스타트업과 중소기업의 성장을 돕는 전문 웹 에이전시입니다. 디자인부터 개발까지 모든 것을 책임집니다.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition">
              시작하기
            </button>
            <button className="rounded-lg border border-border px-8 py-3 font-semibold text-foreground hover:bg-secondary transition">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
