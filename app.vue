<template>
  <div>
    <Toolbar />
    <div class="lost-cities-container">
      <LostCityExpedition
        :expeditionType="ExpeditionType.YELLOW"
        color="#fbbb23"
        textColor="black"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <LostCityExpedition
        :expeditionType="ExpeditionType.WHITE"
        color="#d2dcd9"
        textColor="black"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <LostCityExpedition
        :expeditionType="ExpeditionType.BLUE"
        color="#2b60a0"
        textColor="white"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <LostCityExpedition
        :expeditionType="ExpeditionType.GREEN"
        color="#37a31b"
        textColor="white"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <LostCityExpedition
        :expeditionType="ExpeditionType.RED"
        color="#db3e17"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <LostCityExpedition
        :expeditionType="ExpeditionType.PURPLE"
        color="#524286"
        @add-card="onAddCard"
        @remove-card="onRemoveCard"
      />
      <p>Score: {{ score }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import LostCitiesGameManager from '@core/LostCities/LostCitiesGameManager';
import { ExpeditionType } from '@core/LostCities/LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from '@core/LostCities/LostCitiesEvents';
import LostCityExpedition from '@components/LostCities/LostCityExpedition';
import Toolbar from '@components/Toolbar';

const score = ref(0);

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
  score.value = gameManager.getScore();
}
</script>

<style lang="scss">
html {
  background: #1d1d1d;
  color: white;
  font-family: Montserrat, 'Courier New', Courier, monospace;
}

body {
  margin: 0;
}
.lost-cities-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;
}
</style>