<?php

/**Klasse om data op te halen*/
class DataLoad {

    /**
     * Array met naam en telefoonnummer van alle werknemers
     *
     * @var array
     */
    private $_werknemers=[];

    /**
     * Werknemers laden uit csv
     *
     * @return void
     */
    public function laadWerknemers (){

        $row = 1;
        $this->_werknemers=[];
        if (($handle = fopen("werknemers.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $row++;
            $this->_werknemers[$row-1]['naam']= $data[0];
            $this->_werknemers[$row-1]['telefoon']= $data[1];
        }
        fclose($handle);
        }
    
    }

    /**
     * Get Array met werknemers 
     *
     * @return array
     */
    public function getWerknemers(){

        return $this->_werknemers;

    }

}


?>