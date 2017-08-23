utils=require("./utils");

var translation={
    en_US: require("./translations/en.js"),
    ja_JP: require("./translations/jp.js"),
    th_TH: require("./translations/th.js"),
}

module.exports.translate=function(k) {
    var locale=utils.get_cookie("locale")||"th_TH";
    var r=translation[locale][k];
    if (!r) return k;
    return r;
}

module.exports.get_current_locale=function() {
    var locale=utils.get_cookie("locale")||"th_TH";
    return locale;
}

module.exports.set_locale=function(locale) {
    console.log("i18n.select_lang",locale);
    utils.set_cookie("locale",locale);
}
