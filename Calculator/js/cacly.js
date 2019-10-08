
 function focus1(){
 	document.getElementById("firstno").style.backgroundColor = "#00a591";
 }
 function blur1(){
 	document.getElementById("firstno").style.backgroundColor = "white";
 }
 function focus2(){
 	document.getElementById("secondno").style.backgroundColor = "#fa9a85";
 }
function blur2(){
	document.getElementById("secondno").style.backgroundColor = "white";
}

function addn(){
    
        var num1 = Number(document.getElementById("firstno").value);
        var num2 = Number(document.getElementById("secondno").value);
           
     /*  var answ*/ document.getElementById("result").innerHTML = num1 + num2;
                 // document.write(answ);
}

function subs() {
    var num1 = document.getElementById("firstno").value;
    var num2 = document.getElementById("secondno").value;
       
    var answ = document.getElementById("result").innerHTML = num1 - num2;
              document.write(answ);

}
    function mult()
    {
        var num1 = document.getElementById("firstno").value;
        var num2 = document.getElementById("secondno").value;
           
        var answ = document.getElementById("result").innerHTML = num1 * num2;
                  document.write(answ);
    
    }
    function divid()
    {
        var num1 = document.getElementById("firstno").value;
        var num2 = document.getElementById("secondno").value;
           
        var answ = document.getElementById("result").innerHTML = num1 / num2;
                  document.write(answ);
    
    }
