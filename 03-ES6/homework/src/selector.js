var traverseDomAndCollectElements = function(matchFunc, startEl) { // startEl va empezar como undefined 
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;                   // empieza en el body donde estan los elementos visibles.
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let collectedElements = traverseDomAndCollectElements(matchFunc, child);

    resultSet = [...resultSet, ...collectedElements]; // spread operator y concat
    }
    return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { // aca busca que tipo de selector es (# -id , . -class , tag , tagg . class)
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if(selector.split(".").length === 2) return "tag.class"; // separa con .split - "div.class".split(".")
                                                          //  array [ "div" , "class"]
  return "tag";
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
//<div id= "idOne" ></div>

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 

    matchFunction = element => "#" + element.id === selector; // #"idOne" === #"idOne"

  } else if (selectorType === "class") {

    matchFunction = element => {
      let classes = element.classList;

      for (let i = 0; i < classes.length; i++) {
        if("." + classes[i]=== selector) return true;
        }
        return false;
    }
    
  } else if (selectorType === "tag.class") { // reutilizar codigo sin volver a escribirlo
    matchFunction = element => {
      let [t,c] = selector.split(".");      // [t,c] = ["div", "classOne"]
      return matchFunctionMaker(t)(element) && matchFunctionMaker("." + c)(element);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = element => element.tagName === selector.toUpperCase(); // DIV === DIV
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
