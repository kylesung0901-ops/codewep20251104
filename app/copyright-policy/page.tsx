import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CopyrightPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">저작권보호방침</h1>
            <p className="text-muted-foreground">
              한국벤처캐피탈협회(이하 &quot;협회&quot;) 벤처투자종합포털(이하 &quot;포털&quot;) 저작권 보호방침의 목적은 포털을 통하여 제공되는 정보가 무단으로 사용되거나 임의로 가공 또는 변조되어 사용됨으로써 정보 제공자 및 정보 이용자에게 피해를 주는 것을 방지하기 위함입니다. 포털에서 제공되는 정보는 저작권법의 보호를 받으며, 동 정보의 저작권 보호방침은 아래와 같습니다.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">저작권보호방침</h2>
            
            <div className="space-y-6 mt-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">1. 포털 정보의 저작권 보호</h3>
                <p className="text-muted-foreground">
                  포털을 통하여 제공하는 정보는 저작권법에 의하여 보호받는 저작물로 그 저작권은 한국벤처캐피탈협회에 있습니다. 따라서 포털의 정보에 대한 무단 복제 및 배포는 원칙적으로 금지됩니다.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">2. 수익 목적 이용 시 사전 협의</h3>
                <p className="text-muted-foreground">
                  포털을 통하여 제공하는 정보를 이용하여 수익을 얻거나 이에 상응하는 혜택을 누리고자 할 경우 협회와 사전에 별도의 협의하거나 협회의 허락을 얻어야 하며 협의 또는 허락을 얻어 해당 정보의 내용을 게재하는 경우에도 출처가 포털임을 밝혀야 합니다.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">3. 정당한 범위 내 인용</h3>
                <p className="text-muted-foreground">
                  보도, 비평, 교육, 연구 등을 위하여 정당한 범위 안에서 공정한 관행에 합치되게 포털의 정보들을 인용할 수 있습니다. 또한, 포털의 자료를 영리를 목적으로 하지 아니하고 개인적으로 이용하거나 가정 및 이에 준하는 범위 안에서는 이용이 가능합니다.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">4. 무단 변경 금지</h3>
                <p className="text-muted-foreground">
                  포털을 통하여 제공한 정보를 적법한 절차에 따라 다른 인터넷 웹사이트에서 게재하는 경우에도 단순한 오류 정정 이외의 내용을 무단 변경하는 것은 금지되며 이를 위반할 때에는 형사처분을 받을 수 있습니다.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">5. 무단 복제·배포 시 법적 처벌</h3>
                <p className="text-muted-foreground">
                  포털의 자료들을 무단 복제, 배포하는 경우에는 저작권법 제136조의 저작재산권 침해죄에 해당됩니다.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">법적 근거</h3>
              <p className="text-muted-foreground mb-3">
                본 저작권보호방침은 저작권법에 근거하여 수립되었으며, 저작권 침해 시 저작권법 제136조에 따라 처벌받을 수 있습니다.
              </p>
              <p className="text-muted-foreground text-sm">
                저작권법 제136조(침해죄) 저작재산권, 그 밖에 이 법에 따라 보호되는 재산적 권리를 침해한 자는 5년 이하의 징역 또는 5천만원 이하의 벌금에 처하거나 이를 병과(倂科)할 수 있다.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

