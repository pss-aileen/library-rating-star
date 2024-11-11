# Raiting Star ⭐️

0.1 刻みの「★」評価が作れるライブラリです。

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

<!-- 🚧 [demo]() -->

---

## Installation

### Basic

#### CSS

```html
<link rel="stylesheet" href="https://unpkg.com/@pss-aileen/rating-star@1.0.1/dist/ratingStar.css" />
```

#### JavaScript

```html
<script src="https://unpkg.com/@pss-aileen/rating-star@1.0.1/dist/ratingStar.umd.js"></script>
```

### package manager

```sh
npm i @pss-aileen/rating-star
```

## How to use it?

### 1. JavaScript

#### Basic

```javascript
const ratingStar = new RatingStar();
ratingStar.init();
```

#### Basic + Options

```javascript
ratingStar.init({
  filledColor: 'pink', // color
  emptyColor: 'red', // color
});
```

### 2. HTML

```html
<span class="rs">2.5/5</span>
<div class="rs">2.5/5</div>
```
