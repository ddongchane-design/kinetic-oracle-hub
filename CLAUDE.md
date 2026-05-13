# Kinetic Oracle Hub — Claude 작업 가이드

## 프로젝트 개요

매크로 분석 지식 그래프 웹앱. 사건의 원인(Cause) → 핵심 사건(Event) → 파급 효과(Effect) 인과관계를 시각화.
배포: Vercel 자동 배포 (GitHub main 브랜치 푸시 시 자동 트리거)
URL: https://kinetic-oracle-hub.vercel.app/

---

## 파일 구조

```
knowledge-graph/
├── index.html          ← 메인 허브 (워크스페이스 카드 + 인사이트 피드)
├── insights_data.js    ← 모든 그래프 공통 인사이트 DB
├── bmnr_graph.html     ← BMNR 그래프 뷰어
├── bmnr_data.js        ← BMNR 노드/엣지 데이터
├── iran_graph.html     ← 이란전쟁 그래프 뷰어
├── iran_data.js        ← 이란전쟁 노드/엣지 데이터
├── space_graph.html    ← 우주산업 그래프 뷰어
├── space_data.js       ← 우주산업 노드/엣지 데이터
└── generic_graph.html  ← 범용 그래프 (테스트용)
```

---

## 자동화 규칙 (반드시 준수)

### 날짜 자동화
- **카드 날짜**: `index.html`은 `insights_data.js`의 최신 인사이트 날짜를 자동으로 카드에 반영. **index.html의 날짜를 수동으로 수정하지 않아도 됨.**
- **카드 정렬**: 최신 인사이트 날짜 기준 자동 내림차순 정렬.
- **인사이트 피드 정렬**: 날짜 기준 자동 내림차순 정렬.

### 날짜 입력 규칙
- 인사이트 작성 시 `date` 필드는 **항상 오늘 날짜** (`YYYY-MM-DD` 형식)로 작성.
- 보도자료나 문서의 날짜가 아닌, **작업하는 당일 날짜** 기준.

---

## 작업 유형별 절차

### 1. 기존 그래프에 내용 추가/업데이트

수정 파일: `xxx_data.js` + `insights_data.js`만 수정하면 끝.
**`index.html`은 건드리지 않아도 자동 반영됨.**

**단계:**
1. `xxx_data.js`에 노드/엣지 추가
2. `insights_data.js`에 인사이트 추가 (오늘 날짜로)
3. 깃허브 푸시 → Vercel 자동 배포

### 2. 새 분야(그래프) 추가

**단계:**
1. 기존 `xxx_graph.html` 복사 → 새 이름으로 저장 (예: `crypto_graph.html`)
2. 새 `xxx_data.js` 데이터 파일 생성
3. `index.html`의 `WORKSPACES` 배열에 카드 1개 추가 (날짜는 임의로 설정해도 됨, 인사이트 추가 시 자동 갱신)
4. `insights_data.js`에 인사이트 추가 (오늘 날짜로) → 카드 날짜 자동 갱신
5. 깃허브 푸시 → Vercel 자동 배포

---

## 데이터 구조

### 노드 (xxx_data.js)

```javascript
{
  "id": "ca_m_1",         // 타입 접두사 + 그룹 + 번호
  "type": "cause",        // cause | event | effect
  "label": "짧은 제목",   // 15자 이내 권장
  "desc": "상세 설명",
  "depth": "단기",        // effect 노드만: 단기 | 중기 | 장기
  "sentiment": "pos"      // effect 노드만: pos | neg
}
```

**ID 네이밍 규칙:**
- 원인: `ca_[그룹]_[번호]` (예: `ca_m_1`, `ca_b_2`)
- 핵심 사건: `ev_[그룹]_[번호]` (예: `ev_iran_001`)
- 파급 효과: `ef_[그룹]_[번호]` (예: `ef_r_3`)

### 엣지 (xxx_data.js)

```javascript
{
  "from": "노드ID",
  "to": "노드ID",
  "shared": true,         // 교차 연결 여부 (선택)
  "label": "연결 설명"    // 선택
}
```

### 파급효과 생성 및 연결 규칙 (N-th Order Thinking)
- 사건(Event)에서 파급효과(Effect) 노드들을 1차원적(병렬)으로만 모두 연결하는 방식을 지양할 것.
- 항상 2~3단계 앞을 내다보는 **연쇄적인 인과관계(길목 지키기)** 로직을 설계해야 함.
- **연쇄 예시:** 사건발생 → 1차 효과(단기) → 2차 효과(중기) → 3차 효과(장기/투자 및 수혜처)
- **멀티 분기(Branching) 구조:** 연쇄 흐름은 반드시 하나의 외길일 필요가 없음. 하나의 1차 효과에서 여러 개의 2차 파급효과로 펼쳐지거나 갈라지는 트리(Tree)형 구조를 적극 구성할 것.
- 엣지의 `from`과 `to`를 설정할 때, 1차 파급효과 노드 ID가 2차 파급효과 노드의 `from`이 되도록 연쇄 논리에 맞춰 정밀하게 연결을 구현해야 함.

### 인사이트 (insights_data.js)

```javascript
{
  "id": "ins_bmnr_001",             // ins_[그래프]_[번호]
  "date": "2026-04-14",             // 오늘 날짜 (YYYY-MM-DD)
  "targetGraph": "bmnr_graph.html", // 연결될 그래프 파일명
  "targetNodes": ["ev_b_1"],        // 클릭 시 포커스할 노드 ID 배열
  "title": "인사이트 제목",
  "summary": "한 줄 요약",
  "content": "### 마크다운 형식 본문..."
}
```

---

## 그래프 디자인 표준

모든 그래프는 아래 기준을 따름:

