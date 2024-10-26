<script lang="ts" setup>
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import * as api from '../api';
import { NOTE_QUERY_KEY } from '../../../../entities/note/model/composables';

const props = defineProps<{
  id: number;
}>();

const queryClient = useQueryClient();

const removeMutation = useMutation({
  mutationFn: api.remove,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY })
  }
})

async function onClick() {
  try {
    await removeMutation.mutateAsync(props.id);
  } catch (error) {
    return;
  }
}
</script>

<template>
  <button type="button" @click="onClick">Удалить</button>
</template>