<template>
  <div class="tags-list">
    <div
      v-for="tag in tags"
      :key="tag.id"
      class="tags-list__item"
      :class="{
        'tags-list__item--selected': selectedTagsIds.has(tag.id),
      }"
      @click="toggleSelection(tag.id)"
    >
      {{ tag.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { tagsModel } from "../..";

const selectedTagsIds = defineModel<Set<number>>({
  default() {
    return new Set();
  },
});
const { tags } = tagsModel.Composables.useAll();

function toggleSelection(id: number) {
  if (selectedTagsIds.value.has(id)) {
    selectedTagsIds.value.delete(id);
  } else {
    selectedTagsIds.value.add(id);
  }
}
</script>

<style scoped>
.tags-list {
  font-size: 16px;
  line-height: 20px;
  display: flex;
  gap: 10px;
}

.tags-list__item {
  margin: 12px 0;
}

.tags-list__item--selected {
  margin: 12px 0;
  border-bottom: 1px solid black;
}
</style>
