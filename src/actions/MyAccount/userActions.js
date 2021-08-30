import {resp} from "../../pages/HomePage/loginPage";

export function signup (event_id,user_id){
    const stmt = {
        what: 1,
        src: 1,
        id_event: event_id,
        id_person: user_id,
        ch: 2,
        SID: document.cookie,
    };
    commandWithout(stmt, "Poprawnie zapisano sie");

}
export function signout(event_id,user_id) {
    const stmt = {
        what: 1,
        src: 1,
        id_event: event_id,
        id_person: user_id,
        ch: 3,
        SID: document.cookie,
    };
    commandWithout(stmt,"Poprawnie wypisano sie");

}
export function getCounselor(){
    const stmt = {
        what: 3,
        src: 3,
        opt: 3,
        id: resp['id'],
        ch: 1,
        SID: document.cookie,
        name: "counselor",
    };
    commandWith(stmt);
}

export function getClasses(){
    const stmt = {
        what: 2,
        src: 2,
        opt: 2,
        id: resp['id'],
        ch: 1,
        SID: document.cookie,
        name: "classes",
    };
    commandWith(stmt)
}

export function getTeams(){
    const stmt = {
        what: 4,
        src: 4,
        opt: 4,
        id: resp['id'],
        ch: 1,
        SID: document.cookie,
        name: "teams",
    };
    commandWith(stmt)
}
export function quitTeam(team_id){
    const stmt = {
        what: 2,
        src: 2,
        team_id: team_id,
        id_person: resp['id'],
        ch: 3,
        SID: document.cookie,
    };
    commandWithout(stmt,"Poprawnie wypisano sie");
}

export function createTeam(team_name){
    const stmt = {
        what: 2,
        src: 2,
        team_name: team_name,
        ch: 2,
        SID: document.cookie,
    };
    commandWithout(stmt,"Poprawnie stworzono druzyne");
}

export function addToTeam(team_name,teammates){
    const stmt = {
        what: 3,
        src: 3,
        team_name: team_name,
        data: teammates,
        ch: 2,
        SID: document.cookie,
    };
    console.log(JSON.stringify(stmt));
    commandWithout(stmt,"Poprawnie dodano do niej");
}

export function addingPoints(team_name,teammates, points){
    const stmt = {
        what: 4,
        src: 4,
        team_id: team_name,
        id_person: teammates,
        points: points,
        ch: 2,
        SID: document.cookie,
    };
    console.log(JSON.stringify(stmt));
    commandWithout(stmt,"Poprawnie dodano do niej");
}

function commandWithout (array,message){
    const x = new XMLHttpRequest();
    var url = "https://dev.obozpwr.pl/gettingData.php";
    x.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                alert(message);
            }
        }
    };
    x.open("POST", url, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.send(JSON.stringify(array));
}

function commandWith (array){
    const x = new XMLHttpRequest();
    var url = "https://dev.obozpwr.pl/gettingData.php";
    x.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                localStorage.setItem(array['name'],this.response);
            }
        }
    };
    x.open("POST", url, false);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.send(JSON.stringify(array));
}