var LodeValue = localStorage.getItem("page3");
var page3Text = document.getElementById('page3-texterea');
var page3NextButton = document.getElementById('page3-next');
var page3BeforeButton = document.getElementById('page3-before');
document.addEventListener('DOMContentLoaded', function () {
    if (LodeValue !== null) {
        page3Text.value = LodeValue;
    }
    page3Text.addEventListener('input', function () {
        if (page3Text.value.trim().length > 0) {
            page3NextButton.classList.add('btn--maincolor');
        }
        else {
            page3NextButton.classList.remove('btn--maincolor');
        }
    });
});
page3BeforeButton.addEventListener('click', function () {
    localStorage.setItem("page3", page3Text.value);
    window.location.href = 'page2.html';
});
page3NextButton.addEventListener('click', function (event) {
    if (page3Text.value.trim().length > 0) {
        localStorage.setItem("page3", page3Text.value);
        window.location.href = 'page4.html';
    }
    else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
