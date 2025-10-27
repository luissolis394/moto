function calcular(){
  var PE=parseFloat(document.getElementById("P").value)
  var PRE=parseFloat(document.getElementById("PR").value)
  total=PE*PRE
  document.getElementById("j").innerHTML=total
  var AU=parseFloat(document.getElementById("A").value)
  MENTO=AU*total
document.getElementById("AUMENTO").innerHTML=MENTO
  PV=total+MENTO
  document.getElementById("VENTA").innerHTML=PV 
}
function limpiar(){
document.getElementById("joya").innerHTML="EN PROCESO..."
}