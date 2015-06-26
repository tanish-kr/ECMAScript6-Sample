'use strict';

/**
 * thisの補足 es5の場合
 */
var john = {
  name: "John",
  helloLater: function() {
    var self = this;
    setTimeout(function() {
      // ここでのthisはjohnではないのでselfを使う
      console.log("Hello I'm " + self.name);
    }, 1000);
  }
}
