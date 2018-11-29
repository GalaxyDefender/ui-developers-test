jscript.string.substrCount = function(inStr, inSearchStr) {
    if (inStr == null || inStr == "" ||
        inSearchStr == null || inSearchStr == "") {
            return 0;
        }
    var splitChars = inStr.split(inSearchStr);
    return splitChars.length - 1;
}

jscript.string.stripChars = function(inStr, inStripOrAllow, inCharList) {
    if (inStr == null || inStr == "" ||
        inCharList == null || inCharList == "" ||
        inStripOrAllow == null || inStripOrAllow == "") {
            return "";
        }
    inStripOrAllow = inStripOrAllow.toLowerCase();
    var outStr = "";
    var i;
    var j;
    var nextChar;
    var keepChar;

    for (i = 0; i < inStr.length; i++) {
        nextChar = inStr.substr(i, 1);
        if (inStripOrAllow == "allow") {
            keepChar = false;
        } else {
            keepChar = true;
        }
        for (j = 0; j < inCharList.length; j++){
            checkChar = inCharList.substr(j, 1);
            if (inStripOrAllow == "allow" && nextChar == checkChar) {
                keepChar = true;
            }
            if (inStripOrAllow == "strip" && nextChar == checkChar) {
                keepChar = false;
            }
        }
        if (keepChar == true) {
            outStr = outStr + nextChar;
        }
    }
    return outStr;
}

jscript.string.strContentValid = function(inString, inCharList, inFromExcept) {
    if(inString == null || inCharList == null || inFromExcept == null || inString == "" || inCharList == ""){
        return false;
    }
    inFromExcept = inFromExcept.toLowerCase();
    var i;
    if (inFromExcept == "from_list") {
        for (i = 0; i < inString.length; i++) {
            if (inCharList.indexOf(inString.charAt[i]) == -1) {
                return false;
            }
        }
        return true;
    }
    if (inFromExcept == "not_from_list") {
        for (i = 0; i < inString.length; i++) {
            if (inCharList.indexOf(inString.charAt(i)) != -1) {
                return false;
            }
        }
        return true;
    }
}

jscript.string.replace = function(inStr, inOld, inNew) {
    if (inSrc == null || inStr == "" || inOld == null || inOld == "" || inNew == null || inNew == "") {
        return "";
    }
    while (inSrc.indexOf(inOld) > -1) {
        inSrc = inSrc.replace(inOld, inNew);
    }
    return inSrc;
}

jscript.string.leftTrim = function(inStr) {
    if (inStr == null || inStr == "") {
        return null;
    }
    var j;
    for (j = 0; inStr.charAt(j) == " "; j++) { }
    return inStr.substring(j, inStr.length);
}

jscript.string.rightTrim = function(inStr) {
    if (inStr == null || inStr == "") {
        return null;
    }
    var j;
    for (j = inStr.length - 1; inStr.charAt(j) == " "; j--) { }
    return inStr.substring(0, j + 1);
}

jscript.string.fullTrim = function(inStr) {
    if (inStr == null || inStr == "") {
        return "";
    }
    inStr = this.leftTrim(inStr);
    inStr = this.rightTrim(inStr);
    return inStr;
}
jscript.string.breakLine = function(inText, inSize) {
    if (inText == null || inText == "" || inSize <= 0) {
        return inText;
    }
    if (inText.length <= inSize) {
        return inText;
    }
    var outArray = new Array();
    var str = inText;
    while (str.length > inSize) {
        var x = str.substring(0, inSize);
        var y = x.lastIndexOf(" ");
        var z = x.lastIndexOf("\n");
        if (z != -1) {
            y = inSize;
        }
        outArray.push(str.substring(0, y));
        str = str.substring(y);
    }
    outArray.push(str);
    return outArray;
}