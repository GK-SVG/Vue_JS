<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MyProps v-bind:mydata="users"/> -->
    <!-- <h1>{{title|UCASE}}</h1> -->
    <!-- <DataBinding/> -->
    <!-- <child v-on:changetitle="updateTitle($event)"/> -->
    <!-- <User/> -->
    <!-- <h1>Login Here</h1> -->
    <!-- <Login /> -->
    <!-- <LifeCycle/> -->
    <EmpAPI/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue';
// import Home from "./components/template.vue";
// import Home from "./components/style.vue";
// import DataBinding from "./components/DataBinding";
// import child from "./components/child";
// import Login from "./components/Form";
// import LifeCycle from "./components/lifecycle";
import EmpAPI from "./components/api";
export default {
  name: 'App',
  components: {
    EmpAPI
    // LifeCycle
    // Login,
    // child,
    // HelloWorld,
    // Home,
    // User,
    // DataBinding
    // MyProps
    
  },
  data(){
    return{
      // users:[{name:"A"},{name:"B"},{name:"H"},{name:"I"},{name:"S"}]
      title:"Props tutoorials"
    }
  },
  methods:{
    updateTitle(title){
          this.title=title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
