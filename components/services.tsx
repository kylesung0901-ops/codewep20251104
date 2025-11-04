import { Code2, Palette, Zap, BarChart3, Smartphone, Shield } from "lucide-react"

const services = [
  {
    title: "웹사이트 제작",
    description: "반응형 설계로 모든 기기에서 완벽하게 작동하는 웹사이트를 만들어드립니다.",
    icon: Code2,
  },
  {
    title: "UI/UX 디자인",
    description: "사용자 중심의 아름다운 디자인으로 더 높은 전환율을 달성합니다.",
    icon: Palette,
  },
  {
    title: "웹 최적화",
    description: "검색 엔진 최적화와 성능 개선으로 더 많은 방문객을 유입합니다.",
    icon: Zap,
  },
  {
    title: "분석 및 리포팅",
    description: "데이터 기반의 인사이트로 지속적인 개선을 도와드립니다.",
    icon: BarChart3,
  },
  {
    title: "모바일 앱 개발",
    description: "iOS와 Android 모두에서 동작하는 모바일 애플리케이션 개발.",
    icon: Smartphone,
  },
  {
    title: "보안 및 유지보수",
    description: "최고 수준의 보안으로 소중한 데이터를 보호하고 지속적으로 관리합니다.",
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">우리의 서비스</h2>
            <p className="text-lg text-muted-foreground">당신의 비즈니스 목표를 달성하기 위한 종합 웹 솔루션</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="rounded-lg border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg"
                >
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
