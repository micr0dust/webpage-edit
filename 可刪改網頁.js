// ==UserScript==
// @name         可刪改網頁
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  可以刪除、新增網頁中的文字
// @author       Microdust
// @match        *://*/*
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    document.designMode = trigger(document.designMode);

    function trigger(status) {
        if (status === 'off') return 'on';
        return 'off';
    }

})();