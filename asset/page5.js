var LodeValue = localStorage.getItem("page5");
var page5Text = document.getElementById('page5-texterea');
var page5NextButton = document.getElementById('page5-next');
var page5BeforeButton = document.getElementById('page5-before');
document.addEventListener('DOMContentLoaded', function () {
    if (LodeValue !== null) {
        page5Text.value = LodeValue;
    }
    page5Text.addEventListener('input', function () {
        if (page5Text.value.trim().length > 0) {
            page5NextButton.classList.add('btn--maincolor');
        }
        else {
            page5NextButton.classList.remove('btn--maincolor');
        }
    });
});
page5BeforeButton.addEventListener('click', function () {
    localStorage.setItem("page5", page5Text.value);
    window.location.href = 'page4.html';
});
page5NextButton.addEventListener('click', function (event) {
    if (page5Text.value.trim().length > 0) {
        localStorage.setItem("page5", page5Text.value);
        window.location.href = 'result.html';
    }
    else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
