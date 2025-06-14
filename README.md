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

## 🎯 주요 기능

### 1. 홈 페이지
| 구분 | 기능 | 기술적 특징 |
|------|------|------------|
| 🆓 무료 | • 카테고리별 인기 콘텐츠<br>• 조회수 기반 정렬<br>• 정적 배너/공지 | • Top-N 정렬 알고리즘<br>• 실시간 인기도 반영 |
| 💎 유료 | • 개인화 피드<br>• AI 기반 추천<br>• 맞춤형 메시지 | • 하이브리드 추천<br>• GPT 기반 개인화 |

#### 💎 유료 기능 상세
1. **개인화 피드**
   - **데이터 수집**
     - 사용자 프로필 (체력, 경험, 선호도)
     - 스포츠 메타데이터 (난이도, 장비, 환경)
     - 활동 이력 (참여 스포츠, 클래스)
   - **알고리즘**
     ```python
     # 하이브리드 추천 시스템
     class SportsRecommender:
         def __init__(self):
             self.content_model = ContentBasedModel()
             self.collaborative_model = CollaborativeModel()
             self.context_model = ContextAwareModel()
             
         def recommend(self, user_id, context):
             # 1. 콘텐츠 기반 추천
             content_scores = self.content_model.predict(
                 user_profile=user.profile,
                 sports_metadata=sports.metadata
             )
             
             # 2. 협업 필터링
             collab_scores = self.collaborative_model.predict(
                 user_id=user_id,
                 similar_users=find_similar_users(user_id)
             )
             
             # 3. 컨텍스트 기반 추천
             context_scores = self.context_model.predict(
                 weather=context.weather,
                 location=context.location,
                 time=context.time
             )
             
             # 4. 최종 점수 계산
             final_scores = (
                 content_scores * 0.4 +  # 콘텐츠 기반 가중치
                 collab_scores * 0.3 +   # 협업 필터링 가중치
                 context_scores * 0.3    # 컨텍스트 기반 가중치
             )
             
             return rank_sports(final_scores)
     ```
   - **가치 제안**: 사용자별 맞춤 스포츠 추천으로 만족도 40% 향상

2. **AI 기반 추천**
   - **데이터 처리**
     - 스포츠 특성 벡터
     - 사용자-스포츠 상호작용
     - 시계열 활동 데이터
   - **알고리즘**
     ```python
     # 스포츠 특성 기반 추천
     class SportsFeatureExtractor:
         def extract_features(self, sport):
             return {
                 'intensity': self.calculate_intensity(sport),
                 'equipment': self.analyze_equipment(sport),
                 'environment': self.classify_environment(sport),
                 'skill_level': self.assess_skill_level(sport)
             }
     
     # 사용자-스포츠 매칭
     def match_user_sport(user_profile, sport_features):
         compatibility_score = 0
         
         # 체력 수준 매칭
         if user_profile.fitness_level >= sport_features.intensity:
             compatibility_score += 0.3
             
         # 장비 보유 여부
         if all(eq in user_profile.equipment for eq in sport_features.equipment):
             compatibility_score += 0.2
             
         # 환경 선호도
         if sport_features.environment in user_profile.preferred_environments:
             compatibility_score += 0.3
             
         # 기술 수준
         if user_profile.skill_level >= sport_features.skill_level:
             compatibility_score += 0.2
             
         return compatibility_score
     ```
   - **가치 제안**: 신규 스포츠 발견률 60% 증가

3. **맞춤형 메시지**
   - **데이터 활용**
     - 사용자 스포츠 프로필
     - 활동 이력
     - 목표 달성도
   - **GPT 프롬프트**
     ```python
     prompt = f"""
     사용자 프로필:
     - 체력 수준: {user_profile.fitness_level}
     - 선호 스포츠: {user_profile.preferred_sports}
     - 목표: {user_profile.goals}
     
     추천 스포츠:
     - 이름: {sport.name}
     - 난이도: {sport.difficulty}
     - 필요 장비: {sport.required_equipment}
     
     추천 이유:
     - 체력 수준과 적합
     - 선호 환경과 일치
     - 목표 달성에 도움
     
     생성할 메시지 유형: {message_type}
     """
     ```
   - **가치 제안**: 사용자 참여도 35% 향상

