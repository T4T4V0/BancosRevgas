function buscarBanco() {
    const codigo = document.getElementById('codigoBanco').value;
    fetch(`http://localhost:5000/bancos/${codigo}`)
        .then(response => response.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `Nome: ${data[1]}`;
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}
