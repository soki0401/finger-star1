
import { StoryQuestion, StoryEnding, QuizQuestion, Character, SiteInfo } from './types';

export const PALACES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export const STORY_BANK: StoryQuestion[] = []; // Story is now handled in storyData.ts

export const STORY_ENDINGS: StoryEnding[] = []; // Endings are now handled in storyData.ts

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
  },
  {
    title: "人際互動",
    question: "在一個熱鬧的聚會中，妳通常處於什麼樣的位置？",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    options: [
      { text: "炒熱氣氛，成為大家的關注焦點", attributes: { Pioneer: 2, Leader: 2 } },
      { text: "掌控流程，確保每個人都被照顧到", attributes: { Leader: 3, Supporter: 1 } },
      { text: "安靜傾聽，與少數幾位好友深度對談", attributes: { Supporter: 2, Cooperator: 2 } },
      { text: "在角落觀察，思考大家的行為模式", attributes: { Supporter: 3 } }
    ]
  },
  {
    title: "決策偏好",
    question: "面對一項全新的機會，妳最看重的是什麼？",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    options: [
      { text: "是否能讓我展現前所未有的突破", attributes: { Pioneer: 3 } },
      { text: "是否能讓我掌控局面，建立秩序", attributes: { Leader: 3 } },
      { text: "是否能獲得可靠的資訊與邏輯支持", attributes: { Supporter: 3 } },
      { text: "是否能對團隊及他人帶來長遠幸福", attributes: { Cooperator: 3 } }
    ]
  },
  {
    title: "挫折應對",
    question: "當妳的計劃被否定時，妳會如何反應？",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800",
    options: [
      { text: "據理力爭，用實力證明我是對的", attributes: { Pioneer: 3, Leader: 1 } },
      { text: "修正方案，尋找共贏的替代路徑", attributes: { Leader: 2, Cooperator: 2 } },
      { text: "雖然失落，但會思考對方的建議是否有理", attributes: { Supporter: 3 } },
      { text: "淡然處之，相信這只是暫時的磨合", attributes: { Cooperator: 3 } }
    ]
  }
];

export const CHARACTER_BANK: Character[] = [
  {
    name: "紫微星",
    title: "北斗之尊，命盤之王",
    type: "領導型",
    image: "https://picsum.photos/seed/star_ziwei/400/600",
    description: "紫微代表著帝王之氣。擁有強大的領導魅力與自我要求，總是在團隊中扮演核心角色，優雅而尊貴。"
  },
  {
    name: "天機星",
    title: "智多星，靈動之魂",
    type: "支援型",
    image: "https://picsum.photos/seed/star_tianji/400/600",
    description: "天機象徵智慧與變動。思維敏捷、擅長分析，是天生的策劃家與智囊團，能看透複雜事物的本質。"
  },
  {
    name: "太陽星",
    title: "博愛之光，光明之源",
    type: "支援型",
    image: "https://picsum.photos/seed/star_taiyang/400/600",
    description: "太陽代表無私與正義。熱情積極，樂於助人，如同烈日般溫暖他人，具有極強的傳播力與影響力。"
  },
  {
    name: "武曲星",
    title: "剛毅果決，財富之星",
    type: "開創型",
    image: "https://picsum.photos/seed/star_wuqu/400/600",
    description: "武曲象徵執行力與財富。性格剛直，做事一絲不苟，是實幹派的代表，對目標有著鋼鐵般的意志。"
  },
  {
    name: "天同星",
    title: "福德之主，和諧之星",
    type: "合作型",
    image: "https://picsum.photos/seed/star_tiantong/400/600",
    description: "天同代表純真與福氣。重視心靈的平靜與和諧，不喜爭鬥，是天生的協調者與生活藝術家。"
  },
  {
    name: "廉貞星",
    title: "剛柔並濟，外交之星",
    type: "開創型",
    image: "https://picsum.photos/seed/star_lianzhen/400/600",
    description: "廉貞象徵公關與政治。性格鮮明且富有才華，能在複雜的人際網中游刃有餘，具備獨特的藝術品味。"
  },
  {
    name: "天府星",
    title: "南斗之主，守成之王",
    type: "領導型",
    image: "https://picsum.photos/seed/star_tianfu/400/600",
    description: "天府代表安定與財庫。性格溫良，擅長理財與規劃，具有大將之風，能穩紮穩打地經營人生。"
  },
  {
    name: "太陰星",
    title: "月亮之神，溫柔之光",
    type: "合作型",
    image: "https://picsum.photos/seed/star_taiyin/400/600",
    description: "太陰象徵母性與柔美。心思細膩、富有同理心，擅長處理人際間的微妙平衡，追求高品質的生活。"
  },
  {
    name: "貪狼星",
    title: "慾望之主，多才多藝",
    type: "開創型",
    image: "https://picsum.photos/seed/star_tanlang/400/600",
    description: "貪狼象徵機會與社交。才華橫溢，對世界充滿好奇與渴望，是天生的交際高手，生活精彩紛呈。"
  },
  {
    name: "巨門星",
    title: "是非之主，口才之星",
    type: "支援型",
    image: "https://picsum.photos/seed/star_jumen/400/600",
    description: "巨門代表研究與口才。觀察力細緻，善於雄辯，適合從事深度研究或需要精密溝通的工作。"
  },
  {
    name: "天相星",
    title: "權力之印，輔佐之臣",
    type: "領導型",
    image: "https://picsum.photos/seed/star_tianxiang/400/600",
    description: "天相代表公正與服務。重視外在形象與和諧，是極佳的助手與管理者，講求誠信與規律。"
  },
  {
    name: "天梁星",
    title: "長者之風，蔭護之星",
    type: "支援型",
    image: "https://picsum.photos/seed/star_tianliang/400/600",
    description: "天梁代表成熟與福蔭。具有長者風範，樂於提攜後輩，處事客觀冷靜，是眾人眼中的智者。"
  },
  {
    name: "七殺星",
    title: "開創之將，勇猛之星",
    type: "開創型",
    image: "https://picsum.photos/seed/star_qisha/400/600",
    description: "七殺代表極致的行動力與獨立。不畏艱難，敢於冒險，永遠衝在時代的最前線，是開天闢地的先鋒。"
  },
  {
    name: "破軍星",
    title: "先鋒之將，變革之星",
    type: "開創型",
    image: "https://picsum.photos/seed/star_pojun/400/600",
    description: "破軍代表破壞與重建。不甘平庸，喜歡挑戰現狀，具有驚人的創造力，能在廢墟中建立新秩序。"
  }
];
