

if (localStorage.getItem ("save") == null){

  /*Vars principales/globales/algo */
  var banco = 0
  var dps= 0
  var lamiticai = 0
  var valorUnidades = 0
  var constanteMillon = 1000000
  var valorDps = 0
  //--------------------------------------------------



  /* Array de costes de las casitas */
  var costes = new Array()
  costes[0] = 13
  costes[1] = 100
  costes[2] = 400
  costes[3] = 1000
  costes[4] = 5000
  costes[5] = 40000
  costes[6] = 200000
  costes[7] = 1.667
  costes[8] = 123
  costes[9] = 4000
  costes[10] = 75000
  /*............................................................... */
  // ---------------------ValoresUnidades casitas-------------------//
  var unidadesCasitas = new Array()
  for (lamiticai=0; lamiticai<=6; lamiticai++){
    unidadesCasitas[lamiticai] = 0
  }

  for (lamiticai=7; lamiticai<=10; lamiticai++){
    unidadesCasitas[lamiticai] = 1
  }

  //--------------------------ValoresDPS casitas-----------------------//
  var unidadesDpsCasitas = new Array()
  for(lamiticai=0; lamiticai<=8; lamiticai++){
    unidadesDpsCasitas[lamiticai] = 0
  }
  for (lamiticai=9; lamiticai<=10 ; lamiticai++){
    unidadesDpsCasitas[lamiticai] = 1
  }


  //*******************************************************//
  //****************************Array de upgrades costes*********************
  var costesUpgrades = new Array()
  var costeInicial = 1000;
  var multiplicador = 1;
  for (lamiticai=0; lamiticai<9; lamiticai++){
    costesUpgrades[lamiticai] = costeInicial * multiplicador
    multiplicador *= 2
  }


  //*******************************************************************************
  //***************************Array de unidades costes upgrades*********************//
  var unidadesCostesUpgrades = new Array()
  for (lamiticai=0; lamiticai<20; lamiticai++){
    unidadesCostesUpgrades[lamiticai] = 0
  }
  //****************************************************************************************
  //**************************Array de si existen los divs de los upgrades o no*****
  var existenciaUpgrade = new Array()
  for (lamiticai=0; lamiticai<100; lamiticai++){
    existenciaUpgrade[lamiticai] = true
  }

  //***************************************************************************
  //-------------------------Array de casitas que tengo-------------------------
  var casitas = new Array()
  for (lamiticai = 0;lamiticai<20; lamiticai++){
    casitas[lamiticai] = 0
  }

  //----------------------------------------------------------------------------


  // --------------------------Dps Update array---------------------------------
  var dpsupdate = new Array()
  dpsupdate[0] = 0.1
  dpsupdate[1] = 0.5
  dpsupdate[2] = 4
  dpsupdate[3] = 12
  dpsupdate[4] = 40
  dpsupdate[5] = 100
  dpsupdate[6] = 400
  dpsupdate[7] = 6666
  dpsupdate[8] = 98765
  dpsupdate[9] = 1
  dpsupdate[10] = 10


  //----------------------------------------------------------------------
  var manejoNombres = {
      UNIDADES: {valor:0, nombre:"unidades"},
      MILLONES: {valor:1, nombre:"millones"},
      BILLONES: {valor:2, nombre:"billones"},
      TRILLONES:{valor:3, nombre:"trillones"}

  }

var objeto = {
  dpsupdate,
  manejoNombres,
  casitas,
  unidadesCostesUpgrades,
  banco,
  dps,
  lamiticai,
  valorUnidades,
  constanteMillon,
  valorDps,
  costes,
  unidadesCasitas,
  unidadesDpsCasitas,
  costesUpgrades,
  costeInicial,
  multiplicador,
  existenciaUpgrade,
}

  localStorage.setItem("save", JSON.stringify(objeto))

}
else{ // CARGA DEL LOCALSTORAGE
  var objeto = JSON.parse(localStorage.getItem("save"));
  var dpsupdate= objeto.dpsupdate;
  var manejoNombres = objeto.manejoNombres;
  var casitas = objeto.casitas;
  var unidadesCostesUpgrades = objeto.unidadesCostesUpgrades;
  var banco = objeto.banco;
  var dps = objeto.dps;
  var lamiticai = objeto.lamiticai;
  var valorUnidades = objeto.valorUnidades
  var constanteMillon = objeto.constanteMillon
  var valorDps = objeto.valorDps
  var costes = objeto.costes
  var unidadesCasitas = objeto.unidadesCasitas
  var unidadesDpsCasitas = objeto.unidadesDpsCasitas
  var costesUpgrades = objeto.costesUpgrades
  var costeInicial = objeto.costeInicial
  var multiplicador = objeto.multiplicador
  var existenciaUpgrade = objeto.existenciaUpgrade
  fixSave()
}

