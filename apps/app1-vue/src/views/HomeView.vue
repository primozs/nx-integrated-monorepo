<script setup lang="ts">
import NxWelcome from '../app/NxWelcome.vue';
import { NcButton } from '@nx-integrated-monorepo/buttons-vue';
import { FccButton } from 'nc-vue-button-vite';
</script>

<template>
  <main>
    <NcButton> hello </NcButton>
    <br />
    <FccButton text="some text">Fcc button</FccButton>

    <NxWelcome title="krneki" />
  </main>
</template>
