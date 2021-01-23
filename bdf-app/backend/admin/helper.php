<?php
require_once 'init.php';

function crudAds($data)
{
    global $success, $conn, $failed;
    $sql = '';
    if ($data['save'] == "1") {
        $desc = $conn->real_escape_string($data['desc']);
        $about = $conn->real_escape_string($data['about']);
        $type = $conn->real_escape_string($data['type']);
        $sql = "INSERT INTO adrotator(about, description, type) values('$desc','$about','$type')";
    }
    if ($data['update'] == "1") {
        $id = $conn->real_escape_string($data['id']);
        $desc = $conn->real_escape_string($data['desc']);
        $about = $conn->real_escape_string($data['about']);
        $sql = "update adrotator set about='$desc', description='$about' where id=$id";
    }
    if ($data['delete'] == "1") {
        $id = $conn->real_escape_string($data['id']);
        $sql = "delete from adrotator where id=$id";
    }
//    ChromePhp::log($data,$sql);
    $result = $conn->query($sql);
    mysqli_close($conn);
    echo $result ? $success : $failed;
}

function crudEvents($data)
{
    global $success, $conn, $failed;
    $sql = '';
    if ($data['save'] == "1") {
        $title = $conn->real_escape_string($data['title']);
        $desc = $conn->real_escape_string($data['desc']);
        $date = $conn->real_escape_string($data['date']);
        $sql = "INSERT INTO upcoming_event(event_date, title, description) values('$date','$title','$desc')";
    }
    if ($data['update'] == "1") {
        $id = $conn->real_escape_string($data['id']);
        $title = $conn->real_escape_string($data['title']);
        $desc = $conn->real_escape_string($data['desc']);
        $date = $conn->real_escape_string($data['date']);
        $sql = "update upcoming_event set title='$title', description='$desc', event_date='$date' where event_id=$id";
    }
    if ($data['delete'] == "1") {
        $id = $conn->real_escape_string($data['id']);
        $sql = "delete from upcoming_event where event_id=$id";
    }
    $result = $conn->query($sql);
    mysqli_close($conn);
//    ChromePhp::log($sql, $result);
    echo $result ? $success : $failed;
}

function getMaxCatId($tableName){
    global $conn;
    $qur = "select max(id) as id from $tableName";
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);
    mysqli_free_result($sql);
    return $rows;
}

function crudCategory($data)
{
    global $success, $conn, $failed;
    $sql = '';
    if ($data['save'] == "1") {
        if ($data['savetype'] == "cat") {
            $category = $conn->real_escape_string($data['category']);
            $description = $conn->real_escape_string($data['description']);
            $icons = $conn->real_escape_string($data['icons']);
            $sql = "insert into category(category, description, icons) values('$category','$description','$icons')";
            $result = $conn->query($sql);
            $maxid=(int) getMaxCatId('category')[0]['id'];
            $sql = "insert into categorydetails(catid, detail_description) values($maxid,'')";
            $result = $conn->query($sql);
        }
        if ($data['savetype'] == "catl1") {
            $catid = $conn->real_escape_string($data['catid']);
            $description = $conn->real_escape_string($data['description']);
            $sql = "insert into categorylevel1(catid, description) values('$catid','$description')";
            $result = $conn->query($sql);
        }
        if ($data['savetype'] == "catl2") {
            $catl1 = $conn->real_escape_string($data['catL1']);
            $description = $conn->real_escape_string($data['description']);
            $sql = "insert into categorylevel2(catl1, description) values('$catl1','$description')";
            $result = $conn->query($sql);
        }
        if ($data['savetype'] == "catpages") {
            $catl2 = $conn->real_escape_string($data['catL2']);
            $description = $conn->real_escape_string($data['description']);
            $subhead = $conn->real_escape_string($data['subhead']);
            $type = $conn->real_escape_string($data['type']);
            $sql = "insert into categorylevelpages( catL2, subhead, description, type) values('$catl2','$subhead','$description','$type')";
            $result = $conn->query($sql);
        }
    }
    if ($data['update'] == "1") {
        if ($data['savetype'] == "cat") {
            $id = $conn->real_escape_string($data['id']);
            $category = $conn->real_escape_string($data['category']);
            $description = $conn->real_escape_string($data['description']);
            $icons = $conn->real_escape_string($data['icons']);
            $sql = "update category set category='$category', description='$description', icons='$icons' where id=$id";
        }
        if ($data['savetype'] == "catdet") {
            $id = $conn->real_escape_string($data['id']);
            $description = $conn->real_escape_string($data['detail_description']);
            $sql = "update categorydetails set detail_description='$description' where id=$id";
        }
        if ($data['savetype'] == "catl1") {
            $id = $conn->real_escape_string($data['id']);
            $description = $conn->real_escape_string($data['description']);
            $sql = "update categorylevel1 set description='$description' where id=$id";
        }
        if ($data['savetype'] == "catl2") {
            $id = $conn->real_escape_string($data['id']);
            $description = $conn->real_escape_string($data['description']);
            $sql = "update categorylevel2 set description='$description' where id=$id";
        }
        if ($data['savetype'] == "catpages") {
            $id = $conn->real_escape_string($data['id']);
            $description = $conn->real_escape_string($data['description']);
            $subhead = $conn->real_escape_string($data['subhead']);
            $type = strtolower($conn->real_escape_string($data['type']));
            $sql = "update categorylevelpages set subhead='$subhead',description='$description',type='$type' where id=$id";
        }
//        ChromePhp::log($sql);
        $result = $conn->query($sql);
    }
    if ($data['delete'] == "1") {
        if ($data['savetype'] == "cat") {
            $id = $conn->real_escape_string($data['id']);
            $sql = "delete from category where id=$id";
        }
        $result = $conn->query($sql);
    }
    mysqli_close($conn);
    echo $result ? $success : $failed;
}

