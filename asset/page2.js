document.addEventListener('DOMContentLoaded', function () {
    var page2BeforeButton = document.getElementById('page2-before');
    page2BeforeButton.addEventListener('click', function () {
        window.location.href = 'page1.html';
    });
});
var elementBar1 = document.getElementById('emotion-bar-1');
var elementText1 = document.getElementById('emotion-text-1');
elementBar1.addEventListener('input', function () {
    elementText1.value = elementBar1.value;
});
var elementBar2 = document.getElementById('emotion-bar-2');
var elementText2 = document.getElementById('emotion-text-2');
elementBar2.addEventListener('input', function () {
    elementText2.value = elementBar2.value;
});
var elementBar3 = document.getElementById('emotion-bar-3');
var elementText3 = document.getElementById('emotion-text-3');
elementBar3.addEventListener('input', function () {
    elementText3.value = elementBar3.value;
});
var elementBar4 = document.getElementById('emotion-bar-4');
var elementText4 = document.getElementById('emotion-text-4');
elementBar4.addEventListener('input', function () {
    elementText4.value = elementBar4.value;
});
var elementBar5 = document.getElementById('emotion-bar-5');
var elementText5 = document.getElementById('emotion-text-5');
elementBar5.addEventListener('input', function () {
    elementText5.value = elementBar5.value;
});
document.addEventListener('DOMContentLoaded', function () {
    // 全てのレンジスライダーの要素を取得（必要に応じてセレクタを変更）
    var rangeSliders = document.querySelectorAll('input[type="range"]');
    // Track の元の色
    var baseColor = '#555';
    // Track のつまみの左側の部分の色
    var activeColor = '#2196F3';
    // 取得したレンジスライダーの各要素に対して実行
    rangeSliders.forEach(function (slider) {
        // input イベントのリスナーを設定
        slider.addEventListener('input', function (e) {
            // updateSlider を呼び出す
            updateSlider(e.target);
        });
        // updateSlider を実行して現在の値を反映
        updateSlider(slider);
    });
    // input イベントで呼び出される関数（トラックの塗りの範囲と色を設定する関数）
    function updateSlider(slider) {
        // max 属性の値が省略されている場合は100を設定
        if (!slider.max) {
            slider.max = 100;
        }
        // 現在の値から割合（%）を取得
        var progress = (slider.value / slider.max) * 100;
        // linear-gradient で Track の色を設定
        slider.style.background = "linear-gradient(to right, ".concat(activeColor, " ").concat(progress, "%, ").concat(baseColor, " ").concat(progress, "%)");
    }
});
/*ボタン出現*/
var addButton = document.getElementById('emotion-add');
var deleteButton = document.getElementById('emotion-delete');
var page2NextButton = document.getElementById('page2-next');
var currentContainer = 1;
var maxContainers = 5;
addButton.addEventListener("click", function () {
    if (currentContainer < maxContainers) {
        currentContainer++;
        page2NextButton.classList.remove('btn--maincolor');
        document.getElementById("emotion-container-".concat(currentContainer)).classList.remove('emotion-hidden');
        if (currentContainer > 1) {
            deleteButton.classList.remove('emotion-hidden');
        }
        checkAllInputs();
    }
});
deleteButton.addEventListener("click", function () {
    if (currentContainer > 1) {
        document.getElementById("emotion-container-".concat(currentContainer)).classList.add('emotion-hidden');
        currentContainer--;
        if (currentContainer === 1) {
            deleteButton.classList.add('emotion-hidden');
        }
        checkAllInputs();
    }
});
var checkAllInputs = function () {
    for (var i = 1; i <= currentContainer; i++) {
        var select = document.getElementById("emotion-select-".concat(i));
        var text = document.getElementById("emotion-text-".concat(i));
        if (select.value === "" || text.value === "") {
            page2NextButton.classList.add('btn--disabled');
            page2NextButton.classList.remove('btn--maincolor');
        }
        else if (select.value != "" && text.value != "") {
            page2NextButton.classList.add('btn--maincolor');
            page2NextButton.classList.remove('btn--disabled');
        }
    }
};
var inputs = document.querySelectorAll('select, input[type="range"]');
inputs.forEach(function (input) {
    input.addEventListener('input', checkAllInputs);
});
page2NextButton.addEventListener('click', function (event) {
    if (page2NextButton.classList.contains('btn--maincolor')) {
        window.location.href = 'page3.html';
    }
    else {
        event.preventDefault();
        alert('感情項目を入力してください');
    }
});
