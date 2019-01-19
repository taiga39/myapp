import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

new Vue({
  el: '#todo',
  data: {
    addtext:'',
    todos: [
    ]
  },
  computed: {
    remaining: function(){
      return this.todos.filter(function(val){
        return val.done;
      }).length;
    }
  },
  methods:{
    addToDo: function(){
      if(this.addtext){
        this.todos.push({done:false,text:this.addtext});
        this.addtext = '';
      }
    },
    cleanToDo:function(){
      this.todos = this.todos.filter(function(val){
        return val.done == false;
      })
    }
  }
})
