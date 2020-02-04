# README
This Repository is develop Generative Design with p5.js<br>
<br>
Referenced by<br>
<a href="http://www.bnn.co.jp/support/generativedesign_p5js/" target="_blank" rel="noopener">Generative Design</a>

# インデックス
- <a href="開発環境"></a>

## 開発環境

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

// draw()関数は、描画ステップごとに呼び出され、関数内のすべてのコマンドを実行する。
// ellipse => 描画するコマンド
// mouseX => 中心点の初期値
// mouseY => 中心点の初期値
// 第三引数 => オブジェクトの幅
// 第四引数 => オブジェクトの高さ
function draw() {
  ellipse(mouseX, mouseY, 40, 40);
};
```
