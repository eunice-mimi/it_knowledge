window.LESSON = {
 day:5, title:'API', subtitle:'클라이언트는 서버의 기능과 데이터를 어떻게 “약속된 방식”으로 사용할까?', minutes:'10–15분',
 goal:[
  'API가 프론트엔드와 백엔드 사이의 단순한 통신 자체가 아니라, 기능과 데이터를 사용하기 위해 정한 인터페이스라는 점을 이해한다.',
  'Endpoint, Method, Parameter, Request Body, Response 같은 API 명세의 기본 요소를 읽을 수 있다.',
  'PO로서 화면 요구사항을 API와 연결하고, 개발자에게 필요한 질문을 할 수 있다.'
 ],
 sections:[
 {type:'text',title:'1. 지금까지 배운 흐름에 API를 넣어봅시다',html:`<p>Day 1~4에서 <b>Frontend / Backend → Client / Server → Request / Response → HTTP(S)</b>를 배웠습니다. 이제 그 사이에서 자주 등장하는 <b>API</b>를 볼 차례입니다.</p><p><b>API(Application Programming Interface)</b>는 한 시스템이 다른 시스템의 기능이나 데이터를 사용할 수 있도록 정해둔 <b>접점과 사용 규칙</b>입니다.</p><div class="example"><b>상담 예약 화면이라면</b><br>사용자가 ‘예약하기’ 클릭<br>→ 프론트엔드가 예약 생성 API에 Request<br>→ 백엔드가 예약 가능 여부 확인<br>→ DB에 예약 저장<br>→ API Response 반환<br>→ 프론트엔드가 ‘예약 완료’ 화면 표시</div><p>즉 API는 데이터가 이동하는 선 자체라기보다, <b>“어디로 어떤 형식의 요청을 보내면 어떤 기능을 사용할 수 있고 어떤 응답을 받는가”라는 약속</b>에 가깝습니다.</p>`},
 {type:'flow',title:'2. API를 이용한 기능의 전체 흐름',steps:[['사용자','예약하기 클릭'],['Frontend','필요한 데이터를 준비'],['API Request','예약 생성 요청'],['Backend','권한·예약 가능 여부 등 검증'],['DB','예약 데이터 저장'],['API Response','성공/실패와 결과 반환'],['Frontend','결과에 맞게 UI 변경']]},
 {type:'text',title:'3. “API가 필요하다”는 말은 무슨 뜻일까?',html:`<p>기획한 화면에 서버 데이터가 필요하거나 서버에서 처리해야 하는 기능이 있다면 프론트엔드가 그 기능을 사용할 <b>API가 필요할 가능성이 높습니다.</b></p><div class="example"><b>예: 상담 목록 화면</b><br>프론트엔드가 화면 디자인만 가지고 있다고 상담 목록을 알 수 있는 것은 아닙니다.<br><br>서버에 저장된 상담 데이터를 받아올 API가 있어야<br>→ 상담 날짜<br>→ 전문가 이름<br>→ 상담 상태<br>→ 상담 ID<br>같은 데이터를 화면에 표시할 수 있습니다.</div><p>반대로 단순히 버튼 색을 바꾸거나 이미 받은 데이터를 정렬하는 것처럼 클라이언트 내부에서 끝나는 동작은 새로운 서버 API가 필요하지 않을 수도 있습니다.</p>`},
 {type:'compare',title:'4. API와 HTTP는 같은 말이 아닙니다',rows:[['API','다른 시스템의 기능이나 데이터를 사용할 수 있도록 정의한 인터페이스와 규칙'],['HTTP','웹에서 Request와 Response를 주고받는 통신 프로토콜'],['관계','웹 서비스에서는 HTTP를 이용하는 API가 매우 흔합니다. 하지만 API라는 개념 자체가 HTTP에만 한정되는 것은 아닙니다.']]},
 {type:'text',title:'5. API 명세에서 가장 먼저 볼 5가지',html:`<p>PO가 API 코드를 작성할 필요는 없지만, API 명세의 기본 구조를 읽을 수 있으면 개발자와 이야기하기 훨씬 쉬워집니다.</p><p><b>① Endpoint</b> — 어떤 주소의 API인지<br><b>② Method</b> — 조회/생성/수정/삭제 중 어떤 성격의 요청인지<br><b>③ Request 데이터</b> — 서버에 무엇을 보내야 하는지<br><b>④ Response 데이터</b> — 서버가 무엇을 돌려주는지<br><b>⑤ Error / Status</b> — 실패했을 때 어떤 경우가 있는지</p><div class="example"><b>예시 API 명세</b><br><code>POST /api/reservations</code><br><br>Request Body<br><code>{ "expertId": 21, "scheduleId": 804 }</code><br><br>Response<br><code>{ "reservationId": 1205, "status": "confirmed" }</code></div><p>이 정도만 읽을 수 있어도 화면과 서버 기능을 연결해서 생각할 수 있습니다.</p>`},
 {type:'text',title:'6. Endpoint는 “어떤 기능/자원에 요청할지” 나타냅니다',html:`<p>API 문서에서 <b>Endpoint</b>라는 말을 자주 봅니다. 보통 API를 호출할 수 있는 특정 경로를 의미합니다.</p><div class="example"><code>GET /api/reservations/1205</code><br><br>여기서 <code>/api/reservations/1205</code>는 특정 예약 정보를 요청하는 경로의 예입니다.</div><p>같은 서비스 안에서도 회원, 상담, 예약, 결제 등 기능에 따라 여러 Endpoint가 존재할 수 있습니다.</p><div class="say">“이 화면에서 사용하는 API Endpoint가 어떤 건가요?”</div><p>PO가 Endpoint 이름을 직접 설계해야 한다는 뜻은 아닙니다. 다만 <b>화면 하나가 여러 API를 사용할 수도 있다</b>는 점을 이해하면 좋습니다.</p>`},
 {type:'text',title:'7. 같은 API라도 무엇을 보내느냐가 중요합니다',html:`<p>서버가 기능을 수행하려면 필요한 입력값이 있습니다. 이 값은 URL 경로, Query Parameter, Header, Request Body 등 여러 위치에 들어갈 수 있습니다.</p><div class="example"><b>상담 검색 예시</b><br><code>GET /api/experts?category=anxiety&page=2</code><br><br><code>category=anxiety</code> → 불안 카테고리<br><code>page=2</code> → 2페이지 요청</div><div class="example"><b>예약 생성 예시</b><br><code>POST /api/reservations</code><br><br>Body에<br><code>expertId</code>, <code>scheduleId</code> 등을 보낼 수 있습니다.</div><p>기획 단계에서는 <b>“이 기능을 처리하기 위해 서버가 어떤 정보를 알아야 하는가?”</b>를 생각하는 습관이 중요합니다.</p>`},
 {type:'text',title:'8. Response는 화면 설계와 직접 연결됩니다',html:`<p>API가 돌려주는 Response 데이터는 실제 UI를 구성하는 재료가 됩니다.</p><div class="example"><b>상담 카드에 필요한 정보</b><br>전문가 프로필 이미지<br>전문가 이름<br>상담 날짜/시간<br>상담 상태<br>상담 방식<br><br>→ 프론트엔드가 이 정보를 직접 만들어낼 수 없다면 서버 Response에 필요한 값이 있어야 합니다.</div><p>그래서 디자인이 변경되면서 새로운 정보가 화면에 추가되면 <b>“기존 API Response에 이 값이 이미 있나요?”</b>라는 질문이 중요해집니다.</p><div class="say">“이 필드는 기존 API에서 내려오나요, 아니면 API 수정이 필요한가요?”</div>`},
 {type:'warning',title:'9. 화면 수정이 항상 프론트 수정만은 아닙니다',html:`<p>PO/디자이너가 자주 만나는 상황입니다.</p><div class="example"><b>기존 상담 카드</b><br>전문가 이름 / 상담 시간<br><br><b>새 기획</b><br>전문가 이름 / 상담 시간 / <b>남은 상담 횟수</b></div><p>디자인에서는 텍스트 한 줄을 추가한 것처럼 보이지만, 기존 API가 <b>남은 상담 횟수</b>를 주지 않는다면 백엔드 작업도 필요할 수 있습니다.</p><p>따라서 화면 변경을 볼 때 <b>UI 변경인지, 데이터 변경인지</b>를 같이 생각해야 합니다. 일정 산정에도 영향을 줍니다.</p>`},
 {type:'text',title:'10. API가 성공한 경우만 기획하면 부족합니다',html:`<p>API는 언제든 성공만 하는 것이 아닙니다. 네트워크 문제, 잘못된 입력, 권한 부족, 이미 마감된 예약, 서버 오류 등으로 실패할 수 있습니다.</p><div class="example"><b>예약하기 API의 결과를 생각해보면</b><br>① 예약 성공<br>② 다른 사용자가 먼저 예약해서 마감<br>③ 로그인이 만료됨<br>④ 필수 정보가 잘못됨<br>⑤ 서버 오류<br>⑥ 응답이 너무 오래 걸림</div><p>이 경우 프론트엔드는 각각 어떤 UI를 보여줄지 결정해야 합니다. 그래서 API 설계와 <b>예외 UX</b>는 연결되어 있습니다.</p><div class="say">“이 API가 실패할 수 있는 주요 케이스가 뭐예요? 각각 사용자에게 어떻게 보여줘야 할까요?”</div>`},
 {type:'text',title:'11. API 명세를 받았을 때 PO가 체크해볼 것',html:`<p><b>화면 기준으로</b> 아래 정도를 확인하면 좋습니다.</p><p>• 화면에 필요한 데이터가 Response에 모두 있는가?<br>• 사용자가 입력한 값 중 어떤 값이 Request로 전달되는가?<br>• 로딩 상태가 필요한가?<br>• 빈 데이터일 때 화면은 어떻게 되는가?<br>• 실패 케이스는 무엇인가?<br>• 권한에 따라 Response나 동작이 달라지는가?<br>• 목록이라면 페이지네이션이 있는가?<br>• 상태값은 어떤 종류가 있는가?</p><div class="example"><b>특히 상태값은 기획과 연결됩니다.</b><br><code>reserved</code> / <code>waiting</code> / <code>in_progress</code> / <code>completed</code>처럼 서버에서 상태를 관리한다면, 각 상태에서 어떤 UI와 액션을 제공할지도 함께 정의해야 합니다.</div>`},
 {type:'terms',title:'12. 오늘 회의에서 들려도 당황하지 않을 단어',items:[
  ['API','다른 시스템이 기능이나 데이터를 사용할 수 있도록 제공하는 인터페이스'],
  ['Endpoint','API에서 특정 기능이나 자원에 접근하는 경로'],
  ['API Call / API 호출','클라이언트 등이 API에 Request를 보내 기능이나 데이터를 요청하는 것'],
  ['Parameter / 파라미터','API 요청에 전달하는 입력값. 경로, Query 등에 들어갈 수 있음'],
  ['Request Body','생성·수정 등에 필요한 데이터를 요청 본문에 담아 보내는 영역'],
  ['Response','API 요청 처리 후 서버가 돌려주는 결과'],
  ['API Spec / API 명세','Endpoint, Method, Request/Response 구조, 오류 등을 정의한 문서'],
  ['Swagger / OpenAPI','API 명세를 문서화하고 확인할 때 실무에서 자주 접하는 표준·도구 계열']
 ]},
 {type:'warning',title:'13. 흔한 오해 4가지',html:`<p><b>① “API = 서버” → X</b><br>서버가 API를 제공할 수 있지만 서버 자체와 API는 같은 개념이 아닙니다.</p><p><b>② “API = 데이터베이스” → X</b><br>API가 DB 데이터를 조회할 수 있지만 클라이언트가 보통 DB에 직접 접근하는 것은 아닙니다. 서버가 로직과 권한 등을 처리한 뒤 필요한 데이터를 반환합니다.</p><p><b>③ “화면 하나 = API 하나” → X</b><br>한 화면에서 여러 API를 호출할 수도 있고, 하나의 API가 여러 화면에서 사용될 수도 있습니다.</p><p><b>④ “UI에 텍스트 하나 추가니까 프론트 작업만 하면 된다” → 항상 그렇지 않음</b><br>새로 필요한 데이터가 기존 Response에 없다면 백엔드/API 변경이 필요할 수 있습니다.</p>`},
 {type:'quiz',title:'14. 3문제 체크',questions:[
  {q:'API를 PO 관점에서 한 문장으로 설명해보세요.',a:'한 시스템이 다른 시스템의 기능이나 데이터를 사용할 수 있도록 정해둔 접점과 사용 규칙이라고 이해하면 됩니다.'},
  {q:'상담 카드에 “남은 상담 횟수”를 새로 표시하려고 합니다. 디자인만 수정하면 될까요?',a:'기존 API Response에 남은 상담 횟수가 이미 있는지 먼저 확인해야 합니다. 없다면 백엔드에서 값을 계산하거나 조회해 Response에 추가하는 작업이 필요할 수 있습니다.'},
  {q:'API 명세를 볼 때 PO가 우선 확인하면 좋은 것은 무엇인가요?',a:'Endpoint와 Method, 서버에 보내는 Request 데이터, 서버가 반환하는 Response 데이터, 그리고 주요 성공·실패 케이스를 화면 요구사항과 연결해서 확인하면 좋습니다.'}
 ]}
 ],
 takeaway:'API는 클라이언트가 서버의 기능과 데이터를 사용할 수 있도록 정한 인터페이스입니다. PO는 API를 구현할 필요는 없지만, 화면에 필요한 데이터가 어디서 오는지, 무엇을 Request로 보내고 무엇을 Response로 받는지, 실패하면 어떤 UX가 필요한지를 연결해서 볼 수 있어야 합니다.'
};