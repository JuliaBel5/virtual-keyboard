const arrKeyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Ctrl', 'Win', 'Alt', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrKeyRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Ctrl', 'Win', 'Alt', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrKeyShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrKeyAfterShiftEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const arrKeyShiftRu = ['Ё', '!', '\'', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrKeyAfterShiftRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const arrCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

let lang;
let arrKey;

function setLocalSetStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalSetStorage);

function getLocalStorage() {
  lang = localStorage.getItem('lang');
  if (!localStorage.getItem('lang')) {
    lang = 'En';
  }
}
getLocalStorage();

if (lang === 'En' || !lang) {
  lang = 'En';
  arrKey = arrKeyEn;
} else {
  lang = 'Ru';
  arrKey = arrKeyRu;
}

function init() {
  const keyboard = document.createElement('div');
  const textArea = document.createElement('textarea');
  const title = document.createElement('div');
  const info = document.createElement('div');
  const info2 = document.createElement('div');

  let kboard = '';
  for (let i = 0; i < arrKey.length; i += 1) {
    if (i === 13) {
      kboard = `${kboard}<div class="keyboard__key keyboard__key_service" data="Backspace" >Backspace</div><div class = "clearfix"></div>`;
    } else if (i === 28) {
      kboard = `${kboard}<div class = "clearfix"></div><div class="keyboard__key keyboard__key_service keyboard__key_capslock" data="CapsLock" >Caps Lock</div>`;
    } else if (i === 39) {
      kboard = `${kboard}<div class="keyboard__key keyboard__key_service" data="Enter" >Enter</div><div class = "clearfix"></div><div class="keyboard__key keyboard__key_service" data="ShiftLeft" >Shift</div>`;
    } else if (i === 50) {
      kboard = `${kboard}<div class="keyboard__key keyboard__key_service" data="ShiftRight" >Shift</div><div class = "clearfix"></div>`;
    } else if (i === 53) {
      kboard = `${kboard}<div class="keyboard__key keyboard__key_space" data="Space" ></div>`;
    }

    kboard += `<div class="keyboard__key" data="${arrCode[i]}" >${arrKey[i]}</div>`;
  }

  keyboard.innerHTML = kboard;
  keyboard.classList.add('keyboard');
  textArea.classList.add('textarea');
  title.classList.add('title');
  title.textContent = 'RSS Виртуальная клавиатура';
  info.classList.add('info');
  info.textContent = 'Клавиатура создана в операционной системе Windows';
  info2.classList.add('info2');
  info2.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  document.querySelector('body').appendChild(title);
  document.querySelector('body').appendChild(textArea);
  document.querySelector('body').appendChild(keyboard);
  document.querySelector('body').appendChild(info);
  document.querySelector('body').appendChild(info2);

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
const key = document.querySelectorAll('.keyboard__key');
const textarea = document.querySelector('.textarea');
let ind;

document.addEventListener('keydown', (event) => {
  if (event.getModifierState('Alt') && event.code === 'ControlLeft') {
    if (lang === 'En') {
      lang = 'Ru';
      event.preventDefault();
      arrKey = arrKeyAfterShiftRu;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    } else if (lang === 'Ru') {
      lang = 'En';
      event.preventDefault();
      arrKey = arrKeyAfterShiftEn;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    }
  }
  setLocalSetStorage();
  return lang;
});

document.addEventListener('keydown', (event) => {
  if (event.getModifierState('Control') && event.code === 'AltLeft') {
    if (lang === 'En') {
      lang = 'Ru';
      event.preventDefault();
      arrKey = arrKeyAfterShiftRu;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    } else if (lang === 'Ru') {
      lang = 'En';
      event.preventDefault();
      arrKey = arrKeyAfterShiftEn;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    }
  }
  setLocalSetStorage();
  return lang;
});

textarea.addEventListener('click', () => {
  ind = textarea.selectionStart;
  return ind;
});
/* eslint-disable */
document.onkeydown = function (event) {
  ind = textarea.selectionStart;
  event.preventDefault();
  // textarea.focus();
  // textarea.selectionStart = textarea.selectionEnd = ind;
  if (ind) {
    textarea.setSelectionRange(ind, ind);
  } else {
    ind = 0;
  }

  document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.add('active');

  if (event.getModifierState('CapsLock')) {
    if (!((document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_service-small')) || (document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_service')))) {
      textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).textContent.toUpperCase() + textarea.textContent.slice(ind);
      ind += 1;
      textarea.setSelectionRange(ind, ind);
    } else if (document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_arrow')) {
      textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).textContent.toUpperCase() + textarea.textContent.slice(ind);
      ind += 1;
      textarea.setSelectionRange(ind, ind);
    }
  } else if (!((document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_service-small')) || (document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_service')))) {
    textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).textContent + textarea.textContent.slice(ind);
    ind += 1;
    textarea.setSelectionRange(ind, ind);
  } else if (document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).classList.contains('keyboard__key_arrow')) {
    textarea.textContent = textarea.textContent.slice(0, ind) + document.querySelector(`.keyboard .keyboard__key[data="${event.code}"]`).textContent + textarea.textContent.slice(ind);
    ind += 1;
    textarea.setSelectionRange(ind, ind);
  }
  if (event.code === 'Backspace') {
    if (ind > 0) {
      textarea.textContent = textarea.textContent.slice(0, ind - 1)
      + textarea.textContent.slice(ind);
      ind -= 1;
      // textarea.selectionStart = textarea.selectionEnd =ind;
      textarea.focus();
      textarea.setSelectionRange(ind, ind);
    }
  }
  
  if (event.code === 'Delete') {
    delNext();
  }
  if (event.code === 'Tab') {
    addInd();
  }

  if (event.code === 'Enter') {
    addEnter();
  }

  if (event.code === 'CapsLock') {
    keyCapsLock.classList.toggle('keyboard__key_capslock-light');
  }

  if (event.code === 'ShiftLeft') {
    if (!event.repeat) {
      keyShiftLeft.classList.toggle('activated');
      addShift();
    }
  }

  if (event.code === 'ShiftRight') {
    if (!event.repeat) {
      keyShiftLeft.classList.toggle('activated');
      addShift();
    }
  }
};
function addShift() {
  if ((keyShiftLeft.classList.contains('activated') && lang === 'En') || (keyShiftRight.classList.contains('activated') && lang === 'En')) {
    arrKey = arrKeyShiftEn;
    for (let i = 0; i < arrKey.length; i += 1) {
      key[i].textContent = arrKey[i];
    }
  } else if ((keyShiftLeft.classList.contains('activated') && lang === 'Ru') || (keyShiftRight.classList.contains('activated') && lang === 'Ru')) {
    arrKey = arrKeyShiftRu;
    for (let i = 0; i < arrKey.length; i += 1) {
      key[i].textContent = arrKey[i];
    }
  } else if (!keyShiftLeft.classList.contains('activated')) {
    if (lang === 'En') {
      arrKey = arrKeyAfterShiftEn;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    } else if (lang === 'Ru') {
      arrKey = arrKeyAfterShiftRu;
      for (let i = 0; i < arrKey.length; i += 1) {
        key[i].textContent = arrKey[i];
      }
    }
  }
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    keyShiftLeft.classList.toggle('activated');
    addShift();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight') {
    keyShiftLeft.classList.toggle('activated');
    addShift();
  }
});

