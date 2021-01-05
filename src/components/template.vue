<template>
    <div>
        <h1>{{show ? "This is True (Using ternary operarter)" : "This false(Using ternary operarter)"}}</h1>
        <button v-on:click="toggle">Click Me</button>
        <h1>{{a}} + {{b}} = {{a+b}}</h1>
        <button v-bind:disabled="show">Disabled Button</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Home",
    data(){
        return{
            show:true,
            a:10,
            b:20
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
        }
    }
})
</script>