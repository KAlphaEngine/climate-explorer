export const groups=[
  {
    "id": "tropical",
    "name": "열대",
    "color": "#e96453"
  },
  {
    "id": "highland",
    "name": "고산",
    "color": "#956947"
  },
  {
    "id": "dry",
    "name": "건조",
    "color": "#eabb36"
  },
  {
    "id": "temperate",
    "name": "온대",
    "color": "#9dbc4d"
  },
  {
    "id": "continental",
    "name": "냉대",
    "color": "#69b6d6"
  },
  {
    "id": "polar",
    "name": "한대",
    "color": "#a389d2"
  }
];
export const destinations=[
  {
    "id": "singapore",
    "country": "싱가포르",
    "city": "싱가포르",
    "group": "tropical",
    "climate": "열대 기후(열대 우림 기후)",
    "lat": 1.35,
    "lon": 103.82,
    "tag": "초록빛 숲과 함께",
    "hero": "rainforest",
    "climateNote": "일 년 내내 덥고 비가 많이 내려요.",
    "lifeNote": "바닥을 땅에서 높인 고상 가옥은 바람이 통하고 습기를 피하는 데 도움이 돼요. 말레이 전통 캄퐁 가옥에서 이런 모습을 볼 수 있어요. 열대 지역에서는 두리안·망고스틴 같은 과일을 재배해요.",
    "source": "9차시 · 6, 9, 11번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "일 년 동안 기온과 비는 어떤가요?",
        "options": [
          "여름에만 덥고, 겨울에는 매우 추워요.",
          "일 년 내내 덥고, 비가 많이 내려요."
        ],
        "correct": [
          1
        ],
        "hint": "기온선이 높은 곳에 머물고 있나요? 비가 내리는 달도 살펴보세요.",
        "explain": "일 년 내내 덥고 비가 많이 내려요.",
        "record": "일 년 내내 덥고 비가 많이 내려요.",
        "field": "기후 특징",
        "focus": "both"
      },
      {
        "kind": "photo",
        "title": "울창한 숲을 만드는 기후를 찾아보세요.",
        "img": "rainforest",
        "caption": "열대 우림의 자연환경",
        "options": [
          "덥고 비가 많이 오는 기후",
          "비가 거의 오지 않는 기후"
        ],
        "correct": [
          0
        ],
        "hint": "빽빽하게 자란 나무들이 살아가려면 어떤 환경이 필요할까요?",
        "explain": "더위와 풍부한 비 속에서 크고 작은 나무가 빽빽하게 자라요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "캄퐁 가옥에서 땅과 떨어진 바닥을 찾아보세요.",
        "img": "lesson-kampong.png",
        "caption": "말레이 전통 캄퐁 가옥 · 바닥을 높인 고상 가옥",
        "options": [
          "지붕",
          "기둥 위의 바닥"
        ],
        "correct": [
          1
        ],
        "hint": "집의 아래쪽을 살펴보세요. 바닥 밑에 빈 공간이 있어요.",
        "explain": "기둥을 세워 바닥을 땅보다 높게 만든 집을 고상 가옥이라고 해요. 사진의 말레이 전통 캄퐁 가옥도 고상 가옥의 한 예예요. 바닥 아래로 바람이 통하고 땅의 습기와 일시적인 침수에 대비할 수 있어요. 싱가포르에서도 볼 수 있었던 전통 주거 형태이며, 오늘날 모든 집이 이런 모습은 아니에요.",
        "field": "생활 모습",
        "hotspots": [
          {
            "x": 50,
            "y": 73,
            "choice": 1,
            "label": "바닥"
          }
        ]
      },
      {
        "kind": "photo",
        "title": "덥고 비가 많은 지역에서 기르는 열대과일은?",
        "options": [
          "두리안과 망고스틴",
          "올리브와 포도"
        ],
        "correct": [
          0
        ],
        "hint": "두리안과 망고스틴 버튼을 눌러 사진 속 과일의 생김새를 살펴보세요.",
        "explain": "두리안과 망고스틴은 따뜻하고 습한 열대 지역에서 자라는 과일이에요. 싱가포르에서도 나무와 과일을 만날 수 있으며, 주변 동남아시아의 재배 지역에서 들여오는 과일도 많아요.",
        "field": "생활 모습",
        "caption": "나무에 열린 두리안",
        "recordKeywords": [
          "고상 가옥",
          "바람",
          "습기",
          "열대과일",
          "두리안·망고스틴"
        ],
        "img": "lesson-durian.png",
        "gallery": [
          {
            "label": "두리안",
            "img": "lesson-durian.png",
            "caption": "나무에 열린 두리안",
            "description": "껍질에 뾰족한 가시가 있는 두리안이에요. 나뭇가지에 달린 열매를 찾아보세요."
          },
          {
            "label": "망고스틴",
            "img": "lesson-mangosteen.png",
            "caption": "망고스틴의 껍질과 하얀 과육",
            "description": "짙은 자주색 껍질 속에 하얀 과육이 있어요. 껍질을 연 과일과 열지 않은 과일을 비교해 보세요."
          }
        ]
      }
    ],
    "revision": 2,
    "lifeKeywords": [
      "고상 가옥",
      "바람",
      "습기",
      "열대과일",
      "두리안·망고스틴"
    ]
  },
  {
    "id": "dodoma",
    "country": "탄자니아",
    "city": "도도마",
    "group": "tropical",
    "climate": "열대 기후(열대 사바나 기후)",
    "lat": -6.16,
    "lon": 35.75,
    "tag": "우기와 건기가 있는 초원",
    "hero": "savanna",
    "climateNote": "일 년 내내 덥고 우기와 건기가 번갈아 나타나요.",
    "lifeNote": "초원의 야생 동물과 자연환경을 관찰하는 사파리 관광이 발달했어요.",
    "source": "9차시 · 7, 10, 12번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "비가 오는 양은 시기에 따라 어떤가요?",
        "options": [
          "모든 달에 비가 비슷하게 많이 와요.",
          "비가 많이 오는 때와 적게 오는 때가 뚜렷해요."
        ],
        "correct": [
          1
        ],
        "hint": "높은 막대가 모인 때와 낮은 막대가 모인 때를 비교해 보세요.",
        "explain": "일 년 내내 덥고 우기와 건기가 번갈아 나타나요.",
        "record": "일 년 내내 덥고 우기와 건기가 번갈아 나타나요.",
        "field": "기후 특징",
        "focus": "rain"
      },
      {
        "kind": "photo",
        "title": "초원의 모습을 찾아보세요.",
        "img": "savanna",
        "caption": "열대 사바나의 자연환경",
        "options": [
          "나무가 띄엄띄엄 서 있는 초원",
          "얼음으로 덮인 땅"
        ],
        "correct": [
          0
        ],
        "hint": "사진 속 나무 사이에 무엇이 넓게 펼쳐져 있나요?",
        "explain": "우산 모양의 나무가 띄엄띄엄 있는 초원이 발달해요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "이곳에서 발달한 관광은 무엇일까요?",
        "img": "safari-serengeti",
        "caption": "탄자니아 · 세렝게티 국립공원",
        "options": [
          "빙하 관광",
          "사파리 관광"
        ],
        "correct": [
          1
        ],
        "hint": "자동차를 타고 어떤 동물들을 관찰하고 있나요?",
        "explain": "초원의 야생 동물과 자연환경을 관찰하는 사파리 관광이 발달해요.",
        "field": "생활 모습",
        "recordKeywords": [
          "초원",
          "야생 동물",
          "사파리 관광"
        ]
      }
    ],
    "lifeKeywords": [
      "초원",
      "야생 동물",
      "사파리 관광"
    ]
  },
  {
    "id": "cairo",
    "revision": 3,
    "country": "이집트",
    "city": "카이로",
    "group": "dry",
    "climate": "건조 기후(사막 기후)",
    "lat": 30.04,
    "lon": 31.24,
    "tag": "비가 귀한 땅",
    "hero": "desert",
    "climateNote": "비가 매우 적게 내려요.",
    "lifeNote": "오아시스와 강 주변에서 대추야자를 재배하고, 두꺼운 벽의 집과 품이 넉넉한 갈라베야로 더위에 대비해요.",
    "source": "10차시 · 6, 9~12번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "강수량 막대에서 어떤 특징을 찾을 수 있나요?",
        "options": [
          "일 년 동안 비가 매우 적게 내려요.",
          "일 년 내내 비가 많이 내려요."
        ],
        "correct": [
          0
        ],
        "hint": "막대가 거의 보이지 않을 만큼 낮은 달이 많아요.",
        "explain": "비가 매우 적게 내려요.",
        "record": "비가 매우 적게 내려요.",
        "field": "기후 특징",
        "focus": "rain"
      },
      {
        "kind": "photo",
        "title": "비가 적은 곳에서 대추야자를 기르려면?",
        "img": "lesson-dates.png",
        "caption": "수확한 대추야자 열매",
        "options": [
          "물을 얻기 쉬운 오아시스나 강 주변에서 물을 대어요.",
          "물이 전혀 없는 사막 한가운데에서 길러요."
        ],
        "correct": [
          0
        ],
        "hint": "대추야자도 식물이에요. 뿌리가 자라고 열매가 맺히려면 무엇이 필요할까요?",
        "explain": "이집트에서는 오아시스나 나일강 주변의 물을 이용해 대추야자를 재배해요. 수확한 열매는 생으로 먹거나 말려서 먹어요. 건조한 기후에서도 농사에는 물이 필요해요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "강한 햇볕과 모래바람을 피할 집은?",
        "img": "egypt-mud-house",
        "caption": "이집트 · 다클라 오아시스 알카스르의 흙벽돌집",
        "options": [
          "벽이 두껍고 창문이 작은 집",
          "벽 없이 사방이 열린 집"
        ],
        "correct": [
          0
        ],
        "hint": "햇볕과 모래바람이 집 안에 덜 들어오려면 어떨까요?",
        "explain": "사진은 이집트 알카스르의 흙벽돌집이에요. 두꺼운 벽과 작은 창문은 강한 햇볕과 모래바람을 피하는 데 도움이 돼요.",
        "field": "생활 모습",
        "credit": "Vyacheslav Argenberg · CC BY 2.0",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Clay_walls_and_houses,_Al-Qasr_old_city,_Dakhla_Oasis,_Egypt.jpg",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
      },
      {
        "kind": "photo",
        "title": "갈라베야는 더운 날에 어떻게 도움이 될까요?",
        "options": [
          "품이 넉넉해 공기가 통하고, 긴 옷이 햇볕을 가려요.",
          "몸에 꼭 붙고 짧아서 피부를 모두 드러내요."
        ],
        "correct": [
          0
        ],
        "hint": "옷의 품과 소매, 길이를 살펴보세요.",
        "explain": "갈라베야는 이집트의 전통적인 긴 옷이에요. 넉넉한 품과 긴 소매는 바람이 통하게 하고 피부에 닿는 강한 햇볕을 줄이는 데 도움이 돼요. 색·소재·모양은 다양하며 모든 사람이 같은 옷을 입는 것은 아니에요.",
        "field": "생활 모습",
        "caption": "갈라베야 · 넉넉한 품과 긴 소매의 전통 옷",
        "recordKeywords": [
          "오아시스",
          "대추야자",
          "두꺼운 벽",
          "작은 창문",
          "갈라베야",
          "넉넉한 품"
        ],
        "img": "lesson-galabeya.png"
      }
    ],
    "lifeKeywords": [
      "오아시스",
      "대추야자",
      "두꺼운 벽",
      "작은 창문",
      "갈라베야",
      "넉넉한 품"
    ]
  },
  {
    "id": "ulaanbaatar",
    "country": "몽골",
    "city": "울란바토르",
    "group": "dry",
    "climate": "건조 기후(초원 기후)",
    "lat": 47.92,
    "lon": 106.92,
    "pinOffset": [
      0,
      20
    ],
    "tag": "풀과 물을 따라가는 여행",
    "hero": "mongolia-steppe",
    "climateNote": "비가 적지만 여름에 조금 내리며, 겨울은 매우 추워요.",
    "lifeNote": "물과 풀을 찾아 가축을 기르고, 옮기기 편한 게르를 이용해요.",
    "source": "10차시 · 7, 9, 11번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "울란바토르의 강수량과 겨울 기온은 어떤가요?",
        "options": [
          "일 년 내내 덥고 매달 비가 많이 내려요.",
          "비는 적지만 여름에 조금 내리고 겨울은 매우 추워요."
        ],
        "correct": [
          1
        ],
        "hint": "여름의 낮은 강수량 막대와 겨울의 기온선을 함께 살펴보세요.",
        "explain": "비가 적지만 여름에 조금 내리며, 겨울은 매우 추워요.",
        "record": "비가 적지만 여름에 조금 내리며, 겨울은 매우 추워요.",
        "field": "기후 특징",
        "focus": "both"
      },
      {
        "kind": "photo",
        "title": "사막과 달리 이곳에는 무엇이 자라고 있나요?",
        "img": "mongolia-steppe",
        "caption": "몽골 · 키 작은 풀이 자라는 초원",
        "options": [
          "키 작은 풀이 자라는 초원",
          "크고 작은 나무가 빽빽한 열대 우림"
        ],
        "correct": [
          0
        ],
        "hint": "사막보다 비가 조금 더 내려요. 사진 속 가축들은 무엇을 먹고 있나요?",
        "explain": "건조 기후 중에서도 비가 약간 내리는 곳에는 키 작은 풀이 자라는 초원이 발달해요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "유목 생활에 알맞은 게르의 특징은?",
        "img": "ger-mongolia",
        "caption": "몽골 · 이동 생활에 쓰이는 전통 가옥 게르",
        "options": [
          "철거하고 다시 설치하기 편해요.",
          "한 번 지으면 다른 곳으로 옮길 수 없어요."
        ],
        "correct": [
          0
        ],
        "hint": "가축이 먹을 풀과 물을 찾아 이동하려면 집은 어떤 것이 좋을까요?",
        "explain": "물과 풀을 찾아 가축을 기르는 이동 생활에 맞춰, 게르는 철거와 설치가 편리해요.",
        "field": "생활 모습",
        "recordKeywords": [
          "물과 풀",
          "가축",
          "이동",
          "게르"
        ]
      }
    ],
    "lifeKeywords": [
      "물과 풀",
      "가축",
      "이동",
      "게르"
    ]
  },
  {
    "id": "bogota",
    "country": "콜롬비아",
    "city": "보고타",
    "group": "highland",
    "climate": "고산 기후",
    "lat": 4.71,
    "lon": -74.07,
    "tag": "높은 산지의 봄",
    "hero": "andes-crops",
    "climateNote": "저위도의 높은 산지는 일 년 내내 봄처럼 서늘해요.",
    "lifeNote": "감자·옥수수를 재배하고 강한 햇볕과 낮·밤의 기온 차에 대비해 모자와 망토를 착용해요.",
    "source": "10차시 · 15, 17, 18번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "기온선은 일 년 동안 어떤 모습인가요?",
        "options": [
          "여름에는 매우 덥고 겨울에는 매우 추워요.",
          "일 년 내내 봄처럼 서늘하고 기온 변화가 작아요."
        ],
        "correct": [
          1
        ],
        "hint": "기온선이 크게 오르내리나요, 비슷한 높이에 있나요?",
        "explain": "저위도의 높은 산지는 일 년 내내 봄처럼 서늘해요.",
        "record": "저위도의 높은 산지는 일 년 내내 봄처럼 서늘해요.",
        "field": "기후 특징",
        "focus": "temp"
      },
      {
        "kind": "photo",
        "title": "안데스 산지에서 기르는 작물을 두 가지 찾아보세요.",
        "img": "andes-crops",
        "caption": "안데스 산지 · 작물 재배",
        "options": [
          "감자",
          "포도",
          "옥수수"
        ],
        "correct": [
          0,
          2
        ],
        "hint": "포도는 지중해성 기후의 대표 작물로 배웠어요. 다른 작물을 찾아보세요.",
        "explain": "안데스 산지에서는 감자와 옥수수를 주로 재배해요.",
        "field": "생활 모습",
        "multi": true
      },
      {
        "kind": "photo",
        "title": "모자와 망토를 착용하는 까닭을 찾아보세요.",
        "img": "andes-clothing",
        "caption": "안데스 산지 · 전통 옷차림",
        "options": [
          "강한 햇볕과 낮·밤의 기온 차에 대비하려고",
          "일 년 내내 밤에도 매우 덥기 때문에"
        ],
        "correct": [
          0
        ],
        "hint": "햇볕이 강하고 낮과 밤의 기온 차가 큰 곳이에요.",
        "explain": "모자로 강한 햇볕을 피하고, 망토로 몸을 따뜻하게 유지해요.",
        "field": "생활 모습",
        "recordKeywords": [
          "감자·옥수수",
          "산비탈",
          "모자·망토",
          "햇볕",
          "낮과 밤의 기온 차"
        ]
      }
    ],
    "lifeKeywords": [
      "감자·옥수수",
      "산비탈",
      "모자·망토",
      "햇볕",
      "낮과 밤의 기온 차"
    ]
  },
  {
    "id": "seoul",
    "country": "대한민국",
    "city": "서울",
    "group": "temperate",
    "climate": "온대 기후(온대 계절풍 기후)",
    "lat": 37.57,
    "lon": 126.98,
    "pinOffset": [2, 16],
    "tag": "여름의 비, 풍성한 논",
    "hero": "monsoon-life-farming",
    "climateNote": "여름은 덥고 습하며 겨울은 춥고 건조해요.",
    "lifeNote": "벼농사를 짓고 쌀을 이용한 음식 문화가 발달했어요.",
    "source": "11차시 · 6, 9번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "기온이 높은 여름의 강수량은 어떤가요?",
        "options": [
          "여름에는 비가 거의 내리지 않아요.",
          "여름에는 기온이 높고 비도 많이 내려요."
        ],
        "correct": [
          1
        ],
        "hint": "기온선이 높아지는 때에 파란 막대도 높아지는지 보세요.",
        "explain": "여름은 덥고 습하며 겨울은 춥고 건조해요.",
        "record": "여름은 덥고 습하며 겨울은 춥고 건조해요.",
        "field": "기후 특징",
        "focus": "both"
      },
      {
        "kind": "photo",
        "title": "여름의 더위와 풍부한 비를 이용하는 농사는?",
        "img": "monsoon-life-farming",
        "caption": "온대 계절풍 기후 지역 · 벼농사",
        "options": [
          "벼농사",
          "올리브 재배"
        ],
        "correct": [
          0
        ],
        "hint": "사진의 논에는 어떤 작물이 자라고 있나요?",
        "explain": "여름에 덥고 비가 많이 오는 기후를 이용해 벼농사를 지어요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "이 음식 문화의 바탕이 되는 곡물은?",
        "img": "monsoon-life-food",
        "caption": "온대 계절풍 기후 지역 · 식생활",
        "options": [
          "커피",
          "쌀"
        ],
        "correct": [
          1
        ],
        "hint": "벼를 수확하면 어떤 곡물을 얻을까요?",
        "explain": "벼농사를 바탕으로 쌀을 이용한 다양한 음식 문화가 발달했어요.",
        "field": "생활 모습",
        "recordKeywords": [
          "여름의 더위와 비",
          "벼농사",
          "쌀",
          "음식"
        ]
      }
    ],
    "lifeKeywords": [
      "여름의 더위와 비",
      "벼농사",
      "쌀",
      "음식"
    ]
  },
  {
    "id": "london",
    "country": "영국",
    "city": "런던",
    "group": "temperate",
    "climate": "온대 기후(서안 해양성 기후)",
    "lat": 51.51,
    "lon": -0.13,
    "pinOffset": [
      -12,
      -13
    ],
    "tag": "고르게 내리는 비",
    "hero": "lesson-cattle.png",
    "climateNote": "계절별 기온 변화가 비교적 작고 비가 고르게 내려요.",
    "lifeNote": "밀을 재배하고 가축을 기르며 빵·감자·육류를 먹어요.",
    "source": "11차시 · 6, 10번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "런던의 기온과 강수량은 어떤가요?",
        "options": [
          "계절별 기온 변화가 비교적 작고 비가 고르게 내려요.",
          "여름에는 덥고 비가 여름에 집중돼요."
        ],
        "correct": [
          0
        ],
        "hint": "여름의 강수량 막대가 다른 계절보다 특별히 높은가요?",
        "explain": "계절별 기온 변화가 비교적 작고 비가 고르게 내려요.",
        "record": "계절별 기온 변화가 비교적 작고 비가 고르게 내려요.",
        "field": "기후 특징",
        "focus": "both"
      },
      {
        "kind": "photo",
        "title": "이 기후 지역의 농업을 찾아보세요.",
        "img": "lesson-cattle.png",
        "caption": "가축 사육 · 소를 기르는 모습",
        "options": [
          "카카오를 재배해요.",
          "밀을 재배하고 가축을 길러요."
        ],
        "correct": [
          1
        ],
        "hint": "서늘하고 비가 고르게 내리는 환경과 사진 속 가축을 생각해 보세요.",
        "explain": "서늘하고 비가 고르게 내려 밀 재배와 가축 사육을 해요.",
        "field": "생활 모습",
        "gallery": [
          {
            "img": "lesson-cattle.png",
            "caption": "가축 사육 · 소를 기르는 모습",
            "label": "가축"
          },
          {
            "img": "lesson-wheat.png",
            "caption": "밀 재배 · 밀밭",
            "label": "밀밭"
          }
        ]
      },
      {
        "kind": "photo",
        "title": "사진 속 식사와 연결되는 농업은?",
        "img": "lesson-meal.png",
        "caption": "빵·감자·육류를 이용한 식사 예시",
        "options": [
          "밀 재배와 가축 사육",
          "카카오와 카사바 재배"
        ],
        "correct": [
          0
        ],
        "hint": "빵은 어떤 곡물로 만들고, 고기는 어디에서 얻을까요?",
        "explain": "밀로 빵을 만들고, 기르는 가축에서 육류를 얻어요. 빵·감자·육류를 이용한 식생활과 연결해 볼 수 있어요.",
        "field": "생활 모습",
        "recordKeywords": [
          "밀 재배",
          "가축 사육",
          "빵",
          "감자",
          "육류"
        ]
      }
    ],
    "revision": 2,
    "lifeKeywords": [
      "밀 재배",
      "가축 사육",
      "빵",
      "감자",
      "육류"
    ]
  },
  {
    "id": "madrid",
    "country": "에스파냐",
    "city": "마드리드",
    "group": "temperate",
    "climate": "온대 기후(지중해성 기후)",
    "lat": 40.42,
    "lon": -3.7,
    "pinOffset": [
      0,
      17
    ],
    "tag": "햇살 아래 올리브",
    "hero": "lesson-oranges.png",
    "climateNote": "여름은 건조하고 여름보다 겨울에 비가 많이 내려요.",
    "lifeNote": "올리브·포도·오렌지 등을 재배하고 올리브유를 피자와 샐러드 등 요리에 이용해요.",
    "source": "11차시 · 6, 11번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "여름과 겨울의 비를 비교해 보세요.",
        "options": [
          "여름에는 건조하고 겨울에 비가 더 많이 내려요.",
          "겨울에는 건조하고 여름에 비가 더 많이 내려요."
        ],
        "correct": [
          0
        ],
        "hint": "6~8월의 파란 막대와 겨울의 막대를 비교해 보세요.",
        "explain": "여름은 건조하고 여름보다 겨울에 비가 많이 내려요.",
        "record": "여름은 건조하고 여름보다 겨울에 비가 많이 내려요.",
        "field": "기후 특징",
        "focus": "rain"
      },
      {
        "kind": "photo",
        "title": "지중해성 기후 지역에서 재배하는 작물을 찾아보세요.",
        "img": "lesson-oranges.png",
        "caption": "오렌지 과수원",
        "options": [
          "올리브",
          "오렌지",
          "카사바"
        ],
        "correct": [
          0,
          1
        ],
        "hint": "오렌지 과수원과 올리브 열매 사진을 번갈아 보세요. 카사바는 열대 지역의 대표 작물이에요.",
        "explain": "지중해성 기후 지역에서는 올리브·포도·오렌지 등을 재배해요. 오렌지 등은 건조한 여름에 필요한 물을 대어 재배하기도 해요.",
        "field": "생활 모습",
        "multi": true,
        "gallery": [
          {
            "img": "lesson-oranges.png",
            "caption": "오렌지 과수원",
            "label": "오렌지"
          },
          {
            "img": "lesson-olive-oil.png",
            "caption": "올리브 열매와 올리브유",
            "label": "올리브"
          }
        ]
      },
      {
        "kind": "photo",
        "title": "올리브 열매는 음식에 어떻게 쓰일까요?",
        "img": "lesson-pizza.png",
        "caption": "지중해 지역 음식 사례 · 피자",
        "options": [
          "올리브유를 짜서 피자 등 요리에 이용해요.",
          "난방용 털옷을 만들어요."
        ],
        "correct": [
          0
        ],
        "hint": "올리브 사진의 병에 담긴 것은 무엇일까요?",
        "explain": "올리브는 열매를 먹거나 기름을 짜서 이용해요. 올리브유는 피자와 샐러드 등 여러 요리에 쓰여요. 피자는 이탈리아에서 비롯된 음식으로, 같은 지중해 지역의 식생활 사례예요.",
        "field": "생활 모습",
        "gallery": [
          {
            "img": "lesson-pizza.png",
            "caption": "지중해 지역 음식 사례 · 피자",
            "label": "피자"
          },
          {
            "img": "lesson-olive-oil.png",
            "caption": "요리 재료 · 올리브유",
            "label": "올리브유"
          }
        ],
        "recordKeywords": [
          "올리브·포도·오렌지",
          "재배",
          "올리브유",
          "피자·샐러드"
        ]
      }
    ],
    "revision": 2,
    "lifeKeywords": [
      "올리브·포도·오렌지",
      "재배",
      "올리브유",
      "피자·샐러드"
    ]
  },
  {
    "id": "irkutsk",
    "country": "러시아",
    "city": "이르쿠츠크",
    "group": "continental",
    "climate": "냉대 기후",
    "lat": 52.29,
    "lon": 104.28,
    "tag": "긴 겨울을 준비하는 숲",
    "hero": "lesson-taiga.png",
    "climateNote": "겨울이 길고 추우며 여름과 겨울의 기온 차가 커요.",
    "lifeNote": "침엽수림을 이용한 임업이 발달하고 난방과 음식 저장을 해요.",
    "source": "11차시 · 12, 14, 15번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "여름과 겨울의 기온 차는 어떤가요?",
        "options": [
          "일 년 내내 비슷하고 온화해요.",
          "겨울이 매우 춥고 여름과 겨울의 차이가 커요."
        ],
        "correct": [
          1
        ],
        "hint": "기온선의 가장 높은 곳과 가장 낮은 곳을 비교해 보세요.",
        "explain": "겨울이 길고 추우며 여름과 겨울의 기온 차가 커요.",
        "record": "겨울이 길고 추우며 여름과 겨울의 기온 차가 커요.",
        "field": "기후 특징",
        "focus": "temp"
      },
      {
        "kind": "photo",
        "title": "이 숲에서 발달한 산업은 무엇일까요?",
        "img": "lesson-taiga.png",
        "caption": "타이가 · 넓게 펼쳐진 침엽수림",
        "options": [
          "목재와 펄프를 만드는 임업",
          "열대 과일 재배"
        ],
        "correct": [
          0
        ],
        "hint": "빽빽한 나무를 어떤 자원으로 이용할 수 있을까요?",
        "explain": "냉대 지역에는 타이가라고 부르는 침엽수림이 넓게 펼쳐져 있어요. 풍부한 나무를 이용하는 임업이 발달해요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "긴 겨울을 준비하는 방법 두 가지를 찾아보세요.",
        "img": "izba-russia",
        "caption": "러시아 · 전통 통나무집 이즈바",
        "options": [
          "집을 따뜻하게 난방해요.",
          "음식을 저장해요.",
          "얇은 옷만 입어요."
        ],
        "correct": [
          0,
          1
        ],
        "hint": "길고 추운 겨울 동안 따뜻하게 지내고 음식을 먹을 방법을 생각해 보세요.",
        "explain": "난방으로 집을 따뜻하게 하고 긴 겨울에 대비해 음식을 저장해요.",
        "field": "생활 모습",
        "multi": true,
        "recordKeywords": [
          "침엽수림",
          "임업",
          "긴 겨울",
          "난방",
          "음식 저장"
        ]
      }
    ],
    "lifeKeywords": [
      "침엽수림",
      "임업",
      "긴 겨울",
      "난방",
      "음식 저장"
    ]
  },
  {
    "id": "utqiagvik",
    "revision": 3,
    "country": "미국",
    "city": "우트키아비크",
    "group": "polar",
    "climate": "한대 기후(툰드라 기후)",
    "lat": 71.29,
    "lon": -156.79,
    "pinOffset": [0, 8],
    "tag": "짧은 여름, 얼어 있는 땅",
    "hero": "alaska-parka",
    "climateNote": "매우 추우며 여름에도 서늘해요. 짧은 여름에는 땅 표면이 녹고 낮은 식물이 자라요.",
    "lifeNote": "전통 털옷으로 추위에 대비하고, 얼어 있는 땅에 맞춰 송유관을 설치해요. 순록은 툰드라의 식물을 먹고 이동하며, 여름에는 백야가 나타나요.",
    "source": "12차시 · 5, 7, 8번 슬라이드",
    "steps": [
      {
        "kind": "graph",
        "title": "가장 따뜻한 시기에도 기온은 어떤가요?",
        "options": [
          "열대 지역처럼 매우 더워요.",
          "가장 따뜻한 시기에도 기온이 낮은 편이에요."
        ],
        "correct": [
          1
        ],
        "hint": "기온선의 가장 높은 곳도 10℃ 아래인지 살펴보세요.",
        "explain": "매우 추우며 가장 따뜻한 시기에도 기온이 낮아요.",
        "record": "매우 추우며 가장 따뜻한 시기에도 기온이 낮아요.",
        "field": "기후 특징",
        "focus": "temp"
      },
      {
        "kind": "photo",
        "title": "툰드라의 짧은 여름에는 무엇이 자랄까요?",
        "options": [
          "키 큰 열대 나무가 빽빽한 숲",
          "이끼·지의류·풀처럼 키가 작은 식물"
        ],
        "correct": [
          1
        ],
        "hint": "나무가 빽빽한 숲인지, 땅 가까이 자라는 식물이 많은지 보세요.",
        "explain": "툰드라는 여름이 짧고 추워 큰 나무가 자라기 어려워요. 여름에 땅의 표면이 녹으면 이끼·지의류·풀과 작은 관목 등이 자라요. 사진은 같은 기후의 러시아 사례예요.",
        "field": "생활 모습",
        "img": "tundra-russia",
        "caption": "러시아 · 툰드라 (같은 기후의 비교 사례)"
      },
      {
        "kind": "photo",
        "title": "순록은 툰드라에서 어떤 먹이를 찾을까요?",
        "options": [
          "지의류와 풀 같은 식물",
          "열대 과일인 두리안"
        ],
        "correct": [
          0
        ],
        "hint": "풀이 낮게 자라는 툰드라의 모습을 떠올려 보세요.",
        "explain": "알래스카의 야생 순록을 카리부라고 불러요. 무리를 지어 이동하며 지의류와 풀 등을 먹고 살아요. 특히 지의류는 겨울의 중요한 먹이예요.",
        "field": "생활 모습",
        "img": "caribou-alaska",
        "caption": "미국 알래스카 · 이동하는 야생 순록(카리부)",
        "credit": "NPS / Kyle Joly",
        "creditUrl": "https://www.nps.gov/articles/lichensandcaribou.htm"
      },
      {
        "kind": "photo",
        "title": "털과 모자가 달린 옷은 무엇에 대비한 것일까요?",
        "img": "alaska-parka",
        "caption": "미국 알래스카 놈 · 이누피아트의 전통 털옷(1903~1908년경)",
        "options": [
          "강한 추위와 찬바람",
          "한여름의 더위"
        ],
        "correct": [
          0
        ],
        "hint": "몸 전체를 감싼 옷과 얼굴 주변의 털을 살펴보세요.",
        "explain": "알래스카 이누피아트는 전통적으로 동물의 가죽과 털로 만든 옷을 입어 추위에 대비했어요. 사진은 과거의 생활 사례예요.",
        "field": "생활 모습",
        "credit": "Beverly B. Dobbs · UW Libraries · Public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Iñupiat_woman_named_Nowadluk_Nora_Ootenna_wearing_full_length_fur_parka_with_pieced_checkerwork_hem,_Nome,_Alaska,_probably_between_1903_and_1908_(WARNER_445).jpg"
      },
      {
        "kind": "photo",
        "title": "송유관을 땅 위에 설치한 까닭은?",
        "img": "pipeline-alaska",
        "caption": "미국 알래스카 · 송유관",
        "options": [
          "얼어 있는 땅이 녹아 관이 뒤틀리는 것을 막으려고",
          "관을 더 뜨겁게 만들려고"
        ],
        "correct": [
          0
        ],
        "hint": "송유관의 열기로 얼어 있던 땅이 녹으면 어떤 일이 생길까요?",
        "explain": "열기로 땅이 녹으면 관이 뒤틀리거나 끊어질 수 있어 거치대 위에 설치했어요.",
        "field": "생활 모습"
      },
      {
        "kind": "photo",
        "title": "백야와 오로라를 바르게 설명한 것은?",
        "options": [
          "여름에는 밤에도 해가 지지 않는 때가 있고, 오로라는 어두운 하늘에서 관찰하기 좋아요.",
          "백야는 오로라가 하늘을 낮처럼 밝히기 때문에 생겨요."
        ],
        "correct": [
          0
        ],
        "hint": "백야의 빛은 태양에서 와요. 오로라와 빛의 원인이 같은지 생각해 보세요.",
        "explain": "우트키아비크에는 여름에 해가 지지 않는 백야가 나타나요. 오로라는 태양에서 온 전기를 띤 입자가 지구의 대기와 만나 빛나는 현상이에요. 오로라는 기후 자체가 아니며, 백야처럼 밝은 하늘에서는 관찰하기 어려워요. 늘 볼 수 있는 것도 아니에요.",
        "field": "생활 모습",
        "caption": "백야 · 새벽 2시 40분 무렵의 모습",
        "recordKeywords": [
          "털옷",
          "추위",
          "얼어 있는 땅",
          "송유관",
          "툰드라",
          "순록",
          "백야"
        ],
        "img": "lesson-midnight-sun.png",
        "gallery": [
          {
            "label": "백야",
            "img": "lesson-midnight-sun.png",
            "caption": "백야 · 새벽 2시 40분 무렵의 모습",
            "help": "새벽 2시 40분 무렵인데도 해가 보이고 하늘이 밝아요. 밤의 시각과 하늘의 모습을 비교해 보세요.",
            "description": "우트키아비크에서는 여름 한동안 태양이 지평선 아래로 지지 않아요. 지구가 기울어진 채 태양 주위를 돌기 때문에 나타나는 현상이에요."
          },
          {
            "label": "오로라",
            "img": "lesson-aurora.png",
            "caption": "어두운 하늘에 빛나는 오로라",
            "description": "태양에서 온 전기를 띤 입자가 지구 대기와 만나 빛을 내요. 어둡고 맑은 하늘에서 관찰하기 좋고, 언제나 나타나는 것은 아니에요. 백야가 생기는 원인과는 달라요."
          }
        ]
      }
    ],
    "lifeKeywords": [
      "털옷",
      "추위",
      "얼어 있는 땅",
      "송유관",
      "툰드라",
      "순록",
      "백야"
    ]
  }
];
export const byId=id=>destinations.find(d=>d.id===id);
export const groupOf=d=>groups.find(g=>g.id===d.group);
