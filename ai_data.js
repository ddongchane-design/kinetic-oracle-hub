window.DATA = {
  "nodes": [
    // ── 사건: 컴퓨트 경쟁 심화 및 AI 패권 중심 이동 ──
    {
      "id": "ev_compute_comp",
      "type": "event",
      "label": "AI 패권의 중심 이동: 컴퓨트 경쟁 심화",
      "desc": "단순한 알고리즘 개발을 넘어 물리적 인프라, 전력, 거대 자본을 동원해 'AI 팩토리'를 구축하고 운용하는 오케스트레이션 싸움으로 패러다임이 전환됨.",
      "x": null, "y": null
    },
    {
      "id": "ca_model_scale",
      "type": "cause",
      "label": "스케일업 법칙과 모델 거대화",
      "desc": "모델 성능 향상을 위해 수십조 개의 토큰과 막대한 컴퓨팅 투입량이 요구되며, 효율 개선분이 오히려 더 큰 규모의 훈련 투자로 이어짐.",
      "x": null, "y": null
    },
    {
      "id": "ca_capital_barrier",
      "type": "cause",
      "label": "프론티어 모델의 자본 장벽",
      "desc": "막대한 CAPEX가 요구되어 학계 중심에서 천문학적 투자가 가능한 소수 거대 자본 빅테크(하이퍼스케일러) 위주로 산업이 재편됨.",
      "x": null, "y": null
    },
    {
      "id": "ca_geopolitics",
      "type": "cause",
      "label": "국가별 전략물자화 및 패권 다툼",
      "desc": "압도적 인프라(데이터센터, 칩)를 보유한 미국과 맹추격하는 중국 간의 경쟁 속에서 컴퓨팅 자원이 국가 안보 핵심 자산으로 부상함.",
      "x": null, "y": null
    },
    {
      "id": "ef_nvda_dom",
      "type": "effect",
      "label": "엔비디아 풀스택 생태계 TCO 우위",
      "desc": "단일 칩 성능을 넘어 하드웨어와 CUDA 소프트웨어 스택의 결합으로 다양한 범용 워크로드 환경에서 압도적인 총소유비용(TCO) 효율을 입증하며 지배력을 강화함.",
      "depth": "단기",
      "x": null, "y": null
    },
    {
      "id": "ef_asic_opt",
      "type": "effect",
      "label": "빅테크 자체 칩(ASIC) 최적화 가동",
      "desc": "구글(TPU), AWS(트레이니움) 등이 자신들의 특정 내부 서비스 워크로드에 맞춰 최적화된 칩을 가동하며 불필요한 리소스 낭비를 줄이고 마진을 방어함.",
      "depth": "단기",
      "x": null, "y": null
    },
    {
      "id": "ef_energy_bottleneck",
      "type": "effect",
      "label": "에너지 및 물리적 인프라 병목",
      "desc": "기가와트(GW)급 데이터센터 전력 수요와 냉각 시스템(액체 냉각) 한계로 인해 에너지가 AI 확장성을 결정짓는 가장 큰 제약 조건으로 대두됨.",
      "depth": "중기",
      "x": null, "y": null
    },
    {
      "id": "ef_supply_shortage",
      "type": "effect",
      "label": "반도체 공급망 전방위 쇼티지",
      "desc": "스케일업 경쟁 가속으로 인해 HBM(삼성/SK하이닉스), 선단 공정 파운드리(TSMC), 고급 패키징 장비 등 밸류체인 전반에서 심각한 공급 부족이 발생함.",
      "depth": "중기",
      "x": null, "y": null
    },
    {
      "id": "ef_infra_etf",
      "type": "effect",
      "label": "전력/인프라 테마로 거시 자금 이동",
      "desc": "에너지 병목이 현실화되면서 변압기, 전력망(그리드), 발전소, 데이터센터 리츠 등 물리적 인프라 관련 ETF로 시장 자금이 거대하게 유입됨.",
      "depth": "장기",
      "x": null, "y": null
    },
    {
      "id": "ef_korea_status",
      "type": "effect",
      "label": "한국의 인프라 한계 및 생존 전략",
      "desc": "프론티어 모델은 보유했으나 데이터센터 전력과 자본 규모가 열위한 한국은 메모리(HBM) 밸류체인 독점을 기반으로 한 생존 전략을 도모해야 함.",
      "depth": "장기",
      "x": null, "y": null
    }
  ],

  "edges": [
    // 원인 -> 사건
    { "from": "ca_model_scale", "to": "ev_compute_comp" },
    { "from": "ca_capital_barrier", "to": "ev_compute_comp" },
    { "from": "ca_geopolitics", "to": "ev_compute_comp" },
    
    // 사건 -> 파급효과
    { "from": "ev_compute_comp", "to": "ef_nvda_dom" },
    { "from": "ev_compute_comp", "to": "ef_asic_opt" },
    { "from": "ev_compute_comp", "to": "ef_energy_bottleneck" },
    { "from": "ev_compute_comp", "to": "ef_supply_shortage" },
    { "from": "ev_compute_comp", "to": "ef_korea_status" },

    // 파급효과 연쇄 (2차 파급)
    { "from": "ef_energy_bottleneck", "to": "ef_infra_etf", "shared": true, "label": "물리적 한계가 투자 흐름 견인" },
    { "from": "ef_supply_shortage", "to": "ef_nvda_dom", "shared": true, "label": "부품 록인(Lock-in) 강화" }
  ],

  "meta": {
    "created": "2026-04-23",
    "version": "1.0",
    "description": "AI 패권 및 인프라 경쟁 분석 지식 그래프",
    "sources": [
      "2024 스탠포드 AI 인덱스 리포트",
      "엔비디아 TCO 분석 자료 및 CEO 발언록",
      "글로벌 AI 데이터센터 전력 수요 전망 통계"
    ]
  }
};
