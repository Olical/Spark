<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */
$header = 'function spark() {' . "\n";
$content = '';
$footer = '} ' . "\n" . 'var spark = new spark();';
