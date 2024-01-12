<template>
  <div class="toolbar">
    <span class="toolbar-title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Lost Cities Calculator');
</script>

<style src="./Toolbar.scss" lang="scss" />