import Vue from 'vue/dist/vue.esm.js'
import App from '../app.vue'
import axios from 'axios'

var app = new Vue({
  el: '#content15',
  data: {
    city: null,
    temp: null,
    condition: {
      main: null
    }
  },
  mounted: function(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid=e509537c974824c3ca874ebac7efe7b4')
    .then(function(response){
      this.city = response.data.name
      this.temp = response.data.main.temp
      this.condition = response.data.weather[0]
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
  filters: {
    roundUp(value){
      return Math.ceil(value)
    }
  }
})
