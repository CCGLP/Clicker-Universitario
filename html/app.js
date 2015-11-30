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
/*............................................................... */
// ---------------------ValoresUnidades casitas-------------------//
var unidadesCasitas = new Array()
for (lamiticai=0; lamiticai<=6; lamiticai++){
  unidadesCasitas[lamiticai] = 0
}


//--------------------------ValoresDPS casitas-----------------------//
var unidadesDpsCasitas = new Array()
for(lamiticai=0; lamiticai<10; lamiticai++){
  unidadesDpsCasitas[lamiticai] = 0
}


//*******************************************************//



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

//----------------------------------------------------------------------
var manejoNombres = {
    UNIDADES: {valor:0, nombre:"unidades"},
    MILLONES: {valor:1, nombre:"millones"},
    BILLONES: {valor:2, nombre:"billones"},
    TRILLONES:{valor:3, nombre:"trillones"}

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
  if (banco >= costes[numero] || valorUnidades > unidadesCasitas[numero]){
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


$("#ardilla").on("click", function(){
  banco++
  actualizarBanco()
})

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

/*

var id
for (lamiticai = 1; lamiticai < 5; lamiticai++){
  id = "#update" + lamiticai
  $(id).on("click",function(){
    manejoCasitas(lamiticai-1)

  })

}
*/




function dpsPorDecima(xDate){
  /*
  if (valorDps == valorUnidades){
    banco += dps/10
  }
  else if (valorUnidades-valorDps == 1){
    banco += dps/(constanteMillon*10)

  }
  //Acordarse comprobar con diferencias mas grandes
  */
  var yDate = new Date()


  var decimasDeSegundoPasadas = (yDate.getTime() - xDate.fecha.getTime())/100


  if (valorDps == valorUnidades){
    banco += (dps/10) * decimasDeSegundoPasadas
  }
  else if (valorUnidades-valorDps ==1){
    banco+= (dps/constanteMillon) * decimasDeSegundoPasadas
  }
  xDate.fecha = yDate;
  actualizarBanco()
}

var xDate = {fecha:new Date()}

//Codigo temporal
setInterval ("dpsPorDecima(xDate)", 100)
