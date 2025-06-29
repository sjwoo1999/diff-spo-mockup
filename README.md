# 🏃‍♂️ diff-spo-mockup

> 스포츠로 연결되는 새로운 라이프스타일 플랫폼

## 📝 프로젝트 개요
- **프로젝트명**: Diff-SPO-Mockup
- **개발 기간**: 2024.03.18 ~ 2024.03.19
- **개발 인원**: 1명
- **개발 환경**: 
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI

## 📱 서비스 소개

| 구분 | 설명 |
|------|------|
| 🎯 핵심 가치 | 스포츠를 통한 라이프스타일 혁신 |
| 💡 차별점 | AI 기반 개인화 추천과 커뮤니티 중심의 경험 공유 |
| 🎨 브랜드 톤앤매너 | 젊고 활기찬, 전문적이면서도 친근한 |

## 🎯 핵심 알고리즘

### 1. 개인화 추천 알고리즘 (홈)
#### 목적
사용자의 성향, 상황, 이력을 종합하여 맞춤 스포츠를 추천

#### 구현
```python
class SportsRecommender:
    def recommend(user_id, context):
        # 1. 콘텐츠 기반 추천 (40%)
        content_scores = 콘텐츠기반(user_profile, sports_metadata)
        
        # 2. 협업 필터링 (30%)
        collab_scores = 협업필터링(user_id, 유사 사용자)
        
        # 3. 컨텍스트 기반 (30%)
        context_scores = 컨텍스트기반(context 정보)
        
        # 최종 점수 = 세 가지 점수의 가중 평균
        final_scores = (
            content_scores * 0.4 +
            collab_scores * 0.3 +
            context_scores * 0.3
        )
        return 최종추천(final_scores)
```

#### 특징
- **콘텐츠 기반**: 유저 선호 + 스포츠 특성
- **협업 필터링**: 유사 유저와의 교차 추천
- **컨텍스트 기반**: 시간/날씨/장소 등 상황 정보 고려

#### 실제 예시
```
사용자 프로필:
- 체력 레벨: 중급
- 선호 스포츠: 테니스, 수영
- 보유 장비: 테니스 라켓, 수영복

현재 상황:
- 날씨: 맑음
- 시간: 오후 2시
- 위치: 강남구

추천 결과:
1. 테니스 (90점)
   - 콘텐츠 기반: 95점 (선호 스포츠 + 보유 장비)
   - 협업 필터링: 85점 (비슷한 사용자들이 즐겨함)
   - 컨텍스트: 90점 (날씨 좋음 + 실외 활동 적합)

2. 수영 (85점)
   - 콘텐츠 기반: 90점 (선호 스포츠)
   - 협업 필터링: 80점
   - 컨텍스트: 85점 (실내 활동 가능)
```

### 2. 스포츠-사용자 매칭 알고리즘
#### 목적
스포츠의 특성과 사용자의 조건이 얼마나 잘 맞는지를 평가

#### 구현
```python
def match_user_sport(user_profile, sport_features):
    score = 0
    # 체력 레벨 매칭 (30%)
    if 체력레벨 >= 강도: score += 0.3
    
    # 장비 보유 여부 (20%)
    if 장비보유여부: score += 0.2
    
    # 환경 선호 일치 (30%)
    if 환경선호 일치: score += 0.3
    
    # 기술 수준 (20%)
    if 기술수준 >= 요구수준: score += 0.2
    
    return score
```

#### 실제 예시
```
사용자 정보:
- 체력 레벨: 중급
- 보유 장비: 테니스 라켓, 운동화
- 선호 환경: 실외
- 기술 수준: 초급

스포츠: 테니스
- 필요 체력: 중급
- 필요 장비: 테니스 라켓, 운동화
- 환경: 실외
- 요구 기술: 초급

매칭 점수 계산:
1. 체력 레벨 매칭: 0.3 (중급 = 중급)
2. 장비 보유: 0.2 (모든 필요 장비 보유)
3. 환경 선호: 0.3 (실외 선호 = 실외 스포츠)
4. 기술 수준: 0.2 (초급 = 초급)

최종 매칭 점수: 1.0 (100% 적합)
```

### 3. 전문성 기반 커뮤니티 추천
#### 목적
커뮤니티 내에서 유저 전문성에 기반한 추천 콘텐츠 제공

#### 구현
```python
class ExpertiseBasedRecommender:
    def calculate_expertise_score(user, sport):
        # 활동 점수 (40%)
        활동 점수 = 포스트/댓글/좋아요
        
        # 기여 점수 (30%)
        기여 점수 = 유용한 답변, 참여도
        
        # 인증 점수 (30%)
        인증 점수 = 자격증, 경력
        
        return 0.4 * 활동 + 0.3 * 기여 + 0.3 * 인증
```

