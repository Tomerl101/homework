(function() {
    $('#myMain').fullpage({
      navigation: true,
    });
  })();


document.getElementById("finput").addEventListener("change", myFunction);

function myFunction() {
  let finput = document.getElementById('finput');  
  var x = document.getElementsByClassName("fname");
  for(i of x)
      i.innerHTML += ' ' + finput.value;
}

let radioBtn  = document.getElementsByClassName('radio');

radioBtn[0].addEventListener("change", function(){
  if (radioBtn[0].checked == true){
    let hideMe =document.getElementById('hideMe');
    hideMe.classList.add('animated');
    hideMe.classList.add('fadeInLeft');
    hideMe.style.marginTop = "25px";
    hideMe.style.marginLeft = "25px";
    hideMe.style.display = 'block'
  }
});

var rangeSlider = document.getElementById("range-slider");
var rangeLabel = document.getElementById("range-label");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeLabel.innerHTML = rangeSlider.value;
  var labelPosition = (rangeSlider.value /rangeSlider.max);
  
  if(rangeSlider.value === rangeSlider.min) {
 rangeLabel.style.left = ((labelPosition * 0) + 2) + "%";
  } else if (rangeSlider.value === rangeSlider.max) {
 rangeLabel.style.left = ((labelPosition * 100) - 2) + "%";
  } else {
  rangeLabel.style.left = (labelPosition * 100) + "%";
  }
}

let count = document.getElementById("counter");
let tmpCounter;
let isOk= false;

window.onload = function(){
    setInterval(counting , 3000);
}

function counting(){
    tmpCounter = Number(count.innerHTML);
    ++tmpCounter;
    count.innerHTML = tmpCounter;
}

const inputs = document.querySelectorAll('input');
const patterns = {
        phone: /^\d{5,12}$/,
        fullname: /^[a-z\d]{3,12}$/i,
        pass: /^[\d\w@-]{5,8}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
             console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});