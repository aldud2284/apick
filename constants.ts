import { SiteContent, BlogPost, PortfolioItem } from './types';

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    title: "발견에서 선택까지.",
    subtitle: "에이픽은 제대로 보이고, 매력적으로 보여,\n끝내 선택받는 과정을 설계합니다.",
    ctaText: "무료 상담 신청하기",
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
      title: "언더마케팅 절대 안 합니다.",
      subtitle: "🚫 조작, 과장, 허수 NO",
      description: "우리는 실제 손님이 찾는 정보, 정직한 데이터, 매장 실력 기반으로 오랫동안 유지되는 건강한 마케팅만 선택합니다.",
    },
    {
      id: 'p2',
      title: "내 가게처럼 챙기되, 사장님과 함께합니다.",
      subtitle: "❤️ 진정성 있는 파트너",
      description: "매출로 이어지는 포인트 선제 제안, 운영 비효율 발견. 정말 내 가게라면 이렇게 하겠다 기준으로 움직입니다.",
      quote: "우리는 함께 움직일 때 시너지가 가장 크다고 믿는 마케팅 파트너 입니다.",
    }
  ],
  services: [
    {
      id: 's1',
      title: "브랜딩 & 운영 컨설팅",
      description: "로컬 매장이 브랜드로 자리 잡도록, 처음부터 끝까지 함께 설계합니다.",
      details: ["브랜드 아이덴티티(BI) 기획", "브랜드 톤앤매너 설정", "매장·기업 포지셔닝 정리", "고객 동선/경험 설계"],
      iconName: "Compass",
    },
    {
      id: 's2',
      title: "네이버 플레이스",
      description: "로컬 마케팅의 핵심은 플레이스입니다. 매일 관리하고, 꾸준히 최적화합니다.",
      details: ["리뷰 관리 및 답변", "검색 키워드 교체 · 점검", "경쟁사 분석", "상위노출을 위한 구조 개선"],
      iconName: "MapPin",
    },
    {
      id: 's3',
      title: "사진 촬영",
      description: "브랜드 톤에 맞춰 통일감 있는 촬영을 진행합니다.",
      details: ["플레이스 최적화 사진", "대표 이미지 촬영", "음식 / 제품 / 공간", "SNS 활용 사진"],
      iconName: "Camera",
    },
    {
      id: 's4',
      title: "영상 제작",
      description: "실제 매장의 분위기와 매력을 바로 전달하는 숏폼 중심 영상 제작.",
      details: ["방문형 숏폼", "메뉴·서비스 하이라이트", "매장 소개 영상", "SNS용 가벼운 영상"],
      iconName: "Video",
    },
    {
      id: 's5',
      title: "브랜드 블로그 운영",
      description: "스토리텔링 기반으로 읽히는 글, 검색되는 글을 씁니다.",
      details: ["키워드 분석", "글 구조 프레임", "사진/문구 편집", "후기형 · 정보형 원고 작성"],
      iconName: "Edit3",
    },
    {
      id: 's6',
      title: "체험단 모집대행",
      description: "직접 인플루언서를 섭외하고 일정 조율까지 전부 대행합니다.",
      details: ["체험단 섭외 및 관리", "방문 일정 조율", "리뷰 품질 체크", "이슈 모니터링"],
      iconName: "Users",
    },
    {
      id: 's7',
      title: "디자인 제작",
      description: "매장 운영에 필요한 모든 디자인을 빠르게 제작합니다.",
      details: ["로고 / 명함", "현수막 / 배너 / 메뉴판", "인쇄물 디자인", "SNS 카드뉴스 디자인"],
      iconName: "Palette",
    },
    {
      id: 's8',
      title: "AI 이미지 제작",
      description: "촬영이 어려운 순간, 브랜드 톤에 맞는 이미지를 빠르게 제작합니다.",
      details: ["메뉴/제품 가상 연출", "브랜드 컷 제작", "홍보물용 AI 배경", "촬영 자료와 결합한 AI 리터칭"],
      iconName: "Cpu",
    },
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