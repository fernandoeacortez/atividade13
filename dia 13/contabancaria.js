class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor do depósito deve ser positivo.");
            }
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${this.saldo.toFixed(2)}`);
        } catch (erro) {
            console.error(`Erro ao depositar: ${erro.message}`);
        }
    }

    sacar(valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor do saque deve ser positivo.");
            }
            if (valor > this.saldo) {
                throw new Error("Saldo insuficiente para o saque.");
            }
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${this.saldo.toFixed(2)}`);
        } catch (erro) {
            console.error(`Erro ao sacar: ${erro.message}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Exemplo de uso:
const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(2000);
minhaConta.sacar(300);
minhaConta.consultarSaldo();