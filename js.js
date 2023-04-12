function executarSoma() {
    // Pegar valores dos inputs
    const primeiroValor = parseFloat(document.getElementById("primeiroInput").value);
    const segundoValor = parseFloat(document.getElementById("segundoInput").value);
  
    // Verifica se os valores são válidos
    if (isNaN(primeiroValor) || isNaN(segundoValor)) {
      alert("Por favor, preencha os dois valores para realizar a soma.");
      return;
    }
  
    // Realiza a soma dos valores e exibe o resultado
    const resultado = primeiroValor + segundoValor;
    document.getElementById("resultadoSoma").textContent = resultado;
  }

  function executarPokemon() {
    const idPokemon = document.getElementById("idPokemon").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then(response => response.json())
      .then(data => {
        const nomePokemon = data.name;
        const imagemPokemon = data.sprites.front_default;
        
        document.getElementById("nomePokemon").textContent = nomePokemon;
        document.getElementById("imagemPokemon").src = imagemPokemon;
      })
      .catch(error => {
        console.error(error);
      });
  }