/*Vars principales/globales/algo */
var banco = 0
var dps= 0
var lamiticai = 0
//--------------------------------------------------



/* Array de costes de las casitas */
var costes = new Array()
costes[0] = 13
costes[1] = 100
costes[2] = 400
costes[3] = 1000
costes[4] = 2500
/*............................................................... */

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
dpsupdate[3] = 40
dpsupdate[4] = 100

//----------------------------------------------------------------------

function actualizarBanco(){
  $("#puntostrue").html(Math.round(banco))
  $("title").html(Math.round(banco))
}

function manejoCasitas(numero){

  if (banco >= costes[numero]){
    var aux = numero +1;
    var id = "#coste" + aux.toString()
    var idcasitas = "#numero" + aux.toString()
    banco-= costes[numero]
    costes[numero] *= 1.15
    casitas[numero]++
    $(idcasitas).html(casitas[numero])
    costes[numero] = Math.round(costes[numero])
    dps += dpsupdate[numero]
    $("#dps").html(dps.toFixed(1))
    $(id).html(costes[numero])
    actualizarBanco()
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
  manejoCasitas(3)
})

$("#update5").on("click",function(){
  manejoCasitas(4)
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




function dpsPorDecima(){
  banco += dps/10
  actualizarBanco()
}
//Codigo temporal
setInterval ("dpsPorDecima()", 100)
