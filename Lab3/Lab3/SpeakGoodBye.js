let speakGoodBye = (function () {
    let speakWord = "Goodbye";
 
    return function (name) {
        console.log(speakWord + " " + name);
    };
})();