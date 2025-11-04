import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WhyChooseUs from "@/components/why-choose-us"
import ConsultationForm from "@/components/consultation-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
