<script lang="ts" setup>
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import type { RouterLink } from 'vue-router';

const formStore = useFormStore()
const {address} = storeToRefs(formStore)
</script>

<template>
    <div>
        <h1>step 3</h1>
        <p>address: {{ address }}</p>
    
        <input type="text" name="address" id="address" v-model="address" />
        <RouterLink to="/" >go home</RouterLink>
    </div>
</template>