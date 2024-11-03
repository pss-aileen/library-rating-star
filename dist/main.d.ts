import './style.css';
interface RatingStarOptions {
    filledColor?: string;
    emptyColor?: string;
}
export declare class RaitingStar {
    filledColor: string;
    emptyColor: string;
    constructor(options?: RatingStarOptions);
    setColor(): void;
    init(): void;
}
export {};
