(function () {
    let names = ["John", "Anna", "Julia", "Max", "Jack", "Olena", "Ivan", "Jane", "Jeremia"];

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === "j") {
            speakGoodBye(name);
        } else {
            speakHello(name);
        }
    }

    console.log("Додатковий відбір: залежність від останньої літери");

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let firstLetter = name.charAt(0).toLowerCase();
        let lastLetter = name.at(-1).toLowerCase();

        if (firstLetter === "j" && lastLetter === "a") {
            youFired(name);
        } else if(firstLetter === "j") {
            speakGoodBye(name);
        } else {
            speakHello(name);
        }
    }

})();