function uvCustDOMReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

uvCustDOMReady(function () {
    uvAddSavayaBaliStyleSheets();

    if (document.querySelector('.uv-savaya-link')) {
        const uvsavayalink = document.querySelector('.uv-savaya-link').getAttribute('href'),
            uvsavayavenuelink = document.querySelector('.uv-landing-venuelink-1096295').getAttribute('href');

        const uvlandcont = document.querySelector('.uv-landing-cont.uv-lgrid-h100'),
            uvsavaya = document.querySelector('.uv-land-savaya');

        if (uvsavayalink && uvsavayalink === "javascript:void(0);")
            document.querySelector('.uv-savaya-link').setAttribute('href', uvsavayavenuelink);

        if (uvlandcont && uvsavaya) {
            uvlandcont.after(uvsavaya);
        }
    }
    if(typeof uv_desa_url !== "undefined")
        if (document.querySelector(".uv-landing-venuelink-1440723")) {
            const uvdesalink = document.querySelector(".uv-landing-venuelink-1440723");

            uvdesalink.setAttribute('href', uv_desa_url);
            uvdesalink.setAttribute('target', '_blank');
        }
    
    uvBuildNewLanding();
});

//builds the new landing for the microsites @auth:egt
function uvBuildNewLanding() {
    var mainCnt = document.querySelector(".uv-landing-cont-inner");
    var uvCards = document.querySelectorAll(".uv-landing-cont-inner a");
    var uvCardTarget = document.querySelector(".uv-landing-cont-inner a");

    var uvBaliTitle = document.createElement("div");
    uvBaliTitle.classList.add("uv-title-cnt");
    uvBaliTitle.classList.add("uv-bali");

    var uvBaliTitleBg = document.createElement("div");
    uvBaliTitleBg.classList.add("uv-title-bg");

    var uvBaliCards = document.createElement("div");
    uvBaliCards.classList.add("uv-cards-cnt");

    var uvJakartaTitle = document.createElement("div");
    uvJakartaTitle.classList.add("uv-title-cnt");
    uvJakartaTitle.classList.add("uv-jakarta");

    var uvJakartaTitleBg = document.createElement("div");
    uvJakartaTitleBg.classList.add("uv-title-bg");

    var uvJakartaCards = document.createElement("div");
    uvJakartaCards.classList.add("uv-cards-cnt");

    var uvStylesAux = document.createElement("style");// remove
    uvStylesAux.innerHTML = `
            .uv-landing-cont-inner {
                max-width: 1420px;
                margin: auto;
                padding: 40px 30px;
            }
            .uv-title-cnt,
            .uv-cards-cnt {
                width: 100%;
            }
            .uv-cards-cnt {
                display: flex;
                flex-direction: row;
                gap: 1em;
            }
        `;

    var uvNewCard;
    var uvAssetUrl = "/uvmicros/custom/venueids/1096295/assets/images/placeholders/";
    var uvMainAssetUrl = "/uvmicros/custom/venueids/1096295/assets/images/";
    var uvTitle = "Guestlist • Tickets • Tables";
    var uvRestaurantTitle = "Book Dinner";
    var uvAuxBg, uvAuxMicro;
    var uvCcUrl = "";

    if(mainCnt) {
        // mainCnt.insertAdjacentElement("afterbegin", uvStylesAux);// remove

        mainCnt.insertAdjacentElement("afterbegin", uvBaliTitle);
        uvBaliTitle.insertAdjacentElement("afterbegin", uvBaliTitleBg);
        mainCnt.insertAdjacentElement("beforeend", uvBaliCards);

        if(uvCards)
            uvCards.forEach(card => {
                uvBaliCards.insertAdjacentElement("beforeend", card);
                card.classList.add("uv-card");
                card.setAttribute("data-title", uvTitle);

                uvAuxBg = card.querySelector(".bg");
                if(card.classList.contains("uv-landing-venuelink-1096295")) {
                    uvAuxBg.style.backgroundImage = `url(${uvAssetUrl}savayabali-placeholder-bg.jpg)`;
                } else {
                    uvAuxBg.style.backgroundImage = `url(${uvAssetUrl}desakitsune-placeholder-bg.jpg)`;
                }
            });

        //Ina Ré
        uvNewCard = document.createElement("a");
        uvNewCard.classList.add("uv-card");
        uvNewCard.classList.add("uv-inare");
        uvBaliCards.insertAdjacentElement("beforeend", uvNewCard);
        uvBaliCards.classList.add("uv-bali-cards");
        // uvNewCard.setAttribute("href", "https://www.sevenrooms.com/explore/inare/reservations/create/search"); 
        uvNewCard.setAttribute("href", "https://www.sevenrooms.com/explore/inare/reservations/create/search?client_id=097717505d36831ee5566d984d1f500fcc6566132a635b167417974de50e360573c45829f8904c1571651619384c70f08d3d27e02ff5f5a9104d07df4404bac9");
        uvNewCard.innerHTML = buildCardHTML("", `${uvAssetUrl}inare-placeholder-bg.jpg`, `${uvMainAssetUrl}inare_logo.svg`, "Ina Ré");
        uvNewCard.setAttribute("data-title", uvRestaurantTitle);

        uvAuxMicro = uvCheckMicro();
        uvCcUrl = `https://booketing.com/microsite/${uvAuxMicro}/events/2184/1844069/chao-chao-jakarta`;

        //CHĀO CHÁO Rooftop
        uvNewCard = document.createElement("a");
        uvNewCard.classList.add("uv-card");
        uvNewCard.classList.add("uv-chaochao-rooftop");
        uvJakartaCards.insertAdjacentElement("beforeend", uvNewCard);
        uvJakartaCards.classList.add("uv-jakarta-cards");
        uvNewCard.setAttribute("href", uvCcUrl); //"https://www.sevenrooms.com/explore/chaochao/reservations/create/search"
        uvNewCard.innerHTML = buildCardHTML("", `${uvAssetUrl}chaochaorooftop-placeholder-bg.jpg`, `${uvMainAssetUrl}chaochao_rooftop-logo.svg`, "CHĀO CHÁO Rooftop");
        uvNewCard.setAttribute("data-title", uvTitle);

        //CHĀO CHÁO Restaurant
        uvNewCard = document.createElement("a");
        uvNewCard.classList.add("uv-card");
        uvNewCard.classList.add("uv-chaochao-restaurant");
        uvJakartaCards.insertAdjacentElement("beforeend", uvNewCard);
        uvNewCard.setAttribute("href", "https://www.sevenrooms.com/explore/chaochao/reservations/create/search");
        uvNewCard.innerHTML = buildCardHTML("", `${uvAssetUrl}chaochaorestaurant-placeholder-bg.jpg`, `${uvMainAssetUrl}chaochao_restaurant-logo.svg`, "CHĀO CHÁO Restaurant");
        uvNewCard.setAttribute("data-title", uvRestaurantTitle);

        //The Nineteen Jakarta
        uvNewCard = document.createElement("a");
        uvNewCard.classList.add("uv-card");
        uvNewCard.classList.add("uv-thenineteen");
        uvJakartaCards.insertAdjacentElement("beforeend", uvNewCard);
        uvNewCard.setAttribute("href", "https://www.sevenrooms.com/explore/thenineteen/reservations/create/search");
        uvNewCard.innerHTML = buildCardHTML("", `${uvAssetUrl}thenineteen-placeholder-bg.jpg`, `${uvMainAssetUrl}the_nineteen-logo.svg`, "The Nineteen Jakarta");
        uvNewCard.setAttribute("data-title", uvRestaurantTitle);

        mainCnt.insertAdjacentElement("beforeend", uvJakartaTitle);
        uvJakartaTitle.insertAdjacentElement("beforeend", uvJakartaTitleBg);
        mainCnt.insertAdjacentElement("beforeend", uvJakartaCards);
    }
    
    updateYear();
}