function fixSave(){
  var aux = "#numero";
  var aux1 ="#coste"
  var aux2 ="#unidades"
  $("#dps").html(dps.toFixed(1))
  $("#udps").html(manejarNombres(valorDps))
  //CUIDADO SI CAMBIAS EL NUMERO DE GENERADORES EN LO SIGUIENTE
  for (lamiticai =1; lamiticai<=11; lamiticai++){
    $(aux+lamiticai).html(casitas[lamiticai-1])
    $(aux1+lamiticai).html(costes[lamiticai-1].toFixed(1))
    $(aux2+lamiticai).html(manejarNombres(unidadesCasitas[lamiticai-1]))


  }

  limpiarUpgrades()
}
function limpiarUpgrades(){
  for (lamiticai = 0; lamiticai<100; lamiticai++){
    if (!existenciaUpgrade[lamiticai])
      $("#actualizar" + (lamiticai+1)).remove()
  }
}

function manejoActualizar (nupgrade,numero, operacion, aumento){


  if ((banco >= costesUpgrades[nupgrade] &&valorUnidades == unidadesCostesUpgrades[nupgrade]) ||
   (valorUnidades > unidadesCostesUpgrades[nupgrade] && banco * constanteMillon > costesUpgrades[nupgrade]))

  {
    var id = "#actualizar"+(nupgrade+1)
    if (valorUnidades == unidadesCostesUpgrades[nupgrade]){
      banco-= costesUpgrades[nupgrade]
    }
    else if (valorUnidades-unidadesCostesUpgrades[nupgrade] == 1){
      banco-= costesUpgrades[nupgrade] / constanteMillon
    }
    existenciaUpgrade[nupgrade] = false
  $(id).remove() //removemos el id clickado(se recoloca luego)

  if (operacion == 0){ // Multiplicar
    if (valorDps == unidadesDpsCasitas[numero]){
      dps -= dpsupdate[numero] * casitas[numero]
      dpsupdate[numero] *= aumento
      dps += dpsupdate[numero] * casitas[numero]
    }
    else if (valorDps-unidadesDpsCasitas[numero] == 1){
        dps-= dpsupdate[numero]/constanteMillon * casitas[numero]
        dpsupdate[numero]*=aumento
        dps+= dpsupdate[numero]/constanteMillon * casitas[numero]
    }



    fixDps();
    $("#dps").html(dps.toFixed(1))
  }
}

}
function actualizarDps(numero){
  if (unidadesDpsCasitas[numero] == valorDps){
    dps += dpsupdate[numero]

  }
  else if (valorDps- unidadesDpsCasitas[numero] == 1 ){
    dps += dpsupdate[numero] / constanteMillon
  }

  else if (unidadesDpsCasitas[numero] - valorDps ==1){
    dps += dpsupdate[numero] * constanteMillon
  }
  fixDps();
  $("#dps").html(dps.toFixed(1))

}
function fixDps(){
  if (dps > constanteMillon){
    dps /= constanteMillon
    valorDps++
    $("#udps").html(manejarNombres(valorDps))
  }

}
//--------------------------------------------------------
function actualizarBanco(){
  if (banco > constanteMillon){
    banco = banco / constanteMillon
    valorUnidades++
  }
  else if (banco<1 && valorUnidades!=0){
    banco = banco * constanteMillon
    valorUnidades--
  }

  $("#puntostrue").html(Math.round(banco))
  $("title").html(Math.round(banco))
  $("#unidades").html(manejarNombres(valorUnidades))
}
function manejarNombres(un){
  switch (un){
    case 0:
      return manejoNombres.UNIDADES.nombre
      break;
    case 1:
      return manejoNombres.MILLONES.nombre
      break;

    case 2:
      return manejoNombres.BILLONES.nombre
      break;

    case 3:
      return manejarNombres.TRILLONES.nombre
      break
    default:
      return "unknown"
  }

}


function capitalismo(numero){
  if (valorUnidades == unidadesCasitas[numero]){
    banco-= costes[numero]
  }
  else if (valorUnidades-unidadesCasitas[numero] == 1){
    banco-= costes[numero] / constanteMillon
  }


  costes[numero] *= 1.15
  fixUnidadesCasitas(numero)
}

function fixUnidadesCasitas(numero){
  var aux = numero+1
  var aux2 = "#unidades" + aux
  if (costes[numero] > constanteMillon){
    unidadesCasitas[numero]++
    costes[numero] /= constanteMillon
    $(aux2).html(manejarNombres(unidadesCasitas[numero]))
  }


}
function manejoCasitas(numero){
  if ((banco >= costes[numero] &&valorUnidades == unidadesCasitas[numero]) ||
   (valorUnidades > unidadesCasitas[numero] && banco * constanteMillon > costes[numero])) {
    var aux = numero +1;
    var id = "#coste" + aux.toString()
    var idcasitas = "#numero" + aux.toString()
    capitalismo (numero) //Capitalismo ++coste --banco
    casitas[numero]++
    $(idcasitas).html(casitas[numero])

    actualizarDps(numero)
    $(id).html(costes[numero].toFixed(1))
    actualizarBanco()
  }
}

