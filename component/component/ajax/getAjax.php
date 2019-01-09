<?php
require_once('../../conf/generalConf.php');
require_once('../../classes/AutoLoad.php');

$data = PostInObject::getPostInObjectBySecure($_GET);

foreach ($data as $key => $value) {
    if (!isset($param)) {
        $param = $key . '=' . $value;
    } else {
        $param .= '&'. $key . '=' . $value;
    }
}

$result = CurlComponent::getCurlRest($param);

echo $result;

