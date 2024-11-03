import Star from './star';
import { isDecimal, customRoundToFirstDecimalPrace } from './utils';

interface RatingStarOptions {
  filledColor?: string; // 任意のプロパティとして指定（? はオプションを示す）
  emptyColor?: string;
  // elementsName?: string;
}

export class RatingStar {
  /*
    HTML の rs の class属性を持つ要素を取得
    テキストを解析し、それに応じた結果を返す
  */
  filledColor: string;
  emptyColor: string;
  // elementsName: string;
  constructor() {
    this.filledColor = 'gold';
    this.emptyColor = '#eee';
    // this.elementsName = '.rs';

    this.announce();
  }

  announce() {
    console.log('Ready for Rating Star.');
  }

  init(options: RatingStarOptions = {}) {
    this.filledColor = options.filledColor || 'gold';
    this.emptyColor = options.emptyColor || '#eee';
    // this.elementsName = options.elementsName || '.rs';

    const ratingStarDoms = document.querySelectorAll('.rs');

    // console.debug('Domの数:', ratingStarDoms);

    for (const dom of ratingStarDoms) {
      if (dom.textContent !== null) {
        let [givenStars, totalStars]: number[] = dom.textContent.split('/').map(Number);
        // console.debug(givenStars, totalStars);

        if ((!givenStars && givenStars !== 0) || (!totalStars && totalStars !== 0)) {
          console.error('数値が入力されていません 3/5 のような形で指定してください:', dom);
          return;
        }

        if (totalStars === 0) {
          console.error('合計の数は1以上にしてください。');
          return;
        }

        if (givenStars > totalStars) {
          console.error('givenStarsはtotalStarsより大きい値を指定しないでください。');
          return;
        }

        if (isDecimal(totalStars)) {
          console.error('合計数は整数で指定してください。', dom);
          return;
        }

        if (isDecimal(givenStars)) {
          givenStars = customRoundToFirstDecimalPrace(givenStars);
        }

        const rating = new Star(givenStars, totalStars);
        rating.appendSpan(dom);
      }
    }

    this.setColor();
  }

  setColor() {
    document.documentElement.style.setProperty('--rs-color', this.filledColor);
    document.documentElement.style.setProperty('--rs-empty-color', this.emptyColor);
  }
}
