javascript: (function() {
    function showAllAutoCompleteCandidates() {
        ! function e() {
            let o = document.querySelectorAll("[aria-hidden=true]");
            Array.from(o).forEach(function(e) {
                e.remove()
            })
        }();
        let e = document.createElement("style");
        e.innerHTML = ".auto-complete-candidate {outline:3px dotted orange;}.auto-complete-required {outline:3px solid red;outline-offset:2px;box-shadow:0 0 0 8px white}", document.querySelector("head").append(e);
        let o = document.querySelectorAll("input:not([autocomplete]):not([type=radio]):not([type=checkbox]):not([type=hidden]):not([type=submit]),select:not([autocomplete])"),
            t = "",
            n = "",
            i = "",
            a = "",
            l = "",
            r = 0,
            p = "";
        p += '<option value="">Pick an autocomplete value...</option>\n', p += '<optgroup label="Title">\n', p += '<option value="honorific-prefix">honorific-prefix  ----  prefix, title e.g. Mr/Mrs</option>\n', p += '<option value="honorific-suffix">honorific-suffix  ----  suffix e.g. Jnr/Esq</option>\n', p += '<optgroup label="Name/Personal Details">\n', p += '<option value="name">name  ----  full name</option>\n', p += '<option value="given-name">given-name  ----  first-name, forename</option>\n', p += '<option value="additional-name">additional-name  ----  middle name</option>\n', p += '<option value="family-name">family-name  ----  last name, surname</option>\n', p += '<option value="nickname">nickname  ----  screen name, handle</option>\n', p += '<option value="username">username  ----  login name, account name</option>\n', p += '<option value="sex">sex  ----  gender</option>\n', p += '<option value="language">language</option>\n', p += '<optgroup label="Address">\n', p += '<option value="street-address">street-address  ----  full address, postal address</option>\n', p += '<option value="address-line1">address-line1</option>\n', p += '<option value="address-line2">address-line2</option>\n', p += '<option value="address-line3">address-line3</option>\n', p += '<option value="address-level4">address-level4</option>\n', p += '<option value="address-level3">address-level3</option>\n', p += '<option value="address-level2">address-level2  ----  city, town, village</option>\n', p += '<option value="address-level1">address-level1  ----  state, post-town, province, canton</option>\n', p += '<option value="country">country  ----  country code, territory code</option>\n', p += '<option value="country-name">country-name</option>\n', p += '<option value="postal-code">postal-code  ----  post code, zip code, cedex code</option>\n', p += '<optgroup label="Telephone">\n', p += '<option value="tel">tel  ----  full telephone number</option>\n', p += '<option value="tel-country-code">tel-country-code</option>\n', p += '<option value="tel-national">tel-national</option>\n', p += '<option value="tel-area-code">tel-area-code</option>\n', p += '<option value="tel-local">tel-local</option>\n', p += '<option value="tel-local-prefix">tel-local-prefix</option>\n', p += '<option value="tel-local-suffix">tel-local-suffix</option>\n', p += '<option value="tel-extension">tel-extension</option>\n', p += '<optgroup label="Passwords">\n', p += '<option value="new-password">new-password</option>\n', p += '<option value="current-password">current-password</option>\n', p += '<option value="one-time-code">one-time-code  ----  one-time-password, otp, otc</option>\n', p += '<optgroup label="Credit Card/Financial">\n', p += '<option value="cc-name">cc-name  ----  credit card full name</option>\n', p += '<option value="cc-given-name">cc-given-name  ----  credit card first name</option>\n', p += '<option value="cc-additional-name">cc-additional-name  ----  credit card middle-name</option>\n', p += '<option value="cc-family-name">cc-family-name  ----  credit card surname</option>\n', p += '<option value="cc-number">cc-number</option>\n', p += '<option value="cc-exp">cc-exp  ----  credit card expiry date</option>\n', p += '<option value="cc-exp-month">cc-exp-month  ----  credit card expiry month</option>\n', p += '<option value="cc-exp-year">cc-exp-year  ----  credit card expiry year</option>\n', p += '<option value="cc-csc">cc-csc  ----  credit card cvc 3-digit code</option>\n', p += '<option value="cc-type">cc-type  ----  credit card type</option>\n', p += '<option value="transaction-currency">transaction-currency</option>\n', p += '<option value="transaction-amount">transaction-amount</option>\n', p += '<optgroup label="Date of Birth">\n', p += '<option value="bday">bday  ----  birthday</option>\n', p += '<option value="bday-day">bday-day  ----  birthday day</option>\n', p += '<option value="bday-month">bday-month  ----  birthday month</option>\n', p += '<option value="bday-year">bday-year  ----  birthday year</option>\n', p += '<optgroup label="Other">\n', p += '<option value="organization-title">organization-title  ----  job title</option>\n', p += '<option value="organization">organization  ----  company-name, company</option>\n', p += '<option value="email">email</option>\n', p += '<option value="url">url  ----  web address/homepage</option>\n', p += '<option value="photo">photo  ----  image, avatar, icon</option>\n', p += '<option value="impp">impp</option>\n', p += '<option value="off">off</option>\n';
        var d = 0;
        if (o.length > 0) {
            let c = /^[A-Za-z][-A-Za-z0-9_:.]*$/;
            Array.from(o).forEach(function(e) {
                if (t = e.outerHTML, a = e.getAttribute("id"), !c.test(a)) {
                    console.group("Invalid ID found"), console.log("Following field had invalid `id` of " + a), e.setAttribute("data-original-invalid-id", a);
                    let o = `id_${a.replace(/[^a-zA-Z0-9_]/g,"_")}`;
                    a = function e(o) {
                        let t = o,
                            n = 1;
                        for (; document.getElementById(t);) t = `${o}_${n++}`;
                        return t
                    }(o), console.log("Renamed to " + o), e.id = a, console.log(e), console.groupEnd()
                }
                fieldName = e.getAttribute("name"), null === a && (null === fieldName ? (d++, e.setAttribute("id", "IDDYNAMICALLYMADEUP_" + d), a = "IDDYNAMICALLYMADEUP_" + d) : (e.setAttribute("id", "IDFROMNAME_" + e.getAttribute("name")), a = "IDFROMNAME_" + e.getAttribute("name"))), e.classList.add("auto-complete-candidate");
                let n = document.createElement("DIV");
                n.innerHTML = '<select class="autoCompleteSuggestion" data-field-id="' + a + '" aria-label="autocomplete suggestion for ' + a + '">\n' + p + "</select>\n", n.classList.add("tempDiv"), n.style = "margin:5px 0 20px 0",
                    function e(o, t) {
                        t.parentNode.insertBefore(o, t.nextSibling)
                    }(n, e)
            });
            let u = document.querySelectorAll(".autoCompleteSuggestion"),
                s = "";
            Array.from(u).forEach(function(e) {
                e.addEventListener("change", function() {
                    "" !== e[e.selectedIndex].value && r++, n = "", i = "", l = e[e.selectedIndex].value, s = e.getAttribute("data-field-id"), document.querySelector("#" + s).classList.add("auto-complete-required"), document.querySelector("#" + s).setAttribute("autocomplete", l);
                    let o = document.querySelectorAll(".auto-complete-required");
                    Array.from(o).forEach(function(e) {
                        n += "* " + e.getAttribute("id") + ": " + e.getAttribute("autocomplete") + "\n", i += e.outerHTML + "\n\n"
                    }), i = (i = (i = i.split('class="amended"').join("").split(" amended").join("").split(' class=""').join("")).split("auto-complete-candidate auto-complete-required").join("")).split(' class=""').join("");
                    let t = " fields require";
                    1 === r && (t = " field requires"), console.clear(), console.log("The following " + r + t + " an autocomplete attribute as specified:\n\n" + n + "\nFull details:\n\n" + i)
                })
            });
            let m = document.createElement("button");
            m.setAttribute("type", "button"), m.innerHTML = "I'm done setting `autocomplete`", m.style = "position:fixed;z-index:10000;top:1em;right:1em;background:red;color:white;font-weight:bold;", document.querySelector("body").append(m), m.addEventListener("click", function() {
                m.remove();
                let e = document.querySelectorAll(".auto-complete-candidate");
                Array.from(e).forEach(function(e) {
                    e.classList.remove("auto-complete-candidate")
                });
                let o = document.querySelectorAll(".tempDiv");
                Array.from(o).forEach(function(e) {
                    e.remove()
                })
            }), alert(o.length + ' fields that lack an autocomplete are present on the page.\n\nâ¢ Set the correct values for each identified field\nâ¢ Then press the "I\'m done ..." button')
        } else alert("No fields without autocomplete found")
    }
    showAllAutoCompleteCandidates()
})()