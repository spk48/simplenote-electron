(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{367:function(e,t,n){"use strict";n.r(t),n.d(t,"NotePreview",(function(){return b}));var o=n(0),r=n.n(o),i=n(110),a=n(182),c=n(364),u=n.n(c),s=n(365),l=n.n(s),f=n(4),d={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},p=function(e){return n.e(10).then(n.t.bind(null,890,7)).then((function(t){var n=t.default;n.extension("enableCheckboxes",d);var o=new n.Converter({extensions:["enableCheckboxes"]});o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),o.setOption("ghMentions",!1),o.setOption("smoothLivePreview",!0);var r=e.replace(/([ \t\u2000-\u200a]*)\u2022(\s)/gm,"$1-$2");return function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],i=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(f.filter)(e.attributes,(function(e){var n=e.name,o=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}default:return!1}}(t,n,o)&&(("href"!==n&&"src"!==n||!l.a.isWebUri(o))&&("href"!==n||!o.startsWith("mailto:")||!u.a.validate(o.slice(7))))})).forEach((function(t){var n=t.name;return e.removeAttribute(n)}));var i="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof i||i.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)i();return r.forEach((function(e){try{var t;null==e||null===(t=e.parentNode)||void 0===t||t.removeChild(e)}catch(e){}})),o.forEach((function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)null==n||n.insertBefore(t,e);null==n||n.removeChild(e)}catch(e){}})),t.body.innerHTML}(o.makeHtml(r))}))},h=function(e,t,o){return p(t).then((function(t){return e.innerHTML=t,e})).then((function(e){if(!o)return e.querySelectorAll("pre code");var t=Object(a.a)(o).map((function(e){return e.toLocaleLowerCase()}));if(!t.length)return e.querySelectorAll("pre code");for(var n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){return t.some((function(t){var n;return null===(n=e.textContent)||void 0===n?void 0:n.toLocaleLowerCase().includes(t)}))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},!1),r=[],i=n.currentNode;i;)r.push(i),i=n.nextNode();return r.forEach((function(e){return function e(t,n){var o=t.parentNode;n.forEach((function(t){o.childNodes.forEach((function(o){var r,i,a;if(o.nodeType===Node.TEXT_NODE&&(null===(r=o.textContent)||void 0===r?void 0:r.toLocaleLowerCase().includes(t))){var c=null===(i=o.textContent)||void 0===i?void 0:i.toLocaleLowerCase().indexOf(t),u=o.splitText(c),s=u.splitText(t.length),l=document.createElement("span");l.setAttribute("class","search-match"),null===(a=u.parentNode)||void 0===a||a.replaceChild(l,u),l.appendChild(u),e(s,n)}}))}))}(e,t)})),e.querySelectorAll("pre code")})).then((function(e){if(e.length)return n.e(6).then(n.t.bind(null,889,7)).then((function(t){var n=t.default;e.forEach(n.highlightBlock)})).catch()}))},v=n(26),y=n(202),m=n(123);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e){var t,n=e.editNote,i=e.fontSize,a=e.isFocused,c=e.note,u=e.noteId,s=e.searchQuery,l=Object(o.useRef)();return Object(o.useEffect)((function(){var e=function(e){if(!a)return!0;if(!document.getSelection().isCollapsed)return!0;var t=document.createElement("div");h(t,c.content,s).then((function(){try{e.clipboardData.setData("text/plain",t.innerHTML)}catch(e){navigator.clipboard.writeText(t.innerHTML)}})),e.preventDefault()};return document.addEventListener("copy",e,!1),function(){return document.removeEventListener("copy",e,!1)}}),[a,s]),Object(o.useEffect)((function(){var e,t=function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===c.tagName)return e.preventDefault(),e.stopPropagation(),void(t.href.startsWith("http://localhost")||Object(v.a)(t.href));if("task-list-item"===t.className){var o=function(){e.preventDefault(),e.stopPropagation();var o=l.current.querySelectorAll("[data-markdown-root] .task-list-item"),r=Array.prototype.indexOf.call(o,t),i=0,a=c.content.replace(/[\ue000|\ue001]/g,(function(e){return i++===r?""===e?"":"":e}));return n(u,{content:a}),{v:void 0}}();if("object"===g(o))return o.v}}};return null===(e=l.current)||void 0===e||e.addEventListener("click",t,!0),function(){var e;return null===(e=l.current)||void 0===e?void 0:e.removeEventListener("click",t,!0)}}),[]),Object(o.useEffect)((function(){var e;l.current&&((null==c?void 0:c.content)&&(null==c?void 0:c.systemTags.includes("markdown"))?h(l.current,c.content,s):l.current.innerText=Object(y.a)(null!==(e=null==c?void 0:c.content)&&void 0!==e?e:""))}),[null==c?void 0:c.content,null==c?void 0:c.systemTags,s]),r.a.createElement("div",{className:"note-detail-wrapper"},r.a.createElement("div",{className:"note-detail"},r.a.createElement("div",{ref:l,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,style:{fontSize:"".concat(i,"px")}},r.a.createElement("div",{style:{whiteSpace:"pre"}},Object(y.a)(null!==(t=null==c?void 0:c.content)&&void 0!==t?t:"")))))},w={editNote:m.a.data.editNote};t.default=Object(i.b)((function(e,t){var n,o;return{fontSize:e.settings.fontSize,isFocused:0===e.ui.dialogs.length&&!e.ui.showNoteInfo,note:null!==(n=t.note)&&void 0!==n?n:e.data.notes.get(t.noteId),noteId:null!==(o=t.noteId)&&void 0!==o?o:e.ui.openedNote,searchQuery:e.ui.searchQuery}}),w)(b)},894:function(e,t,n){"use strict";n.r(t),n.d(t,"NoteEditor",(function(){return je}));var o=n(0),r=n.n(o),i=n(110),a=n(873),c=n(4),u=n(225),s=n(126),l=Object(i.b)(null,(function(e){return{openShareDialog:function(){return e(Object(s.showDialog)("SHARE"))}}}))((function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))})),f=n(8),d=n.n(f),p=function(e){var t=e.onSelect,n=e.selected,o=e.tagName;return r.a.createElement("div",{className:d()("tag-chip",{selected:n}),"data-tag-name":o,onClick:t},o)};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=T(e);if(t){var r=T(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,o,i=w(a);function a(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return m(this,a),O(E(e=i.call.apply(i,[this].concat(n))),"inputField",void 0),O(E(e),"inputObserver",void 0),O(E(e),"state",{isComposing:!1}),O(E(e),"completeSuggestion",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.identity,n=e.props,o=n.onChange,r=n.note,i=n.tags,a=n.value;if(a.length){var u,s=null,l=v(i.values());try{for(l.s();!(u=l.n()).done;){var f=u.value;if(!r.tags.includes(f.name)&&f.name.startsWith(a)){s=f.name;break}}}catch(e){l.e(e)}finally{l.f()}s&&o(s,(function(){t(s),e.focusInput()}))}})),O(E(e),"focusInput",(function(){if(e.inputField){var t=e.inputField;t.focus();var n=document.createRange();n.selectNodeContents(t),n.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(n)}})),O(E(e),"hasFocus",(function(){return document.activeElement===e.inputField})),O(E(e),"interceptKeys",(function(t){var n;return Object(c.invoke)((O(n={},13,e.submitTag),O(n,188,e.submitTag),O(n,9,e.interceptTabPress),O(n,39,e.interceptRightArrow),n),t.keyCode,t)})),O(E(e),"interceptRightArrow",(function(t){var n=e.props.value;window.getSelection().getRangeAt(0).endOffset===n.length&&(e.completeSuggestion(),t.preventDefault(),t.stopPropagation())})),O(E(e),"interceptTabPress",(function(t){e.completeSuggestion(e.submitTag),t.preventDefault(),t.stopPropagation()})),O(E(e),"onInputMutation",(function(t){t.forEach((function(t){var n=Object(c.get)(t,"target.data","");"childList"===t.type&&t.addedNodes.length&&(n=Object(c.get)(t,"target.innerText","")),e.onInput(n)}))})),O(E(e),"onInput",(function(t){e.state.isComposing||e.props.onChange(t.trim(),e.focusInput)})),O(E(e),"onCompositionEnd",(function(t){var n=t.target.textContent;e.setState({isComposing:!1},(function(){return e.onInput(n)}))})),O(E(e),"removePastedFormatting",(function(t){var n;Object(c.get)(t,"clipboardData.getData")?n=t.clipboardData.getData("text/plain"):Object(c.get)(window,"clipboardData.getData")&&(n=window.clipboardData.getData("Text")),e.onInput(n),t.preventDefault(),t.stopPropagation()})),O(E(e),"storeInput",(function(t){e.inputField=t,e.props.inputRef(t),Object(c.invoke)(E(e),"inputField.addEventListener","paste",e.removePastedFormatting,!1)})),O(E(e),"submitTag",(function(t){var n=e.props,o=n.onSelect,r=n.value;r.trim().length&&o(r.trim()),Object(c.invoke)(t,"preventDefault"),Object(c.invoke)(t,"stopPropagation")})),e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(c.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.note,o=t.tags,i=t.value,a=null;if(i.length>0){var c,u=v(o.values());try{for(u.s();!(c=u.n()).done;){var s=c.value;if(!n.tags.includes(s.name)&&s.name.startsWith(i)){a=s.name;break}}}catch(e){u.e(e)}finally{u.f()}}var l=""===i&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},l&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},i),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(i.length):""))}}])&&g(t.prototype,n),o&&g(t,o),a}(o.Component);O(k,"displayName","TagInput"),O(k,"defaultProps",{inputRef:c.identity,onChange:c.identity,onSelect:c.identity,storeFocusInput:c.noop,storeHasFocus:c.noop});var F=Object(i.b)((function(e){return{note:e.data.notes.get(e.ui.openedNote),tags:e.data.tags}}))(k),N=n(9),C=n(174);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(f,e);var t,n,i,s=_(f);function f(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(this,f),A(P(e=s.call.apply(s,[this].concat(n))),"container",Object(o.createRef)()),A(P(e),"focusInput",void 0),A(P(e),"hiddenTag",void 0),A(P(e),"inputHasFocus",void 0),A(P(e),"tagInput",Object(o.createRef)()),A(P(e),"state",{selectedTag:"",showEmailTooltip:!1,tagInput:""}),A(P(e),"addTag",(function(t){var n=e.props,o=n.note,r=n.noteId,i=t.trim().replace(/\s+/g,",").split(",");i.some(u.a)&&e.showEmailTooltip();var a=new Set(o.tags.map(C.a));i.forEach((function(t){a.has(Object(C.a)(t))||(a.add(Object(C.a)(t)),e.props.addTag(r,t))})),e.storeTagInput(""),Object(c.invoke)(P(e),"tagInput.focus"),N.a.tracks.recordEvent("editor_tag_added")})),A(P(e),"hasSelection",(function(){return e.state.selectedTag&&!!e.state.selectedTag.length})),A(P(e),"deleteTag",(function(t){var n=e.props.noteId,o=e.state.selectedTag;e.props.removeTag(n,t),o===t&&e.setState({selectedTag:""},(function(){var t,n;return null===(t=e.tagInput)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.focus()})),N.a.tracks.recordEvent("editor_tag_removed")})),A(P(e),"deleteSelection",(function(){e.hasSelection()&&e.deleteTag(e.state.selectedTag)})),A(P(e),"hideEmailTooltip",(function(){return e.setState({showEmailTooltip:!1})})),A(P(e),"hasFocus",(function(){return!!e.inputHasFocus&&e.inputHasFocus()})),A(P(e),"focusTagField",(function(){return e.focusInput&&e.focusInput()})),A(P(e),"interceptKeys",(function(t){if(8===t.which){if(e.hasSelection()&&e.deleteSelection(),""!==e.state.tagInput)return;return e.selectLastTag(),void t.preventDefault()}if(39===t.which&&e.hasSelection())return e.unselect(t),void e.focusTagField();9===t.which&&e.hasSelection()&&e.unselect(t)})),A(P(e),"preventStealingFocus",(function(t){var n=t.ctrlKey,o=t.code,r=t.metaKey,i=t.shiftKey;if(e.props.keyboardShortcuts)return(n||r)&&i&&"KeyY"===o&&e.setState({selectedTag:""}),!0})),A(P(e),"selectLastTag",(function(){var t;return e.setState({selectedTag:null===(t=e.props.note)||void 0===t?void 0:t.tags.slice(-1).shift()})})),A(P(e),"selectTag",(function(t){var n=t.currentTarget.dataset.tagName;t.preventDefault(),t.stopPropagation(),e.deleteTag(n)})),A(P(e),"showEmailTooltip",(function(){e.setState({showEmailTooltip:!0}),setTimeout((function(){return e.setState({showEmailTooltip:!1})}),5e3)})),A(P(e),"onKeyDown",(function(t){return e.state.showEmailTooltip&&e.hideEmailTooltip(),e.interceptKeys(t)})),A(P(e),"storeFocusInput",(function(t){return e.focusInput=t})),A(P(e),"storeHasFocus",(function(t){return e.inputHasFocus=t})),A(P(e),"storeHiddenTag",(function(t){return e.hiddenTag=t})),A(P(e),"storeInputRef",(function(t){return e.tagInput=t})),A(P(e),"storeTagInput",(function(t,n){return e.setState({tagInput:t},n)})),A(P(e),"unselect",(function(t){var n;e.state.selectedTag&&(null===(n=e.hiddenTag)||void 0===n?void 0:n.current)!==t.relatedTarget&&e.setState({selectedTag:""})})),e}return t=f,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0),window.addEventListener("keydown",this.preventStealingFocus,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0),window.removeEventListener("keydown",this.preventStealingFocus,!0)}},{key:"componentDidUpdate",value:function(){var e,t;this.hasSelection()&&(null===(e=this.hiddenTag)||void 0===e||null===(t=e.current)||void 0===t||t.focus())}},{key:"render",value:function(){var e=this,t=this.props.note,n=this.state,o=n.selectedTag,i=n.showEmailTooltip,s=n.tagInput;return r.a.createElement("div",{ref:this.container,className:"tag-field"},r.a.createElement("div",{className:d()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:-1,onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:-1,ref:this.storeHiddenTag}),null==t?void 0:t.tags.filter(Object(c.negate)(u.a)).map((function(t){return r.a.createElement(p,{key:t,tagName:t,selected:t===o,onSelect:e.selectTag})})),r.a.createElement(F,{inputRef:this.storeInputRef,value:s,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus}),r.a.createElement(a.a,{container:this.container.current,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:i,target:this.tagInput.current},(function(){return r.a.createElement(l,null)}))))}}])&&I(t.prototype,n),i&&I(t,i),f}(o.Component);A(H,"displayName","TagField");var K=Object(i.b)((function(e){return{allTags:e.data.tags,keyboardShortcuts:e.settings.keyboardShortcuts,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote)}}),{addTag:function(e,t){return{type:"ADD_NOTE_TAG",noteId:e,tagName:t}},removeTag:function(e,t){return{type:"REMOVE_NOTE_TAG",noteId:e,tagName:t}}})(H),M=n(123),W=n(155),U=n(202);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=G(e);if(t){var r=G(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return J(this,n)}}function J(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ee=function(e,t){var n=Math.max(0,e.lastIndexOf("\n","\n"===e[t]?t-1:t)),o=e.indexOf("\n",t);return[e.slice(n<=0?0:n+1,o),n,o]},te=/^(\s*(?:[-+*\u2022\ue000\ue001]\s)?)/g,ne=/^(\s*(?:[-+*\u2022]\s)?)/g,oe=function(e,t){var n,o;if("\n"===e[t]&&"\n"===e[t-1])return"";var r=V(ee(e,t),3),i=r[0],a=r[1];r[2];if(0===a)return"\t";if(""===i)return"\t";te.lastIndex=0;var c=null!==(n=null===(o=te.exec(i))||void 0===o?void 0:o[0])&&void 0!==n?n:"\t";return c===i?"":c},re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(a,e);var t,n,o,i=B(a);function a(){var e;q(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return X(Y(e=i.call.apply(i,[this].concat(n))),"editor",null),X(Y(e),"state",{content:"",rawContent:""}),X(Y(e),"bootEditor",(function(t){if(null!==t){e.editor=t,t.oncopy=function(e){var t=window.getSelection();if(e.clipboardData&&t){var n=Object(U.b)(t.toString());try{e.clipboardData.setData("text/plain",n)}catch(e){navigator.clipboard.writeText(n)}e.preventDefault()}},t.addEventListener("click",(function(){var n=e.props,o=n.editNote,r=n.noteId,i=e.state.content;if(e.editor){var a=e.editor,c=a.selectionStart;if(c===a.selectionEnd){var u=c,s=""===i[u]||""===i[u],l=!s&&u>0&&(""===i[u-1]||""===i[u-1]);if(s||l){var f=s?u:u-1,d=""===i[f];t.setSelectionRange(f,f+1,"forward"),document.execCommand("insertText",!1,d?"":""),o(r,{content:Object(U.b)(t.value)})}}}}),!0);var n=V(e.props.editorSelection,3),o=n[0],r=n[1],i=n[2];t.setSelectionRange(o,r,i),t.focus()}})),X(Y(e),"continueList",(function(){var t,n;if(e.editor){var o=e.editor.value,r=e.editor.selectionStart,i=V(ee(o,r),3),a=i[0],c=i[1],u=i[2];if(""!==a){te.lastIndex=0;var s=null!==(t=null===(n=te.exec(a))||void 0===n?void 0:n[0])&&void 0!==t?t:"";if(s.length>0&&s===a)return e.editor.setSelectionRange(c,u,"forward"),void document.execCommand("insertText",!1,"\n");var l=oe(o,r);e.editor.setSelectionRange(r,r,"forward"),document.execCommand("insertText",!1,"\n"+l),e.editor.setSelectionRange(r+l.length+1,r+l.length+1,"forward")}else document.execCommand("insertText",!1,"\n")}})),X(Y(e),"handleKeys",(function(t){if(e.props.keyboardShortcuts){var n=t.code,o=t.ctrlKey,r=t.metaKey,i=t.shiftKey;return!(o||r)||!i||"KeyC"!==n||(e.insertTask(),t.stopPropagation(),t.preventDefault(),!1)}})),X(Y(e),"indent",(function(){if(e.editor){var t=e.editor.value,n=e.editor.selectionStart,o=e.editor.selectionEnd,r=e.editor.selectionDirection;if(n===o){var i=t.lastIndexOf("\n","\n"===t[n]?n-1:n);if(!/^\s*([-+*\u2022]\s?)?([\ue000\ue001]\s?)?$/.test(t.slice(i,n)))return void document.execCommand("insertText",!1,"\t")}var a=V(ee(t,n),3),c=(a[0],a[1]),u=(a[2],t.slice(c,n).replace(/\n/gm,"\n\t")),s=t.slice(c,o).replace(/\n/gm,"\n\t");e.editor.setSelectionRange(c,o),document.execCommand("insertText",!1,s),e.editor.setSelectionRange(n+(u.length-(n-c)),o+(s.length-(o-c)),r)}})),X(Y(e),"insertTask",(function(){var t,n;if(e.editor){var o=e.editor.value,r=e.editor.selectionStart,i=V(ee(o,r),3),a=i[0],c=i[1];i[2];ne.lastIndex=0;var u=null!==(t=null===(n=ne.exec(a))||void 0===n?void 0:n[0])&&void 0!==t?t:"";""===a[u.length]||""===a[u.length]?(e.editor.setSelectionRange(c+u.length+1-(0===c?1:0),c+u.length+3-(0===c?1:0),"forward"),document.execCommand("insertText",!1,"")):(e.editor.setSelectionRange(c+u.length+(0===c?0:1),c+u.length+(0===c?0:1),"forward"),document.execCommand("insertText",!1," "))}})),X(Y(e),"keyDown",(function(t){return console.log({key:t.key,charCode:t.charCode,keyCode:t.keyCode,metaKey:t.metaKey,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),"Enter"===t.key?(e.continueList(),t.preventDefault(),void t.stopPropagation()):"Tab"===t.key&&t.ctrlKey&&t.altKey?(null===(n=e.editor)||void 0===n||n.focus(),document.execCommand("insertText",!1,"\t"),t.preventDefault(),void t.stopPropagation()):"Tab"!==t.key||t.metaKey||t.altKey||t.ctrlKey?void 0:(t.shiftKey?e.outdent():e.indent(),t.preventDefault(),void t.stopPropagation());var n})),X(Y(e),"outdent",(function(){if(e.editor){var t=e.editor.value,n=e.editor.selectionStart,o=e.editor.selectionEnd,r=e.editor.selectionDirection,i=V(ee(t,n),3),a=(i[0],i[1]),c=(i[2],t.slice(a,n).replace(/^\t/gm,"")),u=t.slice(a,o).replace(/^\t/gm,"");e.editor.setSelectionRange(a,o),document.execCommand("insertText",!1,u),e.editor.setSelectionRange(n+(c.length-(n-a)),o+(u.length-(o-a)),r)}})),X(Y(e),"storeSelection",(function(t){var n=t.currentTarget,o=n.selectionStart,r=n.selectionEnd,i=n.selectionDirection;e.props.storeEditorSelection(e.props.noteId,o,r,i)})),X(Y(e),"updateNote",(function(t){var n=e.props;(0,n.editNote)(n.noteId,{content:Object(U.b)(t.currentTarget.value)})})),e}return t=a,o=[{key:"getDerivedStateFromProps",value:function(e,t){return e.note.content!==t.rawContent?{content:Object(U.a)(e.note.content),rawContent:e.note.content}:null}}],(n=[{key:"componentDidMount",value:function(){var e,t=this;window.addEventListener("keydown",this.handleKeys,!0),null===(e=window.electron)||void 0===e||e.receive("appCommand",(function(e){"insertChecklist"===e.action&&t.insertTask()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeys,!0)}},{key:"componentDidUpdate",value:function(e,t){var n=V(e.editorSelection,3),o=n[0],r=n[1],i=n[2],a=V(this.props.editorSelection,3),c=a[0],u=a[1],s=a[2];!this.editor||o===c&&r===u&&i===s||(this.editor.setSelectionRange(c,u,s),this.editor.focus())}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement("div",{className:"note-content-editor-shell"},r.a.createElement("textarea",{ref:this.bootEditor,value:e,dir:"auto",onChange:this.updateNote,onKeyDown:this.keyDown,onSelect:this.storeSelection}))}}])&&Q(t.prototype,n),o&&Q(t,o),a}(o.Component),ie={editNote:M.a.data.editNote,insertTask:function(){return{type:"INSERT_TASK"}},storeEditorSelection:function(e,t,n,o){return{type:"STORE_EDITOR_SELECTION",noteId:e,start:t,end:n,direction:o}}},ae=Object(i.b)((function(e){var t;return{editorSelection:null!==(t=e.ui.editorSelection.get(e.ui.openedNote))&&void 0!==t?t:[0,0,"none"],fontSize:e.settings.fontSize,keyboardShortcuts:e.settings.keyboardShortcuts,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),searchQuery:e.ui.searchQuery,spellCheckEnabled:e.settings.spellCheckEnabled,theme:W.a(e)}}),ie)(re),ce=n(260);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ve(e);if(t){var r=ve(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return pe(this,n)}}function pe(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?he(e):t}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(c,e);var t,n,i,a=de(c);function c(){var e;se(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ye(he(e=a.call.apply(a,[this].concat(n))),"noteDetail",Object(o.createRef)()),ye(he(e),"focusEditor",(function(){return e.focusContentEditor&&e.focusContentEditor()})),ye(he(e),"hasFocus",(function(){var t,n;return null===(t=(n=e).editorHasFocus)||void 0===t?void 0:t.call(n)})),ye(he(e),"storeEditorHasFocus",(function(t){return e.editorHasFocus=t})),ye(he(e),"storeFocusContentEditor",(function(t){return e.focusContentEditor=t})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus)}},{key:"render",value:function(){var e=this.props,t=e.fontSize,n=e.openedNote;return r.a.createElement("div",{className:"note-detail-wrapper"},n?r.a.createElement("div",{ref:this.noteDetail,className:"note-detail"},r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:{fontSize:"".concat(t,"px"),overflowY:"hidden"}},r.a.createElement(ae,{key:n,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(ce.a,null)))}}])&&le(t.prototype,n),i&&le(t,i),c}(o.Component);ye(me,"displayName","NoteDetail");var ge=Object(i.b)((function(e){return{fontSize:e.settings.fontSize,isDialogOpen:e.ui.dialogs.length>0,keyboardShortcuts:e.settings.keyboardShortcuts,openedNote:e.ui.openedNote}}))(me),be=n(367);function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Ne(e);if(t){var r=Ne(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ke(this,n)}}function ke(e,t){return!t||"object"!==we(t)&&"function"!=typeof t?Fe(e):t}function Fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(a,e);var t,n,o,i=Oe(a);function a(){var e;Se(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Ce(Fe(e=i.call.apply(i,[this].concat(n))),"markdownEnabled",(function(){var t;return null===(t=e.props.note)||void 0===t?void 0:t.systemTags.includes("markdown")})),Ce(Fe(e),"handleShortcut",(function(t){if(e.props.keyboardShortcuts){var n,o,r,i,a=t.code,c=t.ctrlKey,u=t.metaKey,s=t.shiftKey,l=e.props,f=l.note,d=l.noteId,p=l.toggleMarkdown,h=c||u;return f&&h&&s&&"KeyM"===a?(console.log("toggling markdown"),p(d,!e.markdownEnabled()),t.stopPropagation(),t.preventDefault(),!1):h&&s&&"KeyP"===a&&e.markdownEnabled()?(e.props.toggleEditMode(),t.stopPropagation(),t.preventDefault(),!1):!(s&&h&&"KeyY"===a&&e.props.isEditorActive)||(e.editFieldHasFocus()?(null===(n=(o=e).focusTagField)||void 0===n||n.call(o),t.stopPropagation(),t.preventDefault(),!1):(null===(r=(i=e).focusNoteEditor)||void 0===r||r.call(i),t.stopPropagation(),t.preventDefault(),!1))}})),Ce(Fe(e),"editFieldHasFocus",(function(){return e.editorHasFocus&&e.editorHasFocus()})),Ce(Fe(e),"storeEditorHasFocus",(function(t){return e.editorHasFocus=t})),Ce(Fe(e),"storeFocusEditor",(function(t){return e.focusNoteEditor=t})),Ce(Fe(e),"storeFocusTagField",(function(t){return e.focusTagField=t})),Ce(Fe(e),"storeTagFieldHasFocus",(function(t){return e.tagFieldHasFocus=t})),Ce(Fe(e),"tagFieldHasFocus",(function(){return e.tagFieldHasFocus&&e.tagFieldHasFocus()})),Ce(Fe(e),"toggleShortcuts",(function(t){t?window.addEventListener("keydown",e.handleShortcut,!0):window.removeEventListener("keydown",e.handleShortcut,!0)})),e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;this.toggleShortcuts(!0),this.timer=setInterval((function(){var t;return null==e||null===(t=e.forceUpdate)||void 0===t?void 0:t.call(e)}),1e3)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1),clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.editMode,n=e.lastUpdated,o=e.note,i=e.noteId;if(!o)return r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(ce.a,null));var a=!!o.deleted,c=n?new Date(n).toLocaleString():"Unknown";return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement("div",{className:"last-sync"},"Last synced: ",c),t||!o.systemTags.includes("markdown")?r.a.createElement(ge,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus}):r.a.createElement(be.default,{noteId:i}),o&&!a&&r.a.createElement(K,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus}))}}])&&Ee(t.prototype,n),o&&Ee(t,o),a}(o.Component);Ce(je,"displayName","NoteEditor");var xe={toggleNoteList:M.a.ui.toggleNoteList,toggleMarkdown:M.a.data.markdownNote,toggleEditMode:M.a.ui.toggleEditMode};t.default=Object(i.b)((function(e){return{allTags:e.data.tags,editMode:e.ui.editMode,keyboardShortcuts:e.settings.keyboardShortcuts,isEditorActive:!e.ui.showNavigation,lastUpdated:e.simperium.lastSync.get(e.ui.openedNote),noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),revision:e.ui.selectedRevision,isSmallScreen:W.b(e)}}),xe)(je)}}]);