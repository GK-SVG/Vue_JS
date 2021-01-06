<template>
    <div>
        <p v-if="errors.length">
            <b>Errors Are</b>
            <ul >
                <li v-for="error in errors" v-bind:key="error.id">{{error}}</li>
            </ul>
        </p>
        <form @submit="uploadData">
        <input type="text" v-model="username" placeholder="Enter UserName"><br><br>
        <input type="password"  v-model="password" placeholder="Enter your password"><br><br>
        <button type="submit">Submit</button><br></form>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            errors:[],
            username:null,
            password:null 
        }
    },
    methods:{
        uploadData(e){
            e.preventDefault()
            this.errors = []
            if(this.username !=null && this.password!=null){
                console.log('username--',this.username)
                console.log('password--',this.password)
            }
            if (!this.username){
                this.errors.push('username never blank')
            }
            if (!this.password){
                this.errors.push('password never blank')
            }
        }
    }
}
</script>