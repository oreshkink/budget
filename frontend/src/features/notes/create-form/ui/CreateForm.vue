<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";

import TagsList from "../../../../entities/tag/ui/list/TagsList.vue";
import { useCreateMutation } from "../model";

const noteTitle = ref<string>();
const tagsIds = ref<Set<number>>(new Set());
const form = useTemplateRef("form");
const createMutation = useCreateMutation();

async function onSubmit(e: SubmitEvent) {
  e.preventDefault();

  if (!noteTitle.value) {
    return;
  }

  await createMutation.mutateAsync({
    title: noteTitle.value,
    tagsIds: [...tagsIds.value],
  });

  form.value?.reset();
}
</script>

<template>
  <form ref="form" class="create-form" @submit="onSubmit">
    <textarea v-model="noteTitle"></textarea>

    <TagsList :model-value="tagsIds" />

    <button type="submit">Сохранить</button>
  </form>
</template>

<style scoped>
.create-form {
  display: flex;
  flex-direction: column;
  width: 400px;

  textarea {
    height: 50px;
    margin-bottom: 12px;
  }
}
</style>
