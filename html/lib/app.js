

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
 auxCosteUpgrade(0,9,1000)
 auxCosteUpgrade(9,18,5000)
 auxCosteUpgrade(18,27,20000)
 auxCosteUpgrade(27,36,80000)
 auxCosteUpgrade(36,45,320000)
 auxCosteUpgrade(45,54,1.28)
 auxCosteUpgrade(54,63,5.12)
 auxCosteUpgrade(63,72,20.48)
 auxCosteUpgrade(72,81,81.92)
 auxCosteUpgrade(81,90,327.68)
 auxCosteUpgrade(90,99,1310.72)
  //Aux function para los costesUpgrades
  function auxCosteUpgrade(inicial, final,costeInicial){
    var multiplicador = 1
    for (lamiticai=inicial; lamiticai<final; lamiticai++){
      if (costeInicial*multiplicador < constanteMillon){
        costesUpgrades[lamiticai] = costeInicial * multiplicador
      }
      else {
        costesUpgrades[lamiticai] = costeInicial * multiplicador / constanteMillon

      }
      multiplicador *=2
    }

  }
  //*******************************************************************************
  //***************************Array de unidades costes upgrades*********************//
  var unidadesCostesUpgrades = new Array()
  unCostesUpgrades(0,100,0)
  unCostesUpgrades(17,17,1)
  unCostesUpgrades(24,26,1)
  unCostesUpgrades(31,35,1)
  unCostesUpgrades(38,44,1)
  unCostesUpgrades(45,100,1)

  //Funcion Auxiliar de unidades Costes upgrades
  function unCostesUpgrades(numero, final, unidad){
    for (lamiticai=numero; lamiticai<=final; lamiticai++){
      unidadesCostesUpgrades[lamiticai] = unidad
    }
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
      TRILLONES:{valor:3, nombre:"trillones"},
      CUATRILLONES:{valor:4, nombre:"cuatrillones"},
      QUINTILLONES:{valor:5,nombre:"quintillones"}
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

  $("#filtro").css("opacity", casitas[3]*0.01 )
  $("#porcentajeS").html(casitas[3]+ "%")

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
      console.log("hola")
      dps += dpsupdate[numero] * casitas[numero]
    }
    else if (valorDps-unidadesDpsCasitas[numero] >= 1){
        dps-= dpsupdate[numero]/constanteMillon * casitas[numero]
        dpsupdate[numero]*=aumento
        console.log("OTRA RAMA")
        dps+= dpsupdate[numero]/constanteMillon * casitas[numero]
    }
    else{
      dps-dpsupdate[numero] * constanteMillon * casitas[numero]
      dpsupdate[numero] *= aumento
      console.log("WORKING")
      dps+= dpsupdate[numero]*constanteMillon * casitas[numero]

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
      return manejoNombres.TRILLONES.nombre
      break
    case 4:
      return manejoNombres.CUATRILLONES.nombre
      break;
    case 5:
      return manejoNombres.QUINTILLONES.nombre
      break;
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
    $("#porcentajeS").html(casitas[3]+ "%")
  }
}


function reset(){
  localStorage.clear()
  location.reload()

}

function mute (){
  var sound = $("audio")[0]

if (!sound.muted)
  sound.muted = true
else {
  sound.muted = false
}


}

//Boton de mute
$("#mute").on("click",function(){
  mute();
})
//**********************
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

