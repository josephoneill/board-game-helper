<template>
  <div>
    <Toolbar />
    <div class="lost-cities-container">
      <div class="lost-cities__expeditions">
        <LostCitiesExpedition :expeditionType="ExpeditionType.YELLOW" :score="expeditionScores.yellow" color="#fbbb23"
          textColor="black" @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="yellowExpeditionComp" />
        <LostCitiesExpedition :expeditionType="ExpeditionType.WHITE" :score="expeditionScores.white" color="#d2dcd9"
          textColor="black" @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="whiteExpeditionComp" />
        <LostCitiesExpedition :expeditionType="ExpeditionType.BLUE" :score="expeditionScores.blue" color="#2b60a0"
          textColor="white" @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="blueExpeditionComp" />
        <LostCitiesExpedition :expeditionType="ExpeditionType.GREEN" :score="expeditionScores.green" color="#37a31b"
          textColor="white" @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="greenExpeditionComp" />
        <LostCitiesExpedition :expeditionType="ExpeditionType.RED" :score="expeditionScores.red" color="#db3e17"
          @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="redExpeditionComp" />
        <LostCitiesExpedition :expeditionType="ExpeditionType.PURPLE" :score="expeditionScores.purple" color="#524286"
          @add-card="onAddCard" @remove-card="onRemoveCard" :round="currentRoundIndex" ref="purpleExpeditionComp" />
      </div>
    </div>

    <div class="lost-cities__round-controls">
      <button :disabled="currentRoundIndex === 0" @click="openPreviousRound">
        Previous Round
      </button>
      <button :disabled="currentRoundIndex === 2" @click="openNextRound">
        Next Round
      </button>
    </div>

    <div class="lost-city__score-container">
      <p>Total Score: {{ score }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LostCitiesGameManager from '@core/LostCities/LostCitiesGameManager';
import { ExpeditionType } from '@core/LostCities/LostCitiesExpedition';
import { LostCitiesScoreBreakdown } from '@core/LostCities/LostCitiesRound';
import type { AddCardEvent, RemoveCardEvent } from '@core/LostCities/LostCitiesEvents';
import LostCitiesExpedition from '@components/LostCities/LostCitiesExpedition';
import Toolbar from '@components/Toolbar';

const score = ref(0);
const expeditionScores = ref<LostCitiesScoreBreakdown>(new LostCitiesScoreBreakdown());
const currentRoundIndex = ref<Number>(0);

// Expeditions
const yellowExpeditionComp = ref(null);
const whiteExpeditionComp = ref(null);
const blueExpeditionComp = ref(null);
const greenExpeditionComp = ref(null);
const redExpeditionComp = ref(null);
const purpleExpeditionComp = ref(null);


const gameManager = new LostCitiesGameManager();

function onAddCard(event: AddCardEvent) {
  gameManager.getCurrentRoundManager().addCard(event);
  getScore();
}

function onRemoveCard(event: RemoveCardEvent) {
  gameManager.getCurrentRoundManager().removeCard(event);
  getScore();
}

function getScore() {
  expeditionScores.value = gameManager.getCurrentRoundManager().getScoreBreakdown();
  score.value = gameManager.getCurrentRoundManager().getScore(expeditionScores.value);
}

function openPreviousRound() {
  currentRoundIndex.value = currentRoundIndex.value - 1;
  gameManager.setCurrentRound(currentRoundIndex.value);
  loadExpeditions();
}

function openNextRound() {
  currentRoundIndex.value = currentRoundIndex.value + 1;
  gameManager.setCurrentRound(currentRoundIndex.value);
  loadExpeditions();
}

function loadExpeditions() {
  const { 
    yellowExpedition,
    whiteExpedition,
    blueExpedition,
    greenExpedition,
    redExpedition,
    purpleExpedition,
  } = gameManager.getCurrentRoundManager().getRound();

  loadExpedition(yellowExpeditionComp.value, yellowExpedition.getCardEntries());
  loadExpedition(whiteExpeditionComp.value, whiteExpedition.getCardEntries());
  loadExpedition(blueExpeditionComp.value, blueExpedition.getCardEntries());
  loadExpedition(greenExpeditionComp.value, greenExpedition.getCardEntries());
  loadExpedition(redExpeditionComp.value, redExpedition.getCardEntries());
  loadExpedition(purpleExpeditionComp.value, purpleExpedition.getCardEntries());

  onExpeditionsLoaded();
}

function loadExpedition(expeditionComponent, expeditionCards: ExpeditionCard[]) {
  expeditionComponent.loadExpeditionCardData(expeditionCards);
}

function onExpeditionsLoaded() {
  getScore();
}
</script>

<style lang="scss">
.lost-cities__expeditions,
.lost-cities__round-controls {
  margin: 0 1rem;
}

.lost-cities__expeditions {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
}

.lost-cities-container {}

@media only screen and (max-width: 768px) {
  .lost-city__score-container {
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-height: 1.5rem;
    background-color: black;
  }

  .lost-cities__round-controls {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
}
</style>