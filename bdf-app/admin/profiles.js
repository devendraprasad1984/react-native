function setProfileAvtars() {
    getData(config.adminUrl, (avtars) => {
        let profiles = [];
        profiles.push(`
            <div class="overlay-content">
            <span class="grcolor3" style="font-size: 30px">Choose Your Avatar....</span>
            <div class="avataricons">`
        );
        avtars.map(x => {
            profiles.push(`
                <span class="cardbox" onclick="handleAvatarClick(this,'${x.name}')">
                    <img src="${x.icon}"/>
                    <br/><span class="grcolor1" style="font-size: 15px">${x.name}</span>
                </span>
            `);
        });
        profiles.push(`
            </div>
            <span class="" style="font-size: 12px">BDF Contacts<br/>NWBContacts</span>
            </div>
        `);
        document.getElementById('idOverlay').innerHTML = profiles.join('');
    });
}

function handleAvatarClick(elm, avtarName) {
    // console.log('clicked avatar', elm);
    appGlobal.curAvtar.name = avtarName;
    let msg = `Welcome, ${appGlobal.curAvtar.name} <a style="font-size: 14px;" href="javascript:void(0)" onclick="handleSignout()">signout</a>`;
    $('#idWelcomeMsg').html(msg);
}


function handleSignout() {
    console.log('signout object', appGlobal.curAvtar);
    //do some cleanup here
    $('#idOverlay').show();
}


(function () {
    // setProfileAvtars();
    $('#idOverlay').hide();
})();
