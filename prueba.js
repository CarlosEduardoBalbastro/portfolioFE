var mensje = "Hola Mundo desde typescipt";
console.log(mensje);
var mensaje2 = "me segundo mensaje para transpirar";
console.log(mensaje2);
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
var colorAuto = Color.Blanco;
console.log(colorAuto);
