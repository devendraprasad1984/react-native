const dpMod = {};
dpMod.routes = {};
let enums = {
    names: {
        home: '/'
        , banner: '/banner'
        , config: '/config'
        , errors: '/errors'
        , support: '/support'
        , uploads: '/uploads'
        , settings: '/settings'
        , colors: [
            '#ee9c67'
            , '#3ebf21'
            , '#15b9ca'
            , '#66bf9b'
            , '#6746e0'
            , '#3ebf21'
            , '#7d21bf'
            , '#ee4890'
        ]
    }
};
dpMod.nav = function () {
    let btnClass = ' colorMed textwhite';
    let name=dpMod.initParam===undefined ? 'error': dpMod.initParam.name;
    return `<div id="navBarLeft" class="leftbox textwhite flexcol">
            <a href="#${enums.names.home}" class="${btnClass}" tag="${enums.names.home}">Home</a>
            <a href="#${enums.names.banner}" class="${btnClass}" tag="${enums.names.banner}">Banner</a>
            <a href="#${enums.names.config}" class="${btnClass}" tag="${enums.names.config}">Config</a>
            <a href="#${enums.names.support}" class="${btnClass}" tag="${enums.names.support}">Support</a>
            <a href="#${enums.names.uploads}" class="${btnClass}" tag="${enums.names.uploads}">Uploads</a>
            <br/>
            <a href="#${enums.names.settings}" class="${btnClass}" tag="${enums.names.settings}">Settings</a>
            <a href="#${enums.names.errors}" class="${btnClass}" tag="${enums.names.errors}">Errors</a>
            <span class="right textwhite" onclick="handleSignout()">${name}, signout</span>
        </div>
    `;
}

dpMod.generateRoutes = function () {
    let {home, banner, config, errors, uploads, support,settings} = dpMod;
    dpMod.routes = {
        '/': home,
        '/banner': banner,
        '/config': config,
        '/errors': errors,
        '/support': support,
        '/uploads': uploads,
        '/settings': settings,
    };
}

dpMod.home = function () {
    getData(config.counterUrl, (data) => {
        let res = data.map((x, i) => {
            let color = enums.names.colors[Math.floor(Math.random() * enums.names.colors.length)];
            let bg = `background-color: ${color}; color: white; opacity: 0.85`;
            return `<span style="text-align: center;  ${bg}">${x.type.toUpperCase()}
                    <br/> <span style="font-size: 50px; ${bg}">${x.counter}</span></span>`
        });
        $('#id_counters').html(res.join(''));
    });
    return `<div>
            <h2>
            <span class="grcolor1">Admin Controller</span>
            <span class="grcolor2 right" id="idWelcomeMsg">${dpMod.initParam.msg}</span>
            </h2>
            <div id="right2">
             <div id="id_counters" class="counters cardsGrid flexcard"></div>
            </div>
    </div>`
}
dpMod.selectMedia=(whereId)=>{
    let where2DisplayLink=(link)=>{
        let curRef=this.getAttribute('whichIdRef'); //this is referring the current button for selection of images which was clicked at that time
        let thisElem=$('#'+curRef);
        thisElem.val(link);
    }
    return `
    <span style="width: 10%">
        <button whichIdRef="${whereId}" class="btn black" onclick="appGlobal.fetchUploads('image',true,${where2DisplayLink});">...</button>
    </span>
    `
}
dpMod.banner = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Configure Banner</span></h2>
                <div id="bannerform" class="alignEvenColumn">
                <input type="text"  id="about" placeholder="what is it about" />
                <select id="seltype">
                <option value="Text">Text</option>
                <option value="Image">Image</option>
                <option value="Video">Video</option>
                </select>
                <textarea  id="desc" placeholder="Description" rows="10"></textarea>
                ${dpMod.selectMedia('desc')}
                <div class="alignEvenRow">
                    <button class="btn red" onclick="CRUD.resetBanner()">Reset</button>
                    <button class="btn green" onclick="CRUD.saveBanner()">Save</button>
                </div>
                </div>
                <div class="alignEvenColumn">
                <div id="right2"></div>   
                </div>
        </div>`
}
dpMod.settings = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Admin User Settings</span></h2>
            <div id="right2"></div>
    </div>`
}
dpMod.config = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Config</span></h2>
            <div id="right2" class="right2"></div>
    </div>`
}
dpMod.errors = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Errors</span></h2>
            <div id="right2"></div>
    </div>`
}
dpMod.support = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Support & Queries</span></h2>
            <div id="right2"></div>
    </div>`
}
dpMod.uploads = function () {
    return `<div class="alignEvenColumn">
    <h2><span id="right1" class="grcolor1">Uploader</span></h2>
    <div>
        <input type="file" id="imageInput" accept="image/*"/> <input type="text" id="tagimageInput" placeholder="enter tags to search"/>
        <button class="btn black" onclick="appGlobal.uploadHandler('imageInput','image')">Upload Image</button>
    </div>
    <div>
        <input type="file" id="videoInput" accept="video/*"/> <input type="text" id="tagvideoInput" placeholder="enter tags to search"/>
        <button class="btn black"  onclick="appGlobal.uploadHandler('videoInput','video')">Upload Video</button>
    </div>
    <div id="idUploadContents"></div>
    </div>
    `;
}

dpMod.setActiveIcon = function (elm, url) {
    let nav = Object.values(elm.getElementsByTagName('a'));
    let matchIcon = nav.filter(x => x.hash === '#' + url)[0];
    matchIcon.className = 'active';
}

dpMod.generateRoutes();
dpMod.router = (evt) => {
    const url = window.location.hash.slice(1) || "/";
    const routeResolved = dpMod.routes[url];
    let navBar = document.getElementById('leftMenu');
    let rightContainer = document.getElementById('rightContainer');
    navBar.innerHTML = dpMod.nav();
    rightContainer.innerHTML = (routeResolved)(); //IIFE
    dpMod.setActiveIcon(navBar, url);
    dpMod.init(url);
    window.addEventListener('hashchange', dpMod.router);
    window.addEventListener('onpopstate', dpMod.router);
};
dpMod.init = function (url) {
    switch (url) {
        default:
            pullData(url);
            break;
    }
}


