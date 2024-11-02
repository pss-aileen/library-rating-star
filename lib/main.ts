import './style.css';
import Star from './Star';
import { isDecimal, customRoundToFirstDecimalPrace } from './utils';

// type RaitingStarOptions {

// }

interface RatingStarOptions {
  filledColor?: string; // 任意のプロパティとして指定（? はオプションを示す）
  emptyColor?: string;
}

export class RaitingStar {
  /*
    HTML の rs の class属性を持つ要素を取得
    テキストを解析し、それに応じた結果を返す
  */
  filledColor: string;
  emptyColor: string;
  constructor(options: RatingStarOptions = {}) {
    this.filledColor = options.filledColor || 'gold';
    this.emptyColor = options.emptyColor || '#eee';

    this.init();
    this.setColor();
  }

  setColor() {
    document.documentElement.style.setProperty('--rs-color', this.filledColor);
    document.documentElement.style.setProperty('--rs-empty-color', this.emptyColor);
  }

  init() {
    const ratingStarDoms = document.querySelectorAll('.rs');

    // console.debug('Domの数:', ratingStarDoms);

    for (const dom of ratingStarDoms) {
      if (dom.textContent !== null) {
        let [givenStars, totalStars]: number[] = dom.textContent.split('/').map(Number);
        // console.debug(givenStars, totalStars);

        if (!givenStars || !totalStars) {
          console.error('数値が入力されていません 3/5 のような形で指定してください:', dom);
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
  }
}
