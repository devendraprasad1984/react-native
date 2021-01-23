let dataObject = {};
let colors = ['pink', 'green', 'gray', 'goldenrod', 'navy', 'blue', 'magenta']
let curObj = {}
let isLocal = (location.hostname === "localhost" || location.hostname === "127.0.0.1" ? true : false);
let ipurl = (isLocal ? 'http://localhost:8080' : 'https://dpresume.com');
let uriprefix = ipurl + '/sanskar/backend/admin';
let rightContainer = undefined;
let overlayContainer = $('#idOverlay');
let leftMenu = $('#leftMenu');
let plzwait='working...';
let sendmail= 1;
let localObjName='sanskar';

let config = {
    posting: uriprefix + '/main.php'
    , adsUrl: uriprefix + '/main.php?ads=1'
    , adminUrl: uriprefix + '/main.php?admins=1'
    , configUrl: uriprefix + '/main.php?config=1'
    , eventsUrl: uriprefix + '/main.php?events=1'
    , errorsUrl: uriprefix + '/main.php?errors=1'
    , supportUrl: uriprefix + '/main.php?support=1'
    , repliesUrl: uriprefix + '/main.php?replies=1'
    , counterUrl: uriprefix + '/main.php?counter=1'
    , ImageData: uriprefix + '/main.php?getImageData=1'
    , VideoData: uriprefix + '/main.php?getVideoData=1'
}
let CRUD = {};
let appGlobal = {};
let successMsg='success';
let failMsg='failed';


function convertDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes();
}
function getSessionId(){
    let sessionId='';
    if(dpMod.initParam===undefined||dpMod.initParam==null){
        sessionId='';
    }else{
        sessionId=dpMod.initParam.sessionid;
    }
    return sessionId;
}
function postData(url = '', data = {}, fnSuccess=success.alert, fnError=error) {
    if(getSessionId()=='' && data.login===undefined && !data.hasOwnProperty('forgot')){
        getData(config.adminUrl);
        return;
    }
    data['token']=getSessionId();
    $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data,
        success: fnSuccess,
        error: fnError
    });
}

function loadSameUrl() {
    // window.location = window.location.hash.substring(1);
    window.location.reload();
}

function getData(url = config.adminUrl, fnSuccess=success.alert) {
    if(getSessionId()==''){
       url=config.adminUrl;
    }
    let token=getSessionId();
    let updatedUrl=url+'&token='+token;
    $.ajax({
        type: "GET",
        url: updatedUrl,
        dataType: 'json',
        success: fnSuccess,
        error: error
    });
}

let success = {
    alert: function (res) {
        // console.log('in success',res);
        let isaved = (res.status === successMsg);
        swal({
            title: isaved ? "Action Processed" : "Not Processed",
            icon: isaved ? "success" : "error",
            button: 'Ok',
        }).then(flag => flag);
    }
}

function error(err) {
    // console.log('in error',err);
    swal({
        title: "some error contact admin",
        text: err,
        button: 'Ok',
    }).then(flag => flag);
    console.error(err);
}


function colorPicker() {
    $('.xcolpick').colpick({
        colorScheme: 'light',
        // onChange: function (hsb, hex, rgb, el, bySetColor) {
        //     $(el).val('#' + hex);
        // },
        onSubmit:function(hsb,hex,rgb,el,bySetColor) {
            $(el).val('#'+hex);
            $(el).colpickHide();
        }
    });
}

function swalRemover(obj){
    obj.remove();
    let swalOverlays = Array.from(document.getElementsByClassName('swal-overlay'));
    swalOverlays.map(x => x.remove());
}
