export interface CardType {
    id: string,
    img: string,
    number: string,
    suit: string,
    value: number
}

export interface Scores {
    userScore: number;
    dealerScore: number;
}