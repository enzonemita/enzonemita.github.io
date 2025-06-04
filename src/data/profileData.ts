import { ProfileData, Quote } from '../types';

export const profileData: ProfileData = {
  name: '三田　円蔵',
  title: 'デザイナー / クリエイター',
  bio: '東京を拠点に活動するデザイナー。ミニマリズムとモノクロームの美学を追求し、シンプルながらも深みのあるデザインを創造します。日常の中に美を見出し、それを形にすることが私の情熱です。',
  imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  socialLinks: [
    {
      type: 'twitter',
      url: 'https://twitter.com',
    },
    {
      type: 'instagram',
      url: 'https://instagram.com',
    },
    {
      type: 'github',
      url: 'https://github.com',
    },
  ],
};

export const favoritesData: Quote[] = [
  {
    id: 1,
    text: '私たちは、旅をしながら自分自身を作っていく。',
    author: '川端康成',
    favorite: true,
  },
  {
    id: 2,
    text: 'シンプルさは究極の洗練である。',
    author: 'レオナルド・ダ・ヴィンチ',
    favorite: true,
  },
  {
    id: 3,
    text: '美は見る人の目の中にある。',
    author: '古代ギリシャの諺',
    favorite: false,
  },
  {
    id: 4,
    text: '人生とは自分を見つける旅ではなく、自分を創る旅である。',
    author: 'ジョージ・バーナード・ショー',
    favorite: true,
  },
  {
    id: 5,
    text: '完璧を目指すことより、完成させることの方が重要だ。',
    author: '村上春樹',
    favorite: false,
  },
  {
    id: 6,
    text: '静寂の中に真実がある。',
    author: '松尾芭蕉',
    favorite: true,
  },
  {
    id: 7,
    text: '道は歩いた分だけ続いていく。',
    author: '宮沢賢治',
    favorite: true,
  },
  {
    id: 8,
    text: '美しいものを美しいと感じる心を持て。',
    author: '寺田寅彦',
    favorite: true,
  },
  {
    id: 9,
    text: '人生は短い。芸術は長い。',
    author: 'ヒポクラテス',
    favorite: true,
  },
  {
    id: 10,
    text: '創造性とは、既存のものを新しい方法で組み合わせる能力である。',
    author: '青木保',
    favorite: true,
  },
];