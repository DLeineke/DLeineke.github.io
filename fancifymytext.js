function increase() {
    var text = document.getElementById('text');
    var size = parseInt(text.style.fontSize, 10) || 16;
    console.log(size);
    var newSize = size + 2;
    text.style.fontSize  = newSize + 'px';
}

function fancify() {
    var text = document.getElementById('text');
    text.style.fontWeight = 'bold';
    text.style.color = 'blue';
    text.style.textDecoration = 'underline';
}

function boringfy() {
    var text = document.getElementById('text');
    text.style.fontWeight = 'normal';
    text.style.color = 'black';
    text.style.textDecoration = 'none';
}

function mooify() {
    var textBox = document.getElementById('text')
    var text = textBox.value;
    text = text.toUpperCase();
    textBox.value = text;
    text = textBox.value;

    text = text.split(".").join("-Moo ");
    textBox.value = text;
}