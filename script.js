const listaCores = document.querySelectorAll('.item');

document.querySelector('#deleta').addEventListener('click', deletaItens);
document.querySelector('#reseta').addEventListener('click', resetaItens);

function deletaItens(){
    listaCores.forEach(element => {
        element.innerHTML='';
    })
}

function resetaItens(){
    window.location.reload();
}