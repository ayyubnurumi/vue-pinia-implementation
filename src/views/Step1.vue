<script lang="ts" setup>
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import type { RouterLink } from 'vue-router';

const formStore = useFormStore()
const {name} = storeToRefs(formStore)
</script>

<template>
    <div>
        <h1>step 1</h1>
        <p>name: {{ name }}</p>

        <input type="text" name="name" id="name" v-model="name" />
        <RouterLink to="/step2" >next</RouterLink>
    </div>
</template>