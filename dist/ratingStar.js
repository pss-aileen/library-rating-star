var i = Object.defineProperty;
var l = (s, t, r) => t in s ? i(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[t] = r;
var a = (s, t, r) => l(s, typeof t != "symbol" ? t + "" : t, r);
function n(s) {
  return !Number.isInteger(s);
}
function c(s) {
  const t = Math.round(s * 10) / 10;
  return parseFloat(t.toFixed(1));
}
class p {
  constructor(t, r) {
    a(this, "givenStars");
    a(this, "totalStars");
    a(this, "starDoms");
    a(this, "filledStarIcon");
    a(this, "emptyStarIcon");
    this.givenStars = t, this.totalStars = r, this.starDoms = [], this.filledStarIcon = "★", this.emptyStarIcon = "★", this.wrapAllStars();
  }
  displayStar() {
    const t = this.filledStarIcon.repeat(this.givenStars), r = this.emptyStarIcon.repeat(this.totalStars - this.givenStars);
    console.log(t + r);
  }
  getRatingIcon() {
    const t = this.filledStarIcon.repeat(Math.ceil(this.givenStars)), r = this.emptyStarIcon.repeat(this.totalStars - Math.ceil(this.givenStars));
    return t + r;
  }
  wrapAllStars() {
    const t = this.getRatingIcon().split("");
    for (let r = 0; r < t.length; r++) {
      const e = this.wrapWithSpan(t[r], r);
      this.starDoms.push(e);
    }
  }
  wrapWithSpan(t, r) {
    const e = document.createElement("span");
    if (e.textContent = t, n(this.givenStars)) {
      if (Math.floor(this.givenStars) === r) {
        e.classList.add("rs-control");
        const o = (this.givenStars % 1 * 10).toFixed(0);
        e.classList.add(`rs-${o}`);
      }
      Math.floor(this.givenStars) < r && e.classList.add("rs-empty");
    }
    return this.givenStars <= r && e.classList.add("rs-empty"), e;
  }
  appendSpan(t) {
    t.textContent = "";
    const r = document.createDocumentFragment();
    this.starDoms.map((e) => {
      r.appendChild(e);
    }), t.appendChild(r);
  }
}
class m {
  constructor(t = {}) {
    /*
      HTML の rs の class属性を持つ要素を取得
      テキストを解析し、それに応じた結果を返す
    */
    a(this, "filledColor");
    a(this, "emptyColor");
    this.filledColor = t.filledColor || "gold", this.emptyColor = t.emptyColor || "#eee", this.init(), this.setColor();
  }
  setColor() {
    document.documentElement.style.setProperty("--rs-color", this.filledColor), document.documentElement.style.setProperty("--rs-empty-color", this.emptyColor);
  }
  init() {
    const t = document.querySelectorAll(".rs");
    for (const r of t)
      if (r.textContent !== null) {
        let [e, o] = r.textContent.split("/").map(Number);
        if (!e && e !== 0 || !o && o !== 0) {
          console.error("数値が入力されていません 3/5 のような形で指定してください:", r);
          return;
        }
        if (o === 0) {
          console.error("合計の数は1以上にしてください。");
          return;
        }
        if (e > o) {
          console.error("givenStarsはtotalStarsより大きい値を指定しないでください。");
          return;
        }
        if (n(o)) {
          console.error("合計数は整数で指定してください。", r);
          return;
        }
        n(e) && (e = c(e)), new p(e, o).appendSpan(r);
      }
  }
}
export {
  m as RaitingStar
};
