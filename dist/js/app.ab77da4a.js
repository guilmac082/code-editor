(function(e){function t(t){for(var l,i,c=t[0],r=t[1],d=t[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);s&&s(t);while(h.length)h.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(l=!1)}l&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var l={},o={app:0},a=[];function i(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=l,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21c6":function(e,t,n){},"238e":function(e,t,n){"use strict";n("d708")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),o=Object(l["h"])('<a target="_blank" href="https://github.com/justcaliturner/simple-code-editor"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:var(--main_4);color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),a=Object(l["h"])('<div class="sun"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></div><div class="moon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></div>',2),i=[a],c=Object(l["g"])("div",{class:"footer"},[Object(l["i"])(" The color system powered by "),Object(l["g"])("a",{target:"_blank",href:"https://lisa.vicuxd.com/"},"Lisa color")],-1);function r(e,t,n,a,r,d){var s=Object(l["r"])("Home");return Object(l["m"])(),Object(l["f"])("div",null,[o,Object(l["g"])("div",{onClick:t[0]||(t[0]=function(){return d.switchTheme&&d.switchTheme.apply(d,arguments)}),class:"float_button"},i),Object(l["j"])(s),c])}var d={class:"demo"},s=Object(l["g"])("h1",{class:"title"},"Simple CodeEditor for Vue.js",-1),u={class:"container"},h=Object(l["g"])("div",{class:"subtitle"},[Object(l["g"])("p",null,[Object(l["i"])(" It's easy to use, both support "),Object(l["g"])("mark",null,"read-only"),Object(l["i"])(" and "),Object(l["g"])("mark",null,"edit mode"),Object(l["i"])(", you can directly use it in the browser or import the JavaScript modules via the NPM package ")])],-1),g={class:"button_group"},b=Object(l["g"])("button",null,[Object(l["g"])("a",{target:"_blank",href:"https://highlightjs.org/static/demo/"},"More themes")],-1),p={class:"useage"},j={class:"container"},O=Object(l["g"])("h2",null,"Useage",-1),f=Object(l["g"])("h3",null,"In the Browser",-1),m=Object(l["g"])("p",null,"Step 1. Add the CSS file.",-1),y=Object(l["g"])("p",null,[Object(l["i"])(" Step 2. Add the JavaScript files after the "),Object(l["g"])("code",null,"vue.js"),Object(l["i"])(" file. ")],-1),v=Object(l["g"])("p",null,[Object(l["i"])(" Step 3. Declaring the component, and using the customized tag into the HTML template. For all configure items please check the "),Object(l["g"])("a",{href:"#api"},"API"),Object(l["i"])(" list. ")],-1),w=Object(l["g"])("h3",{style:{"margin-top":"60px"}},"Install with NPM",-1),_=Object(l["g"])("p",null,"Step 1",-1),x=Object(l["g"])("p",null," Step 2. Importing the component and registration. ",-1),C=Object(l["g"])("h3",{style:{"margin-top":"60px"}},"Customizing the theme style",-1),k=Object(l["g"])("p",null," You can cover the CSS file to customize the theme style. ",-1),S={class:"api",id:"api"},E={class:"container"},T=Object(l["g"])("h2",null,"API",-1),D=Object(l["g"])("h3",{id:"read_only"},[Object(l["i"])("read_only"),Object(l["g"])("label",null," - Boolean")],-1),M=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),L=Object(l["g"])("p",null,"Description: whether the code is editable",-1),H=Object(l["g"])("p",null,"UI Rendering:",-1),V=Object(l["g"])("h3",null,[Object(l["i"])("value"),Object(l["g"])("label",null," - String")],-1),I=Object(l["g"])("p",null,"Default: unset",-1),B=Object(l["g"])("p",null,[Object(l["i"])(" Description: setting the contents of a code editor. If you want to bind the data, please use the property "),Object(l["g"])("a",{href:"#v-model"},[Object(l["g"])("code",null,"v-model")])],-1),z=Object(l["g"])("p",null,"UI Rendering:",-1),R=Object(l["g"])("h3",{id:"v-model"},"v-model",-1),U=Object(l["g"])("p",null,[Object(l["i"])(" Description: varies based on the value of form inputs element or output of components, the specific usage you can read the "),Object(l["g"])("a",{target:"_blank",href:"https://v3.vuejs.org/api/directives.html#v-model"},"Vue.js Documentation")],-1),P=Object(l["g"])("p",null,"UI Rendering:",-1),A=Object(l["g"])("h3",{id:"language_selector"},[Object(l["i"])("language_selector"),Object(l["g"])("label",null," - Boolean")],-1),J=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),W=Object(l["g"])("p",null,[Object(l["i"])(" Description: whether the language selector is availed, if the value is "),Object(l["g"])("code",null,"true"),Object(l["i"])(", you can use the property "),Object(l["g"])("a",{href:"#languages"},[Object(l["g"])("code",null,"languages")]),Object(l["i"])(" to set which languages can be selected ")],-1),q=Object(l["g"])("p",null,"UI Rendering:",-1),$=Object(l["g"])("h3",{id:"languages"},[Object(l["i"])("languages"),Object(l["g"])("label",null," - Array")],-1),N=Object(l["g"])("p",null,[Object(l["i"])(" Default: "),Object(l["g"])("code",null,'[["javascript", "JS"],["cpp", "C++"],["python", "Python"]]')],-1),F=Object(l["g"])("p",null,[Object(l["i"])(" Description: This property is a two-dimensional array, the first item of each child is an index of the language and it's required, the second item of each child is used for display, which is for the better user reading experience, it can be free to customize and optional, if it's unset, the UI display will be replaced with the index of the language. When the value of "),Object(l["g"])("a",{href:"#language_selector"},[Object(l["g"])("code",null,"language_selector")]),Object(l["i"])(" is "),Object(l["g"])("code",null,"true"),Object(l["i"])(", you can set multiple languages to be selected ")],-1),K=Object(l["g"])("p",null,"All the languages:",-1),Y=Object(l["g"])("h3",null,[Object(l["i"])("wrap_code"),Object(l["g"])("label",null," - Boolean")],-1),Z=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),G=Object(l["g"])("p",null,"Description: whether the code is allowed to wrap automatically",-1),Q=Object(l["g"])("p",null,"UI Rendering:",-1),X=Object(l["g"])("h3",null,[Object(l["i"])("hide_header"),Object(l["g"])("label",null," - Boolean")],-1),ee=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),te=Object(l["g"])("p",null,"Description: whether the header of code editor is hidden",-1),ne=Object(l["g"])("p",null,"UI Rendering:",-1),le=Object(l["g"])("h3",null,[Object(l["i"])("display_language"),Object(l["g"])("label",null," - Boolean")],-1),oe=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"true")],-1),ae=Object(l["g"])("p",null,"Description: whether the language name is displayed",-1),ie=Object(l["g"])("p",null,"UI Rendering:",-1),ce=Object(l["g"])("h3",null,[Object(l["i"])("copy_code"),Object(l["g"])("label",null," - Boolean")],-1),re=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"true")],-1),de=Object(l["g"])("p",null,"Description: whether the code can be copied by the icon button",-1),se=Object(l["g"])("p",null,"UI Rendering:",-1),ue=Object(l["g"])("h3",null,[Object(l["i"])("theme"),Object(l["g"])("label",null," - String")],-1),he=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"dark")],-1),ge=Object(l["g"])("p",null," Description: switching between light and dark themes ",-1),be=Object(l["g"])("h3",null,[Object(l["i"])("font_size"),Object(l["g"])("label",null," - String")],-1),pe=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"17px")],-1),je=Object(l["g"])("p",null,"Description: setting the font size",-1),Oe=Object(l["g"])("h3",null,[Object(l["i"])("width"),Object(l["g"])("label",null," - String")],-1),fe=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"540px")],-1),me=Object(l["g"])("p",null,"Description: setting the width of the code editor",-1),ye=Object(l["g"])("h3",null,[Object(l["i"])("height"),Object(l["g"])("label",null," - String")],-1),ve=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"auto")],-1),we=Object(l["g"])("p",null,"Description: the height of the container is adaptive by default, you can also set it to a specific value, and the scroll bar will work with a long text",-1),_e=Object(l["g"])("p",null,"UI Rendering:",-1),xe=Object(l["g"])("h3",null,[Object(l["i"])("min_width"),Object(l["g"])("label",null," - String")],-1),Ce=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),ke=Object(l["g"])("p",null,"Description: setting the min-width of the code editor",-1),Se=Object(l["g"])("h3",null,[Object(l["i"])("min_height"),Object(l["g"])("label",null," - String")],-1),Ee=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Te=Object(l["g"])("p",null,"Description: setting the min-height of the code editor",-1),De=Object(l["g"])("h3",null,[Object(l["i"])("max_width"),Object(l["g"])("label",null," - String")],-1),Me=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Le=Object(l["g"])("p",null,"Description: setting the max-width of the code editor",-1),He=Object(l["g"])("h3",null,[Object(l["i"])("max_height"),Object(l["g"])("label",null," - String")],-1),Ve=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Ie=Object(l["g"])("p",null,"Description: setting the max-height of the code editor",-1),Be=Object(l["g"])("h3",null,[Object(l["i"])("border_radius"),Object(l["g"])("label",null," - String")],-1),ze=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"12px")],-1),Re=Object(l["g"])("p",null,"Description: setting the radius of the code editor",-1),Ue=Object(l["g"])("p",null,"UI Rendering:",-1),Pe=Object(l["g"])("h3",null,[Object(l["i"])("selector_width"),Object(l["g"])("label",null," - String")],-1),Ae=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"110px")],-1),Je=Object(l["g"])("p",null,"Description: setting the width of the selector",-1),We=Object(l["g"])("p",null,"UI Rendering:",-1),qe=Object(l["g"])("h3",null,[Object(l["i"])("selector_height"),Object(l["g"])("label",null," - String")],-1),$e=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"auto")],-1),Ne=Object(l["g"])("p",null,"Description: setting the height of the selector",-1),Fe=Object(l["g"])("p",null,"UI Rendering:",-1),Ke=Object(l["g"])("h3",null,[Object(l["i"])("selector_displayed_by_default"),Object(l["g"])("label",null," - Boolean")],-1),Ye=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),Ze=Object(l["g"])("p",null,"Description: whether the selector is displayed by default",-1),Ge=Object(l["g"])("h3",null,[Object(l["i"])("z_index"),Object(l["g"])("label",null," - String")],-1),Qe=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"unset")],-1),Xe=Object(l["g"])("p",null,"Description: setting the stack order of the code editor",-1),et=Object(l["g"])("h3",null,[Object(l["i"])("autofocus"),Object(l["g"])("label",null," - Boolean")],-1),tt=Object(l["g"])("p",null,[Object(l["i"])("Default: "),Object(l["g"])("code",null,"false")],-1),nt=Object(l["g"])("p",null," Description: whether the code editor should automatically get focus when the page loads ",-1);function lt(e,t,n,o,a,i){var c=Object(l["r"])("CodeEditor");return Object(l["m"])(),Object(l["f"])("div",null,[Object(l["g"])("div",d,[s,Object(l["g"])("div",u,[h,Object(l["j"])(c,{value:'<CodeEditor v-model="value"></CodeEditor>',z_index:"3",width:"100%",languages:[["html","HTML"],["javascript","JavaScript"],["css","CSS"]],language_selector:!0}),Object(l["j"])(c,{class:Object(l["k"])(a.theme),theme:a.theme,value:"import CodeEditor from 'simple-code-editor';\nexport default {\n    components: {\n      CodeEditor\n    },\n    data() {\n        return {\n          value: ''\n        }\n    }\n}",width:"100%",height:"332px",language_selector:!0},null,8,["class","theme"]),Object(l["g"])("div",g,[Object(l["g"])("button",{class:Object(l["k"])({selected:"dark"==a.theme}),onClick:t[0]||(t[0]=function(e){return i.changeTheme("dark")})}," Atom one dark ",2),Object(l["g"])("button",{class:Object(l["k"])({selected:"github_dark"==a.theme}),onClick:t[1]||(t[1]=function(e){return i.changeTheme("github_dark")})}," Github dark ",2),Object(l["g"])("button",{class:Object(l["k"])({selected:"tomorrow_night_bright"==a.theme}),onClick:t[2]||(t[2]=function(e){return i.changeTheme("tomorrow_night_bright")})}," Tomorrow night bright ",2),b])])]),Object(l["g"])("div",p,[Object(l["g"])("div",j,[O,f,m,Object(l["j"])(c,{value:'<link rel="stylesheet" href="/path/code_editor.min.css">',languages:[["html","HTML"]],read_only:!0,width:"100%"}),y,Object(l["j"])(c,{value:'<script src="/path/highlight.min.js"><\/script>\n<script src="/path/code_editor.prod.js"><\/script>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),v,Object(l["j"])(c,{value:"const app = Vue.createApp({\n  components: {\n      'code-editor': CodeEditor\n  }\n})",languages:[["javascript","JS"]],read_only:!0,width:"100%"}),Object(l["j"])(c,{value:"<code-editor></code-editor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),w,_,Object(l["j"])(c,{value:"npm install simple-code-editor",languages:[["shell"]],hide_header:!0,read_only:!0,width:"100%"}),x,Object(l["j"])(c,{value:"import CodeEditor from 'simple-code-editor';\nexport default {\n    components: {\n      CodeEditor\n    }\n}",languages:[["javascript","JS"]],read_only:!0,width:"100%"}),Object(l["j"])(c,{value:"<CodeEditor></CodeEditor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),C,k,Object(l["j"])(c,{value:'\x3c!--1. Setting the theme to an empty value--\x3e\n\x3c!--2. Add your customized class to change the style--\x3e\n<CodeEditor theme="" class="github_dark"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,class:"github_dark",width:"100%"})])]),Object(l["g"])("div",S,[Object(l["g"])("div",E,[T,D,M,L,Object(l["j"])(c,{value:'<CodeEditor :read_only="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),H,Object(l["j"])(c,{read_only:!0,value:"// Read-only mode",width:"100%"}),V,I,B,Object(l["j"])(c,{value:'<CodeEditor value="console.log(13)"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),z,Object(l["j"])(c,{value:"console.log(13)",width:"100%"}),R,U,Object(l["j"])(c,{value:'<CodeEditor v-model="demo"></CodeEditor>\n<CodeEditor v-model="demo"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),P,Object(l["j"])(c,{modelValue:a.demo,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.demo=e}),width:"100%",hide_header:!0},null,8,["modelValue"]),Object(l["j"])(c,{modelValue:a.demo,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.demo=e}),width:"100%",hide_header:!0},null,8,["modelValue"]),A,J,W,Object(l["j"])(c,{value:'<CodeEditor :language_selector="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),q,Object(l["j"])(c,{value:"// You can select the language in the top left corner",language_selector:!0,width:"100%"}),$,N,F,Object(l["j"])(c,{value:"<CodeEditor :language_selector=\"true\" :languages=\"[['javascript', 'JS'],['python', 'Python']]\"></CodeEditor>",languages:[["html","HTML"]],read_only:!0,width:"100%"}),K,Object(l["j"])(c,{read_only:!0,height:"200px",value:'[\n    "1c",\n    "abnf",\n    "accesslog",\n    "actionscript",\n    "ada",\n    "angelscript",\n    "apache",\n    "applescript",\n    "arcade",\n    "arduino",\n    "armasm",\n    "xml",\n    "asciidoc",\n    "aspectj",\n    "autohotkey",\n    "autoit",\n    "avrasm",\n    "awk",\n    "axapta",\n    "bash",\n    "basic",\n    "bnf",\n    "brainfuck",\n    "c",\n    "cal",\n    "capnproto",\n    "ceylon",\n    "clean",\n    "clojure",\n    "clojure-repl",\n    "cmake",\n    "coffeescript",\n    "coq",\n    "cos",\n    "cpp",\n    "crmsh",\n    "crystal",\n    "csharp",\n    "csp",\n    "css",\n    "d",\n    "markdown",\n    "dart",\n    "delphi",\n    "diff",\n    "django",\n    "dns",\n    "dockerfile",\n    "dos",\n    "dsconfig",\n    "dts",\n    "dust",\n    "ebnf",\n    "elixir",\n    "elm",\n    "ruby",\n    "erb",\n    "erlang-repl",\n    "erlang",\n    "excel",\n    "fix",\n    "flix",\n    "fortran",\n    "fsharp",\n    "gams",\n    "gauss",\n    "gcode",\n    "gherkin",\n    "glsl",\n    "gml",\n    "go",\n    "golo",\n    "gradle",\n    "groovy",\n    "haml",\n    "handlebars",\n    "haskell",\n    "haxe",\n    "hsp",\n    "http",\n    "hy",\n    "inform7",\n    "ini",\n    "irpf90",\n    "isbl",\n    "java",\n    "javascript",\n    "jboss-cli",\n    "json",\n    "julia",\n    "julia-repl",\n    "kotlin",\n    "lasso",\n    "latex",\n    "ldif",\n    "leaf",\n    "less",\n    "lisp",\n    "livecodeserver",\n    "livescript",\n    "llvm",\n    "lsl",\n    "lua",\n    "makefile",\n    "mathematica",\n    "matlab",\n    "maxima",\n    "mel",\n    "mercury",\n    "mipsasm",\n    "mizar",\n    "perl",\n    "mojolicious",\n    "monkey",\n    "moonscript",\n    "n1ql",\n    "nestedtext",\n    "nginx",\n    "nim",\n    "nix",\n    "node-repl",\n    "nsis",\n    "objectivec",\n    "ocaml",\n    "openscad",\n    "oxygene",\n    "parser3",\n    "pf",\n    "pgsql",\n    "php",\n    "php-template",\n    "plaintext",\n    "pony",\n    "powershell",\n    "processing",\n    "profile",\n    "prolog",\n    "properties",\n    "protobuf",\n    "puppet",\n    "purebasic",\n    "python",\n    "python-repl",\n    "q",\n    "qml",\n    "r",\n    "reasonml",\n    "rib",\n    "roboconf",\n    "routeros",\n    "rsl",\n    "ruleslanguage",\n    "rust",\n    "sas",\n    "scala",\n    "scheme",\n    "scilab",\n    "scss",\n    "shell",\n    "smali",\n    "smalltalk",\n    "sml",\n    "sqf",\n    "sql",\n    "stan",\n    "stata",\n    "step21",\n    "stylus",\n    "subunit",\n    "swift",\n    "taggerscript",\n    "yaml",\n    "tap",\n    "tcl",\n    "thrift",\n    "tp",\n    "twig",\n    "typescript",\n    "vala",\n    "vbnet",\n    "vbscript",\n    "vbscript-html",\n    "verilog",\n    "vhdl",\n    "vim",\n    "wasm",\n    "wren",\n    "x86asm",\n    "xl",\n    "xquery",\n    "zephir"\n]',languages:[["javascript","JS"],["python","Python"]],language_selector:!0,width:"100%"}),Y,Z,G,Object(l["j"])(c,{value:'<CodeEditor :wrap_code="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Q,Object(l["j"])(c,{languages:[["html","HTML"]],wrap_code:!0,value:' \x3c!-- The code can wrap automatically --\x3e\n<CodeEditor :language_selector="true" :hide_header="true"></CodeEditor>',width:"100%"}),X,ee,te,Object(l["j"])(c,{value:'<CodeEditor :hide_header="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ne,Object(l["j"])(c,{value:"// The header is hidden",hide_header:!0,width:"100%"}),le,oe,ae,Object(l["j"])(c,{value:'<CodeEditor :display_language="false"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ie,Object(l["j"])(c,{value:"// The language name is hidden",display_language:!1,width:"100%"}),ce,re,de,Object(l["j"])(c,{value:'<CodeEditor :copy_code="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),se,Object(l["j"])(c,{value:"// The icon button is hidden",copy_code:!1,width:"100%"}),ue,he,ge,Object(l["j"])(c,{value:'<CodeEditor theme="dark"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Object(l["j"])(c,{value:'<CodeEditor theme="light"></CodeEditor>',languages:[["html","HTML"]],theme:"light",read_only:!0,width:"100%"}),be,pe,je,Object(l["j"])(c,{value:'<CodeEditor font_size="17px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Oe,fe,me,Object(l["j"])(c,{value:'<CodeEditor width="540px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),ye,ve,we,Object(l["j"])(c,{value:'<CodeEditor height="150px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),_e,Object(l["j"])(c,{value:"// The scroll bar will work with a long text",height:"150px",width:"100%"}),xe,Ce,ke,Object(l["j"])(c,{value:'<CodeEditor min_width="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Se,Ee,Te,Object(l["j"])(c,{value:'<CodeEditor min_height="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),De,Me,Le,Object(l["j"])(c,{value:'<CodeEditor max_width="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),He,Ve,Ie,Object(l["j"])(c,{value:'<CodeEditor max_height="200px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Be,ze,Re,Object(l["j"])(c,{value:'<CodeEditor border_radius="4px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ue,Object(l["j"])(c,{hide_header:!1,value:"// The border radius is 4px",border_radius:"4px",width:"100%"}),Pe,Ae,Je,Object(l["j"])(c,{value:'<CodeEditor selector_width="150px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),We,Object(l["j"])(c,{languages:[["javascript","JS"],["css","The width is 150px"]],language_selector:!0,selector_displayed_by_default:!0,value:"// Demo",selector_width:"150px",width:"100%"}),qe,$e,Ne,Object(l["j"])(c,{value:'<CodeEditor selector_height="90px"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Fe,Object(l["j"])(c,{languages:[["javascript","JS"],["css","The height is 90px"],["rust","Rust"],["python","Python"],["cpp"," C++"]],language_selector:!0,selector_displayed_by_default:!0,value:"// Demo",selector_width:"160px",selector_height:"90px",width:"100%"}),Ke,Ye,Ze,Object(l["j"])(c,{value:'<CodeEditor :selector_displayed_by_default="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),Ge,Qe,Xe,Object(l["j"])(c,{value:'<CodeEditor z_index="6"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"}),et,tt,nt,Object(l["j"])(c,{value:'<CodeEditor :autofocus="true"></CodeEditor>',languages:[["html","HTML"]],read_only:!0,width:"100%"})])])])}Object(l["o"])("data-v-742dd8b3");var ot={key:0,class:"header"},at=["onClick"],it=["autofocus"],ct=["autofocus","value"],rt=Object(l["i"])("        "),dt=Object(l["i"])("\n      ");function st(e,t,n,o,a,i){var c=this,r=Object(l["r"])("Dropdown"),d=Object(l["r"])("CopyCode");return Object(l["m"])(),Object(l["f"])("div",{class:Object(l["k"])(["code_editor hljs",{hide_header:i.withoutHeader,scroll:i.canScroll,read_only:n.read_only,wrap_code:n.wrap_code,atom_one_dark:"dark"==n.theme,atom_one_light:"light"==n.theme}]),style:Object(l["l"])({width:n.width,height:n.height,borderRadius:n.border_radius,zIndex:n.z_index,maxWidth:n.max_width,minWidth:n.min_width,maxHeight:n.max_height,minHeight:n.min_height})},[1!=i.withoutHeader?(Object(l["m"])(),Object(l["f"])("div",ot,[n.display_language?(Object(l["m"])(),Object(l["d"])(r,{key:0,color:"dark"==n.theme?"#aaa":"#999",width:n.selector_width,mark:a.mark,disabled:0==n.language_selector,default_display:n.selector_displayed_by_default},{default:Object(l["u"])((function(){return[Object(l["g"])("ul",{class:"lang_list",style:Object(l["l"])({height:n.selector_height})},[(Object(l["m"])(!0),Object(l["f"])(l["a"],null,Object(l["p"])(a.languageList,(function(e){return Object(l["m"])(),Object(l["f"])("li",{key:e,onClick:function(t){c.mark=void 0===e[1]?e[0]:e[1],c.languageClass="language-"+e[0]}},Object(l["s"])(void 0===e[1]?e[0]:e[1]),9,at)})),128))],4)]})),_:1},8,["color","width","mark","disabled","default_display"])):Object(l["e"])("",!0),n.copy_code?(Object(l["m"])(),Object(l["d"])(d,{key:1,width:"16px",height:"16px",color:"dark"==n.theme?"#aaa":"#999",content:a.content},null,8,["color","content"])):Object(l["e"])("",!0)])):Object(l["e"])("",!0),Object(l["g"])("div",{class:"code_area",style:Object(l["l"])({borderBottomLeftRadius:n.border_radius,borderBottomRightRadius:n.border_radius,borderTopLeftRadius:1==i.withoutHeader?n.border_radius:0,borderTopRightRadius:1==i.withoutHeader?n.border_radius:0})},[1!=n.read_only&&void 0===n.modelValue?Object(l["v"])((Object(l["m"])(),Object(l["f"])("textarea",{key:0,ref:"textarea",autofocus:n.autofocus,onInput:t[0]||(t[0]=function(){return i.calcContainerWidth&&i.calcContainerWidth.apply(i,arguments)}),onKeydown:t[1]||(t[1]=Object(l["w"])(Object(l["x"])((function(){return i.tab&&i.tab.apply(i,arguments)}),["prevent"]),["tab"])),onScroll:t[2]||(t[2]=function(){return i.scroll&&i.scroll.apply(i,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.staticValue=e}),style:Object(l["l"])({fontSize:n.font_size})},null,44,it)),[[l["t"],a.staticValue]]):Object(l["e"])("",!0),1!=n.read_only&&void 0!==n.modelValue?(Object(l["m"])(),Object(l["f"])("textarea",{key:1,ref:"textarea",autofocus:n.autofocus,onKeydown:t[4]||(t[4]=Object(l["w"])(Object(l["x"])((function(){return i.tab&&i.tab.apply(i,arguments)}),["prevent"]),["tab"])),onScroll:t[5]||(t[5]=function(){return i.scroll&&i.scroll.apply(i,arguments)}),value:n.modelValue,onInput:t[6]||(t[6]=function(t){return e.$emit("update:modelValue",t.target.value),i.calcContainerWidth(t)}),style:Object(l["l"])({fontSize:n.font_size})},null,44,ct)):Object(l["e"])("",!0),Object(l["g"])("pre",{style:Object(l["l"])({width:0===a.containerWidth?"":a.containerWidth+"px"})},[rt,Object(l["g"])("code",{class:Object(l["k"])(a.languageClass),style:Object(l["l"])({top:a.top+"px",left:a.left+"px",fontSize:n.font_size,borderBottomLeftRadius:1==n.read_only?n.border_radius:0,borderBottomRightRadius:1==n.read_only?n.border_radius:0})},Object(l["s"])(1==n.read_only?n.value:void 0===n.modelValue?a.staticValue+"\n":n.modelValue+"\n"),7),dt],4)],4)],6)}Object(l["n"])();var ut=n("b85c"),ht=n("06d7"),gt=n.n(ht);Object(l["o"])("data-v-657adc61");var bt={class:"mark"},pt=["stroke"],jt=Object(l["g"])("polyline",{points:"6 9 12 15 18 9"},null,-1),Ot=[jt];function ft(e,t,n,o,a,i){return Object(l["m"])(),Object(l["f"])("div",{class:Object(l["k"])(["dropdown",{disabled:n.disabled}]),onClick:t[0]||(t[0]=function(){return i.toggleDropdown&&i.toggleDropdown.apply(i,arguments)}),onFocusout:t[1]||(t[1]=function(){return i.hideDropdown&&i.hideDropdown.apply(i,arguments)}),tabindex:"0"},[Object(l["g"])("div",bt,[Object(l["g"])("div",{style:Object(l["l"])({color:n.color})},Object(l["s"])(n.mark),5),i.showArrow?(Object(l["m"])(),Object(l["f"])("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},Ot,8,pt)):Object(l["e"])("",!0)]),Object(l["j"])(l["b"],{name:"fade"},{default:Object(l["u"])((function(){return[a.show?(Object(l["m"])(),Object(l["f"])("div",{key:0,class:"panel",style:Object(l["l"])({width:n.width,height:n.height})},[Object(l["q"])(e.$slots,"default",{},void 0,!0)],4)):Object(l["e"])("",!0)]})),_:3})],34)}Object(l["n"])();var mt={name:"Dropdown",props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},mark:{type:String,default:""},disabled:{type:Boolean,default:!1},color:{type:String,default:"#aaa"},default_display:{type:Boolean,default:!1}},data:function(){return{show:this.default_display}},computed:{showArrow:function(){return 1!=this.disabled}},methods:{toggleDropdown:function(){0==this.disabled&&(1==this.show?this.show=!1:this.show=!0)},hideDropdown:function(){this.show=!1}}};n("a0c8");mt.render=ft,mt.__scopeId="data-v-657adc61";var yt=mt;Object(l["o"])("data-v-4474a9d0");var vt={class:"tooltip"},wt=["value"],_t=["stroke"],xt=Object(l["g"])("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),Ct=Object(l["g"])("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),kt=[xt,Ct];function St(e,t,n,o,a,i){return Object(l["m"])(),Object(l["f"])("div",{class:"copy_code",onClick:t[0]||(t[0]=function(){return i.copy&&i.copy.apply(i,arguments)}),onFocusout:t[1]||(t[1]=function(){return i.resetMessage&&i.resetMessage.apply(i,arguments)}),tabindex:"0",style:Object(l["l"])({width:n.width,height:n.height})},[Object(l["g"])("div",vt,Object(l["s"])(a.message),1),Object(l["g"])("textarea",{ref:"textarea",value:n.content,tabindex:"1",readonly:""},null,8,wt),(Object(l["m"])(),Object(l["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-copy"},kt,8,_t))],36)}Object(l["n"])();var Et={name:"CopyCode",props:{content:{type:String},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"#aaa"}},data:function(){return{message:"Copy code"}},methods:{selectContent:function(){this.$refs.textarea.select(),document.execCommand("copy")},copy:function(e){this.selectContent(),e.target.focus(),this.message="Copied!"},resetMessage:function(){this.message="Copy code"}}};n("5bb6");Et.render=St,Et.__scopeId="data-v-4474a9d0";var Tt=Et,Dt={components:{Dropdown:yt,CopyCode:Tt},name:"CodeEditor",props:{modelValue:{type:String},wrap_code:{type:Boolean,default:!1},read_only:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},hide_header:{type:Boolean,default:!1},value:{type:String,default:""},width:{type:String,default:"540px"},height:{type:String,default:"auto"},max_width:{type:String},min_width:{type:String},max_height:{type:String},min_height:{type:String},border_radius:{type:String,default:"12px"},language_selector:{type:Boolean,default:!1},languages:{type:Array,default:function(){return[["javascript","JS"],["cpp","C++"],["python","Python"]]}},selector_width:{type:String,default:"110px"},selector_height:{type:String,default:"auto"},selector_displayed_by_default:{type:Boolean,default:!1},display_language:{type:Boolean,default:!0},copy_code:{type:Boolean,default:!0},z_index:{type:String},font_size:{type:String,default:"17px"},theme:{type:String,default:"dark"}},data:function(){return{containerWidth:0,staticValue:this.value,top:0,left:0,languageClass:this.languages[0][0],mark:void 0===this.languages[0][1]?this.languages[0][0]:this.languages[0][1],languageList:this.languages,content:void 0===this.modelValue?this.staticValue:this.modelValue}},computed:{canScroll:function(){return"auto"!=this.height},withoutHeader:function(){return 1==this.hide_header||0==this.display_language&&0==this.copy_code}},methods:{calcContainerWidth:function(e){this.containerWidth=e.target.clientWidth},tab:function(){document.execCommand("insertText",!1,"    ")},scroll:function(e){this.top=-e.target.scrollTop,this.left=-e.target.scrollLeft},resize:function(){var e=this,t=new ResizeObserver((function(t){var n,l=Object(ut["a"])(t);try{for(l.s();!(n=l.n()).done;){var o=n.value,a=o.contentRect;e.containerWidth=a.width+40}}catch(i){l.e(i)}finally{l.f()}}));this.$refs.textarea&&t.observe(this.$refs.textarea)}},mounted:function(){this.$nextTick((function(){gt.a.highlightAll(),gt.a.configure({ignoreUnescapedHTML:!0}),this.content=void 0===this.modelValue?this.staticValue:this.modelValue})),this.resize()},updated:function(){this.$nextTick((function(){gt.a.highlightAll(),this.content=void 0===this.modelValue?this.staticValue:this.modelValue}))}};n("9205"),n("d06e");Dt.render=st,Dt.__scopeId="data-v-742dd8b3";var Mt=Dt,Lt={name:"Home",components:{CodeEditor:Mt},data:function(){return{theme:"dark",demo:"// Please edit it"}},methods:{changeTheme:function(e){this.theme=e}}};n("238e");Lt.render=lt;var Ht=Lt,Vt={components:{Home:Ht},mounted:function(){this.$nextTick((function(){localStorage.getItem("vic_theme")&&"light"==localStorage.getItem("vic_theme")?document.body.className="":document.body.className="mirror"}))},methods:{switchTheme:function(){""===document.body.className?(document.body.className="mirror",localStorage.setItem("vic_theme","mirror")):(document.body.className="",localStorage.setItem("vic_theme","light"))}}};n("ddff");Vt.render=r;var It=Vt;Object(l["c"])(It).mount("#app")},"5bb6":function(e,t,n){"use strict";n("8dbc")},"5c6a":function(e,t,n){},"730c":function(e,t,n){},"8dbc":function(e,t,n){},9205:function(e,t,n){"use strict";n("21c6")},a0c8:function(e,t,n){"use strict";n("ab20")},ab20:function(e,t,n){},d06e:function(e,t,n){"use strict";n("730c")},d708:function(e,t,n){},ddff:function(e,t,n){"use strict";n("5c6a")}});
//# sourceMappingURL=app.ab77da4a.js.map