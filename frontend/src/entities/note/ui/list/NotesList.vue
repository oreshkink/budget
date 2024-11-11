<template>
  <div class="notes-list">
    <article v-for="note in notes" :key="note.id" class="notes-list__item">
      {{ note.title }}

      {{ note.createdAt }}

      <RemoveButton :id="note.id" />
    </article>
  </div>
</template>

<script setup lang="ts">
import RemoveButton from "../../../../features/notes/remove-btn/ui/RemoveButton.vue";
import { notesModel } from "../..";

const { notes } = notesModel.Composables.useAll();
</script>

<style scoped>
.notes-list {
  font-size: 16px;
  line-height: 20px;
}

.notes-list__item {
  margin: 12px 0;
}
</style>
