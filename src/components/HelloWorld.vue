<template>
  <div class="hello">
    <button @click="output">{{ btn }}</button>
    
    <div>
      <input type="text" v-model="msg" :class="{ 'inputClass':show }" />
    </div>

    <router-link to="/new" :class="[ link ]" >跳转</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      btn:'点击',
      show:true,
      link:'link'
    }
  },
  methods: {
    output(){
      this.show=!this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
  width:10rem;
  height:2rem;

}
.inputClass{
  height:2rem;
  margin-top:0.1rem;
}
.link{
  text-decoration-line: none;
}

</style>
