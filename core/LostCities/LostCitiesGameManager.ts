import { ExpeditionCard, ExpeditionType } from './LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from './LostCitiesEvents';
import LostCityRound from './LostCitiesRound';

class LostCitiesGameManager {
  private lostCityRound: LostCityRound;

  constructor() {
    this.lostCityRound = new LostCityRound();
  }

  /**
   * Adds a card to the appropriate expedition
   * @param event the add card event
   */
  public addCard(event: AddCardEvent) {
    const { card, expeditionType } = event;
    switch (expeditionType) {
      case ExpeditionType.YELLOW: {
        this.lostCityRound.addYellowExpeditionCard(card);
        break;
      }
      case ExpeditionType.WHITE: {
        this.lostCityRound.addWhiteExpeditionCard(card);
        break;
      }
      case ExpeditionType.BLUE: {
        this.lostCityRound.addBlueExpeditionCard(card);
        break;
      }
      case ExpeditionType.GREEN: {
        this.lostCityRound.addGreenExpeditionCard(card);
        break;
      }
      case ExpeditionType.RED: {
        this.lostCityRound.addRedExpeditionCard(card);
        break;
      }
      case ExpeditionType.PURPLE: {
        this.lostCityRound.addPurpleExpeditionCard(card);
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
          this.lostCityRound.removeYellowExpeditionCard(card);
          break;
        }
        case ExpeditionType.WHITE: {
          this.lostCityRound.removeWhiteExpeditionCard(card);
          break;
        }
        case ExpeditionType.BLUE: {
          this.lostCityRound.removeBlueExpeditionCard(card);
          break;
        }
        case ExpeditionType.GREEN: {
          this.lostCityRound.removeGreenExpeditionCard(card);
          break;
        }
        case ExpeditionType.RED: {
          this.lostCityRound.removeRedExpeditionCard(card);
          break;
        }
        case ExpeditionType.PURPLE: {
          this.lostCityRound.removePurpleExpeditionCard(card);
          break;
        }
      }
    }

  public getScore() {
    const score = this.lostCityRound.getScore();

    return score;
  }
}

export default LostCitiesGameManager;