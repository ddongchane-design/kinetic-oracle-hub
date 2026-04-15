window.DATA = {
  "nodes": [
    // ==========================================
    // 1. 발생 원인 (Cause)
    // ==========================================
    { "id": "ca_t_1", "type": "cause", "label": "에릭 레프코프스키 창업 비전", "desc": "그루폰 공동창업자. 암 진단 시 모든 환자에게 동일한 치료가 적용되는 문제의식에서 출발. AI 기반 정밀의료·개인 맞춤 치료 구현을 목표로 2015년 창업." },
    { "id": "ca_t_2", "type": "cause", "label": "세계 최대 임상 데이터 라이브러리", "desc": "수백만 건의 탈식별화 임상 기록과 유전체 데이터를 병원 파트너십으로 누적. 이 데이터가 유전체학·데이터 서비스·AI 애플리케이션 모든 사업의 핵심 인프라." },
    { "id": "ca_t_3", "type": "cause", "label": "나스닥 상장 (TEM)", "desc": "2024년 나스닥 IPO 성공. 공모가 $37, 성장 자본 확보 및 브랜드 인지도 향상. 이후 M&A, 신제품 개발의 재원으로 활용." },

    // ==========================================
    // 2. 핵심 사건 (Event)
    // ==========================================
    { "id": "ev_genomics", "type": "event", "label": "유전체학 (Genomics) 사업", "desc": "전임상 PCR 및 분자 병리학 검사, NGS 기반 종양 유전자 수행 분석. 메디케어(Medicare) 보험 청구 적용으로 병원·환자 접근성 확대. Tempus 매출의 핵심 축." },
    { "id": "ev_data_svc", "type": "event", "label": "데이터 및 서비스 사업", "desc": "탈식별화된 임상 데이터 마이닝으로 제약사 신약 개발 지원 및 MRE(Master Research Enterprise) 계약 체결. AI 기반 임상 시험 매칭 서비스 제공." },
    { "id": "ev_ai_app", "type": "event", "label": "AI 애플리케이션 출시", "desc": "Tempus One AI 어시스턴트: 의료진 대상 AI 진료 지원 앱. 임상 데이터 기반 치료 추천·보고서 자동 생성·상상 기능 정책 평가 등 임상 의사결정 자동화." },
    { "id": "ev_ambry", "type": "event", "label": "Ambry Genetics 인수 (M&A)", "desc": "유전자 검사 전문 기업 Ambry Genetics 인수. 소비자·임상 유전체 검사 역량을 수직 통합하여 임상 데이터 수집 속도 비약적 가속." },
    { "id": "ev_partners", "type": "event", "label": "구글·AZ 전략적 파트너십", "desc": "구글(알파벳), AstraZeneca, 알리바바 등과 AI 신약 개발·데이터 협력 체결. 빅테크·빅파마 생태계와의 연결로 데이터 활용 범위 확대." },
    { "id": "ev_page_predict", "type": "event", "label": "Page Predict 디지털 병리AI", "desc": "병리 슬라이드 이미지를 AI로 분석하는 디지털 병리 신제품. 기존 육안 판독 대비 암 진단 정밀도 향상. AI 애플리케이션 사업 확장의 핵심." },

    // ==========================================
    // 3. 파급 효과 (Effect) — 긍정
    // ==========================================
    { "id": "ef_revenue", "type": "effect", "label": "매출 고성장", "depth": "단기", "sentiment": "pos", "desc": "2024년 매출 약 $6.9억 (YoY +30%). 2025년 가이던스 $12.4억 (+78% 성장 예상). 헬스케어 AI 섹터 최고 수준의 성장률." },
    { "id": "ef_ebitda", "type": "effect", "label": "EBITDA 흑자 전환 전망", "depth": "중기", "sentiment": "pos", "desc": "2025년 조정 EBITDA 흑자 전환 목표. 현금 약 $3.4억 보유, 부채 상환 기조 유지. 수익성 개선 기대감이 주가 재평가 트리거." },
    { "id": "ef_op_leverage", "type": "effect", "label": "운영 레버리지 실현", "depth": "장기", "sentiment": "pos", "desc": "매출 성장에 따른 고정비 비율 감소. 규모의 경제로 마진 지속 개선. 데이터·AI 인프라는 한 번 구축 후 추가 비용 없이 수익 창출 가능한 구조." },

    // ==========================================
    // 4. 파급 효과 (Effect) — 리스크
    // ==========================================
    { "id": "ef_short", "type": "effect", "label": "공매도 리포트 리스크", "depth": "단기", "sentiment": "neg", "desc": "[단기 리스크] CEO 에릭 레프코프스키의 과거 그루폰 사업 이력 및 회계처리 방식을 비판하는 공매도 리포트 출회. 주가 변동성 확대 및 투자 심리 위축." },
    { "id": "ef_sbc", "type": "effect", "label": "SBC 밸류에이션 이슈", "depth": "중기", "sentiment": "neg", "desc": "[중기 리스크] 주식 기반 보상(SBC) 비용 과다로 실질 순손실이 조정 지표보다 큼. 조정 EBITDA 지표의 신뢰성 논란. 밸류에이션 정당성에 대한 시장 의구심." },
    { "id": "ef_going_concern", "type": "effect", "label": "지속 영업 리스크", "depth": "중기", "sentiment": "neg", "desc": "[중기 리스크] S-3 ASR 공시로 지속적 자금 조달 필요성 노출. 공격적 M&A 및 R&D 지출로 현금 소진 속도가 빠름. 수익성 확보 전 자금 부족 가능성." },
    { "id": "ef_competition", "type": "effect", "label": "빅테크 경쟁 위협", "depth": "장기", "sentiment": "neg", "desc": "[장기 리스크] 마이크로소프트, 구글의 헬스케어 AI 사업 확장으로 경쟁 심화. AI 기술의 범용화(Commoditization)로 Tempus 데이터 해자의 진입 장벽 약화 가능성." }
  ],
  "edges": [
    // 1. 창업 비전 → 사업 부문
    { "from": "ca_t_1", "to": "ev_genomics", "label": "정밀의료 구현" },
    { "from": "ca_t_1", "to": "ev_data_svc", "label": "데이터 기반 사업화" },
    { "from": "ca_t_1", "to": "ev_ai_app", "label": "AI 진료 보조 목표" },

    // 2. 임상 데이터 → 사업 기반
    { "from": "ca_t_2", "to": "ev_data_svc", "label": "탈식별 데이터 마이닝" },
    { "from": "ca_t_2", "to": "ev_partners", "label": "데이터로 파트너 유인" },
    { "from": "ca_t_2", "to": "ev_ai_app", "shared": true, "label": "AI 모델 학습 기반" },

    // 3. IPO 자금 → 전략적 행보
    { "from": "ca_t_3", "to": "ev_ambry", "label": "IPO 자금 M&A 투입" },
    { "from": "ca_t_3", "to": "ev_page_predict", "label": "신제품 R&D 투자" },

    // 4. 전략적 행보 → 사업 강화
    { "from": "ev_ambry", "to": "ev_genomics", "label": "유전체 역량 수직 통합" },
    { "from": "ev_partners", "to": "ev_data_svc", "shared": true, "label": "파마 협업 확대" },
    { "from": "ev_page_predict", "to": "ev_ai_app", "label": "AI 제품 라인업 확장" },

    // 5. 사업 부문 → 매출 성장
    { "from": "ev_genomics", "to": "ef_revenue", "label": "검사 수수료 수익" },
    { "from": "ev_data_svc", "to": "ef_revenue", "label": "파마 로열티 수익" },
    { "from": "ev_ai_app", "to": "ef_revenue", "shared": true, "label": "SaaS 구독 수익" },

    // 6. 매출 → 수익성
    { "from": "ef_revenue", "to": "ef_ebitda", "label": "성장→EBITDA 개선" },
    { "from": "ef_ebitda", "to": "ef_op_leverage", "label": "흑자→고정비 희석" },

    // 7. 리스크 연결
    { "from": "ca_t_3", "to": "ef_short", "label": "고밸류 IPO→공매도 타깃" },
    { "from": "ef_short", "to": "ef_sbc", "label": "공매도→SBC 문제 부각" },
    { "from": "ca_t_3", "to": "ef_going_concern", "shared": true, "label": "자금 조달 구조 노출" },
    { "from": "ef_going_concern", "to": "ef_competition", "shared": true, "label": "불확실성→경쟁 취약" },
    { "from": "ef_op_leverage", "to": "ef_competition", "shared": true, "label": "성장→빅테크 경쟁 유발" }
  ],
  "meta": {
    "created": "2026-04-15",
    "updated": "2026-04-15",
    "version": "2.0",
    "description": "Tempus AI (TEM) — 마인드맵 기반 헬스케어 AI 플랫폼 인과관계 분석"
  }
};
