import './style.css';
import Star from './Star';
import { isDecimal, customRoundToFirstDecimalPrace } from './utils';

export class RaitingStar {
  constructor() {
    const ratingStarDoms = document.querySelectorAll('.rs');

    console.debug('Domの数:', ratingStarDoms);

    for (const dom of ratingStarDoms) {
      if (dom.textContent !== null) {
        let [givenStars, totalStars]: number[] = dom.textContent.split('/').map(Number);
        console.debug(givenStars, totalStars);

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
