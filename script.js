function translate(str) {

  
  
  var vowels = ["a","e","i","o","u"];
  var strArr = str.split("");
  var str= str.toLowerCase();
  var index;

  // Look for the vowel index in a string
  for(var k = 0; k < strArr.length; k++){
    for(var i = 0; i < vowels.length; i++){
      if(strArr[k] === vowels[i]){
        if(index === undefined){
          index = strArr.indexOf(strArr[k]);
        }
      }
    }
  }

  // if vowel is not the first letter use pig latin method
  if(index !== 0){
    var sliced = str.slice(0, index);
    str = str.slice(index) + sliced + "ay";
  }else {
    str = str + "way";
  }

  return str;
}

translate("consonant");

