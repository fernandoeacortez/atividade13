class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    mostrarDetalhes() {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`);
    }
}

// Exemplo de uso
const meuCarro = new Carro("Toyota Corolla", "Preto", 2022);
meuCarro.mostrarDetalhes();