let isLocal = (location.hostname === "localhost" || location.hostname === "127.0.0.1" ? true : false);
let ipurl = (isLocal ? 'http://192.168.29.102:8083' : 'http://192.168.29.102:8083');
let uriprefix = ipurl + '/test/backend/';
let rightContainer = undefined;
let appGlobal = {};
let config = {
    ImageData: uriprefix + 'fetchimagedata/fetchimgdata.php'
    , VideoData: uriprefix + 'fetchvideodata/fetchvideodata.php',
    Upload: uriprefix + 'upload_data/upload.php'
}

    function uploadHandler(typeOfUpload) {
        let formdata = new FormData();
        let files = $(`#${typeOfUpload}`)[0].files;
        if (files.length > 0) {
            formdata.append('file', files[0]);
            console.log('file to upload is', files[0]);
            $.ajax({
                url: config.Upload
                , type: 'POST'
                , contentType: false
                , processData: false
                , data: formdata,
                dataType: 'JSON'
                , success: function (res) {
                       
                }
               , error:  (err) => {
                 console.log(err);
               }

            });
        } else {
            alert('please choose an image/video to upload');
        }
    }

    function SelectImg() {
      var action="fetch"
    $.ajax({
        type: "GET",
        url: config.ImageData,
        data: {action:action},
        dataType: 'JSON',
        success: function (data){
          console.log(data);    
          GetImageData(data);
        
        },
        error: (err) => {
          console.log(err);
          alert('error');
        }
    });
}
   
function SelectVideo() {
      var action="fetch"
    $.ajax({
        type: "GET",
        url: config.VideoData,
        data: {action:action},
        dataType: 'JSON',
        success: function (data){
          console.log(data);
          GetVideoData(data);
        },
        error: (err) => {
          console.log(err);
          alert('error');
        }
    });
}

function GetImageData(data) {
    $output = `
    <h1><b>Image Selection</b></h1>
    `
let rows = [];
        data.map(x => {
            rows.push(`
            <table>
                <tr>
                <td><img src="${x.loc}" width=130 height=150></img>&nbsp;</td>
                  <td> <button selectLoc="${x.loc}"
                    onclick="console.log(this.getAttribute(\'selectLoc\'))" > Select </button>
                    </td><br>
                    </tr>
                    </table>
            `
            )    
        }
        );
     document.write($output);
        document.write(rows);
        //document.getElementById('messagedisplay').innerHTML=rows;
    };

function GetVideoData(data) {

    $output = `
    <h1><b>Video Selection</b></h1>
    `
    let rows = [];
            data.map(x => {
                rows.push(`
                <table>
                <tr>
                <td>
                   <video width="250" height="190" controls>
                   <source src="${x.loc}" type="${x.type}">
                  </video> &nbsp;</td>
                  <td> <button selectLoc="${x.loc}"
                    onclick="console.log(this.getAttribute(\'selectLoc\'))" > Select </button>
                    </td><br>
                    </tr>
                    </table>
                `);
                
            });
            document.write($output);
            document.write(rows);
    };
    


