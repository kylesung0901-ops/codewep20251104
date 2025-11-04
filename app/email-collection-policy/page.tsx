import Header from '@/components/header';
import Footer from '@/components/footer';

export default function EmailCollectionPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">이메일무단수집거부</h1>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">전자우편주소, 전화번호 무단수집 거부</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                본 사이트에 게시된 전자우편주소(이메일), 전화번호를 자동 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
              </p>
              <p>
                누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소, 전화번호를 수집하여서는 아니되며 이를 위반시 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 74조 제 1항 제 4호에 의해 1년 이하의 징역 또는 1천만원 이하의 벌금에 처할 수 있음을 유념하시기 바랍니다.
              </p>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">법적 근거</h3>
              <p className="text-muted-foreground">
                정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 74조 제 1항 제 4호에 따라 전자우편주소, 전화번호 등의 무단 수집을 금지하고 있으며, 위반 시 처벌받을 수 있습니다.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

