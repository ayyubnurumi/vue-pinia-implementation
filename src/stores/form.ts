import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
    state: () => ({
        name: '', age: 0, address: '' 
    }),
    getters: {
        introduceMe(): string{
            return `hello my name is ${this.name}, im ${this.age} years old, i live in ${this.address}`
        }
    }
})