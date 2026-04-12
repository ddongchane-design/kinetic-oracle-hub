window.DATA = {
  "nodes": [
    // 1. 전쟁 발발 및 자산/매크로 쇼크 (Macro & Market Shock)
    { "id": "ev_iran_1", "type": "event", "label": "미-이스라엘 대규모 공습", "desc": "2026년 2월 말, 가자지구 갈등을 넘어 미국과 이스라엘의 이란 본토 맹공으로 개전(開戰).", "x": null, "y": null },
    { "id": "ev_hormuz_block", "type": "event", "label": "호르무즈 해협 통제", "desc": "전쟁 보복으로 이란이 글로벌 해상 원유 수송량의 20%를 담당하는 핵심 무역로 봉쇄 위협 고조.", "x": null, "y": null },
    { "id": "ef_oil_spike", "type": "effect", "label": "유가 폭등 (WTI $124)", "desc": "초기 유가 50% 폭등. 휴전 방어로 90불대로 내려왔으나 여전히 전쟁 전 대비 30% 폭등한 심각한 수치.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_gold_drop", "type": "effect", "label": "금(Gold) 가격 이례적 폭락", "desc": "전통적 안전자산임에도, 압도적인 '강달러'와 '금리 인하 후퇴'라는 이중고로 인해 단기에 최대 28% 손실 발생.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_fed_delay", "type": "effect", "label": "스태그플레이션 & 금리동결", "desc": "에너지 발 인플레이션(OECD G20 4.0% 전망) 쇼크로 Fed(연준)와 ECB의 금리 인하 사이클이 완전 붕괴.", "depth": "중기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_kospi_crash", "type": "effect", "label": "KOSPI 사상 최악 폭락", "desc": "한국 증시 단일 최대 하락(-12%) 및 서킷브레이커 발동. 방산/에너지주만 상승하는 극단적 위험 기피(Risk-off).", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_kospi_rally", "type": "effect", "label": "KOSPI 단기 안도 랠리", "desc": "2주간의 한시적 휴전 소식에 극도의 공포(Risk-off)가 진정되며 글로벌 증시(S&P 등)와 함께 일시적 기술적 반등.", "depth": "단기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_kr_economy", "type": "effect", "label": "韓 경제 3중고 직격탄", "desc": "1,500원 돌파 초환율 + 고물가 + 고금리 펀치 지속. 성장률 0.4%p 하향, 비축유 26일분 경고등 켜짐.", "depth": "중기", "sentiment": "neg", "x": null, "y": null },

    // 2. 4월 휴전 및 최고위급 협상 (Negotiations)
    { "id": "ev_iran_ceasefire", "type": "event", "label": "2주 한시적 휴전 (4/7~8)", "desc": "이란의 호르무즈 해협 강제 개방을 조건으로 대면 협상을 위한 시간을 버는 매우 취약한 휴전 돌입.", "x": null, "y": null },
    { "id": "ev_iran_summit", "type": "event", "label": "이슬라마바드 고위급 회담", "desc": "4월 11일, 파키스탄 중재하에 미(JD Vance 부통령) - 이란(국회의장 등) 간 1979년 이후 최고위급 마라톤 협상.", "x": null, "y": null },
    { "id": "ca_us_demands", "type": "cause", "label": "美 핵폐기/원천봉쇄 요구", "desc": "미 협상팀 핵심 목표: 핵무기 개발 영구 동결 및 검증 지대 구축, 미사일 및 헤즈볼라 자금 조달 완전 차단.", "x": null, "y": null },
    { "id": "ca_iran_demands", "type": "cause", "label": "이란 농축권/동결 해제 요구", "desc": "이란 측 협상 목표: 우라늄 농축 기본 권리 보장, 전쟁 피해 보상 및 서방 국가에 동결된 모든 자산 즉각 해제.", "x": null, "y": null },

    // 3. 이란 내부 민심 및 참상 (Internal Sentiment)
    { "id": "ca_iran_regime", "type": "cause", "label": "47년 독재 억압의 분노", "desc": "경제 파탄과 고통의 원인은 외부 제재 탓이 아닌, 이슬람 독재 정권의 부패 때문이라는 국민적 분노 표출.", "x": null, "y": null },
    { "id": "ca_iran_nuke", "type": "cause", "label": "정권의 무모한 도발 반발", "desc": "과도한 팔레스타인/레바논 무장정파 자금 지원과 무리한 핵 개발 강행이 서방의 매를 벌었다는 내부 비판.", "x": null, "y": null },
    { "id": "ev_iran_protest", "type": "event", "label": "대규모 반정부 폭동 및 처형", "desc": "올해 1월 시작된 반정부 시위를 잔혹하게 무력 진압. 전쟁 정국을 이용해 한 달 동안 700여 명의 반대파를 도살.", "x": null, "y": null },
    { "id": "ev_iran_shield", "type": "event", "label": "비열한 인간 방패 전술", "desc": "시민용 미사일 대피소는 일절 짓지 않은 채, 정부 요인들이 미군과 이스라엘 폭격을 피하려 민간인 건물로 은신.", "x": null, "y": null },
    { "id": "ev_iran_leak", "type": "event", "label": "시민들의 이스라엘 첩보 협조", "desc": "혁명수비대 동선 및 고위층 회의실 위치를 텔레그램으로 첩보국에 역제보하여 외부 공격을 통한 자국 정권 타도 유도.", "x": null, "y": null },

    // 4. 파급 효과 및 전망 (Effects & Risks)
    { "id": "ef_summit_fail", "type": "effect", "label": "고위급 협상 '노딜' 결렬", "desc": "21시간 접전 끝 합의 실패. 미 대표단 철수 및 돌파구 난망.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_israel_strikes", "type": "effect", "label": "이스라엘 공습/변수 지속", "desc": "휴전 기간에도 이스라엘이 레바논 및 대이란 후방 교란 작전을 지속하며 언제 깨질지 모르는 살얼음판.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_pressure_max", "type": "effect", "label": "트럼프/Vance 초강경 압박", "desc": "미 군함을 파병 배치하여 무력 압박. 트럼프 행정부는 '양보 없는 항복'만을 요구하며 최후의 고사 작전 돌입.", "depth": "중기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_iran_collapse", "type": "effect", "label": "독재 정권 붕괴 임계점", "desc": "[핵심] 미-이스라엘 외부 군사 타격과, 인터넷이 차단된 혹독한 환경에도 피를 흘리며 맞서는 내부 시위대의 양동 작전 성과 가시화.", "depth": "중기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_iran_alliance", "type": "effect", "label": "새로운 이란, 민주/우방 연대", "desc": "정권 전복 및 민주 혁명 성공 시, 70년대 절친 국가였던 한국과 미국을 향한 경제 개방 및 지정학적 리스크 완전 해소 기대.", "depth": "장기", "sentiment": "pos", "x": null, "y": null }
  ],
  "edges": [
    // 1. 매크로 및 시장 충격망
    { "from": "ev_iran_1", "to": "ev_hormuz_block", "label": "전쟁 확대 보복 카드" },
    { "from": "ev_hormuz_block", "to": "ef_oil_spike", "shared": true, "label": "글로벌 원유 유통 20% 마비" },
    { "from": "ef_oil_spike", "to": "ef_fed_delay", "shared": true, "label": "물가 부양의 악순환" },
    { "from": "ef_oil_spike", "to": "ef_kospi_crash", "shared": true, "label": "수입 물가 파탄 및 투심 붕괴" },
    { "from": "ef_fed_delay", "to": "ef_gold_drop", "shared": true, "label": "고금리+강달러 펀치의 역설" },
    { "from": "ef_kospi_crash", "to": "ef_kr_economy", "shared": true, "label": "원화 가치 추락(1500원)" },
    { "from": "ef_fed_delay", "to": "ef_kr_economy", "shared": false, "label": "한은(BOK) 금리 딜레마 압박" },
    
    // 2. 협상 흐름
    { "from": "ef_oil_spike", "to": "ev_iran_ceasefire", "label": "세계적 인플레 고통 임계점 도달" },
    { "from": "ev_iran_ceasefire", "to": "ev_iran_summit", "shared": true, "label": "초단기 협상 테이블 마련" },
    { "from": "ev_iran_ceasefire", "to": "ef_kospi_rally", "shared": false, "label": "공포 진정 및 투심 회복" },
    { "from": "ef_kospi_crash", "to": "ef_kospi_rally", "shared": true, "label": "과대 낙폭 기술적 반등" },
    { "from": "ef_kospi_rally", "to": "ef_summit_fail", "shared": true, "label": "회담 결렬로 랠리 증발" },
    { "from": "ca_us_demands", "to": "ev_iran_summit", "label": "최후 통첩" },
    { "from": "ca_iran_demands", "to": "ev_iran_summit", "label": "생존 조건" },
    { "from": "ev_iran_summit", "to": "ef_summit_fail", "label": "이견차 좁히지 못함" },
    { "from": "ef_summit_fail", "to": "ef_pressure_max", "shared": true, "label": "강대강 무력 시위 전환" },
    { "from": "ev_iran_ceasefire", "to": "ef_israel_strikes", "shared": false, "label": "불안정한 휴전 전선" },
    { "from": "ef_israel_strikes", "to": "ef_summit_fail", "shared": true, "label": "신뢰 붕괴" },

    // 3. 내부 민심과 정권 붕괴 연결망
    { "from": "ev_iran_1", "to": "ev_iran_shield", "label": "시민의 목숨을 담보로 한 전쟁" },
    { "from": "ca_iran_regime", "to": "ev_iran_protest", "label": "경제 파탄과 분노의 시위화" },
    { "from": "ca_iran_nuke", "to": "ev_iran_protest", "label": "국부 유출 반대" },
    { "from": "ca_iran_regime", "to": "ca_iran_demands", "shared": false, "label": "기득권 유지를 위한 외교 고집" },
    { "from": "ev_iran_protest", "to": "ef_iran_collapse", "shared": true, "label": "레지스탕스의 피어린 희생 누적" },
    { "from": "ev_iran_shield", "to": "ef_iran_collapse", "shared": true, "label": "지도부 환멸 및 내부 군 분열 촉발" },
    { "from": "ev_iran_leak", "to": "ef_iran_collapse", "shared": true, "label": "적(이스라엘)의 공습을 정권 타도에 역이용" },
    { "from": "ef_pressure_max", "to": "ef_iran_collapse", "shared": true, "label": "외부 물리 타격 + 내부 시위 샌드위치" },
    { "from": "ef_iran_collapse", "to": "ef_iran_alliance", "label": "수십년간 억눌린 자유주의 정부 재건축" },
    { "from": "ef_kr_economy", "to": "ef_iran_alliance", "shared": false, "label": "우방 교역 복구로 한국 스태그 완화 기대" }
  ],
  "meta": {
    "created": "2026-04-12",
    "version": "3.0",
    "description": "이란 실상 + 최신 미·이란 협상 결렬 + 글로벌 매크로 자산 시장(원유, 금, KOSPI) 충격망 융합 완성판"
  }
};
