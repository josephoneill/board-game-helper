<template>
  <div>
    <Toolbar />
    <div class="lost-cities-container">
      <div class="lost-cities__expeditions">
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.YELLOW"
          :score="expeditionScores.yellow"
          color="#fbbb23"
          textColor="black"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.WHITE"
          :score="expeditionScores.white"
          color="#d2dcd9"
          textColor="black"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.BLUE"
          :score="expeditionScores.blue"
          color="#2b60a0"
          textColor="white"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.GREEN"
          :score="expeditionScores.green"
          color="#37a31b"
          textColor="white"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.RED"
          :score="expeditionScores.red"
          color="#db3e17"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
        <LostCitiesExpedition
          :expeditionType="ExpeditionType.PURPLE"
          :score="expeditionScores.purple"
          color="#524286"
          @add-card="onAddCard"
          @remove-card="onRemoveCard"
        />
      </div>
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

const gameManager = new LostCitiesGameManager();

function onAddCard(event: AddCardEvent) {
  gameManager.addCard(event);
  getScore();
}

function onRemoveCard(event: RemoveCardEvent) {
  gameManager.removeCard(event);
  getScore();
}

function getScore() {
  expeditionScores.value = gameManager.getScoreBreakdown();
  score.value = gameManager.getScore(expeditionScores.value);
}
</script>

<style lang="scss">
.lost-cities__expeditions {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;
  padding-bottom: 1rem;
}

.lost-cities-container {
}

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
}
</style>