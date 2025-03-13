class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcularPrecoComDesconto() {
        try {
            if (this.desconto > 100) {
                throw new Error("O desconto não pode ser maior que 100%.");
            }
            let precoFinal = this.preco * (1 - this.desconto / 100);
            return precoFinal.toFixed(2);
        } catch (erro) {
            console.error(erro.message);
            return null;
        }
    }
}

// Exemplo de uso
const produto1 = new Produto("Notebook", 3000, 20);
console.log(`Preço com desconto: R$ ${produto1.calcularPrecoComDesconto()}`);

const produto2 = new Produto("Celular", 2000, 110);
console.log(`Preço com desconto: R$ ${produto2.calcularPrecoComDesconto()}`);