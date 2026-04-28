window.DATA = {
  "nodes": [

    // ── 원인 ──
    {
      "id": "ca_od_1",
      "type": "cause",
      "label": "클라우드 AI 지연·보안 한계",
      "desc": "LLM 기반 클라우드 AI는 통신 지연(Latency)과 불안정한 네트워크에 의존한다. 자율주행·로봇 공학에서 1초의 지연은 대형 사고로 직결되며, 민감한 개인 정보를 외부 서버에 맡기는 보안 문제도 심각해졌다.",
      "x": null, "y": null
    },
    {
      "id": "ca_od_2",
      "type": "cause",
      "label": "GPU 고전력·발열 한계",
      "desc": "엔비디아 GPU는 범용성은 뛰어나지만 300W 이상의 전력 소모와 극심한 발열로 배터리 구동 디바이스에 적합하지 않다. 100m 트랙에서 짐 가득 실은 대형 버스(GPU)와 스포츠카(NPU)를 경주시키는 것과 같은 비효율이다.",
      "x": null, "y": null
    },
    {
      "id": "ca_od_3",
      "type": "cause",
      "label": "VLA 모델 실시간 처리 요구",
      "desc": "피지컬 AI의 핵심인 VLA(Vision-Language-Action) 모델은 시각 지능과 행동 제어를 결합해 실시간으로 판단해야 한다. 이 요구는 제한된 전력·자원 속 초저지연 NPU 전용 아키텍처를 필수로 만든다.",
      "x": null, "y": null
    },
    {
      "id": "ca_od_4",
      "type": "cause",
      "label": "피지컬 AI 시장 폭발적 성장",
      "desc": "휴머노이드 로봇, 자율주행, 농기계 자동화 등 피지컬 AI 시장이 2030년 약 1,280억 달러(170조 원) 규모로 성장 예측된다. 데이터 드리븐 방식으로 진화하는 피지컬 AI는 AI-Enabled Age 진입의 핵심 동인이다.",
      "x": null, "y": null
    },

    // ── 핵심 사건 ──
    {
      "id": "ev_od_1",
      "type": "event",
      "label": "NPU 전용 아키텍처 패러다임 전환",
      "desc": "GPU 범용 연산에서 NPU(Neural Processing Unit) 전용 아키텍처로 AI 반도체 패러다임이 전환되고 있다. 딥엑스의 KV캐시 하드웨어 최적화로 GPU 대비 전성비 20배 이상 달성. AI가 AI 반도체를 설계하는 RAIN 프로젝트까지 등장하며 최적화의 정점을 향해 진화 중이다.",
      "x": null, "y": null
    },
    {
      "id": "ev_od_2",
      "type": "event",
      "label": "딥엑스 5nm 수율 90%·현대차 양산 채택",
      "desc": "국내 NPU 팹리스 딥엑스(DEEPX)가 삼성전자 5nm 선단공정에서 90% 이상의 수율을 확보하며 현대차 딜리버리 로봇 '달리'에 채택됐다. 구동 온도 33.5도(체온 이하)라는 팬리스 열 성능으로 상용 로봇 양산성을 입증했으며, 현재 8개국 30개 이상 PO가 진행 중이다.",
      "x": null, "y": null
    },
    {
      "id": "ev_od_3",
      "type": "event",
      "label": "바이두 오픈소스 피지컬 AI 얼라이언스",
      "desc": "1,000만 명 이상의 개발자를 보유한 바이두 패들패들 플랫폼이 딥엑스와 오픈소스 피지컬 AI 얼라이언스를 구축했다. 2,000달러 300W GPU 대비 100달러 미만 4W NPU가 특정 알고리즘에서 2~3배 높은 효율을 낸다는 사실이 검증되며 글로벌 생태계 확산이 가속화되고 있다.",
      "x": null, "y": null
    },
    {
      "id": "ev_od_4",
      "type": "event",
      "label": "30B 파라미터 3GB 모델 압축 성공",
      "desc": "삼성전자가 32비트 연산을 4/8비트로 압축하는 양자화·프루닝 기술로 300억(30B) 파라미터 규모 모델을 단 3GB 이하 메모리에서 구동하는 데 성공했다. 애플 유니파이드 메모리(CPU·GPU·NPU 메모리 풀 공유)와 함께 70/30 하이브리드 AI 구조가 표준으로 자리잡고 있다.",
      "x": null, "y": null
    },

    // ── 파급 효과 · 단기 ──
    {
      "id": "ef_od_1",
      "type": "effect",
      "label": "NPU 팹리스 글로벌 수주 급증",
      "desc": "딥엑스를 포함한 국내외 NPU 팹리스 기업들이 8개국 이상에서 30개 이상의 PO(구매 주문)를 수주하며 글로벌 채택이 가속화되고 있다. GPU 대비 압도적인 전성비가 로봇·자율주행·산업 자동화 분야 고객을 빠르게 흡수하고 있다.",
      "depth": "단기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_2",
      "type": "effect",
      "label": "삼성 5nm 파운드리 수요 증가",
      "desc": "딥엑스의 5nm 선단공정 90% 수율 성공은 삼성전자 파운드리에 대한 NPU 칩 위탁 생산 수요를 직접 견인한다. 리던던시 설계와 공정 결함 밀도 분석 등 팹리스의 전략적 설계로 수율을 최대화한 사례로, 삼성 파운드리의 고성능 AI 반도체 레퍼런스가 강화된다.",
      "depth": "단기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_3",
      "type": "effect",
      "label": "GPU 온디바이스 시장 점유율 잠식",
      "desc": "온디바이스·엣지 AI 시장에서 NPU가 GPU를 대체하며 엔비디아의 해당 세그먼트 점유율이 구조적으로 압박을 받는다. 전성비 20배 격차는 배터리 구동 기기 시장에서 GPU의 경쟁력을 근본적으로 훼손한다.",
      "depth": "단기",
      "sentiment": "neg",
      "x": null, "y": null
    },

    // ── 파급 효과 · 중기 ──
    {
      "id": "ef_od_4",
      "type": "effect",
      "label": "로보틱스·자율주행 양산화 가속",
      "desc": "초저전력 NPU의 상용화로 배터리 구동 로봇과 자율주행 모빌리티의 양산 비용이 급락한다. 현대차 달리 로봇에서 검증된 팬리스·저온 구동 NPU는 휴머노이드, 농기계, 드론 등 피지컬 AI 전 분야 양산화의 트리거가 된다.",
      "depth": "중기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_5",
      "type": "effect",
      "label": "온디바이스 AI 에이전트 대중화",
      "desc": "이메일 읽기·결제 대행 등 개인 정보를 처리하는 AI 에이전트가 클라우드가 아닌 로컬 기기에 상주하게 된다. 70%는 온디바이스 SLM, 30%만 클라우드로 보내는 하이브리드 구조가 표준화되며 보안·비용·응답속도 세 가지를 동시에 해결한다.",
      "depth": "중기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_6",
      "type": "effect",
      "label": "한국 NPU 글로벌 표준 선점",
      "desc": "바이두·현대차 등 글로벌 리더와의 협력으로 국산 NPU 아키텍처가 오픈소스 피지컬 AI 생태계의 사실상 표준(De Facto Standard)으로 자리잡기 시작한다. 미·중 AI 패권 경쟁 틈새에서 한국 팹리스가 중립적 글로벌 표준의 공급자로 부상한다.",
      "depth": "중기",
      "sentiment": "pos",
      "x": null, "y": null
    },

    // ── 파급 효과 · 장기 ──
    {
      "id": "ef_od_7",
      "type": "effect",
      "label": "피지컬 AI 시장 1,280억불 달성",
      "desc": "2030년 약 1,280억 달러(170조 원)로 예측되는 피지컬 AI 시장이 온디바이스 NPU 보급화를 기반으로 실현된다. 로봇·자율주행·드론·스마트팩토리 등 전 산업 영역에서 AI가 물리적 실체로 구현되는 AI-Enabled Age가 도래한다.",
      "depth": "장기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_8",
      "type": "effect",
      "label": "대한민국 AI G3 도약",
      "desc": "세계 4위권 제조 강국의 제조 데이터와 한국형 NPU 기술이 결합해 'AX(AI Transformation) 풀스택' 경쟁력이 완성된다. 미국·중국에 이어 한국이 AI 반도체와 제조 지능화를 동시에 선도하는 제3의 AI 강국으로 자리매김한다.",
      "depth": "장기",
      "sentiment": "pos",
      "x": null, "y": null
    },
    {
      "id": "ef_od_9",
      "type": "effect",
      "label": "무인제조 AX 솔루션 수출 패권",
      "desc": "단순 부품 수출을 넘어 지능형 자동화 공장 시스템(AX 솔루션) 자체를 패키지화하여 수출하는 새로운 한국형 수출 모델이 완성된다. 제조 현장 데이터 + 온디바이스 NPU + 로보틱스의 삼위일체로 글로벌 스마트팩토리 시장을 선점한다.",
      "depth": "장기",
      "sentiment": "pos",
      "x": null, "y": null
    }

  ],

  "edges": [
    // ── 원인 → 핵심 사건 ──
    { "from": "ca_od_1", "to": "ev_od_1" },
    { "from": "ca_od_2", "to": "ev_od_1" },
    { "from": "ca_od_3", "to": "ev_od_2" },
    { "from": "ca_od_3", "to": "ev_od_4" },
    { "from": "ca_od_4", "to": "ev_od_2" },
    { "from": "ca_od_4", "to": "ev_od_3" },

    // ── 핵심 사건 → 1차 파급 효과 ──
    { "from": "ev_od_1", "to": "ef_od_1" },
    { "from": "ev_od_1", "to": "ef_od_3" },
    { "from": "ev_od_2", "to": "ef_od_1" },
    { "from": "ev_od_2", "to": "ef_od_2" },
    { "from": "ev_od_3", "to": "ef_od_6" },
    { "from": "ev_od_4", "to": "ef_od_5" },

    // ── 1차 → 2차 파급 효과 (N-th Order) ──
    { "from": "ef_od_1", "to": "ef_od_4" },
    { "from": "ef_od_2", "to": "ef_od_4" },
    { "from": "ef_od_4", "to": "ef_od_7" },
    { "from": "ef_od_5", "to": "ef_od_7" },

    // ── 2차 → 3차 파급 효과 (N-th Order) ──
    { "from": "ef_od_6", "to": "ef_od_8" },
    { "from": "ef_od_7", "to": "ef_od_8" },
    { "from": "ef_od_8", "to": "ef_od_9" }
  ]
};
