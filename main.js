import "./jscolor.js";

const input = document.getElementById("colorInput");
console.log(input);

input.oninput(update(input, "pr4"));

function update(picker, selector) {
  console.log(picker.jscolor);
  document.getElementById(selector).style.background =
    picker.jscolor.toBackground();
}
jscolor.trigger("input change");
