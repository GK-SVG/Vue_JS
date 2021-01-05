<template>
    <div>
        <h1>{{message}}</h1>
        <p style="white-space:pre-line;">{{message2}}</p>
        <input type="text" v-model="message"><br>
        <textarea name="" id="" cols="30" rows="10" v-model="message2"></textarea>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'DataBinding',
    data(){
        return{
            message:"Hi This is dataBinding",
            message2:"This is Textarea data"
        }
    }
})
</script>