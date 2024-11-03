export default class Star {
    givenStars: number;
    totalStars: number;
    starDoms: HTMLElement[];
    filledStarIcon: string;
    emptyStarIcon: string;
    constructor(givenStars: number, totalStars: number);
    displayStar(): void;
    getRatingIcon(): string;
    wrapAllStars(): void;
    wrapWithSpan(value: string, index: number): HTMLSpanElement;
    appendSpan(parentDom: Element): void;
}
