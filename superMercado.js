var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome-produto]').value;
    var precoProduto = document.querySelector('input[name=valor-produto]').value;

    itens.push({
        nome: nomeProduto,
        valor: precoProduto
    });
    
    /*<div class="lista-produtos-single">
        <h3>RedBull</h3>
        <h3 class="price-produto"><span>R$ 20,00</span></h3>
    </div>*/
    
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML="";

    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= `<div class="lista-produtos-single">
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$ ${val.valor}</span></h3>
        </div>`;
    })

    soma = soma.toFixed(2)
    document.querySelector('input[name=nome-produto]').value = '';
    document.querySelector('input[name=valor-produto]').value = '';

    let elementoSoma = document.querySelector('.soma-produto h1')
    elementoSoma.innerHTML = `Total: R$ ${soma}`
    
});


    document.querySelector('button')
    .addEventListener('click', ()=>{
        itens = [];

        document.querySelector('.lista-produtos').innerHTML = '';
        document.querySelector('.soma-produto h1').innerHTML = 'Total: R$ 0,00';
    })