(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{442:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"第64节-使用hutool生成-解析二维码-特好用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第64节-使用hutool生成-解析二维码-特好用"}},[s._v("#")]),s._v(" 第64节 使用hutool生成&解析二维码，特好用")]),s._v(" "),a("p",[s._v("非常实用的一节，先收藏点赞，慢慢看。")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，100个案例，含所有源码 & 文档 & 技术支持，可点击左下角小黄车了解")])]),s._v(" "),a("h1",{attrs:{id:"_1、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、前言"}},[s._v("#")]),s._v(" 1、前言")]),s._v(" "),a("p",[s._v("二维码，在日常开发中用的挺多的，最常见的2个功能：生成二维码、解析二维码")]),s._v(" "),a("p",[s._v("hutool工具中已经包含了二维码的各种工具类，非常好用。")]),s._v(" "),a("p",[s._v("本文将给大家演示，springboot中，如何使用hutool中的工具类实现这2个功能。")]),s._v(" "),a("h1",{attrs:{id:"_2、生成二维码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、生成二维码"}},[s._v("#")]),s._v(" 2、生成二维码")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240719122027028.png",alt:"image-20240719122027028"}})]),s._v(" "),a("h2",{attrs:{id:"_1-引入二维码相关maven工具包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入二维码相关maven工具包"}},[s._v("#")]),s._v(" 1）引入二维码相关maven工具包")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("cn.hutool"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hutool-all"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("5.8.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.google.zxing"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("javase"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3.5.3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_2-生成二维码的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成二维码的接口"}},[s._v("#")]),s._v(" 2）生成二维码的接口")]),s._v(" "),a("p",[s._v("com.itsoku.lesson064.QRCodeController#generateQrCode")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 生成二维码\n *\n * @param content 二维码内容\n * @param width 二维码宽度\n * @param height 二维码高度\n * @return\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/generateQrCode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ResponseBody")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateQrCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"height"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//生成二维码（hutool工具类QrCodeUtil）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QrCodeUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("generatePng")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回二维码图片（png格式）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTENT_TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MediaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IMAGE_PNG_VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_3-查看效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看效果"}},[s._v("#")]),s._v(" 3）查看效果")]),s._v(" "),a("p",[s._v("浏览器中访问：http://localhost:8080/generateQrCode?width=300&height=300&content=http://www.itsoku.com")]),s._v(" "),a("h2",{attrs:{id:"_4-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-小结"}},[s._v("#")]),s._v(" 4）小结")]),s._v(" "),a("p",[s._v("QrCodeUtil 工具类，默认生成白底黑色的二维码，也可以自定义二维码的样式，比如：设置背景色、前景色、设置边距以及在二维码中心显示自定义的 logo 等等")]),s._v(" "),a("p",[s._v("如下图，generate相关的方法有很多，都是用于生成二维码的，大家可以去体验下")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240718122450839.png",alt:"image-20240718122450839"}})]),s._v(" "),a("h1",{attrs:{id:"_3、二维码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、二维码解析"}},[s._v("#")]),s._v(" 3、二维码解析")]),s._v(" "),a("p",[s._v("二维码解析也比较简单，用的也是 hutool 中的 QrCodeUtil工具类，此类中有多个decode方法，如下图，都是用于解析二维码的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240718122112832.png",alt:"image-20240718122112832"}})]),s._v(" "),a("h2",{attrs:{id:"案例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例代码"}},[s._v("#")]),s._v(" 案例代码")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hutool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("qrcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QrCodeUtil")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("junit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jupiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QRCodeTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("qrCodeDecode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//二维码文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),s._v(" qrCodeFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\\\code\\\\likun_557\\\\luren\\\\lesson064\\\\src\\\\test\\\\resources\\\\二维码.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用hutool中的工具类解析二维码，得到二维码中的内容")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QrCodeUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qrCodeFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h1",{attrs:{id:"获取-源码-文档-技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-源码-文档-技术支持"}},[s._v("#")]),s._v(" 获取，源码 & 文档 & 技术支持")]),s._v(" "),a("p",[s._v("源码在lesson064模块中，需要的小伙伴可以加我微信：itsoku，获取。")]),s._v(" "),a("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),a("h2",{attrs:{id:"已更新-64-节课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已更新-64-节课"}},[s._v("#")]),s._v(" 已更新 64 节课")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，含所有源码 & 文档 & 技术支持，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 一个业务太复杂了，方法太多，如何传参？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" 线程数据共享必学的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个工具类："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.")]),s._v(" 大批量任务处理常见的方案（模拟余额宝发放收益）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.")]),s._v(" 并发环境下，如何验证代码是否正常？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySql")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redis")]),s._v("数据一致性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("数据脱敏优雅设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.")]),s._v(" 一行代码搞定系统操作日志\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Aop")]),s._v("简化"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatis")]),s._v("分页功能\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v(" 遇到线程池有大坑 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 通用解决方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("读写分离实战（一个注解搞定读写分离 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" 强制路由主库）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("典型的使用场景\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("如何确保消息的可靠性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("中，手把手教你实现事务消息\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31.")]),s._v(" 手写一个好用的延迟任务处理工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("延迟消息通用方案实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("消息幂等消费 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 消费失败衰减式重试通用方案 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 文档\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题：顺序消息通用方案实战 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码落地 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 文档\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题：消息积压相关问题及解决思路\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.")]),s._v(" 分布式事务"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("最终一致性"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("实现跨库转账（案例"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("源码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("文档）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37.")]),s._v(" 分布式事务"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("最终一致性"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("实现电商账户余额提现到微信钱包（案例"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("源码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("文档）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.")]),s._v(" 分布式事务：通用的"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCC")]),s._v("分布式事务生产级代码落地实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.")]),s._v(" 分布式锁详解\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.")]),s._v(" 分享一个特别好用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redissson")]),s._v("分布式锁工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.")]),s._v(" 一个注解轻松搞定分布式锁\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.")]),s._v(" 微服务中如何传递公共参数？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43.")]),s._v(" 接口幂等，通用方案 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码落地\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44.")]),s._v(" 微服务链路日志追踪实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45.")]),s._v(" 接口测试利器"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),s._v("，不用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Postman")]),s._v("也可以\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46.")]),s._v(" 封装"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatis")]),s._v("，实现通用无"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("版"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CRUD")]),s._v("功能"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ORM")]),s._v("框架\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatisPlus")]),s._v(" 轻松实现多租户数据隔离\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48.")]),s._v(" 电商系统"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("资金账户表设计 及 应用实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UML")]),s._v("画图神器："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PlantUML")]),s._v("，画图效率飞升\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.")]),s._v(" 多线程事务，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("秒插入百万数据\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("中自动初始化数据库功能，非常好用\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("优雅停机\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53.")]),s._v(" 分享一个特好用的集合工具类，开发效率轻松翻倍\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54.")]),s._v(" 性能调优：线程死锁相关问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55.")]),s._v(" 如何排查"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OOM")]),s._v("？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56.")]),s._v(" cpu飙升，如何快速排查？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("57.")]),s._v(" cpu飙升，使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arthas")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("秒定位问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58.")]),s._v(" 接口响应慢，使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arthas")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("秒定位问题代码\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.")]),s._v(" 策略模式，轻松消除ifelse代码\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60.")]),s._v(" 生产上，代码未生效，如何排查？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.")]),s._v(" 使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySQL")]),s._v("，实现一个高性能，分布式id生成器\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62.")]),s._v(" 方法执行异常，使用arthas，快速定位问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63.")]),s._v(" 扫码登录详解\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64.")]),s._v(" 使用hutool生成"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("解析二维码，太方便了\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br")])]),a("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),a("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),a("ol",[a("li",[s._v("分片上传实战")]),s._v(" "),a("li",[s._v("通用并发处理工具类实战")]),s._v(" "),a("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),a("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),a("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),a("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),a("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),a("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),a("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),a("li",[s._v("动态线程池")]),s._v(" "),a("li",[s._v("SpringBoot实现动态Job实战")]),s._v(" "),a("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),a("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),a("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),a("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),a("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),a("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),a("li",[s._v("线程数据共享必学的3个工具类：ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),a("li",[s._v("通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),a("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),a("li",[s._v("并发环境下，如何验证代码是否正常？")]),s._v(" "),a("li",[s._v("MySql和Redis数据一致性")]),s._v(" "),a("li",[s._v("SpringBoot数据脱敏优雅设计与实现")]),s._v(" "),a("li",[s._v("一行代码搞定系统操作日志")]),s._v(" "),a("li",[s._v("Aop简化MyBatis分页功能")]),s._v(" "),a("li",[s._v("ThreadLocal 遇到线程池有大坑 & 通用解决方案")]),s._v(" "),a("li",[s._v("SpringBoot读写分离实战（一个注解搞定读写分离 && 强制路由主库）")]),s._v(" "),a("li",[s._v("MQ专题：MQ典型的7种使用场景")]),s._v(" "),a("li",[s._v("MQ专题：如何确保消息的可靠性")]),s._v(" "),a("li",[s._v("MQ专题：SpringBoot中，手把手教你实现事务消息")]),s._v(" "),a("li",[s._v("手写一个好用的延迟任务处理工具类")]),s._v(" "),a("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息幂等消费 & 消费失败自动重试通用方案 & 代码落地")]),s._v(" "),a("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),a("li",[s._v("分布式事务-MQ最终一致性-实现跨库转账（案例+源码+文档）")]),s._v(" "),a("li",[s._v("分布式事务-MQ最终一致性-实现电商账户余额提现到微信钱包（案例+源码+文档）")]),s._v(" "),a("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),a("li",[s._v("分布式锁详解")]),s._v(" "),a("li",[s._v("分享一个特别好用的Redissson分布式锁工具类")]),s._v(" "),a("li",[s._v("分布式锁：一个注解轻松实现布式锁")]),s._v(" "),a("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),a("li",[s._v("接口幂等，通用方案 & 代码落地")]),s._v(" "),a("li",[s._v("微服务链路日志追踪实战")]),s._v(" "),a("li",[s._v("接口测试利器HTTP Client，不用Postman也可以")]),s._v(" "),a("li",[s._v("封装MyBatis，实现通用无SQL版CRUD功能")]),s._v(" "),a("li",[s._v("MyBatisPlus 轻松实现 多租户数据隔离")]),s._v(" "),a("li",[s._v("电商系统-资金账户表设计 及 应用实战")]),s._v(" "),a("li",[s._v("开发者必须掌握的一款UML画图工具，画图效率飞升")]),s._v(" "),a("li",[s._v("多线程事务，3秒插入百万数据")]),s._v(" "),a("li",[s._v("SpringBoot自动初始化数据库功能，太好用了")]),s._v(" "),a("li",[s._v("SpringBoot优雅停机")]),s._v(" "),a("li",[s._v("分享一个特别好用的集合工具类，开发效率大幅提升")]),s._v(" "),a("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),a("li",[s._v("如何排查OOM？")]),s._v(" "),a("li",[s._v("cpu飙升，如何快速排查？")]),s._v(" "),a("li",[s._v("cpu飙升，使用Arthas，3秒定位问题")]),s._v(" "),a("li",[s._v("接口响应慢，使用Arthas，3秒定位问题代码")]),s._v(" "),a("li",[s._v("策略模式，轻松消除ifelse代码")]),s._v(" "),a("li",[s._v("生产上，代码未生效，如何排查？")]),s._v(" "),a("li",[s._v("使用MySQL，实现一个高性能，分布式id生成器")]),s._v(" "),a("li",[s._v("方法执行异常，使用arthas，快速定位问题")]),s._v(" "),a("li",[s._v("扫码登录详解")]),s._v(" "),a("li",[s._v("使用hutool生成&解析二维码，太方便了")]),s._v(" "),a("li",[s._v("springboot中redis实现排行榜实战")]),s._v(" "),a("li",[s._v("springboot中redis实现附近的人实战")]),s._v(" "),a("li",[s._v("电商订单表如何分表，如何查询？")]),s._v(" "),a("li",[s._v("分库分表后如何扩容？")]),s._v(" "),a("li",[s._v("分库分表后如何迁移数据？")]),s._v(" "),a("li",[s._v("更多实战案例详解")])])])}),[],!1,null,null,null);a.default=e.exports}}]);