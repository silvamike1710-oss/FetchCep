
//ouvir evento para sair do input
//checar se numero no input é valido
//fazer busca no api

document.getElementById("cep").addEventListener("blur", (evento)=>{
    const elemento = evento.target;
    const cepinformado = elemento.value;

    if(!(cepinformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
    .then(response => response.json())
    .then(data => {

            if(!data.erro){

                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('complemento').value = data.complemento;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('uf').value = data.uf;
                document.getElementById('estado').value = data.estado;

            }else {
                alert("CEP não encontrado.")
            }

    })
    .catch (error => console.error("erro ao validar ", error));

})

