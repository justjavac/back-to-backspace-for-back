(function(){
    "use strict";

    const KEY_NAME = "Backspace";
    const KEY_CODE = 8;
    const FUCK_VERSION  = 25;
    const TAG_LIST  = ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'];

    var matches = /Chrome\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(navigator.userAgent);
    var version = matches[1];

    if (version < FUCK_VERSION) {
        return;
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === KEY_NAME || event.keyCode == KEY_CODE) {
            if (TAG_LIST.includes(document.activeElement.nodeName)) {
                return;
            }

            if (document.activeElement.isContentEditable) {
                return;
            }

            event.preventDefault();
            event.stopImmediatePropagation();
            history.go(event.shiftKey ? 1 : -1);
        }
    }, true);
})();
