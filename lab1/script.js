console.log("Команда яку потрібно вписати: triangle(значення1, \"тип1\", значення2, \"тип2\")");
console.log("Типи: leg (катет), hypotenuse, adjacent angle (прилеглий кут), opposite angle (протилежний кут), angle (кут, використовується в обчисленні з гіпотенузою)");
console.log("Приклад: triangle(4, \"leg\", 8, \"hypotenuse\")");
console.log("Величини кутів записуються в градусах!");

function triangle(val1, type1, val2, type2)
{
  if (val1 <= 0 || val2 <= 0) {
    console.log("Значення мають бути додатними числами");
    return "Zero or negative input";
  }
  let a, b, c, alpha, beta;

  if (type1 == "leg" && type2 == "leg") {
    a = val1;
    b = val2;
    c = Math.sqrt(a * a + b * b);
    alpha = Math.atan(a / b) * 180 / Math.PI;
    beta = 90 - alpha;
  }

  else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
    if (type1 === "leg") {
      a = val1;
      c = val2;
    } else {
      a = val2;
      c = val1;
    }

    if (a >= c) {
      console.log("Катет не може бути більшим або рівним гіпотенузі");
      return "Задайте коректні параметри";
    }

    b = Math.sqrt(c * c - a * a);
    alpha = Math.asin(a / c) * 180 / Math.PI;
    beta = 90 - alpha;
  }

  else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
    if (type1 === "leg") {
      a = val1;
      alpha = val2;
    } else {
      a = val2;
      alpha = val1;
    }

    beta = 90 - alpha;
    b = a / Math.tan(alpha * Math.PI / 180);
    c = a / Math.sin(alpha * Math.PI / 180);
  }

  else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
    if (type1 === "leg") {
      a = val1;
      beta = val2;
    } else {
      a = val2;
      beta = val1;
    }

    alpha = 90 - beta;
    b = a / Math.tan(alpha * Math.PI / 180);
    c = a / Math.sin(alpha * Math.PI / 180);
  }

  else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
    if (type1 === "hypotenuse") {
      c = val1;
      alpha = val2;
    } else {
      c = val2;
      alpha = val1;
    }

    beta = 90 - alpha;
    a = c * Math.sin(alpha * Math.PI / 180);
    b = c * Math.cos(alpha * Math.PI / 180);
  }

  else {
    console.log("Невідома або несумісна пара типів аргументів. Перечитайте інструкцію.");
    return "failed";
  }

  if (alpha <= 0 || alpha >= 90) {
    console.log("Кут має бути між 0 і 90 градусів");
    return "Некоректний кут";
  }

  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
  console.log("alpha =", alpha);
  console.log("beta =", beta);

  return "success";
}
