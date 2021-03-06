<?php

startSession();
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");

function startSession()
{
    session_start();
    if (!empty($_SESSION['time']) && $_SESSION['time'] < time() - 300) {
        session_destroy();
        session_start();
    }
    $SID = session_create_id('Ob21-');
    session_commit();
    ini_set('session.use_strict_mode', 0);
    session_id($SID);
    session_start();
    $_SESSION['SSID']= session_id();
    $_SESSION['time'] = time();
    ini_set('session.use_strict_mode', 1);
}








