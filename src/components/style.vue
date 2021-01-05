<template>
    <div>
        <h1 v-bind:style="{color:mytxtColor}">This Style binding</h1>
        <h1 v-bind:class="[show ? 'myclass' : 'myclass2']">This {{color}} color with array binding</h1>
        <h1 v-bind:class="{myclass2:show,myclass3:show}">This is object binding</h1>
        <button v-on:click="colorchange">Click</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Home",
    data(){
        return{
            show:true,
            color:'black',
            mytxtColor:'yellow'

        }
    },
    methods:{
        colorchange(){
            this.show=!this.show
            if(this.color=="black"){
                this.color="cyan"
            }
            else{
                this.color="black"
            }
        }
    }
})
</script>

<style scoped>
.myclass{
    color: black;
}
.myclass2{
    color: cyan;
}
.myclass3{
    background-color: brown;
}
</style>>
