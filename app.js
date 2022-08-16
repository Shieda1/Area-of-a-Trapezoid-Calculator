// https://calculator.swiftutors.com/area-of-a-trapezoid-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofTrapezoidRadio = document.getElementById('areaofTrapezoidRadio');
const upperHorizontalLengthRadio = document.getElementById('upperHorizontalLengthRadio');
const lowerBaseHorizontalLengthRadio = document.getElementById('lowerBaseHorizontalLengthRadio');
const verticalHeightRadio = document.getElementById('verticalHeightRadio');

let areaofTrapezoid;
let upperHorizontalLength = v1;
let lowerBaseHorizontalLength = v2;
let verticalHeight = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

areaofTrapezoidRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Upper Horizontal Length';
  variable2.textContent = '(b) Lower Base Horizontal Length';
  variable3.textContent = '(h) Vertical Height';
  upperHorizontalLength = v1;
  lowerBaseHorizontalLength = v2;
  verticalHeight = v3;
  result.textContent = '';
});

upperHorizontalLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Trapezoid';
  variable2.textContent = '(b) Lower Base Horizontal Length';
  variable3.textContent = '(h) Vertical Height';
  areaofTrapezoid = v1;
  lowerBaseHorizontalLength = v2;
  verticalHeight = v3;
  result.textContent = '';
});

lowerBaseHorizontalLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Trapezoid';
  variable2.textContent = '(a) Upper Horizontal Length';
  variable3.textContent = '(h) Vertical Height';
  areaofTrapezoid = v1;
  upperHorizontalLength = v2;
  verticalHeight = v3;
  result.textContent = '';
});

verticalHeightRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Trapezoid';
  variable2.textContent = '(a) Upper Horizontal Length';
  variable3.textContent = '(b) Lower Base Horizontal Length';
  areaofTrapezoid = v1;
  upperHorizontalLength = v2;
  lowerBaseHorizontalLength = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofTrapezoidRadio.checked)
    result.textContent = `Area of Trapezoid = ${computeAreaofTrapezoid().toFixed(2)}`;

  else if(upperHorizontalLengthRadio.checked)
    result.textContent = `Upper Horizontal Length = ${computeUpperHorizontalLength().toFixed(2)}`;

  else if(lowerBaseHorizontalLengthRadio.checked)
    result.textContent = `Lower Base Horizontal Length = ${computeLowerBaseHorizontalLength().toFixed(2)}`;

  else if(verticalHeightRadio.checked)
    result.textContent = `Vertical Height = ${computeVerticalHeight().toFixed(2)}`;
})

// calculation

function computeAreaofTrapezoid() {
  return 0.5 * (Number(upperHorizontalLength.value) + Number(lowerBaseHorizontalLength.value)) * Number(verticalHeight.value);
}

function computeUpperHorizontalLength() {
  return ((Number(areaofTrapezoid.value) * 2) / Number(verticalHeight.value)) - Number(lowerBaseHorizontalLength.value);
}

function computeLowerBaseHorizontalLength() {
  return ((Number(areaofTrapezoid.value) * 2) / Number(verticalHeight.value)) - Number(upperHorizontalLength.value);
}

function computeVerticalHeight() {
  return (Number(areaofTrapezoid.value) * 2) / (Number(upperHorizontalLength.value) + Number(lowerBaseHorizontalLength.value));
}