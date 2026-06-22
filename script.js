let carrinho = [];
let total = 0;

function adicionar(produto, preco){

    carrinho.push({
        produto,
        preco
    });

    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho(){

    const lista = document.getElementById("lista-carrinho");

    lista.innerHTML = "";

    carrinho.forEach((item,index) => {

        lista.innerHTML += `
            <div class="item-carrinho">

                <span>
                    ${item.produto} - R$ ${item.preco.toFixed(2)}
                </span>

                <button onclick="remover(${index})">
                    ➖
                </button>

            </div>
        `;
    });

    document.getElementById("total").innerHTML =
    `Total: R$ ${total.toFixed(2)}`;
}

function finalizarPedido(){

    if(carrinho.length === 0){

        alert("Seu carrinho está vazio!");
        return;
    }

    let pedido = "🎮 PEDIDO SHADOW GAMES\n\n";

    carrinho.forEach(item => {

        pedido += `• ${item.produto} - R$ ${item.preco.toFixed(2)}\n`;

    });

    pedido += `\n💰 Total: R$ ${total.toFixed(2)}`;

    navigator.clipboard.writeText(pedido);

    alert(
        "Pedido copiado!\n\nCole a mensagem em um ticket no Discord."
    );

    window.open(
        "https://discord.gg/7HT3gyEJxp",
        "_blank"
    );
}
