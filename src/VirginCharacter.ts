// any changes here must be copied to the back and front copy of this file
// BAD THINGS will happened if you forget.

export enum Rarity {
  INVALID,
  ONE_STAR,
  TWO_STAR,
  THREE_STAR,
  FOUR_STAR,
  FIVE_STAR
}

export interface VirginCharacter {
  _id: String,
  rarity: Rarity,
  power: number,
  name: String,
  gifURL: String
}