// it just builds the card inner html @auth:egt
function buildCardHTML(uvVenueId, uvBgUrl, uvLogoUrl, uvVenueName) {
    var uvHtml = `<div class="uv-landing-venue-item" data-venue="${uvVenueId}">
        <div class="bg" style="background-image: url(${uvBgUrl});"></div>
        <div class="uv-landing-venue-item-inner">
            <div class="brand">
                <div class="uv-landing-venuelogo" style="background-image: url(${uvLogoUrl});"></div>
                <div class="uv-landing-venuelogo-venuename">${uvVenueName}</div>
            </div>
            <div class="actions">
                <button>Book</button>
            </div>
        </div>
    </div>`;

    return uvHtml;
}

//gets current year so we can display it at the bottom of the file @auth:egt
function updateYear() {
    var yearCnt = document.querySelector("body .uv-landing-cont");
    var year = new Date().getFullYear();
    
    if(yearCnt)
        yearCnt.setAttribute("data-year", year);
}

//adds the missing stylesheets @auth:egt
function uvAddSavayaBaliStyleSheets() {
    var uvIsLanding = document.querySelector("body:has(.uv-landing-savayabali)");
    var uvHead = document.querySelector("head");
    var uvScriptVersion = Math.floor((Math.random() * 100) + 1);
    var uvStyleSheets = document.querySelectorAll('link[rel="stylesheet"]');

    var uvStyleNewSheets = `
      <link rel="stylesheet" href="/uvmicros/landing/uvmicrosuser.landing.css?v=${uvScriptVersion}">
      <link rel="stylesheet" href="/uvmicros/landing/uvmicrosuser.overmenu.css?v=${uvScriptVersion}">
    `;

    if(uvHead && uvIsLanding)
      uvHead.insertAdjacentHTML("beforeend", uvStyleNewSheets);

    if(uvStyleSheets && uvIsLanding)
        uvStyleSheets.forEach(sheet => {
            if (sheet.href.includes("/uvmicros/landing/uvmicros.landing.css")) {
                sheet.remove();
            }
        });
}

//check which microsite is @auth:egt
function uvCheckMicro() {
    var uvAuxLoc = document.location.href;
    var uvMicro = "";

    if(uv_microcode)
    {
        uvMicro = uv_microcode;
    }
    else
    {
        if(uvAuxLoc.includes("dance")) uvMicro = "dance";
        if(uvAuxLoc.includes("khaisamura")) uvMicro = "khaisamura";
        if(uvAuxLoc.includes("savayabali")) uvMicro = "savayabali";
    }

    return uvMicro;
}