<template>
    <div>
        <form @submit="submitData" action="post">
            <input type="text" name="name" v-model="post.name"><br><br>
            <input type="number" name="price" v-model="post.price"><br><br>
            <input type="text" name="company" v-model="post.company"><br><br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios)
export default {
    name:"PostReq",
    data(){
        return{
            post:{
                name:null,
                price:null,
                company:null
            }
            
        }
    },
    methods:{
        submitData(e){
            e.preventDefault();
            console.log(this.post)
            this.$http.post('http://127.0.0.1:8000/productsApi/',this.post)
            .then(resp=>{
            console.log(resp)
            
        }).catch((err) => {
       console.log('Errors are--',err);
      })

        }
    }
}
</script>
