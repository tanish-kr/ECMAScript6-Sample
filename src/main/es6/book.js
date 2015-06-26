'use strict';

class Person {

  /**
   * コンストラクタ
   * @param {String} name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * インスタンスメソッド
   */
  greet() {
    console.log("Hello I'm " + this.name);
  }

  /**
   * スタティックメソッド
   * @param {String} name
   * @return {Object} Person
   */
  static create(name) {
    return new Person(name);
  }

}

class Author extends Person {

  /**
   * コンストラクタ
   * @param {String} name
   * @param {String} book
   */
  constructor(name, book) {
    super(name);
    this.book = book;
  }

  /**
   * インスタンスメソッドのオーバライド
   */
  greet() {
    super.greet();
    console.log("I wrote " + this.book);
  }

  /**
   * スタティックメソッドのオーバライド
   * @param {String} name
   * @param {String} book
   * @return {Object} Author
   */
  static create(name, book) {
    return new Author(name, book);
  }
}
