import Image from "next/image"

const projects = [
  {
    title: "TechStart 솔루션",
    description: "핀테크 스타트업을 위한 현대적인 웹 플랫폼",
    image: "/fintech-dashboard-modern-design.jpg",
    tag: "스타트업",
  },
  {
    title: "이커머스 플랫폼",
    description: "전자상거래를 위한 완전한 솔루션",
    image: "/ecommerce-store-modern-website.jpg",
    tag: "중소기업",
  },
  {
    title: "SaaS 관리 대시보드",
    description: "기업용 데이터 관리 시스템",
    image: "/saas-dashboard-analytics-platform.jpg",
    tag: "엔터프라이즈",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">최근 포트폴리오</h2>
            <p className="text-lg text-muted-foreground">우리가 만든 성공적인 프로젝트들을 살펴보세요</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg border border-border transition hover:border-primary/50"
              >
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="bg-card p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {project.tag}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
