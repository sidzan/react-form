//var actions=require("./actions");


module.exports.add_new = function (vals){
    return function(dispatch) {
        dispatch({
            type: "UPDATING",
        });
        var users = JSON.parse(localStorage.getItem("users"));
        if (!users) {
            users = [];
        }
        users.push(vals);
        localStorage.setItem("users",JSON.stringify(users));
        
        dispatch({
            type: "UPDATED",
        });
    };
};
    
module.exports.delete_line=function(index,cb) {
    
    return function(dispatch) {

        var users = JSON.parse(localStorage.getItem("users"));
        
        dispatch({
            type: "UPDATING",
        });
        users.splice(index,1);
        localStorage.setItem("users",JSON.stringify(users));
        
        dispatch({
            type: "UPDATED",
        });
        if(cb){
            cb();
        }

    };
};

module.exports.update=function(index,vals,cb) {
    
    return function(dispatch) {

        var users = JSON.parse(localStorage.getItem("users"));
        dispatch({
            type: "UPDATING",
        });
        users[index]=vals;
        localStorage.setItem("users",JSON.stringify(users));
        
        dispatch({
            type: "UPDATED",
        });
        if (cb) {cb();}

    };
};