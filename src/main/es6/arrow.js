'use strict';

/**
 * アロー関数のthisの補足 es6の場合
 */
var john = {
  name: "John",
  helloLater: function() {
    setTimeout(() => {
      // アロー関数を使用するとここでのthisはjohnなのでそのまま使える
      console.log("Hello I'm " + this.name);
    }, 1000);
  }
}
