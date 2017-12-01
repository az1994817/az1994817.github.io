<?php
header(string:'content-type:text/html;charset=utf8');
$user=$_GET['user'];
$pass=$_GET['pass'];

if($user=='admin'){
    if($pass=='123456'){
        echo "登陆成功<a href='main.html'>点击立即跳转</a>";
    }else{
        echo "密码错误<a href='index.html'>点击立即返回</a>";
    }
}else{
    echo "账号不存在!<a href='index.html'>点击立即返回</a>";
}