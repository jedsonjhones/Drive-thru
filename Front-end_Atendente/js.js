
function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "dados.json");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>'; 
        trHTML += '<td>'+object['id']+'</td>';
        trHTML += '<td>'+object['itens']+'</td>';
        trHTML += '<td>'+object['valor']+'</td>';
        trHTML += '<td><select class="form-select"> aria-label="Default select example"><option selected>Alterar status</option><option value="1"  class="p-3 mb-2 bg-success text-white">Pronto</option><option value="2" class="p-3 mb-2 bg-light text-dark">Em preparo</option><option value="3" class="p-3 mb-2 bg-danger text-white">Pedido recebido</option></select>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  };
}


loadTable();