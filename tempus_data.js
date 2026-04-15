window.DATA = {
  "nodes": [
    // ==========================================
    // 1. 발생 원인 (Cause) — 왜 Tempus AI가 등장했는가
    // ==========================================
    { "id": "ca_t_1", "type": "cause", "label": "임상 데이터 분절화", "desc": "병원마다 독립된 EMR 시스템, 비정형 데이터 범람. 전체 의료 데이터의 97%가 분석 불가한 채로 사일로에 갇혀 있음. 의사는 데이터 없이 경험으로만 결정을 내리는 구조." },
    { "id": "ca_t_2", "type": "cause", "label": "빅파마 AI 신약 수요", "desc": "신약 1개 개발비 평균 $2.6B, 성공률 10% 미만. 빅파마는 임상 데이터 기반 AI로 개발 기간 단축·비용 절감이 절실. 외부 임상 데이터 확보 전쟁 시작." },
    { "id": "ca_t_3", "type": "cause", "label": "정밀 종양학 미충족 수요", "desc": "암 환자마다 유전자 돌연변이가 달라 동일 치료가 효과 없는 경우가 빈번. 환자 개인의 분자 프로파일(유전체+임상기록)을 결합해 최적 치료를 AI로 추천하는 솔루션이 없었음." },
    { "id": "ca_t_4", "type": "cause", "label": "AI 인프라 비용 급락", "desc": "클라우드 컴퓨팅·GPU 단가 하락과 LLM 발전으로 방대한 임상 데이터를 실시간 처리하는 비용이 급락. 헬스케어 AI 상업화의 기술적 장벽이 무너짐." },

    // ==========================================
    // 2. 핵심 사건 (Event) — Tempus가 실행한 것들
    // ==========================================
    { "id": "ev_t_1", "type": "event", "label": "나스닥 IPO (TEM)", "desc": "2024년 6월 NASDAQ 상장. 공모가 $37, 시가총액 약 $6B. 헬스케어 AI 섹터 최대 IPO 중 하나. Eric Lefkofsky(그루폰 공동창업자)가 창업·CEO." },
    { "id": "ev_t_2", "type": "event", "label": "세계 최대 임상-유전체 DB 구축", "desc": "미국 50개 이상 대형 병원 시스템과 파트너십. 6,000만 건 이상 익명화 환자 기록 + 유전체(NGS) 데이터 결합. 단순 EMR이 아닌 분자 프로파일 연계 멀티모달 데이터베이스." },
    { "id": "ev_t_3", "type": "event", "label": "빅파마 AI 파트너십 체결", "desc": "Pfizer, AstraZeneca, Novartis, GSK 등 글로벌 상위 빅파마 대부분과 임상시험 최적화·바이오마커 발굴·약물 반응 예측 AI 계약 체결. 다수가 장기 로열티 구조." },
    { "id": "ev_t_4", "type": "event", "label": "Ambry Genetics 인수", "desc": "2024년 유전자 검사 전문 기업 Ambry Genetics를 $600M에 인수. 소비자·임상 유전체 검사 역량을 수직 통합, 데이터 수집 속도 비약적 가속." },
    { "id": "ev_t_5", "type": "event", "label": "TIME AI 플랫폼 출시", "desc": "Tempus Intelligence Medical Ecosystem. 의사가 환자 차트에서 AI 치료 추천·임상시험 적합성 검색·약물 반응 예측을 실시간으로 확인하는 임상 의사결정 지원 SaaS 플랫폼." },

    // ==========================================
    // 3. 파급 효과 (Effect) — 인과적 결과
    // ==========================================
    { "id": "ef_t_1", "type": "effect", "label": "진단 AI SaaS 수익화", "depth": "단기", "sentiment": "pos", "desc": "병원·보험사에 TIME 플랫폼을 구독 형태로 공급. 2024년 기준 연매출 $700M+, YoY 30%+ 성장. 반복 수익(Recurring Revenue) 구조로 현금흐름 안정성 확보." },
    { "id": "ef_t_2", "type": "effect", "label": "파마 파트너십 로열티 수익", "depth": "중기", "sentiment": "pos", "desc": "빅파마가 임상시험을 Tempus 데이터로 설계·실행하며 성공 시 로열티 지급. 선행 계약금 + 마일스톤 + 로열티 3중 수익 구조. 고마진 반복 수익원." },
    { "id": "ef_t_3", "type": "effect", "label": "데이터 경제적 해자", "depth": "장기", "sentiment": "pos", "desc": "데이터가 쌓일수록 AI 모델 정확도 향상 → 더 많은 병원·파마 파트너 유인 → 더 많은 데이터 수집의 선순환. 경쟁사가 복제 불가한 독점적 임상 데이터셋." },
    { "id": "ef_t_4", "type": "effect", "label": "헬스케어 AI 인프라 독점", "depth": "장기", "sentiment": "pos", "desc": "임상 데이터(수집) → AI 모델(분석) → SaaS 플랫폼(적용) → 유전체 검사(실행)까지 수직 통합 완성. 의료 AI의 AWS와 같은 인프라 플레이어로 포지셔닝." },
    { "id": "ef_t_5", "type": "effect", "label": "수익성 확보 지연 리스크", "depth": "중기", "sentiment": "neg", "desc": "[핵심 리스크] 공격적 M&A와 R&D 투자로 영업적자 지속. 2024년 순손실 $700M 수준. 금리 고환경에서 BEP 달성 전 자금 조달 어려움 발생 시 밸류에이션 디스카운트 압력." },
    { "id": "ef_t_6", "type": "effect", "label": "빅테크 경쟁 위협", "depth": "장기", "sentiment": "neg", "desc": "[구조적 리스크] Google Health, Microsoft Nuance, AWS HealthLake 등 자본·인프라 압도적 빅테크의 헬스케어 AI 진출. 데이터 독점성이 무너질 경우 밸류에이션 근거 붕괴." }
  ],
  "edges": [
    // 1. 원인 → 핵심 사건
    { "from": "ca_t_1", "to": "ev_t_2", "label": "데이터 통합 필요성" },
    { "from": "ca_t_1", "to": "ev_t_5", "label": "임상 AI 솔루션 갭" },
    { "from": "ca_t_2", "to": "ev_t_3", "label": "파마 파트너십 수요" },
    { "from": "ca_t_3", "to": "ev_t_4", "label": "유전체 검사 수직 통합" },
    { "from": "ca_t_3", "to": "ev_t_5", "label": "정밀 치료 추천 AI" },
    { "from": "ca_t_4", "to": "ev_t_1", "label": "AI 상업화 가속" },
    { "from": "ca_t_4", "to": "ev_t_2", "shared": true, "label": "대규모 데이터 처리 가능" },

    // 2. 핵심 사건 → 핵심 사건
    { "from": "ev_t_2", "to": "ev_t_3", "label": "독점 데이터로 파마 유인" },
    { "from": "ev_t_4", "to": "ev_t_2", "shared": true, "label": "유전체 DB 고도화" },
    { "from": "ev_t_1", "to": "ev_t_4", "label": "IPO 자금으로 M&A" },

    // 3. 핵심 사건 → 파급 효과
    { "from": "ev_t_5", "to": "ef_t_1", "label": "병원 SaaS 구독 수익" },
    { "from": "ev_t_3", "to": "ef_t_2", "label": "파마 로열티 계약" },
    { "from": "ev_t_2", "to": "ef_t_3", "label": "데이터 해자 형성" },
    { "from": "ev_t_4", "to": "ef_t_3", "shared": true, "label": "유전체 데이터 추가" },

    // 4. 파급 효과 수렴 → 플랫폼 독점
    { "from": "ef_t_1", "to": "ef_t_3", "label": "수익→데이터 재투자" },
    { "from": "ef_t_2", "to": "ef_t_3", "shared": true, "label": "로열티→DB 확장" },
    { "from": "ef_t_3", "to": "ef_t_4", "label": "해자→수직 통합 완성" },

    // 5. 리스크 연결
    { "from": "ev_t_1", "to": "ef_t_5", "label": "고밸류 + 적자 구조" },
    { "from": "ev_t_4", "to": "ef_t_5", "shared": true, "label": "M&A 비용 부담" },
    { "from": "ef_t_4", "to": "ef_t_6", "shared": true, "label": "시장 매력도 → 빅테크 진출" }
  ],
  "meta": {
    "created": "2026-04-15",
    "updated": "2026-04-15",
    "version": "1.0",
    "description": "Tempus AI 헬스케어 AI 플랫폼 인과관계 분석 그래프"
  }
};
