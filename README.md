# webpack-sample

webpackを使用してES6以上のJavaScriptとSass(.scss)をコンパイルする設定例です。  
SPAではなく複数のページを持つアプリケーションを対象としています。  

## バージョン情報

- node -v # 8.9.4
- webpack -v # 3.10.0

## 初期設定

> npm i  

## ビルドコマンド

> npm run build # webpack  
> npm run build-w # webpack --watch  

## 開発

dev-assets内のファイルを編集してください。  
styles, scripts直下に共通ファイル、  
*/pages配下に各ページごとのファイルを置いています。

## 読み込む

```html
<head>
  <link rel="stylesheet" href="./assets/css/application.css">
  <link rel="stylesheet" href="./assets/css/pages/[ページ名].css">
<head>
<body>
  <script src="./assets/js/webpackCommonChunk.js"></script>
  <script src="./assets/js/application.js"></script>
  <script src="./assets/js/pages/[ページ名].js"></script>
<body>
```

## ESLintについて

設定されていません。  
