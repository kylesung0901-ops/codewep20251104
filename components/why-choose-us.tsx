import { CheckCircle2 } from "lucide-react"

const reasons = [
  "10년 이상의 웹 개발 경험",
  "50+ 성공적인 프로젝트 완료",
  "반응형 디자인 전문가",
  "24/7 기술 지원 제공",
  "최신 기술 스택 사용",
  "투명한 가격 정책",
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-secondary/50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">왜 우리를 선택해야 할까요?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                WeebStudio는 단순한 웹 개발 회사가 아닙니다. 우리는 당신의 비즈니스 파트너입니다.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <div className="relative rounded-lg border border-border bg-card p-8 space-y-6">
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground">완료된 프로젝트</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">95%</div>
                <p className="text-muted-foreground">고객 만족도</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">10+</div>
                <p className="text-muted-foreground">전문가 팀원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
