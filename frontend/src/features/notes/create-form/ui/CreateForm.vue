<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";

import { useCreateMutation } from "../model";

const noteTitle = ref<string>();
const form = useTemplateRef("form");
const createMutation = useCreateMutation();

async function onSubmit(e: SubmitEvent) {
  e.preventDefault();

  if (!noteTitle.value) {
    return;
  }

  await createMutation.mutateAsync({ title: noteTitle.value });

  form.value?.reset();
}
</script>

<template>
  <form ref="form" class="create-form" @submit="onSubmit">
    <textarea v-model="noteTitle"></textarea>

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
