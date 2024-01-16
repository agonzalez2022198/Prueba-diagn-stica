
var palabras = ["Leonel Pepsi", "Cristiano Frionaldo", "Pele", "Pepe", "Neymar", "De Bruyne", "Ronaldo Panzario", "Luis Suarez", "Jordi Alba"];
var oculta = [];

function Iniciar(){
    var encontrar = (Math.random() * 3).toFixed(0);
    console.log(encontrar);

    console.log(palabras[encontrar]);

    var encontrada = (palabras[encontrar]);

    var spaceCount = (encontrada.split("").length-1);
    var spaceCount2 = spaceCount + 1;
    console.log(spaceCount2);

    for (var i = 0; i < spaceCount2; i++) {
        oculta[i] = "_ ";

        
    }
     var final = oculta.join('');

     document.getElementById('guiones').textContent = final;

     document.getElementById('adivinar').innerHTML =+ "<input type="+"text"+">";
    

}