//********************************************************
$("#actualizar10").on("click", function(){
  manejoActualizar(9,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar11").on("click", function(){
  manejoActualizar(10,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar12").on("click", function(){
  manejoActualizar(11,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar13").on("click", function(){
  manejoActualizar(12,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar14").on("click", function(){
  manejoActualizar(13,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar15").on("click", function(){
  manejoActualizar(14,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar16").on("click", function(){
  manejoActualizar(15,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar17").on("click", function(){
  manejoActualizar(16,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar18").on("click", function(){
  manejoActualizar(17,1,0,2) //Numero de upgrade. Numero de opción. Aumento
})

//*********************************************************
$("#actualizar19").on("click", function(){
  manejoActualizar(18,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar20").on("click", function(){
  manejoActualizar(19,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar21").on("click", function(){
  manejoActualizar(20,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar22").on("click", function(){
  manejoActualizar(21,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar23").on("click", function(){
  manejoActualizar(22,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar24").on("click", function(){
  manejoActualizar(23,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar25").on("click", function(){
  manejoActualizar(24,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar26").on("click", function(){
  manejoActualizar(25,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar27").on("click", function(){
  manejoActualizar(26,2,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//************************MUJERES************************
$("#actualizar28").on("click", function(){
  manejoActualizar(27,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar29").on("click", function(){
  manejoActualizar(28,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar30").on("click", function(){
  manejoActualizar(29,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar31").on("click", function(){
  manejoActualizar(30,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar32").on("click", function(){
  manejoActualizar(31,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar33").on("click", function(){
  manejoActualizar(32,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar34").on("click", function(){
  manejoActualizar(33,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar35").on("click", function(){
  manejoActualizar(34,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar36").on("click", function(){
  manejoActualizar(35,3,0,3) //Numero de upgrade. Numero de opción. Aumento
})
//******************PROFSUST***************************
$("#actualizar37").on("click", function(){
  manejoActualizar(36,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar38").on("click", function(){
  manejoActualizar(37,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar39").on("click", function(){
  manejoActualizar(38,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar40").on("click", function(){
  manejoActualizar(39,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar41").on("click", function(){
  manejoActualizar(40,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar42").on("click", function(){
  manejoActualizar(41,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar43").on("click", function(){
  manejoActualizar(42,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar44").on("click", function(){
  manejoActualizar(43,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar45").on("click", function(){
  manejoActualizar(44,4,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//*****************Profesor********************
$("#actualizar46").on("click", function(){
  manejoActualizar(45,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar47").on("click", function(){
  manejoActualizar(46,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar48").on("click", function(){
  manejoActualizar(47,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar49").on("click", function(){
  manejoActualizar(48,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar50").on("click", function(){
  manejoActualizar(49,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar51").on("click", function(){
  manejoActualizar(50,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar52").on("click", function(){
  manejoActualizar(51,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar53").on("click", function(){
  manejoActualizar(52,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar54").on("click", function(){
  manejoActualizar(53,5,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//*************************************************************
$("#actualizar55").on("click", function(){
  manejoActualizar(54,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar56").on("click", function(){
  manejoActualizar(55,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar57").on("click", function(){
  manejoActualizar(56,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar58").on("click", function(){
  manejoActualizar(57,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar59").on("click", function(){
  manejoActualizar(58,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar60").on("click", function(){
  manejoActualizar(59,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar61").on("click", function(){
  manejoActualizar(60,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar62").on("click", function(){
  manejoActualizar(61,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar63").on("click", function(){
  manejoActualizar(62,6,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//**************************************
$("#actualizar64").on("click", function(){
  manejoActualizar(63,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar65").on("click", function(){
  manejoActualizar(64,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar66").on("click", function(){
  manejoActualizar(65,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar67").on("click", function(){
  manejoActualizar(66,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar68").on("click", function(){
  manejoActualizar(67,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar69").on("click", function(){
  manejoActualizar(68,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar70").on("click", function(){
  manejoActualizar(69,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar71").on("click", function(){
  manejoActualizar(70,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar72").on("click", function(){
  manejoActualizar(71,7,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//**************************************************
$("#actualizar73").on("click", function(){
  manejoActualizar(72,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar74").on("click", function(){
  manejoActualizar(73,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar75").on("click", function(){
  manejoActualizar(74,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar76").on("click", function(){
  manejoActualizar(75,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar77").on("click", function(){
  manejoActualizar(76,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar78").on("click", function(){
  manejoActualizar(77,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar79").on("click", function(){
  manejoActualizar(78,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar80").on("click", function(){
  manejoActualizar(79,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar81").on("click", function(){
  manejoActualizar(80,8,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//****************************************************
$("#actualizar82").on("click", function(){
  manejoActualizar(81,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar83").on("click", function(){
  manejoActualizar(82,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar84").on("click", function(){
  manejoActualizar(83,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar85").on("click", function(){
  manejoActualizar(84,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar86").on("click", function(){
  manejoActualizar(85,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar87").on("click", function(){
  manejoActualizar(86,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar88").on("click", function(){
  manejoActualizar(87,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar89").on("click", function(){
  manejoActualizar(88,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar90").on("click", function(){
  manejoActualizar(89,9,0,2) //Numero de upgrade. Numero de opción. Aumento
})
//***************************************************
$("#actualizar91").on("click", function(){
  manejoActualizar(90,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar92").on("click", function(){
  manejoActualizar(91,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar93").on("click", function(){
  manejoActualizar(92,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar94").on("click", function(){
  manejoActualizar(93,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar95").on("click", function(){
  manejoActualizar(94,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar96").on("click", function(){
  manejoActualizar(95,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar97").on("click", function(){
  manejoActualizar(96,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar98").on("click", function(){
  manejoActualizar(97,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})
$("#actualizar99").on("click", function(){
  manejoActualizar(98,10,0,2) //Numero de upgrade. Numero de opción. Aumento
})

//************************************************
//Manejo de Skins
$("#esne").on("click",function(){
  $("#ardilla").attr("src", "/../imagenes/esne.png")
  $(".campo").css("background-color", "red")
  $(".update").css("background-color","red")


})

$("#fic").on("click",function(){
  $("#ardilla").attr("src","/../imagenes/fic.png")
  $("#izq").css("background-color","#326E76")
  $(".campo").css("background-color", "#326E76")
  $(".update").css("background-color","#D1DCDD")


})
$("#defaultSkin").on("click",function(){
  $("#ardilla").attr("src","/../imagenes/ardilla.png")
  $("#izq").css("background-color","red")
  $(".campo").css("background-color", "blue")
  $(".update").css("background-color","orange")

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
