
import { StoryQuestion, StoryEnding } from './types';

export const STORY_BANK: StoryQuestion[] = [
  {
    palace: "命宮",
    star: "無",
    title: "未知的起點",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1200",
    description: "你掉到一個未知的黑暗地方，四周迷霧繚繞，唯有前面的一束光閃爍著，似乎是唯一一個出口。",
    options: [
      { text: "1. 憑什麼要我出去？", type: "A", immediateEnding: 1 },
      { text: "2. 故事開始好像都要順著光走...", type: "B" },
      { text: "3. 不出去，我就躺平。", type: "C", immediateEnding: 1 }
    ]
  },
  {
    palace: "命宮",
    star: "紫微",
    title: "初次見面",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1200",
    description: "伴隨著你穿越的那刻閃爍著，剛睜開眼，便見一位穿著尊貴的女性憑空出現，聲音凜冽卻帶著威嚴，她說道「我是紫微，乃是掌管北斗主星之主。這裡是十二宮位中之一宮 – 命宮」，問道「凡人啊，你可知，這次是為了什麼而來？」",
    options: [
      { text: "1. 沒有特別想要的", type: "A" },
      { text: "2. 只求能出去", type: "B" },
      { text: "3. 我怎麼知道？", type: "C" }
    ]
  },
  {
    palace: "命宮",
    star: "紫微",
    title: "帝王的祝福",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1200",
    description: "紫微了解了來意後，便說道：「我雖然不能與你踏上旅程，但還是能給予你祝福，幫助你的冒險。你想要哪個東西呢？」",
    options: [
      { text: "1. 名為英雄的披風 (名聲)", type: "A" },
      { text: "2. 百戰百勝的劍 (戰鬥)", type: "B" },
      { text: "3. 無盡底的錢包 (物慾)", type: "C" }
    ]
  },
  {
    palace: "父母宮",
    star: "天梁",
    title: "長者的啟示",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=1200",
    description: "接下祝福後，你踏上了旅程。又走了一段路，有點累了，便找了個有水源，旁邊又有野莓果的樹下休息。這時，身旁一座不起眼，長滿青苔的老者石像突然開口說話：「好心人啊，你能不能…幫我…擦拭下身體呢？如你所見，多年沒人幫我清理了，你能否幫幫我呢？」",
    options: [
      { text: "1. 熱心幫忙清理乾淨", type: "A" },
      { text: "2. 簡單把青苔弄下便繼續休息", type: "B" },
      { text: "3. 這什麼石像啊，無視好了", type: "C" }
    ]
  },
  {
    palace: "父母宮",
    star: "天梁",
    title: "石像的變身",
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?auto=format&fit=crop&q=80&w=1200",
    description: "在你準備繼續出發時，石像突然震動了下，隨後一道靈便從石像中現身，靈並不是如老者石像般，而是亭亭玉立的少女。她拿出了一個果實遞給你：「算我多管閒事吧，這是長壽果，很珍貴的，吃了能消災解厄。看你也不大聰明，怕你容易被騙，就當見面禮給你吧。」",
    options: [
      { text: "1. 大口吃掉", type: "A" },
      { text: "2. 留著以後不時之需", type: "B" },
      { text: "3. 送給路邊乞丐，狗都不吃陌生人的禮物", type: "C" }
    ]
  },
  {
    palace: "福德宮",
    star: "天同",
    title: "福德樂園",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=1200",
    description: "接下長壽果後，轉身要啟程，景色卻在剎那之間變成其他場景，眼前出現了一座樂園，入口長的招搖奔放，寫著大大的福德樂園。進去後繞了一圈，卻發現自己一直回到一樣的位置。「吶？那邊那個，陪我玩吧，我還有其他甜點能給你吃喔！」，一道聲音從上方而來，一名少女拿著泡芙，正從天空降到你面前。",
    options: [
      { text: "1. 我還不吃爆 (擺爛支線)", type: "A" },
      { text: "2. 先婉拒，太來路不明了吧", type: "B" },
      { text: "3. 搶她的來吃", type: "C" }
    ]
  },
  {
    palace: "福德宮",
    star: "天同",
    title: "樂園的玩樂",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1200",
    description: "少女說她名為天同，是這裡的主人，只有跟她玩夠了她才考慮放你走，於是你只能耐心地先陪她，至少等她願意鬆口說放你出去。於是從白天玩到了黃昏，最後她終於有些玩累了，給你指著兩條路「一條是漂亮的花海，一條是有荊棘的路，你自己選吧。」",
    options: [
      { text: "1. 去看花海", type: "A" },
      { text: "2. 去刀山冒險", type: "B" },
      { text: "3. 原地踏步", type: "C" }
    ]
  },
  {
    palace: "田宅宮",
    star: "天府",
    title: "塔樓",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
    description: "經過一段長路，白天的經歷實在讓你精疲力盡，此時天不做美，竟又下起雨來，幸好前方遇到了座塔樓，急忙進去避雨。塔樓裡靜悄悄的，腳步聲迴盪之間，抬頭往上看去竟突然出現了一位老者。他說道「看來來了位客人呢。」，話完他又瞬間移動到了你面前，「鄙人乃是天府星，閣下若是想進塔避雨，可否幫老夫處理此處後山的雜物呢？」",
    options: [
      { text: "1. 積極快地去幫忙整理", type: "A" },
      { text: "2. 稍微簡單弄就好", type: "B" },
      { text: "3. 乾脆直接出去淋雨", type: "C" }
    ]
  },
  {
    palace: "田宅宮",
    star: "天府",
    title: "財寶與自由",
    image: "https://images.unsplash.com/photo-1533073356964-748460af3307?auto=format&fit=crop&q=80&w=1200",
    description: "雨過天晴，出了個大太陽，似乎在祝福你的旅程。準備出發之前，天府同你問了個問題「老夫看你覺得有緣份，若城堡財寶與自由只能選其一，你會留下什麼？」",
    options: [
      { text: "1. 當然是財寶啦！", type: "A" },
      { text: "2. 自由就在門之外，為何不選", type: "B" },
      { text: "3. 我全都要", type: "C" }
    ]
  },
  {
    palace: "官祿宮",
    star: "天相",
    title: "冒險公會",
    image: "https://images.unsplash.com/photo-1505673539012-ee21ffb77e2a?auto=format&fit=crop&q=80&w=1200",
    description: "離開塔樓後，走走看看就到一個像冒險公會中心的地方，要繼續往前走卻被攔住了，原來是前方有妖怪出現，為了保護旅人，先暫時將那條路封了起來。你心想也沒有其他可繞的路，就想自己做擔保說自己不怕，要拿出入許可。辦公室內公文如山，公會長天相聽完後，見勸不動你，便直接說「印章不見了，你要的我辦不了，除非你幫我找出來。」...",
    options: [
      { text: "1. 耐心地找印章", type: "A" },
      { text: "2. 偷溜出去就好", type: "B" },
      { text: "3. 幫他蓋個假章就好了", type: "C" }
    ]
  },
  {
    palace: "官祿宮",
    star: "武曲",
    title: "訓練場試煉",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1200",
    description: "總算是出來了，卻發現他們居然在這設了訓練場，要通過教官武曲才能成功出去。武曲也不問，他早就聽天相給的消息知道了你，他冷冷看著：「這裡廢物出不去。拿出本事，證明你不是混日子的。」",
    options: [
      { text: "1. 展示自身僅有的武力", type: "A" },
      { text: "2. 展示金錢的力量", type: "B" },
      { text: "3. 裝死躲避", type: "C" }
    ]
  },
  {
    palace: "官祿宮",
    star: "武曲",
    title: "金光的獎勵",
    image: "https://images.unsplash.com/photo-1518063311540-06497287b336?auto=format&fit=crop&q=80&w=1200",
    description: "通過了測驗後，武曲給了你一塊帶著金光的圓牌，說這個是暢通公會出入口的名牌，但也可以跟公會換一次稀有物，讓你自行收著就好。",
    options: [
      { text: "1. 買好東西走起", type: "A" },
      { text: "2. 謝絕", type: "B" },
      { text: "3. 問他還有沒有更多", type: "C" }
    ]
  },
  {
    palace: "奴僕宮",
    star: "巨門",
    title: "迷霧中的耳語",
    image: "https://images.unsplash.com/photo-1475139462822-57de3963c32b?auto=format&fit=crop&q=80&w=1200",
    description: "周圍迷霧環繞，暗得不像話，「你出不去的…不要想走了……而且這一路上多累阿…你就沒想過是他們害你出不去的嗎？」如同煙霧般的暗幽幽的聲音在你耳邊響起，面前出現了一道巨大的門，緩緩地打開，裡面是伸手不見五指的黑暗，「…就留在這裡難道不好嗎？」，彷彿要將你捲入…",
    options: [
      { text: "1. 反駁聲音，相信自己所見", type: "A" },
      { text: "2. 保持沉默，冷靜分析", type: "B" },
      { text: "3. 直接發瘋，開始亂吼", type: "C" }
    ]
  },
  {
    palace: "奴僕宮",
    star: "巨門",
    title: "遺落的鑰匙",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
    description: "巨門第一次見嚇不著的人，便著急的逃跑了，還落下了一把鑰匙，看著還有些生鏽。",
    options: [
      { text: "1. 撿起來收著", type: "A" },
      { text: "2. 還不猶豫踢走", type: "B" },
      { text: "3. 我懷疑是陷阱...", type: "C" }
    ]
  },
  {
    palace: "遷移宮",
    star: "天機",
    title: "天機的實驗",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    description: "那人說她名為天機，原本只是為了調查巨門，卻沒想到被捲入其中。得知了你是為了找到出口才踏上旅程的，她便說她有一個還在實驗階段的道具，也許可以直接送你到出口，但就是要看機率，也不穩定。道具開啟後，路徑卻瘋狂變換，天機盡力的計算著：「變數太快了！出口十秒後就會消失！」",
    options: [
      { text: "1. 相信直覺衝進去就對了", type: "A" },
      { text: "2. 嘗試幫她", type: "B" },
      { text: "3. 算了，消失就消失", type: "C" }
    ]
  },
  {
    palace: "遷移宮",
    star: "天機",
    title: "時空卡頓",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    description: "裡面的空間場景不斷變換，「道具好像有點操作過度，現在卡住了，好像只能將你送到附近，但我也不知道現在出去的話會到哪裡…」她抱歉地說道。",
    options: [
      { text: "1. 人生就是賭博", type: "A" },
      { text: "2. 先隨便丟個東西測試吧", type: "B" },
      { text: "3. 等它穩定吧，不然感覺試試就逝逝", type: "C" }
    ]
  },
  {
    palace: "疾厄宮",
    star: "廉貞",
    title: "監牢之變",
    image: "https://images.unsplash.com/photo-1510133769068-68884a1273ea?auto=format&fit=crop&q=80&w=1200",
    description: "出去後，好像來到了一個像監牢般的地方，紅光壟罩著，警鈴聲作響。天機跟你一起逃跑，但她卻不小心摔了一跤，被追兵抓住了。一位看似典獄長的人不疾不徐地走了過來，令人將她作為人質。「是她害你進來這裡的吧，你可有意原諒她？」",
    options: [
      { text: "1. 原諒，她只是想幫我而已", type: "A" },
      { text: "2. 再看看吧", type: "B" },
      { text: "3. 不原諒，她害我跑這麼累", type: "C" }
    ]
  },
  {
    palace: "疾厄宮",
    star: "廉貞",
    title: "審問台的抉擇",
    image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=1200",
    description: "她打了聲響指，空間瞬間便到了審問台前，上面的名牌寫著廉貞兩字。她令人端上兩杯顏色詭異的飲品，微笑著說「罪名擅闖監牢，但看在你是無意的，給你一次選擇的機會吧。選一杯，喝下去，或者留下靈魂。」",
    options: [
      { text: "1. 選一杯大膽喝掉", type: "A" },
      { text: "2. 假喝騙看看", type: "B" },
      { text: "3. 橫豎都是一條命，都喝了", type: "C" }
    ]
  },
  {
    palace: "財帛宮",
    star: "太陰",
    title: "月下花園",
    image: "https://images.unsplash.com/photo-1511208687131-70ee0b2fd01d?auto=format&fit=crop&q=80&w=1200",
    description: " 喝下飲品後一陣暈眩，再次睜眼時自己已經在外了。坐起身看著四周，這裡似乎是一個花園，身旁坐著一個女孩，見我清醒她很高興地說道「太好了，你終於醒啦！你剛剛忽然出現在這裡，好像中毒了，就先幫你解毒了。」。她說她叫太陰，我想感謝她為我解毒，但被拒絕了，推拖不下，便只邀請我與她一同在月光下散步。散步隨口聊著，她問：「你對月亮的想法是什麼呢？我很好奇。」",
    options: [
      { text: "1. 月色很美", type: "A" },
      { text: "2. 比起月亮更喜歡太陽", type: "B" },
      { text: "3. 覺得沒什麼意思", type: "C" }
    ]
  },
  {
    palace: "財帛宮",
    star: "太陰",
    title: "月光",
    image: "https://images.unsplash.com/photo-1516053353457-3f33668b8e0e?auto=format&fit=crop&q=80&w=1200",
    description: "太陰甜甜笑著說道：「謝謝你陪我散步，跟你聊天很開心，這是給你的禮物，月光下淬煉出的珍珠，它可以幫你映出最真實的一切，我也祝你接下來一路順風。」",
    options: [
      { text: "1. 開心戴上", type: "A" },
      { text: "2. 想找個地方賣掉", type: "B" },
      { text: "3. 隨手弄丟", type: "C" }
    ]
  },
  {
    palace: "子女宮",
    star: "貪狼",
    title: "狂歡與幻象",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
    description: "你來到一個燈紅酒綠的地方，人們隨著音樂狂歡縱慾，你想找個人搭話，卻在轉眼之間，所有人都變成跟你一模一樣的臉孔，各種的表情。努力穿越人群終於找到了一個穿著不同的人，向它搭肩，轉頭卻還是自己的臉，「它」用著你的臉嘻笑著，像是找到好玩的事物。「歡迎來到這個無聊地最好玩的地方，終於來了個新人，我們一起玩吧！」",
    options: [
      { text: "1. 加入一起狂歡", type: "A" },
      { text: "2. 淡定路過", type: "B" },
      { text: "3. 先混進去偷情報", type: "C" }
    ]
  },
  {
    palace: "子女宮",
    star: "貪狼",
    title: "千人相",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1200",
    description: "看著自己的臉各式各樣的表情，感覺有趣，卻又有點毛。「它」看我好奇，也算是熱情的介紹「這叫千人相，是很厲害的幻術喔，只有我等貪狼大人才會，如何？你要不留在這陪我，我就教你！反正這裡比外面什麼破花園好玩多了，不是嗎？」",
    options: [
      { text: "1. 學，但也要跑", type: "A" },
      { text: "2. 拒絕它", type: "B" },
      { text: "3. 學不學還好，就留在這，也沒什麼不好", type: "C" }
    ]
  },
  {
    palace: "夫妻宮",
    star: "太陽",
    title: "炙熱陽光",
    image: "https://images.unsplash.com/photo-1528642463366-20ba5d3fef19?auto=format&fit=crop&q=80&w=1200",
    description: "你還沒回答，一到炙熱的陽光便照進這裡，還沒看見人就聽見了聲音，「我聞到太陰的味道了，出來！是太陰嗎？還是其他人？是誰見到了她？還是綁了她不然她不可能來這種地方！」她以飛快的速度講著，不，喊著。你想回答，但太陽光太亮又高溫。",
    options: [
      { text: "1. 頂著這些炙熱去找她", type: "A" },
      { text: "2. 拿貪狼擋在前面", type: "B" },
      { text: "3. 太亮了我先躲一下", type: "C" }
    ]
  },
  {
    palace: "夫妻宮",
    star: "太陽",
    title: "青梅",
    image: "https://images.unsplash.com/photo-1526726538690-5cbf2295674c?auto=format&fit=crop&q=80&w=1200",
    description: "等太陽冷靜下來，她才終於願意聽你說話。原來是因為太陰與她走散了，實在找不到，她只能用這種方式找。聽太陽說，太陰從小體弱，她一直與她在一起，陪著她。她看著我問道：「如果太陰不見了，我也會悲傷的與她同去的，你能理解這種感覺嗎？」...",
    options: [
      { text: "1. 能理解", type: "A" },
      { text: "2. 不懂", type: "B" },
      { text: "3. 看是誰吧", type: "C" }
    ]
  },
  {
    palace: "兄弟宮",
    star: "破軍",
    title: "破除",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a5adc9?auto=format&fit=crop&q=80&w=1200",
    description: "告訴了太陽太陰在哪後，便趕緊離開了那混亂的現場。往前走，聽到砰砰建築物接連倒下的巨響，你小心翼翼地往前，卻被那身穿盔甲破壞的人逮到了。他只是沉默，不哪一語的看著我，接著拿起另一個工具，要我一起砸毀這裡。",
    options: [
      { text: "1. 真的幫忙拆", type: "A" },
      { text: "2. 阻止他", type: "B" },
      { text: "3. 躲在廢墟下偷懶", type: "C" }
    ]
  },
  {
    palace: "兄弟宮",
    star: "破軍",
    title: "萬象",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200",
    description: "過了一會他才停下動作，從他那盔甲下發出沉沉的聲音「我曾是這裡的守衛兵破軍，但是到如今，我的存在只在為了創造未來，拆解過去。能破除過去的萬象，才能均迎未來。汝又以何意理解這兩詞呢？」",
    options: [
      { text: "1. 也贊同他的想法", type: "A" },
      { text: "2. 不能理解", type: "B" },
      { text: "3. 懶得理他的哲學", type: "C" }
    ]
  },
  {
    palace: "身宮",
    star: "七殺",
    title: "宮殿前的決鬥",
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?auto=format&fit=crop&q=80&w=1200",
    description: "破君一路護送你到一座宮殿後告別，只要從這座宮殿出去，似乎就能回到現實，便迫不及待地奔向大門，但卻在要碰觸到門的一瞬間被反彈。從門中幻化出了一個手拿長槍的人，他面露兇色「我乃是七殺大將軍，凡過門者，都得經過我才行。」",
    options: [
      { text: "1. 與他決鬥", type: "A" },
      { text: "2. 反正先求饒應該沒錯", type: "B" },
      { text: "3. 拿出之前巨門落下的鑰匙", type: "C" }
    ]
  },
  {
    palace: "身宮",
    star: "七殺",
    title: "門之後",
    image: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?auto=format&fit=crop&q=80&w=1200",
    description: "得到七殺的允許後，大門終於開了。這時，門旁的雕像忽然動了起來，紛紛向你攻擊，七殺為你擋下了攻擊，卻受了重傷。",
    options: [
      { text: "1. 趁機補一刀", type: "A" },
      { text: "2. 轉頭救他", type: "B" },
      { text: "3. 直接跨過他衝向大門", type: "C" }
    ]
  },
  {
    palace: "夾宮",
    star: "無",
    title: "現實的幻象",
    image: "https://images.unsplash.com/photo-1497334423642-c00bb33f511f?auto=format&fit=crop&q=80&w=1200",
    description: "瞬間光芒閃爍，你看到了現實世界的幻象，一切都很好，但就是好過頭了。可是你只要留下來，這裡也可能是對你來說最好的現實也說不定。",
    options: [
      { text: "1. 要不留下來吧...", type: "A" },
      { text: "2. 大力擊碎幻象", type: "B" },
      { text: "3. 迷惘中", type: "C" }
    ]
  },
  {
    palace: "最後迴廊",
    star: "無",
    title: "最終的三道門",
    image: "https://images.unsplash.com/photo-1510133769068-68884a1273ea?auto=format&fit=crop&q=80&w=1200",
    description: "出現三道門：紫門、紅門、灰門。請選擇一道門吧",
    options: [
      { text: "1. 紫門", type: "A" },
      { text: "2. 紅門", type: "B" },
      { text: "3. 灰門", type: "C" }
    ]
  }
];

