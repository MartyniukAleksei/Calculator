const outPut = document.querySelector(".output-text");
const buttons = document.querySelectorAll(".btn");

let val = 0,
  newval = 0,
  currval = 0,
  operation,
  lastoperation = false,
  ispoint = false;

buttons.forEach((target) => {
  target.addEventListener("click", () => {
    let str = target.innerHTML;
    if (str === "RESET") {
      val = 0;
      newval = 0;
      currval = 0;
      operation = null;
      lastoperation = false;
      ispoint = false;
    } else if (str === "x" || str === "-" || str === "+" || str === "/") {
      currval = newval;
      lastoperation = true;
      ispoint = false;
      operation = str;
    } else if (str === ".") {
      ispoint = true;
    } else if (str === "DEL") {
      /*let a = newval % 10;
      newval = (newval - a) / 10;*/
      let a = newval.toString();
      a = a.slice(0, -1);
      if (a[a.length - 1] == ".") {
        a = a.slice(0, -1);
        ispoint = false;
      }
      if (a.length == 0) a = 0;
      newval = a;
    } /*+ - * /*/ else if (str === "=") {
      switch (operation) {
        case "+":
          newval = +currval + +newval;
          break;
        case "-":
          newval = currval - newval;
          break;
        case "x":
          newval *= currval;
          break;
        case "/":
          if (newval == 0) alert("Нельзя делить на 0!");
          else newval = currval / newval;
          break;
      }
    } else {
      if (lastoperation === false) {
        if (newval === 0 && ispoint === false) newval = str;
        else if (ispoint === true) {
          let a = newval.toString();
          if (!a.includes(".")) a += ".";
          a += str;
          newval = a;
        } else newval = newval * 10 + +str;
      } else {
        newval = str;
        lastoperation = false;
      }
    }

    outPut.innerHTML = newval;
  });
});

const colors = {
  type1: {
    colorBack: "#3b4664",
    colorOutPut: "#181f32",
    colorBtnCont: "#252d44",
    colorBtn: "#eae3db",
    colorBtnText: "#3e4856",
    colorBtnShadow: "#b2a195",
    varBtnHov: "white",
    colorDelBtn: "#a2b2e2",
    colorDelBtnShadow: "#414e72",
    colorDelBtnText: "white",
    colorEqBtn: "#f96c5b",
    colorEqShadow: "#8f2316",
    colorEqColor: "white",
    colorDelBtnHov: "#b7c1ff",
    coloreqBtnHov: "#ff8e5d",
    colorText: "white",
  },

  type2: {
    colorBack: "#e6e6e6",
    colorOutPut: "#eeeeee",
    colorBtnCont: "#d3cdcd",
    colorBtn: "#e5e4e0",
    colorBtnText: "#323229",
    colorBtnShadow: "#a69d8f",
    varBtnHov: "white",
    colorDelBtn: "#62b5bd",
    colorDelBtnShadow: "#195e63",
    colorDelBtnText: "white",
    colorEqBtn: "#ff8a38",
    colorEqShadow: "#873800",
    colorEqColor: "white",
    colorDelBtnHov: "#75d9e3",
    coloreqBtnHov: "#ffa438",
    colorText: "#323229",
  },

  type3: {
    colorBack: "#17062a",
    colorOutPut: "#1e0836",
    colorBtnCont: "#1e0836",
    colorBtn: "#331b4d",
    colorBtnText: "#fee633",
    colorBtnShadow: "#87219f",
    varBtnHov: "#6b34ac",
    colorDelBtn: "#8631b0",
    colorDelBtnShadow: "#c416fa",
    colorDelBtnText: "white",
    colorEqBtn: "#94fff9",
    colorEqShadow: "#70fef5",
    colorEqColor: "#0c252c",
    colorDelBtnHov: "#c244fb",
    coloreqBtnHov: "#94eeff",
    colorText: "#fee633",
  },
};

const styleBtn = document.querySelector(".theme-choosing-input");

styleBtn.addEventListener("click", () => {
  if (styleBtn.value === "1") {
    for (let key in colors.type1) {
      const cssVariableName = `--${key}`;
      console.log(cssVariableName);
      document.documentElement.style.setProperty(
        cssVariableName,
        colors.type1[key]
      );
    }
  }
  if (styleBtn.value === "2") {
    for (let key in colors.type2) {
      const cssVariableName = `--${key}`;
      document.documentElement.style.setProperty(
        cssVariableName,
        colors.type2[key]
      );
    }
  }
  if (styleBtn.value === "3") {
    for (let key in colors.type3) {
      const cssVariableName = `--${key}`;
      document.documentElement.style.setProperty(
        cssVariableName,
        colors.type3[key]
      );
    }
  }
});
