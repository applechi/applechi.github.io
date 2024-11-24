(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{427:function(s,a,t){"use strict";t.r(a);var n=t(8),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"第52节-springboot-优雅停机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第52节-springboot-优雅停机"}},[s._v("#")]),s._v(" 第52节 SpringBoot 优雅停机")]),s._v(" "),a("p",[s._v("非常硬核的一节，先收藏点赞，慢慢看。")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，100个案例，含所有源码 & 文档 & 技术支持，可点击左下角小黄车了解")])]),s._v(" "),a("h1",{attrs:{id:"_1、springboot优雅停机是什么意思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、springboot优雅停机是什么意思"}},[s._v("#")]),s._v(" 1、SpringBoot优雅停机是什么意思？")]),s._v(" "),a("p",[s._v("Spring优雅停机，通俗点说就是如何优雅的停止SpringBoot应用，")]),s._v(" "),a("p",[s._v("优雅停机，应满足下面3点：")]),s._v(" "),a("ol",[a("li",[s._v("SpringBoot应用不再接收新的请求")]),s._v(" "),a("li",[s._v("SpringBoot应用将已经进来的请求处理完成")]),s._v(" "),a("li",[s._v("然后关闭SpringBoot应用")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意：这里说的停机，并不是停止我们的机器，而是停止我们的SpringBoot应用。")])]),s._v(" "),a("h1",{attrs:{id:"_2、什么是立即停机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么是立即停机"}},[s._v("#")]),s._v(" 2、什么是立即停机？")]),s._v(" "),a("p",[s._v("直接把springboot应用强制关掉，比如linux中的："),a("code",[s._v("kill -9 进程id")]),s._v("，这个命令就会触发强制关闭进程，相当于突然断电一样。")]),s._v(" "),a("p",[s._v("这种可能导致严重的问题")]),s._v(" "),a("ol",[a("li",[s._v("用户体验差，用户请求还在处理中，springboot突然下线，会导致用户收到错误响应")]),s._v(" "),a("li",[s._v("可能会引起系统中数据不一致")])]),s._v(" "),a("h1",{attrs:{id:"_3、举例-餐馆营业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、举例-餐馆营业"}},[s._v("#")]),s._v(" 3、举例：餐馆营业")]),s._v(" "),a("p",[s._v("假如咱们开了一个餐馆，现在不想营业了，有2种方案")]),s._v(" "),a("h2",{attrs:{id:"方案1-优雅关门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案1-优雅关门"}},[s._v("#")]),s._v(" 方案1：优雅关门")]),s._v(" "),a("ol",[a("li",[s._v("门口挂个牌：已打样，这样顾客看到后，就不会进来了")]),s._v(" "),a("li",[s._v("将店内已经在就餐的顾客服务完毕")]),s._v(" "),a("li",[s._v("关门")])]),s._v(" "),a("h2",{attrs:{id:"方案2-暴力关门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案2-暴力关门"}},[s._v("#")]),s._v(" 方案2：暴力关门")]),s._v(" "),a("ol",[a("li",[s._v("将餐馆内还在就餐的顾客直接轰出去")]),s._v(" "),a("li",[s._v("关门")])]),s._v(" "),a("p",[s._v("大家，感觉那种方案好？")]),s._v(" "),a("h1",{attrs:{id:"_4、springboot优雅停机步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、springboot优雅停机步骤"}},[s._v("#")]),s._v(" 4、SpringBoot优雅停机步骤")]),s._v(" "),a("p",[s._v("SpringBoot中已内置了优雅停机的方案，只需做一些简单的配置就可以了，具体步骤如下。")]),s._v(" "),a("h2",{attrs:{id:"_1-applicaiton-yml中添加配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-applicaiton-yml中添加配置"}},[s._v("#")]),s._v(" 1）applicaiton.yml中添加配置")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停机方式，immediate：立即停机，默认值；graceful：优雅停机")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" graceful\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-触发停机常见的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-触发停机常见的方式"}},[s._v("#")]),s._v(" 2）触发停机常见的方式")]),s._v(" "),a("h3",{attrs:{id:"linux中-kill-进程pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux中-kill-进程pid"}},[s._v("#")]),s._v(" linux中：kill 进程pid")]),s._v(" "),a("p",[s._v("先通过jps命令找到进程id")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jps\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("kill 进程id，触发优雅停机")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 进程id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意，"),a("code",[s._v("kill -9 进程id")]),s._v("是强制结束进程，不会触发优雅停机，相当于直接断电一样。")])]),s._v(" "),a("h3",{attrs:{id:"命令窗口中-ctrl-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令窗口中-ctrl-c"}},[s._v("#")]),s._v(" 命令窗口中：ctrl+c")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240627144355366.png",alt:"image-20240627144355366"}})]),s._v(" "),a("h2",{attrs:{id:"idea中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea中"}},[s._v("#")]),s._v(" idea中")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240627144154406.png",alt:"image-20240627144154406"}})]),s._v(" "),a("h1",{attrs:{id:"_5、效果演示-立即停机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、效果演示-立即停机"}},[s._v("#")]),s._v(" 5、效果演示：立即停机")]),s._v(" "),a("h1",{attrs:{id:"_6、效果演示-优雅停机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、效果演示-优雅停机"}},[s._v("#")]),s._v(" 6、效果演示：优雅停机")]),s._v(" "),a("h1",{attrs:{id:"_7、原理-jvm退出钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、原理-jvm退出钩子"}},[s._v("#")]),s._v(" 7、原理：JVM退出钩子")]),s._v(" "),a("p",[s._v("JVM退出钩子是指在JVM关闭时会被调用的回调方法。")]),s._v(" "),a("p",[s._v("在JVM关闭时，会执行所有的"),a("code",[s._v("shutdown hooks")]),s._v("。")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("Runtime.getRuntime().addShutdownHook()")]),s._v("方法来注册一个退出钩子。")]),s._v(" "),a("p",[s._v("以下是一个简单的Java示例，演示了如何注册和使用JVM退出钩子：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ShutdownHookDemo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addShutdownHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"优雅停机测试1...."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addShutdownHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"优雅停机测试2...."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("执行输出：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("优雅停机测试"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n优雅停机测试"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"_8、springboot优雅退出原理-通过jvm钩子实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、springboot优雅退出原理-通过jvm钩子实现的"}},[s._v("#")]),s._v(" 8、SpringBoot优雅退出原理：通过jvm钩子实现的")]),s._v(" "),a("p",[s._v("源码位置：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("SpringApplicationShutdownHook")]),s._v("#addRuntimeShutdownHook\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在jvm退出的时候会干一些事情，主要的事情：")]),s._v(" "),a("ol",[a("li",[s._v("让web服务器（如Tomcat、Undertow、Jetty）不在接收新的请求")]),s._v(" "),a("li",[s._v("将已经进来的请求处理完成")]),s._v(" "),a("li",[s._v("销毁spring容器中的bean")]),s._v(" "),a("li",[s._v("退出jvm")])]),s._v(" "),a("h1",{attrs:{id:"_9、拓展-springcloud优雅停机步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、拓展-springcloud优雅停机步骤"}},[s._v("#")]),s._v(" 9、拓展：SpringCloud优雅停机步骤")]),s._v(" "),a("h2",{attrs:{id:"_1-将服务从服务注册中心下线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-将服务从服务注册中心下线"}},[s._v("#")]),s._v(" 1）将服务从服务注册中心下线")]),s._v(" "),a("p",[s._v("SpringCloud 涉及到服务注册中心，若服务下线前，没有提前告诉注册中心，而直接把服务下线了，而注册中心、以及其他服务消费者以为这个服务还活着，则还会有请求过来，会导致请求报错。")]),s._v(" "),a("p",[s._v("所以下线前需要先从注册中心中将服务摘除，然后需要等到注册中心最新的数据同步到其他服务消费者后，才可以将服务优雅停机。")]),s._v(" "),a("p",[s._v("常用的注册中心有eureka，nacos，他们都有服务下线的相关api，可以先调用这些api让服务从注册中心下线")]),s._v(" "),a("blockquote",[a("p",[s._v("具体的api，大家可以查询相关文档，或者咨询AI")])]),s._v(" "),a("h2",{attrs:{id:"_2-休眠一段时间-等待注册中心数据同步给其他服务消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-休眠一段时间-等待注册中心数据同步给其他服务消费者"}},[s._v("#")]),s._v(" 2）休眠一段时间：等待注册中心数据同步给其他服务消费者")]),s._v(" "),a("p",[s._v("当我们的服务从注册中心摘除后，其他服务可能并不知道")]),s._v(" "),a("p",[s._v("而其他服务会定期从注册中心中拉取数据，所以需要等待一段时间，等到其他服务从注册中心获取到最新的服务列表后，才能对要停机的服务执行优雅停机。")]),s._v(" "),a("p",[s._v("比如微服务从服务注册中心同步的频率是 5 秒")]),s._v(" "),a("p",[s._v("则建议在这个步骤中，休眠 10 秒以确保所有服务都拉取了注册中心最新的数据。")]),s._v(" "),a("h2",{attrs:{id:"_3-对需要下线的服务执行优雅停机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对需要下线的服务执行优雅停机"}},[s._v("#")]),s._v(" 3）对需要下线的服务执行优雅停机")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、通过ps命令查询到进程id\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、执行：kill 进程id，触发优雅停机\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-轮询进程状态-超时强制结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-轮询进程状态-超时强制结束"}},[s._v("#")]),s._v(" 4）轮询进程状态 + 超时强制结束")]),s._v(" "),a("p",[s._v("有些情况，执行了"),a("code",[s._v("kill 进程id")]),s._v("进程是无法正常结束的，可以通过linux命令去轮询，看下刚才kill的进程是否已结束。")]),s._v(" "),a("p",[s._v("可以设置一个超时时间，比如轮询60秒之后，进程还是会无法结束，那么可以执行"),a("code",[s._v("kill -9 进程id")]),s._v("强制结束进程")]),s._v(" "),a("p",[s._v("这样，SpringCloud中的服务就可以优雅下线了。")]),s._v(" "),a("h1",{attrs:{id:"获取-源码-文档-技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-源码-文档-技术支持"}},[s._v("#")]),s._v(" 获取，源码 & 文档 & 技术支持")]),s._v(" "),a("p",[s._v("源码在 lesson052 这个模块中，需要的小伙伴可以加我微信：itsoku，获取。")]),s._v(" "),a("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),a("h2",{attrs:{id:"已更新-52-节课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已更新-52-节课"}},[s._v("#")]),s._v(" 已更新 52 节课")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，含所有源码 & 文档 & 技术支持，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 一个业务太复杂了，方法太多，如何传参？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" 线程数据共享必学的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个工具类："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.")]),s._v(" 大批量任务处理常见的方案（模拟余额宝发放收益）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.")]),s._v(" 并发环境下，如何验证代码是否正常？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySql")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redis")]),s._v("数据一致性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("数据脱敏优雅设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.")]),s._v(" 一行代码搞定系统操作日志\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Aop")]),s._v("简化"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatis")]),s._v("分页功能\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v(" 遇到线程池有大坑 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 通用解决方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("读写分离实战（一个注解搞定读写分离 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" 强制路由主库）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("典型的使用场景\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("如何确保消息的可靠性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("中，手把手教你实现事务消息\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31.")]),s._v(" 手写一个好用的延迟任务处理工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("延迟消息通用方案实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("消息幂等消费 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 消费失败衰减式重试通用方案 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 文档\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题：顺序消息通用方案实战 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码落地 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 文档\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("专题：消息积压相关问题及解决思路\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.")]),s._v(" 分布式事务"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("最终一致性"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("实现跨库转账（案例"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("源码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("文档）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37.")]),s._v(" 分布式事务"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MQ")]),s._v("最终一致性"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("实现电商账户余额提现到微信钱包（案例"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("源码"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("文档）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.")]),s._v(" 分布式事务：通用的"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCC")]),s._v("分布式事务生产级代码落地实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.")]),s._v(" 分布式锁详解\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40.")]),s._v(" 分享一个特别好用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redissson")]),s._v("分布式锁工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.")]),s._v(" 一个注解轻松搞定分布式锁\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.")]),s._v(" 微服务中如何传递公共参数？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43.")]),s._v(" 接口幂等，通用方案 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 代码落地\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44.")]),s._v(" 微服务链路日志追踪实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45.")]),s._v(" 接口测试利器"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),s._v("，不用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Postman")]),s._v("也可以\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46.")]),s._v(" 封装"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatis")]),s._v("，实现通用无"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("版"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CRUD")]),s._v("功能"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ORM")]),s._v("框架\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyBatisPlus")]),s._v(" 轻松实现多租户数据隔离\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48.")]),s._v(" 电商系统"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("资金账户表设计 及 应用实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UML")]),s._v("画图神器："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PlantUML")]),s._v("，画图效率飞升\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.")]),s._v(" 多线程事务，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("秒插入百万数据\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("中自动初始化数据库功能，非常好用\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("优雅停机\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),a("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),a("ol",[a("li",[s._v("分片上传实战")]),s._v(" "),a("li",[s._v("通用并发处理工具类实战")]),s._v(" "),a("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),a("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),a("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),a("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),a("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),a("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),a("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),a("li",[s._v("动态线程池")]),s._v(" "),a("li",[s._v("SpringBoot实现动态Job实战")]),s._v(" "),a("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),a("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),a("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),a("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),a("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),a("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),a("li",[s._v("线程数据共享必学的3个工具类：ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),a("li",[s._v("通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),a("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),a("li",[s._v("并发环境下，如何验证代码是否正常？")]),s._v(" "),a("li",[s._v("MySql和Redis数据一致性")]),s._v(" "),a("li",[s._v("SpringBoot数据脱敏优雅设计与实现")]),s._v(" "),a("li",[s._v("一行代码搞定系统操作日志")]),s._v(" "),a("li",[s._v("Aop简化MyBatis分页功能")]),s._v(" "),a("li",[s._v("ThreadLocal 遇到线程池有大坑 & 通用解决方案")]),s._v(" "),a("li",[s._v("SpringBoot读写分离实战（一个注解搞定读写分离 && 强制路由主库）")]),s._v(" "),a("li",[s._v("MQ专题：MQ典型的7种使用场景")]),s._v(" "),a("li",[s._v("MQ专题：如何确保消息的可靠性")]),s._v(" "),a("li",[s._v("MQ专题：SpringBoot中，手把手教你实现事务消息")]),s._v(" "),a("li",[s._v("手写一个好用的延迟任务处理工具类")]),s._v(" "),a("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息幂等消费 & 消费失败自动重试通用方案 & 代码落地")]),s._v(" "),a("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),a("li",[s._v("分布式事务-MQ最终一致性-实现跨库转账（案例+源码+文档）")]),s._v(" "),a("li",[s._v("分布式事务-MQ最终一致性-实现电商账户余额提现到微信钱包（案例+源码+文档）")]),s._v(" "),a("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),a("li",[s._v("分布式锁详解")]),s._v(" "),a("li",[s._v("分享一个特别好用的Redissson分布式锁工具类")]),s._v(" "),a("li",[s._v("分布式锁：一个注解轻松实现布式锁")]),s._v(" "),a("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),a("li",[s._v("接口幂等，通用方案 & 代码落地")]),s._v(" "),a("li",[s._v("微服务链路日志追踪实战")]),s._v(" "),a("li",[s._v("接口测试利器HTTP Client，不用Postman也可以")]),s._v(" "),a("li",[s._v("封装MyBatis，实现通用无SQL版CRUD功能")]),s._v(" "),a("li",[s._v("MyBatisPlus 轻松实现 多租户数据隔离")]),s._v(" "),a("li",[s._v("电商系统-资金账户表设计 及 应用实战")]),s._v(" "),a("li",[s._v("开发者必须掌握的一款UML画图工具，画图效率飞升")]),s._v(" "),a("li",[s._v("多线程事务，3秒插入百万数据")]),s._v(" "),a("li",[s._v("SpringBoot自动初始化数据库功能，太好用了")]),s._v(" "),a("li",[s._v("SpringBoot优雅停机")]),s._v(" "),a("li",[s._v("分享一个特别好用的集合工具类，开发效率大幅提升")]),s._v(" "),a("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),a("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),a("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),a("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),a("li",[s._v("性能调优：远程debug")]),s._v(" "),a("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),a("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),a("li",[s._v("Redis场景案例。。。")]),s._v(" "),a("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),a("li",[s._v("工作中常见的场景案例设计与实现。。。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);