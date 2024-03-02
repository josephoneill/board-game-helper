import { ExpeditionCard, ExpeditionType } from './LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from './LostCitiesEvents';
import LostCitiesRound, { LostCitiesScoreBreakdown } from './LostCitiesRound';

// Intermediate between UI and the logic
class LostCitiesRoundManager {
  private lostCitiesRound: LostCitiesRound;

  constructor() {
    this.lostCitiesRound = new LostCitiesRound();
  }

  /**
   * Adds a card to the appropriate expedition
   * @param event the add card event
   */
  public addCard(event: AddCardEvent) {
    const { card, expeditionType } = event;
    switch (expeditionType) {
      case ExpeditionType.YELLOW: {
        this.lostCitiesRound.addYellowExpeditionCard(card);
        break;
      }
      case ExpeditionType.WHITE: {
        this.lostCitiesRound.addWhiteExpeditionCard(card);
        break;
      }
      case ExpeditionType.BLUE: {
        this.lostCitiesRound.addBlueExpeditionCard(card);
        break;
      }
      case ExpeditionType.GREEN: {
        this.lostCitiesRound.addGreenExpeditionCard(card);
        break;
      }
      case ExpeditionType.RED: {
        this.lostCitiesRound.addRedExpeditionCard(card);
        break;
      }
      case ExpeditionType.PURPLE: {
        this.lostCitiesRound.addPurpleExpeditionCard(card);
        break;
      }
    }
  }

  /**
   * Removes a card from the appropriate expedition
   * @param event the add card event
   */
  public removeCard(event: RemoveCardEvent) {
    const { card, expeditionType } = event;
    switch (expeditionType) {
      case ExpeditionType.YELLOW: {
        this.lostCitiesRound.removeYellowExpeditionCard(card);
        break;
      }
      case ExpeditionType.WHITE: {
        this.lostCitiesRound.removeWhiteExpeditionCard(card);
        break;
      }
      case ExpeditionType.BLUE: {
        this.lostCitiesRound.removeBlueExpeditionCard(card);
        break;
      }
      case ExpeditionType.GREEN: {
        this.lostCitiesRound.removeGreenExpeditionCard(card);
        break;
      }
      case ExpeditionType.RED: {
        this.lostCitiesRound.removeRedExpeditionCard(card);
        break;
      }
      case ExpeditionType.PURPLE: {
        this.lostCitiesRound.removePurpleExpeditionCard(card);
        break;
      }
    }
  }

  public getScoreBreakdown() {
    return this.lostCitiesRound.getScoreBreakdown();
  }

  public getScore(breakdown: LostCitiesScoreBreakdown) {
    const score = this.lostCitiesRound.getScore(breakdown);

    return score;
  }

  public getRound(): LostCitiesRound {
    return this.lostCitiesRound;
  }
}

export default LostCitiesRoundManager;