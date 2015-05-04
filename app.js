angular.module("runesApp", []);
angular.module("runesApp").service("runeService", function(){
    var runes_table = {
        "f": "&#x16A0 ",
        "u": "&#x16A2 ",
        "a": "&#x16A8 ",
        "r": "&#x16B1 ",
        "c": "&#x16B2 ",
        "g": "&#x16B7 ",
        "w": "&#x16B9 ",
        "h": "&#x16BA &#x16BB ",
        "n": "&#x16BE ",
        "i": "&#x16C1 ",
        "p": "&#x16C8 ",
        "z": "&#x16C9 ",
        "s": "&#x16CA &#x16CB ",
        "t": "&#x16CF ",
        "b": "&#x16D2 ",
        "e": "&#x16D6 ",
        "m": "&#x16D7 ",
        "l": "&#x16DA ",
        "o": "&#x16DF ",
        "d": "&#x16DE "
    };

    var translate = function(input){
        var output = "";
        for (var index_letter = 0, length = input.length; index_letter < length; index_letter++){
            letter = input[index_letter].toLowerCase();
            output += runes_table[letter];
        }
        return output;

    };

    return {
        translate: translate
    };
});

angular.module("runesApp").filter("toRune", function(runeService){
    return function(input){
        if (input){
            return runeService.translate(input);
        }
        return "";
    }
});