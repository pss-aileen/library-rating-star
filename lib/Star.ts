import { isDecimal } from './utils';

export default class Star {
  givenStars: number;
  totalStars: number;
  starDoms: HTMLElement[];
  constructor(givenStars: number, totalStars: number) {
    // totalStars 点中、givenStart 点
    this.givenStars = givenStars;
    this.totalStars = totalStars;
    this.starDoms = [];
    this.wrapAllStars();
  }

  displayStar(): void {
    const filledStarIcon = '★';
    const emptyStarIcon = '☆';

    const filledStar = filledStarIcon.repeat(this.givenStars);
    const emptyStar = emptyStarIcon.repeat(this.totalStars - this.givenStars);

    console.log(filledStar + emptyStar);
  }

  getRatingIcon(): string {
    const filledStarIcon = '★';
    const emptyStarIcon = '☆';

    const filledStar = filledStarIcon.repeat(Math.ceil(this.givenStars));
    const emptyStar = emptyStarIcon.repeat(this.totalStars - Math.ceil(this.givenStars));

    return filledStar + emptyStar;
  }

  wrapAllStars() {
    const stars = this.getRatingIcon().split('');

    for (let i = 0; i < stars.length; i++) {
      const wrappedStar = this.wrapWithSpan(stars[i], i);
      this.starDoms.push(wrappedStar);
    }
  }

  wrapWithSpan(value: string, index: number) {
    const span = document.createElement('span');
    span.textContent = value;
    if (isDecimal(this.givenStars)) {
      // ここで小数点以下が必要になる
      // 0.1の1の部分が範囲されるようにしなくてはいけない
      if (Math.floor(this.givenStars) === index) {
        span.classList.add('rs-control');
        const number = ((this.givenStars % 1) * 10).toFixed(0);
        span.classList.add(`rs-${number}`);
      }
      if (Math.floor(this.givenStars) < index) {
        span.classList.add('rs-empty');
      }
    }

    if (this.givenStars <= index) {
      span.classList.add('rs-empty');
    }

    return span;
  }

  appendSpan(parentDom: Element) {
    parentDom.textContent = '';
    this.starDoms.map((dom) => {
      parentDom.appendChild(dom);
    });
  }
}
