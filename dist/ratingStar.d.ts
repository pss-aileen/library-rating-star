interface RatingStarOptions {
    filledColor?: string;
    emptyColor?: string;
}
export declare class RatingStar {
    filledColor: string;
    emptyColor: string;
    constructor();
    announce(): void;
    init(options?: RatingStarOptions): void;
    setColor(): void;
}
export {};
