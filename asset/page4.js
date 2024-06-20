document.addEventListener('DOMContentLoaded', function () {
    var page4Text = document.getElementById('page4-texterea');
    var page4NextButton = document.getElementById('page4-next');
    var page4BeforeButton = document.getElementById('page4-before');
    page4BeforeButton.addEventListener('click', function () {
        window.location.href = 'page4.html';
    });
    page4Text.addEventListener('input', function () {
        if (page4Text.value.trim().length > 0) {
            page4NextButton.classList.add('btn--maincolor');
        }
        else {
            page4NextButton.classList.remove('btn--maincolor');
        }
    });
    page4NextButton.addEventListener('click', function (event) {
        if (page4Text.value.trim().length > 0) {
            window.location.href = 'page5.html';
        }
        else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