### 2. 커뮤니티
| 구분 | 기능 | 기술적 특징 |
|------|------|------------|
| 🆓 무료 | • 최신/댓글순 정렬<br>• 키워드 검색<br>• 태그 기반 필터 | • TF-IDF 검색<br>• 형태소 분석 |
| 💎 유료 | • 행동 기반 추천<br>• AI 댓글 요약<br>• 트렌드 분석 | • 감정 분석<br>• 실시간 트렌드 |

#### 💎 유료 기능 상세
1. **행동 기반 추천**
   - **데이터 수집**
     - 스포츠별 게시글 상호작용
     - 사용자 간 소통 패턴
     - 전문성 레벨
   - **알고리즘**
     ```python
     # 전문성 기반 추천
     class ExpertiseBasedRecommender:
         def calculate_expertise_score(self, user, sport):
             # 1. 활동 기반 점수
             activity_score = self.calculate_activity_score(
                 posts=user.posts[sport],
                 comments=user.comments[sport],
                 likes=user.likes[sport]
             )
             
             # 2. 커뮤니티 기여도
             contribution_score = self.calculate_contribution(
                 helpful_answers=user.helpful_answers[sport],
                 community_engagement=user.engagement[sport]
             )
             
             # 3. 전문성 인증
             certification_score = self.calculate_certification(
                 certifications=user.certifications[sport],
                 experience_years=user.experience[sport]
             )
             
             return (activity_score * 0.4 + 
                    contribution_score * 0.3 + 
                    certification_score * 0.3)
     ```
   - **가치 제안**: 커뮤니티 활성도 45% 증가

2. **AI 댓글 요약**
   - **데이터 처리**
     - 스포츠 특화 용어 사전
     - 감정 레이블
     - 키워드 추출
   - **알고리즘**
     ```python
     # 스포츠 특화 감정 분석
     class SportsSentimentAnalyzer:
         def __init__(self):
             self.sports_terms = load_sports_terms()
             self.sentiment_model = load_sentiment_model()
             
         def analyze(self, text):
             # 1. 스포츠 용어 정규화
             normalized_text = self.normalize_sports_terms(text)
             
             # 2. 감정 분석
             sentiment = self.sentiment_model.predict(normalized_text)
             
             # 3. 스포츠 특화 점수 계산
             sports_score = self.calculate_sports_relevance(normalized_text)
             
             return {
                 'sentiment': sentiment,
                 'sports_relevance': sports_score,
                 'key_terms': self.extract_key_terms(normalized_text)
             }
     ```
   - **가치 제안**: 정보 소비 시간 50% 단축

3. **트렌드 분석**
   - **데이터 활용**
     - 스포츠별 인기도
     - 계절성 트렌드
     - 지역별 선호도
   - **알고리즘**
     ```python
     # 스포츠 트렌드 분석
     class SportsTrendAnalyzer:
         def analyze_trends(self, data):
             # 1. 계절성 분석
             seasonal_trends = self.analyze_seasonality(data)
             
             # 2. 지역별 선호도
             regional_preferences = self.analyze_regional_preferences(data)
             
             # 3. 실시간 인기도
             current_popularity = self.calculate_current_popularity(data)
             
             return {
                 'seasonal_score': seasonal_trends,
                 'regional_score': regional_preferences,
                 'popularity_score': current_popularity
             }
     ```
   - **가치 제안**: 트렌드 발견 속도 70% 향상

### 3. 클래스/여행
| 구분 | 기능 | 기술적 특징 |
|------|------|------------|
| 🆓 무료 | • 태그 필터<br>• 기본 조건 검색<br>• 유사도 정렬 | • TF-IDF 기반 정렬<br>• 기본 필터링 |
| 💎 유료 | • BERT 기반 추천<br>• 맞춤형 클래스<br>• AI 설명 생성 | • KoBERT 활용<br>• 위치 기반 서비스 |

#### 💎 유료 기능 상세
1. **BERT 기반 추천**
   - **데이터 수집**
     - 클래스 설명 텍스트
     - 강사 프로필
     - 수강생 피드백
   - **알고리즘**
     ```python
     # 스포츠 클래스 추천
     class SportsClassRecommender:
         def __init__(self):
             self.kobert = load_kobert_model()
             self.classifier = load_classifier()
             
         def recommend(self, user_profile, available_classes):
             # 1. 클래스 특성 추출
             class_features = self.extract_class_features(available_classes)
             
             # 2. 사용자 선호도 매칭
             preference_scores = self.match_preferences(
                 user_profile, class_features
             )
             
             # 3. 강사 매칭
             instructor_scores = self.match_instructors(
                 user_profile, class_features
             )
             
             # 4. 최종 점수 계산
             final_scores = (
                 preference_scores * 0.4 +
                 instructor_scores * 0.3 +
                 class_features.popularity * 0.3
             )
             
             return rank_classes(final_scores)
     ```
   - **가치 제안**: 클래스 매칭 정확도 55% 향상

