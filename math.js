
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a+b;
}

// module.exports = {  // default export
//     add,sub
// };


exports.add = (a,b) => a +b;
exports.sub = (a,b) => a - b;
