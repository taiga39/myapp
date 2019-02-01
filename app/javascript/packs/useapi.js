import Vue from 'vue/dist/vue.esm.js'
import App from '../app.vue'
import axios from 'axios'



var apiget = "https://api.openweathermap.org/data/2.5/weather?q="
var apiget2 = ",jp&units=metric&appid=e509537c974824c3ca874ebac7efe7b4"
var app = new Vue({
  el: '#content15',
  data: {
    message: "Osaka",
    city: null,
    temp: null,
    condition: {
      main: null
    }
  },
  mounted: function(){
    axios.get(apiget + this.message + apiget2)
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
  },
  methods: {
    weather: function (event) {
      axios.get(apiget + this.message + apiget2)
      .then(function(response){
        this.city = response.data.name
        this.temp = response.data.main.temp
        this.condition = response.data.weather[0]
      }.bind(this))
      .catch(function(error){
        console.log(error)
      })
    }
  }
})



var tabs = [
  {
    name: 'Homea',
    component: {
      template: '<div>Lovelovelove</div>'
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Unok</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>',
    }
  }
]

new Vue({
  el: '#dynamic-component-demo',
  data: {
    tabs: tabs,
    currentTab: tabs[0]
  }
})
