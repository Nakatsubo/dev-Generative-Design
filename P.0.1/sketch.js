// 厳格なエラーチェック
'use strict';

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
