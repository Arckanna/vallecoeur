<?php
require_once('../../conf/generalConf.php');
require_once('../../classes/AutoLoad.php');

$result = CurlComponent::putCurlRest($_POST);

echo $result;