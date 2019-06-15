//instructions saved in txt file in same folder on github. Did the exercises on cedecademy as they had the tests pre-installed.

const _ = {

//String methods

  clamp (num, low, high) {
    let clampedLower = Math.max(num, low);
    return Math.min(clampedLower, high);
  },

  inRange (num, start, end) {
    if (end == null) {
      end = start;
      start = 0;
    } else if (start>end) {
      let newStart = end;
      end = start;
      start = newStart;
    };
    if (num < start || num >= end) {
      return false;
    } else {
      return true;
    };
  },

  words (string) {
    return string.split(' ');
  },

  pad (string, length) {
    if (string.length >= length) {
      return string;
    } else {
      let padSpace = ' ';
      let paddingStart = Math.floor((length - string.length)/2);
      let paddingEnd = Math.ceil((length - string.length)/2);
      return padSpace.repeat(paddingStart) + string + padSpace.repeat(paddingEnd);
    };
  },

//Object methods

  has (object, key) {
    let currVal = object[key];
    if (typeof currVal === "undefined") {
      return false;
    } else {
     return true;
    };
  },

  invert (obj) {
    let newObj = {};
    for (let key in obj) {
      let originalValue = obj.key;
      newObj.originalValue = key;
      }
    return newObj;
  },

  findKey (object, predicate) {
    for (let key in object) {
      let value = object.key;
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

//Array methods

  drop (myArray, num) {
    if (num == null) {
      return myArray.slice(1);
    } else {
 		  return myArray.slice(num);
    }
  },

  dropWhile (array, predicate) {
		let location = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, location);
    return droppedArray;
  },

  chunk (array, size) {
    if (size == null) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i <array.length; i+=size) {
			let arrayChunk = array.slice(i, i+size);
     	arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },



};
