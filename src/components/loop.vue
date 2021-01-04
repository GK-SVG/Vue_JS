<template>
    <div class="mydiv">
        <table border="1px">
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"ForLoop",
    data(){
        return {
          users:  [
                 {'id':1,'name':'apple'},
                 {'id':2,'name':'linux'},
                 {'id':3,'name':'hp'}
            ]
        }
    }
})
</script>

<style scoped>
 .mydiv{
     background-color: rgb(3, 2, 22);
     height: 100px;
     width: 100px;
 }
</style>