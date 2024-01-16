
var palabras = ["Leonel Pepsi", "Cristiano Frionaldo", "Pele", "Pepe", "Neymar", "De Bruyne", "Ronaldo Panzario", "Luis Suarez", "Jordi Alba"];

function Iniciar(){
    var encontrar = (Math.random() * 3).toFixed(0);
    console.log(encontrar);

    console.log(palabras[encontrar]);

    var encontrada = (palabras[encontrar]);

    var spaceCount = (encontrada.split("").length-1);
    var spaceCount2 = spaceCount + 1;
    console.log(spaceCount2);

    

}