<?php 
    $x = readline('Enter Filter: ');
    $array = range(1,100);
    shuffle($array);
    $array = array_slice($array, 0, 12);
    $a = json_encode($array);
    echo 'Array : '.$a;
    $c = count($array);
    // echo $c;
    if($x %2 == 0){
        for($i = 0; $i < $c; $i++){
            if($array[$i] %2 == 0){
                $result = $array[$i];
            }
        }
        echo nl2br("\nFilter : genap\n");
        echo json_encode($result);
    }    
?>
