<template>
    <div>
        <h1>
            Employees List
        </h1>
        <table border="1px">
        <tr>
            <td>Name</td>
            <td>Salery</td>
            <td>Age</td>
        </tr>
        <tr v-for="item in list" :key="item.id">
            <td>{{item.employee_name}}</td>
            <td>{{item.employee_salary}}</td>
            <td>{{item.employee_age}}</td>
        </tr></table>
    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios)
export default {
    name:'EmpAPI',
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(resp=>{
            this.list = resp.data.data
            console.log(this.list)
            
        })
    }
}
</script>