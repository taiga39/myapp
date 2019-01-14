<template>
  <div class="header-content">
    <ul class="header-content-list">
      <li class="vuelist"><router-link to="/">Top</router-link></li>
      <li class="vuelist"><router-link to="/profile">Profile</router-link></li>
      <li class="vuelist"><router-link to="/technology">Tecnology</router-link></li>
      <li class="vuelist"><router-link to="/app">App</router-link></li>
      <li class="vuelist"><router-link to="/log">Log</router-link></li>
      <li class="vuelist"><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">

.header-content{
  background-color:#34b084;
}

ul.header-content-list{
  list-style: none;
  margin:0 auto;
  height:100px;
  padding-left: 0;
  max-width:1080px;

  li{
    display: inline-block;
    width: 15%;
    line-height:100px;
    font-size:30px;
    font-weight:600px;

    a{
      text-decoration:none;
      color:white;
    }
  }
}

@media screen and (max-width: 870px){
  .header-content{
    ul{
      max-height:870px;
      li{
       font-size:20px;
      }
    }
  }
}

@media screen and (max-width: 640px){
  .header-content{
    ul{
      height:120px;
      max-height:640px;
      li{
       font-size:15px;
       width:30%;
       line-height:70px;
      }
    }
  }
}

</style>
