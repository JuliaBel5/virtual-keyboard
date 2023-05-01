let arrKeyEn = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Ctrl", "Win", "Alt", "Alt", "◄", "▼", "►", "Ctrl"];
let arrKeyRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Ctrl", "Win", "Alt", "Alt", "◄", "▼", "►", "Ctrl"];

let arrCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]

let lang = "En";
let arrKey;

if (lang === "En") {
    console.log("En")
    arrKey = arrKeyEn;
} else {
    console.log("Ru")
    arrKey = arrKeyRu;
}
function init() {
  let keyboard = document.createElement('div');
  let textArea = document.createElement('textarea');
  let kboard = '';
  for (let i = 0; i < arrKey.length; i++) {
      if (i === 13) {
          kboard = kboard + '<div class="keyboard__key keyboard__key_service" data="' + "Backspace" + '" >' + "Backspace" + '</div>' + '<div class = "clearfix"></div>';
      } else if (i === 28) {
          kboard = kboard + '<div class = "clearfix"></div>' + '<div class="keyboard__key keyboard__key_service keyboard__key_capslock" data="' + "CapsLock" + '" >' + "Caps Lock" + '</div>';
      } else if (i === 39) {
          kboard = kboard + '<div class="keyboard__key keyboard__key_service" data="' + "Enter" + '" >' + "Enter" + '</div>' + '<div class = "clearfix"></div>' + '<div class="keyboard__key keyboard__key_service" data="' + "ShiftLeft" + '" >' + "Shift" + '</div>';
      } else if (i === 50) {
          kboard = kboard + '<div class="keyboard__key keyboard__key_service" data="' + "ShiftRight" + '" >' + "Shift" + '</div>' + '<div class = "clearfix"></div>'
      } else if (i === 53) {
          kboard = kboard + '<div class="keyboard__key keyboard__key_space" data="' + "Space" + '" >' + " " + '</div>';
      }

      kboard += '<div class="keyboard__key" data="' + arrCode[i] + '" >' + arrKey[i] + '</div>';
  }

  keyboard.innerHTML = kboard;
  keyboard.classList.add("keyboard")
  textArea.classList.add('textarea')
  document.querySelector("body").appendChild(keyboard);
  document.querySelector("body").appendChild(textArea);

  // document.querySelector(".keyboard").innerHTML = kboard;

}
init();


document.querySelector('.keyboard__key[data="Tab"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="MetaLeft"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="Delete"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ControlLeft"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ControlRight"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="AltLeft"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="AltRight"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ArrowLeft"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ArrowLeft"]').classList.add('keyboard__key_arrow');
document.querySelector('.keyboard__key[data="ArrowUp"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ArrowUp"]').classList.add('keyboard__key_arrow');
document.querySelector('.keyboard__key[data="ArrowRight"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ArrowRight"]').classList.add('keyboard__key_arrow');
document.querySelector('.keyboard__key[data="ArrowDown"]').classList.add('keyboard__key_service-small');
document.querySelector('.keyboard__key[data="ArrowDown"]').classList.add('keyboard__key_arrow');


const keyBackspace = document.querySelector('.keyboard .keyboard__key[data="Backspace"]');
const keyDelete = document.querySelector('.keyboard .keyboard__key[data="Delete"]');
const keyTab = document.querySelector('.keyboard .keyboard__key[data="Tab"]');
const keyEnter = document.querySelector('.keyboard .keyboard__key[data="Enter"]');
const keyShiftLeft = document.querySelector('.keyboard .keyboard__key[data="ShiftLeft"]');
const keyShiftRight = document.querySelector('.keyboard .keyboard__key[data="ShiftRight"]');
const keyCapsLock = document.querySelector('.keyboard .keyboard__key[data="CapsLock"]');
const keyCtrlLeft = document.querySelector('.keyboard .keyboard__key[data="ControlLeft"]');
const keyCtrlRight = document.querySelector('.keyboard .keyboard__key[data="ControlRight"]');
const keyAltLeft = document.querySelector('.keyboard .keyboard__key[data="AltLeft"]');
const keyAltRight = document.querySelector('.keyboard .keyboard__key[data="AltRight"]');



