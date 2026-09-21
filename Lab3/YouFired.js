let youFired = (function () {
    let speakWord = "You fired";
 
    return function (name) {
        console.log(speakWord + " " + name);
    };
})();