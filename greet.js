function greet(name){
    return "Hello, " + name;
}

function greet(name){
    if(name==null)
        return "Hello there!";
    else
        if(Array.isArray(name))
            return "Hello" + stringOfNames(name);
        else
            if(isUpperCase(name))
                return "HELLO " + name + "!";
            else
                return "Hello, " + name;
}

function isUpperCase(str) {
    if(str === str.toUpperCase())
        return true;
    else
        return false;
}

function stringOfNames(words) {
  let strNames= '';

  words.forEach((word) => {
    strNames+= ', ' + word;
  });
  
  return strNames;
}