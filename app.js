// Declarando Variavel
amigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;  // Seleciona o valor do input
    let listaDeAmigos = document.getElementById("listaAmigos");  // Seleciona a lista no HTML
    let li = document.createElement("li");  // Cria os elementos que vão ser colocados na lista
    nomeAmigo = nomeAmigo.replace(/[^a-zA-ZáéíóúãõâêîôûàèìòùäëïöüçÇ ]/g, ''); // Remove caracteres não permitidos

    resultado.innerHTML = ''

    
    if (!nomeAmigo || nomeAmigo.trim() === '' ) {  // Verifica se o nome é vazio ou contém apenas caracteres inválidos
        limparNome();
        alert('Por favor, insira um nome válido.');
        return;
    } else {
            // Resumo do if 1: o loop "for" vai passar por toda lista "amigos" e ver se o nome inserido no input já existe na lista, se ele existir, a variável "existe" é ativada

        if (nomeAmigo ) {  
            let existe = false;  
            for (let i = 0; i < amigos.length; i++) {
                if (amigos[i] === nomeAmigo) {
                existe = true;  
                break; 
                }
            }
        // Resumo if 2: Se a váriavel "existe" estiver diferente do valor original (false), o nome colocado no input será adicionado a lista  
            if (!existe) {
            amigos.push(nomeAmigo);  
            li.textContent = nomeAmigo;  
            listaDeAmigos.appendChild(li);   
            } else {
            alert('Este amigo já está na lista');
             }
        } else {
        console.log('Nome vazio');
        alert('Por favor, insira um nome');
        }

    limparNome();  
    console.log(amigos);  
    }


}

function sortearAmigo() {
    let amigoSorteado = parseInt(Math.random() * amigos.length); // Sorteia um número baseado na quantidade de nomes colocados anteriormente
    let resultado = document.getElementById('resultado'); // Seleciona a lista no HTML
    let li2 = document.createElement('li'); // Cria os elementos que vão ser colocados na lista
    let textoResultado = `Seu amigo secreto é ${amigos[amigoSorteado]}`; // Texto base do resultado do sorteio

    // Se a lista de amigos estiver vazia, ativará o alerta , se não, vai colocar o resultado com a mensagem na tela
    if (amigos.length < 2) {
        alert('Insira pelo menos dois amigos para a lista!')
    } else {
        li2.textContent = textoResultado;
        resultado.appendChild(li2);
        console.log(amigoSorteado)
    }

    limparLista();
} 

// Limpa a lista para novos nomes serem adicionados!!

function limparLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';
    amigos.length = 0;
}