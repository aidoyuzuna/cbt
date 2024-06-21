//変数定義：エモーションパーツ
var elementPulldown1 = document.getElementById('emotion-select-1');
var elementBar1 = document.getElementById('emotion-bar-1');
var elementText1 = document.getElementById('emotion-text-1');
var elementPulldown2 = document.getElementById('emotion-select-2');
var elementBar2 = document.getElementById('emotion-bar-2');
var elementText2 = document.getElementById('emotion-text-2');
var elementPulldown3 = document.getElementById('emotion-select-3');
var elementBar3 = document.getElementById('emotion-bar-3');
var elementText3 = document.getElementById('emotion-text-3');
var elementPulldown4 = document.getElementById('emotion-select-4');
var elementBar4 = document.getElementById('emotion-bar-4');
var elementText4 = document.getElementById('emotion-text-4');
var elementPulldown5 = document.getElementById('emotion-select-5');
var elementBar5 = document.getElementById('emotion-bar-5');
var elementText5 = document.getElementById('emotion-text-5');
var elementPulldowns = [elementPulldown1, elementPulldown2, elementPulldown3, elementPulldown4, elementPulldown5];
//定数定義・エモーション追加・削除ボタン
var addButton = document.getElementById('emotion-add');
var deleteButton = document.getElementById('emotion-delete');
//定数定義：ページ移動
var page2BeforeButton = document.getElementById('page2-before');
var page2NextButton = document.getElementById('page2-next');
//変数・定数定義：追加・削除ボタンリスト・限界
var currentContainer = 1;
var maxContainers = 5;
var LodeValue = localStorage.getItem("page2");
//定数定義：回答入力判定
var inputs = document.querySelectorAll('select, input[type="range"]');
//変数・定数定義：スライダー
var rangeSliders = document.querySelectorAll('input[type="range"]');
var baseColor = '#555';
var activeColor = '#2196F3';
//バーとテキストの同期
elementBar1.addEventListener('input', function () { elementText1.value = elementBar1.value; });
elementBar2.addEventListener('input', function () { elementText2.value = elementBar2.value; });
elementBar3.addEventListener('input', function () { elementText3.value = elementBar3.value; });
elementBar4.addEventListener('input', function () { elementText4.value = elementBar4.value; });
elementBar5.addEventListener('input', function () { elementText5.value = elementBar5.value; });
var saveData = {};
document.addEventListener('DOMContentLoaded', function () {
    if (LodeValue !== null) {
        try {
            saveData = JSON.parse(LodeValue);
        }
        catch (e) {
            console.error("Failed to parse LodeValue:", e);
        }
    }
    if (saveData !== null) {
        for (var load in saveData) {
            if (saveData.hasOwnProperty(load)) { // プロトタイプチェーンに存在するプロパティを除外
                var element = document.getElementById(load);
                if (element) {
                    if (element.tagName === 'SELECT') {
                        var selectElement = element;
                        var savedValue = saveData[load];
                        // 設定されているvalueの中からsaveDataの値に一致するものがあれば選択
                        for (var i = 0; i < selectElement.options.length; i++) {
                            if (selectElement.options[i].value === savedValue) {
                                selectElement.selectedIndex = i;
                                var emotionContainer = document.getElementById("emotion-container-".concat(i));
                                if (emotionContainer) {
                                    emotionContainer.classList.remove('emotion-hidden');
                                    currentContainer = i;
                                }
                                else {
                                    console.error("Element with ID 'emotion-container-".concat(i, "' not found."));
                                }
                                break;
                            }
                        }
                    }
                    else if (element.tagName === 'INPUT') {
                        var inputElement = element;
                        inputElement.value = saveData[load];
                    }
                }
            }
        }
    }
    //スライダーバー処理
    rangeSliders.forEach(function (slider) {
        slider.addEventListener('input', function (e) { updateSlider(e.target); });
        updateSlider(slider);
    });
    function updateSlider(slider) {
        if (!slider.max) {
            slider.max = 100;
        }
        var progress = (slider.value / slider.max) * 100;
        slider.style.background = "linear-gradient(to right, ".concat(activeColor, " ").concat(progress, "%, ").concat(baseColor, " ").concat(progress, "%)");
    }
    //ボタン追加
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
    inputs.forEach(function (input) { input.addEventListener('input', checkAllInputs); });
    page2NextButton.addEventListener('click', function (event) {
        for (var n = 1; n <= currentContainer; n++) {
            var selectData = document.getElementById("emotion-select-".concat(n));
            var textData = document.getElementById("emotion-text-".concat(n));
            if (selectData && textData) {
                saveData["emotion-select-".concat(n)] = selectData.value;
                saveData["emotion-text-".concat(n)] = textData.value;
            }
        }
        if (page2NextButton.classList.contains('btn--maincolor')) {
            alert(JSON.stringify(saveData));
            localStorage.setItem("page2", JSON.stringify(saveData));
            window.location.href = 'page3.html';
        }
        else {
            event.preventDefault();
            alert('感情項目を入力してください');
        }
    });
    page2BeforeButton.addEventListener('click', function () {
        for (var b = 1; b <= currentContainer; b++) {
            var selectData = document.getElementById("emotion-select-".concat(b));
            var textData = document.getElementById("emotion-text-".concat(b));
            if (selectData && textData) {
                saveData["emotion-select-".concat(b)] = selectData.value;
                saveData["emotion-text-".concat(b)] = textData.value;
            }
        }
        alert(JSON.stringify(saveData));
        localStorage.setItem("page2", JSON.stringify(saveData));
        window.location.href = 'page1.html';
    });
});
