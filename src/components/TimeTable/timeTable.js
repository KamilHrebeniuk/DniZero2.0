import React from "react";

export default function TimeTable() {

    window.onload = function loadTable()  {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                document.getElementById("content").innerHTML = this.responseText;
            }
        }
        /* TO DO: Zmienic tylko link i dziala. Ogolnie wydaje mi sie ze cala ta funkcje daloby zrobic globalna ale nie do konca wiem jak*/
        xhttp.open("POST","timeTable.php",true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.send();
    }
    return (
        <div id="content"></div>
    )



}