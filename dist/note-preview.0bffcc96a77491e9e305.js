(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(e,t,n){"use strict";n.r(t),n.d(t,"NotePreview",(function(){return w}));var r=n(0),a=n.n(r),o=n(110),c=n(182),i=n(364),s=n.n(i),u=n(365),l=n.n(u),d=n(4),f={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},h=function(e){return n.e(10).then(n.t.bind(null,890,7)).then((function(t){var n=t.default;n.extension("enableCheckboxes",f);var r=new n.Converter({extensions:["enableCheckboxes"]});r.setFlavor("github"),r.setOption("simpleLineBreaks",!1),r.setOption("ghMentions",!1),r.setOption("smoothLivePreview",!0);var a=e.replace(/([ \t\u2000-\u200a]*)\u2022(\s)/gm,"$1-$2");return function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),r=[],a=[],o=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return a.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return r.push(e),"continue";var t=e.nodeName.toLowerCase();Object(d.filter)(e.attributes,(function(e){var n=e.name,r=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}default:return!1}}(t,n,r)&&(("href"!==n&&"src"!==n||!l.a.isWebUri(r))&&("href"!==n||!r.startsWith("mailto:")||!s.a.validate(r.slice(7))))})).forEach((function(t){var n=t.name;return e.removeAttribute(n)}));var o="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof o||o.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)o();return a.forEach((function(e){try{var t;null==e||null===(t=e.parentNode)||void 0===t||t.removeChild(e)}catch(e){}})),r.forEach((function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)null==n||n.insertBefore(t,e);null==n||n.removeChild(e)}catch(e){}})),t.body.innerHTML}(r.makeHtml(a))}))},v=function(e,t,r){return h(t).then((function(t){return e.innerHTML=t,e})).then((function(e){if(!r)return e.querySelectorAll("pre code");var t=Object(c.a)(r).map((function(e){return e.toLocaleLowerCase()}));if(!t.length)return e.querySelectorAll("pre code");for(var n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){return t.some((function(t){var n;return null===(n=e.textContent)||void 0===n?void 0:n.toLocaleLowerCase().includes(t)}))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},!1),a=[],o=n.currentNode;o;)a.push(o),o=n.nextNode();return a.forEach((function(e){return function e(t,n){var r=t.parentNode;n.forEach((function(t){r.childNodes.forEach((function(r){var a,o,c;if(r.nodeType===Node.TEXT_NODE&&(null===(a=r.textContent)||void 0===a?void 0:a.toLocaleLowerCase().includes(t))){var i=null===(o=r.textContent)||void 0===o?void 0:o.toLocaleLowerCase().indexOf(t),s=r.splitText(i),u=s.splitText(t.length),l=document.createElement("span");l.setAttribute("class","search-match"),null===(c=s.parentNode)||void 0===c||c.replaceChild(l,s),l.appendChild(s),e(u,n)}}))}))}(e,t)})),e.querySelectorAll("pre code")})).then((function(e){if(e.length)return n.e(6).then(n.t.bind(null,889,7)).then((function(t){var n=t.default;e.forEach(n.highlightBlock)})).catch()}))},p=n(26),m=n(202),b=n(123);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w=function(e){var t,n=e.editNote,o=e.fontSize,c=e.isFocused,i=e.note,s=e.noteId,u=e.searchQuery,l=Object(r.useRef)();return Object(r.useEffect)((function(){var e=function(e){if(!c)return!0;if(!document.getSelection().isCollapsed)return!0;var t=document.createElement("div");v(t,i.content,u).then((function(){try{e.clipboardData.setData("text/plain",t.innerHTML)}catch(e){navigator.clipboard.writeText(t.innerHTML)}})),e.preventDefault()};return document.addEventListener("copy",e,!1),function(){return document.removeEventListener("copy",e,!1)}}),[c,u]),Object(r.useEffect)((function(){var e,t=function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===i.tagName)return e.preventDefault(),e.stopPropagation(),void(t.href.startsWith("http://localhost")||Object(p.a)(t.href));if("task-list-item"===t.className){var r=function(){e.preventDefault(),e.stopPropagation();var r=l.current.querySelectorAll("[data-markdown-root] .task-list-item"),a=Array.prototype.indexOf.call(r,t),o=0,c=i.content.replace(/[\ue000|\ue001]/g,(function(e){return o++===a?""===e?"":"":e}));return n(s,{content:c}),{v:void 0}}();if("object"===y(r))return r.v}}};return null===(e=l.current)||void 0===e||e.addEventListener("click",t,!0),function(){var e;return null===(e=l.current)||void 0===e?void 0:e.removeEventListener("click",t,!0)}}),[]),Object(r.useEffect)((function(){var e;l.current&&((null==i?void 0:i.content)&&(null==i?void 0:i.systemTags.includes("markdown"))?v(l.current,i.content,u):l.current.innerText=Object(m.a)(null!==(e=null==i?void 0:i.content)&&void 0!==e?e:""))}),[null==i?void 0:i.content,null==i?void 0:i.systemTags,u]),a.a.createElement("div",{className:"note-detail-wrapper"},a.a.createElement("div",{className:"note-detail"},a.a.createElement("div",{ref:l,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,style:{fontSize:"".concat(o,"px")}},a.a.createElement("div",{style:{whiteSpace:"pre"}},Object(m.a)(null!==(t=null==i?void 0:i.content)&&void 0!==t?t:"")))))},g={editNote:b.a.data.editNote};t.default=Object(o.b)((function(e,t){var n,r;return{fontSize:e.settings.fontSize,isFocused:0===e.ui.dialogs.length&&!e.ui.showNoteInfo,note:null!==(n=t.note)&&void 0!==n?n:e.data.notes.get(t.noteId),noteId:null!==(r=t.noteId)&&void 0!==r?r:e.ui.openedNote,searchQuery:e.ui.searchQuery}}),g)(w)}}]);