- **배경**: 별빛 스타필드 애니메이션 (`#starfield` + canvas)
- **헤더 패딩**: `px-4 md:px-8` (모바일 대응)
- **검색창**: `hidden md:flex` (모바일 숨김)
- **인사이트 패널 너비**: `lg:w-80`
- **body overflow**: `overflow: hidden` 사용 금지 (모바일 스크롤 차단됨)
- **컬러 테마**: 그래프별 독립 유지 (통일 불필요)
- **템플릿 기준**: 새 그래프는 반드시 `space_graph.html`을 복사해서 시작 (또는 최근 그래프 파일)

### PICK 마크 기능

특정 노드에 황금 애니메이션 링 + ★ PICK 배지를 표시해 "곧 현실화될 핵심 투자 포인트"를 강조하는 기능.

**추가 방법:**

1. 그래프 JS 최상단 `COL`, `RAD` 상수 선언 바로 아래에 추가:
```javascript
const PICK_NODES = ['ev_xxx_1', 'ef_xxx_2'];  // PICK 표시할 노드 ID 배열
```

2. `draw()` 함수 내 노드 루프의 Label 렌더링 블록 **직후** (루프 종료 `});` 직전)에 추가:
```javascript
// PICK badge
const isPick = PICK_NODES.includes(n.id);
if(isPick && !fadeOutNode) {
  const pulse = 0.6 + 0.4 * Math.sin(now * 0.0022);
  const pr = r + 16;
  ctx.beginPath(); ctx.arc(n.x, n.y, pr+10, 0, Math.PI*2);
  ctx.fillStyle = `rgba(251,191,36,${0.07*pulse})`; ctx.fill();
  ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI*2);
  ctx.strokeStyle = `rgba(251,191,36,${0.85*pulse})`;
  ctx.lineWidth = 2.2/camera.s;
  ctx.shadowColor='#fbbf24'; ctx.shadowBlur=16*pulse;
  ctx.stroke(); ctx.shadowBlur=0;
  const bText = '★ PICK';
  ctx.font = `bold ${10/camera.s}px "Inter",sans-serif`;
  ctx.textAlign = 'center';
  const tw = ctx.measureText(bText).width;
  const bw=tw+12, bh=16/camera.s, bx=n.x-bw/2, by=n.y-pr-bh-4;
  ctx.fillStyle=`rgba(251,191,36,${0.95*pulse})`;
  ctx.beginPath();
  if(ctx.roundRect) { ctx.roundRect(bx,by,bw,bh,4/camera.s); } else { ctx.rect(bx,by,bw,bh); }
  ctx.fill();
  ctx.fillStyle='#0a0a0a';
  ctx.fillText(bText, n.x, by+bh*0.72);
}
```

**언제 사용하나:**
- "이미 가시화됐거나 임박한" 핵심 투자 길목 노드에 표시
- 보통 핵심 사건(event) 1~2개 + 중장기 파급효과(effect) 1~2개 선택
- 과하면 의미 희석 → 그래프 당 3~4개 이하로 제한

### 노드 배치 간격 (신규 그래프 필수 적용)

새로 추가하는 그래프의 `initPositions()` 함수는 아래 수치를 사용:

```javascript
// ✅ 신규 그래프 표준 (space_graph.html 기준)
causes.forEach((n,i) => {
  if(n.x==null) {
    n.x = W * 0.18;  // 더 바깥쪽 (기존 0.2 → 0.18)
    n.y = 80 + i*(H-160)/Math.max(causes.length-1,1) + (Math.random()-.5)*25;
  }
});
effects.forEach((n,i) => {
  if(n.x==null) {
    n.x = W * 0.82;  // 더 바깥쪽 (기존 0.8 → 0.82)
    n.y = 80 + i*(H-160)/Math.max(effects.length-1,1) + (Math.random()-.5)*25;
  }
});
```

> 기존 그래프(bmnr, iran)는 0.2 / 0.8 그대로 유지. 변경 금지.

---

## 배포 프로세스

```bash
git add [수정파일]
git commit -m "커밋 메시지"
git push origin main
```

Vercel이 GitHub main 브랜치를 감지해 자동 배포. 완료까지 1~2분 소요.
수동 트리거 필요 시: 빈 커밋 `git commit --allow-empty` 사용.

---

## 현재 운영 중인 그래프 목록

| 파일 | 주제 | 데이터 파일 | PICK 노드 |
|------|------|------------|-----------|
| `bmnr_graph.html` | BMNR(Bitmine) ETH 트레저리 전략 | `bmnr_data.js` | - |
| `iran_graph.html` | 이란전쟁 매크로 분석 | `iran_data.js` | - |
| `space_graph.html` | 우주산업 분석 | `space_data.js` | - |
| `tempus_graph.html` | Tempus AI 헬스케어 AI 플랫폼 | `tempus_data.js` | - |
| `hyundai_graph.html` | 현대바이오랜드 기업 분석 | `hyundai_data.js` | - |
| `ai_graph.html` | AI 패권 및 인프라 경쟁 | `ai_data.js` | - |
| `ondevice_graph.html` | 온디바이스 & 피지컬 AI | `ondevice_data.js` | - |
| `humanoid_graph.html` | 휴머노이드 대량생산 & 상업화 | `humanoid_data.js` | `ev_hm_1`, `ev_hm_2`, `ev_hm_4` |
| `eth_graph.html` | 이더리움 & DeFi·RWA 분석 | `eth_data.js` | `ev_eth_1`, `ef_eth_4`, `ef_eth_7` |
| `bci_graph.html` | 뇌컴퓨터 인터페이스(BCI) 산업 분석 | `bci_data.js` | `ev_bci_2`, `ef_bci_5`, `ef_bci_8` |
| `generic_graph.html` | 범용/테스트 | `data.js` | - |
