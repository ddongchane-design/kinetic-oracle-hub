window.DATA = {
  "nodes": [
    // ==========================================
    // 1. 거시/유동성 환경 (Macro)
    // ==========================================
    { "id": "ca_m_1", "type": "cause", "label": "미 국가부채 한계점", "desc": "GDP 대비 120% 돌파. 장기채 발행이 어려워 단기 국채의 기계적 매수처가 절실해진 매크로 환경." },
    { "id": "ca_m_2", "type": "cause", "label": "기존 상업은행 보호", "desc": "코인이 자체 이자를 주면 은행 뱅크런 발생 우려. 신용 창출 기능 보호를 위해 강력한 규제가 필요해짐." },
    { "id": "ev_m_1", "type": "event", "label": "스테이블코인 법제화", "desc": "코인 단순 보유 이자 지급을 원천 금지하고, 준비금을 단기 국채로 1:1 매칭하도록 의무화하는 법안." },
    { "id": "ef_m_1", "type": "effect", "label": "막대한 유동성 펌핑", "depth": "장기", "sentiment": "pos", "desc": "코인 발행사들이 준비금으로 단기 국채를 싹쓸이하며 시장에 준(準) 연준급 유동성을 기계적으로 공급." },

    // ==========================================
    // 2. 자본 유입 / 규제 돌파 (Catalyst)
    // ==========================================
    { "id": "ca_i_1", "type": "cause", "label": "월가 직접투자 불가", "desc": "거대 은행들은 해킹, 주주 설득, 회계 및 규제 리스크로 인해 이더리움을 직접 매수하는 것이 사실상 불가능함." },
    { "id": "ev_i_1", "type": "event", "label": "아메리칸 퓨어 구축", "desc": "100% 미국 영토 내 합법적 이더리움 검증자 네트워크 구축. 톰 리 등 거대 자본과 네트워크가 합류." },
    { "id": "ef_i_1", "type": "effect", "label": "완벽한 합법 우회로", "depth": "중기", "sentiment": "pos", "desc": "월가 기관들은 골치 아픈 규제 없이 '상장 주식' 하나만 매수해 이더리움 편입 효과를 누릴 마스터키 확보." },

    // ==========================================
    // 3. BMNR 핵심 방어 및 인프라 (Core)
    // ==========================================
    { "id": "ca_b_1", "type": "cause", "label": "글로벌 최대 ETH 보유", "desc": "기존 채굴 기업에서 완벽히 전환, 전체 ETH의 4%에 달하는 막대한 물량 기반 확보." },
    { "id": "ca_b_2", "type": "cause", "label": "수수료 내재화 필요성", "desc": "외부 플랫폼 위탁으로 발생하는 막대한 스테이킹 이자 누수를 끊어내기 위한 인프라 자립 필요." },
    { "id": "ev_b_1", "type": "event", "label": "NYSE 빅보드 상장", "desc": "월가 메인보드 입성과 함께 단기 하락 방어용 40억 달러 자사주 매입(Buyback) 동시 발표." },
    { "id": "ev_b_2", "type": "event", "label": "피어트 홀딩스 인수", "desc": "독자 스테이킹 인프라 구축을 위해 호주 기반 기술 기업 지분을 100% 인수." },
    { "id": "ef_b_1", "type": "effect", "label": "$4B 자사주 매입", "depth": "단기", "sentiment": "pos", "desc": "상장 직후 하락을 막고 mNAV(순자산가치 대비 주가) 디스카운트를 억제하기 위한 즉각적 방어기제." },
    { "id": "ef_b_2", "type": "effect", "label": "숏 스퀴즈 압박", "depth": "단기", "sentiment": "pos", "desc": "자사주 대량 매입으로 유통 물량이 마르면서, 공매도 세력을 압박해 단기 급등을 유발." },

    // ==========================================
    // 4. 신규 촉매 (2026-04-13 업데이트)
    // ==========================================
    { "id": "ca_genius", "type": "cause", "label": "GENIUS법안 + SEC Project Crypto", "desc": "2025년 금융 혁신의 빅뱅. 스테이블코인 규제 명확화 + SEC의 크립토 친화 전환으로 기관 자금의 합법적 유입 고속도로가 열림. 1971년 브레튼우즈 체제 붕괴 이후 최대의 금융 패러다임 전환으로 평가됨." },
    { "id": "ev_mavan", "type": "event", "label": "MAVAN 기관 스테이킹 플랫폼 출시", "desc": "Made in America VAlidator Network. 원래 BMNR 자체 ETH 트레저리 전용으로 개발. 3,334,637 ETH(약 $7.4B) 스테이킹 운영 중. 향후 외부 기관·커스터디 업체로 서비스 확장 계획." },
    { "id": "ev_eth_118b", "type": "event", "label": "총 자산 $11.8B & ETH 4.04% 달성", "desc": "2026년 4월 13일 기준: ETH 4,874,858개($10.75B) + 현금 $719M + ORBS지분 $850M. 전체 ETH 공급량 1억 2,070만개의 4.04%. '5%의 연금술' 목표의 81% 달성. ETH 트레저리 세계 1위." },
    { "id": "ef_staking_annual", "type": "effect", "label": "연간 스테이킹 수익 $310M 잠재력", "depth": "중기", "sentiment": "pos", "desc": "현재 3,334,637 ETH 스테이킹 = 연환산 $212M 수익(수익률 2.89%). 보유 ETH 전량 스테이킹 시 연간 $310M 달성 가능. CESR 기준 2.73%. MAVAN 자체 인프라로 수수료 완전 내재화." },
    { "id": "ef_eth_war_hedge", "type": "effect", "label": "이란전쟁 ETH 헤지 자산 입증", "depth": "단기", "sentiment": "pos", "desc": "이란전쟁 발발 이후 ETH +17.4% 상승. S&P500 대비 +1,830bp 초과수익. 금(Gold) 대비 +2,743bp 압도. 전시(戰時) 가치저장 수단으로 ETH의 위상 재확인. 이더리움 트레저리 전략의 유효성 증명." },

    // ==========================================
    // 5. 플라이휠 완성 및 잠재 리스크 (Result & Risk)
    // ==========================================
    { "id": "ef_r_1", "type": "effect", "label": "보상 100% 내재화", "depth": "중기", "sentiment": "pos", "desc": "자체 인프라를 통해 수수료 중간 유통을 제거, 스테이킹 이자 전액을 기업 순수익으로 온전히 흡수." },
    { "id": "ef_r_2", "type": "effect", "label": "블랙록 ETF 킬러", "depth": "장기", "sentiment": "pos", "desc": "수수료만 떼어가는 현물 ETF와 달리, 자체 이자(배당)를 끊임없이 생산해 기관 포트폴리오 1순위로 등극." },
    { "id": "ef_r_3", "type": "effect", "label": "초격차 복리 플라이휠", "depth": "장기", "sentiment": "pos", "desc": "ETH 기초자산 상승 + 수수료 제로 스테이킹 수익 + 지속적 자사주 매입이 결합된 무한 성장 엔진." },
    { "id": "ef_r_4", "type": "effect", "label": "플라이휠 셧다운", "depth": "장기", "sentiment": "neg", "desc": "[핵심 리스크] ETH 폭락 시 mNAV가 할인 구간에 진입하며, 자본 조달 실패 및 현금 고갈로 복리 엔진이 정지될 위험." }
  ],
  "edges": [
    // 1. 거시 경제 연결 (Macro Flow)
    { "from": "ca_m_1", "to": "ev_m_1" },
    { "from": "ca_m_2", "to": "ev_m_1" },
    { "from": "ev_m_1", "to": "ef_m_1", "label": "기계적 국채 매수" },

    // 2. 월가 기관 우회 연결 (Institutional Flow)
    { "from": "ca_i_1", "to": "ev_i_1" },
    { "from": "ev_i_1", "to": "ef_i_1", "label": "규제 장벽 완벽 회피" },

    // 3. BMNR 액션 및 방어 (BMNR Actions)
    { "from": "ca_b_1", "to": "ev_b_1" },
    { "from": "ev_b_1", "to": "ef_b_1", "label": "상장 직후 주가 방어" },
    { "from": "ef_b_1", "to": "ef_b_2", "shared": true, "label": "유통물량 극비 축소" },
    { "from": "ca_b_2", "to": "ev_b_2" },
    { "from": "ev_b_2", "to": "ef_r_1", "label": "수수료 누수 완벽 차단" },

    // 4. 플라이휠로의 수렴 (The Magic)
    { "from": "ef_m_1", "to": "ef_r_3", "shared": true, "label": "가상자산 유동성 수혜" },
    { "from": "ef_i_1", "to": "ef_r_2", "shared": true, "label": "거대 기관 자금 흡수" },
    { "from": "ef_r_1", "to": "ef_r_3" },
    { "from": "ef_b_2", "to": "ef_r_3", "shared": true, "label": "mNAV 프리미엄 유지" },
    { "from": "ef_r_3", "to": "ef_r_2", "label": "배당 경쟁력 압도" },

    // 5. 신규 촉매 연결 (2026-04-13)
    { "from": "ca_genius", "to": "ev_m_1", "label": "규제 명확성 부여" },
    { "from": "ca_genius", "to": "ef_i_1", "shared": true, "label": "기관 유입 고속도로" },
    { "from": "ca_b_2", "to": "ev_mavan", "label": "수수료 내재화 실행" },
    { "from": "ev_mavan", "to": "ef_r_1", "label": "MAVAN 완전 내재화" },
    { "from": "ev_mavan", "to": "ef_staking_annual", "label": "스테이킹 수익 극대화" },
    { "from": "ca_b_1", "to": "ev_eth_118b", "label": "물량 4.04% 달성" },
    { "from": "ev_b_1", "to": "ev_eth_118b", "shared": true, "label": "NYSE 업리스트 효과" },
    { "from": "ev_eth_118b", "to": "ef_eth_war_hedge", "label": "전쟁 헤지 성과 확인" },
    { "from": "ef_eth_war_hedge", "to": "ef_r_3", "shared": true, "label": "전시 헤지+플라이휠 수렴" },
    { "from": "ef_staking_annual", "to": "ef_r_3", "shared": true, "label": "수익 복리 투입" },

    // 6. 리스크 연결 (Critical Risk)
    { "from": "ef_b_1", "to": "ef_r_4", "shared": true, "label": "현금 소진의 양날의 검" },
    { "from": "ca_b_1", "to": "ef_r_4", "shared": false, "label": "단일 자산 의존 한계" }
  ],
  "meta": {
    "created": "2026-04-12",
    "updated": "2026-04-14",
    "version": "3.1",
    "description": "4/13 보도자료 반영: GENIUS법안, MAVAN 출시, $11.8B 달성, 이란전쟁 ETH헤지 노드 추가"
  }
};