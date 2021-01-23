function pullBanner() {
    CRUD.updateAd = (id) => {
        let desc = $('#idDesc' + id).val();
        let about = $('#idAbout' + id).val();
        // console.log(id,desc,about);
        let data = {crudAds: 1, update: 1, id, desc, about};
        postData(config.posting, data);
    }
    CRUD.deleteAd = (id) => {
        let data = {crudAds: 1, delete: 1, id};
        postData(config.posting, data);
        let parentDiv = '#adsCardParent' + id;
        $(parentDiv).remove();
    }
    CRUD.resetBanner = () => {
        $('#about').val("");
        $('#seltype').val("Text")
        $('#desc').val("");
    }
    CRUD.saveBanner = () => {
        let type = $('#seltype').val();
        let about = $('#about').val();
        let desc = $('#desc').val();
        if (type === "" || about === "" || desc === "") {
            swal("please enter input");
            return;
        }
        let data = {crudAds: 1, save: 1, about, desc, type};
        postData(config.posting, data);
        CRUD.resetBanner();
    }
    getData(config.adsUrl, (data) => {
        let rows = [];
        rows = data.map(x => {
            return `<div id="adsCardParent${x.id}" class="xrow cardx">
                <span><input id="idAbout${x.id}" type="text" value="${x.about}"/></span>
                <span class="alignEvenRow">
                   <textarea id="idDesc${x.id}" rows="5">${x.description}</textarea>
                   ${x.type.toLowerCase() !== 'text' ? dpMod.selectMedia("idDesc" + x.id) : ''}
                   <div class="xrow-bar-bottom right">
                        <span class="btn green" onclick="CRUD.updateAd(${x.id});">Save</span>
                        <span class="btn red" onclick="CRUD.deleteAd(${x.id});">Delete</span>
                    </div>
                </span>
                   ${(x.type.toLowerCase() === 'image' ? '<img class="media" src="' + x.description + '" />' : '')}
                   ${(x.type.toLowerCase() === 'video' ? '<video class="media" controls> <source src="' + x.description + '" type="video/mp4"> </video>' : '')}
                </div>`;
        });
        rightContainer.html(rows.join(''));
    }, (err) => {
        console.error(err)
    });
}

let appCats = {};

appGlobal.toggleConfig = (cur, id) => {
    $('.configs').hide();
    $('.configBtns').removeClass('activeBtns');
    let elm = $('#' + id);
    let curElm = $('#' + cur.id);
    curElm.addClass('activeBtns');
    elm.show();
}

CRUD.saveConfig = (cur) => {
    let key = cur.getAttribute('key');
    let value = $('#configValue' + key).val();
    let data = {crudConfig: 1, update: 1, key, value};
    postData(config.posting, data);
}

function pullConfig() {
    getData(config.configUrl, (data) => {
        let rows = [];
        rows.push(`<div id="buttonsConfig">`);
        let xrows = data.map((x, i) => {
            return `<span id="configBtn${x.key}" class='configBtns btn colorMed ${i !== 0 ? '' : 'activeBtns'}' style="margin: 2px;"
            onclick="appGlobal.toggleConfig(this,'configKey${x.key}');">${x.key}</span>`
        });
        rows.push(...xrows);
        rows.push(`</div>`);
        xrows = data.map((x, i) => {
            let isImage = x.key.toLowerCase()==='splashimg';
            let isVideo = x.value.indexOf('mp4') !== -1 ? true : false;
            return `<div id="configKey${x.key}" class="configs input-inline xrow ${i !== 0 ? 'hide' : 'show'}">
                    <span class="redtxt">${x.helperText}</span>
                    <button class="btn green right" key="${x.key}" onclick="CRUD.saveConfig(this)">Save</button>
                    <span>
                        <textarea id="configValue${x.key}" rows="5" class="${x.key==='app-color'?'xcolpick':''}">${x.value}</textarea>
                        ${isImage ? dpMod.selectMedia('configValue' + x.key) : ''}
                        ${(isImage ? '<img class="media" src="' + x.value + '" />' : '')}
                        ${(isVideo ? '<video class="media" controls> <source src="' + x.value + '" type="video/mp4" /></video>' : '')}
                    </span>
                </div>
            `;
        });
        rows.push(...xrows);
        // console.log(rows,xrows,...xrows);
        rightContainer.html(rows.join(''));
        colorPicker();
    }, (err) => {
        console.error(err)
    });
}

