# PO Tech Daily

개발 지식이 없는 디자이너/PO가 실무에서 개발자와 대화하기 위해 배우는 30일 학습 사이트입니다.

## 실행
별도 빌드가 필요 없는 정적 사이트입니다. `index.html`을 열거나 로컬 서버로 실행하세요.

```bash
python3 -m http.server 8000
```

그 후 http://localhost:8000 접속.

## GitHub Pages 배포
1. 새 GitHub repository를 만듭니다.
2. 이 폴더의 파일을 repository 루트에 업로드합니다.
3. GitHub repository의 Settings > Pages로 이동합니다.
4. Deploy from a branch를 선택하고 `main` / `(root)`를 선택합니다.
5. 저장 후 생성된 Pages 주소로 접속합니다.

## 다음 Day 추가하기
현재 `day.html`은 Day 1 데이터를 불러옵니다. 이후에는 `data/day02.js`처럼 같은 데이터 구조로 추가하고, 필요하면 lesson loader를 확장하면 됩니다.

## 구조
- `index.html`: 30일 전체 목차/진행률
- `day.html`: 학습 페이지
- `data/course.js`: 전체 커리큘럼
- `data/day01.js`: Day 1 콘텐츠
- `js/app.js`: 홈 동작
- `js/lesson.js`: 학습 콘텐츠 렌더링/완료 처리
- `css/style.css`: 공통 디자인

학습 완료 상태는 `localStorage`에 저장되므로 같은 브라우저에서는 유지됩니다. 기기 간 동기화는 되지 않습니다.
