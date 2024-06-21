var LodeValue = localStorage.getItem("page4");
var page4Text = document.getElementById('page4-texterea');
var page4NextButton = document.getElementById('page4-next');
var page4BeforeButton = document.getElementById('page4-before');
document.addEventListener('DOMContentLoaded', function () {
    if (LodeValue !== null) {
        page4Text.value = LodeValue;
    }
    page4Text.addEventListener('input', function () {
        if (page4Text.value.trim().length > 0) {
            page4NextButton.classList.add('btn--maincolor');
        }
        else {
            page4NextButton.classList.remove('btn--maincolor');
        }
    });
});
page4BeforeButton.addEventListener('click', function () {
    localStorage.setItem("page4", page4Text.value);
    window.location.href = 'page3.html';
});
page4NextButton.addEventListener('click', function (event) {
    if (page4Text.value.trim().length > 0) {
        localStorage.setItem("page4", page4Text.value);
        window.location.href = 'page5.html';
    }
    else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
