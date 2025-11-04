import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">개인정보처리방침</h1>
            <p className="text-muted-foreground">
              &lt; 한국벤처캐피탈협회 &gt;('www.vcs.go.kr'이하 '벤처투자종합포털')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고자 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">제1조(개인정보의 처리 목적)</h2>
            <p className="text-muted-foreground">
              &lt; 한국벤처캐피탈협회 &gt;('www.vcs.go.kr'이하 '벤처투자종합포털')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>

            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. 홈페이지 회원가입 및 관리</h3>
                <p className="text-muted-foreground mb-3">
                  회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  ※ 회원 가입과 관련하여 만14세 미만 아동의 개인정보를 수집하지 않습니다. 가입이 필요한 경우 협회 관리자를 통해서만 가입 가능하며, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인을 위해 개인정보를 처리할 수 있습니다. 만 14세 미만 아동의 개인정보를 수집할 때에는 아동에게 법정대리인의 성명, 연락처와 같이 최소한의 정보를 요구할 수 있으며, 다음 중 하나의 방법으로 적법한 법정대리인이 동의하였는지를 확인합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm ml-4">
                  <li>동의 내용이 적힌 서면을 법정대리인에게 직접 발급하거나, 우편 또는 팩스를 통하여 전달하고 법정대리인이 동의 내용에 대하여 서명날인 후 제출하도록 하는 방법</li>
                  <li>동의 내용이 적힌 전자우편을 발송하여 법정대리인으로부터 동의의 의사표시가 적힌 전자우편을 전송받는 방법</li>
                  <li>전화를 통하여 동의 내용을 법정대리인에게 알리고 동의를 얻거나 인터넷주소 등 동의 내용을 확인할 수 있는 방법을 안내하고 재차 전화 통화를 통하여 동의를 얻는 방법</li>
                  <li>그 밖에 위와 준하는 방법으로 법정대리인에게 동의 내용을 알리고 동의의 의사표시를 확인하는 방법</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. 민원사무 처리</h3>
                <p className="text-muted-foreground">
                  민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. 재화 또는 서비스 제공</h3>
                <p className="text-muted-foreground">
                  서비스 제공, 계약서·청구서·확인서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증을 목적으로 개인정보를 처리합니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4. 마케팅 및 광고에의 활용</h3>
                <p className="text-muted-foreground">
                  신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">제2조(개인정보의 처리 및 보유 기간)</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                1. &lt; 한국벤처캐피탈협회 &gt;은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <p className="text-muted-foreground">
                2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              </p>

              <div className="space-y-6 mt-6">
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-4">1. 홈페이지 회원가입 및 관리</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유근거:</span>
                      <span className="text-muted-foreground">정보주체의 동의</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유기간:</span>
                      <span className="text-muted-foreground">회원 탈퇴시까지</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">예외사유:</span>
                      <span className="text-muted-foreground">개인정보보호법 및 관련법령에 따른 예외사유</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-4">2. 민원사무 처리</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유근거:</span>
                      <span className="text-muted-foreground">정보주체의 동의</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유기간:</span>
                      <span className="text-muted-foreground">(이용자의 불만 또는 분쟁처리에 관한 기록) 3년</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">예외사유:</span>
                      <span className="text-muted-foreground">개인정보보호법 및 관련법령에 따른 예외사유</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-4">3. 벤처투자종합포털 서비스 제공</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유근거:</span>
                      <span className="text-muted-foreground">정보주체의 동의</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유기간:</span>
                      <span className="text-muted-foreground">회원 탈퇴시까지</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">예외사유:</span>
                      <span className="text-muted-foreground">개인정보보호법 및 관련법령에 따른 예외사유</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-4">4. 마케팅 및 광고에의 활용</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유근거:</span>
                      <span className="text-muted-foreground">정보주체의 동의</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">보유기간:</span>
                      <span className="text-muted-foreground">표시/광고에 관한 기록 : 6개월</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-medium text-foreground min-w-[100px]">예외사유:</span>
                      <span className="text-muted-foreground">개인정보보호법 및 관련법령에 따른 예외사유</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

