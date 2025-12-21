
import { StoryQuestion, StoryEnding, QuizQuestion, Character, SiteInfo } from './types';

export const PALACES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];


export const STORY_BANK: StoryQuestion[] = [
  {
    palace: "命宮",
    star: "守護者",
    title: "起始之地的迷霧",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    description: "妳在一片神祕的迷霧中醒來，前方有三條光徑。妳的直覺告訴妳，每條路都通往不同的宿命。妳會選擇哪條？",
    options: [
      { text: "金色的光輝之路，看起來充滿威嚴與希望", type: "A" },
      { text: "幽靜的紫色林間小徑，充滿未知與好奇", type: "B" },
      { text: "隨波逐流，任由微風吹拂妳走向隨機的方向", type: "C" }
    ]
  },
  {
    palace: "財帛宮",
    star: "貪狼星",
    title: "祭壇上的誘惑",
    image: "https://images.unsplash.com/photo-1533422902779-afd35862e39a?auto=format&fit=crop&q=80&w=800",
    description: "妳來到一座古老的祭壇，上面放滿了璀璨的寶石。貪狼星君在暗影中耳語：『凡人的渴求，是星辰的燃料。』妳的選擇是？",
    options: [
      { text: "奪取最大的那顆紅寶石，這是實力的證明", type: "A" },
      { text: "放下身上的一件舊物作為交換，換取一份微弱的指引", type: "B" },
      { text: "靜靜欣賞而不帶走任何東西，慾望是枷鎖", type: "C" }
    ]
  },
  {
    palace: "福德宮",
    star: "天同星",
    title: "旅途的終章之光",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800",
    description: "天同星君化作一名慈祥的老者出現在盡頭。他問妳：『奔波了一生，妳最終追求的是什麼？』",
    options: [
      { text: "至高無上的掌控權與尊重", type: "A" },
      { text: "看透萬物真理的深刻智慧", type: "B" },
      { text: "與心愛的人在靜謐中度過餘生", type: "C" }
    ]
  }
];

export const STORY_ENDINGS: StoryEnding[] = [
  { id: 1, name: "孤傲梟雄", type: "權力", description: "妳選擇了最強硬的道路。在星際間妳建立了自己的王朝，但身邊卻空無一人。", meaning: "權力之巔，亦是孤獨之源。" },
  { id: 2, name: "永恆智者", type: "智慧", description: "妳看透了命運的紋理，選擇留在星宮中，引導下一個迷失的靈魂。", meaning: "智慧，是唯一的不滅火種。" },
  { id: 3, name: "平凡的幸福", type: "和諧", description: "妳回到了最初的起點。雖然命盤依然神祕，但妳已經學會珍惜眼前的微光。", meaning: "平凡，亦是另一種偉大。" },
  { id: 4, name: "隨風星塵", type: "自由", description: "妳不屬於任何宮位。妳化作星塵，在宇宙的廣袤中獲得了永恆的自由。", meaning: "放下執著，方見無垠。" }
];

export const QUIZ_BANK: QuizQuestion[] = [
  {
    title: "危機時刻",
    question: "當妳面對一個突如其來的巨大困境，妳的第一反應通常是？",
    image: "https://images.unsplash.com/photo-1518063311540-06497287b336?auto=format&fit=crop&q=80&w=800",
    options: [
      { text: "挺身而出，立刻尋找突破口並行動", attributes: { Pioneer: 3, Leader: 1 } },
      { text: "冷靜坐下，規劃出最完美的策略再執行", attributes: { Leader: 3, Supporter: 1 } },
      { text: "先安撫大家的情緒，尋求共識與支持", attributes: { Supporter: 3, Cooperator: 1 } },
      { text: "觀察局勢，配合大家的腳步一起度過", attributes: { Cooperator: 3 } }
    ]
  },
  {
    title: "靈魂色彩",
    question: "如果人生是一幅畫，妳希望它是什麼色調？",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    options: [
      { text: "鮮艷奪目的亮紅色，充滿張力", attributes: { Pioneer: 3 } },
      { text: "高貴沉穩的深藍色，大氣磅礡", attributes: { Leader: 3 } },
      { text: "清新自然的淺綠色，和諧療癒", attributes: { Supporter: 3 } },
      { text: "柔和明亮的月白色，靜謐優雅", attributes: { Cooperator: 3 } }
    ]
  }
];

export const CHARACTER_BANK: Character[] = [
  {
    name: "紫微星",
    title: "北斗之尊，命盤之王",
    type: "領導型",
    image: "https://picsum.photos/seed/star1/400/600",
    description: "紫微代表著帝王之氣。擁有強大的領導魅力與自我要求，總是在團隊中扮演核心角色。"
  },
  {
    name: "天機星",
    title: "智多星，靈動之魂",
    type: "支援型",
    image: "https://picsum.photos/seed/star2/400/600",
    description: "天機象徵智慧與變動。思維敏捷、擅長分析，是天生的策劃家與智囊團。"
  },
  {
    name: "七殺星",
    title: "開創之將，勇猛之星",
    type: "開創型",
    image: "https://picsum.photos/seed/star3/400/600",
    description: "七殺代表極致的行動力。孤高而剛烈，不畏艱難，永遠衝在時代的最前線。"
  },
  {
    name: "太陰星",
    title: "月亮之神，溫柔之光",
    type: "合作型",
    image: "https://picsum.photos/seed/star4/400/600",
    description: "太陰象徵母性與柔美。心思細膩、富有同理心，擅長處理人際間的微妙平衡。"
  }
];
