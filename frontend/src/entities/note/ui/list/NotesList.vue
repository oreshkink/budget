<template>
  <div class="notes-list">
    <div
      class="notes-list__item"
      v-for="note in notes"
    >
      {{ note.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { notesModel } from '../..';

const { notes } = notesModel.Composables.useAll();
</script>