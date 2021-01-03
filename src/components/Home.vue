<template>
    <div>
        <h1>Hello this is home component</h1>
        <h1>{{data}}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Home",
    props:{
        data:String
    }
})
</script>