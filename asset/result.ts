const page1Result = document.getElementById('result-page1') as HTMLTextAreaElement;
const page2Result = document.getElementById('result-page2') as HTMLTextAreaElement;
const page3Result = document.getElementById('result-page3') as HTMLTextAreaElement;
const page4Result = document.getElementById('result-page4') as HTMLTextAreaElement;
const page5Result = document.getElementById('result-page5') as HTMLTextAreaElement;
const page1Return = document.getElementById('page1-return') as HTMLButtonElement;

let page1Load = localStorage.getItem("page1");
let page2Load = localStorage.getItem("page2");
let page3Load = localStorage.getItem("page3");
let page4Load = localStorage.getItem("page4");
let page5Load = localStorage.getItem("page5");

if (page1Load) {
    page1Result.value = page1Load;
}


if (page2Load) {
    let page2Data = JSON.parse(page2Load);
    let result2: string[] = [];

    for (let i = 1; i <= Object.keys(page2Data).length / 2; i++) {
        let selectKey = `emotion-select-${i}`;
        let textKey = `emotion-text-${i}`;

        if (page2Data[selectKey] && page2Data[textKey]) {
            result2.push(`${page2Data[selectKey]}: ${page2Data[textKey]}`);
        }
    }

    page2Result.value = result2.join(", ");
}

if (page3Load) {
    page3Result.value = page3Load;
}
if (page4Load) {
    page4Result.value = page4Load;
}
if (page5Load) {
    page5Result.value = page5Load;
}

page1Return.addEventListener('click', () => {
    window.location.href = 'page1.html';
});

localStorage.clear();