2. **맞춤형 클래스**
   - **데이터 처리**
     - 사용자 일정
     - 위치 기반 거리
     - 선호 시간대
   - **알고리즘**
     ```python
     # 스케줄 기반 클래스 매칭
     class ScheduleBasedMatcher:
         def find_matching_classes(self, user_schedule, available_classes):
             matches = []
             
             for class_ in available_classes:
                 # 1. 시간 가용성 체크
                 if self.check_time_availability(user_schedule, class_):
                     time_score = 1.0
                 else:
                     time_score = 0.0
                     
                 # 2. 이동 시간 계산
                 travel_time = self.calculate_travel_time(
                     user_location, class_.location
                 )
                 
                 # 3. 최종 점수 계산
                 match_score = (
                     time_score * 0.5 +
                     (1 - travel_time/max_travel_time) * 0.5
                 )
                 
                 if match_score > threshold:
                     matches.append((class_, match_score))
                     
             return sorted(matches, key=lambda x: x[1], reverse=True)
     ```
   - **가치 제안**: 클래스 참여율 40% 증가

3. **AI 설명 생성**
   - **데이터 활용**
     - 클래스 특성
     - 강사 프로필
     - 수강생 피드백
   - **GPT 프롬프트**
     ```python
     prompt = f"""
     클래스 정보:
     - 이름: {class_info.name}
     - 난이도: {class_info.difficulty}
     - 강사: {class_info.instructor}
     - 수강생 평점: {class_info.rating}
     
     사용자 프로필:
     - 경험: {user_profile.experience}
     - 목표: {user_profile.goals}
     - 선호도: {user_profile.preferences}
     
     추천 이유:
     - 난이도 적합성
     - 강사 매칭도
     - 목표 달성 가능성
     
     생성할 설명 유형: {explanation_type}
     """
     ```
   - **가치 제안**: 클래스 이해도 65% 향상

### 4. 상점
| 구분 | 기능 | 기술적 특징 |
|------|------|------------|
| 🆓 무료 | • 인기 상품 정렬<br>• 가격/조건 검색<br>• 리뷰 점수 | • 복합 점수 계산<br>• 실시간 정렬 |
| 💎 유료 | • 구매 이력 추천<br>• AI 상품 설명<br>• 트렌드 큐레이션 | • 연관 규칙 학습<br>• 트렌드 분석 |

#### 💎 유료 기능 상세
1. **구매 이력 추천**
   - **데이터 수집**
     - 스포츠별 구매 이력
     - 장비 호환성
     - 사용자 피드백
   - **알고리즘**
     ```python
     # 스포츠 장비 추천
     class SportsEquipmentRecommender:
         def recommend(self, user_profile, purchase_history):
             # 1. 스포츠별 필요 장비 분석
             required_equipment = self.analyze_required_equipment(
                 user_profile.sports
             )
             
             # 2. 장비 호환성 체크
             compatibility = self.check_equipment_compatibility(
                 required_equipment, purchase_history
             )
             
             # 3. 가성비 분석
             value_scores = self.analyze_value_for_money(
                 available_equipment, user_profile.budget
             )
             
             return rank_equipment(
                 compatibility * 0.4 +
                 value_scores * 0.3 +
                 user_preferences * 0.3
             )
     ```
   - **가치 제안**: 구매 전환율 30% 증가

2. **AI 상품 설명**
   - **데이터 처리**
     - 장비 특성
     - 사용자 스포츠 프로필
     - 전문가 리뷰
   - **GPT 프롬프트**
     ```python
     prompt = f"""
     장비 정보:
     - 이름: {equipment.name}
     - 용도: {equipment.purpose}
     - 특성: {equipment.features}
     - 가격: {equipment.price}
     
     사용자 프로필:
     - 스포츠: {user_profile.sports}
     - 경험: {user_profile.experience}
     - 예산: {user_profile.budget}
     
     전문가 리뷰:
     - 평점: {expert_reviews.rating}
     - 장점: {expert_reviews.pros}
     - 단점: {expert_reviews.cons}
     
     생성할 설명 유형: {description_type}
     """
     ```
   - **가치 제안**: 상품 이해도 45% 향상

