import { LostCitiesExpedition, ExpeditionCard } from "./LostCitiesExpedition";

class LostCitiesScoreBreakdown {
  yellow: Number = 0;
  white: Number = 0;
  blue: Number = 0;
  green: Number = 0;
  red: Number = 0;
  purple: Number = 0;

  constructor() {}
}

class LostCitiesRound {
  private yellowExpedition: LostCitiesExpedition;
  private whiteExpedition: LostCitiesExpedition;
  private blueExpedition: LostCitiesExpedition;
  private greenExpedition: LostCitiesExpedition;
  private redExpedition: LostCitiesExpedition;
  private purpleExpedition: LostCitiesExpedition;

  constructor() {
    this.yellowExpedition = new LostCitiesExpedition();
    this.whiteExpedition = new LostCitiesExpedition();
    this.blueExpedition = new LostCitiesExpedition();
    this.greenExpedition = new LostCitiesExpedition();
    this.redExpedition = new LostCitiesExpedition();
    this.purpleExpedition = new LostCitiesExpedition();
  }

  /**
   * Adds a card to a specific expedition
   * @param expedition The expedition to add a card to
   * @param card The card to add to an expedition
   */
  private addCard(expedition: LostCitiesExpedition, card: ExpeditionCard) {
    expedition.addCardEntry(card);
  }

  private removeCard(expedition: LostCitiesExpedition, card: ExpeditionCard) {
    expedition.removeCardEntry(card);
  }

  /**
   * Adds a card to the yellow expedition
   * @param card The card to add to the expedition
   */
  public addYellowExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.yellowExpedition, card);
  }

  /**
   * Removes a card from the yellow expedition
   * @param card The card to remove from the expedition
   */
  public removeYellowExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.yellowExpedition, card);
  }

  /**
   * Adds a card to the white expedition
   * @param card The card to add to the expedition
   */
  public addWhiteExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.whiteExpedition, card);
  }

  /**
   * Removes a card from the white expedition
   * @param card The card to remove from the expedition
   */
  public removeWhiteExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.whiteExpedition, card);
  }

  /**
   * Adds a card to the blue expedition
   * @param card The card to add to the expedition
   */
  public addBlueExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.blueExpedition, card);
  }

  /**
   * Removes a card from the blue expedition
   * @param card The card to remove from the expedition
   */
  public removeBlueExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.blueExpedition, card);
  }

  /**
   * Adds a card to the green expedition
   * @param card The card to add to the expedition
   */
  public addGreenExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.greenExpedition, card);
  }

  /**
   * Removes a card from the green expedition
   * @param card The card to remove from the expedition
   */
  public removeGreenExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.greenExpedition, card);
  }

  /**
   * Adds a card to the red expedition
   * @param card The card to add to the expedition
   */
  public addRedExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.redExpedition, card);
  }

  /**
   * Removes a card from the red expedition
   * @param card The card to remove from the expedition
   */
  public removeRedExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.redExpedition, card);
  }

  /**
   * Adds a card to the purple expedition
   * @param card The card to add to the expedition
   */
  public addPurpleExpeditionCard(card: ExpeditionCard) {
    this.addCard(this.purpleExpedition, card);
  }

  /**
   * Removes a card from the purple expedition
   * @param card The card to remove from the expedition
   */
  public removePurpleExpeditionCard(card: ExpeditionCard) {
    this.removeCard(this.purpleExpedition, card);
  }

  public getScoreBreakdown(): LostCitiesScoreBreakdown {
    const yellowScore = this.yellowExpedition.getScore();
    const whiteScore = this.whiteExpedition.getScore();
    const blueScore = this.blueExpedition.getScore();
    const greenScore = this.greenExpedition.getScore();
    const redScore = this.redExpedition.getScore();
    const purpleScore = this.purpleExpedition.getScore();

    return {
      yellow: yellowScore,
      white: whiteScore,
      blue: blueScore,
      green: greenScore,
      red: redScore,
      purple: purpleScore
    }
  }

  /**
   * Determines the total score for a given round
   * @returns the total score of the round
   */
  public getScore(breakdown: LostCitiesScoreBreakdown | null = null): Number {
    const scoreBreakdown = breakdown ?? this.getScoreBreakdown();
    const score = Object.values(scoreBreakdown).reduce((acc, x) => acc + x, 0);
    return score;
  }
}

export default LostCitiesRound;
export { LostCitiesScoreBreakdown };