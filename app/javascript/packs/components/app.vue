<template>
  <div class="wrapper" data-wrapper="">
    <h1 class="content-title">MyApplication</h1>

    <div class="app-list">
      <div class="app">
        <a href="day11">
          <h4>Find Onononoka!</h4>
          <img src="assets/day11.png">
          <p>おのののかという文字を探そう</p>
        </a>
      </div>
      <div class="app">
        <a href="day10" target="_blank">
          <h4>Job's Inovation!</h4>
          <img src="assets/day10.png">
          <p>ジョブスに新しい発明をプレゼンしてもらおう</p>
        </a>
      </div>
      <div class="app">
        <a href="day9" target="_blank">
          <h4>IconColorChange</h4>
          <img src="assets/day9.png">
          <p>アイコンの色を変化させよう</p>
        </a>
      </div>
      <div class="app">
        <a href="day8" target="_blank">
          <h4>StrCanvasMove</h4>
          <img src="assets/day8.png">
          <p>Canvas内を文字が動き回るよ</p>
        </a>
      </div>
      <div class="app">
        <a href="day7">
          <h4>SimpleToDoList</h4>
          <img src="assets/content7.png">
          <p>Vue.jsを使っためちゃくちゃシンプルなToDoリスト</p>
        </a>
      </div>
      <div class="app">
        <a href="posttests">
          <h4>Ai Ai Umbrella</h4>
          <img src="assets/day6.png">
          <p>大好きなあの子と噂になって、黒板に名前を書かれちゃおう</p>
        </a>
      </div>
      <div class="app">
        <a href="day5">
          <h4>Go Egoshi!!</h4>
          <img src="assets/day5.png">
          <p>えごし選手がホームラン王になるには何年かかるだろう</p>
        </a>
      </div>
      <div class="app">
        <a href="day4">
          <h4>Can You Celebrate?</h4>
          <img src="assets/day4.png">
          <h4></h4>
          <p>新しい元号で生まれてきた子供が成人するのはいつだろうか</p>
        </a>
      </div>
      <div class="app">
        <a href="day3">
          <h4>Remake Space!</h4>
          <img src="assets/day3.png">
          <p>神様になって太陽系の惑星を削除しちゃおう</p>
        </a>
      </div>
      <div class="app">
        <a href="day2" id="app-title">
          <h4>BMI Calculator</h4>
          <img src="assets/day2.png">
          <p>身長と体重を入力してBMIを計算しよう</p>
        </a>
      </div>
      <div class="app">
        <a href="day1">
        <h4>ProgramLangPuzzle</h4>
          <img src="assets/day1.png">
          <p>文字を並び替えてプログラミング言語を完成させよう</p>
        </a>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .app-list{
    display:flex;
    flex-wrap: wrap;
    padding:20px 20px 20px 20px;
    justify-content:space-around;

    .app{
      padding:0 20px 0 20px;
      font-size:20px;
      min-height:300px;
      width:300px;
      border: 1px solid #333;
      border-radius:3px;
      margin-top:20px;
      img{
        width:180px;
        height:180px;
      }
      a{
        color:black;
        text-decoration:none;
      }
    }
  }
</style>
