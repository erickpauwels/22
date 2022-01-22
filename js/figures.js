/*---------- Square ------------ */

const calculateSquarePerimeter = () =>{
    let side = squareSide.value; 
    const squarePerimeter = side * 4;
    squareResult.textContent = `Perimeter: ${squarePerimeter} cm`;
}

const calculateSquareArea = ()=> {
    let side = squareSide.value;
    const squareArea = (side) => side * side;
    squareResult.textContent = `Area: ${squareArea(side)} cm2`;
}

/*------------ Triangulo------------ */ 

formIsosceles.style.display = "none";

//Checkbox

function isosceles() {
    if(checkbox.checked){
        formIsosceles.style.display = "block";
        triangleForm.style.display = "none";
    }else {
            triangleForm.style.display = "block";
            formIsosceles.style.display = "none";
        }
}

//Perimeter
const trianglePerimeter = () => {
    let base = Number(triangleBase.value);
    let side1 = Number(triangleSide1.value);
    let side2 = Number(triangleSide2.value);
    if (side1 == false || side2 == false || base == false) {
        triangleResult.textContent = `Falta un dato`;
    }else {   
    const perimeter = side1 + side2 + base;
    triangleResult.textContent = `Perimetro del Triangulo ${perimeter} cm`;
    }
}

//Area
function calculateTriangleArea() {
    let base = Number(triangleBase.value);
    let height = Number(normalHeight.value);
    if (height == false || base == false) {
        triangleResult.textContent = `Falta un dato`;
    }else {   
        const triangleArea = (base, height)=>(base * height)/2;
        triangleResult.textContent = `Area del Triangulo ${triangleArea(base, height)} cm2`;
    }
}


/*-------- Triangulo Isoceles------ */ 

//Altura
const heightCalculator = () => {
    let base = Number(baseIsosceles.value);
    let sides = Number(equalSides.value);
    if (sides == false || base == false) {
        isoscelesResult.textContent = `Falta un dato`;
         }else {
        let height = Math.sqrt(sides**2-(base**2)/4);
        triangleHeight.value = height; 
} }

//Perimeter
const isoscelesPerimeter = () => {
    let base = Number(baseIsosceles.value);
    let sides = Number(equalSides.value);
    if (sides == false|| base == false) {
        isoscelesResult.textContent = `Falta un dato`;
    }else {   
    const perimeter = (sides*2) + base;
    isoscelesResult.textContent = `Perimetro del Triangulo Isoceles ${perimeter} cm`;
    }
}

//Area
function isoscelesArea() {
    let base = Number(baseIsosceles.value);
    let height = Number(triangleHeight.value);
    if (height == false || base == false) {
        isoscelesResult.textContent = `Falta un dato`;
    }else {   
        const triangleArea = (base, height)=>(base * height)/2;
        console.log(`Area del Triangulo ${triangleArea(base, height)} cm2`);
        isoscelesResult.textContent = `Area del Triangulo ${triangleArea(base, height)} cm2`;

    }  
}

/*---------------- Circulo-------------------------------- */

const pi = Math.PI;

//Diametro
 const diameter = () =>{
     let radio = Number(radioValue.value);
     const diameterCircle = (radio) => radio *2;
     circleResult.textContent = `Diametro es ${diameterCircle(radio)}`;
}

//Circunferencia
function circunference () {
    let radio = Number(radioValue.value);
    const circleCircunference = (radio) => pi*2*radio;
    circleResult.textContent = `La circunferencia es ${circleCircunference(radio)}`;
}

//Area
function circleArea(){
    let radio = Number(radioValue.value);
    var area = (radio*radio)*pi;
    circleResult.textContent = `El area es ${area}`;
}


