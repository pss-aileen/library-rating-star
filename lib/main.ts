class RatingStar {
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
}

const rating = new RatingStar(4, 5);
rating.displayStar();