let key = document.querySelectorAll('.keyboard__key');
const textarea = document.querySelector('.textarea');
let ind;

textarea.addEventListener('click', () => {
    ind = textarea.selectionStart;
    console.log(ind)
    return ind;
})

document.onkeydown = function (event) {
  ind = textarea.selectionStart;
  event.preventDefault();
  // textarea.focus();
  //textarea.selectionStart = textarea.selectionEnd = ind;
  if (ind) {
      textarea.setSelectionRange(ind, ind)
  } else {
      ind === 0;
  }
  console.log(ind);


  document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.add('active');

  if (event.getModifierState("CapsLock")) {
      console.log('Ctrl');
      if (!((document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_service-small')) || (document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_service')))) {

          textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').textContent.toUpperCase() + textarea.textContent.slice(ind);
          ind = ind + 1;
          textarea.setSelectionRange(ind, ind)

      } else if (document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_arrow')) {

          textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').textContent.toUpperCase() + textarea.textContent.slice(ind);
          ind = ind + 1;
          textarea.setSelectionRange(ind, ind)

      }
  } else {

      if (!((document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_service-small')) || (document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_service')))) {

          textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').textContent + textarea.textContent.slice(ind);
          ind = ind + 1;
          textarea.setSelectionRange(ind, ind)

      } else if (document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').classList.contains('keyboard__key_arrow')) {

          textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector('.keyboard .keyboard__key[data="' + event.code + '"]').textContent + textarea.textContent.slice(ind);
          ind = ind + 1;
          textarea.setSelectionRange(ind, ind)

      }
  }
  if (event.code === "Backspace") {
      if (ind > 0) {
          textarea.textContent = textarea.textContent.slice(0, ind - 1) + textarea.textContent.slice(ind);
          ind = ind - 1;
          //textarea.selectionStart = textarea.selectionEnd =ind;
          textarea.focus();
          textarea.setSelectionRange(ind, ind)
      }
  }
  
}

document.onkeyup = function () {
  key.forEach(function (element) {
      element.classList.remove('active');
  });
}

document.onmouseup = function () {
  key.forEach(function (element) {
      element.classList.remove('active');
  });
}


key.forEach(function (element) {
  element.onmousedown = function () {
      key.forEach(function (element) {
          element.classList.remove('active');
      });
      let text = this.getAttribute('data');
      this.classList.add('active');
      console.log(text);
  }

})




for (let k of key) {
  k.onclick = function (event) {
      event.preventDefault();
      ind = textarea.selectionStart;
      if (ind) {
          textarea.setSelectionRange(ind, ind)
      } else {
          ind === 0;
      }


      if (keyCapsLock.classList.contains('keyboard__key_capslock-light')) {
          console.log("Caps")
          if (! (k.classList.contains('keyboard__key_service-small') || k.classList.contains('keyboard__key_service'))) {
              textarea.textContent = textarea.textContent.slice(0, ind) + k.textContent.toUpperCase() + textarea.textContent.slice(ind);
              ind = ind +1;
              textarea.setSelectionRange(ind, ind)
          } else  if (k.classList.contains('keyboard__key_arrow')){
              textarea.textContent = textarea.textContent.slice(0, ind) + k.textContent.toUpperCase() + textarea.textContent.slice(ind);
              ind = ind + 1;
              textarea.setSelectionRange(ind, ind)
          }
      } else if (! (k.classList.contains('keyboard__key_service-small') || k.classList.contains('keyboard__key_service'))) {
          textarea.textContent = textarea.textContent.slice(0, ind) + k.textContent + textarea.textContent.slice(ind);
          ind = ind +1;
          textarea.setSelectionRange(ind, ind)
      } else  if (k.classList.contains('keyboard__key_arrow')){
          textarea.textContent = textarea.textContent.slice(0, ind) + k.textContent + textarea.textContent.slice(ind);
          ind = ind + 1;
          textarea.setSelectionRange(ind, ind)
      }
  }
}