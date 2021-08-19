import React from "react";

export default function TimeTable() {

  return <div id="content"></div>;
}
let array={
  what: "*",
  src: "OBOZ_harmonogram",
  opt: "",
  SID: "",
};
let schedule;

function getData() {
  const xhttp = new XMLHttpRequest();
    var url = "https://api.obozpwr.pl/session.php";
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          schedule = JSON.parse(this.response);
          if(!("result" in schedule)){

          }else{
            alert(schedule['message']);
          }
        }

    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify(array));
  }
};

