class Animal {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    fazerSom() {
      const sons = {
        vaca: "Muuu",
        cachorro: "Au au",
        gato: "Miau",
        elefante: "Brrrr",
      };
      
      return sons[this.especie.toLowerCase()] || "Som não identificado";
    }
  }
  
  // Exemplos de uso
  const vaca = new Animal("Mimosa", "vaca", 5);
  console.log(vaca.fazerSom()); // Saída: Muuu
  
  const cachorro = new Animal("Rex", "cachorro", 3);
  console.log(cachorro.fazerSom()); // Saída: Au au
  
  const gato = new Animal("Whiskers", "gato", 2);
  console.log(gato.fazerSom()); // Saída: Miau
  
  const elefante = new Animal("Dumbo", "elefante", 10);
  console.log(elefante.fazerSom()); // Saída: Brrrr
  
  const desconhecido = new Animal("Criatura", "dragão", 100);
  console.log(desconhecido.fazerSom()); // Saída: Som não identificado
  