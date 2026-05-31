// 05 Tableaux
(function(){javascript: (function () {
    javascript: (function () {
        !(function () {
            if (
                ((function () {
                    for (
                        var t = document.querySelectorAll(
                                '[id*="bm-a42"],[class*="bm-dtnum-infos"],[class="bm-dtnum-message"],[class*="bm-dtnum-message"],[class="bm-dtnum-compteur"],[class="bm-dtnum-compteur-images"],[class="bm-dtnum-btn-action"],[class="bm-dtnum-btn-action-group"],[class="bm-dtnum-list-autocomplete"]'
                            ),
                            e = 0;
                        e < t.length;
                        e++
                    )
                        t[e].remove();
                    var n = document.querySelectorAll('[class*="bm-a42"]');
                    for (e = 0; e < n.length; e++) {
                        var a = [];
                        n[e].classList.forEach(function (t) {
                            t.startsWith("bm-a42") && a.push(t);
                        }),
                            a.forEach(function (t) {
                                n[e].classList.remove(t);
                            });
                    }
                })(),
                (function () {
                    const t = document.createElement("style");
                    (t.type = "text/css"),
                        (t.id = "bm-dtnum-style"),
                        t.appendChild(
                            document.createTextNode(
                                'body[class*="bm-a42"]{margin-bottom:20px!important;}.bm-dtnum-reduce-img{max-width:500px;}[class*="bm-dtnum-focus"] img,[class*="bm-dtnum-focus"] svg,[class*="bm-dtnum-focus"] [role="img"]{max-width:initial;}.bm-dtnum-focus *:focus{outline: 4px dotted blueviolet !important;outline-offset:1px !important;}.bm-dtnum-outline-elt,.bm-dtnum-contentcss .bm-dtnum-outline-elt-before::before,.bm-dtnum-contentcss .bm-dtnum-outline-elt-before::after{/*outline: 4px solid #962e3f;*/outline: 4px solid #343643;padding:5px;/*on double par un outline clair pour les cas de fonds de couleurs foncés*/box-shadow:0 0 0 6px white;}.bm-dtnum-outline-soft{outline:1px solid green;padding:2px;}.bm-dtnum-outline-hidden{outline:4px solid red;}.bm-dtnum-outline-elt-nc{outline: 4px dotted orange;}.bm-dtnum-bg-elt-hidden{background: #e8baba!important;color:#000!important;}.bm-dtnum-code{font-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;padding:2px!important;}html span.bm-dtnum-message,body span.bm-dtnum-message{font-family:sans-serif!important;font-size:12px!important;font-weight:initial!important;font-style:initial!important;font-variant: normal !important;text-align: left!important;line-height:20px!important;letter-spacing: 0 !important;text-transform: initial!important;position:relative!important;/*position: static !important;*/display:inline-block!important;width:auto!important;height: auto !important;/*flex:none!important;*/clear: none !important;float: none !important;background: #213556 !important;color:#fff!important;border:1px solid #ccc!important;padding:5px!important;border-radius: 3px !important;box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;margin: 0 !important;opacity: 1 !important;white-space: pre-wrap;z-index:900000!important;text-align: left !important;text-decoration: none !important;text-shadow: none !important;}html span.bm-dtnum-message span,body span.bm-dtnum-message span{font-size:12px!important;font-weight:initial!important;font-style:initial!important;font-variant: normal !important;color:#fff!important;}html span.bm-dtnum-message *,body span.bm-dtnum-message *{background: #213556 !important;}html span.bm-dtnum-message,body span.bm-dtnum-message{display:inline-block!important;}html body span.bm-dtnum-alert,body span.bm-dtnum-alert{background:#962e3f!important;}html span.bm-dtnum-alert *,body span.bm-dtnum-alert *{background:#962e3f!important;}html body span.bm-dtnum-warning,body span.bm-dtnum-warning{background:#BA5C33!important;}html span.bm-dtnum-warning *,body span.bm-dtnum-warning *{background:#BA5C33!important;}html .bm-dtnum-message-supp,body .bm-dtnum-message-supp{background:#b6afb0!important;color:#213556!important;}html .bm-dtnum-message a,body .bm-dtnum-message a{color:#fff!important;}/**affichages des noms accessibles**//**on ne les affiche pas si le bouton n\'est pas actité**/span.bm-dtnum-accessible-name,span.bm-dtnum-accessible-description{display: none!important;padding-right:4px;}body.bm-dtnum-accname span.bm-dtnum-accessible-name,body.bm-dtnum-accname span.bm-dtnum-accessible-description{display:block!important;background:#f2ebc7!important;color:#213556!important;}body.bm-dtnum-accname span.bm-dtnum-accessible-name *,body.bm-dtnum-accname span.bm-dtnum-accessible-description *{background:#f2ebc7!important;}body.bm-dtnum-accname span.bm-dtnum-accessible-name b,body.bm-dtnum-accname span.bm-dtnum-accessible-description b{color:#213556!important;}}.bm-dtnum-hide-nameproperties .bm-dtnum-nameproperty{display:none!important;}span.bm-dtnum-message-hidden{display:none!important}.bm-dtnum-infos{font-family: Verdana, sans-serif;font-size:11px!important;position:fixed!important;display:block!important;bottom:0;right:0;width:100%;z-index:900000!important;}.a42-bm-hidden-message-part{display:none}.bm-dtnum-bm-active{background:#962e3f!important;color:#fff!important;font-size:12px!important;padding:5px!important;line-height:20px!important;border-radius:3px 0 0 3px!important;margin:3px 0 3px 0!important;}.bm-dtnum-compteur{font-family: Verdana, sans-serif;background:#213556!important;font-size:11px!important;color:#ffffff!important;padding:3px!important;margin:0px!important;z-index:900000!important;}.bm-dtnum-compteur ul{font-size:11px!important;padding:0 5px 0 10px!important;margin:0!important;margin-bottom:3px!important;line-height:14px!important;text-align:center;}.bm-dtnum-compteur ul li{font-size:14px!important;font-family: Verdana, sans-serif;color:#ffffff!important;line-height:20px!important;list-style-type:\'- \'!important;margin-bottom:0!important;padding-bottom:0!important;}.bm-dtnum-list .bm-dtnum-compteur ul li,.bm-dtnum-compteur ul li{display:inline!important;}.bm-dtnum-list .bm-dtnum-compteur ul li:after,.bm-dtnum-compteur ul li:after{content:" | ";}.bm-dtnum-btn-action-group button{display:block!important;background:transparent!important;border:1px solid #fff!important;border-radius:2px;padding:10px!important;cursor:pointer!important;}.bm-dtnum-btn-hide-autocomplete{float: right;margin-top: -35px}/** Styles spécifiques à chaque BM **//** BM 1**//**on n\'entoure pas les images contenues dans les liens**/.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] embed.bm-dtnum-outline-elt{outline:none!important;padding:initial!important;max-width:auto;}/**on n\'affiche pas les messages des images contenues dans les liens**/.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] .bm-dtnum-message-bm-dtnum-image,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] .bm-dtnum-message-bm-dtnum-image{display:none!important;}/** on entoure les images contenues dans des liens**/.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] embed.bm-dtnum-outline-elt{outline: 4px solid #515150;padding:5px;display:block;}/** on entoure les liens qui contiennent des images**/.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href].bm-dtnum-image-outline-link-with-image{outline: 4px dotted #515150;padding:8px;display:block;}/** BM 1-9 **//**on annule l\'entourage des images qui ne sont pas dans des figure lorsqu\'on active le BM des images avec le BM des images légendées**/.bm-dtnum-legend.bm-dtnum-image img.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image [role="img"].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image map.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image [usemap].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image [isemap].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image img[usemap].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image svg.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image canvas.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image object.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image embed.bm-dtnum-outline-elt{outline:none!important;padding:initial!important;max-width:auto;}/**on masque les messages des images qui ne sont pas dans des figure**/.bm-dtnum-legend.bm-dtnum-image .bm-dtnum-message-bm-dtnum-image{display:none!important;}.bm-dtnum-legend.bm-dtnum-image figure .bm-dtnum-message-bm-dtnum-image{display:block!important;}/**on masque le compteur des images dans la BM de détection des images légendées */.bm-dtnum-image.bm-dtnum-legend .bm-dtnum-compteur-images{display:none!important}.bm-dtnum-legend.bm-dtnum-image figure img.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure [role="img"].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure map.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure [usemap].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure [isemap].bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure svg.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure canvas.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure object.bm-dtnum-outline-elt,.bm-dtnum-legend.bm-dtnum-image figure embed.bm-dtnum-outline-elt{outline:1px solid green!important;padding:2px!important;max-width:200px;}/** BM 2**/.bm-dtnum-iframe{}.bm-dtnum-src{display:block;width: 250px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.bm-dtnum-iframe-content{position:fixed;left:0;top:0;bottom:0;width:300px;overflow-y:scroll;background:#fff;padding:15px;font-size:0.8em!important;box-shadow:3px 0 5px #000;z-index:10000;}.bm-dtnum-iframe-content h1{font-size:0.6em;}.bm-dtnum-tableau-iframe{margin:auto;border:1px solid #000;background:#FFF;border-collapse:collapse;font-family:sans-serif!important;font-weight:initial!important;font-style:initial!important;position:relative!important;line-height:30px!important;text-transform: initial;}.bm-dtnum-tableau-iframe tr,.bm-dtnum-tableau-iframe td,.bm-dtnum-tableau-iframe th{border: 1px solid #CEDAE6;}.bm-dtnum-tableau-iframe td,.bm-dtnum-tableau-iframe th{padding:5px}.bm-dtnum-tableau-iframe th{text-align: center;border-bottom: 1px solid #CEDAE6;background-color: #e3ebf2;}.bm-dtnum-tableau-iframe .a42-bm-center{text-align:center;}/** BM 5 **/.bm-dtnum-5 caption{position:relative!important;width:auto!important;height:auto!important;clip:initial!important;clip-path: initial!important;}/** BM 6 **/.bm-dtnum-link a[href].bm-dtnum-outline-elt,.bm-dtnum-link [role="link"].bm-dtnum-outline-elt{display:inline-block!important;}/**on annule l\'entourage des images qui ne sont pas dans des liens lorsqu\'on active le BM des images avec le BM des liens**/.bm-dtnum-link.bm-dtnum-image img.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="img"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image figure map.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image figure [usemap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image figure [isemap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image svg.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image canvas.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image object.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image embed.bm-dtnum-outline-elt{outline:none!important;padding:initial!important;max-width:auto;}/**on masque les messages des images qui ne sont pas dans des liens**/.bm-dtnum-link.bm-dtnum-image .bm-dtnum-message-bm-dtnum-image{display:none!important;}.bm-dtnum-link.bm-dtnum-image .bm-dtnum-message.bm-dtnum-message-link,.bm-dtnum-link a[href] .bm-dtnum-message,.bm-dtnum-link [role="link"] .bm-dtnum-message{display:inline-block!important;}/**on masque le compteur des images dans la BM de détection des liens**/.bm-dtnum-link.bm-dtnum-image .bm-dtnum-compteur-images{display:none!important}.bm-dtnum-link.bm-dtnum-image a[href] img.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] img.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] map.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] map.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] [usemap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [usemap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] [ismap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [ismap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] svg.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] canvas.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] object.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] object.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] embed.bm-dtnum-outline-elt{outline:1px solid green!important;padding:2px!important;max-width:200px;}.bm-dtnum-link a[href] .bm-dtnum-message + .bm-dtnum-message,.bm-dtnum-link [role="link"] .bm-dtnum-message + .bm-dtnum-message{background:#5c687d!important;font-size:11px!important;}/** BM 9-9 **/.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-outline-elt,.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-outline-soft{outline:none!important;}.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-message{display:none!important}/**BM 9-1 **/.bm-dtnum-heading{}/**BM 9-2 et BM 12-6**/.bm-dtnum-structure header.bm-dtnum-outline-elt,.bm-dtnum-structure [role="banner"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt{outline: dashed 5px #962e3f!important;}.bm-dtnum-structure nav.bm-dtnum-outline-elt,.bm-dtnum-structure [role="navigation"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt{outline: dotted 5px green!important;}.bm-dtnum-structure main.bm-dtnum-outline-elt,.bm-dtnum-structure [role="main"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt{outline: double 5px #213556!important;}.bm-dtnum-structure footer.bm-dtnum-outline-elt,.bm-dtnum-structure [role="contentinfo"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt{outline:solid 5px purple!important;}.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt,.bm-dtnum-structure [role="search"].bm-dtnum-outline-elt{outline:groove 5px #d63cd6!important;}.bm-dtnum-structure header.bm-dtnum-outline-elt,.bm-dtnum-structure nav.bm-dtnum-outline-elt,.bm-dtnum-structure main.bm-dtnum-outline-elt,.bm-dtnum-structure footer.bm-dtnum-outline-elt,.bm-dtnum-structure [role="banner"].bm-dtnum-outline-elt,.bm-dtnum-structure [role="navigation"].bm-dtnum-outline-elt,.bm-dtnum-structure [role="main"].bm-dtnum-outline-elt,.bm-dtnum-structure [role="contentinfo"].bm-dtnum-outline-elt,.bm-dtnum-structure [role="search"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt{max-width:99%;margin:10px 10px 25px 10px;}.bm-dtnum-structure header.bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-structure nav.bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-structure main.bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-structure footer.bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt .bm-dtnum-outline-elt{margin:30px;}.bm-dtnum-structure .bm-dtnum-message,.bm-dtnum-12-6 .bm-dtnum-message{display:block!important}/**BM 9-3 **/.bm-dtnum-list li,.bm-dtnum-list [role="listitem"],.bm-dtnum-list dd,.bm-dtnum-list dt,.bm-dtnum-list [role="term"],.bm-dtnum-list [role="definition"]{display:block!important;margin-top:1px!important;}.bm-dtnum-list .bm-dtnum-message{display:inline-block!important;}.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-message{display:none!important;}.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-outline-elt,.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-outline-soft{outline:none!important;padding-top:0!important;padding-bottom:0!important;}.bm-dtnum-list .bm-dtnum-infos ul li{/*display: list-item!important;*/list-style-type: \'- \'!important;margin-top:0!important;}.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list{outline-color:#666;outline-width:1px;/*on double par un outline clair pour les cas de fonds de couleurs foncés*/box-shadow:0 0 0 6px white;}body.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list span.bm-dtnum-message{font-size:60%;background:#666!important;line-height: 10px !important;}body.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list span.bm-dtnum-message span.bm-dtnum-code{background:#666!important;}.bm-dtnum-list .bm-dtnum-compteur .bm-dtnum-outline-elt,.bm-dtnum-list .bm-dtnum-compteur .bm-dtnum-outline-elt-bm-dtnum-list{outline:none;box-shadow:none;}/**BM 9-4 **/.bm-dtnum-quote q,.bm-dtnum-quote cite{display:inline-block!important;}/** BM 10-1 attributs et balises de mise en forme**//**BM 10-2 **//**BM 10-3 **/.bm-dtnum-10-3 *{float:unset!important;order:unset!important;position:static!important;flex:unset!important;}.bm-dtnum-10-3 {display:block!important;}/** voir pour récupérer les styles en js et les remettre à 0 si besoin**//**par exemple ne mettre en display:block que les éléments qui n\'ont pas de display:none!**//** BM 10-5  **/.bm-dtnum-disableimg *{background-image:none!important;}.bm-dtnum-disableimg img{opacity:0!important;}/** BM 10-6  **/.bm-dtnum-linkcolor .bm-dtnum-outline-elt{outline-offset: 3px;}/** BM 10-12 text spacing **/.bm-dtnum-textspacing *{line-height:1.5 !important;letter-spacing:0.12em !important;word-spacing:0.16em !important;}.bm-dtnum-textspacing p{margin-bottom:2em!important;}/** BM form champ de formulaire  **//** BM fiedlset Regroupement de champs de formulaires  **//** BM 11-13 **/body.bm-dtnum-autocomplete{margin-left:300px;}body.bm-dtnum-autocomplete.bm-dtnum-hide-list-autocomplete{margin-left:initial!important;}.bm-dtnum-list-autocomplete{position:fixed;top:0;left:0;bottom:0;overflow:scroll;max-width:300px;font-family:sans-serif!important;font-size:12px!important;font-weight:initial!important;font-style:initial!important;line-height:initial!important;background: #213556 !important;color:#fff!important;border:1px solid #ccc!important;padding:3px 15px 0 3px!important;border-radius: 3px !important;box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;z-index:900000!important;}.bm-dtnum-list-autocomplete ul,.bm-dtnum-list-autocomplete li,.bm-dtnum-list-autocomplete b{font-size:12px!important;}.bm-dtnum-list-autocomplete ul{padding:0 0 0 15px;}'
                            )
                        ),
                        document.head.appendChild(t);
                })(),
                document.body.classList.contains("bm-dtnum-table"))
            ) {
                document.body.classList.toggle("bm-dtnum-table"),
                    document.querySelectorAll('[class*="bm-dtnum-message-' + t + '"],[class*="bm-dtnum-infos-' + t + '"]').forEach(function (t) {
                        t.remove();
                    });
                let h = document.querySelectorAll('[class*="bm-dtnum-outline-elt-' + t + '"],[class*="bm-dtnum-outline-soft-' + t + '"]');
                for (let k = 0; k < h.length; k++) h[k].classList.remove("bm-dtnum-outline-elt", "bm-dtnum-outline-elt-" + t, "bm-dtnum-outline-soft", "bm-dtnum-outline-soft-" + t);
                if (!document.body.classList.value.match(/\bbm-a42\b/)) {
                    let y = document.getElementById("bm-dtnum-style");
                    y && y.parentNode.removeChild(y);
                }
            } else {
                document.body.classList.toggle("bm-dtnum-table");
                var t = "bm-table";
                let x = ["bm-dtnum-outline-elt", "bm-dtnum-outline-elt-" + t],
                    A = document.createElement("div");
                A.className = `bm-dtnum-infos bm-dtnum-infos-${t}`;
                let M = document.createElement("div");
                M.className = `bm-dtnum-compteur bm-dtnum-compteur-${t}`;
                let v = document.createElement("ul");
                function n() {
                    let e = document.createElement("span");
                    return (e.className = `bm-dtnum-message bm-dtnum-message-${t}`), e;
                }
                function a() {
                    let t = document.createElement("span");
                    return t.classList.add("bm-dtnum-code"), t;
                }
                M.appendChild(v), A.append(M), document.body.appendChild(A);
                var i = document.getElementsByTagName("table"),
                    m = document.querySelectorAll('[role="table"]');
                if (document.querySelectorAll('table,[role="table"]')) {
                    i = document.querySelectorAll('table,[role="table"]');
                    for (var l = 0; l < i.length; l++) {
                        i[l].getAttribute("aria-labelledby");
                        const L = g(i[l]),
                            T = (i[l].getAttribute("aria-describedby"), d(i[l])),
                            N = i[l].getAttribute("aria-label"),
                            w = u(i[l]),
                            E = i[l].getAttribute("title");
                        let B = "";
                        B =
                            L.length > 0
                                ? L.join(" ")
                                : N && "" !== N.trim()
                                ? N.trim()
                                : w && "" !== w.textContent.trim() && "TABLE" === i[l].tagName
                                ? c(w.textContent.trim())
                                : E && "" !== E.trim() && "TABLE" === i[l].tagName
                                ? E.trim()
                                : "⛔";
                        let H = "";
                        T.length > 0 ? (H = T.join(" ")) : E && "" !== E.trim() && !B.includes(E.trim()) && formtags.includes(i[l].tagName) && (H = E.trim()), i[l].classList.add(...x);
                        let q = a();
                        (q.className = "bm-dtnum-accessible-name"), (q.innerHTML += ` <b>Nom :</b> ${B}`);
                        let C = a();
                        (C.className = "bm-dtnum-accessible-description"), (C.innerHTML += ` <b>Description :</b> ${H}`);
                        let S = n(),
                            z = a();
                        (z.innerHTML += "&lt;" + i[l].tagName.toLowerCase()),
                           i[l].getAttribute("role") && "table" !== i[l].getAttribute("role") && "presentation" !== i[l].getAttribute("role")
                                ? (z.innerHTML += ' ⛔<b>role</b>="' + i[l].getAttribute("role") + '"')
                                : "presentation" == i[l].getAttribute("role")
                                ? (z.innerHTML += ' ⚠️<b>role</b>="' + i[l].getAttribute("role") + '"')
                                : i[l].getAttribute("role") && (z.innerHTML += ' <b>role</b>="' + i[l].getAttribute("role") + '"'),
                            "TABLE" !== i[l].tagName && i[l].getAttribute("role"),
                            "true" == i[l].getAttribute("aria-hidden") && ((z.innerHTML += ' ⛔<b>aria-hidden</b>="true"'), S.classList.add("bm-dtnum-alert")),
                            i[l].getAttribute("aria-labelledby") &&
                                (z.innerHTML +=
                                    ' <span class="bm-dtnum-nameproperty"><b>aria-labelledby</b>="' +
                                    i[l].getAttribute("aria-labelledby") +
                                    '" ' +
                                    (document.getElementById(i[l].getAttribute("aria-labelledby")) ? ': "' + document.getElementById(i[l].getAttribute("aria-labelledby")).textContent + '"' : "⛔ élément ciblé non trouvé") +
                                    "</span>"),
                            i[l].getAttribute("aria-label") && (z.innerHTML += ' <span class="bm-dtnum-nameproperty"><b>aria-label</b>="' + i[l].getAttribute("aria-label") + '"</span>'),
                            i[l].getAttribute("title") && (z.innerHTML += ' <span class="bm-dtnum-nameproperty"><b>title</b>="' + i[l].getAttribute("title") + '"</span>'),
                            i[l].querySelector("caption") ||
                            i[l].getAttribute("aria-label") ||
                            i[l].getAttribute("aria-labelledby") ||
                            "presentation" === i[l].getAttribute("role") ||
                            "none" === i[l].getAttribute("role") ||
                            i[l].getAttribute("title")
                                ? i[l].querySelector("caption") || "presentation" === i[l].getAttribute("role") || "none" === i[l].getAttribute("role") || ((z.innerHTML += " ⚠️pas de caption"), S.classList.add("bm-dtnum-warning"))
                                : ((z.innerHTML += " ⛔pas de titre"), S.classList.add("bm-dtnum-alert")),
                            i[l].querySelector("caption") && (z.innerHTML += " caption : \"" + i[l].querySelector("caption").textContent + "\""),
                            i[l].querySelector("thead") && (z.innerHTML += " [thead]"),
                            i[l].querySelector("tfoot") && (z.innerHTML += " [tfoot]"),
                            i[l].querySelector("colgroup") && (z.innerHTML += " [colgroup]"),
                            i[l].querySelector("[axis]") && (z.innerHTML += " [axis]"),
                            i[l].getAttribute("summary") && (z.innerHTML += ' ⚠️<b>summary</b>="' + i[l].getAttribute("summary") + '"'),
                            "table" == i[l].getAttribute("role") && i[l].getAttribute("aria-describedby") && (z.innerHTML += ' <b>aria-describedby</b>="' + i[l].getAttribute("aria-describedby") + '"'),
                            (z.innerHTML += "&gt;"),
                            S.appendChild(z),
                            S.appendChild(q),
                            "" !== H && S.appendChild(C),
                            i[l].parentNode.insertBefore(S, i[l]);
                    }
                }
                if (document.querySelectorAll('td,[role="cell"], th,[role="columnheader"],[role="rowheader"]')) {
                    var o = document.querySelectorAll('td,[role="cell"],th,[role="columnheader"],[role="rowheader"]');
                    for (l = 0; l < o.length; l++) {
                        o[l].className = `bm-dtnum-outline-soft bm-dtnum-outline-soft-${t}`;
                        let j = n(),
                            D = a();
                        if (
                            ((D.innerHTML += "&lt;" + o[l].tagName.toLowerCase()),
                            "TH" == o[l].tagName &&
                                (o[l].getAttribute("scope")
                                    ? (D.innerHTML += ' <b>scope</b>="' + o[l].getAttribute("scope") + '"')
                                    : o[l].getAttribute("scope")
                                    ? o[l].getAttribute("id") && (D.innerHTML += ' <b>id</b>="' + o[l].getAttribute("id") + '"')
                                    : (D.innerHTML += " ⛔<b>scope</b>")),
                            "TH" == o[l].tagName && o[l].getAttribute("id") && (D.innerHTML += ' <b>id</b>="' + o[l].getAttribute("id") + '"'),
                            o[l].getAttribute("role") &&
                                "columnheader" !== o[l].getAttribute("role") &&
                                "rowheader" !== o[l].getAttribute("role") &&
                                "gridcell" !== o[l].getAttribute("role") &&
                                "cell" !== o[l].getAttribute("role") &&
                                ((D.innerHTML += ' ⛔<b>role=</b>"' + o[l].getAttribute("role") + '"'), j.classList.add("bm-dtnum-alert")),
                            "TD" == o[l].tagName && o[l].getAttribute("role") && "gridcell" == o[l].getAttribute("role") && (D.innerHTML += ' <b>role=</b>"' + o[l].getAttribute("role") + '"'),
                            "true" == o[l].getAttribute("aria-hidden") && ((D.innerHTML += ' ⛔<b>aria-hidden</b>="true"'), j.classList.add("bm-dtnum-alert")),
                            o[l].getAttribute("headers"))
                        ) {
                            D.innerHTML += ' <b>headers</b>="' + o[l].getAttribute("headers") + '"';
                            var r = o[l].getAttribute("headers").split(" ");
                            for (e = 0; e < r.length; e++) {
                                var b = "#";
                                (b += r[e]),
                                    document.querySelector('[id="' + r[e] + '"]') || (console.log(b), o[l].setAttribute("style", "outline:red 2px dotted;padding:2px;"), (D.innerHTML += ' ⛔<b class="bm-dtnum-alert">id ' + r[e] + "?</b>"));
                            }
                        }
                        (D.innerHTML += "&gt;"), j.appendChild(D), o[l].prepend(j);
                    }
                }
                if (document.querySelectorAll("caption")) {
                    var s = document.querySelectorAll("caption");
                    for (l = 0; l < s.length; l++)
                        if ("none" !== getComputedStyle(s[l]).display && "hidden" !== getComputedStyle(s[l]).visibility) {
                            s[l].className = `bm-dtnum-outline-soft bm-dtnum-outline-soft-${t}`;
                            let O = n(),
                                $ = a();
                            ($.innerHTML += "&lt;" + s[l].tagName.toLowerCase()),
                                s[l].getAttribute("role") && (($.innerHTML += ' ⛔<b>role</b>="' + s[l].getAttribute("role") + '"'), O.classList.add("bm-dtnum-alert")),
                                "true" == s[l].getAttribute("aria-hidden") && (($.innerHTML += ' ⛔<b>aria-hidden</b>="true"'), O.classList.add("bm-dtnum-alert")),
                                ($.innerHTML += "&gt;"),
                                O.appendChild($),
                                s[l].prepend(O);
                        } else {
                            let I = n(),
                                V = a();
                            (V.innerHTML += " ⛔caption caché en CSS"), I.classList.add("bm-dtnum-alert"), (V.innerHTML += " : &laquo; " + s[l].innerHTML + " &raquo"), I.appendChild(V), s[l].parentNode.insertBefore(I, s[l]);
                        }
                }
                i.length > 0 && (v.innerHTML += "<li>" + i.length + " &lt;table&gt;</li>"),
                    m.length > 0 && (v.innerHTML += "<li>" + m.length + ' role="table"</li>'),
                    0 == i.length && 0 == m.length && (v.innerHTML += "<li>aucun  tableau</li>");
            }
            function u(t) {
                const e = t.querySelectorAll("caption");
                for (const t of e)
                    if (!f(t)) {
                        return t.querySelectorAll(".bm-dtnum-message").forEach((t) => t.remove()), t;
                    }
                return null;
            }
            function p(t) {
                const e = Array.from(t.childNodes).filter((t) => {
                    const e = t.nodeType === Node.TEXT_NODE,
                        n = t.nodeType === Node.ELEMENT_NODE && ("IMG" === t.tagName || "svg" === t.tagName),
                        a = t.nodeType === Node.ELEMENT_NODE && ("CANVAS" === t.tagName || "OBJECT" === t.tagName || "EMBED" === t.tagName);
                    return e || n || a;
                });
                let n = "";
                if (
                    ("IMG" === t.tagName &&
                        (t.getAttribute("aria-labelledby")
                            ? (n += g(t))
                            : t.getAttribute("aria-label")
                            ? (n += t.getAttribute("aria-label").trim())
                            : t.getAttribute("alt")
                            ? (n += t.getAttribute("alt").trim())
                            : t.getAttribute("title") && (n += t.getAttribute("title").trim())),
                    ("svg" !== t.tagName && "CANVAS" !== t.tagName) || (t.getAttribute("aria-labelledby") ? (n += g(t)) : t.getAttribute("aria-label") && (n += t.getAttribute("aria-label").trim())),
                    "OBJECT" === t.tagName || "EMBED" === t.tagName)
                )
                    t.getAttribute("aria-labelledby") ? (n += g(t)) : t.getAttribute("aria-label") ? (n += t.getAttribute("aria-label").trim()) : t.getAttribute("title") && (n += t.getAttribute("title").trim());
                else
                    for (const t of e)
                        t.nodeType === Node.TEXT_NODE && (n += t.textContent.trim()),
                            "IMG" === t.tagName &&
                                (t.getAttribute("aria-labelledby")
                                    ? (n += g(t))
                                    : t.getAttribute("aria-label")
                                    ? (n += t.getAttribute("aria-label").trim())
                                    : t.getAttribute("alt")
                                    ? (n += t.getAttribute("alt").trim())
                                    : t.getAttribute("title") && (n += t.getAttribute("title").trim())),
                            "svg" === t.tagName && (t.getAttribute("aria-labelledby") ? (n += g(t)) : t.getAttribute("aria-label") && (n += t.getAttribute("aria-label").trim())),
                            "CANVAS" === t.tagName && (t.getAttribute("aria-labelledby") ? (n += g(t)) : t.getAttribute("aria-label") && (n += t.getAttribute("aria-label").trim())),
                            ("OBJECT" !== t.tagName && "EMBED" !== t.tagName) ||
                                (t.getAttribute("aria-labelledby") ? (n += g(t)) : t.getAttribute("aria-label") ? (n += t.getAttribute("aria-label").trim()) : t.getAttribute("title") && (n += t.getAttribute("title").trim()));
                return n.trim();
            }
            function g(t) {
                const e = t.getAttribute("aria-labelledby");
                if (e) {
                    const t = e.split(" "),
                        n = [];
                    for (const e of t) {
                        const t = document.getElementById(e);
                        if (t) {
                            const e = p(t);
                            e && n.push(e);
                        }
                    }
                    return n;
                }
                return [];
            }
            function d(t) {
                const e = t.getAttribute("aria-describedby");
                if (e) {
                    const t = e.split(" "),
                        n = [];
                    for (const e of t) {
                        const t = document.getElementById(e);
                        if (t) {
                            const e = p(t);
                            e && n.push(e);
                        }
                    }
                    return n;
                }
                return [];
            }
            function c(t) {
                return null !== t && "" !== t && (t = t.toString()).replace(/(<([^>]+)>)/gi, "");
            }
            function f(t) {
                if (!t) return !1;
                const e = window.getComputedStyle(t);
                if ("none" === e.display || "hidden" === e.visibility || "true" === t.getAttribute("aria-hidden")) return !0;
                for (const e of t.childNodes) if (e.nodeType === Node.ELEMENT_NODE && f(e)) return !0;
                return !1;
            }
        })();
    })();
})();})();