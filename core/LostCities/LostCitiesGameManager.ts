import LostCitiesRoundManager from './LostCitiesRoundManager';
import { ExpeditionCard, ExpeditionType } from './LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from './LostCitiesEvents';
import LostCitiesRound, { LostCitiesScoreBreakdown } from './LostCitiesRound';

// Intermediate between UI and the logic
class LostCitiesGameManager {
  private lostCitiesRounds: LostCitiesRoundManager[];
  private currentRoundIndex: number;
  private currentRound: LostCitiesRoundManager;

  constructor() {
    this.lostCitiesRounds = [
      new LostCitiesRoundManager(),
      new LostCitiesRoundManager(),
      new LostCitiesRoundManager(),
    ];
    this.currentRound = this.lostCitiesRounds[0];
    this.currentRoundIndex = 0;
  }

  /**
   * Sets the current, active round
   * @param index the index of the current round to use
   */
  public setCurrentRound(index: number) {
    if (index >= this.lostCitiesRounds.length) {
      throw new RangeError('Round index is too large');
    }
    this.currentRound = this.lostCitiesRounds[index];
    this.currentRoundIndex = index;
  }

  /**
   * Adds and starts a new round
   */
  public startNewRound() {
    this.lostCitiesRounds.push(new LostCitiesRoundManager());
    this.setCurrentRound(this.lostCitiesRounds.length - 1);
  }

  /**
   * Returns the current round
   */
  public getCurrentRoundManager(): LostCitiesRoundManager {
    return this.currentRound;
  }
}

export default LostCitiesGameManager;