export const STORY_ENDINGS: StoryEnding[] = [
  { id: 1, name: "站著不如躺著吧", type: "擺爛/遺憾", description: "意志消磨，身體化為石碑，成為後人的路標。", meaning: "選擇了最安靜的路，也留下了最沈重的印記。" },
  { id: 2, name: "你好像很隨便 ㄟ...", type: "擺爛/遺憾", description: "靈魂因失去自我而變輕，被星際狂風吹散成塵埃。", meaning: "在無盡的隨意中，妳也失去了存在的質量。" },
  { id: 3, name: "天倫之樂，有何不淪", type: "擺爛/享樂", description: "成為星圖裡的專屬食客，永遠不用工作但也無法回家。", meaning: "甜美的陷阱也是家，只要妳不再想念故鄉。" },
  { id: 4, name: "NPC 就是你喔^^", type: "擺爛/依附", description: "喪失主角光環，成為星曜身邊永世的提包隨從。", meaning: "依附強者雖安穩，卻再也聽不見自己的心跳。" },
  { id: 5, name: "做夢也好", type: "慾望/迷失", description: "靈魂被慾望吞噬，活在虛假但華麗的幻象中。", meaning: "真實有時醜陋，但那是妳唯一活過的證明。" },
  { id: 6, name: "辯論美食家", type: "性格偏差", description: "回到現實後變得毒舌多疑，人際關係徹底崩碎。", meaning: "言詞是劍，傷人的同時也切斷了自己的連結。" },
  { id: 7, name: "破碎之靈", type: "性格偏差", description: "回到現實後性格大變，成為無法控制情緒的火藥桶。", meaning: "破壞之後，留下的只有滿地無法修補的碎片。" },
  { id: 8, name: "躲貓貓上癮", type: "性格偏差", description: "雖然平安回歸，但在現實中徹底失去存在感。", meaning: "過度的隱蔽，最終讓妳成為了自己的鬼魂。" },
  { id: 9, name: "決鬥吧！就你和我", type: "權力/戰鬥", description: "留在星圖中成為受人敬畏的戰神，但終生孤獨。", meaning: "最強的戰士，往往擁有最寂寞的脊樑。" },
  { id: 10, name: "難不成我洞悉了宇宙", type: "技術/職人", description: "取代紫微星成為新任統治者，但也承擔了永恆束縛。", meaning: "王冠很重，戴上它的人將失去自由。" },
  { id: 11, name: "混沌祭典", type: "混沌/變異", description: "成為迷宮管理員，維護宇宙命盤的平衡運行。", meaning: "在混亂中尋找秩序，本身就是一種偉大的代價。" },
  { id: 12, name: "平凡的幸福", type: "悟道/放逐", description: "成為星圖的後勤總管，所有主星都要禮讓你三分。", meaning: "看透了繁華，才懂得平凡的可貴。" },
  { id: 13, name: "財富自由（恭喜你發大財！）", type: "覺醒/引導", description: "炸毀現實與虛擬的邊界，成為穿梭兩界的混亂者。", meaning: "當規則不再限制妳，妳就是唯一的真理。" },
  { id: 14, name: "命運之輪", type: "完美/覺醒", description: "看破紅塵，隱居深山不再參與世俗。", meaning: "完美的平衡，是妳對命運最安靜的反擊。" },
  { id: 15, name: "烈焰給予你的", type: "正義/燃燒", description: "明白平凡可貴，回到現實過著知足常樂的生活。", meaning: "經歷過烈火的洗禮，溫潤的靈魂更加堅韌。" }
];
