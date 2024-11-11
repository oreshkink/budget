<template>
  <div class="tags-list">
    <div v-for="tag in tags" :key="tag.id" class="tags-list__item">
      {{ tag.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { tagsModel } from "../..";

const { tags } = tagsModel.Composables.useAll();
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
