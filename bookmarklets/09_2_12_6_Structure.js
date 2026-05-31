// 09.2 12.6 Structure
(function(){javascript: (function () {
    !(function () {
        !(function () {
            for (
                var n = document.querySelectorAll(
                        '[id*="bm-a42"],[class*="bm-dtnum-infos"],[class="bm-dtnum-message"],[class*="bm-dtnum-message"],[class="bm-dtnum-compteur"],[class="bm-dtnum-compteur-images"],[class="bm-dtnum-btn-action"],[class="bm-dtnum-btn-action-group"],[class="bm-dtnum-list-autocomplete"]'
                    ),
                    e = 0;
                e < n.length;
                e++
            )
                n[e].remove();
            var t = document.querySelectorAll('[class*="bm-a42"]');
            for (e = 0; e < t.length; e++) {
                var a = [];
                t[e].classList.forEach(function (n) {
                    n.startsWith("bm-a42") && a.push(n);
                }),
                    a.forEach(function (n) {
                        t[e].classList.remove(n);
                    });
            }
        })(),
            (function () {
                const n = document.createElement("style");
                (n.type = "text/css"),
                    (n.id = "bm-dtnum-style"),
                    n.appendChild(
                        document.createTextNode(
                            'body[class*="bm-a42"]{\n\tmargin-bottom:20px!important;\n}\n\n.bm-dtnum-reduce-img{\n\tmax-width:500px;\n}\n\n[class*="bm-dtnum-focus"] img,\n[class*="bm-dtnum-focus"] svg,\n[class*="bm-dtnum-focus"] [role="img"]{\n\tmax-width:initial;\n}\n\n.bm-dtnum-focus *:focus{\n\toutline: 4px dotted blueviolet !important; \n\toutline-offset:1px !important; \n}\n\n.bm-dtnum-outline-elt,\n.bm-dtnum-contentcss .bm-dtnum-outline-elt-before::before,\n.bm-dtnum-contentcss .bm-dtnum-outline-elt-before::after{\n/*\toutline: 4px solid #962e3f;*/\n\toutline: 4px solid #343643;\n\tpadding:5px;\n\t/*on double par un outline clair pour les cas de fonds de couleurs foncés*/\n\tbox-shadow:0 0 0 6px white;\n}\n\n.bm-dtnum-outline-soft{\n\toutline:1px solid green;\n\tpadding:2px;\n}\n\n.bm-dtnum-outline-hidden{\n\toutline:4px solid red;\n}\n\n.bm-dtnum-outline-elt-nc{\n\toutline: 4px dotted orange;\n}\n\n.bm-dtnum-bg-elt-hidden{\n\tbackground: #e8baba!important;\n\tcolor:#000!important;\n}\n\n.bm-dtnum-code{\n\tfont-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;\n\tpadding:2px!important;\n}\n\nhtml span.bm-dtnum-message,\nbody span.bm-dtnum-message{\n\tfont-family:sans-serif!important;\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tfont-variant: normal !important;\n  \ttext-align: left!important;\n\tline-height:20px!important;\n\tletter-spacing: 0 !important;\n\ttext-transform: initial!important;\n\tposition:relative!important;\n/*\tposition: static !important;*/\n\tdisplay:inline-block!important;\n\twidth:auto!important;\n\theight: auto !important;\n/*\tflex:none!important;*/\n\tclear: none !important;\n\tfloat: none !important;\n  \tbackground: #213556 !important;\n\tcolor:#fff!important;\n\tborder:1px solid #ccc!important;\n\tpadding:5px!important;\n\tborder-radius: 3px !important;\n  \tbox-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;\n\tmargin: 0 !important;\n\topacity: 1 !important;\n  \twhite-space: pre-wrap;\n\tz-index:900000!important;\n\ttext-align: left !important;\n\ttext-decoration: none !important;\n\ttext-shadow: none !important;\n} \n\nhtml span.bm-dtnum-message span,\nbody span.bm-dtnum-message span{\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tfont-variant: normal !important;\n\tcolor:#fff!important;\n}\n\nhtml span.bm-dtnum-message *,\nbody span.bm-dtnum-message *{\n  \tbackground: #213556 !important;\n}\n\nhtml span.bm-dtnum-message,\nbody span.bm-dtnum-message{\n\tdisplay:inline-block!important;\n}\n\nhtml body span.bm-dtnum-alert, \nbody span.bm-dtnum-alert{\n\tbackground:#962e3f!important;\n}\n\nhtml span.bm-dtnum-alert *, \nbody span.bm-dtnum-alert *{\n\tbackground:#962e3f!important;\n}\n\nhtml .bm-dtnum-message-supp, \nbody .bm-dtnum-message-supp{\n\tbackground:#b6afb0!important;\n\tcolor:#213556!important;\n}\n\nhtml .bm-dtnum-message a, \nbody .bm-dtnum-message a{\n\tcolor:#fff!important;\n}\n\n\n/**affichages des noms accessibles**/\n\n/**on ne les affiche pas si le bouton n\'est pas actité**/\nspan.bm-dtnum-accessible-name,\nspan.bm-dtnum-accessible-description{\n\tdisplay: none!important;\n\tpadding-right:4px;\n}\n\nbody.bm-dtnum-accname span.bm-dtnum-accessible-name,\nbody.bm-dtnum-accname span.bm-dtnum-accessible-description{\n\tdisplay:block!important;\n\tbackground:#f2ebc7!important;\n\tcolor:#213556!important;\n}\nbody.bm-dtnum-accname span.bm-dtnum-accessible-name *,\nbody.bm-dtnum-accname span.bm-dtnum-accessible-description *{\n\t\tbackground:#f2ebc7!important;\n}\n\nbody.bm-dtnum-accname span.bm-dtnum-accessible-name b,\nbody.bm-dtnum-accname span.bm-dtnum-accessible-description b{\n\tcolor:#213556!important;}\n}\n\n.bm-dtnum-hide-nameproperties .bm-dtnum-nameproperty{\n\tdisplay:none!important;\n}\n\nspan.bm-dtnum-message-hidden{\n\tdisplay:none!important\n}\n\n.bm-dtnum-infos{\n\tfont-family: Verdana, sans-serif;\n\tfont-size:11px!important;\n\tposition:fixed!important;\n\tdisplay:block!important;\n\tbottom:0;\n\tright:0;\n\twidth:100%;\n\tz-index:900000!important;\n} \n\n.a42-bm-hidden-message-part{display:none}\n\n.bm-dtnum-bm-active{\n\tbackground:#962e3f!important;\n\tcolor:#fff!important;\n\tfont-size:12px!important;\n\tpadding:5px!important;\n\tline-height:20px!important;\n\tborder-radius:3px 0 0 3px!important;\n\tmargin:3px 0 3px 0!important;\n}\n\n.bm-dtnum-compteur{\n\tfont-family: Verdana, sans-serif;\n\tbackground:#213556!important;\n\tfont-size:11px!important;\n\tcolor:#ffffff!important;\n\tpadding:3px!important;\n\tmargin:0px!important;\n\tz-index:900000!important;\n} \n\n.bm-dtnum-compteur ul{\n\tfont-size:14px!important;\n\tpadding:0 5px 0 10px!important;\n\tmargin:0!important;\n\tmargin-bottom:3px!important;\n\tline-height:14px!important;\n\ttext-align:center;\n}\n\n.bm-dtnum-compteur ul li{\n\tfont-size:14px!important;\n\tfont-family: Verdana, sans-serif;\n\tcolor:#ffffff!important;\n\tline-height:20px!important;\n\tlist-style-type:\'- \'!important;\n\tmargin-bottom:0!important;\n\tpadding-bottom:0!important;\n}\n\n.bm-dtnum-list .bm-dtnum-compteur ul li,\n.bm-dtnum-compteur ul li{\n\tdisplay:inline!important;\n}\n.bm-dtnum-list .bm-dtnum-compteur ul li:after,\n.bm-dtnum-compteur ul li:after{\n\tcontent:" | ";\n}\n\n.bm-dtnum-btn-action-group button{\n\tdisplay:block!important;\n\tbackground:transparent!important;\n\tborder:1px solid #fff!important;\n\tborder-radius:2px;\n\tpadding:10px!important;\n\tcursor:pointer!important;\n}\n\n.bm-dtnum-btn-hide-autocomplete{\n\tfloat: right;\n\tmargin-top: -35px\n}\n/** Styles spécifiques à chaque BM **/\n\n/** BM 1**/\n\n/**on n\'entoure pas les images contenues dans les liens**/\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] map.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img[usemap].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] img[ismap].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] svg.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] canvas.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] object.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] embed.bm-dtnum-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n\n/**on n\'affiche pas les messages des images contenues dans les liens**/\n.bm-dtnum-image.bm-dtnum-image-hide-in-link a[href] .bm-dtnum-message-bm-dtnum-image,\n.bm-dtnum-image.bm-dtnum-image-hide-in-link [role="link"] .bm-dtnum-message-bm-dtnum-image{\n\tdisplay:none!important;\n}\n\n/** on entoure les images contenues dans des liens**/\n\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] map.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] map.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img[usemap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img[usemap].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] img[ismap].bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] img[ismap].bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] svg.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] canvas.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] object.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] object.bm-dtnum-outline-elt,\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-image.bm-dtnum-image-outline-in-link [role="link"] embed.bm-dtnum-outline-elt{\n\toutline: 4px solid #515150;\n\tpadding:5px;\n\tdisplay:block;\n}\n\n/** on entoure les liens qui contiennent des images**/\n.bm-dtnum-image.bm-dtnum-image-outline-in-link a[href].bm-dtnum-image-outline-link-with-image{\n\toutline: 4px dotted #515150;\n\tpadding:8px;\n\tdisplay:block;\n}\n\n/** BM 1-9 **/\n/**on annule l\'entourage des images qui ne sont pas dans des figure lorsqu\'on active le BM des images avec le BM des images légendées**/\n.bm-dtnum-legend.bm-dtnum-image img.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image map.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image [usemap].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image [isemap].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image img[usemap].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image svg.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image canvas.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image object.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image embed.bm-dtnum-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n/**on masque les messages des images qui ne sont pas dans des figure**/\n\n.bm-dtnum-legend.bm-dtnum-image .bm-dtnum-message-bm-dtnum-image{\n\tdisplay:none!important;\n}\n.bm-dtnum-legend.bm-dtnum-image figure .bm-dtnum-message-bm-dtnum-image{\n\tdisplay:block!important;\n}\n\n/**on masque le compteur des images dans la BM de détection des images légendées */\n.bm-dtnum-image.bm-dtnum-legend .bm-dtnum-compteur-images{display:none!important}\n\n.bm-dtnum-legend.bm-dtnum-image figure img.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure map.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure [usemap].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure [isemap].bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure svg.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure canvas.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure object.bm-dtnum-outline-elt,\n.bm-dtnum-legend.bm-dtnum-image figure embed.bm-dtnum-outline-elt{\n\toutline:1px solid green!important;\n\tpadding:2px!important;\n\tmax-width:200px;\n}\n\n/** BM 2**/\n.bm-dtnum-iframe{\n}\n.bm-dtnum-src{\n\tdisplay:block;\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bm-dtnum-iframe-content{\n\tposition:fixed;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\twidth:300px;\n\toverflow-y:scroll;\n\tbackground:#fff;\n\tpadding:15px;\n\tfont-size:0.8em!important;\n\tbox-shadow:3px 0 5px #000;\n\tz-index:10000;\n}\n\n.bm-dtnum-iframe-content h1{\n\tfont-size:0.6em;\n}\n.bm-dtnum-tableau-iframe{\n\tmargin:auto;\n\tborder:1px solid #000;\n\tbackground:#FFF;\n\tborder-collapse:collapse;\n\tfont-family:sans-serif!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tposition:relative!important;\n\tline-height:30px!important;\n\ttext-transform: initial;\n}\n\n.bm-dtnum-tableau-iframe tr,\n.bm-dtnum-tableau-iframe td,\n.bm-dtnum-tableau-iframe th{\n\tborder: 1px solid #CEDAE6;\n}\n\n.bm-dtnum-tableau-iframe td,\n.bm-dtnum-tableau-iframe th{\n\tpadding:5px\n}\n\n.bm-dtnum-tableau-iframe th{\n\ttext-align: center;\n\tborder-bottom: 1px solid #CEDAE6;\n\tbackground-color: #e3ebf2;\n}\n\n.bm-dtnum-tableau-iframe .a42-bm-center{\n\ttext-align:center;\n}\n/** BM 5 **/\n\n.bm-dtnum-5 caption{\n\tposition:relative!important;\n\twidth:auto!important;\n\theight:auto!important;\n\tclip:initial!important;\n\tclip-path: initial!important;\n}\n\n/** BM 6 **/\n.bm-dtnum-link a[href].bm-dtnum-outline-elt, \n.bm-dtnum-link [role="link"].bm-dtnum-outline-elt{\n\tdisplay:inline-block!important;\n\n}\n\n/**on annule l\'entourage des images qui ne sont pas dans des liens lorsqu\'on active le BM des images avec le BM des liens**/\n.bm-dtnum-link.bm-dtnum-image img.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image figure map.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image figure [usemap].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image figure [isemap].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image svg.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image canvas.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image object.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image embed.bm-dtnum-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n/**on masque les messages des images qui ne sont pas dans des liens**/\n.bm-dtnum-link.bm-dtnum-image .bm-dtnum-message-bm-dtnum-image{\n\tdisplay:none!important;\n}\n\n.bm-dtnum-link.bm-dtnum-image .bm-dtnum-message.bm-dtnum-message-link,\n.bm-dtnum-link a[href] .bm-dtnum-message, \n.bm-dtnum-link [role="link"] .bm-dtnum-message{\n\tdisplay:inline-block!important;\n}\n\n/**on masque le compteur des images dans la BM de détection des liens**/\n.bm-dtnum-link.bm-dtnum-image .bm-dtnum-compteur-images{display:none!important}\n\n.bm-dtnum-link.bm-dtnum-image a[href] img.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] img.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] input[type="image"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] input[type="image"].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] [role="img"].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [role="img"].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] map.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] map.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] [usemap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [usemap].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] [ismap].bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] [ismap].bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] svg.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] svg.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] canvas.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] canvas.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] object.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] object.bm-dtnum-outline-elt,\n.bm-dtnum-link.bm-dtnum-image a[href] embed.bm-dtnum-outline-elt,.bm-dtnum-link.bm-dtnum-image [role="link"] embed.bm-dtnum-outline-elt{\n\toutline:1px solid green!important;\n\tpadding:2px!important;\n\tmax-width:200px;\n}\n\n.bm-dtnum-link a[href] .bm-dtnum-message + .bm-dtnum-message, \n.bm-dtnum-link [role="link"] .bm-dtnum-message + .bm-dtnum-message{\n\tbackground:#5c687d!important;\n\tfont-size:11px!important;\n}\n\n/** BM 9-9 **/ \n.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-outline-elt,\n.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-outline-soft{\n\toutline:none!important;\n}\n\n.bm-dtnum-misuse .bm-dtnum-infos .bm-dtnum-message{\n\tdisplay:none!important\n}\n/**BM 9-1 **/\n.bm-dtnum-heading{}\n\n/**BM 9-2 et BM 12-6**/\n.bm-dtnum-structure header.bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="banner"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt{\n\toutline: dashed 5px #962e3f!important;\n}\n.bm-dtnum-structure nav.bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="navigation"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt{\n\toutline: dotted 5px green!important;\n}\n.bm-dtnum-structure main.bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="main"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt{\n\toutline: double 5px #213556!important;\n}\n.bm-dtnum-structure footer.bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="contentinfo"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt{\n\toutline:solid 5px purple!important;\n}\n\n.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="search"].bm-dtnum-outline-elt{\n\toutline:groove 5px #d63cd6!important;\n}\n\n.bm-dtnum-structure header.bm-dtnum-outline-elt,\n.bm-dtnum-structure nav.bm-dtnum-outline-elt,\n.bm-dtnum-structure main.bm-dtnum-outline-elt,\n.bm-dtnum-structure footer.bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="banner"].bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="navigation"].bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="main"].bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="contentinfo"].bm-dtnum-outline-elt,\n.bm-dtnum-structure [role="search"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt{\n\tmax-width:99%;\n\tmargin:10px 10px 25px 10px;\n}\n\n.bm-dtnum-structure header.bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-structure nav.bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-structure main.bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-structure footer.bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="banner"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="navigation"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="main"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="contentinfo"].bm-dtnum-outline-elt .bm-dtnum-outline-elt,\n.bm-dtnum-12-6 [role="search"].bm-dtnum-outline-elt .bm-dtnum-outline-elt{\n\tmargin:30px;\n}\n.bm-dtnum-structure .bm-dtnum-message,\n.bm-dtnum-12-6 .bm-dtnum-message{\n\tdisplay:block!important\n}\n/**BM 9-3 **/\n\n.bm-dtnum-list li,\n.bm-dtnum-list [role="listitem"],\n.bm-dtnum-list dd,\n.bm-dtnum-list dt,\n.bm-dtnum-list [role="term"],\n.bm-dtnum-list [role="definition"]{\n\tdisplay:block!important;\n\tmargin-top:1px!important;\n}\n.bm-dtnum-list .bm-dtnum-message{\n\tdisplay:inline-block!important;\n}\n\n.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-message{\n\tdisplay:none!important;\n}\n.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-outline-elt,\n.bm-dtnum-list .bm-dtnum-infos .bm-dtnum-outline-soft{\n\toutline:none!important;\n\tpadding-top:0!important;\n\tpadding-bottom:0!important;\n}\n.bm-dtnum-list .bm-dtnum-infos ul li{\n/*\tdisplay: list-item!important;*/\n\tlist-style-type: \'- \'!important;\n\tmargin-top:0!important;\n}\n\n.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list{\n\toutline-color:#666;\n\toutline-width:1px;\n\t/*on double par un outline clair pour les cas de fonds de couleurs foncés*/\n\tbox-shadow:0 0 0 6px white;\n}\nbody.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list span.bm-dtnum-message{\n\tfont-size:60%;\n\tbackground:#666!important;\n\tline-height: 10px !important;\n}\n\nbody.bm-dtnum-list a.bm-dtnum-outline-elt-bm-dtnum-list span.bm-dtnum-message span.bm-dtnum-code{\n\tbackground:#666!important;\n}\n.bm-dtnum-list .bm-dtnum-compteur .bm-dtnum-outline-elt,\n.bm-dtnum-list .bm-dtnum-compteur .bm-dtnum-outline-elt-bm-dtnum-list{\n\toutline:none;\n\tbox-shadow:none;\n}\n\n/**BM 9-4 **/\n.bm-dtnum-quote q,\n.bm-dtnum-quote cite{\n\tdisplay:inline-block!important;\n}\n/** BM 10-1 attributs et balises de mise en forme**/\n\n/**BM 10-2 **/\n\n/**BM 10-3 **/\n.bm-dtnum-10-3 *{\n\tfloat:unset!important;\n\torder:unset!important;\n\tposition:static!important;\n\tflex:unset!important;\n}\n.bm-dtnum-10-3 {\n\tdisplay:block!important;\n}\n/** voir pour récupérer les styles en js et les remettre à 0 si besoin**/\n/**par exemple ne mettre en display:block que les éléments qui n\'ont pas de display:none!**/ \n/** BM 10-5  **/\n\n.bm-dtnum-disableimg *{\n\tbackground-image:none!important;\n}\n\n.bm-dtnum-disableimg img{\n\topacity:0!important;\n}\n\n/** BM 10-6  **/\n.bm-dtnum-linkcolor .bm-dtnum-outline-elt{\n\toutline-offset: 3px;}\n\n/** BM 10-12 text spacing **/\n.bm-dtnum-textspacing *{\n\tline-height:1.5 !important;\n\tletter-spacing:0.12em !important;\n\tword-spacing:0.16em !important;\n\n}\n.bm-dtnum-textspacing p{\n\tmargin-bottom:2em!important;\n}\n/** BM form champ de formulaire  **/\n\n/** BM fiedlset Regroupement de champs de formulaires  **/\n\n/** BM 11-13 **/\nbody.bm-dtnum-autocomplete{\n\tmargin-left:300px;\n}\n\nbody.bm-dtnum-autocomplete.bm-dtnum-hide-list-autocomplete{\n\tmargin-left:initial!important;\n}\n.bm-dtnum-list-autocomplete{\n\tposition:fixed;\n\ttop:0;\n\tleft:0;\n\tbottom:0;\n\toverflow:scroll;\n\tmax-width:300px;\n\tfont-family:sans-serif!important;\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n    font-style:initial!important;\n\tline-height:initial!important;\n    background: #213556 !important;\n\tcolor:#fff!important;\n\tborder:1px solid #ccc!important;\n\tpadding:3px 15px 0 3px!important;\n\tborder-radius: 3px !important;\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;\n\tz-index:900000!important;\n}\n\n.bm-dtnum-list-autocomplete ul,\n.bm-dtnum-list-autocomplete li,\n.bm-dtnum-list-autocomplete b{\n\tfont-size:12px!important;\n}\n.bm-dtnum-list-autocomplete ul{\n\tpadding:0 0 0 15px;\n}'
                        )
                    ),
                    document.head.appendChild(n);
            })();
        var n = "bm-dtnum-structure";
        if (document.body.classList.contains(n)) {
            document.body.classList.toggle(n),
                document.body.classList.toggle("bm-dtnum-accname"),
                document.querySelectorAll('[class*="bm-dtnum-message-' + n + '"],[class*="bm-dtnum-infos-' + n + '"]').forEach(function (n) {
                    n.remove();
                });
            let s = document.querySelectorAll('[class*="bm-dtnum-outline-elt-' + n + '"],[class*="bm-dtnum-outline-soft-' + n + '"]');
            for (let p = 0; p < s.length; p++) s[p].classList.remove("bm-dtnum-outline-elt", "bm-dtnum-outline-elt-" + n, "bm-dtnum-outline-soft", "bm-dtnum-outline-soft-" + n);
            if (!document.body.classList.value.match(/\bbm-a42\b/)) {
                let u = document.getElementById("bm-dtnum-style");
                u && u.parentNode.removeChild(u);
            }
        } else {
            document.body.classList.toggle(n), document.body.classList.toggle("bm-dtnum-accname");
            let g = ["bm-dtnum-outline-elt", "bm-dtnum-outline-elt-" + n],
                d = document.createElement("div");
            d.className = `bm-dtnum-infos bm-dtnum-infos-${n}`;
            let c = document.createElement("div");
            c.className = `bm-dtnum-compteur bm-dtnum-compteur-${n}`;
            let f = document.createElement("ul");
            function e() {
                let e = document.createElement("span");
                return (e.className = `bm-dtnum-message bm-dtnum-message-${n}`), e;
            }
            function t() {
                let n = document.createElement("span");
                return n.classList.add("bm-dtnum-code"), n;
            }
            c.appendChild(f), d.append(c), document.body.appendChild(d);
            var a = 0,
                i = 0,
                m = 0,
                l = 0;
            const h = ["banner", "contentinfo", "main", "navigation", "search"],
                k = ["footer", "header", "main", "nav"].join(",") + "," + h.map((n) => `[role="${n}"]`).join(","),
                x = document.querySelectorAll(k); 
            console.log(x);
            if (x)
                for (var o = 0; o < x.length; o++) {
                    x[o].classList.add(...g);
                    let y = e(),
                        v = t();
                    if (x[o].getAttribute("role")) {
                        x[o].tagName;
                        const T = x[o].getAttribute("role");
                        (v.innerHTML += "&lt;" + x[o].tagName.toLowerCase()),
                            "NAV" === x[o].tagName
                                ? "navigation" !== T
                                    ? (v.innerHTML += ' ⛔<b>role</b>="' + T + '"')
                                    : T && (v.innerHTML += ' <b>role</b>="' + T + '"')
                                : "navigation" === T && (v.innerHTML += ' ⛔<b>role</b>="' + T + '"'),
                            "MAIN" === x[o].tagName ? ("main" !== T ? (v.innerHTML += ' ⛔<b>role</b>="' + T + '"') : T && (v.innerHTML += ' <b>role</b>="' + T + '"')) : "main" === T && (v.innerHTML += ' ⛔<b>role</b>="' + T + '"'),
                            "FOOTER" === x[o].tagName
                                ? "contentinfo" !== T
                                    ? (v.innerHTML += ' ⛔<b>role</b>="' + T + '"')
                                    : T && (v.innerHTML += ' <b>role</b>="' + T + '"')
                                : "contentinfo" === T && (v.innerHTML += ' ⛔<b>role</b>="' + T + '"'),
                            "HEADER" === x[o].tagName ? ("banner" !== T ? (v.innerHTML += ' ⛔<b>role</b>="' + T + '"') : T && (v.innerHTML += ' <b>role</b>="' + T + '"')) : "banner" === T && (v.innerHTML += ' ⛔<b>role</b>="' + T + '"'),
                            "search" === T && (v.innerHTML += ' <b>role</b>="' + T + '"');
                    } else x[o].getAttribute("role") || (v.innerHTML += "&lt;" + x[o].tagName.toLowerCase() + " ⛔?role?");
                    x[o].getAttribute("aria-label") && (v.innerHTML += ' <b>aria-label</b>="' + x[o].getAttribute("aria-label") + '"'),
                        x[o].getAttribute("aria-labelledby") && (v.innerHTML += ' <b>aria-labelledby</b>="' + x[o].getAttribute("aria-labelledby") + '"'),
                        "true" == x[o].getAttribute("aria-hidden") && (v.innerHTML += ' ⛔<b>aria-hidden</b>="true"'),
                        (("NAV" == x[o].tagName && !x[o].getAttribute("role")) || ("NAV" == x[o].tagName && "navigation" == x[o].getAttribute("role"))) && i++,
                        (("HEADER" == x[o].tagName && !x[o].getAttribute("role")) || ("HEADER" == x[o].tagName && "banner" == x[o].getAttribute("role"))) && m++,
                        (("MAIN" == x[o].tagName && !x[o].getAttribute("role")) || ("MAIN" == x[o].tagName && "main" == x[o].getAttribute("role"))) && a++,
                        (("FOOTER" == x[o].tagName && !x[o].getAttribute("role")) || ("FOOTER" == x[o].tagName && "contentinfo" == x[o].getAttribute("role"))) && l++,
                        (v.innerHTML += "&gt;");
                    x[o].getAttribute("aria-labelledby");
                    const M = r(x[o]),
                        A = x[o].getAttribute("aria-label");
                    let L = "";
                    M.length > 0 ? (L = M.join(" ")) : A && "" !== A.trim() && (L = A.trim());
                    let w = t();
                    (w.className = "bm-dtnum-accessible-name"),
                        (w.innerHTML += ` <b>Nom :</b> ${L}`),
                        "" !== L.trim() && y.appendChild(w),
                        y.appendChild(v),
                        "search" === x[o].getAttribute("role") && "input" === x[o].tagName.toLowerCase() ? x[o].before(y) : x[o].prepend(y);
                }
            var f_dgfip = 0;
            
            if(document.querySelector('footer')) {
                if(document.querySelector('footer').getAttribute("role") !== 'contentinfo') {
                    f_dgfip = 1;
                }
            };

            "0" == i && "0" == m && "0" == a && "0" == l && (f.innerHTML += "<li>⛔pas d'éléments de structure</li>"),
                i > "0" && (f.innerHTML += "<li>" + i + " &lt;nav&gt;</li>"),
                "0" == i && (f.innerHTML += "<li>⛔ pas de &lt;nav&gt;</li>"),
                m > "0" && (f.innerHTML += "<li>" + m + " &lt;header&gt;</li>"),
                "0" == m && (f.innerHTML += "<li>⛔ pas de &lt;header&gt;</li>"),
                a > "0" && (f.innerHTML += "<li>" + a + " &lt;main&gt;</li>"),
                "0" == a && (f.innerHTML += "<li>⛔ pas de &lt;main&gt;</li>"),
                l > "0" && (f.innerHTML += "<li>" + l + " &lt;footer&gt;</li>"),
                "0" == l && f_dgfip == 1 && (f.innerHTML += "<li>&lt;footer&gt; ⛔ role incorrect</li>"),
                "0" == l && f_dgfip == 0 && (f.innerHTML += "<li>⛔ pas de &lt;footer&gt;</li>");
        }
        function b(n) {
            let e = "";
            return (
                (function n(t) {
                    if (t.nodeType === Node.TEXT_NODE) e += t.textContent.trim() + " ";
                    else if (t.nodeType === Node.ELEMENT_NODE) {
                        const a = t.tagName.toLowerCase();
                        if ("img" === a)
                            t.getAttribute("aria-labelledby")
                                ? (e += r(t) + " ")
                                : t.getAttribute("aria-label")
                                ? (e += t.getAttribute("aria-label").trim() + " ")
                                : t.getAttribute("alt")
                                ? (e += t.getAttribute("alt").trim() + " ")
                                : t.getAttribute("title") && (e += t.getAttribute("title").trim() + " ");
                        else if ("svg" === a || "canvas" === a) t.getAttribute("aria-labelledby") ? (e += r(t) + " ") : t.getAttribute("aria-label") && (e += t.getAttribute("aria-label").trim() + " ");
                        else if ("object" === a || "embed" === a)
                            t.getAttribute("aria-labelledby") ? (e += r(t) + " ") : t.getAttribute("aria-label") ? (e += t.getAttribute("aria-label").trim() + " ") : t.getAttribute("title") && (e += t.getAttribute("title").trim() + " ");
                        else {
                            Array.from(t.childNodes).forEach(n);
                        }
                    }
                })(n),
                e.trim()
            );
        }
        function r(n) {
            const e = n.getAttribute("aria-labelledby");
            if (e) {
                const n = e.split(" "),
                    t = [];
                for (const e of n) {
                    const n = document.getElementById(e);
                    if (n) {
                        const e = b(n);
                        e && t.push(e);
                    }
                }
                return t;
            }
            return [];
        }
    })();
})();})();