import { SiteContent, BlogPost, PortfolioItem } from './types';

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    title: "광고하지 마세요,\n맛을 보여주세요",
    subtitle: "온라인 전단지를 고객의 마음을 움직이는 쇼룸으로.\n에이픽은 제대로 보이고, 매력적으로 보여,\n끝내 선택받는 과정을 설계합니다.",
    ctaText: "내 매장 플레이스 진단받기",
  },
  problem: {
    title: "체험단도 부르고 마케팅을 하는데\n매출은 제자리인가요?",
    description: "마케팅에 수백만 원을 쓰시면서 정작 고객이 가장 먼저 보는 첫 화면이 무엇으로 되어있나요?\n\n고객은 직접 먹어보기 전까지 맛을 모릅니다.\n오늘 하루도 사장님의 손님을 경쟁 업체에 뺏기고 있습니다.",
  },
  contact: {
    email: "apick2@naver.com",
    businessNumber: "889-35-01097",
    openTalkUrl: "https://open.kakao.com/me/apick",
    blogUrl: "https://blog.naver.com/apicka"
  },
  principles: [
    {
      id: 'p1',
      title: "조작, 과장, 허수 NO",
      subtitle: "원칙 1",
      description: "언더마케팅은 절대 하지 않습니다. 오랫동안 유지되는 건강한 마케팅만 선택합니다.",
    },
    {
      id: 'p2',
      title: "진정성 있는 파트너",
      subtitle: "원칙 2",
      description: "내 가게라면 어떻게 하겠다는 기준으로 움직입니다. 매출로 이어지는 포인트를 먼저 제안합니다.",
    }
  ],
  services: [
    {
      id: 's1',
      title: "비주얼 설계",
      description: "재료의 신선함과 완성도가 느껴지는 촬영·영상·이미지로 첫인상을 만듭니다.",
      details: ["사진 촬영", "영상 제작", "AI 이미지"],
      iconName: "Camera",
    },
    {
      id: 's2',
      title: "전환 카피라이팅",
      description: "사장님만 아는 강점을, 고객이 선택하게 만드는 카피를 만들어드립니다.",
      details: ["플레이스 세팅", "브랜드 블로그", "디자인"],
      iconName: "Edit3",
    },
    {
      id: 's3',
      title: "로컬 신뢰 구축",
      description: "우리 동네 고객이 공감하는 리뷰와 브랜드 스토리로 재방문을 설계합니다. 처음부터 끝까지 인하우스 마케팅팀처럼 함께합니다.",
      details: ["브랜딩", "운영 컨설팅", "체험단 모집"],
      iconName: "Users",
    }
  ]
};

export const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "로컬 마케팅, 왜 플레이스부터 시작해야 할까요?",
    excerpt: "네이버 플레이스는 로컬 비즈니스의 첫인상을 결정합니다. 상위 노출의 비밀을 공개합니다.",
    date: "2024.05.20",
    category: "마케팅 인사이트",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    id: '2',
    title: "성공하는 매장의 브랜딩 공식 3가지",
    excerpt: "단순히 예쁜 로고가 브랜딩이 아닙니다. 고객의 기억에 남는 경험을 설계하는 법.",
    date: "2024.05.18",
    category: "브랜딩",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    id: '3',
    title: "숏폼 영상으로 매출 2배 올린 사례",
    excerpt: "짧은 영상 하나가 가져온 놀라운 변화. 우리 매장도 릴스와 숏츠를 시작해야 하는 이유.",
    date: "2024.05.15",
    category: "성공 사례",
    imageUrl: "https://picsum.photos/800/600?random=3"
  }
];

export const SAMPLE_PORTFOLIOS: PortfolioItem[] = [
  {
    id: 'p1',
    title: "OO식당 - 리뷰·사진 개선 후 노출 상승",
    category: "플레이스 상위노출",
    imageUrl: "https://picsum.photos/800/600?random=20",
    description: "플레이스 SEO 최적화와 고퀄리티 촬영으로 매출 상승을 이끌어낸 사례입니다.",
  },
  {
    id: 'p2',
    title: "촬영 포트폴리오",
    category: "촬영",
    imageUrl: "https://picsum.photos/800/600?random=21",
    description: "음식, 공간, 제품 등 에이픽 스튜디오의 전문적인 촬영 결과물입니다."
  },
  {
    id: 'p3',
    title: "영상 작업물",
    category: "영상",
    imageUrl: "https://picsum.photos/800/600?random=22",
    description: "매장의 매력을 담아내는 숏폼 및 홍보 영상 포트폴리오."
  },
  {
    id: 'p4',
    title: "디자인 포트폴리오",
    category: "디자인",
    imageUrl: "https://picsum.photos/800/600?random=23",
    description: "브랜드의 결을 살리는 맞춤형 디자인 작업물입니다."
  },
  {
    id: 'p5',
    title: "브랜딩 & 컨설팅 사례",
    category: "브랜딩",
    imageUrl: "https://picsum.photos/800/600?random=24",
    description: "로컬 브랜드의 시작과 성장을 함께한 컨설팅 사례들."
  },
  {
    id: 'p6',
    title: "AI 이미지 제작",
    category: "AI Art",
    imageUrl: "https://picsum.photos/800/600?random=25",
    description: "상상을 현실로 만드는 고퀄리티 AI 이미지 제작 포트폴리오."
  }
];