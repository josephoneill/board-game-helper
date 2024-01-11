<template>
  <div class="lost-city-expedition">
    <div class="card__container">
      <button
        v-for="i in 3"
        :key="`wager-card-button-${i}`"
        :class="getCardButtonClasses(i, true, i)"
        :style="getCardButtonStyle(i, true, i)"
        @click="onCardButtonClicked(i, true, i)"
      >
        <span class="card-button__text card-button__text--top">W</span>
        <span class="card-button__text card-button__text--bottom">W</span>
      </button>

      <button
        v-for="i in 9"
        :key="`face-card-button-${i}`"
        :class="getCardButtonClasses(i)"
        :style="getCardButtonStyle(i)"
        @click="onCardButtonClicked(i)"
      >
        <span class="card-button__text card-button__text--top face-card-button__text">{{ i + 1 }}</span>
        <span class="card-button__text card-button__text--bottom face-card-button__text">{{ i + 1 }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ExpeditionCard, ExpeditionType } from '~/core/LostCities/LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from '~/core/LostCities/LostCitiesEvents';

const emit = defineEmits<{
  (e: 'add-card', value: AddCardEvent): void
  (e: 'remove-card', value: RemoveCardEvent): void
}>()

const props = defineProps({
  expeditionType: {
    type: Number,
    default: ExpeditionType.YELLOW,
    required: true,
  },
  color: {
    type: String,
    default: 'initial',
    required: true,
  },
  textColor: {
    type: String,
    default: 'white',
    required: false,
  },
});

const numberToWords = [ 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

class CardOptions {
  one: boolean = false;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  seven: boolean = false;
  eight: boolean = false;
  nine: boolean = false;
  ten: boolean = false;
  wager: boolean[] = [false, false, false];
  [key: string]: any;

  constructor() {}
}

const score = ref(0);

const expeditionCards = ref<CardOptions>(new CardOptions());

function numberToWord(num: number) {
  return numberToWords[num - 1];
}

function getCardButtonStyle(cardNum: number, wager: boolean = false, wagerIndex: number = 0) {
  const cardKey = numberToWord(cardNum);
  const cardColor = ExpeditionType[props.expeditionType].toLowerCase();
  const cardSelected = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[wagerIndex];

  return {
    '--card-background': `url(/img/${cardColor}_card.png) no-repeat`,
    '--card-text-color': props.textColor,
    '--card-hover-color': props.color,
  };
}

function getCardButtonClasses(cardNum: number, wager: boolean = false, wagerIndex: number = 0) {
  const cardKey = numberToWord(cardNum);
  const cardColor = ExpeditionType[props.expeditionType].toLowerCase();
  const cardSelected = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[wagerIndex];

  return {
    'card-button': true,
    'wager-card-button': wager,
    'face-card-button': !wager,
    'card-button--selected': cardSelected
  };
}

function onCardButtonClicked(cardNum: number, wager = false, index: number = 0) {
  const cardKey = numberToWord(cardNum);
  const cardValRef = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[index];
  const cardIsInExpedition = cardValRef;

  if (!wager) {
    expeditionCards.value[cardKey] = !cardValRef;
  } else {
    expeditionCards.value.wager[index] = !cardValRef;
  }

  const card = !wager ? ExpeditionCard[cardKey.toUpperCase()] : ExpeditionCard.WAGER;
  
  if (!cardIsInExpedition) {
    emit('add-card', {
      card,
      expeditionType: props.expeditionType,
    });
  } else {
    emit('remove-card', {
      card,
      expeditionType: props.expeditionType,
    });
  }
}
</script>

<style src="./LostCityExpedition.scss" lang="scss" />