class Carro{
    constructor(rodas,portas,volante,cor,motor){
        this.rodas=rodas;
        this.portas=portas;
        this.volante=volante;
        this.cor=cor;
        this.motor=motor;
    }
    buzinar(){
        console.log("BIIII BIIII BIIII AAA");
        
    }
}

let carroJoao=new Carro(4,4,"preto de couro igual cobra","vermelho", "V8");
let carroPatricia=new Carro(4,2,"Rosa de pom pom bem fofinho","branco","V6");
console.log(`O carro do João tem ${carroJoao.rodas} rodas, ${carroJoao.portas} portas, o volante é ${carroJoao.volante}, a cor do carro é ${carroJoao.cor} e o motor é ${carroJoao.motor}`);

carroJoao.buzinar();