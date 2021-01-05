<template>
    <div>
        <h1 v-for="data in mydata" :key="data.name">{{data.name}}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"MyProps",
    props:['mydata']
})
</script>