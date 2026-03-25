# devduel

GitHub 프로필로 개발자 트레이딩 카드를 만들어보세요. RPG 스탯, 성격 유형, 1:1 대결까지.

```bash
npx devduel torvalds
```

```
╔══════════════════════════════════════════════╗
║  ★★★★☆ Epic                         LV.83  ║
║                                              ║
║  torvalds                                    ║
║  "The Relentless Shipper"                    ║
║                                              ║
║  C · C++ · Shell                             ║
║                                              ║
║  ATK ██████████  100   (198k ★)              ║
║  DEF ██████████  100   (52k forks)           ║
║  SPD ████████░░   84   (8 repos)             ║
║  INT ██████░░░░   55   (3 langs)             ║
║                                              ║
║  ✦ 238k followers  ✦ 198k stars              ║
║                                              ║
║                             devduel v0.1.0   ║
╚══════════════════════════════════════════════╝
```

---

## 어떻게 사용하나요?

### 준비물

- **Node.js 20 이상** (https://nodejs.org 에서 설치)
- **터미널** (Mac: Terminal, Windows: PowerShell, Linux: 아무 터미널)

Node.js가 설치되어 있는지 확인:

```bash
node --version
# v20.0.0 이상이면 OK
```

### 1단계: 내 카드 만들기

터미널을 열고 아래 명령어를 입력하세요. `torvalds` 자리에 아무 GitHub 아이디를 넣으면 됩니다.

```bash
npx devduel torvalds
```

> `npx`는 npm 패키지를 설치 없이 바로 실행하는 명령어입니다. Node.js를 설치하면 자동으로 포함됩니다.

처음 실행하면 "Ok to proceed? (y)" 라고 물어봅니다. `y`를 누르면 됩니다.

### 2단계: 친구와 대결하기

두 개의 GitHub 아이디를 `vs`로 연결하면 1:1 대결 카드가 나옵니다.

```bash
npx devduel torvalds vs sindresorhus
```

```
╔══════════════════════ VS ══════════════════════╗
║                                                ║
║  torvalds              ⚔️     sindresorhus     ║
║  LV.83                        LV.79            ║
║  "The Relentless Shipper"     "The Type        ║
║                                Guardian"        ║
║                                                ║
║  ATK ✓ 100  ────►   95  ATK                   ║
║  DEF ✓ 100  ────►   88  DEF                   ║
║  SPD    84  ◄────   92  SPD ✓                  ║
║  INT    55  ◄────   90  INT ✓                  ║
║                                                ║
║  Winner: DRAW                                  ║
║                                                ║
╚════════════════════════════════════════════════╝
```

### 3단계: 자주 쓴다면 설치

매번 `npx`를 쓰기 귀찮다면 글로벌로 설치할 수 있습니다:

```bash
npm install -g devduel
```

설치 후에는 `npx` 없이 바로:

```bash
devduel torvalds
devduel torvalds vs gaearon
```

---

## 카드 읽는 법

### 스탯 (ATK / DEF / SPD / INT)

게임의 캐릭터 능력치처럼 GitHub 활동을 4가지로 분석합니다.

| 스탯 | 의미 | 기준 |
|------|------|------|
| **ATK** (공격력) | 얼마나 많이 만들었나 | GitHub 스타 수 + 레포 수 |
| **DEF** (방어력) | 얼마나 신뢰받는가 | 포크 수 + 팔로워 수 |
| **SPD** (속도) | 얼마나 활발한가 | 최근 업데이트된 레포 비율 + 계정 나이 |
| **INT** (지능) | 얼마나 다양한가 | 사용 언어 수 + 레포 다양성 |

각 스탯은 0~100점이며, 막대그래프로 시각화됩니다:

```
ATK ████████░░  82    ← 82점, 10칸 중 8칸
```

### 레벨 (LV.)

4개 스탯의 평균입니다. LV.1 (신규) ~ LV.99 (전설).

### 칭호 (★ 등급)

| 등급 | 조건 |
|------|------|
| ★★★★★ Legendary | 평균 스탯 80 이상 |
| ★★★★☆ Epic | 평균 스탯 60 이상 |
| ★★★☆☆ Rare | 평균 스탯 40 이상 |
| ★★☆☆☆ Common | 평균 스탯 20 이상 |
| ★☆☆☆☆ Starter | 모든 사람의 시작점 |

### 성격 유형

스탯과 주력 프로그래밍 언어를 기반으로 20가지 성격 중 하나가 배정됩니다:

| 성격 | 조건 |
|------|------|
| The Relentless Shipper | ATK ≥ 80, SPD ≥ 80 (많이 만들고 빠르다) |
| The Polyglot Architect | DEF ≥ 80, INT ≥ 80 (신뢰받고 다양하다) |
| The Type Guardian | 주력 언어: TypeScript |
| The Snake Charmer | 주력 언어: Python |
| The Memory Sage | 주력 언어: Rust |
| The Gopher | 주력 언어: Go |
| The Enterprise Warrior | 주력 언어: Java |
| The Frontend Wizard | 주력 언어: JavaScript |
| The Bare Metal Hacker | 주력 언어: C |
| The Performance Purist | 주력 언어: C++ |
| The Apple Artisan | 주력 언어: Swift |
| The Android Knight | 주력 언어: Kotlin |
| The Rails Rider | 주력 언어: Ruby |
| The Web Survivor | 주력 언어: PHP |
| The Speed Demon | SPD ≥ 90 |
| The Language Collector | INT ≥ 90 |
| The Star Farmer | ATK ≥ 90 |
| The Community Pillar | DEF ≥ 90 |
| The Silent Observer | ATK < 30, SPD < 30 |
| The Versatile Coder | 기본값 |

---

## 대결 모드 읽는 법

```
ATK ✓ 100  ────►   95  ATK
```

- `────►` 화살표 방향 = 이긴 쪽
- `✓` 표시 = 해당 항목 승자
- 4개 항목 중 더 많이 이긴 쪽이 최종 승자
- 2:2면 **DRAW** (무승부)

---

## 사용 예시

```bash
# 내 카드 보기
npx devduel anhanho

# 유명 개발자 카드 보기
npx devduel torvalds          # 리눅스 만든 사람
npx devduel gaearon           # React 핵심 개발자
npx devduel sindresorhus      # npm 패키지 킹
npx devduel yyx990803         # Vue.js 만든 사람
npx devduel tj                # Express.js 만든 사람

# 대결
npx devduel torvalds vs yyx990803
npx devduel gaearon vs sindresorhus
```

---

## 자주 묻는 질문

**Q: GitHub 계정이 필요한가요?**
A: 아니요. GitHub 공개 API를 사용하므로 계정 없이도 됩니다. 다만 시간당 60번까지 요청할 수 있습니다.

**Q: 60번 넘으면 어떻게 하나요?**
A: GitHub 토큰을 설정하면 시간당 5,000번까지 가능합니다:

```bash
export GITHUB_TOKEN=ghp_your_token_here
npx devduel torvalds
```

토큰 발급: https://github.com/settings/tokens → "Generate new token" → public_repo 권한만 체크

**Q: 비공개 레포도 분석하나요?**
A: 아니요. 공개 레포만 분석합니다. 비공개 레포는 포함되지 않습니다.

**Q: 스탯이 낮은데요?**
A: 공개 레포와 스타/포크/팔로워 기준입니다. 실력과는 무관하며, 재미로 보는 카드입니다.

---

## Development

```bash
git clone https://github.com/anhanho/devcard
cd devcard
npm install
npm run dev -- torvalds           # 개발 모드로 실행
npm run dev -- torvalds vs tj     # 대결 테스트
npm run build                     # 프로덕션 빌드
npm run lint                      # 타입 체크
```

## License

MIT
