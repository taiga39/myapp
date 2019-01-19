import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

new Vue({
  el: '#todo',
  data: {
    todos: [
      {done:false,text:"パンを買う"},
      {done:false,text:"コーヒを買う"},
    ]
  },
  computed: {
    remaining: function(){
      return this.todos.filter(function(val){
        return val.done;
      }).length;
    }
  }
})
