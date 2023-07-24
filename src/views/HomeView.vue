<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue' 
import { useCounterStore } from '@/stores/counter';
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore()
const {count, doubleCount} = storeToRefs(counterStore) 
const increment = () => {counterStore.increment()}

const formStore = useFormStore()
const {introduceMe} = storeToRefs(formStore)
</script>

<template>
  <main>
    <h1>welcome</h1>
    <h1>{{ introduceMe }}</h1>

    <h1>count is {{ count }}</h1>
    <h1>double count is {{ doubleCount }}</h1>
    
    <button @click="increment">increment</button>
    <TheWelcome />
  </main>
</template>
