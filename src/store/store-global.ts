import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoreGlobal = defineStore('storeNote', () => {
  const baseURL = ref('http://127.0.0.1:8000/');

  return { baseURL };
});
