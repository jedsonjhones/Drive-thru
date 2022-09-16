function abrir(){
    document.getElementById('popup-carrinho').style.visibility = 'visible';
}
function fechar(){
    document.getElementById('popup-carrinho').style.visibility = 'hidden';
}
const carrinhoDeCompras  = {
    "Double Chicken": {
        "quantidade": 0,
        "valor": 20,
        "total": "R$ 0,00",
        "descrição": "Filé de frango 2x, cheddar 2x, cebola agridoce, molho especial, e pão de milho",
        
    },
   
    "Picanha Especial": {
        "quantidade": 0,
        "valor": 22,
        "total": "R$ 0,00",
        "descrição": "Filé de frango 2x, cheddar 2x, cebola agridoce, molho especial, e pão de milho",
    },
    "Double vegan": {
        "quantidade": 0,
        "valor": 18,
        "total": "R$ 0,00",
        "descrição": "Filé de frango 2x, cheddar 2x, cebola agridoce, molho especial, e pão de milho",
    },
    "Batata Frita": {
        "quantidade": 0,
        "valor": 10,
        "total": "R$ 0,00",
        "descrição": "Filé de frango 2x, cheddar 2x, cebola agridoce, molho especial, e pão de milho",
    },
};

let totalDeItens = 0;

let doublechiquem = " ";
let picanhaespecial = " ";
function adicionaItem(item){
    carrinhoDeCompras[item].quantidade += 1;
    totalDeItens += 1;
    document.getElementById("totalDeItens").innerText = totalDeItens;
    console.log(carrinhoDeCompras);
    if(carrinhoDeCompras["Double Chicken"].quantidade > 0){
    
        doublechiquem = "  Double Chicken";
        document.getElementById("doublechiquem").innerText = doublechiquem;
        console.log(doublechiquem);
    }

    if(carrinhoDeCompras["Picanha Especial"].quantidade > 0){
    
            picanhaespecial = "Picanha Especial";
            document.getElementById("picanhaespecial").innerText = picanhaespecial;
            console.log(picanhaespecial);
        }

}

function removeItem(item){
    carrinhoDeCompras[item].quantidade -= 1;
    totalDeItens -= 1;
    document.getElementById("totalDeItens").innerText = totalDeItens;
    console.log(carrinhoDeCompras);
}
/*
function adicionaDoubleChiquem(item){
    if(carrinhoDeCompras["Double Chicken"].quantidade > 0){
    
    doublechiquem = "Double Chicken";
    document.getElementById("doublechiquem").innerText = doublechiquem;
    console.log(doublechiquem);}

}
*/