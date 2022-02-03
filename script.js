//This code written by Md Jawad Hossain

function btnValue(vlu){
    document.getElementById("display").value += vlu;
}

function calculate() {
    var allValue = document.getElementById("display").value;
    var cal = eval(allValue);
    document.getElementById("display").value = cal;
}

function clearAll(){
    document.getElementById("display").value = '';
}


function clearOne() {
    document.getElementById("display").value =
    document.getElementById("display").value.substr(0, document.getElementById("display").value.length-1);

}