function pullErrors() {
    let styles = {
        cell1: 'width: 5%'
        , cell2: 'width: 10%'
        , cell3: 'width: 60%'
        , cell4: 'width: 20%'
        , gridTemplate: "grid-template-columns: repeat(4, 1fr)"
    }
    getData(config.errorsUrl, (data) => {
        let rows = [];
        rows.push(`
                <div><div class="table-header">
                <span style="${styles.cell1}"></span>
                <span style="${styles.cell2}">Message</span>
                <span style="${styles.cell3}">Trace</span>
                <span style="${styles.cell4}">When?</span>
                </div></div>
            `);
        data.map(x => {
            rows.push(`
                <div><div class="table">
                <span style="${styles.cell1}">${x.log_id}</span>
                <span style="${styles.cell2}">${x.error_message}</span>
                <span style="${styles.cell3}">${x.error_trace}</span>
                <span style="${styles.cell4}">${x.error_log_date}</span>
                </div></div>
            `);
        });
        rightContainer.html(rows.join(''));
    }, (err) => {
        console.error(err)
    });
}

CRUD.sendEmail=(cur,mailObj,callback)=>{
    let oldTxt='';
    let isCurUndefined= (typeof cur === "undefined");
    if(!isCurUndefined){
        oldTxt=cur.innerText;
        cur.innerText=plzwait;
    }
    postData(config.posting, mailObj, (r)=> {
        if(!isCurUndefined) cur.innerText=oldTxt;
        callback(r.status);
    });
}

function pullSupport() {
    CRUD.queryObject = {};
    CRUD.replyClick = (qid) => {
        let curQueryObj = CRUD.queryObject[qid];
        let {id, email, query} = curQueryObj;
        CRUD.submitSupportResponse = (cur) => {
            let oldTxt=cur.innerText;
            cur.innerText=plzwait;
            let queryResponse = $('#txtQueryResponse' + $(cur).attr('id')).val();
            curQueryObj['queryResponse'] = queryResponse.substr(0,990);
            curQueryObj['crudQuery'] = 1;
            // console.log('query submit response', curQueryObj);
            postData(config.posting, curQueryObj, (r)=> {
                let mailbody=queryResponse;
                let sendObj={sendmail,email,mailbody,query};
                CRUD.sendEmail(undefined,sendObj,(p)=> {
                    cur.innerText=oldTxt;
                    alert('mail - ' + p);
                    swal.close();
                });
            });
        } //this function is acting like a closure as curOueryObj can be used inside it as well
        CRUD.handleResendMail=(cur)=>{
            let mailbody=$(cur).attr('response');
            let sendObj={sendmail,email,mailbody,query};
            CRUD.sendEmail(cur,sendObj,(p)=> {
                alert('resend mail - ' + p);
            });
            // console.log('mailer',cur);
        }
        let fnSupportReplyCallback = (replies) => {
            // console.log('replies', replies);
            let rows = [];
            let xrow = [];
            let xdiv = document.createElement('div');
            xdiv.id = 'queryId';
            xdiv.style.width = '100%';
            xdiv.style.height = '500px';
            xdiv.style.overflow = 'auto';
            xdiv.style.position = 'relative';
            xrow.push(`
            <div class="alignEvenColumn">
                <span><h2 class="purpletxt">QUERY RESPONSE: ${id} - ${email}</h2></span>
                <span><textarea id="txtQueryResponse${id}" rows="5" style="width: 80%" placeholder="enter your response here (1000 chars)"></textarea></span>
                <span>
                    <button class="btn colorMed" id="${id}" email="${email}" onclick="CRUD.submitSupportResponse(this)">Submit</button>
                </span>
            </div>
            `);
            rows.push(...xrow);
            xrow=(replies.map(x=>{
                return `<div class="alignEvenRow left line">
                    <span style="width: 80%;" type="reply" class="">${x.reply}</span>
                    <span style="width: 15%;" type="repliedon" class="graytxt">${x.repliedOn}</span>
                    <span style="width: 5%;" class="purpletxt right" email="${email}" query="${query}" response="${x.reply}" onclick="CRUD.handleResendMail(this);">Mail</span>
                </div>`
            }));
            rows.push(...xrow);
            xdiv.innerHTML = rows.join('');
            swal({
                content: xdiv,
                button: 'Close'
            }).then(flag => swalRemover(xdiv));
        }
        getData(config.repliesUrl + '&id=' + id, (replies) => {
            fnSupportReplyCallback(replies);
        });
    }

    let styles = {
        cell2: 'width: 10%'
        , cell3: 'width: 10%'
        , cell4: 'width: 15%'
        , cell5: 'width: 55%'
        , cell6: 'width: 10%'
        , gridTemplate: "grid-template-columns: repeat(6, 1fr)"
    }
    getData(config.supportUrl, (data) => {
        let rows = [];
        rows.push(`<div>
              <span><input style="width: 90%;" type="text" placeholder="search queries by name,mobile,email,querytext - top 200 shown"/></span>
            </div>`);
        rows.push(`
                <div><div class="table-header">
                <span style="${styles.cell2}">Name</span>
                <span style="${styles.cell3}">Mobile</span>
                <span style="${styles.cell4}">Email</span>
                <span style="${styles.cell5}">Query</span>
                <span style="${styles.cell6}"></span>
                </div></div>
            `);
        let xrows = data.map((x) => {
                CRUD.queryObject[x.id] = x;
                return `<div class="table line ${x.isreplied==='1'?'table-cells-gray':''}">
                    <span style="${styles.cell2}">${x.name}</span>
                    <span style="${styles.cell3}">${x.mobile}</span>
                    <span style="${styles.cell4}">${x.email}</span>
                    <span style="${styles.cell5}">${x.query}</span>
                    <span style="${styles.cell6}">
                    <a class="purpletxt" onclick="CRUD.replyClick(${x.id})">reply</a>
                </span>
                </div>`
            }
        );
        rows.push(...xrows);
        rightContainer.html(rows.join(''));
    }, (err) => {
        console.error(err)
    });
}

