let carro={
    rodas: 4,portas: 4, cor: "vermelho", motor: "V8", volante: "couro preto tipo cobra", andar: function(){
        console.log("O carro está andando");
    },
    buzinar: function(){
        console.log("BIIII BIIIII");
    }
};
console.log(`A cor do carro é ${carro.cor} e o motor é ${carro.motor}`);
carro.cor="Verde";
console.log(`A cor do carro é ${carro.cor} e o motor é ${carro.motor}`);