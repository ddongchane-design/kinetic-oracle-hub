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

| 파일 | 주제 | 데이터 파일 |
|------|------|------------|
| `bmnr_graph.html` | BMNR(Bitmine) ETH 트레저리 전략 | `bmnr_data.js` |
| `iran_graph.html` | 이란전쟁 매크로 분석 | `iran_data.js` |
| `space_graph.html` | 우주산업 분석 | `space_data.js` |
| `generic_graph.html` | 범용/테스트 | `data.js` |
