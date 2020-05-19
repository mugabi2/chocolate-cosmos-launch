<!DOCTYPE html>
<!-- To run the current sample code in your own environment, copy this to an html page. -->

<html>
    <head>
        <title>
            CHOCOLATE COSMOS
        </title>
    </head>

    <body>
        TRANSACTIONS
        <form action="transactionsext.php" method="post">
        <br>
        <br>
        <!-- ***********ITEMS************* -->
        <select name="select_item">
          <option>ITEM</option>
    <?php
include "db_chocolate_cosmos.php";

$conn = OpenCon();
//Your Array
$output = array();

$zero=0;
$stmt = $conn->prepare("SELECT * FROM items WHERE no>:no" );
$stmt->execute(array(':no' => $zero));

$i=0;
//Your Array Data
foreach($stmt->fetchAll(PDO::FETCH_ASSOC) as $row){ 
    ?>
    <option>
    <?php
    $itemArray[$i] = $row['item'];
    echo $itemArray[$i];
    $i++;
    ?>
    </option>


<?php     CloseCon($conn); .
} ?>
      </select>
<!-- /////////////////////SUPPLIER/////////////////// -->
<select name="select_supplier">
          <option>SUPPLIER</option>
    <?php

$connm = OpenCon();
//Your Array
$output = array();

$zero=0;
$stmt = $connm->prepare("SELECT * FROM suppliers WHERE no>:no" );
$stmt->execute(array(':no' => $zero));

$r=0;
//Your Array Data
foreach($stmt->fetchAll(PDO::FETCH_ASSOC) as $rowa){
    ?>
    <option>
    <?php
    $supArray[$r] = $rowa['supplier'];
    echo $supArray[$r];
    $i++;
    ?>
    </option>


<?php     CloseCon($conn); } ?>
      </select>
      <!-- ///////////date//////////////// -->
      Date: <input type="date" name="date" min="2019-01-01" max="2040-01-01">
        <br>

      Amount: <input type = "text" name = "amount" />
        <input type = "submit" name = "submit" value = "transact" />
        </form>
    </body>
</html>
