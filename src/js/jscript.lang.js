jscript.lang.copyProperties = function(inSrcObj, inDestObj, inOverride) {
    var prop;
    for (prop in inSrcObj) {
        if (inOverride || !inDestObj[prop]) {
            inDestObj[prop] = inSrcObj[prop];
        }
    }
    return inDestObj;
}