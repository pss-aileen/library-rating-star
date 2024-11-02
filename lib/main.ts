class Star {
  givenStars: number;
  totalStars: number;
  constructor(givenStars: number, totalStars: number) {
    // totalStars 点中、givenStart 点
    this.givenStars = givenStars;
    this.totalStars = totalStars;
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

    const filledStar = filledStarIcon.repeat(this.givenStars);
    const emptyStar = emptyStarIcon.repeat(this.totalStars - this.givenStars);

    return filledStar + emptyStar;
  }
}

// const rating = new RatingStar(4, 5);
// rating.displayStar();

// 名前はあとで、以下と上を変えること
export class RaitingStar {
  constructor() {
    const ratingStarDoms = document.querySelectorAll('.rs');

    console.debug('Domの数:', ratingStarDoms);

    for (const dom of ratingStarDoms) {
      if (dom.textContent !== null) {
        const [givenStars, totalStars]: number[] = dom.textContent.split('/').map(Number);
        // console.log(givenStars, totalStars);
        if (!givenStars || !totalStars) {
          console.error('数値が入力されていません 3/5 のような形で指定してください:', dom);
        }

        const rating = new Star(givenStars, totalStars);
        dom.textContent = rating.getRatingIcon();
      }
    }
  }
}
