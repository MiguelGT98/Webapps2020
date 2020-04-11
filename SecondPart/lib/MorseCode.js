window.onload = () => {
    const searchForm = document.getElementById("search-form");
    const text = document.getElementById("text");
    const timeBetweenDigit = document.getElementById("timeBetweenDigit");
    const timeBetweenLetters = document.getElementById("timeBetweenLetters");
    const timeBetweenWords = document.getElementById("timeBetweenWords");
    searchForm.onsubmit = (e) => {
        e.preventDefault();
        morseCodeProgression(text["value"], timeBetweenDigit["value"], timeBetweenLetters["value"], timeBetweenWords["value"]);
    };
};
async function morseCodeProgression(text, timeBetweenDigit, timeBetweenLetters, timeBetweenWords) {
    const morseCode = {
        a: "·-",
        b: "-···",
        c: "-·-·",
        d: "-··",
        e: "·",
        f: "··-·",
        g: "--·",
        h: "····",
        i: "··",
        j: "·---",
        k: "-·-",
        l: "·-··",
        m: "--",
        n: "-·",
        o: "---",
        p: "·--·",
        q: "--·-",
        r: "·-·",
        s: "···",
        t: "-",
        u: "··-",
        v: "···-",
        w: "·--",
        x: "-··-",
        y: "-·--",
        z: "--··",
        1: "·----",
        2: "··---",
        3: "···--",
        4: "····-",
        5: "·····",
        6: "-····",
        7: "--···",
        8: "---··",
        9: "----·",
        0: "-----",
    };
    let index = 0;
    const morseWrapper = document.getElementById("morse-wrapper");
    morseWrapper.innerHTML = "";
    const lightbulb = document.getElementById("lightbulb");
    for (let i = 0; i < text.length; i++) {
        const outerSpan = document.createElement("span");
        outerSpan.classList.add("outer-span");
        morseWrapper.appendChild(outerSpan);
        if (text[i].toLowerCase() === " ") {
            await sleep(timeBetweenWords);
            continue;
        }
        const code = morseCode[text[i].toLowerCase()];
        for (let j = 0; j < code.length; j++) {
            const span = document.createElement("span");
            span.classList.add("inner-span");
            span.dataset["index"] = `${index}`;
            span.innerHTML = code[j];
            outerSpan.appendChild(span);
            index++;
            if (code[j] === "·")
                lightbulb.classList.add("dot");
            if (code[j] === "-")
                lightbulb.classList.add("line");
            await sleep(timeBetweenDigit);
            lightbulb.classList.remove("dot");
            lightbulb.classList.remove("line");
        }
        await sleep(timeBetweenLetters);
    }
}
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
