var numeral = require('numeral');
var moment = require('moment');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports.fdmy=function(date) { //format date
    return moment(date).format('D-M-Y')

}

module.exports.format_money=function(v,fmt) {
    if (!fmt) fmt='0,0.00';
    return numeral(v).format(fmt);
}

module.exports.get_cookie = function(sName) {
    sName = sName.toLowerCase();
    var oCrumbles = document.cookie.split(';');
    for(var i=0; i<oCrumbles.length;i++)
    {
        var oPair= oCrumbles[i].split('=');
        var sKey = decodeURIComponent(oPair[0].trim().toLowerCase());
        var sValue = oPair.length>1?oPair[1]:'';
        if(sKey == sName)
            return decodeURIComponent(sValue);
    }
    return '';
}


function set_cookie(sName,sValue) {
    var oDate = new Date();
    oDate.setYear(oDate.getFullYear()+1);
    var sCookie = encodeURIComponent(sName) + '=' + encodeURIComponent(sValue) + ';expires=' + oDate.toGMTString() + ';path=/';
    document.cookie= sCookie;
}

module.exports.set_cookie = set_cookie;

module.exports.clear_cookie = function(sName) {
    set_cookie(sName,'');
}

