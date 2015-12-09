var versionActual = "0.0900" //CODENAME NUKESAM

$(document).ready(function(){


  if (localStorage.getItem("Update") == versionActual){
    swal("Tienes la ultima versión, gracias por testear! :) ")
  }

  else{
    localStorage.clear();
    localStorage.setItem("Update", versionActual);
    location.reload()
  }
})
