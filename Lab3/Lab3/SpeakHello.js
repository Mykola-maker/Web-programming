let speakHello = (function () {
    let speakWord = "Hello";
 
    return function (name) {
        console.log(speakWord + " " + name);
    };
})();