function mujeres(numero){
  if (casitas[numero]<50){
    manejoCasitas(numero)
    $("#filtro").css("opacity", casitas[3]*0.01 )
  }
}


function reset(){
  localStorage.clear()
  location.reload()

}

//Manejo del boton de reset
$("#reset").on("click",function(){
  reset();
})
//************************

//Manejo del boton de save
$("#save").on("click",function(){
  autoSave();
  swal("Has guardado la partida! :)")
})
//*****************************

//Manejo del click de la imagen
$("#ardilla").on("click", function(){
  banco++
  actualizarBanco()
})
//************************************************************

//Manejo de los clicks en las casitas
$("#update1").on("click",function(){
  manejoCasitas(0)
})


$("#update2").on("click",function(){
  manejoCasitas(1)

})

$("#update3").on("click", function(){
  manejoCasitas(2)
})

$("#update4").on("click",function(){
  mujeres(3)
})

$("#update5").on("click",function(){
  manejoCasitas(4)
})

$("#update6").on("click", function(){
  manejoCasitas(5)
})

$("#update7").on("click", function(){
  manejoCasitas(6)
})
$("#update8").on("click", function(){
  manejoCasitas(7)
})
$("#update9").on("click", function(){
  manejoCasitas(8)
})
$("#update10").on("click", function(){
  manejoCasitas(9)
})
$("#update11").on("click", function(){
  manejoCasitas(10)
})
//*******************************************

//Manejo de clicks en los updates
$("#actualizar1").on("click", function(){
  manejoActualizar(0,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar2").on("click", function(){
  manejoActualizar(1,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar3").on("click", function(){
  manejoActualizar(2,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar4").on("click", function(){
  manejoActualizar(3,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar5").on("click", function(){
  manejoActualizar(4,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar6").on("click", function(){
  manejoActualizar(5,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar7").on("click", function(){
  manejoActualizar(6,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar8").on("click", function(){
  manejoActualizar(7,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar9").on("click", function(){
  manejoActualizar(8,0,0,2) //Numero de upgrade. Numero de opción. Aumento
})


//************************************************
//Manejo de Skins
$("#esne").on("click",function(){
  $("#ardilla").attr("src", "esne.png")
  $(".campo").css("background-color", "red")
  $(".update").css("background-color","red")
  $(".sep").css("background-color","white")

})

$("#fic").on("click",function(){
  $("#ardilla").attr("src","fic.png")
  $("#izq").css("background-color","#326E76")
  $(".campo").css("background-color", "#326E76")
  $(".update").css("background-color","#D1DCDD")
  $(".sep").css("background-color","black")

})
$("#defaultSkin").on("click",function(){
  $("#ardilla").attr("src","ardilla.png")
  $("#izq").css("background-color","red")
  $(".campo").css("background-color", "blue")
  $(".update").css("background-color","orange")
  $(".sep").css("background-color","black")
})




function dpsPorDecima(xDate){

  var yDate = new Date()


  var decimasDeSegundoPasadas = (yDate.getTime() - xDate.fecha.getTime())/100


  if (valorDps == valorUnidades){
    banco += (dps/10) * decimasDeSegundoPasadas
  }
  else if (valorUnidades-valorDps ==1){
    banco+= (dps/constanteMillon/10) * decimasDeSegundoPasadas
  }
  else if (valorUnidades - valorDps == -1){
    banco += (dps * constanteMillon /10 ) * decimasDeSegundoPasadas
  }
  xDate.fecha = yDate;
  actualizarBanco()
}

function autoSave(){
   objeto.dpsupdate= dpsupdate;
   objeto.manejoNombres = manejoNombres;
   objeto.casitas = casitas;
   objeto.unidadesCostesUpgrades = unidadesCostesUpgrades;
   objeto.banco = banco;
   objeto.dps = dps;
   objeto.lamiticai = lamiticai;
   objeto.valorUnidades = valorUnidades
   objeto.constanteMillon = constanteMillon
   objeto.valorDps = valorDps
   objeto.costes = costes
   objeto.unidadesCasitas = unidadesCasitas
   objeto.unidadesDpsCasitas = unidadesDpsCasitas
   objeto.costesUpgrades = costesUpgrades
   objeto.costeInicial = costeInicial
   objeto.multiplicador = multiplicador
   objeto.existenciaUpgrade = existenciaUpgrade
   localStorage.setItem("save", JSON.stringify(objeto))
}
var xDate = {fecha:new Date()}

//Codigo temporal
setInterval("dpsPorDecima(xDate)", 100)
setInterval("autoSave()", 10000) //AutoSave cada 10s. [CONFIGURACIÓN]
