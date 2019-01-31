import Vue from 'vue/dist/vue.esm.js'
import App from '../app.vue'
import axios from 'axios'



var apiget = "https://api.openweathermap.org/data/2.5/weather?q="
var apiget2 = ",jp&units=metric&appid=e509537c974824c3ca874ebac7efe7b4"
var app = new Vue({
  el: '#content15',
  data: {
    city: null,
    temp: null,
    message: "Osaka",
    condition: {
      main: null
    }
  },
  // mounted: function(){
  //   axios.get(apiget + this.message + apiget2)
  //   .then(function(response){
  //     this.city = response.data.name
  //     this.temp = response.data.main.temp
  //     this.condition = response.data.weather[0]
  //   }.bind(this))
  //   .catch(function(error){
  //     console.log(error)
  //   })
  // },
  filters: {
    roundUp(value){
      return Math.ceil(value)
    }
  },
  methods: {
    greet: function (event) {
      axios.get(apiget + this.message + apiget2)
      .then(function(response){
        this.city = response.data.name
        this.temp = response.data.main.temp
        this.condition = response.data.weather[0]
      }.bind(this))
      .catch(function(error){
        console.log(error)
      })
      alert(apiget + this.message + apiget2)
    }
  }
})
