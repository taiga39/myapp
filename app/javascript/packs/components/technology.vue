<template>
  <div class="wrapper" data-wrapper="">
    <h1 class="content-title">Use Technology</h1>
    <div class="technology-list">
      <div class="technology">
        <h4>Ruby</h4>
        <img src="assets/ruby.jpg">
        <p>Ruby特有の配列の作成、<br>クラスやモジュールについて学び、実際に作成できる</p>
      </div>
      <div class="technology">
        <h4>RubyonRails</h4>
        <img src="assets/rails.jpg">
        <p>MVCモデルについてやHTTPリクエスト、Webサイトの作成に必要なログイン機能を実装できる</p>
      </div>
      <div class="technology">
        <h4>HTML&CSS</h4>
        <img src="assets/css3-html5.png">
        <p>静的なサイトを作成できる</p>
      </div>
      <div class="technology">
        <h4>JavaScript</h4>
        <img src="assets/js.jpg">
        <p>動的な要素を実装できる</p>
      </div>
      <div class="technology">
        <h4>jQuery</h4>
        <img src="assets/jQurery.jpg">
        <p>プラグインを使ったスライドショーやAjax通信の実装</p>
      </div>
      <div class="technology">
        <h4>Vue.js</h4>
        <img src="assets/vuejs.png">
        <p>単一ページで構成されるページの作成（このポートフォリオ）</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  h1.content-title{
    margin:0;
  }
  .technology-list{
    display:flex;
    flex-wrap: wrap;
    padding:20px 20px 20px 20px;
    justify-content:space-around;

    .technology{
      padding:0 20px 0 20px;
      font-size:20px;
      min-height:300px;
      width:300px;
      border: 1px solid #333;
      border-radius:5px;
      margin-top:20px;
      img{
        width:180px;
        height:180px;
      }
    }
  }
</style>
