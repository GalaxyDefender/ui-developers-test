jscript.array.copyArray = function(inSrcArray, inDestArray) {
    var i;
    for(i = 0; i < inSrcArray.length; i++) {
        inDestArray.push(inSrcArray[i]);
    }
    return inDestArray;
}

jscript.array.findInArray = function(inArray, inValue) {
    var i;
    for (i = 0; i < inArray.length; i++) {
        if (inArray[i] == inValue) {
            return i;
        }
    }
    return -1;
}

jscript.array.arrayAverage = function(inArray) {
    var accumulator = 0;
    var i;
    for (i = 0; i < inArray.length; i++) {
        accumulator += inArray[i];
    }
    return accumulator / inArray.length;
}
