enum ExpeditionCard {
  TWO = 2,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  WAGER
}

enum ExpeditionType {
  YELLOW,
  WHITE,
  BLUE,
  GREEN,
  RED,
  PURPLE
};

const largeExpeditionBonus = 20;
const expeditionCost = -20;

class LostCityExpedition {
  private cardEntries: ExpeditionCard[];

  constructor(cardEntries = []) {
    this.cardEntries = cardEntries;
  }

  public addCardEntry(card: ExpeditionCard) {
    if (this.cardEntries.includes(card) && card !== ExpeditionCard.WAGER) {
      throw new Error(`Cannot add duplicate card (${card}) to expedition!`);
    }

    if (card === ExpeditionCard.WAGER && this.getWagerCards().length >= 3) {
      throw new Error('Cannot add more than 3 wager cards!');
    }

    this.cardEntries.push(card);
  }

  public removeCardEntry(card: ExpeditionCard) {
    if (!this.cardEntries.includes(card)) {
      throw new Error(`Cannot remove card. Card ${card} does not exist!`);
    }

    this.cardEntries.splice(this.cardEntries.indexOf(card), 1);
  }
  
  /**
   * Finds all the wager cards that exist in the expedition
   * @returns an array of Wager cards
   */
  private getWagerCards(): ExpeditionCard[] {
    return this.cardEntries.filter((x: ExpeditionCard) => x === ExpeditionCard.WAGER);
  }

  /**
   * Totals up the score for the expedition
   * @returns the score for the expedition
   */
  public getScore(): number {
    // If there are no cards in this pile, the expedition has not been started
    if (this.cardEntries.length === 0) {
      return 0;
    }

    // Expeditions have a cost of 20 points
    let score = 0;
  
    // Filter out the wager cards
    const cardEntryFaceCards = this.cardEntries.filter((x: ExpeditionCard) => x !== ExpeditionCard.WAGER);
    const wagerCards = this.getWagerCards();

    // Sum up the value of the cards
    let cardScore = expeditionCost;
    cardEntryFaceCards.forEach((cardEntry: ExpeditionCard) => {
      cardScore += cardEntry;
    });

    /**
     * Multiply card score by the wager multiplier
     * Wage Multiplier: num of wager cards + 1
     */
    cardScore *= wagerCards.length + 1;

    // Add the card score to the overall score
    score += cardScore;

    // Add the additional 20 points for expeditions with length >= 8
    if (this.cardEntries.length >= 8) {
      score += largeExpeditionBonus;
    }

    return score;
  }
}

export default LostCityExpedition;
export { 
  LostCityExpedition,
  ExpeditionCard,
  ExpeditionType
};