var versionActual = "0.01"

$(document).ready(function(){

  console.log("Hola, estoy funcionando")
  if (localStorage.getItem("Update") == versionActual){
    swal("Tienes la ultima versión, gracias por testear! :) (Cada vez que se actualice el juego se reseteara a 0)")
  }

  else{
    localStorage.clear();
    localStorage.setItem("Update", versionActual);
    location.reload()
  }
})
