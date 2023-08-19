function gettingInputElement(inputId) {
   const element = document.getElementById(inputId);
   const elementString = element.value ;
   element.value = '';
   const elementValue = parseFloat(elementString);
   return elementValue;
}
function setElementValue(inputId, value){
   const element = document.getElementById(inputId);
   element.innerText = value;
}
// Triangle area calculator
function triangleAreaCalculator() {
   const triangleBase = gettingInputElement('triangle-base');
   const triangleHeight = gettingInputElement('triangle-height');
   const triangleArea = 0.5 * triangleBase * triangleHeight;
   setElementValue('triangle-area', triangleArea);
}

// rectangle area calculator
function rectangleAreaCalculator() {
   const rectangleWidth = gettingInputElement('rectangle-width');
   const rectangleLength = gettingInputElement('rectangle-length');
   const rectangleArea = rectangleWidth * rectangleLength;
   setElementValue('rectangle-area', rectangleArea);
}

// parallelogram area calculator
function parallelogramAreaCalculator() {
   const parallelogramBase = gettingInputElement('parallelogram-base');
   const parallelogramHeight = gettingInputElement('parallelogram-height');
   const parallelogramArea = parallelogramBase * parallelogramHeight;
   setElementValue('parallelogram-area', parallelogramArea);
}

// rhombus area calculator
function rhombusAreaCalculator() {
   const rhombusD1 = gettingInputElement('rhombus-d1');
   const rhombusD2 = gettingInputElement('rhombus-d2');
   const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
   setElementValue('rhombus-area', rhombusArea);
}

// pentagon area calculator
function pentagonAreaCalculator() {
   const pentagonP = gettingInputElement('pentagon-p');
   const pentagonB = gettingInputElement('pentagon-b');
   const pentagonArea = 0.5 * pentagonP * pentagonB;
   setElementValue('pentagon-area', pentagonArea);
}

// ellipse area calculator
function ellipseAreaCalculator() {
   const ellipseA = gettingInputElement('ellipse-a');
   const ellipseB = gettingInputElement('ellipse-b');
   const ellipseArea = (Math.PI * ellipseA * ellipseB).toFixed(4);
   setElementValue('ellipse-area', ellipseArea);
}