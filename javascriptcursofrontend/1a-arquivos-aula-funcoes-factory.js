// Factory - Design Pattern (padrão de design ou padrão de projetos)
// Padrão de projetos -> forma comum de resolver problemas

const produto1 = {
  nome: "Notebook",
  preco: 1200
}

const produto2 = {
  nome: "Notebook",
  preco: 1200
}

const ProdutoFactory = function(nome, preco){
  
  return {
    nome,
    preco,
    recuperarAvaliacoes(){
      console.log(`Avaliações para ${this.nome}`)
    }
  }
  
}

const produto = ProdutoFactory("Notebook", 1200)
produto.recuperarAvaliacoes()

const produtoNovo = ProdutoFactory("Celular", 1200)
console.log(produtoNovo)










