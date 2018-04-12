import React, { Component } from 'react';

function choice(arr) {
  var random = Math.floor(Math.random(arr.length - 1));
  arr[random];
}

function remove(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      return item;
    }
  }
  return undefined;
}

export default { choice, remove };
