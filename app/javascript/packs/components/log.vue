<template>
  <div class="wrapper" data-wrapper="">
    <h1 class="content-title">MyLog</h1><br>
    <div class="log-list">

      <div class="log">
        <a href="https://github.com/taiga39" target="_blank"><h4>Github</h4><img src="assets/github.png"></a>
        <h4>リポジトリの公開</h4>
      </div>
      <div class="log">
        <a href="https://taiga39.qrunch.io/" target="_blank"><h4>Qrunch</h4><img src="assets/qrunch.png"></a>
        <h4>勉強の記録</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .log-list{
    display:flex;
    flex-wrap: wrap;
    padding:20px 20px 20px 20px;
    justify-content:center;

    .log{
      padding:0 20px 20px 20px;
      font-size:20px;
      min-height:200px;
      width:300px;
      border: 1px solid #333;
      border-radius:3px;
      margin:20px 10px 0 10px;

      a{
        color:#333;
        font-size:20px;
      }
      img{
        width:180px;
        height:180px;
      }

    }
  }
</style>
