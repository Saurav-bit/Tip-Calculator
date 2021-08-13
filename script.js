function calculateTip()
{
    var bill=document.getElementById("amount").value;
    var service=document.getElementById("service-qual").value;
    var num=document.getElementById("people-num").value;

    if(bill ===" "|| service==0)
    {
        alert("PLEASE ENTER VALUES");
        return ;
    }

    if(num===" " || num<=1)
    {
        num=1;
        document.getElementById("each").style.display="none";

    }
    else{
        document.getElementById("each").style.display="block";
    }
    var total=(bill*service)/num;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);
    document.getElementById("tip-show").style.display="block";
    document.getElementById("tip").innerHTML=total;
}
document.getElementById("each").style.display="none";



document.getElementById("calculate").onclick=function(){
    calculateTip();
};