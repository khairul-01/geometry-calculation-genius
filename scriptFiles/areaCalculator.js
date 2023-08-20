function gettingInputElement(inputId) {
   const element = document.getElementById(inputId);
   const elementString = element.value ;
   element.value = '';
   const elementValue = parseFloat(elementString);
   return elementValue;
   // if ((typeof elementValue === 'number') && (isNaN(elementValue) === false)) {
   // }
   // else{
   //    alert('Please insert valid number');
   // }
}
function setElementValue(inputId, value){
   const element = document.getElementById(inputId);
   if ((typeof value === 'number') && (isNaN(value) === false)) {
      return element.innerText = value;
   }
   else{
      alert('Please insert valid number');
   } 
}
// Triangle area calculator
function triangleAreaCalculator() {
   const triangleBase = gettingInputElement('triangle-base');
   const triangleHeight = gettingInputElement('triangle-height');
   const triangleArea = 0.5 * triangleBase * triangleHeight;
   setElementValue('triangle-area', triangleArea);
   addToCalculatorLog('Triangle', triangleArea);
   // if ((typeof triangleArea === 'number') && (isNaN(triangleArea) === false)) {
   //    setElementValue('triangle-area', triangleArea);
   // }
   // else{
   //    alert('Please insert valid number');
   // } 
}

// rectangle area calculator
function rectangleAreaCalculator() {
   const rectangleWidth = gettingInputElement('rectangle-width');
   const rectangleLength = gettingInputElement('rectangle-length');
   const rectangleArea = rectangleWidth * rectangleLength;
   setElementValue('rectangle-area', rectangleArea);
   addToCalculatorLog('rectangle', rectangleArea);
}

// parallelogram area calculator
function parallelogramAreaCalculator() {
   const parallelogramBase = gettingInputElement('parallelogram-base');
   const parallelogramHeight = gettingInputElement('parallelogram-height');
   const parallelogramArea = parallelogramBase * parallelogramHeight;
   setElementValue('parallelogram-area', parallelogramArea);
   addToCalculatorLog('Parallelogram', parallelogramArea);
}

// rhombus area calculator
function rhombusAreaCalculator() {
   const rhombusD1 = gettingInputElement('rhombus-d1');
   const rhombusD2 = gettingInputElement('rhombus-d2');
   const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
   setElementValue('rhombus-area', rhombusArea);
   addToCalculatorLog('Rhombus', rhombusArea);
}

// pentagon area calculator
function pentagonAreaCalculator() {
   const pentagonP = gettingInputElement('pentagon-p');
   const pentagonB = gettingInputElement('pentagon-b');
   const pentagonArea = 0.5 * pentagonP * pentagonB;
   setElementValue('pentagon-area', pentagonArea);
   addToCalculatorLog('Pentagon', pentagonArea);
}

// ellipse area calculator
function ellipseAreaCalculator() {
   const ellipseA = gettingInputElement('ellipse-a');
   const ellipseB = gettingInputElement('ellipse-b');
   const ellipseArea = parseFloat((Math.PI * ellipseA * ellipseB).toFixed(3));
   setElementValue('ellipse-area', ellipseArea);
   addToCalculatorLog('Ellipse', ellipseArea);
}

// add results log to area calculator
/**
 * create an element you want to add
 * if needed add some class
 * set inner html. it could be dynamic Template string
 * append the created element as child of parent element
 */
function addToCalculatorLog(areaType, area) {
   console.log(areaType+' '+area);
   const areaLog = document.getElementById('area-log');
   const count = areaLog.childElementCount + 1;
   const element = document.createElement('p')
   element.classList.add('my-3')
   element.innerHTML = 
   `${count} ${areaType} ${area} cm<sup>2</sup>  <button class="btn btn-success btn-sm">Convert</button>`;
   areaLog.appendChild(element);
}