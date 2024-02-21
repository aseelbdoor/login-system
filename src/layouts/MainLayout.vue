<template>
  <q-layout>
    <div class="q-pa-md">
      <q-toolbar class="bg-deep-purple-6 text-white shadow-2 rounded-borders">
        <q-btn flat label="Aseel App" />
        <q-space />
        <q-tabs v-model="tab" shrink stretch class="q-ml-xl">
          <q-tab name="home" label="home" />
          <q-tab active name="login" label="login" />
        </q-tabs>
      </q-toolbar>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref('');

</script>
