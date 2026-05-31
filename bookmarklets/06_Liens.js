// 06 Liens
(function(){javascript: (function () {
    !(function () {
        !(function () {
            for (
                var t = document.querySelectorAll(
                        '[id*="bm-a42"],[class*="bm-a42-infos"],[class="bm-a42-message"],[class*="bm-a42-message"],[class="bm-a42-compteur"],[class="bm-a42-compteur-images"],[class="bm-a42-btn-action"],[class="bm-a42-btn-action-group"],[class="bm-a42-list-autocomplete"]'
                    ),
                    n = 0;
                n < t.length;
                n++
            )
                t[n].remove();
            var e = document.querySelectorAll('[class*="bm-a42"]');
            for (n = 0; n < e.length; n++) {
                var a = [];
                e[n].classList.forEach(function (t) {
                    t.startsWith("bm-a42") && a.push(t);
                }),
                    a.forEach(function (t) {
                        e[n].classList.remove(t);
                    });
            }
        })(),
            (function () {
                const t = document.createElement("style");
                (t.type = "text/css"),
                    (t.id = "bm-a42-style"),
                    t.appendChild(
                        document.createTextNode(
                            'body[class*="bm-a42"]{\n\tmargin-bottom:20px!important;\n}\n\n.bm-a42-reduce-img{\n\tmax-width:500px;\n}\n\n[class*="bm-a42-focus"] img,\n[class*="bm-a42-focus"] svg,\n[class*="bm-a42-focus"] [role="img"]{\n\tmax-width:initial;\n}\n\n.bm-a42-focus *:focus{\n\toutline: 4px dotted blueviolet !important; \n\toutline-offset:1px !important; \n}\n\n.bm-a42-outline-elt,\n.bm-a42-contentcss .bm-a42-outline-elt-before::before,\n.bm-a42-contentcss .bm-a42-outline-elt-before::after{\n/*\toutline: 4px solid #962e3f;*/\n\toutline: 4px solid #343643;\n\tpadding:5px;\n\t/*on double par un outline clair pour les cas de fonds de couleurs foncés*/\n\tbox-shadow:0 0 0 6px white;\n}\n\n.bm-a42-outline-soft{\n\toutline:1px solid green;\n\tpadding:2px;\n}\n\n.bm-a42-outline-hidden{\n\toutline:4px solid red;\n}\n\n.bm-a42-outline-elt-nc{\n\toutline: 4px dotted orange;\n}\n\n.bm-a42-bg-elt-hidden{\n\tbackground: #e8baba!important;\n\tcolor:#000!important;\n}\n\n.bm-a42-code{\n\tfont-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;\n\tpadding:2px!important;\n}\n\nhtml span.bm-a42-message,\nbody span.bm-a42-message{\n\tfont-family:sans-serif!important;\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tfont-variant: normal !important;\n  \ttext-align: left!important;\n\tline-height:20px!important;\n\tletter-spacing: 0 !important;\n\ttext-transform: initial!important;\n\tposition:relative!important;\n/*\tposition: static !important;*/\n\tdisplay:inline-block!important;\n\twidth:auto!important;\n\theight: auto !important;\n/*\tflex:none!important;*/\n\tclear: none !important;\n\tfloat: none !important;\n  \tbackground: #213556 !important;\n\tcolor:#fff!important;\n\tborder:1px solid #ccc!important;\n\tpadding:5px!important;\n\tborder-radius: 3px !important;\n  \tbox-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;\n\tmargin: 0 !important;\n\topacity: 1 !important;\n  \twhite-space: pre-wrap;\n\tz-index:900000!important;\n\ttext-align: left !important;\n\ttext-decoration: none !important;\n\ttext-shadow: none !important;\n} \n\nhtml span.bm-a42-message span,\nbody span.bm-a42-message span{\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tfont-variant: normal !important;\n\tcolor:#fff!important;\n}\n\nhtml span.bm-a42-message *,\nbody span.bm-a42-message *{\n  \tbackground: #213556 !important;\n}\n\nhtml span.bm-a42-message,\nbody span.bm-a42-message{\n\tdisplay:inline-block!important;\n}\n\nhtml body span.bm-a42-alert, \nbody span.bm-a42-alert{\n\tbackground:#962e3f!important;\n}\n\nhtml span.bm-a42-alert *, \nbody span.bm-a42-alert *{\n\tbackground:#962e3f!important;\n}\n\nhtml .bm-a42-message-supp, \nbody .bm-a42-message-supp{\n\tbackground:#b6afb0!important;\n\tcolor:#213556!important;\n}\n\nhtml .bm-a42-message a, \nbody .bm-a42-message a{\n\tcolor:#fff!important;\n}\n\n\n/**affichages des noms accessibles**/\n\n/**on ne les affiche pas si le bouton n\'est pas actité**/\nspan.bm-a42-accessible-name,\nspan.bm-a42-accessible-description{\n\tdisplay: none!important;\n\tpadding-right:4px;\n}\n\nbody.bm-a42-accname span.bm-a42-accessible-name,\nbody.bm-a42-accname span.bm-a42-accessible-description{\n\tdisplay:block!important;\n\tbackground:#f2ebc7!important;\n\tcolor:#213556!important;\n}\nbody.bm-a42-accname span.bm-a42-accessible-name *,\nbody.bm-a42-accname span.bm-a42-accessible-description *{\n\t\tbackground:#f2ebc7!important;\n}\n\nbody.bm-a42-accname span.bm-a42-accessible-name b,\nbody.bm-a42-accname span.bm-a42-accessible-description b{\n\tcolor:#213556!important;}\n}\n\n.bm-a42-hide-nameproperties .bm-a42-nameproperty{\n\tdisplay:none!important;\n}\n\nspan.bm-a42-message-hidden{\n\tdisplay:none!important\n}\n\n.bm-a42-infos{\n\tfont-family: Verdana, sans-serif;\n\tfont-size:11px!important;\n\tposition:fixed!important;\n\tdisplay:block!important;\n\tbottom:0;\n\tright:0;\n\twidth:100%;\n\tz-index:900000!important;\n} \n\n.a42-bm-hidden-message-part{display:none}\n\n.bm-a42-bm-active{\n\tbackground:#962e3f!important;\n\tcolor:#fff!important;\n\tfont-size:12px!important;\n\tpadding:5px!important;\n\tline-height:20px!important;\n\tborder-radius:3px 0 0 3px!important;\n\tmargin:3px 0 3px 0!important;\n}\n\n.bm-a42-compteur{\n\tfont-family: Verdana, sans-serif;\n\tbackground:#213556!important;\n\tfont-size:11px!important;\n\tcolor:#ffffff!important;\n\tpadding:3px!important;\n\tmargin:0px!important;\n\tz-index:900000!important;\n} \n\n.bm-a42-compteur ul{\n\tfont-size:11px!important;\n\tpadding:0 5px 0 10px!important;\n\tmargin:0!important;\n\tmargin-bottom:3px!important;\n\tline-height:14px!important;\n\ttext-align:center;\n}\n\n.bm-a42-compteur ul li{\n\tfont-size:11px!important;\n\tfont-family: Verdana, sans-serif;\n\tcolor:#ffffff!important;\n\tline-height:14px!important;\n\tlist-style-type:\'- \'!important;\n\tmargin-bottom:0!important;\n\tpadding-bottom:0!important;\n}\n\n.bm-a42-list .bm-a42-compteur ul li,\n.bm-a42-compteur ul li{\n\tdisplay:inline!important;\n}\n.bm-a42-list .bm-a42-compteur ul li:after,\n.bm-a42-compteur ul li:after{\n\tcontent:" | ";\n}\n\n.bm-a42-btn-action-group button{\n\tdisplay:block!important;\n\tbackground:transparent!important;\n\tborder:1px solid #fff!important;\n\tborder-radius:2px;\n\tpadding:10px!important;\n\tcursor:pointer!important;\n}\n\n.bm-a42-btn-hide-autocomplete{\n\tfloat: right;\n\tmargin-top: -35px\n}\n/** Styles spécifiques à chaque BM **/\n\n/** BM 1**/\n\n/**on n\'entoure pas les images contenues dans les liens**/\n.bm-a42-image.bm-a42-image-hide-in-link a[href] img.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] img.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] input[type="image"].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] input[type="image"].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] [role="img"].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] [role="img"].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] map.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] map.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] img[usemap].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] img[usemap].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] img[ismap].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] img[ismap].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] svg.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] svg.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] canvas.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] canvas.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] object.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] object.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-hide-in-link a[href] embed.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-hide-in-link [role="link"] embed.bm-a42-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n\n/**on n\'affiche pas les messages des images contenues dans les liens**/\n.bm-a42-image.bm-a42-image-hide-in-link a[href] .bm-a42-message-bm-a42-image,\n.bm-a42-image.bm-a42-image-hide-in-link [role="link"] .bm-a42-message-bm-a42-image{\n\tdisplay:none!important;\n}\n\n/** on entoure les images contenues dans des liens**/\n\n.bm-a42-image.bm-a42-image-outline-in-link a[href] img.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] img.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] input[type="image"].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] input[type="image"].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] [role="img"].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] [role="img"].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] map.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] map.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] img[usemap].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] img[usemap].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] img[ismap].bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] img[ismap].bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] svg.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] svg.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] canvas.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] canvas.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] object.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] object.bm-a42-outline-elt,\n.bm-a42-image.bm-a42-image-outline-in-link a[href] embed.bm-a42-outline-elt,.bm-a42-image.bm-a42-image-outline-in-link [role="link"] embed.bm-a42-outline-elt{\n\toutline: 4px solid #515150;\n\tpadding:5px;\n\tdisplay:block;\n}\n\n/** on entoure les liens qui contiennent des images**/\n.bm-a42-image.bm-a42-image-outline-in-link a[href].bm-a42-image-outline-link-with-image{\n\toutline: 4px dotted #515150;\n\tpadding:8px;\n\tdisplay:block;\n}\n\n/** BM 1-9 **/\n/**on annule l\'entourage des images qui ne sont pas dans des figure lorsqu\'on active le BM des images avec le BM des images légendées**/\n.bm-a42-legend.bm-a42-image img.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image input[type="image"].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image [role="img"].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image map.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image [usemap].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image [isemap].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image img[usemap].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image svg.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image canvas.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image object.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image embed.bm-a42-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n/**on masque les messages des images qui ne sont pas dans des figure**/\n\n.bm-a42-legend.bm-a42-image .bm-a42-message-bm-a42-image{\n\tdisplay:none!important;\n}\n.bm-a42-legend.bm-a42-image figure .bm-a42-message-bm-a42-image{\n\tdisplay:block!important;\n}\n\n/**on masque le compteur des images dans la BM de détection des images légendées */\n.bm-a42-image.bm-a42-legend .bm-a42-compteur-images{display:none!important}\n\n.bm-a42-legend.bm-a42-image figure img.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure input[type="image"].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure [role="img"].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure map.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure [usemap].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure [isemap].bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure svg.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure canvas.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure object.bm-a42-outline-elt,\n.bm-a42-legend.bm-a42-image figure embed.bm-a42-outline-elt{\n\toutline:1px solid green!important;\n\tpadding:2px!important;\n\tmax-width:200px;\n}\n\n/** BM 2**/\n.bm-a42-iframe{\n}\n.bm-a42-src{\n\tdisplay:block;\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bm-a42-iframe-content{\n\tposition:fixed;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\twidth:300px;\n\toverflow-y:scroll;\n\tbackground:#fff;\n\tpadding:15px;\n\tfont-size:0.8em!important;\n\tbox-shadow:3px 0 5px #000;\n\tz-index:10000;\n}\n\n.bm-a42-iframe-content h1{\n\tfont-size:0.6em;\n}\n.bm-a42-tableau-iframe{\n\tmargin:auto;\n\tborder:1px solid #000;\n\tbackground:#FFF;\n\tborder-collapse:collapse;\n\tfont-family:sans-serif!important;\n\tfont-weight:initial!important;\n  \tfont-style:initial!important;\n\tposition:relative!important;\n\tline-height:30px!important;\n\ttext-transform: initial;\n}\n\n.bm-a42-tableau-iframe tr,\n.bm-a42-tableau-iframe td,\n.bm-a42-tableau-iframe th{\n\tborder: 1px solid #CEDAE6;\n}\n\n.bm-a42-tableau-iframe td,\n.bm-a42-tableau-iframe th{\n\tpadding:5px\n}\n\n.bm-a42-tableau-iframe th{\n\ttext-align: center;\n\tborder-bottom: 1px solid #CEDAE6;\n\tbackground-color: #e3ebf2;\n}\n\n.bm-a42-tableau-iframe .a42-bm-center{\n\ttext-align:center;\n}\n/** BM 5 **/\n\n.bm-a42-5 caption{\n\tposition:relative!important;\n\twidth:auto!important;\n\theight:auto!important;\n\tclip:initial!important;\n\tclip-path: initial!important;\n}\n\n/** BM 6 **/\n.bm-a42-link a[href].bm-a42-outline-elt, \n.bm-a42-link [role="link"].bm-a42-outline-elt{\n\tdisplay:inline-block!important;\n\n}\n\n/**on annule l\'entourage des images qui ne sont pas dans des liens lorsqu\'on active le BM des images avec le BM des liens**/\n.bm-a42-link.bm-a42-image img.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image input[type="image"].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image [role="img"].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image figure map.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image figure [usemap].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image figure [isemap].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image svg.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image canvas.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image object.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image embed.bm-a42-outline-elt{\n\toutline:none!important;\n\tpadding:initial!important;\n\tmax-width:auto;\n}\n/**on masque les messages des images qui ne sont pas dans des liens**/\n.bm-a42-link.bm-a42-image .bm-a42-message-bm-a42-image{\n\tdisplay:none!important;\n}\n\n.bm-a42-link.bm-a42-image .bm-a42-message.bm-a42-message-link,\n.bm-a42-link a[href] .bm-a42-message, \n.bm-a42-link [role="link"] .bm-a42-message{\n\tdisplay:inline-block!important;\n}\n\n/**on masque le compteur des images dans la BM de détection des liens**/\n.bm-a42-link.bm-a42-image .bm-a42-compteur-images{display:none!important}\n\n.bm-a42-link.bm-a42-image a[href] img.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] img.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] input[type="image"].bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] input[type="image"].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] [role="img"].bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] [role="img"].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] map.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] map.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] [usemap].bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] [usemap].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] [ismap].bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] [ismap].bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] svg.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] svg.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] canvas.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] canvas.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] object.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] object.bm-a42-outline-elt,\n.bm-a42-link.bm-a42-image a[href] embed.bm-a42-outline-elt,.bm-a42-link.bm-a42-image [role="link"] embed.bm-a42-outline-elt{\n\toutline:1px solid green!important;\n\tpadding:2px!important;\n\tmax-width:200px;\n}\n\n.bm-a42-link a[href] .bm-a42-message + .bm-a42-message, \n.bm-a42-link [role="link"] .bm-a42-message + .bm-a42-message{\n\tbackground:#5c687d!important;\n\tfont-size:11px!important;\n}\n\n/** BM 9-9 **/ \n.bm-a42-misuse .bm-a42-infos .bm-a42-outline-elt,\n.bm-a42-misuse .bm-a42-infos .bm-a42-outline-soft{\n\toutline:none!important;\n}\n\n.bm-a42-misuse .bm-a42-infos .bm-a42-message{\n\tdisplay:none!important\n}\n/**BM 9-1 **/\n.bm-a42-heading{}\n\n/**BM 9-2 et BM 12-6**/\n.bm-a42-structure header.bm-a42-outline-elt,\n.bm-a42-structure [role="banner"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="banner"].bm-a42-outline-elt{\n\toutline: dashed 5px #962e3f!important;\n}\n.bm-a42-structure nav.bm-a42-outline-elt,\n.bm-a42-structure [role="navigation"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="navigation"].bm-a42-outline-elt{\n\toutline: dotted 5px green!important;\n}\n.bm-a42-structure main.bm-a42-outline-elt,\n.bm-a42-structure [role="main"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="main"].bm-a42-outline-elt{\n\toutline: double 5px #213556!important;\n}\n.bm-a42-structure footer.bm-a42-outline-elt,\n.bm-a42-structure [role="contentinfo"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="contentinfo"].bm-a42-outline-elt{\n\toutline:solid 5px purple!important;\n}\n\n.bm-a42-12-6 [role="search"].bm-a42-outline-elt,\n.bm-a42-structure [role="search"].bm-a42-outline-elt{\n\toutline:groove 5px #d63cd6!important;\n}\n\n.bm-a42-structure header.bm-a42-outline-elt,\n.bm-a42-structure nav.bm-a42-outline-elt,\n.bm-a42-structure main.bm-a42-outline-elt,\n.bm-a42-structure footer.bm-a42-outline-elt,\n.bm-a42-structure [role="banner"].bm-a42-outline-elt,\n.bm-a42-structure [role="navigation"].bm-a42-outline-elt,\n.bm-a42-structure [role="main"].bm-a42-outline-elt,\n.bm-a42-structure [role="contentinfo"].bm-a42-outline-elt,\n.bm-a42-structure [role="search"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="banner"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="navigation"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="main"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="contentinfo"].bm-a42-outline-elt,\n.bm-a42-12-6 [role="search"].bm-a42-outline-elt{\n\tmax-width:99%;\n\tmargin:10px 10px 25px 10px;\n}\n\n.bm-a42-structure header.bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-structure nav.bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-structure main.bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-structure footer.bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-12-6 [role="banner"].bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-12-6 [role="navigation"].bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-12-6 [role="main"].bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-12-6 [role="contentinfo"].bm-a42-outline-elt .bm-a42-outline-elt,\n.bm-a42-12-6 [role="search"].bm-a42-outline-elt .bm-a42-outline-elt{\n\tmargin:30px;\n}\n.bm-a42-structure .bm-a42-message,\n.bm-a42-12-6 .bm-a42-message{\n\tdisplay:block!important\n}\n/**BM 9-3 **/\n\n.bm-a42-list li,\n.bm-a42-list [role="listitem"],\n.bm-a42-list dd,\n.bm-a42-list dt,\n.bm-a42-list [role="term"],\n.bm-a42-list [role="definition"]{\n\tdisplay:block!important;\n\tmargin-top:1px!important;\n}\n.bm-a42-list .bm-a42-message{\n\tdisplay:inline-block!important;\n}\n\n.bm-a42-list .bm-a42-infos .bm-a42-message{\n\tdisplay:none!important;\n}\n.bm-a42-list .bm-a42-infos .bm-a42-outline-elt,\n.bm-a42-list .bm-a42-infos .bm-a42-outline-soft{\n\toutline:none!important;\n\tpadding-top:0!important;\n\tpadding-bottom:0!important;\n}\n.bm-a42-list .bm-a42-infos ul li{\n/*\tdisplay: list-item!important;*/\n\tlist-style-type: \'- \'!important;\n\tmargin-top:0!important;\n}\n\n.bm-a42-list a.bm-a42-outline-elt-bm-a42-list{\n\toutline-color:#666;\n\toutline-width:1px;\n\t/*on double par un outline clair pour les cas de fonds de couleurs foncés*/\n\tbox-shadow:0 0 0 6px white;\n}\nbody.bm-a42-list a.bm-a42-outline-elt-bm-a42-list span.bm-a42-message{\n\tfont-size:60%;\n\tbackground:#666!important;\n\tline-height: 10px !important;\n}\n\nbody.bm-a42-list a.bm-a42-outline-elt-bm-a42-list span.bm-a42-message span.bm-a42-code{\n\tbackground:#666!important;\n}\n.bm-a42-list .bm-a42-compteur .bm-a42-outline-elt,\n.bm-a42-list .bm-a42-compteur .bm-a42-outline-elt-bm-a42-list{\n\toutline:none;\n\tbox-shadow:none;\n}\n\n/**BM 9-4 **/\n.bm-a42-quote q,\n.bm-a42-quote cite{\n\tdisplay:inline-block!important;\n}\n/** BM 10-1 attributs et balises de mise en forme**/\n\n/**BM 10-2 **/\n\n/**BM 10-3 **/\n.bm-a42-10-3 *{\n\tfloat:unset!important;\n\torder:unset!important;\n\tposition:static!important;\n\tflex:unset!important;\n}\n.bm-a42-10-3 {\n\tdisplay:block!important;\n}\n/** voir pour récupérer les styles en js et les remettre à 0 si besoin**/\n/**par exemple ne mettre en display:block que les éléments qui n\'ont pas de display:none!**/ \n/** BM 10-5  **/\n\n.bm-a42-disableimg *{\n\tbackground-image:none!important;\n}\n\n.bm-a42-disableimg img{\n\topacity:0!important;\n}\n\n/** BM 10-6  **/\n.bm-a42-linkcolor .bm-a42-outline-elt{\n\toutline-offset: 3px;}\n\n/** BM 10-12 text spacing **/\n.bm-a42-textspacing *{\n\tline-height:1.5 !important;\n\tletter-spacing:0.12em !important;\n\tword-spacing:0.16em !important;\n\n}\n.bm-a42-textspacing p{\n\tmargin-bottom:2em!important;\n}\n/** BM form champ de formulaire  **/\n\n/** BM fiedlset Regroupement de champs de formulaires  **/\n\n/** BM 11-13 **/\nbody.bm-a42-autocomplete{\n\tmargin-left:300px;\n}\n\nbody.bm-a42-autocomplete.bm-a42-hide-list-autocomplete{\n\tmargin-left:initial!important;\n}\n.bm-a42-list-autocomplete{\n\tposition:fixed;\n\ttop:0;\n\tleft:0;\n\tbottom:0;\n\toverflow:scroll;\n\tmax-width:300px;\n\tfont-family:sans-serif!important;\n\tfont-size:12px!important;\n\tfont-weight:initial!important;\n    font-style:initial!important;\n\tline-height:initial!important;\n    background: #213556 !important;\n\tcolor:#fff!important;\n\tborder:1px solid #ccc!important;\n\tpadding:3px 15px 0 3px!important;\n\tborder-radius: 3px !important;\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6)!important;\n\tz-index:900000!important;\n}\n\n.bm-a42-list-autocomplete ul,\n.bm-a42-list-autocomplete li,\n.bm-a42-list-autocomplete b{\n\tfont-size:12px!important;\n}\n.bm-a42-list-autocomplete ul{\n\tpadding:0 0 0 15px;\n}'
                        )
                    ),
                    document.head.appendChild(t);
            })();
        var t = "bm-a42-link";
        if (document.body.classList.contains(t)) {
            document.body.classList.toggle(t),
                document.body.classList.toggle("bm-a42-accname"),
                document.querySelectorAll('[class*="bm-a42-message-' + t + '"],[class*="bm-a42-infos-' + t + '"]').forEach(function (t) {
                    t.remove();
                });
            let g = document.querySelectorAll('[class*="bm-a42-outline-elt-' + t + '"],[class*="bm-a42-outline-soft-' + t + '"]');
            for (let d = 0; d < g.length; d++) g[d].classList.remove("bm-a42-outline-elt", "bm-a42-outline-elt-" + t, "bm-a42-outline-soft", "bm-a42-outline-soft-" + t);
            if (!document.body.classList.value.match(/\bbm-a42\b/)) {
                let c = document.getElementById("bm-a42-style");
                c && c.parentNode.removeChild(c);
            }
        } else {
            document.body.classList.toggle(t), document.body.classList.toggle("bm-a42-accname");
            let f = ["bm-a42-outline-elt", "bm-a42-outline-elt-" + t],
                h = document.createElement("div");
            h.className = `bm-a42-infos bm-a42-infos-${t}`;
            let k = document.createElement("div");
            k.className = `bm-a42-compteur bm-a42-compteur-${t}`;
            let x = document.createElement("ul");
            function n() {
                let n = document.createElement("span");
                return (n.className = `bm-a42-message bm-a42-message-${t}`), n;
            }
            function e() {
                let t = document.createElement("span");
                return t.classList.add("bm-a42-code"), t;
            }
            k.appendChild(x), h.append(k), document.body.appendChild(h);
            var a = {
                links: document.querySelectorAll("a[href]"),
                rolelink: document.querySelectorAll('[role="link"]'),
                anchortabbed: document.querySelectorAll('a[tabindex="0"]:not([href])'),
                anchor: document.querySelectorAll('a:not([href]):not([tabindex="0"])'),
            };
            const y = ["title", "aria-label", "aria-labelledby", "aria-describedby"],
                A = [
                    { attribute: "aria-hidden", value: "true", text: '⛔<b>aria-hidden</b>="true"' },
                    { attribute: "tabindex", value: "0", text: '<b>tabindex</b>="0"' },
                    { attribute: "tabindex", value: "-1", text: '⛔<b>tabindex</b>="-1"' },
                ];
            document.querySelectorAll("a"), new Map();
            if (a.links.length > 0 || a.rolelink.length || a.anchortabbed.length > 0)
                for (var i = document.querySelectorAll('a[href],[role="link"],a[tabindex="0"]:not([href])'), m = 0; m < i.length; m++) {
                    i[m].classList.add(...f);
                    let v = n(),
                        M = e();
                    (M.innerHTML = "&lt;" + i[m].tagName.toLowerCase()), i[m].getAttribute("href") && (M.innerHTML += " [href]");
                    for (const S of y)
                        if (i[m].hasAttribute(S))
                            if ("title" === S) {
                                var l = i[m].getAttribute("title"),
                                    o = l.length > 100 ? l.substring(0, 100) + "⚠️[..tronqué trop long..]" : l;
                                M.innerHTML += ` <span class="bm-a42-nameproperty"><b>${S}</b>="${o}"</span>`;
                            } else M.innerHTML += ` <span class="bm-a42-nameproperty"><b>${S}</b>="${i[m].getAttribute(S)}"</span>`;
                    for (const j of A) i[m].getAttribute(j.attribute) === j.value && (M.innerHTML += ` ${j.text}`);
                    if ((("-1" !== i[m].getAttribute("tabindex") && "true" !== i[m].getAttribute("aria-hidden")) || v.classList.add("bm-a42-alert"), i[m].getAttribute("role"))) {
                        const $ = i[m].getAttribute("role");
                        "A" === i[m].tagName && "link" !== $ ? ((M.innerHTML += ' ⛔<b>role</b>="' + $ + '"'), v.classList.add("bm-a42-alert")) : (M.innerHTML += ' <b>role</b>="' + $ + '"');
                    } else i[m].getAttribute("role") || i[m].getAttribute("href") || ((M.innerHTML += " ⚠️pas de role?"), v.classList.add("bm-a42-alert"));
                    i[m].getAttribute("tabindex") ||
                        (i[m].getAttribute("href") || "A" !== i[m].tagName
                            ? "link" === i[m].getAttribute("role") && "A" !== i[m].tagName && "BUTTON" !== i[m].tagName && ((M.innerHTML += " ⛔pas de tabindex"), v.classList.add("bm-a42-alert"))
                            : ((M.innerHTML += " ⛔ni href ni tabindex"), v.classList.add("bm-a42-alert"))),
                        (M.innerHTML += "&gt;");
                    i[m].getAttribute("aria-labelledby");
                    const L = u(i[m]),
                        N = (i[m].getAttribute("aria-describedby"), p(i[m])),
                        w = r(i[m]),
                        E = b(i[m]),
                        T = i[m].getAttribute("aria-label"),
                        B = i[m].getAttribute("title");
                    let q = "";
                    q = L.length > 0 ? L.join(" ") : T && "" !== T.trim() ? T.trim() : w && "" !== w.trim() ? w.trim() : B && "" !== B.trim() ? B.trim() : "⛔";
                    let C = "";
                    N.length > 0 ? (C = N.join(" ")) : B && "" !== B.trim() && !q.includes(B.trim()) && (C = B.trim());
                    let H = e();
                    (H.className = "bm-a42-accessible-name"), (H.innerHTML += ` <b>Nom :</b> ${q}`), "⛔" === q || q.includes(E.trim()) || (H.innerHTML += " ⛔nom visible ≠ nom accessible");
                    let z = e();
                    (z.className = "bm-a42-accessible-description"), (z.innerHTML += ` <b>Description :</b> ${C}`), v.appendChild(M), v.appendChild(H), "" !== C && v.appendChild(z), i[m].before(v);
                    
                    if(q.trim() !== '' && C.trim() !== '') {
                        if(C.indexOf(q) !== 0) {
                            let z = e();
                            z.className = "bm-a42-accessible-description";
                            z.innerHTML += `⛔l'attribut <code>title</code> n'intègre pas le nom visible.`;
                            v.appendChild(z);
                            i[m].before(v);

                            console.log(q, C, );
                        }
                    }
                }
            if (a.anchor.length > 0)
                for (m = 0; m < a.anchor.length; m++)
                    if ("link" !== a.anchor[m].getAttribute("role")) {
                        a.anchor[m].getAttribute("tabindex") || a.anchor[m].getAttribute("aria-label") || a.anchor[m].getAttribute("aria-labelledby") ? a.anchor[m].classList.add(...f) : (a.anchor[m].className = "bm-a42-outline-elt-nc");
                        let D = n(),
                            O = e();
                        (O.innerHTML = "&lt;" + a.anchor[m].tagName.toLowerCase()), a.anchor[m].getAttribute("href") && (O.innerHTML += " href");
                        for (const _ of y) a.anchor[m].hasAttribute(_) && (O.innerHTML += ` <span class="bm-a42-nameproperty"><b>${_}</b>="${a.anchor[m].getAttribute(_)}"</span>`);
                        for (const I of A) a.anchor[m].getAttribute(I.attribute) === I.value && (O.innerHTML += ` ${I.text}`);
                        a.anchor[m].getAttribute("tabindex") && !a.anchor[m].getAttribute("role")
                            ? (O.innerHTML += " ⚠️pas de role?")
                            : a.anchor[m].getAttribute("tabindex") && "link" !== a.anchor[m].getAttribute("role") && (O.innerHTML += ' ⚠️<b>role</b>="' + a.anchor[m].getAttribute("role") + '"'),
                            (O.innerHTML += "&gt;"),
                            D.appendChild(O),
                            a.anchor[m].before(D);
                    }
            a.links.length > "0" && (x.innerHTML += "<li>" + a.links.length + " &lt;a href&gt;</li>"), a.rolelink.length > "0" && (x.innerHTML += "<li>" + a.rolelink.length + ' role="link"</li>');
        }
        function b(t) {
            if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
            let n = "";
            for (const e of t.childNodes)
                if ((e.nodeType === Node.TEXT_NODE && (n += e.textContent.trim()), e.nodeType === Node.ELEMENT_NODE)) {
                    const t = window.getComputedStyle(e);
                    if ("none" === t.display || "hidden" === t.visibility) continue;
                    n += b(e);
                }
            return n;
        }
        function r(t) {
            if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
            let n = "";
            for (const e of t.childNodes)
                if ((e.nodeType === Node.TEXT_NODE && (n += e.textContent.trim()), e.nodeType === Node.ELEMENT_NODE)) {
                    const t = window.getComputedStyle(e);
                    if ("none" === t.display || "hidden" === t.visibility || "true" === e.getAttribute("aria-hidden")) continue;
                    "IMG" === e.tagName &&
                        (e.getAttribute("aria-labelledby")
                            ? (n += u(e))
                            : e.getAttribute("aria-label")
                            ? (n += e.getAttribute("aria-label").trim())
                            : e.getAttribute("alt")
                            ? (n += e.getAttribute("alt").trim())
                            : e.getAttribute("title") && (n += e.getAttribute("title").trim())),
                        "svg" === e.tagName && (e.getAttribute("aria-labelledby") ? (n += u(e)) : e.getAttribute("aria-label") && (n += e.getAttribute("aria-label").trim())),
                        "CANVAS" === e.tagName && (e.getAttribute("aria-labelledby") ? (n += u(e)) : e.getAttribute("aria-label") && (n += e.getAttribute("aria-label").trim())),
                        ("OBJECT" !== e.tagName && "EMBED" !== e.tagName) ||
                            (e.getAttribute("aria-labelledby") ? (n += u(e)) : e.getAttribute("aria-label") ? (n += e.getAttribute("aria-label").trim()) : e.getAttribute("title") && (n += e.getAttribute("title").trim())),
                        (n += r(e));
                }
            return n;
        }
        function s(t) {
            let n = "";
            return (
                (function t(e) {
                    if (e.nodeType === Node.TEXT_NODE) n += e.textContent.trim() + " ";
                    else if (e.nodeType === Node.ELEMENT_NODE) {
                        const a = e.tagName.toLowerCase();
                        if ("img" === a)
                            e.hasAttribute("aria-labelledby")
                                ? (n += u(e) + " ")
                                : e.hasAttribute("aria-label")
                                ? (n += e.getAttribute("aria-label").trim() + " ")
                                : e.hasAttribute("alt")
                                ? (n += e.getAttribute("alt").trim() + " ")
                                : e.hasAttribute("title") && (n += e.getAttribute("title").trim() + " ");
                        else if ("svg" === a || "canvas" === a) e.hasAttribute("aria-labelledby") ? (n += u(e) + " ") : e.hasAttribute("aria-label") && (n += e.getAttribute("aria-label").trim() + " ");
                        else if ("object" === a || "embed" === a)
                            e.hasAttribute("aria-labelledby") ? (n += u(e) + " ") : e.hasAttribute("aria-label") ? (n += e.getAttribute("aria-label").trim() + " ") : e.hasAttribute("title") && (n += e.getAttribute("title").trim() + " ");
                        else {
                            Array.from(e.childNodes).forEach(t);
                        }
                    }
                })(t),
                n.trim()
            );
        }
        function u(t) {
            const n = t.getAttribute("aria-labelledby");
            if (n) {
                const t = n.split(" "),
                    e = [];
                for (const n of t) {
                    const t = document.getElementById(n);
                    if (t) {
                        const n = s(t);
                        n && e.push(n);
                    }
                }
                return e;
            }
            return [];
        }
        function p(t) {
            const n = t.getAttribute("aria-describedby");
            if (n) {
                const t = n.split(" "),
                    e = [];
                for (const n of t) {
                    const t = document.getElementById(n);
                    if (t) {
                        const n = s(t);
                        n && e.push(n);
                    }
                }
                return e;
            }
            return [];
        }
    })();
})();})();