"use strict";

// 1. Написати скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
// методами: показати усю інформацію про товар,  установити знижку на ціну і повернути нову ціну з урахуванням знижки

function MethodsForProduct() {
  this.infoProduct = function () {
    return(`Product: name - ${this.name}, price - ${this.price}, currency - ${this.currency}`);
  };
  this.discount = function () {
    return (`Your product has a discount, now the price of the product ${this.price / 2}$.`);
  };
}

function Product(name, price, currency) {
  this.name = name;
  this.price = price;
  this.currency = currency;
}

Product.prototype = new MethodsForProduct();
const product = new Product("Mac", 1500, "$");
console.log(product.infoProduct());
console.log(product.discount());
