var getValueFunc = function(array) {
    if(array.length <= 2){
        return 0;
    }

    array.sort(function(a, b){ return a -b;});

    return array[1];
}

module.exports = getValueFunc;
