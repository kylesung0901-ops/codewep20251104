import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">서비스 이용약관</h1>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. 목적</h2>
            <p className="text-muted-foreground">
              이 약관은 중소벤처기업부와 한국벤처캐피탈협회가 운영하는 벤처투자종합포탈의 서비스를 이용함에 있어 이용조건 및 절차, 벤처투자종합포탈과 이용자간의 권리 및 의무에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. 약관의 효력 및 변경</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 포털은 귀하가 본 약관 내용에 동의하는 경우, 포털의 서비스 제공 행위 및 귀하의 서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.</p>
              <p>2. 약관의 내용은 별도의 통지 없이 수시로 갱신될 수 있고, 이용자는 언제든지 포털에서 약관의 최신 내용을 확인할 수 있습니다.</p>
              <p>3. 이 약관은 포털에 그 내용을 공지함으로써 효력이 발생하며, 변경된 약관에 동의하지 아니하는 경우, 이용자는 포털 회원에서 탈퇴할 수 있으며, 계속 사용의 경우는 변경된 약관에 동의하는 것으로 간주됩니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. 약관 외 준칙</h2>
            <p className="text-muted-foreground">
              이 약관에 명시되지 않은 사항은 관계법령에 따릅니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. 용어의 정의</h2>
            <p className="text-muted-foreground mb-4">
              이 약관에서 사용하는 용어의 의미는 다음 각 호와 같습니다.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>1. &quot;서비스&quot;란 포털에서 제공하는 제반정보(벤처투자매칭, 벤처투자가이드, 정보서비스, 뉴스/자료실, 커뮤니티 등)를 말합니다.</li>
              <li>2. &quot;회원&quot;이란 포털에 기업정보를 등록한 기업회원, 개인정보를 제공한 개인회원으로 회원가입을 한 자로서, 포털이 제공하는 모든 서비스를 이용할 수 있는 주체를 말합니다.</li>
              <li>3. &quot;비회원&quot;이란 회원으로 가입하지 않고 포털이 제공하는 서비스를 이용하는 자를 말합니다.</li>
              <li>4. &quot;이용자&quot;란 포털이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
              <li>5. &quot;가입&quot;이란 포털이 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위를 말합니다.</li>
              <li>6. &quot;탈퇴&quot;란 회원이 이용계약을 종료시키는 행위를 말합니다.</li>
              <li>7. 본 약관에서 정의하지 않은 용어는 관계법령 및 개별서비스에 대한 별도 약관 및 서비스별 안내에서 정하는 바에 의합니다.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. 회원가입</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 이용자가 회원가입을 신청하는 경우 포털이 정한 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 효력을 발생합니다.</p>
              <p>2. 포털은 5의 1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 인정합니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>다른 사람의 명의를 사용하여 신청한 경우</li>
                <li>허위로 가입신청을 한 경우</li>
                <li>중복으로 신청하여 이용하는 경우</li>
                <li>다른 사람의 포털 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 한 경우</li>
                <li>공공질서 또는 미풍양속을 저해할 목적으로 신청하였을 경우</li>
                <li>이 약관을 위반하거나 벤처투자종합포탈의 운영에 현저히 지장이 있다고 판단되는 경우</li>
                <li>기타 포털 관리자가 필요하다고 인정하는 경우(이용신청요건 미비 등)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. 회원정보의 변경</h2>
            <p className="text-muted-foreground">
              회원은 회원가입 시 기재한 개인정보가 변경되었을 경우 온라인으로 직접 수정하거나 관리자에게 수정을 요구할 수 있습니다. 이때 변경하지 않은 정보로 인해 발생되는 문제에 대한 책임은 회원에게 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. 회원 탈퇴 및 취소</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 이용자가 회원탈퇴를 하고자 하는 때에는 벤처투자종합포털의 회원탈퇴 절차에 의하거나 전화나 전자메일 등을 통하여 신청을 해야 합니다.</p>
              <p>2. 회원에게 다음 각 항에 해당하는 사유가 발생하였을 경우 포털은 사전 통보 없이 회원가입을 취소할 수 있습니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>타인 회원ID 및 비밀번호를 도용한 경우</li>
                <li>타인에게 해를 입히거나 입힐 수 있는 행위를 하는 경우</li>
                <li>사행행위 조장, 저속·음란물 게시 등 공공질서 또는 미풍양속을 저해하는 행위를 계획 또는 실행한 경우</li>
                <li>부당한 방법으로 정보통신망에 의하여 처리, 보관, 전송되는 타인의 정보를 훼손하거나 타인의 개인정보를 수집, 저장, 침해, 도용 또는 누설하는 행위를 하는경우</li>
                <li>불필요하거나 승인되지 않은 광고, 판촉물 게재, 정크메일, 스팸메일을 발송하는 경우</li>
                <li>수신자의 명시적인 수신거부 의사에 반하는 광고성 전자우편을 전송하는 행위를 하는 경우</li>
                <li>관련 법률에서 금지하는 행위 또는 이 약관을 위반하는 행위를 하는 경우</li>
                <li>기타 포털 관리자가 필요하다고 인정하는 경우</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. 서비스 이용시간</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 관리자의 직접적인 지원을 받지 않는 서비스의 이용시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중(1일 24시간) 이용할 수 있습니다. 다만, 천재지변, 시스템점검 등의 사유로 서비스를 중단할 수 있습니다.</p>
              <p>2. 8의 1항의 이용시간은 정기점검 등의 필요로 인하여 포털이 정한 날 또는 시간은 예외로 합니다.</p>
              <p>3. 관리자가 직접 제공하는 서비스는 포털 근무시간(평일 9시 - 18시)을 원칙으로 합니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. 서비스 제공의 제한 및 중단</h2>
            <p className="text-muted-foreground mb-3">
              1. 벤처투자종합포탈은 다음의 경우에는 서비스 제공을 일부 또는 전부를 제한하거나 중단할 수 있습니다. 서비스 중단으로 발생되는 문제에 대하여 벤처투자종합포탈은 책임을 지지 않습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>포털의 관리 범위 외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우</li>
              <li>천재지변, 국가 비상사태, 정부예산의 변경 등 기타 불가항력의 사유가 발생하거나 발생할 우려가 있는 경우</li>
              <li>서비스용 설비의 보수, 공사 또는 장애로 인한 경우</li>
              <li>서비스 이용의 폭주 등으로 이용에 지장이 있을 경우</li>
              <li>기간통신사업자가 전기통신서비스를 중지했을 경우</li>
              <li>포털이 정상적인 서비스 제공의 어려움으로 인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지 고지 후 서비스를 중지하는 경우(부득이한 사정이 있을 경우 사전 고지기간은 감축되거나 생략될 수 있음)</li>
              <li>기타 포털 관리자가 필요하다고 인정하는 경우</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. 서비스의 변경 및 회원 서비스</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 이용자에 대한 서비스의 내용은 벤처투자종합포탈의 정책에 의해 결정되며 변경 또는 중단될 수 있습니다.</p>
              <p>2. 벤처투자종합포탈은 이 약관을 준수하는 이용자 모두에게 모든 정보와 서비스를 무료로 제공하는 것을 원칙으로 하고 있습니다. 다만 일부 서비스는 회원가입을 한 회원에 한하여 제공되는 서비스가 있습니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>글쓰기 권한 : 벤처투자종합포탈에 운영하는 게시판은 회원에 한해 글쓰기 및 상담에 대한 권한이 주어집니다.</li>
                <li>마이페이지 : 포털이 제공하는 정보 중 개인적으로 별도 보관할 필요가 있는 정보를 저장할 수 있도록 지원하는 서비스입니다.</li>
                <li>커뮤니티, 벤처투자Talk : 포털이 제공하는 커뮤니티 및 SNS로 회원에 한해 가입 및 운영이 가능한 서비스입니다.</li>
                <li>벤처투자마트: 한국벤처캐피탈협회, 한국엔젤투자협회와 함께 포털이 제공하는 벤처투자매칭 서비스입니다.</li>
                <li>VC 경력확인: 근무경력 확인, Track Record는 본인인증을 통해 회원가입한 이용자를 대상으로 하는 서비스입니다.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. 광고의 게재</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 벤처투자종합포탈은 서비스의 운영 및 정보제공과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있습니다.</p>
              <p>2. 이용자가 서비스상에 게재되어 있거나 서비스를 통한 광고주의 판촉활동에 참여하거나 또는 거래를 하는 것은 전적으로 이용자와 광고주간의 문제입니다. 따라서, 만약 이용자와 광고주간에 문제가 발생할 경우에도 이용자와 광고주가 직접 해결하셔야 하며, 이와 관련하여 포털은 어떠한 책임도 지지 않습니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12. 컨텐츠</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 컨텐츠의 정확성, 안정성, 또는 품질 등과 관련하여 의문사항이 있으시면 직접 컨텐츠를 만든 자에게 문의하시기 바랍니다. 벤처투자종합포털은 컨텐츠의 정확성, 안전성 등과 관련하여 책임을 지지 않습니다.</p>
              <p>2. 이용자가 게시한 컨텐츠의 내용에 대한 권리와 책임은 해당 이용자에게 있습니다.</p>
              <p>3. 포털은 이용자가 게시한 컨텐츠를 사전 통지 없이 포털 내에서 편집, 이동할 수 있는 권리를 보유하며, 비상업적 목적으로 이용자의 컨텐츠를 활용할 수 있습니다.</p>
              <p>4. 다음의 경우 사전 통지 없이 컨텐츠를 삭제할 수 있습니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>타인에게 해를 입히거나 입힐 수 있는 내용을 포함한 경우</li>
                <li>불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우</li>
                <li>다른 이용자 또는 제3자를 비방하거나 명예를 손상시키는 내용인 경우</li>
                <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                <li>범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
                <li>제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                <li>관련 법률에서 금지하는 행위 또는 본 서비스의 약관의 내용에 위배되는 경우</li>
                <li>기타 적절하지 못한 내용을 담고 있는 등 벤처투자종합포탈 관리자가 필요하다고 인정하는 경우</li>
              </ul>
              <p>5. 이용자의 게시물 및 컨텐츠가 타인의 저작권을 침해함으로써 발생하는 민, 형사상의 책임은 전적으로 이용자가 부담하여야 합니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">13. 링크</h2>
            <p className="text-muted-foreground">
              벤처투자종합포탈은 제3자의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 벤처투자종합포탈은 그러한 사이트 및 자료에 대한 통제권이 없으므로 벤처투자종합포탈에게 고의나 중과실이 인정될 만한 특별한 사유가 있는 경우를 제외하고는 링크된 사이트 및 자료의 내용, 광고, 제품 등에 대해 책임을 부담하지 않습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">14. 이용자의 의무</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 기타 벤처투자종합포털이 통지하는 사항을 준수하여야 하며, 포털의 업무에 방해되는 행위를 하여서는 안됩니다.</p>
              <p>2. 이용자는 서비스를 이용하여 얻은 정보를 포털의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.</p>
              <p>3. 이용자는 본인의 책임 하에 ID와 비밀번호의 보안을 유지하셔야 하며, 자신의 ID와 비밀번호를 사용하여 발생하는 모든 결과에 대해 전적인 책임이 있습니다. 본인의 승인 없이 ID나 비밀번호가 사용되는 등 문제가 발생하시면 즉시 포털에 신고하셔야 합니다. 또한 부여받은 ID 및 비밀번호는 타인에게 전매 또는 양도할 수 없습니다.</p>
              <p>4. 이용자는 서비스 이용을 위해 회원으로 가입할 경우 현재의 사실과 일치하는 완전한 정보를 제공하셔야 하며, 완료정보에 변경사항이 발생할 경우 즉시 갱신하셔야 합니다.</p>
              <p>5. 이용자는 포털이 제공하는 정보와 서비스를 이용하여 영업활동을 할 수 없습니다.</p>
              <p>6. 이용자는 포털을 통하여 다음과 같은 행동을 하지 않는데 동의합니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>타인의 아이디(ID)와 비밀번호를 도용하는 행위</li>
                <li>저속, 음란, 모욕적, 위협적이거나 타인의 프라이버시를 침해할 수 있는 내용을 전송, 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위</li>
                <li>포털을 통하여 전송된 내용의 출처를 위장하는 행위</li>
                <li>법률, 계약에 의하여 이용할 수 없는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위</li>
                <li>타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위</li>
                <li>포털의 승인을 받지 아니한 광고, 판촉물, 정크메일, 스팸, 행운의 편지, 피라미드 조직, 기타 다른 형태의 권유를 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위</li>
                <li>해킹행위 또는 컴퓨터바이러스의 유포행위</li>
                <li>서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위</li>
                <li>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</li>
                <li>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</li>
                <li>다른 사용자의 개인정보를 수집 또는 저장하는 행위</li>
              </ul>
              <p>7. 포털 서비스를 통하여 게시, 전송, 입수하였거나 전자메일, 기타 다른 수단에 의하여 게시, 전송 또는 입수한 모든 형태의 정보에 대하여는 귀하가 모든 책임을 부담하며 포털은 어떠한 책임도 부담하지 아니합니다.</p>
              <p>8. 포털이 제공한 서비스가 아닌 이용자 또는 기타 유관기관이 제공하는 서비스의 내용상의 정확성, 완전성 및 질에 대하여 보장하지 않습니다. 따라서 포털은 귀하가 위 내용을 이용함으로 인하여 입게 된 모든 종류의 손실이나 손해에 대하여 책임을 부담하지 아니합니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">15. 벤처투자종합포탈의 의무</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 벤처투자종합포털은 이용자가 안정적으로 서비스를 받을 수 있도록 항상 노력합니다.</p>
              <p>2. 포털은 정보통신이용촉진에관한법률, 전기통신기본법 등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.</p>
              <p>3. 포털은 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">16. 회원정보의 사용에 대한 동의</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 벤처투자종합포털은 회원의 정보를 포털을 운영하거나 개선하는 목적으로만 사용합니다.</p>
              <p>2. 포털 회원 정보는 다음과 같이 사용, 관리, 보호됩니다.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>개인정보의 수집 : 포털은 이용자가 회원 가입 시 제공하는 정보를 통하여 이용자에 관한 정보를 수집합니다.</li>
                <li>개인정보의 사용 : 포털 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가 포털에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.</li>
                <li>개인정보의 관리 : 이용자는 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 귀하의 개인정보를 수정/삭제할 수 있습니다.</li>
                <li>개인정보의 보호 : 이용자의 개인정보는 오직 이용자만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 이용자의 ID와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 ID와 비밀번호를 알려주어서는 안되며, 작업 종료시에는 반드시 로그아웃 해주시기 바랍니다.</li>
              </ul>
              <p>3. 포털은 이용자의 개인정보를 매우 중요하게 다루고 있으며, 개인정보처리방침을 공개하고 있습니다.</p>
              <p>4. 회원이 본 약관에 따라 이용신청을 하는 것은, 신청서에 기재된 회원정보를 수집, 이용하는 것에 동의하는 것으로 간주됩니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">17. 개인정보의 보호</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 벤처투자종합포탈은 회원의 정보를 벤처투자종합포탈을 운영하거나 개선하는 목적으로만 사용합니다.</p>
              <p>2. 포털이 취득한 회원정보는 본인의 승낙 없이 제3자에게 공개하지 않습니다.</p>
              <p>3. 포털은 이용자의 개인정보를 매우 중요하게 다루고 있으며, 개인정보처리방침을 공개하고 있습니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">18. 개인정보의 공개</h2>
            <p className="text-muted-foreground">
              벤처투자종합포털은 다음과 같은 경우에 법에서 허용하는 범위 내에서 이용자의 성명, 전자우편주소 등 개인정보를 제3자에게 제공할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
              <li>이용자가 서비스를 이용함에 있어 관련 법률을 위반하여 수사기관이나 기타 정부기관으로부터 정보제공을 요청 받는 경우</li>
              <li>이용자의 법률위반, 본 약관위반을 포함하여 부정행위 완료 등의 정보보호업무를 위해 필요한 경우</li>
              <li>기타 법률에 의해 요구되는 경우</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">19. 면책조항</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>1. 이용자가 벤처투자종합포탈 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스자료에 대한 취사선택 또는 이용으로 발생하는 손익에 대하여 벤처투자종합포탈은 책임을 지지 않습니다.</p>
              <p>2. 포털은 이용자의 귀책사유로 인한 포털 이용의 장애에 대하여 책임을 지지 않습니다.</p>
              <p>3. 포털은 이용자가 벤처투자종합포털에 게시하거나 또는 전송한 내용에 관하여는 책임을 지지 않습니다.</p>
              <p>4. 이용자 상호간 또는 이용자와 제3자 상호간에 포털 서비스를 매개로 한 물품거래,금전거래 등과 관련하여 발생한 문제에 대하여 어떠한 책임도 지지 않습니다.</p>
              <p>5. 포털에서 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 포털이 고의로 행한 범죄행위를 제외하고 이에 대하여 손해배상과 책임을 부담하지 않습니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">20. 관할법원</h2>
            <p className="text-muted-foreground">
              본 서비스 이용과 관련하여 발생한 서비스 이용에 관한 분쟁에 대해 대한민국 법을 적용하며, 본 분쟁으로 소송이 제기될 경우 한국벤처캐피탈협회 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">부칙</h2>
            <p className="text-muted-foreground">
              1. (시행일) 본 약관은 2023년 1월 16일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

