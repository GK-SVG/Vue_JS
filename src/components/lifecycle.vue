<template>
    <div>
        <h1>{{myname}}</h1>
    </div>
</template>

<script>
export default {
    name:"LifeCycle",
    data(){
        return {
            myname:"Gautam Kumar"
        }

    },
    created(){
        console.log(this.myname)
    },
    beforeCreate(){
        // this.myname = "GK"
        console.log(this.myname)
    },
    beforeMount(){
        console.log("BeforeMount")
        console.log(this.$el)
    },
    mounted(){
        console.log("Mounted")
        console.log(this.$el)
    }
}
</script>