document.onkeyup = function () {
  key.forEach((element) => {
    element.classList.remove('active');
  });
};

document.onmouseup = function () {
  key.forEach((element) => {
    element.classList.remove('active');
  });
};

key.forEach((element) => {
  element.onmousedown = function () {
    key.forEach((element) => {
      element.classList.remove('active');
    });
    this.classList.add('active');
  };
});

for (const k of key) {
  k.onmousedown = function (event) {
    event.preventDefault();
    ind = textarea.selectionStart;
    if (ind) {
      textarea.setSelectionRange(ind, ind);
    } else {
      ind = 0;
    }

    if (keyCapsLock.classList.contains('keyboard__key_capslock-light')) {
      console.log('Caps');
      if (!(k.classList.contains('keyboard__key_service-small') || k.classList.contains('keyboard__key_service'))) {
        textarea.textContent = textarea.textContent.slice(0, ind)
        + k.textContent.toUpperCase() + textarea.textContent.slice(ind);
        ind += 1;
        textarea.setSelectionRange(ind, ind);
      } else if (k.classList.contains('keyboard__key_arrow')) {
        textarea.textContent = textarea.textContent.slice(0, ind)
        + k.textContent.toUpperCase() + textarea.textContent.slice(ind);
        ind += 1;
        textarea.setSelectionRange(ind, ind);
      }
    } else if (!(k.classList.contains('keyboard__key_service-small') || k.classList.contains('keyboard__key_service'))) {
      textarea.textContent = textarea.textContent.slice(0, ind)
      + k.textContent + textarea.textContent.slice(ind);
      ind += 1;
      textarea.setSelectionRange(ind, ind);
    } else if (k.classList.contains('keyboard__key_arrow')) {
      textarea.textContent = textarea.textContent.slice(0, ind) + k.textContent + textarea.textContent.slice(ind);
      ind += 1;
      textarea.setSelectionRange(ind, ind);
    }
  };
}

keyDelete.onmousedown = function (event) {
  event.preventDefault();
  delNext();
};

keyBackspace.onmousedown = function (event) {
  event.preventDefault();
  delPrev();
};

keyTab.onmousedown = function (event) {
  event.preventDefault();
  addInd();
};

keyEnter.onmousedown = function (event) {
  event.preventDefault();
  addEnter();
};

keyShiftLeft.onclick = function (event) {
  event.preventDefault();
  keyShiftLeft.classList.toggle('activated');
  addShift();
};

keyShiftRight.onclick = function (event) {
  event.preventDefault();
  keyShiftRight.classList.toggle('activated');
  addShift();
};

keyCapsLock.onmousedown = function () {
  keyCapsLock.classList.toggle('keyboard__key_capslock-light');
};

function delPrev() {
  textarea.setSelectionRange(ind, ind);
  if (ind > 0) {
    textarea.textContent = textarea.textContent.slice(0, ind - 1) + textarea.textContent.slice(ind);
    ind -= 1;
    // textarea.selectionStart = textarea.selectionEnd =ind;
    textarea.setSelectionRange(ind, ind);
  }
}

function delNext() {
  textarea.setSelectionRange(ind, ind);
  if (ind < textarea.textContent.length) {
    textarea.textContent = textarea.textContent.slice(0, ind) + textarea.textContent.slice(ind + 1);
    textarea.focus();
    // textarea.selectionStart = textarea.selectionEnd =ind;
    textarea.setSelectionRange(ind, ind);
  }
}
function addInd() {
  textarea.setSelectionRange(ind, ind);
  if (ind < textarea.textContent.length) {
    textarea.textContent = `${textarea.textContent.slice(0, ind)}\u0009${textarea.textContent.slice(ind)}`;
  } else {
    textarea.textContent += '\u0009';
  }
  ind += 1;
  textarea.setSelectionRange(ind, ind);
}

function addEnter() {
  textarea.setSelectionRange(ind, ind);
  textarea.textContent = `${textarea.textContent.slice(0, ind)}\n${textarea.textContent.slice(ind)}`;
  ind += 1;
  textarea.setSelectionRange(ind, ind);
}
