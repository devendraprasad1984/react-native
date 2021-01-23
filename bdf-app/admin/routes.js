const dpMod = {};
dpMod.routes = {};
let enums = {
    names: {
        home: '/'
        , banner: '/banner'
        , category: '/category'
        , config: '/config'
        , errors: '/errors'
        , support: '/support'
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
    let btnClass = 'btn purple textwhite';
    return `<div id="navBarLeft" class="leftbox textwhite flexcol">
            <a href="#${enums.names.home}" class="${btnClass}" tag="${enums.names.home}">Home</a>
            <a href="#${enums.names.banner}" class="${btnClass}" tag="${enums.names.banner}">Banner</a>
            <a href="#${enums.names.category}" class="${btnClass}" tag="${enums.names.category}">Categories</a>
            <a href="#${enums.names.config}" class="${btnClass}" tag="${enums.names.config}">Config</a>
            <a href="#${enums.names.errors}" class="${btnClass}" tag="${enums.names.errors}">Errors</a>
            <a href="#${enums.names.support}" class="${btnClass}" tag="${enums.names.support}">Support</a>
        </div>
    `;
}

dpMod.generateRoutes = function () {
    let {home, banner, category, config, errors, events, support} = dpMod;
    dpMod.routes = {
        '/': home,
        '/banner': banner,
        '/category': category,
        '/config': config,
        '/errors': errors,
        '/support': support,
    };
}

dpMod.home = function () {
    getData(config.counterUrl, (data) => {
        let res = data.map((x, i) => {
            let color = enums.names.colors[Math.floor(Math.random() * enums.names.colors.length)];
            let bg=`background-color: ${color}; color: white; opacity: 0.85`;
            return `<span style="text-align: center;  ${bg}">${x.type.toUpperCase()}
                    <br/> <span style="font-size: 50px; ${bg}">${x.counter}</span></span>`
        });
        $('#id_counters').html(res.join(''));
    });
    return `<div>
            <h2>
            <span class="grcolor1">Admin Controller</span>
            <span class="grcolor2 right" id="idWelcomeMsg"></span>
            </h2>
            <div id="right2">
             <div class="alignEvenRow">
                <img class="bdfLogo" src="assets/images/logo.png" />
                <img class="nwbLogo" src="assets/images/nwg.png" />
             </div>
             <div id="id_counters" class="counters cardsGrid"></div>
            </div>
    </div>`
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
                <div class="alignEvenRow">
                    <button class="btn red" onclick="CRUD.resetBanner()">Reset</button>
                    <button class="btn green" onclick="CRUD.saveBanner()">Save</button>
                </div>
                </div>
                <div class="alignEvenColumn">
                <div id="right2" class=""></div>   
                </div>
        </div>`
}
dpMod.category = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Configure Categories</span></h2>
            <div id="right2"></div>
    </div>`
}
dpMod.config = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Config</span></h2>
            <div id="right2"></div>
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
dpMod.events = function () {
    return `<div>
            <h2><span id="right1" class="grcolor1">Configure Events</span></h2>
                <div id="upeventform" class="alignEvenColumn">
                <input type="hidden" id="id" name="id"/>
                <input type="datetime-local" class="form-control date" id="date" name="date" placeholder="Event Date" />
                <input type="text"  id="eventname" name="eventname" placeholder="Event Name" />
                <textarea  id="eventdesc" name="eventdesc" placeholder="Event Description" rows="10"></textarea>
                <div class="alignEvenRow">
                    <button class="btn red" onclick="CRUD.resetEvent()">Reset</button>
                    <button class="btn green" onclick="CRUD.saveEvent()">Save</button>
                </div>
                </div>
                <div id="right2" class="standardHeightAppDiv"></div>   
                <div id="idRegisteredUsers"></div>
            </div>
    </div>`
}

dpMod.setActiveIcon = function (elm, url) {
    let nav = Object.values(elm.getElementsByTagName('a'));
    let matchIcon = nav.filter(x => x.hash === '#' + url)[0];
    matchIcon.className = 'btn active';
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
};
dpMod.init = function (url) {
    // console.log('in init',url);
    switch (url) {
        default:
            pullData(url);
            break;
    }
}

// For first load or when routes are changed in browser url box.
window.addEventListener('load', dpMod.router);
window.addEventListener('hashchange', dpMod.router);
window.addEventListener('onpopstate', dpMod.router);



