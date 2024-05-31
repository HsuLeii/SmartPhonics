//取得聲音range
var soundRange = document.getElementById("soundRange");


//取得聲音距離
var soundRangeWidth = (value) => {
    document.documentElement.style.setProperty("--soundRange", 100 - value + "%");
    if (value < 1) {
        $(".icon_volume").attr('data-icon', 'volume-xmark');
    } else if (value < 45) {
        $(".icon_volume").attr('data-icon', 'volume-low');
    } else {
        $(".icon_volume").attr('data-icon', 'volume-high');
    }
}

//更改聲音距離顏色
function updateSoundRangeProperty() {
    soundRangeWidth(soundRange.value);
}

soundRange.addEventListener("input", updateSoundRangeProperty);