#### 실제 예시
```
사용자: 테니스 마니아
활동 내역:
- 포스트: 50개 (테니스 기술, 경기 후기)
- 댓글: 200개 (다른 사용자 질문 답변)
- 좋아요: 1000개

기여도:
- 유용한 답변: 150개
- 커뮤니티 참여: 주 5회 이상

인증:
- 테니스 지도자 자격증
- 10년 경력

전문성 점수 계산:
1. 활동 점수: 40점 (많은 포스트와 댓글)
2. 기여 점수: 30점 (높은 답변 품질)
3. 인증 점수: 30점 (자격증 + 경력)

최종 전문성 점수: 100점
```

### 4. 감정 분석 기반 댓글 요약
#### 목적
스포츠에 특화된 댓글을 요약하고 감정 라벨링

#### 구현
```python
class SportsSentimentAnalyzer:
    def analyze(text):
        # 1. 스포츠 용어 정규화
        정규화 = 스포츠 용어 변환
        
        # 2. 감정 예측
        감정예측 = 모델 분석
        
        # 3. 키워드 추출
        키워드 추출 = 핵심어 분석
        
        # 4. 관련성 점수 계산
        관련성 점수 계산
        
        return {
            '감정': label,
            '키워드': [...],
            '관련성 점수': ...
        }
```

#### 실제 예시
```
원본 댓글:
"오늘 테니스 레슨 받았는데 진짜 대박이었어요! 코치님이 서브 자세 교정해주시니까 
공이 훨씬 잘 들어가더라고요. 다음 주에도 꼭 가야겠어요 😊"

분석 결과:
{
    '감정': '매우 긍정적',
    '키워드': ['테니스', '레슨', '서브', '자세', '교정'],
    '관련성 점수': 0.95,
    '요약': '테니스 레슨에서 서브 자세 교정 후 만족도 높음'
}
```

### 5. KoBERT 기반 클래스 추천
#### 목적
KoBERT로 사용자-클래스 텍스트 특성 매칭

#### 구현
```python
class SportsClassRecommender:
    def recommend(user_profile, classes):
        # 1. 클래스 특징 추출
        클래스 특징 추출
        
        # 2. 선호도 매칭 점수 (40%)
        선호도 매칭 점수
        
        # 3. 강사 매칭 점수 (30%)
        강사 매칭 점수
        
        # 4. 인기 점수 (30%)
        인기 점수
        
        # 최종 점수 계산
        최종 점수 = 0.4 * 선호도 + 0.3 * 강사 + 0.3 * 인기
        
        return 정렬된 추천 리스트
```

#### 실제 예시
```
사용자 프로필:
- 관심사: 테니스 초급자 클래스
- 선호 시간: 주말 오전
- 선호 강사: 여성, 경력 5년 이상

클래스 정보:
1. "테니스 입문 클래스"
   - 강사: 김테니스 (여성, 10년 경력)
   - 시간: 토요일 오전 10시
   - 난이도: 초급
   - 인기도: 4.8/5.0

점수 계산:
1. 선호도 매칭: 40점 (초급자 클래스 + 주말 오전)
2. 강사 매칭: 30점 (여성 + 10년 경력)
3. 인기 점수: 30점 (4.8/5.0)

최종 추천 점수: 100점
```

### 6. 스케줄 기반 클래스 매칭
#### 목적
유저 시간표 + 거리 조건을 고려한 최적 클래스 추천

#### 구현
```python
class ScheduleBasedMatcher:
    def find_matching_classes(schedule, classes):
        # 1. 시간 가능 여부 (50%)
        시간가능 여부 → time_score
        
        # 2. 이동 시간 (50%)
        이동시간 → travel_score
        
        # 최종 점수 계산
        최종점수 = 0.5 * time_score + 0.5 * travel_score
        
        return 높은 순으로 정렬
```

#### 실제 예시
```
사용자 일정:
- 평일: 오후 6시 이후 가능
- 주말: 오전 10시 ~ 오후 4시 가능
- 현재 위치: 강남역

클래스 옵션:
1. "강남 테니스장 클래스"
   - 시간: 토요일 오전 11시
   - 이동 시간: 10분
   - 점수: 95점
     * 시간 가용성: 100점 (주말 가능 시간대)
     * 이동 시간: 90점 (10분 거리)

2. "송파 테니스장 클래스"
   - 시간: 토요일 오전 11시
   - 이동 시간: 30분
   - 점수: 75점
     * 시간 가용성: 100점
     * 이동 시간: 50점 (30분 거리)
```

### 7. 구매 이력 기반 장비 추천
#### 목적
이전 구매이력과 스포츠 활동에 기반한 장비 추천

#### 구현
```python
class SportsEquipmentRecommender:
    def recommend(user_profile, purchase_history):
        # 1. 장비 필요도 분석
        장비 필요도 분석
        
        # 2. 호환성 체크 (40%)
        호환성 체크
        
        # 3. 가성비 분석 (30%)
        가성비 분석
        
        # 4. 선호도 (30%)
        선호도
        
        # 최종 점수 계산
        최종 점수 = 0.4 * 호환성 + 0.3 * 가성비 + 0.3 * 선호도
        
        return 추천 장비 리스트
```

