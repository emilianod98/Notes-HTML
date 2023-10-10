// CONST Define variables que NO se pueden REASIGNAR

const variableNumerica1 = 0;                                // No se pueden reasignar
const variableNumerica2 = 21312312;                         // No se pueden reasignar
const variableNumerica3 = 11;                               // No se pueden reasignar
const variableNumerica4 = -600;                             // No se pueden reasignar
const variableNumerica5 = -2;                               // No se pueden reasignar
const variableNumerica6 = -12312312312;                     // No se pueden reasignar
const variableNumerica7 = 2.0;                              // No se pueden reasignar
const variableNumerica8 = 0.2;                              // No se pueden reasignar
const variableNumerica9 = 12312312312.6;                    // No se pueden reasignar

const variableString1 = "Esta es una variable String";      // No se pueden reasignar
const variableString2 = "Esta es otra variable String";     // No se pueden reasignar
const variableString3 = "Aca, puedo escribir un texto!";    // No se pueden reasignar
const variableString4 = "Uno";                              // No se pueden reasignar
const variableString5 = "23";                               // No se pueden reasignar
const variableString6 = "24 + 23";                          // No se pueden reasignar
const variableString7 = "Hola a todos";                     // No se pueden reasignar
const variableString8 = ".,.,.asdas,.asd,asd.as";           // No se pueden reasignar
const variableString9 = "Practica";                         // No se pueden reasignar

const variableTrue = true; // Verdadero - Si                // No se pueden reasignar
const variableFalse = false; // Falso - No                  // No se pueden reasignar



// Salida por consola:
console.log("Las variables definidas por 'CONST', No se pueden REASIGNAR");
console.log(variableNumerica5);
console.log(variableNumerica1);
console.log(variableString2);
console.log(variableString5);
console.log(variableFalse);
console.log(variableTrue);




// VAR - LET Define variables que SI se pueden REASIGNAR

var variableReasignable1 = 123;
var variableReasignable2 = 1.0;

let variableReasignable3 = 23;
let variableReasignable4 = 2.0;

var variableReasignable5 = "123";
var variableReasignable6 = "Hola";

let variableReasignable7 = "999";
let variableReasignable8 = "Mundo";

var variableReasignable9 = true;


// Salida por consola:
console.log("Las variables definidas por 'LET o VAR', SI se pueden REASIGNAR");
console.log(variableReasignable1); // Variable Numerica
console.log(variableReasignable8); // Variable String
console.log(variableReasignable9); // Variable Booleana


variableReasignable1 = false;
variableReasignable8 = 45;
variableReasignable9 = "Ahora soy un String!"


console.log("Remplace los valores de las variables");
console.log(variableReasignable1); // Cambio a un Tipo Booleano
console.log(variableReasignable8); // Cambio a un Tipo Numerico
console.log(variableReasignable9); // Cambio a un Tipo String