function pullSettings() {
    CRUD.saveSettings=(cur)=>{
        let name=$(cur).attr('name');
        let pwd=$('#pwd').val();
        let repwd=$('#repwd').val();
        let email=$('#email').val();
        if(pwd.length<8 && pwd!==''){
            swal('min 8 characters password is needed');
            return;
        }
        if(pwd!==repwd){
            swal('passwords dont match');
            return;
        }
        postData(config.posting,{crudSetting:1,name,pwd,email});
    }
    let name=dpMod.initParam.name;
    postData(config.posting,{userSetting:1,name},(res)=>{
        let {email}=res[0];
        let rows=[];
        rows.push(`
        <div class="alignEvenColumn">
            <span><input id="pwd" type="password" placeholder="enter new password"/></span>
            <span><input id="repwd" type="password" placeholder="confirm new password"/></span>
            <span><input id="email" type="text" value="${email}" placeholder="update email"/></span>
            <span><button class="btn green" name="${name}" onclick="CRUD.saveSettings(this)">Save</button></span>
        </div>
    `);
        rightContainer.html(rows.join(''));
    });
}


function pullUploads() {
    appGlobal.fetchUploads('image');
}

function pullData(tag) {
    rightContainer = $('#right2');
    if(dpMod.initParam===undefined) setProfileAvtars();
    if (tag !== enums.names.home) rightContainer.html("");
    if (tag === enums.names.banner) pullBanner();
    else if (tag === enums.names.category) pullCategory();
    else if (tag === enums.names.config) pullConfig();
    else if (tag === enums.names.errors) pullErrors();
    // if (tag === enums.names.events) pullEvents();
    else if (tag === enums.names.support) pullSupport();
    else if (tag === enums.names.uploads) pullUploads();
    else if (tag === enums.names.settings) pullSettings();
}

function handleLeftNavBar() {
    let menu = $('#leftMenu');
    let rightBox = $('#rightContainer');
    isvisible = menu.is(":visible");
    if (isvisible) {
        menu.hide();
        rightBox.removeClass('rightbox');
    } else {
        menu.show();
        rightBox.addClass('rightbox');
    }
}
