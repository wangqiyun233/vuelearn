<template>
  <div class="hello">
    <button @click="output">{{ btn }}</button>
    
    <div>
      <input type="text" v-model="msg" :class="{ 'inputClass':show }" />
    </div>

  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello  </p>
    </transition>
  </div>

  <div id="demo1">
    <button v-on:click="demo1 = !demo1">
      Toggle
    </button>
    <transition name="bounce">
      <p v-if="demo1">{{test}}</p>
    </transition>
  </div>
  <div>
    <span>count ={{count}}</span>
    <button v-on:click="increment">增加</button>
    <button v-on:click="incrementByAct">act增加</button>
  </div>
    <router-link to="/new" :class="[ link ]" >跳转</router-link>

  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'Vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      btn:'点击',
      show:true,
      demo1:true,
      link:'link'
    }
  },
  // computed:{
  //   ...mapState(['test'])
  
  // },
  computed:mapState(['test','count']),
  methods: {
    ...mapMutations(['increment']),
    output(){
      this.show=!this.show;
    },
    ...mapActions(['incrementByAct'])
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

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform:translateY(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
