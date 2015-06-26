'use strict';

/**
 * コンストラクタ
 * @param {String} name
 */
function Person(name) {
  this.name = name;
}

/**
 * インスタンスメソッド
 */
Person.prototype.greet = function() {
  console.log("Hello I'm " + this.name);
}

/**
 * スタティックメソッド
 * @param {String} name
 * @return {Object} Person
 */
Person.create = function(name) {
  return new Person(name);
}
