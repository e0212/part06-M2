// renderizar la lista de amigos - GET DE TODOS LOS AMIGOS
function getFriends(){ 
var norender = document.querySelector("#lista");
norender.innerHTML = " ";
let img = document.getElementsByTagName("img");// devuelve un array
if(img.length>0){
    img[0].remove() // tambien puede ser display none
}
$.get("http://localhost:5000/amigos", function(data){
    data.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo.name;
        $("#lista").append(li);
    });
})
}


$("#boton").click(getFriends)
    
// BUSCAR UN AMIGO POR ID
$("#search").click(function(){
    let id = document.getElementById("input").value;
    $.get(`http://localhost:5000/amigos/${id}`, function(data){
        document.getElementById("amigo").textContent = data.name;
    })
    $("#input").val(" ") // borra cuando muestra
})

// BORRAR AMIGO
$("#delete").click(function(){
    let id = document.getElementById('inputDelete').value;

    $.ajax({
        type: 'DELETE',
        url: `http://localhost:5000/amigos/${id}`,
        success: () =>{
            alert("amigo borrado");
            getFriends()
        }
    })
    $('#inputDelete').val("")
})