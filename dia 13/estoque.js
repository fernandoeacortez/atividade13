class Estoque {
    constructor() {
        this.produtos = {}; // Armazena os produtos e suas quantidades
    }

    adicionarProduto(nome, quantidade) {
        if (quantidade < 0) {
            console.error("A quantidade não pode ser negativa.");
            return;
        }
        
        if (!this.produtos[nome]) {
            this.produtos[nome] = 0;
        }
        
        this.produtos[nome] += quantidade;
        console.log(`${quantidade} unidades de ${nome} adicionadas. Total: ${this.produtos[nome]}`);
    }

    removerProduto(nome, quantidade) {
        try {
            if (!this.produtos[nome]) {
                throw new Error("Produto não encontrado no estoque.");
            }
            
            if (quantidade < 0) {
                throw new Error("A quantidade a ser removida não pode ser negativa.");
            }
            
            if (this.produtos[nome] < quantidade) {
                throw new Error("Quantidade insuficiente no estoque.");
            }
            
            this.produtos[nome] -= quantidade;
            console.log(`${quantidade} unidades de ${nome} removidas. Restante: ${this.produtos[nome]}`);
        } catch (error) {
            console.error(`Erro ao remover produto: ${error.message}`);
        }
    }

    mostrarEstoque() {
        console.log("Estoque atual:", this.produtos);
    }
}

// Exemplo de uso
const estoque = new Estoque();
estoque.adicionarProduto("Arroz", 10);
estoque.removerProduto("Arroz", 5);
estoque.removerProduto("Arroz", 10); // Erro: Quantidade insuficiente
estoque.mostrarEstoque();
