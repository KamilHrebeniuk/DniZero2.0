<?php
    include "src/actions/General/connection.php";
    $conn = Database::getConnection();
    try {
        $stmt = $conn->prepare("SELECT * FROM `OBOZ_harmonogram`");
        $stmt->execute();
        $result = $stmt -> fetchAll();
        $size = count($result);
        $dates = [];
        $days = array(array());
        for($x = 0; $x<$size; $x++){
            $date = explode(" ",$result[$x][1]);
            if(!in_array($date[0],$dates)){
                array_push($dates,$date[0]);
            }
        }
        $startTime = strtotime('08:00:00');

        for($x = 0; $x<count($dates);$x++){
            for($i = 0; $i<$size; $i++){
                $date = explode(" ",$result[$i][1]);
                if($date[0] == $dates[$x]){
                    $days[$x][]=$i;
                }
            }
        }

        $height = 1;
        echo "<div class='container'>";
            echo "<div class='column' id='time'>";
                echo "<div class='cell' style='flex: 1'>&nbsp;</div>";
                for($i=0;$i<33;$i++){
                    echo "<div class='cell' style='flex: 1'>".date('H:i',$startTime)."</div>";
                    $startTime +=1800;
                }
            echo "</div>";
            for($k=0;$k<count($dates);$k++){
                $startTime = strtotime('08:00:00');
                $sum = 0;
                echo "<div class='column'>";
                    echo "<div class='cell' style='flex: 1'>".$dates[$k]."</div>";
                    for($j=$days[$k][0];$j<$size;$j++){
                        $start = explode(" ",$result[$j][1]);
                        if($dates[$k]==$start[0]){
                            $freeTime = (strtotime($start[1])-$startTime)/1800; #1800000
                            $end = explode(" ",$result[$j][2]);
                            if($freeTime==0){
                                $height = ((strtotime($end[1]) - strtotime($start[1])) / 1800);
                                if($height<0){
                                    $height = 48 + $height;
                                }
                                echo "<div class='cell' style='flex: $height'>".$result[$j][3]."</div>";
                                $startTime = strtotime($end[1]);

                            }else{
                                $height = $freeTime;
                                echo "<div class='cell' style='flex: $height; background-color: lightgray;'>&nbsp;</div>";
                                $height = ((strtotime($end[1]) - strtotime($start[1])) / 1800);
                                echo "<div class='cell' style='flex: $height'>".$result[$j][3]."</div>";
                                $startTime = strtotime($end[1]);
                            }
                            $sum+=$height;
                        }else{
                            break;
                        }
                        if($j==$size-1){
                            $height = 32-$sum;
                            echo "<div class='cell' style='flex: $height; background-color: lightgray;'>&nbsp;</div>";
                        }
                    }
                echo "</div>";
            }
        echo "</div>";
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>


