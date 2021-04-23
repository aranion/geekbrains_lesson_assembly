function loadScript(arg1, arg2) {
  const element = document.createElement("script");
  element.type = "text/javascript";

  console.log(document.querySelectorAll("script"));

  if (Array.isArray(arg1)) {
    console.log("Array");
    for (let i = 0; i < arg1.length; i++) {
      const elem = document.createElement("script");
      elem.type = "text/javascript";
      elem.src = arg1[i];
      document.body.appendChild(elem);
    }
    if (arg2) {
      element.onload = arg2;
    }
  } else if (typeof arg1 === "string") {
    console.log("string");
    element.src = arg1;
    if (arg2) {
      element.onload = arg2;
    }
  } else if (typeof arg1 === "function") {
    console.log("function");
    element.onload = arg1;
  }

  document.body.appendChild(element);
}

loadScript();
