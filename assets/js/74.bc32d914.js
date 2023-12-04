(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{371:function(n,s,a){"use strict";a.r(s);var e=a(10),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"定义函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义函数"}},[n._v("#")]),n._v(" 定义函数")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 为函数定义类型\nfunction sum(x:number, y:number): number{\n    return x + y;\n}\n\n// 完整的类型\n// number类型变量的定义\nlet num:number = 10;\n\n// 函数类型变量的定义\nlet mySum:(x:number, y:number) =>number =   // 指定返回值的类型为number\n    function(x:number, y:number): number{\n        return x + y;\n    }\n// 函数由两部分构成：参数的类型 和 函数返回值的类型\n// x 和 y 是参数的名字 number是参数的类型\n// =>number指的是函数返回值的类型\n\n// 当函数无返回值时，使用void关键字\nfunction test(a: string):void {\n\n}\n\n// 可选形参\n// 函数有两个形参b和c, 其中b时可选项, c是必选项，可选项要放在必选项后面\nfunction test2(c:number, b?: number): void{\n    console.log(c);\n    if(b)  {\n        console.log(b)\n    }\n}\ntest2(10);\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);