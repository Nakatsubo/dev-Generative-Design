# README
This Repository is develop Generative Design with p5.js<br>
<br>
Referenced by<br>
<a href="http://www.bnn.co.jp/support/generativedesign_p5js/" target="_blank" rel="noopener">Generative Design</a>


## インデックス
- <a href="https://github.com/NakatsuboYusuke/dev-Generative-Design#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83">開発環境</a>
- <a href="">要素</a>
- <a href=""></a>


## 開発環境

### CDN

```
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
```

### デモ

- index.html

```
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
<script src="sketch.js"></script>
```

- sketch.js

```
// Canvasの設定
function setup() {
  createCanvas(720, 720);
  // noFill();
  console.log('Hello');
};

// draw()関数は、一定時間毎に呼び出され、関数内のすべてのコマンドを実行する。
// ellipse => 描画するコマンド
// mouseX => 中心点の初期値
// mouseY => 中心点の初期値
// 第三引数 => オブジェクトの幅
// 第四引数 => オブジェクトの高さ
function draw() {
  ellipse(mouseX, mouseY, 40, 40);
};
```

## 要素

### 描画するコマンド

- <strong>ellipse()</strong><br>
円を描画するコマンド

- <strong>rect()</strong><br>
矩形を描画するコマンド

- <strong>line()</strong><br>
線を描画するコマンド

### 描画モードを指定するコマンド

- <strong>stroke(R, G, B, A)</strong>, <strong>noStroke()</strong><br>
線の色を指定するコマンド

- <strong>strokeWeight()</strong><br>
線の太さを指定するコマンド

- <strong>fill(R, G, B, A)</strong>, <strong>nofill()</strong><br>
塗りを指定するコマンド

- <strong>background(R, G, B, A)</strong><br>
背景色を指定するコマンド

- <strong>colorMode(RGB, A)</strong>, <strong>colorMode(HSB, A)</strong><br>
カラーモードを指定するコマンド

```
function setup() {
  createCanvas(720, 720);
  background(0, 255, 0, 255);
  colorMode(RGB, 255);
  stroke(255, 0, 0, 255);
  // noStroke();
  strokeWeight(2);
  fill(0, 0, 255);
  // noFill();
};

function draw() {
  ellipse(50, 50, 50, 50);
  rect(75, 75, 100, 50);
  // line(50, 50, 80, 80);
};
```

### 関数

- <strong>draw()</strong><br>
一定時間毎に呼び出され、関数内のすべてのコマンドを実行する。<br>
フレームレートは、frameCount()関数で指定する。初期値は、1秒60フレーム(fps)。

- <strong>setup()</strong><br>
フレーム毎に繰り返し実行する必要のないコマンドを指定する。

```
function setup() {
  frameRate(1);
};

function draw() {
  console.log(frameCount);
};

// => 1秒に1フレームを描画
```

- <strong>preload()</strong><br>
プログラム開始時にデータをロードする。

```
function preload() {
  img = loadImage('data/sample.jpg');
}
```

### ディスプレイ領域とレンダラー

- <strong>createCanvas(X, Y)</strong><br>
ディスプレイ領域を指定する。

- <strong>createCanvas(X, Y, オプション)</strong><br>
オプションでレンダラーを指定する。<br>
レンダラーは描画コマンドの結果をピクセルに落とし込む。

- <strong>P2D</strong><br>
標準のレンダラー

- <strong>WEBGL</strong><br>
3Dグラフィックを表示するためのレンダラー

```
function setup() {
  createCanvas(X, Y, P2D);
  createCanvas(X, Y, WEBGL);
};
```

### 座標変換

- <strong>translate(X, Y, Z)</strong><br>
座標系を移動するコマンド

- <strong>rotate()</strong><br>
回転するコマンド<br>
p5.jsでは角度をラジアンで表し、回転方向は時計回り。

- <strong>scale()</strong><br>
拡大縮小するコマンド

```
function setup() {
  createCanvas(720, 720);
};

function draw() {
  translate(100, 100);
  // 約45度回転
  rotate(0.75);
  scale(1.5);
  rect(50, 50, 50, 50);
};
```
