<template>
  <div>
    <button @click="fetchSeuil">Click Me</button>
    <p v-if="isLoading">Loading...</p>
    <p v-if="error">Error: {{ error }}</p>
    <p v-if="seuilData">Data: {{ seuilData }}</p>
    <p>This is the about page.</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { getSeuil } from '../../composables/seuil/data';

// State for the data, loading, and error
const seuilData = ref(null);
const isLoading = ref(false);
const error = ref(null);

// Method to fetch data
const fetchSeuil = async () => {
  isLoading.value = true;
  console.log("test")
  try {
    const data = await getSeuil(); // Assuming getSeuil returns a promise
    seuilData.value = data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};
</script>