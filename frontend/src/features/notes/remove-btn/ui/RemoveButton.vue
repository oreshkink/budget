<script lang="ts" setup>
import { useRemoveMutation } from "../model";

const props = defineProps<{
  id: number;
}>();

const removeMutation = useRemoveMutation();
</script>

<template>
  <button type="button" @click="() => removeMutation.mutateAsync(props.id)" />
</template>

<style scoped>
button {
  margin: 0;
  padding: 0;
  border: none;
  width: 24px;
  height: 24px;
  background-image: url("./delete.svg");
  background-repeat: no-repeat;
  background-color: initial;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
}
</style>