3. **트렌드 큐레이션**
   - **데이터 활용**
     - 스포츠별 트렌드
     - 계절성
     - 지역별 선호도
   - **알고리즘**
     ```python
     # 스포츠 장비 트렌드 분석
     class EquipmentTrendAnalyzer:
         def analyze_trends(self, data):
             # 1. 스포츠별 트렌드
             sport_trends = self.analyze_sport_trends(data)
             
             # 2. 계절성 분석
             seasonal_trends = self.analyze_seasonality(data)
             
             # 3. 지역별 선호도
             regional_preferences = self.analyze_regional_preferences(data)
             
             return {
                 'sport_score': sport_trends,
                 'seasonal_score': seasonal_trends,
                 'regional_score': regional_preferences
             }
     ```
   - **가치 제안**: 신규 상품 발견률 50% 증가

### 5. 마이페이지
| 구분 | 기능 | 기술적 특징 |
|------|------|------------|
| 🆓 무료 | • 최근 본 목록<br>• 관심/찜 기능<br>• 기본 프로필 | • 로컬 DB 활용<br>• 기본 CRUD |
| 💎 유료 | • 활동 기반 피드백<br>• 맞춤 피드백<br>• 성향 분석 | • 활동 점수 계산<br>• 심리모델 분석 |

#### 💎 유료 기능 상세
1. **활동 기반 피드백**
   - **데이터 수집**
     - 스포츠 활동 로그
     - 목표 달성도
     - 체력 변화
   - **알고리즘**
     ```python
     # 스포츠 활동 분석
     class SportsActivityAnalyzer:
         def analyze_activities(self, user_activities):
             # 1. 활동 다양성
             diversity_score = self.calculate_diversity(
                 user_activities.sports
             )
             
             # 2. 목표 달성도
             goal_achievement = self.calculate_goal_achievement(
                 user_activities.goals
             )
             
             # 3. 체력 변화
             fitness_progress = self.analyze_fitness_progress(
                 user_activities.fitness_data
             )
             
             return {
                 'diversity_score': diversity_score,
                 'goal_achievement': goal_achievement,
                 'fitness_progress': fitness_progress
             }
     ```
   - **가치 제안**: 사용자 만족도 40% 향상

2. **맞춤 피드백**
   - **데이터 처리**
     - 활동 패턴
     - 체력 데이터
     - 목표 진행도
   - **알고리즘**
     ```python
     # 스포츠 피드백 생성
     class SportsFeedbackGenerator:
         def generate_feedback(self, user_data):
             # 1. 활동 패턴 분석
             pattern_analysis = self.analyze_activity_patterns(
                 user_data.activities
             )
             
             # 2. 체력 데이터 분석
             fitness_analysis = self.analyze_fitness_data(
                 user_data.fitness
             )
             
             # 3. 목표 진행도 분석
             goal_analysis = self.analyze_goal_progress(
                 user_data.goals
             )
             
             return self.generate_personalized_feedback(
                 pattern_analysis,
                 fitness_analysis,
                 goal_analysis
             )
     ```
   - **가치 제안**: 목표 달성률 35% 증가

3. **성향 분석**
   - **데이터 활용**
     - 스포츠 선호도
     - 활동 패턴
     - 소셜 상호작용
   - **알고리즘**
     ```python
     # 스포츠 성향 분석
     class SportsPersonalityAnalyzer:
         def analyze_personality(self, user_data):
             # 1. 스포츠 선호도 분석
             sport_preferences = self.analyze_sport_preferences(
                 user_data.preferences
             )
             
             # 2. 활동 패턴 분석
             activity_patterns = self.analyze_activity_patterns(
                 user_data.activities
             )
             
             # 3. 소셜 상호작용 분석
             social_interactions = self.analyze_social_interactions(
                 user_data.interactions
             )
             
             return {
                 'preference_profile': sport_preferences,
                 'activity_profile': activity_patterns,
                 'social_profile': social_interactions
             }
     ```
   - **가치 제안**: 개인화된 경험 제공으로 만족도 55% 향상

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
