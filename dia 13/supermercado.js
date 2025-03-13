let compraSupermercado=[6.99,9.50,23.50,2.00,5.99];

function adicionarProdutosCompra (compraSupermercado , novoProduto){
    compraSupermercado.push(novoProduto);
    return compraSupermercado;
}

function removerProdutoCompraPop (compraSupermercado){
    compraSupermercado.pop();
    return compraSupermercado;
}

function removerProdutoCompraFilter(compraSupermercado , valorRemocao){
    let compraSupermercadoRemovido=compraSupermercado.filter(produto => {
        return produto !== valorRemocao;
    });
    return compraSupermercadoRemovido;
}

function valorCompra (compraSupermercado){
    let valorTotal=0;
    compraSupermercado.forEach(produto => {
        valorTotal+=produto;   
    });
    return valorTotal;
}
adicionarProdutosCompra(compraSupermercado , 7.00);
console.log(compraSupermercado);
adicionarProdutosCompra(compraSupermercado , 21.50);
console.log(compraSupermercado);
removerProdutoCompraPop(compraSupermercado);
console.log(compraSupermercado);

console.log(removerProdutoCompraFilter(compraSupermercado,9.50));
console.log(valorCompra(compraSupermercado));
