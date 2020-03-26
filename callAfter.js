function getScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = script.onreadystatechange  = callback;
    script.crossorigin = "anonymous";
    document.body.appendChild(script);
}
function getScriptWithPromise(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        script.onerror  = reject;
        script.crossorigin = "anonymous";
        document.body.appendChild(script);
    })
}

  
const value = fn => {
    if (typeof fn === "function") {
        return value(fn());
    } else {
        console.log(fn);
    }
}

const flattenObj3 = (obj,  preKey= "") => {
    return Object.keys(obj).reduce((acc, curr) => {
        const prevKey = preKey === "" ? curr : [preKey,curr].join(".");
        if (typeof obj[curr] === "object") {
           acc = {...acc, ...flattenObj3(obj[curr], prevKey)}
        } else {
            acc[prevKey] = obj[curr];
        }
        return acc;
    }, {})
}

Function.prototype.callAfter = function(delay, ...args) {
    let fn = this;
    setTimeout(() => {
        fn.apply(null, args);
    }, delay)
}

function generateSDOMNodeector(DOMNode) {
    console.log(DOMNode);
      if(DOMNode.id){
          return "#"+DOMNode.id;
      }
      let path = [],parent;
      while (parent  = DOMNode.parentNode){
          path.unshift(`${DOMNode.tagName}:nth-child(${[].indexOf.call(parent.children,DOMNode)+1})`);
          DOMNode = parent;
      }
      return `${path.join(' > ')}`.toLowerCase();
  }
  window.onclick = e => {
     console.log(generateSDOMNodeector(e.target));
  } 

  const generateSDOMNodeector = DOMNode => {
    if (DOMNode.id) {
        return ["#", DOMNode.id].join("");
    } 
    let sel = "";
    if (DOMNode.className) {
        sel += "." + [...DOMNode.classList].join(".");
        if (document.querySelectorAll(sel).length === 1) {
            return sel;
        }
        sel =  DOMNode.tagName.toLowerCase() + sel;
        if (document.querySelectorAll(sel).length === 1) {
            return sel;
        } 
    }
    if (document.querySelectorAll(DOMNode.tagName).length === 1) {
        return DOMNode.tagName;
    }
    let selPath = [],parent;
    while (parent  = DOMNode.parentNode){
        let s = [DOMNode.tagName];
        s.push([...parent.children].indexOf(DOMNode) + 1);
        selPath.unshift(s.join(":nth-child"));
        DOMNode = parent;
    }
    return selPath.join(' > ').toLowerCase();
  }
