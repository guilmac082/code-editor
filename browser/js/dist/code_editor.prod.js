"use strict";var CopyCode={props:{content:{type:String},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"#aaa"}},data:function(){return{message:"Copy code"}},methods:{selectContent:function(){this.$refs.textarea.select(),document.execCommand("copy")},copy:function(e){this.selectContent(),e.target.focus(),this.message="Copied!"},resetMessage:function(){this.message="Copy code"}},template:'\n    <div\n    class="copy_code"\n    @click="copy"\n    @focusout="resetMessage"\n    tabindex="0"\n    :style="{ width: width, height: height }"\n  >\n    <div class="tooltip">{{ message }}</div>\n    <textarea ref="textarea" :value="content" tabindex="1" read_only></textarea>\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      width="100%"\n      height="100%"\n      viewBox="0 0 24 24"\n      fill="none"\n      :stroke="color"\n      stroke-width="2"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n      class="feather feather-copy"\n    >\n      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\n      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\n    </svg>\n  </div>\n    '},Dropdown={props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},mark:{type:String,default:""},disabled:{type:Boolean,default:!1},color:{type:String,default:"#aaa"},default_display:{type:Boolean,default:!1}},data:function(){return{show:this.default_display}},computed:{showArrow:function(){return 1!=this.disabled}},methods:{toggleDropdown:function(){0==this.disabled&&(1==this.show?this.show=!1:this.show=!0)},hideDropdown:function(){this.show=!1}},template:'\n<div\n    class="dropdown"\n    :class="{ disabled: disabled }"\n    @click="toggleDropdown"\n    @focusout="hideDropdown"\n    tabindex="0"\n  >\n    <div class="mark">\n      <div :style="{color: color}">{{ mark }}</div>\n      <svg\n        v-if="showArrow"\n        xmlns="http://www.w3.org/2000/svg"\n        width="16"\n        height="16"\n        viewBox="0 0 24 24"\n        fill="none"\n        :stroke="color"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        class="feather feather-chevron-down"\n      >\n        <polyline points="6 9 12 15 18 9"></polyline>\n      </svg>\n    </div>\n    <transition name="fade">\n      <div class="panel" :style="{ width: width, height: height }" v-if="show">\n        <slot></slot>\n      </div>\n    </transition>\n  </div>'},CodeEditor={components:{"copy-code":CopyCode,dropdown:Dropdown},props:{modelValue:{type:String},wrap_code:{type:Boolean,default:!1},read_only:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},hide_header:{type:Boolean,default:!1},value:{type:String,default:""},width:{type:String,default:"540px"},height:{type:String,default:"auto"},max_width:{type:String},min_width:{type:String},max_height:{type:String},min_height:{type:String},border_radius:{type:String,default:"12px"},language_selector:{type:Boolean,default:!1},languages:{type:Array,default:function(){return[["javascript","JS"],["cpp","C++"],["python","Python"]]}},selector_width:{type:String,default:"110px"},selector_height:{type:String,default:"auto"},selector_displayed_by_default:{type:Boolean,default:!1},display_language:{type:Boolean,default:!0},copy_code:{type:Boolean,default:!0},z_index:{type:String},font_size:{type:String,default:"17px"},theme:{type:String,default:"dark"}},data:function(){return{containerWidth:0,staticValue:this.value,top:0,left:0,languageClass:this.languages[0][0],mark:void 0===this.languages[0][1]?this.languages[0][0]:this.languages[0][1],languageList:this.languages,content:void 0===this.modelValue?this.staticValue:this.modelValue}},computed:{canScroll:function(){return"auto"!=this.height},withoutHeader:function(){return 1==this.hide_header||0==this.display_language&&0==this.copy_code}},methods:{calcContainerWidth:function(e){this.containerWidth=e.target.clientWidth},tab:function(){document.execCommand("insertText",!1,"    ")},scroll:function(e){this.top=-e.target.scrollTop,this.left=-e.target.scrollLeft},resize:function(){var l=this,e=new ResizeObserver(function(e){var t=!0,n=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var d=o.value.contentRect;l.containerWidth=d.width+40}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}});this.$refs.textarea&&e.observe(this.$refs.textarea)}},mounted:function(){this.$nextTick(function(){hljs.highlightAll(),hljs.configure({ignoreUnescapedHTML:!0}),this.content=void 0===this.modelValue?this.staticValue:this.modelValue}),this.resize()},updated:function(){this.$nextTick(function(){hljs.highlightAll(),this.content=void 0===this.modelValue?this.staticValue:this.modelValue})},template:'\n    <div\n    class="code_editor hljs"\n    :class="{\n      hide_header: withoutHeader,\n      scroll: canScroll,\n      read_only: read_only,\n      wrap_code: wrap_code,\n      atom_one_dark: theme == \'dark\',\n      atom_one_light: theme == \'light\',\n    }"\n    :style="{\n      width: width,\n      height: height,\n      borderRadius: border_radius,\n      zIndex: z_index,\n      maxWidth: max_width,\n      minWidth: min_width,\n      maxHeight: max_height,\n      minHeight: min_height,\n    }"\n  >\n    <div class="header" v-if="withoutHeader == true ? false : true">\n      <dropdown\n        :color="theme == \'dark\' ? \'#aaa\' : \'#999\'"\n        :width="selector_width"\n        :mark="mark"\n        :disabled="language_selector == false ? true : false"\n        v-if="display_language"\n        :default_display="selector_displayed_by_default"\n      >\n        <ul class="lang_list" :style="{ height: selector_height }">\n          <li\n            v-for="lang in languageList"\n            :key="lang"\n            @click="\n              this.mark = lang[1] === undefined ? lang[0] : lang[1];\n              this.languageClass = \'language-\' + lang[0];\n            "\n          >\n            {{ lang[1] === undefined ? lang[0] : lang[1] }}\n          </li>\n        </ul>\n      </dropdown>\n      <copy-code\n        width="16px"\n        height="16px"\n        :color="theme == \'dark\' ? \'#aaa\' : \'#999\'"\n        :content="content"\n        v-if="copy_code"\n      ></copy-code>\n    </div>\n    <div\n      class="code_area"\n      :style="{\n        borderBottomLeftRadius: border_radius,\n        borderBottomRightRadius: border_radius,\n        borderTopLeftRadius: withoutHeader == true ? border_radius : 0,\n        borderTopRightRadius: withoutHeader == true ? border_radius : 0,\n      }"\n    >\n      <textarea\n        v-if="\n          read_only == true ? false : modelValue === undefined ? true : false\n        "\n        ref="textarea"\n        :autofocus="autofocus"\n        @input="calcContainerWidth"\n        @keydown.tab.prevent="tab"\n        v-on:scroll="scroll"\n        v-model="staticValue"\n        :style="{ fontSize: font_size }"\n      ></textarea>\n      <textarea\n        v-if="\n          read_only == true ? false : modelValue === undefined ? false : true\n        "\n        ref="textarea"\n        :autofocus="autofocus"\n        @keydown.tab.prevent="tab"\n        v-on:scroll="scroll"\n        :value="modelValue"\n        @input="\n          $emit(\'update:modelValue\', $event.target.value),\n            calcContainerWidth($event)\n        "\n        :style="{ fontSize: font_size }"\n      ></textarea>\n      <pre\n        :style="{ width: containerWidth === 0 ? \'\' : containerWidth + \'px\' }"\n      >\n        <code\n            :class="languageClass"\n            :style="{ top: top + \'px\', left: left + \'px\', fontSize: font_size, borderBottomLeftRadius: read_only == true ? border_radius : 0, borderBottomRightRadius: read_only == true ? border_radius : 0 }"\n        >{{ read_only == true ? value : modelValue === undefined ? staticValue : modelValue }}\n</code>\n      </pre>\n    </div>\n  </div>\n'};