function crudConfig($data)
{
    global $success, $conn, $failed;
    $sql = '';
    if ($data['update'] == "1") {
        $key = $conn->real_escape_string($data['key']);
        $value = $conn->real_escape_string($data['value']);
        $sql = "update config set `value`='$value' where `key`='$key'";
    }
//    ChromePhp::log($data, $sql);
    $result = $conn->query($sql);
    mysqli_close($conn);
    echo $result ? $success : $failed;
}



function pullTable($data,$tableObject, $where, $orderBy)
{
    global $conn;
    $qur = "select * from $tableObject $where $orderBy";
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);
    mysqli_free_result($sql);
    mysqli_close($conn);
    echo(json_encode($rows));
}


function pullCategory($data)
{
    global $conn;
    $what2pull=$data['what2pull'];
    if($what2pull=='') {
        $sql = $conn->query("SELECT * FROM category");
        $categories = $sql->fetch_all(MYSQLI_ASSOC);

        $sql = $conn->query("SELECT * FROM categorydetails");
        $categories_details = $sql->fetch_all(MYSQLI_ASSOC);

        $sql = $conn->query("select * from categorylevel1");
        $catL1 = $sql->fetch_all(MYSQLI_ASSOC);

        $sql = $conn->query("select * from categorylevel2");
        $catL2 = $sql->fetch_all(MYSQLI_ASSOC);

        $sql = $conn->query("select * from categorylevelpages");
        $pages = $sql->fetch_all(MYSQLI_ASSOC);
        $rows['categories'] = $categories;
        $rows['details'] = $categories_details;
        $rows['catL1'] = $catL1;
        $rows['catL2'] = $catL2;
        $rows['pages'] = $pages;
    }
    if($what2pull=='catl1') {
        $sql = $conn->query("select * from categorylevel1");
        $res = $sql->fetch_all(MYSQLI_ASSOC);
        $rows['catL1'] = $res;
    }
    if($what2pull=='catl2') {
        $sql = $conn->query("select * from categorylevel2");
        $res = $sql->fetch_all(MYSQLI_ASSOC);
        $rows['catL2'] = $res;
    }
    if($what2pull=='catpages') {
        $sql = $conn->query("select * from categorylevelpages");
        $res = $sql->fetch_all(MYSQLI_ASSOC);
        $rows['pages'] = $res;
    }
    mysqli_free_result($sql);
    if ($conn) mysqli_close($conn);
    echo(json_encode($rows));
}

function pullEvents($data)
{
    global $conn;
    $qur = "select event_id,DATE_FORMAT(event_date,'%Y-%m-%dT%h:%i') as event_date,title,description from upcoming_event where event_date>now()";
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);
    mysqli_free_result($sql);
    mysqli_close($conn);
    echo(json_encode($rows));
}


function pullRegisteredEventsInfo($data)
{
    global $conn;
    $id = $data['id'];
    $qur = "select * from eventregistrationdetails where eventid=$id order by id desc";
//    ChromePhp::log($id,$qur);
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);
    mysqli_free_result($sql);
    mysqli_close($conn);
    echo(json_encode($rows));
}

function pullCounter($data)
{
    global $conn;
    $qur = "select 'banners' as type,count(*) as counter from adrotator
            union all
            select 'categories', count(*) from category
            union all
            select 'pages', count(*) from categorylevelpages
            union all
            select 'config', count(*) from config
            union all
            select 'errors', count(*) from error_log
            union all
            select 'registers', count(*) from eventregistrationdetails
            union all
            select 'events', count(*) from upcoming_event
            union all
            select 'users', count(*) from user_detail
            union all
            select 'support', count(*) from supportqueries
            ";
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);

    mysqli_free_result($sql);
    mysqli_close($conn);
    echo(json_encode($rows));
}

