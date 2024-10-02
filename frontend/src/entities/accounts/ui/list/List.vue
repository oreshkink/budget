<template>
  <div class="accounts-list">
    <div
      class="accounts-list__item"
      v-for="account in accounts"
    >
      {{ account.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { accountsModel } from '../..';

const { accounts } = accountsModel.Composables.useAll();
</script>