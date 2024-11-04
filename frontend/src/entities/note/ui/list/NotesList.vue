<template>
  <div class="notes-list">
    <div
      class="notes-list__item"
      v-for="note in notes"
    >
      {{ note.title }}

      {{ note.createdAt }}

      <RemoveButton :id="note.id"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { notesModel } from '../..';
import RemoveButton from '../../../../features/notes/remove-btn/ui/RemoveButton.vue';

const { notes } = notesModel.Composables.useAll();
</script>