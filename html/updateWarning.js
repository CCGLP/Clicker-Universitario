var versionActual = "0.01"

$(document).ready(function(){

  console.log("Hola, estoy funcionando")
  if (localStorage.getItem("Update") == versionActual){
    swal("Tienes la ultima versión, gracias por testear! :) ")
  }

  else{
    localStorage.clear();
    localStorage.setItem("Update", versionActual);
    location.reload()
  }
})
