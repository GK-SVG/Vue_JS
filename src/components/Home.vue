<template>
    <div>
        <h1>Hello this is home component</h1>
        <h1>{{data}}</h1>
        <!-- <button v-on:click="first(`this is argument`)">Click me</button> -->
        <!-- <button v-on:mouseover="first(`this is argument`)">Click me</button> -->
        <h1 v-if="show">This is true</h1>
        <h1 v-else>This is false</h1>
        <button v-on:click="toggle()">Toggle me</button>
        <ForLoop />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ForLoop from "./loop.vue";

export default Vue.extend({
    name:"Home",
    props:{
        data:String
    },
    data(){
          return {show:true}
    },
    methods:{
        first(arg){
            alert(`this is a function ${arg}`)
        },
        toggle(){
            this.show = !(this.show)
        }
    },
    components:{
        ForLoop,
    }
})
</script>

<style scoped>
div{
     background-color: rgb(162, 223, 175);
     height: 100%;
     width: 100%;
 }
</style>