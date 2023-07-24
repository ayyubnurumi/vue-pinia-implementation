<script lang="ts" setup>
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import type { RouterLink } from 'vue-router';

const formStore = useFormStore()
const {age} = storeToRefs(formStore)
</script>

<template>
    <div>
        <h1>step 2</h1>
        <p>age: {{ age }}</p>
    
        <input type="text" name="age" id="age" v-model="age" />
        <RouterLink to="/step3" >next</RouterLink>
    </div>
</template>