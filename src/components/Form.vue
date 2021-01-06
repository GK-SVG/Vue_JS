<template>
    <div>
        <input type="text" v-model="userdata.username" placeholder="Enter UserName"><br><br>
        <input type="password"  v-model="userdata.password" placeholder="Enter your password"><br><br>
        <button v-on:click="uploadData" type="submit">Submit</button><br>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            userdata:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        uploadData(){
            console.log('username--',this.userdata.username)
            console.log('password--',this.userdata.password)
        }
    }
}
</script>