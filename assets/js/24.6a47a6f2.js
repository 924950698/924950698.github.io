(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{314:function(s,n,a){s.exports=a.p+"assets/img/WechatIMG10.20128c51.jpg"},376:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# -----------------------------------------------------------\n\n# !/usr/bin/env python\n# -*- coding: utf-8 -*-\n# @Time    : 2023/12/4 15:40\n# @Author  : Dreamers\n# @File    : study_file.py\n# @Software: PyCharm\n\n# ------------------------------------------------------------\n\n# 本篇总结，在python语言中使用文件时的一些基本方法，和经常会用到对os模块\n\n# 使用方法：open(file, mode)\n# file:是要打开的目标文件名的字符串（可以包含文件所在的具体路径）\n# mode：设置打开文件的模式（访问模式）：只读，写入，追加等\nf = open('test.txt', 'r') # 默认只读\n\n# 读写 .txt文件支持，pdf等格式不支持\n# f.write('hello world')\n\n# print('---f---', f) #---workbook--- <_io.TextIOWrapper name='test.txt' mode='w' encoding='UTF-8'>\n\n# 使用读取方式时，open()方法的mode应为'r',否则报错。\n# f.read()  # 读取第一行数据\nf.readline() # 一次读取一行内容\n\nf.seek(0,0)\nreadlines = f.readlines() # 可以按照行的方式把整个文件中的内容进行一次性读取，并且返回的是一个列表，其中每一行的数据为一个元素。\nprint('---', readlines) #['hello world\\n', '1\\n', '2\\n']\n\n# ⚠️读取文件三兄弟，read()\\readline()\\readlines(), 连续调用两次时，第二次调用返回[]\n# 解决：因为在第一个read()之后，光标移到了文件的末尾，加入seek（0,0）即可正常\n\n# 另外一种写文件方式： with open('文件名称'， 'r') as f\n# Python引入了with语句来自动帮我们调用close()方法\nwith open('test.txt', 'r') as f:\n    print('--readlines-', f.readlines()) # ['hello world\\n', '1\\n', '2\\n']\n\n# 关闭文件\nf.close()\n\n# ------------------- 分割线 -------------------\n\n## 在项目实践中，想要操作某个文件，先得找到该文件的位置。如果写死路径，当代码移植到其他设备，\n# 这些路径可能都要全部改写，代码维护成本高。Python的 os 模块提供函数可以获取到当前文件的绝对路径，从而定位到目标文件。\n# os.path 模块主要用于获取文件的属性\n\nimport os\nprint(os.path.dirname(__file__)) # 返回目录路径  /Users/liuxiangdong/Desktop/pyStudyProject\nbase_path = os.path.dirname(__file__) # 把生成的报告放到reports目录下 /Users/liuxiangdong/Desktop/pyStudyProject/reports/test.txt\nprint(os.path.join(base_path, 'reports', 'test.txt')) # 将目录和文件名合成一个路径 /Users/liuxiangdong/Desktop/pyStudyProject/study_file.py\nprint(os.path.abspath(__file__)) # 输出绝对路径\n\n\n#os.path.exists()判断文件或文件夹是否存在, 返回true/false\nprint(os.path.exists('/Users/liuxiangdong/Desktop/pyStudyProject/study_file.py'))\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br")])]),n("p",[s._v("mdoe参数：\n"),n("img",{attrs:{src:a(314),alt:"mdoe参数",title:"Magic Gardens"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);