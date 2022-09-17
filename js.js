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
    "Refrigerante": {
        "quantidade": 0,
        "valor": 9,
        "total": "R$ 0,00",
        "descrição": "refrigerante",
    },
    "Milkshake": {
        "quantidade": 0,
        "valor": 11,
        "total": "R$ 0,00",
        "descrição": "milk sheikao",
    },
    "Energetico": {
        "quantidade": 0,
        "valor": 11,
        "total": "R$ 0,00",
        "descrição": "Energetico",
    },
    "Agua": {
        "quantidade": 0,
        "valor": 30,
        "total": "R$ 0,00",
        "descrição": "Energetico",
    },
};

let totalDeItens = 0;
let doublevegan = " ";
let batatafrita = " ";
let milk = " ";
let doublechiquem = " ";
let picanhaespecial = " ";
valortot = 0;
valoragua = 0;
valorenerge = 0;
valormilk=0;
valorrefri=0;
valorbatata = 0;
valorvegan = 0;
valorpicanha = 0;
valordoublechiquem = 0;
function adicionaItem(item){
    carrinhoDeCompras[item].quantidade += 1;
    totalDeItens += 1;
    document.getElementById("totalDeItens").innerText = totalDeItens;
    console.log(carrinhoDeCompras);
    if(carrinhoDeCompras["Double Chicken"].quantidade > 0){
    
        doublechiquem = "  Double Chicken";
        document.getElementById("doublechiquem").innerText = doublechiquem;
        console.log(doublechiquem);

        valordoublechiquem = carrinhoDeCompras["Double Chicken"].quantidade * carrinhoDeCompras["Double Chicken"].valor ;
        document.getElementById("valordoublechiquem").innerText = valordoublechiquem;
        console.log(valordoublechiquem);
    }

    if(carrinhoDeCompras["Picanha Especial"].quantidade > 0){
    
            picanhaespecial = "Picanha Especial";
            document.getElementById("picanhaespecial").innerText = picanhaespecial;
            console.log(picanhaespecial);

            valorpicanha = carrinhoDeCompras["Picanha Especial"].quantidade * carrinhoDeCompras["Picanha Especial"].valor ;
            document.getElementById("valorpicanha").innerText = valorpicanha;
            console.log(valorpicanha);
        }
        if(carrinhoDeCompras["Double vegan"].quantidade > 0){
    
            doublevegan = "Double vegan";
            document.getElementById("doublevegan").innerText = doublevegan;
            console.log(doublevegan);

            valorvegan = carrinhoDeCompras["Double vegan"].quantidade * carrinhoDeCompras["Double vegan"].valor ;
            document.getElementById("valorvegan").innerText = valorvegan;
            console.log(valorvegan);
        }
        if(carrinhoDeCompras["Batata Frita"].quantidade > 0){
    
            batatafrita = "Batata Frita";
            document.getElementById("batatafrita").innerText = batatafrita;
            console.log(batatafrita);

            valorbatata = carrinhoDeCompras["Batata Frita"].quantidade * carrinhoDeCompras["Batata Frita"].valor ;
            document.getElementById("valorbatata").innerText = valorbatata;
            console.log(valorbatata);
        }
        if(carrinhoDeCompras["Refrigerante"].quantidade > 0){
    
            refrigerante = "Refrigerante";
            document.getElementById("refrigerante").innerText = refrigerante;
            console.log(refrigerante);

            valorrefri = carrinhoDeCompras["Refrigerante"].quantidade * carrinhoDeCompras["Refrigerante"].valor ;
            document.getElementById("valorrefri").innerText = valorrefri;
            console.log(valorrefri);
        }
        if(carrinhoDeCompras["Milkshake"].quantidade > 0){
    
            milk = "Milk-shake";
            document.getElementById("milk").innerText = milk;
            console.log(milk);

            valormilk = carrinhoDeCompras["Milkshake"].quantidade * carrinhoDeCompras["Milkshake"].valor ;
            document.getElementById("valormilk").innerText = valormilk;
            console.log(valormilk);
        }
        if(carrinhoDeCompras["Energetico"].quantidade > 0){
    
            energe = "Energetico";
            document.getElementById("energe").innerText = energe;
            console.log(energe);

            valorenerge = carrinhoDeCompras["Energetico"].quantidade * carrinhoDeCompras["Energetico"].valor ;
            document.getElementById("valorenerge").innerText = valorenerge;
            console.log(valorenerge);
        }
        if(carrinhoDeCompras["Agua"].quantidade > 0){
    
            agua = "Agua";
            document.getElementById("agua").innerText = agua;
            console.log(agua);

            valoragua = carrinhoDeCompras["Agua"].quantidade * carrinhoDeCompras["Agua"].valor ;
            document.getElementById("valoragua").innerText = valoragua;
            console.log(valoragua);
        }



        valortot =  valoragua + valorenerge + valormilk + valorrefri + valorbatata + valorvegan + valorpicanha + valordoublechiquem ;
        document.getElementById("valortot").innerText = valortot;
        console.log(valortot);


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