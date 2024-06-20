document.addEventListener('DOMContentLoaded', function () {
    var page3Text = document.getElementById('page3-texterea');
    var page3NextButton = document.getElementById('page3-next');
    var page3BeforeButton = document.getElementById('page3-before');
    page3BeforeButton.addEventListener('click', function () {
        window.location.href = 'page2.html';
    });
    page3Text.addEventListener('input', function () {
        if (page3Text.value.trim().length > 0) {
            page3NextButton.classList.add('btn--maincolor');
        }
        else {
            page3NextButton.classList.remove('btn--maincolor');
        }
    });
    page3NextButton.addEventListener('click', function (event) {
        if (page3Text.value.trim().length > 0) {
            window.location.href = 'page3.html';
        }
        else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
