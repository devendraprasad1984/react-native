let dataObject = {};
let colors = ['pink', 'green', 'gray', 'goldenrod', 'navy', 'blue', 'magenta']
let curObj = {}
let isLocal = (location.hostname === "localhost" || location.hostname === "127.0.0.1" ? true : false);
let ipurl = (isLocal ? 'http://localhost:8080' : 'http://localhost:8080');
let uriprefix = ipurl + '/bdf-app/backend/admin';
let rightContainer = undefined;

let config = {
    saveData: uriprefix + '/main.php'
    , adsUrl: uriprefix + '/main.php?ads=1'
    , adminUrl: uriprefix + '/main.php?admins=1'
    , configUrl: uriprefix + '/main.php?config=1'
    , categoryUrl: uriprefix + '/main.php?category=1'
    , eventsUrl: uriprefix + '/main.php?events=1'
    , errorsUrl: uriprefix + '/main.php?errors=1'
    , supportUrl: uriprefix + '/main.php?support=1'
    , regEventsInfoUrl: uriprefix + '/main.php?regeventinfo=1'
    , counterUrl: uriprefix + '/main.php?counter=1'
}
let CRUD = {};
let appGlobal = {};
appGlobal.curAvtar={name:''};


function convertDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes();
}

function postData(url = '', data = {}, success, error) {
    $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data,
        success,
        error
    });
}

function loadSameUrl() {
    // window.location = window.location.hash.substring(1);
    window.location.reload();
}

function getData(url = '', success, error) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success,
        error
    });
}

let success = {
    alert: function (res) {
        let isaved = res.status === 'success' ? true : false;
        swal({
            title: isaved ? "Action Processed" : "Not Processed",
            icon: isaved ? "success" : "error",
            button: 'Ok',
        }).then(flag => flag);
    }
}

function error(err) {
    swal({
        title: "some error contact admin",
        text: err,
        button: 'Ok',
    }).then(flag => flag);
    console.error(err);
}
