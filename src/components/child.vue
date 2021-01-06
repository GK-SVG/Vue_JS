<template>
    <div>
        <button v-on:click="updateTitle()">Update Parent Title</button>
    </div>
</template>

<script>
export default ({
    name:"child",
    methods:{
        updateTitle(){
            this.$emit('changetitle','Parent Updated')
        }
    }
})
</script>