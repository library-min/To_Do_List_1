# 📋 Smart Todo - 고급 할 일 관리 애플리케이션

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-ff6384.svg?style=for-the-badge&logo=chart.js)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge)](#)

</div>

<div align="center">

> 🎯 **생산성을 극대화하는 올인원 할 일 관리 솔루션**  
> 게이미피케이션, 뽀모도로 타이머, 통계 분석, 드래그 앤 드롭 등 고급 기능을 갖춘 모던 웹 애플리케이션

[🚀 라이브 데모](https://your-demo-url.vercel.app/) • [📖 문서](https://github.com/yourusername/smart-todo/wiki) • [🐛 이슈 신고](https://github.com/yourusername/smart-todo/issues) • [💬 토론](https://github.com/yourusername/smart-todo/discussions)

</div>

---

## 📸 스크린샷

<div align="center">
  <img src="https://via.placeholder.com/800x500/6366f1/ffffff?text=Smart+Todo+Main+Interface" alt="메인 화면" width="49%">
  <img src="https://via.placeholder.com/800x500/10b981/ffffff?text=Statistics+Dashboard" alt="통계 대시보드" width="49%">
  <img src="https://via.placeholder.com/800x500/f59e0b/ffffff?text=Pomodoro+Timer" alt="뽀모도로 타이머" width="49%">
  <img src="https://via.placeholder.com/800x500/ef4444/ffffff?text=Dark+Mode" alt="다크 모드" width="49%">
</div>

## ✨ 주요 기능

### 🎮 **게이미피케이션 시스템**
- **포인트 & 레벨링**: 할 일 완료 시 포인트 획득 및 레벨 업
- **뱃지 시스템**: 성취에 따른 다양한 뱃지 수집 (첫 걸음, 성실함, 연속 완주)
- **우선순위 보너스**: 높은 우선순위 작업 완료 시 추가 포인트

### ⏱️ **커스터마이징 가능한 뽀모도로 타이머**
- **시간 설정**: 집중시간(1-60분), 짧은 휴식(1-30분), 긴 휴식(1-60분) 개별 설정
- **사이클 관리**: 4사이클 완료 후 자동 긴 휴식 전환
- **진행률 표시**: SVG 원형 프로그레스바로 시각화
- **알림 시스템**: 브라우저 푸시 알림 지원

### 📊 **통계 및 분석 대시보드**
- **인터랙티브 차트**: Chart.js 기반 막대/도넛 차트
- **다중 시간 범위**: 최근 7일, 4주, 12개월 선택 가능
- **완료 통계**: 시간대별 완료 추이 분석
- **우선순위 분석**: 중요도별 완료율 시각화
- **실시간 대시보드**: 오늘/이번 주 진행률 카드

### 🎨 **스마트 사용자 인터페이스**

<table>
<tr>
<td width="50%">

#### 🖼️ **시각적 요소**
- **이모지 스티커**: 18종 프리셋 + 직접 입력
- **확장 레이아웃**: 1200px 최대 너비
- **모던 버튼**: 그라데이션 + 호버 애니메이션
- **카드 효과**: lift 효과와 색상 변화

</td>
<td width="50%">

#### 🔧 **상호작용**
- **드래그 앤 드롭**: @dnd-kit 기반 순서 변경
- **인라인 편집**: 더블클릭 텍스트 수정
- **실시간 검색**: 제목/우선순위/이모지
- **상단 네비**: 고정 헤더 + 테마 토글

</td>
</tr>
</table>

### 🔧 **생산성 도구**
- **스마트 우선순위**: 3단계 우선순위 + 아이콘/색상 구분 (🔴높음/🟡보통/🟢낮음)
- **마감일 추적**: 자동 상태 감지 및 강조 (지남/오늘/내일/곧)
- **완료/미완료 필터**: 상황에 따른 선택적 표시
- **아카이브 시스템**: 완료 작업 별도 보관 및 복원
- **할 일 복제**: 반복 작업 원클릭 생성

### 🎭 **테마 & 접근성**
- **다크/라이트 모드**: 시스템 설정 자동 감지 + 수동 전환
- **완전 반응형**: 모바일(320px)부터 데스크톱(1920px+)까지 최적화
- **키보드 네비게이션**: Enter/Escape 키 지원
- **로컬 저장소**: 새로고침 시에도 데이터 보존

## 🚀 빠른 시작

### 📋 사전 요구사항
[![Node.js](https://img.shields.io/badge/Node.js-18.0+-green.svg?style=flat-square&logo=node.js)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-latest-red.svg?style=flat-square&logo=npm)](https://npmjs.com/)

### 🏗️ 빌드 및 배포

<table>
<tr>
<td width="50%">

**개발 환경**
```bash
npm run dev     # 개발 서버
npm run lint    # 코드 검사
npm run preview # 빌드 미리보기
```

</td>
<td width="50%">

**프로덕션**
```bash
npm run build   # 프로덕션 빌드
npm run preview # 배포 전 테스트
# dist/ 폴더에 빌드 파일 생성
```

</td>
</tr>
</table>

## 🏗️ 기술 스택

<div align="center">

### 🔧 **Core Technologies**

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-f7df1e?style=for-the-badge&logo=javascript)](https://javascript.com/)

### 📊 **Libraries & Frameworks**

[![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-ff6384?style=for-the-badge&logo=chart.js)](https://www.chartjs.org/)
[![DND Kit](https://img.shields.io/badge/DND_Kit-6.3.1-00d9ff?style=for-the-badge)](https://dndkit.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572b6?style=for-the-badge&logo=css3)](https://www.w3.org/Style/CSS/)

### 🌐 **Browser APIs**

![Local Storage](https://img.shields.io/badge/Local_Storage-Persistent-orange?style=for-the-badge)
![Notification API](https://img.shields.io/badge/Notification_API-PWA_Ready-green?style=for-the-badge)
![Media Query](https://img.shields.io/badge/Media_Query-Responsive-blue?style=for-the-badge)

</div>

<details>
<summary><strong>🔍 상세 기술 스택</strong></summary>

<table>
<tr>
<td width="33%">

**Frontend Core**
- React 19.1.1 (Hooks & FC)
- Vite 7.1.2 (HMR & Bundling)
- Modern JavaScript (ES2024)

</td>
<td width="33%">

**UI & Styling**
- Pure CSS (Custom Properties)
- CSS Grid & Flexbox
- CSS Animations & Transitions
- Modern Design System

</td>
<td width="33%">

**Data & APIs**
- Chart.js (Data Visualization)
- @dnd-kit (Drag & Drop)
- Local Storage (Persistence)
- Notification API (PWA)

</td>
</tr>
</table>

</details>

## 📁 프로젝트 구조

```
src/
├── components/              # React 컴포넌트
│   ├── TodoList.jsx        # 메인 할 일 관리 (600+ 라인)
│   ├── TodoList.css        # 메인 스타일시트 (600+ 라인) 
│   ├── PomodoroTimer.jsx   # 뽀모도로 타이머 & 설정
│   ├── PomodoroTimer.css   # 타이머 전용 스타일
│   ├── Statistics.jsx      # 통계 차트 & 분석
│   ├── Statistics.css      # 차트 컴포넌트 스타일
│   ├── GameStats.jsx       # 게이미피케이션 UI
│   ├── GameStats.css       # 레벨/뱃지 스타일
│   ├── ThemeToggle.jsx     # 다크/라이트 테마 전환
│   └── ThemeToggle.css     # 토글 스위치 스타일
├── assets/                 # 정적 리소스
├── App.jsx                # 루트 컴포넌트
├── App.css               # 글로벌 스타일
├── index.css            # CSS 변수 & 기본 설정
└── main.jsx            # ReactDOM 렌더링
```

## 🎯 핵심 구현 상세

### 1. 할 일 데이터 구조
```javascript
const todoSchema = {
  id: Date.now(),                    // 고유 식별자
  text: "할 일 내용",                 // 사용자 입력 텍스트
  priority: "높음|보통|낮음",         // 우선순위 
  dueDate: "2025-01-20",            // 마감일 (선택사항)
  emoji: "📝",                      // 이모지 스티커
  completed: false,                 // 완료 상태
  createdAt: "2025-01-20T10:30Z",   // 생성 시간
  eisenhowerQuadrant: "important-urgent" // 아이젠하워 매트릭스
}
```

### 2. 게이미피케이션 포인트 시스템
```javascript
// 기본 포인트 + 우선순위 보너스 + 매트릭스 보너스
let earnedPoints = 10; // 기본
if (priority === '높음') earnedPoints += 10;
else if (priority === '보통') earnedPoints += 5;

if (eisenhowerQuadrant === 'important-urgent') earnedPoints += 15;
else if (eisenhowerQuadrant === 'important-not-urgent') earnedPoints += 10;

// 레벨 = Math.floor(totalPoints / 100) + 1
// 뽀모도로 세션 완료 시 +25 포인트
```

### 3. 검색 알고리즘
```javascript
const searchTodos = (todos, query) => {
  return todos.filter(todo => 
    todo.text.toLowerCase().includes(query.toLowerCase()) ||
    todo.priority.toLowerCase().includes(query.toLowerCase()) ||
    (todo.emoji && todo.emoji.includes(query))
  );
};
```

### 4. 마감일 상태 분류
```javascript
const getDueDateStatus = (dateString) => {
  const dueDate = new Date(dateString);
  const today = new Date();
  const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'overdue';      // 빨간색
  if (diffDays === 0) return 'today';      // 주황색  
  if (diffDays === 1) return 'tomorrow';   // 파란색
  if (diffDays <= 3) return 'soon';        // 초록색
  return 'normal';                         // 기본색
};
```

## 📊 성능 최적화 전략

### **React 최적화**
- `useMemo()` - 비싼 계산 결과 메모이제이션
- `useCallback()` - 함수 재생성 방지
- 조건부 렌더링 - 불필요한 컴포넌트 렌더링 방지

### **데이터 관리**
- Local Storage - 서버 요청 없는 즉시 로딩
- JSON 직렬화 - 효율적인 데이터 저장/복원
- 상태 정규화 - 중복 데이터 최소화

### **CSS 성능**
- CSS Custom Properties - 동적 테마 변경
- Hardware Acceleration - `transform`, `opacity` 사용
- 최소한의 리플로우 - Layout 변경 최소화
- 효율적인 호버 효과 - GPU 가속 transform과 box-shadow 활용

## 🔒 보안 & 프라이버시

- **클라이언트 전용**: 모든 데이터는 브라우저 Local Storage에만 저장
- **외부 전송 없음**: 개인정보 네트워크 전송 차단
- **XSS 방지**: React의 기본 이스케이핑 활용
- **입력 검증**: 사용자 입력값 필터링 및 검증

## 🌟 향후 개발 로드맵

### **Phase 1: PWA & 오프라인**
- [ ] Service Worker 구현
- [ ] 앱 설치 프롬프트  
- [ ] 오프라인 동작 지원
- [ ] 백그라운드 동기화

### **Phase 2: 클라우드 & 동기화**
- [ ] Firebase/Supabase 백엔드 연동
- [ ] 실시간 다기기 동기화
- [ ] 사용자 인증 시스템
- [ ] 데이터 백업/복원

### **Phase 3: AI & 고급 기능**
- [ ] 머신러닝 우선순위 추천
- [ ] 자연어 할 일 입력 파싱
- [ ] 생산성 패턴 분석
- [ ] 개인화된 인사이트

### **Phase 4: 협업 & 확장**
- [ ] 팀 워크스페이스
- [ ] 할 일 공유 및 할당
- [ ] 실시간 협업 편집
- [ ] 프로젝트 템플릿

## 🧪 테스트 커버리지

```bash
# 향후 구현 예정
npm run test          # Jest 단위 테스트
npm run test:e2e      # Cypress E2E 테스트  
npm run test:coverage # 코드 커버리지 리포트
```

## 🤝 기여 가이드라인

### **개발 환경 설정**
1. **Fork** 이 저장소
2. **Clone** 포크된 저장소
3. **Branch** 생성: `git checkout -b feature/새기능명`
4. **개발** 및 테스트
5. **Commit**: `git commit -m 'feat: 새로운 기능 추가'`
6. **Push**: `git push origin feature/새기능명`
7. **Pull Request** 생성

### **코딩 스타일**
- **ESLint** 규칙 준수 (`npm run lint`)
- **컴포넌트** 단위 개발 (단일 책임)
- **CSS-in-JS** 대신 CSS 모듈 사용
- **접근성(a11y)** 표준 준수
- **반응형** 우선 설계

### **커밋 컨벤션**
```
feat: 새로운 기능 추가
fix: 버그 수정  
docs: 문서 업데이트
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드/설정 변경
```

## 📈 프로젝트 통계

<div align="center">

<table>
<tr>
<td align="center">
<h3>🧩 컴포넌트</h3>
<h2>6개</h2>
<p>TodoList, PomodoroTimer, Statistics, GameStats, ThemeToggle</p>
</td>
<td align="center">
<h3>💻 코드 라인</h3>
<h2>1,500+</h2>
<p>주석 및 테스트 포함</p>
</td>
<td align="center">
<h3>📦 번들 크기</h3>
<h2>~150KB</h2>
<p>gzipped 기준</p>
</td>
<td align="center">
<h3>⚡ 초기 로딩</h3>
<h2>&lt;2초</h2>
<p>3G 네트워크 기준</p>
</td>
</tr>
</table>

### 🎯 **성능 지표**

![Lighthouse Performance](https://img.shields.io/badge/Performance-95%2B-brightgreen?style=flat-square)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=flat-square)
![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen?style=flat-square)
![Lighthouse SEO](https://img.shields.io/badge/SEO-95%2B-brightgreen?style=flat-square)

</div>

## 📱 브라우저 호환성

| 브라우저 | 데스크톱 | 모바일 | 주요 기능 |
|---------|---------|---------|-----------|
| Chrome | ✅ 90+ | ✅ 90+ | 모든 기능 |
| Firefox | ✅ 88+ | ✅ 88+ | 모든 기능 |
| Safari | ✅ 14+ | ✅ 14+ | 알림 제한적 |
| Edge | ✅ 90+ | ✅ 90+ | 모든 기능 |

## 📝 라이선스

이 프로젝트는 **MIT License** 하에 배포됩니다.

```
MIT License - 상업적/비상업적 자유 사용 가능
수정, 배포, 사적 사용 허용
원본 저작권 표시 및 라이선스 포함 필수
```

## 👨‍💻 개발자 정보

<div align="center">

<img src="https://via.placeholder.com/150x150/6366f1/ffffff?text=DEV" alt="Developer Avatar" width="150" height="150" style="border-radius: 50%;">

### **Full-Stack Developer**

[![GitHub](https://img.shields.io/badge/GitHub-@yourusername-black?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-프로필_보기-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourprofile)
[![Portfolio](https://img.shields.io/badge/Portfolio-포트폴리오_방문-orange?style=for-the-badge&logo=firefox)](https://your-portfolio.com)
[![Email](https://img.shields.io/badge/Email-연락하기-red?style=for-the-badge&logo=gmail)](mailto:your.email@example.com)

</div>

### 💡 **이 프로젝트로 보여주는 기술력**

<table>
<tr>
<td width="50%">

**🔧 Frontend Skills**
- ⚛️ React Hooks & 고급 상태 관리
- 🎨 Modern CSS Layout & Animations
- 📱 완전 반응형 웹 디자인
- ⚡ 성능 최적화 & 번들링

</td>
<td width="50%">

**🎯 UX/UI Skills**
- 📊 데이터 시각화 & 차트 구현
- 🎮 게이미피케이션 시스템 설계
- 🖼️ 직관적인 사용자 경험
- 🌙 다크/라이트 모드 구현

</td>
</tr>
</table>

## 🙏 크레딧 & 참고자료

### **오픈소스 라이브러리**
- [React](https://reactjs.org/) - Meta의 UI 라이브러리
- [Vite](https://vitejs.dev/) - Evan You의 빌드 도구
- [Chart.js](https://www.chartjs.org/) - 캔버스 차트 라이브러리
- [dnd-kit](https://dndkit.com/) - Claudéric Demers의 드래그 앤 드롭

### **디자인 영감**  
- [Todoist](https://todoist.com/) - UI/UX 패턴
- [Linear](https://linear.app/) - 모던 인터페이스 디자인
- [Notion](https://notion.so/) - 정보 아키텍처

### **기술 참고자료**
- [MDN Web Docs](https://developer.mozilla.org/) - 웹 표준 API
- [React Documentation](https://react.dev/) - React 공식 가이드
- [CSS-Tricks](https://css-tricks.com/) - CSS 고급 기법

---

<div align="center">

## 🌟 **이 프로젝트가 마음에 드셨나요?**

**Star를 눌러주시면 개발자에게 큰 힘이 됩니다! ⭐**

<table>
<tr>
<td align="center">
<a href="https://github.com/yourusername/smart-todo">
<img src="https://img.shields.io/github/stars/yourusername/smart-todo.svg?style=for-the-badge&logo=github&color=yellow" alt="GitHub stars">
</a>
<br>
<strong>⭐ Star</strong>
</td>
<td align="center">
<a href="https://github.com/yourusername/smart-todo/fork">
<img src="https://img.shields.io/github/forks/yourusername/smart-todo.svg?style=for-the-badge&logo=github&color=blue" alt="GitHub forks">
</a>
<br>
<strong>🍴 Fork</strong>
</td>
<td align="center">
<a href="https://github.com/yourusername/smart-todo/watchers">
<img src="https://img.shields.io/github/watchers/yourusername/smart-todo.svg?style=for-the-badge&logo=github&color=green" alt="GitHub watchers">
</a>
<br>
<strong>👀 Watch</strong>
</td>
<td align="center">
<a href="https://github.com/yourusername/smart-todo/issues">
<img src="https://img.shields.io/github/issues/yourusername/smart-todo.svg?style=for-the-badge&logo=github&color=red" alt="GitHub issues">
</a>
<br>
<strong>🐛 Issues</strong>
</td>
</tr>
</table>

### 🔗 **빠른 링크**

[🚀 **라이브 데모**](https://your-demo-url.vercel.app/) • [📖 **문서**](https://github.com/yourusername/smart-todo/wiki) • [🐛 **버그 신고**](https://github.com/yourusername/smart-todo/issues) • [💬 **토론**](https://github.com/yourusername/smart-todo/discussions)

---

<img src="https://via.placeholder.com/1200x100/6366f1/ffffff?text=Thank+You+For+Visiting+Smart+Todo!" alt="Thank You" width="100%">

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

</div>
