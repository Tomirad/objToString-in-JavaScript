function objToString (obj, recursiveLevel = 0) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
        	str += '\n' + tabString(recursiveLevel);
        	if(typeof obj[p] === 'object') str += p + objToString(obj[p], recursiveLevel + 1);
        	else str += p + ' :: ' + obj[p];
        }
    }
    return str;
}

function tabString(level) {
	var str = '';
	var tab = '  ';
    for(i = 0; i <= level; i++) {
    	str += tab;
    }
    return str;
}
