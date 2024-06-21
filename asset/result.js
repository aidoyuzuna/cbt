var page1Result = document.getElementById('result-page1');
var page2Result = document.getElementById('result-page2');
var page3Result = document.getElementById('result-page3');
var page4Result = document.getElementById('result-page4');
var page5Result = document.getElementById('result-page5');
var page1Return = document.getElementById('page1-return');
var page1Load = localStorage.getItem("page1");
var page2Load = localStorage.getItem("page2");
var page3Load = localStorage.getItem("page3");
var page4Load = localStorage.getItem("page4");
var page5Load = localStorage.getItem("page5");
if (page1Load) {
    page1Result.value = page1Load;
}
if (page2Load) {
    var page2Data = JSON.parse(page2Load);
    var result2 = [];
    for (var i = 1; i <= Object.keys(page2Data).length / 2; i++) {
        var selectKey = "emotion-select-".concat(i);
        var textKey = "emotion-text-".concat(i);
        if (page2Data[selectKey] && page2Data[textKey]) {
            result2.push("".concat(page2Data[selectKey], ": ").concat(page2Data[textKey]));
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
page1Return.addEventListener('click', function () {
    window.location.href = 'page1.html';
});
localStorage.clear();
