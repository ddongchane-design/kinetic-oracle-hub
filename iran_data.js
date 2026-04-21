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
    { "id": "ef_summit_fail", "type": "event", "label": "고위급 협상 '노딜' 결렬 (4/12)", "desc": "21시간 마라톤 협상 끝 합의 실패 선언. JD Vance 美 부통령 '이란이 핵폐기 조건 수용 거부'로 미 대표단 전격 철수. 협상 재개 여지 불투명.", "x": null, "y": null },
    { "id": "ef_israel_strikes", "type": "effect", "label": "이스라엘 공습/변수 지속", "desc": "휴전 기간에도 이스라엘이 레바논 및 대이란 후방 교란 작전을 지속하며 언제 깨질지 모르는 살얼음판.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_pressure_max", "type": "effect", "label": "트럼프/Vance 초강경 압박", "desc": "미 군함을 파병 배치하여 무력 압박. 트럼프 행정부는 '양보 없는 항복'만을 요구하며 최후의 고사 작전 돌입.", "depth": "중기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_iran_collapse", "type": "effect", "label": "독재 정권 붕괴 임계점", "desc": "[핵심] 미-이스라엘 외부 군사 타격과, 인터넷이 차단된 혹독한 환경에도 피를 흘리며 맞서는 내부 시위대의 양동 작전 성과 가시화.", "depth": "중기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_iran_alliance", "type": "effect", "label": "새로운 이란, 민주/우방 연대", "desc": "정권 전복 및 민주 혁명 성공 시, 70년대 절친 국가였던 한국과 미국을 향한 경제 개방 및 지정학적 리스크 완전 해소 기대.", "depth": "장기", "sentiment": "pos", "x": null, "y": null },

    // 5. 전후(Post-War) 체제 및 매크로 대전환 (N차 파급효과 연쇄)
    { "id": "ev_iran_war_end", "type": "event", "label": "종전 선언 & 임시정부", "desc": "독재 정권 완전 붕괴 후 범국민 임시정부 수립 및 전면전 공식 종료 선언.", "x": null, "y": null },
    { "id": "ef_oil_stabilize", "type": "effect", "label": "유가 정상화 (1차 파급)", "desc": "가장 큰 지정학적 리스크 소멸로 호르무즈 해협 완전 뚫리며 WTI 60~70불대 급안정.", "depth": "단기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_inf_down", "type": "effect", "label": "글로벌 인플레 하락 (2차 파급)", "desc": "에너지 가격(1차 파급) 안정의 결과로 끈적하던 인플레이션 지표가 극적으로 하락 전환.", "depth": "중기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_rate_cut", "type": "effect", "label": "연준 금리 빅컷 (3차 파급)", "desc": "물가 안정(2차 파급) 달성 가시화로 연준과 글로벌 중앙은행들 동시다발적 릴레이 금리 인하.", "depth": "장기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_tech_rally", "type": "effect", "label": "빅테크·코인 투자 랠리 (N차)", "desc": "금리 인하(3차) 발 글로벌 거시 유동성 폭발로 위험자산(나스닥, 비트코인 등) 강력한 안도 랠리.", "depth": "장기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_rebuild_project", "type": "effect", "label": "전후 재건 펀드 발족 (1차 파급)", "desc": "임시정부 출범 직후 미국의 마샬 플랜급 황폐화된 이란 인프라 복구용 거시 펀드 조성.", "depth": "단기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_const_boom", "type": "effect", "label": "K-건설/기계 특수 (2차/수혜)", "desc": "전후 복구 플랜(1차) 발주로 과거 중동 신화를 이끌었던 한국 건설사 및 인프라 기업 대형 수주 잭팟.", "depth": "장기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_airline_profit", "type": "effect", "label": "항공/해운주 실적 턴 (2차/수혜)", "desc": "유가 폭락(1차)에 따른 막대한 유류비 절감과 중동 영공 정상화로 항운사 이익 스프레드 폭발.", "depth": "중기", "sentiment": "pos", "x": null, "y": null },

    // 6. 에너지 안보 패러다임 전환 (대체 에너지 슈퍼사이클)
    { "id": "ef_energy_security", "type": "effect", "label": "국가 에너지 안보 위기 (1차 파급)", "desc": "호르무즈 봉쇄 등 화석연료 국소 의존의 치명적 약점이 노출되며 각국의 에너지 안보 정책 전면 재검토.", "depth": "단기", "sentiment": "neg", "x": null, "y": null },
    { "id": "ef_alt_energy_demand", "type": "effect", "label": "신재생/원전 수요 폭발 (2차 파급)", "desc": "단순한 친환경을 넘어 '국가 생존 안보' 차원에서 태양광, 풍력, 차세대 원전(SMR)으로의 구조적 탈바꿈(Structural Shift).", "depth": "중기", "sentiment": "pos", "x": null, "y": null },
    { "id": "ef_green_invest_boom", "type": "effect", "label": "대체 에너지 슈퍼사이클 (3차/결론)", "desc": "신재생 인프라 확충과 맞물려 우라늄, 전력망(그리드) 장비 관련주 등 대체 에너지 테마 장기 대세 상승장 돌입.", "depth": "장기", "sentiment": "pos", "x": null, "y": null }
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
    { "from": "ef_kr_economy", "to": "ef_iran_alliance", "shared": false, "label": "우방 교역 복구로 한국 스태그 완화 기대" },

    // 4. 전후(Post-War) 랠리 연쇄망 (N차 파급효과)
    { "from": "ef_iran_alliance", "to": "ev_iran_war_end", "label": "새로운 정권 이양 및 종전" },
    { "from": "ev_iran_war_end", "to": "ef_oil_stabilize", "label": "[1차 연쇄] 전쟁 리스크 완전 제거" },
    { "from": "ef_oil_stabilize", "to": "ef_inf_down", "shared": true, "label": "[2차 연쇄] 유가 하락이 부른 수입물가 붕괴" },
    { "from": "ef_inf_down", "to": "ef_rate_cut", "shared": true, "label": "[3차 연쇄] 릴레이 금리 인하 명분 확보" },
    { "from": "ef_rate_cut", "to": "ef_tech_rally", "shared": true, "label": "[N차 분기: 투자길목] 거대 유동성 스위치 ON" },
    { "from": "ev_iran_war_end", "to": "ef_rebuild_project", "label": "[1차 분기] 인프라 정상화 최우선 과제" },
    { "from": "ef_rebuild_project", "to": "ef_const_boom", "shared": true, "label": "[2차 분기: 투자길목] 韓 입찰 참여 확정적" },
    { "from": "ef_oil_stabilize", "to": "ef_airline_profit", "shared": false, "label": "[2차 분기: 투자길목] 항공기 유류비 즉각 절감" },
    { "from": "ef_kr_economy", "to": "ef_const_boom", "shared": true, "label": "수출 절벽 우려 완전 타개" },

    // 5. 에너지 패러다임 전환 연쇄망 (고통이 부른 진화)
    { "from": "ev_hormuz_block", "to": "ef_energy_security", "shared": true, "label": "[1차 연쇄] 화석 연료 공급망의 아킬레스건 체감" },
    { "from": "ef_oil_spike", "to": "ef_energy_security", "shared": true, "label": "[1차 연쇄] 석유 의존의 파멸적 거시 경제 데미지" },
    { "from": "ef_energy_security", "to": "ef_alt_energy_demand", "label": "[2차 연쇄] 단기 비용을 무시한 강제적 패러다임 시프트" },
    { "from": "ef_alt_energy_demand", "to": "ef_green_invest_boom", "label": "[3차/투자길목] 친환경·인프라·그리드 장기 메가 트렌드 형성" }
  ],
  "meta": {
    "created": "2026-04-12",
    "version": "3.0",
    "description": "이란 실상 + 최신 미·이란 협상 결렬 + 글로벌 매크로 자산 시장(원유, 금, KOSPI) 충격망 융합 완성판"
  }
};
