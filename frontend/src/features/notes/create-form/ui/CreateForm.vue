<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import * as api from '../api';

const noteTitle = ref<string>();
const form = useTemplateRef('form');

function onSubmit(e: SubmitEvent) {
  e.preventDefault();

  if (!noteTitle.value) {
    return;
  }

  api.create({ title: noteTitle.value });

  form.value?.reset();
}
</script>

<template>
  <form @submit="onSubmit" ref="form">
    <label for="note-title">
      Заметка
      <textarea name="note" id="note-title" v-model="noteTitle"></textarea>
    </label>

    <button type="submit">Сохранить</button>
  </form>
</template>