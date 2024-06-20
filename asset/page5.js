document.addEventListener('DOMContentLoaded', function () {
    var page5Text = document.getElementById('page5-texterea');
    var page5NextButton = document.getElementById('page5-next');
    var page5BeforeButton = document.getElementById('page5-before');
    page5BeforeButton.addEventListener('click', function () {
        window.location.href = 'page4.html';
    });
    page5Text.addEventListener('input', function () {
        if (page5Text.value.trim().length > 0) {
            page5NextButton.classList.add('btn--maincolor');
        }
        else {
            page5NextButton.classList.remove('btn--maincolor');
        }
    });
    page5NextButton.addEventListener('click', function (event) {
        if (page5Text.value.trim().length > 0) {
            window.location.href = 'page6.html';
        }
        else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
