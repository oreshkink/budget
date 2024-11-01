<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import * as api from '../api';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { NOTE_QUERY_KEY } from '../../../../entities/note/model/composables';

const noteTitle = ref<string>();
const form = useTemplateRef('form');
const queryClient = useQueryClient();

const addMutation = useMutation({
  mutationFn: api.create,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY })
  }
});

async function onSubmit(e: SubmitEvent) {
  e.preventDefault();

  if (!noteTitle.value) {
    return;
  }

  try {
    await addMutation.mutateAsync({ title: noteTitle.value });
  } catch (error) {
    return;
  }

  form.value?.reset();
}
</script>

<template>
  <form @submit="onSubmit" ref="form" class="create-form">
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