#### 실제 예시
```
사용자 정보:
- 보유 장비: 테니스 라켓(초급용)
- 활동 빈도: 주 3회
- 예산: 30만원

추천 장비:
1. "테니스 라켓 중급용"
   - 호환성: 40점 (현재 라켓 업그레이드 적합)
   - 가성비: 30점 (25만원, 중급자용 적정가)
   - 선호도: 30점 (비슷한 사용자들 높은 만족도)
   - 최종 점수: 100점

2. "테니스 신발"
   - 호환성: 40점 (필수 장비)
   - 가성비: 30점 (15만원, 합리적 가격)
   - 선호도: 30점
   - 최종 점수: 100점
```

### 8. 활동 기반 피드백 생성
#### 목적
유저 활동을 분석해 맞춤형 피드백 제공

#### 구현
```python
class SportsActivityAnalyzer:
    def analyze_activities(activities):
        # 1. 다양성 점수
        다양성 점수
        
        # 2. 목표 달성도
        목표 달성도
        
        # 3. 체력 변화 분석
        체력 변화 분석
        
        return 종합 피드백
```

#### 실제 예시
```
활동 데이터:
- 주간 운동 횟수: 3회
- 운동 종류: 테니스 2회, 수영 1회
- 운동 시간: 총 5시간
- 목표: 주 3회 운동

분석 결과:
{
    '다양성 점수': 80점 (2가지 운동 병행),
    '목표 달성도': 100점 (주 3회 달성),
    '체력 변화': '상승 추세',
    '종합 피드백': '목표를 잘 달성하고 있으며, 다양한 운동을 통해 전신 운동이 이루어지고 있습니다. 
                   다음 주에는 테니스 서브 연습을 추가하면 좋을 것 같습니다.'
}
```

### 9. 성향 분석 시스템
#### 목적
사용자의 스포츠 성향, 활동 패턴, 사회적 상호작용 분석

#### 구현
```python
class SportsPersonalityAnalyzer:
    def analyze_personality(user_data):
        # 1. 스포츠 선호도 분석
        스포츠 선호도 분석
        
        # 2. 활동 패턴 분석
        활동 패턴 분석
        
        # 3. 소셜 상호작용 분석
        소셜 상호작용 분석
        
        return 종합 성향 프로파일
```

#### 실제 예시
```
사용자 데이터:
- 선호 스포츠: 테니스, 수영
- 활동 패턴: 주말 위주, 그룹 활동 선호
- 소셜 활동: 커뮤니티 적극 참여, 경기 후기 자주 작성

분석 결과:
{
    '스포츠 성향': '다양한 운동 선호형',
    '활동 패턴': '주말 그룹 활동형',
    '소셜 성향': '적극적 공유형',
    '추천 활동': [
        '주말 테니스 클럽 가입',
        '수영 동호회 참여',
        '커뮤니티 리더 역할 제안'
    ]
}
```

## 📊 예상 성과 지표

> ⚠️ 아래 지표들은 실제 운영 데이터가 아닌, 목표로 하는 예상치입니다.

| 기능 | 지표 | 목표 향상도 |
|------|------|------------|
| 개인화 피드 | 사용자 만족도 | 목표: +40% |
| AI 기반 추천 | 신규 스포츠 발견률 | 목표: +60% |
| 맞춤형 메시지 | 사용자 참여도 | 목표: +35% |
| 행동 기반 추천 | 커뮤니티 활성도 | 목표: +45% |
| AI 댓글 요약 | 정보 소비 시간 | 목표: -50% |
| 트렌드 분석 | 트렌드 발견 속도 | 목표: +70% |
| BERT 기반 추천 | 클래스 매칭 정확도 | 목표: +55% |
| 맞춤형 클래스 | 클래스 참여율 | 목표: +40% |
| AI 설명 생성 | 클래스 이해도 | 목표: +65% |

## 🚀 향후 계획
1. 실시간 데이터 처리 시스템 구축
2. 딥러닝 모델 성능 개선
3. 사용자 피드백 기반 알고리즘 최적화
4. 새로운 스포츠 데이터 통합
5. API 성능 최적화

## 📚 참고 자료
- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Shadcn UI 컴포넌트](https://ui.shadcn.com)

## 🛠 기술 스택
- **프론트엔드**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI

## 📦 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/your-username/diff-spo-mockup.git

# 프로젝트 디렉토리로 이동
cd diff-spo-mockup

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 📁 프로젝트 구조
```
diff-spo-mockup/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── sections/
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── package.json
```

## 🔄 개발 이력
### 2024.03.19
- [x] 메인 페이지 레이아웃 구현
- [x] 서비스 소개 섹션 추가
- [x] 리뷰 섹션 구현
- [x] 반응형 디자인 적용

### 2024.03.18
- [x] 프로젝트 초기 설정
- [x] 기본 디렉토리 구조 생성
- [x] Tailwind CSS 설정
- [x] Shadcn UI 컴포넌트 설치

## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/your-username/diff-spo-mockup.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## ⚙️ 환경 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=your_api_url
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
