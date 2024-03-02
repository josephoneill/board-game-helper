<template>
  <div class="lost-city-expedition">
    <div class="card__container">
      <button
        v-for="i in 3"
        :key="`wager-card-button-${i}`"
        :class="cardButtonClasses.get(`wager-${i}`)"
        :style="getCardButtonStyle(i - 1, true)"
        @click="onCardButtonClicked(i - 1, true)"
      >
        <span class="card-button__text card-button__text--top">W</span>
        <span class="card-button__text card-button__text--bottom">W</span>
      </button>

      <button
        v-for="i in 9"
        :key="`face-card-button-${i}`"
        :class="cardButtonClasses.get(i + 1)"
        :style="getCardButtonStyle(i + 1)"
        @click="onCardButtonClicked(i + 1)"
      >
        <span class="card-button__text card-button__text--top face-card-button__text">{{ i + 1 }}</span>
        <span class="card-button__text card-button__text--bottom face-card-button__text">{{ i + 1 }}</span>
      </button>
    </div>

    <hr />

    Score: {{ score }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { ExpeditionCard, ExpeditionType } from '~/core/LostCities/LostCitiesExpedition';
import type { AddCardEvent, RemoveCardEvent } from '~/core/LostCities/LostCitiesEvents';

const emit = defineEmits<{
  (e: 'add-card', value: AddCardEvent): void
  (e: 'remove-card', value: RemoveCardEvent): void
}>();

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
};

const props = defineProps({
  expeditionType: {
    type: Number,
    default: ExpeditionType.YELLOW,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
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

const expeditionCards = ref<CardOptions>(new CardOptions());

function loadExpeditionCardData(cardEntries: ExpeditionCard[]) {
  const cardOptions: CardOptions = new CardOptions();
  cardEntries.forEach((cardEntry) => {
    if (cardEntry === ExpeditionCard.WAGER) {
      cardOptions.wager.unshift(true);
      cardOptions.wager.pop();
    } else {
      cardOptions[ExpeditionCard[cardEntry].toLowerCase()] = true;
    }
  });

  expeditionCards.value = cardOptions;
}

function numberToWord(num: number) {
  // -2, one for indexing starting a zero, one for cards starting at 2
  return numberToWords[num - 2];
}

function getCardButtonStyle(cardNum: number, wager: boolean = false, wagerIndex: number = 0) {
  const cardKey = numberToWord(cardNum);
  const cardColor = ExpeditionType[props.expeditionType].toLowerCase();
  const cardSelected = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[wagerIndex];

  return {
    '--card-background': `url(/board-game-helper/img/${cardColor}_card.png) no-repeat`,
    '--card-text-color': props.textColor,
    '--card-hover-color': props.color,
  };
}

function getCardButtonClasses(cardNum: number, wager: boolean = false) {
  const cardKey = numberToWord(cardNum);
  const cardColor = ExpeditionType[props.expeditionType].toLowerCase();
  const cardSelected = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[cardNum];

  return {
    'card-button': true,
    'wager-card-button': wager,
    'face-card-button': !wager,
    'card-button--selected': cardSelected
  };
}

const cardButtonClasses = computed(() => {
  const classes = new Map();
  for (let i = 2; i <= 10; i++) {
    const cardKey = numberToWord(i);
    const cardSelected = expeditionCards.value[cardKey];

    classes.set(i, {
      'card-button': true,
      'face-card-button': true,
      'card-button--selected': cardSelected,
    });
  }

  for (let i = 1; i <= 3; i++) {
    const cardSelected = expeditionCards.value.wager[i - 1];

    classes.set(`wager-${i}`, {
      'card-button': true,
      'wager-card-button': true,
      'card-button--selected': cardSelected
    });
  }

  return classes;
});

function onCardButtonClicked(cardNum: number, wager = false) {
  const cardKey = numberToWord(cardNum);
  const cardValRef = !wager ? expeditionCards.value[cardKey] : expeditionCards.value.wager[cardNum];
  const cardIsInExpedition = cardValRef;

  if (!wager) {
    expeditionCards.value[cardKey] = !cardValRef;
  } else {
    expeditionCards.value.wager[cardNum] = !cardValRef;
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

defineExpose({
  loadExpeditionCardData
});
</script>

<style src="./LostCitiesExpedition.scss" lang="scss" />