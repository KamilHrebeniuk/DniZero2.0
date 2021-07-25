import React from "react";

export default function TimeTable() {

    return (
        <div className="table">
            <button onClick={loadTable()}>Kliknij</button>
            <div className="content"></div>
        </div>


    )
    function loadTable()  {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                document.getElementsByClassName("content").innerHTML = this.responseText;
            }
        }
        xhttp.open("POST","timeTable.php",true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.send();
    }


}