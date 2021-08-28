<?php
function transvalid($data){
    switch ($data['ch']){
        case 1:
            switch ($data['what']){
                case 1:
                    $data['what'] = "*";
                    break;
                case 2:
                    $data['what'] = "id_event";
                    break;
                case 3:
                    $data['what'] = "OBOZ_osoby.imie_i_nazwisko, OBOZ_osoby.phone";
                    break;
                case 4:
                    $data['what'] = "OBOZ_druzyny.team_id, OBOZ_druzyny.team_name ,OBOZ_druzyny.type , OBOZ_assign_to_teams.person_type";
                    break;
            }
            switch ($data['src']){
                case 1:
                    $data['src'] = "OBOZ_harmonogram";
                    break;
                case 2:
                    $data['src'] = "OBOZ_zapisani_na_event";
                    break;
                case 3:
                    $data['src'] = "OBOZ_osoby";
                    break;
                case 4:
                    $data['src'] = "OBOZ_druzyny";
                    break;
            }
            switch ($data['opt']){
                case 1:
                    $data['opt'] = "";
                    break;
                case 2:
                    $data['opt']="WHERE id_participant = ".($data['id']);
                    break;
                case 3:
                    $data['opt'] ="LEFT JOIN OBOZ_assign_to_teams 
                    ON OBOZ_osoby.id_uczestnika = OBOZ_assign_to_teams.person_id WHERE (( OBOZ_assign_to_teams.person_type = 0) && 
                    OBOZ_assign_to_teams.team_id = (SELECT OBOZ_assign_to_teams.team_id FROM OBOZ_assign_to_teams 
                    WHERE (OBOZ_assign_to_teams.person_id = ".$data['id']." && OBOZ_assign_to_teams.team_type=0)))";
                    break;
                case 4:
                    $data['opt'] = "LEFT JOIN OBOZ_assign_to_teams ON OBOZ_druzyny.team_id = OBOZ_assign_to_teams.team_id
                    WHERE OBOZ_assign_to_teams.person_id = ".$data['id'];
                    break;
                default:
                    if(!is_numeric($data['opt'])){
                        $data['opt']="";
                    }
            }

        case 2:
            switch ($data['what']){
                case 1:
                    $data['what'] = "id_event, id_participant";
                    $data['val'] = "('".$data['id_event']."', '".$data["id_person"]."')";
                    break;
                case 2:
                    $data['what'] = "team_id, team_name, type, points";
                    $data['val'] = "(NULL, '".$data["team_name"]."', 1, 0)";
                    break;
                case 3:
                    $data['what'] = "team_id, person_id, person_type, team_type";
                    $data['val'] ="";
                    for ($x = 0; $x<count($data['data']); $x++){
                        $data['val'] .= "((SELECT team_id FROM OBOZ_druzyny WHERE team_name='".$data['team_name']."') , '".$data['data'][$x]['id']."', 1, 1),";
                    }
                    $data['val'] = rtrim($data['val'],",");
                    break;
            }
            switch ($data['src']){
                case 1:
                    $data['src'] = "OBOZ_zapisani_na_event";
                    break;
                case 2:
                    $data['src']= "OBOZ_druzyny";
                    break;
                case 3:
                    $data['src']= "OBOZ_assign_to_teams";
                    break;
            }

        case 3:
            switch ($data['what']){
                case 1:
                    $data['what'] = "id_event= ".$data['id_event']." && id_participant = ".$data['id_person'];
                    break;
                case 2:
                    $data['what']= "team_id= ".$data['team_id']." && person_id= ".$data['id_person'];
                    break;
            }
            switch ($data['src']){
                case 1:
                    $data['src'] = "OBOZ_zapisani_na_event";
                    break;
                case 2:
                    $data['src'] = "OBOZ_assign_to_teams";
                    break;
            }
    }
    return $data;
}