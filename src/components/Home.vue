<template>
    <div>
        <h1>Hello this is home component</h1>
        <h1>{{data}}</h1>
        <!-- <button v-on:click="first(`this is argument`)">Click me</button> -->
        <button v-on:mouseover="first(`this is argument`)">Click me</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Home",
    props:{
        data:String
    },
    methods:{
        first(arg){
            alert(`this is a function ${arg}`)
        }
    }
})
</script>