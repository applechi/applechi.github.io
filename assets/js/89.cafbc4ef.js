(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{401:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"第24节-一行代码搞定系统操作日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第24节-一行代码搞定系统操作日志"}},[s._v("#")]),s._v(" 第24节 一行代码搞定系统操作日志")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，100个案例，含所有源码 & 文档 & 技术支持，可点击左下角小黄车了解")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"本文内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文内容"}},[s._v("#")]),s._v(" 本文内容")]),s._v(" "),a("p",[s._v("通过aop统一记录系统操作日志，只需在接口方法上加个自定义的注解，不论接口成功还是失败，都可自动记录操作日志到db中。")]),s._v(" "),a("p",[s._v("操作日志包含的信息有")]),s._v(" "),a("ul",[a("li",[s._v("日志描述")]),s._v(" "),a("li",[s._v("状态，0：异常，1：正常")]),s._v(" "),a("li",[s._v("请求参数json格式")]),s._v(" "),a("li",[s._v("响应结果json格式")]),s._v(" "),a("li",[s._v("错误信息(状态=0时，记录异常堆栈信息)")]),s._v(" "),a("li",[s._v("接口耗时（毫秒）")]),s._v(" "),a("li",[s._v("操作ip地址")]),s._v(" "),a("li",[s._v("操作ip地址归属地")]),s._v(" "),a("li",[s._v("操作人用户名")]),s._v(" "),a("li",[s._v("操作时间")])]),s._v(" "),a("h2",{attrs:{id:"涉及到的技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#涉及到的技术"}},[s._v("#")]),s._v(" 涉及到的技术")]),s._v(" "),a("ul",[a("li",[s._v("SpringBoot 2.7.13")]),s._v(" "),a("li",[s._v("MyBatis Plus")]),s._v(" "),a("li",[s._v("MySQL")]),s._v(" "),a("li",[s._v("ip2region：准确率99.9%的离线IP地址定位库，用于获取ip归属地")])]),s._v(" "),a("h2",{attrs:{id:"先带大家看下效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先带大家看下效果"}},[s._v("#")]),s._v(" 先带大家看下效果")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("启动应用：com.itsoku.lesson024.Lesson024Application")])]),s._v(" "),a("li",[a("p",[s._v("接口代码：com.itsoku.lesson024.controller.UserController")])]),s._v(" "),a("li",[a("p",[s._v("测试用例代码：UserController.http")])])]),s._v(" "),a("h2",{attrs:{id:"源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[s._v("#")]),s._v(" 源码解析")]),s._v(" "),a("h3",{attrs:{id:"操作日志表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作日志表"}},[s._v("#")]),s._v(" 操作日志表")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" t_oper_log_lesson024\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id，主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    log             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作日志'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("smallint")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'状态，0：异常，1：正常'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    param_json      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求参数json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    result_json     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'响应结果json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    error_msg       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'错误信息(status=0时，记录错误信息)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    cost_time       long "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'耗时（毫秒）'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    oper_ip         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作ip地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    oper_ip_address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作ip地址归属地'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    oper_user_name  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作人用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    oper_time       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作时间'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作日志表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"自定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义注解"}},[s._v("#")]),s._v(" 自定义注解")]),s._v(" "),a("p",[s._v("用于标注在Controller中需要记录操作日志的方法上。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OperLog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//日志内容")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"记录日志切面类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录日志切面类"}},[s._v("#")]),s._v(" 记录日志切面类")]),s._v(" "),a("blockquote",[a("p",[s._v("使用环绕通知，会拦截所有controller中标注有@OperLog注解的方法，会对这些方法记录日志，不管方法是成功还是失败都会记录")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lesson024"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("OperLogAspect")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用？")]),s._v(" "),a("p",[s._v("接口上标注@OprLog就可以了")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@OperLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户管理-新增用户"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Validated")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestBody")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserAddRequest")]),s._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResultUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"其他一些技术点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他一些技术点"}},[s._v("#")]),s._v(" 其他一些技术点")]),s._v(" "),a("h3",{attrs:{id:"操作日志中如何获取到操作人用户名的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作日志中如何获取到操作人用户名的"}},[s._v("#")]),s._v(" 操作日志中如何获取到操作人用户名的？")]),s._v(" "),a("p",[s._v("如下，咱们定义了一个接口，接口中有2个方法，一个用户设置用户名，一个用于获取用户名")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserNameProvider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 获取用户名\n     *\n     * @return\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 设置用户名\n     *\n     * @param userName\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这个接口有个默认实现，是将用户名放在ThreadLocal中，大家可以根据自己的项目情况，去自己实现一个IUserNameProvider")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocalUserNameProvider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserNameProvider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" userNameTl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userNameTl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userNameTl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("那么这个用户名什么时候放进去的呢？代码如下，咱们搞了个拦截器，拦截请求，从请求中我们可以想办法拿到用户名，然后将其塞到IUserNameProvider中，这样记录操作日志的aop中，就可以通过IUserNameProvider获取到了。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserNameInterceptor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerInterceptor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserNameProvider")]),s._v(" userNameProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里从请求中得到用户名，然后塞到userNameProvider中")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"路人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userNameProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerInterceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"ip地址如何获取的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip地址如何获取的"}},[s._v("#")]),s._v(" ip地址如何获取的？")]),s._v(" "),a("p",[s._v("这里我们提供了一个工具类，可以通过请求拿到ip，具体代码在下面这个位置")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lesson024"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("IpUtils")]),s._v("#"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getIpAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"ip归属地如何获取的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip归属地如何获取的"}},[s._v("#")]),s._v(" ip归属地如何获取的？")]),s._v(" "),a("p",[s._v("对应的方法在下面这个位置，传入ip，可以获取到ip对应的归属地。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lesson024"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("IpAddressUtils")]),s._v("#getRegion\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里使用了开源的一个工具：ip2region，准确率99.9%的离线IP地址定位库")]),s._v(" "),a("p",[s._v("项目地址：https://gitee.com/lionsoul/ip2region")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240422160444704.png",alt:"image-20240422160444704"}})]),s._v(" "),a("h2",{attrs:{id:"案例源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例源码"}},[s._v("#")]),s._v(" 案例源码")]),s._v(" "),a("p",[s._v("源码同样是放在我的《高并发&微服务&性能调优实战案例100讲》的代码中（lesson024模块中），有兴趣的可以点击左下角的小黄车了解下，感谢大家的观看。")]),s._v(" "),a("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),a("h2",{attrs:{id:"已更新-24-节课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已更新-24-节课"}},[s._v("#")]),s._v(" 已更新 24 节课")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，含所有源码 & 文档 & 技术支持，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 一个业务太复杂了，方法太多，如何传参？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" 线程数据共享必学的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个工具类："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.")]),s._v(" 大批量任务处理常见的方案（模拟余额宝发放收益）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.")]),s._v(" 并发环境下，如何验证代码是否正常？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySql")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redis")]),s._v("数据一致性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("数据脱敏优雅设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.")]),s._v(" 一行代码搞定系统操作日志\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),a("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),a("ol",[a("li",[s._v("分片上传实战")]),s._v(" "),a("li",[s._v("通用并发处理工具类实战")]),s._v(" "),a("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),a("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),a("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),a("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),a("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),a("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),a("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),a("li",[s._v("动态线程池")]),s._v(" "),a("li",[s._v("SpringBoot实现动态Job实战")]),s._v(" "),a("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),a("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),a("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),a("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),a("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),a("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),a("li",[s._v("线程数据共享必学的3个工具类：ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),a("li",[s._v("通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),a("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),a("li",[s._v("并发环境下，如何验证代码是否正常？")]),s._v(" "),a("li",[s._v("MySql和Redis数据一致性")]),s._v(" "),a("li",[s._v("SpringBoot数据脱敏优雅设计与实现")]),s._v(" "),a("li",[s._v("一行代码搞定系统操作日志")]),s._v(" "),a("li",[s._v("AOP实现MyBatis分页功能")]),s._v(" "),a("li",[s._v("SpringBoot读写分离实战")]),s._v(" "),a("li",[s._v("MQ专题：事务消息实战（防止消息丢失）")]),s._v(" "),a("li",[s._v("MQ专题：消息消息重试策略")]),s._v(" "),a("li",[s._v("MQ专题：消息幂等消费通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),a("li",[s._v("分布式事务：事务消息实现事务最终一致性")]),s._v(" "),a("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),a("li",[s._v("分布式锁案例实战")]),s._v(" "),a("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),a("li",[s._v("微服务链路日志追踪实战（原理&代码落地）")]),s._v(" "),a("li",[s._v("SpringBoot实现租户数据隔离")]),s._v(" "),a("li",[s._v("MyBatis进阶：封装MyBatis，实现通用的无SQL版CRUD功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：自己实现通用分表功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：实现多租户隔离ORM框架")]),s._v(" "),a("li",[s._v("SpringBoot中实现自动监听PO的变化，自动生成表结构")]),s._v(" "),a("li",[s._v("分布式专题：其他实战课程等")]),s._v(" "),a("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),a("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),a("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),a("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),a("li",[s._v("性能调优：远程debug")]),s._v(" "),a("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),a("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),a("li",[s._v("Redis场景案例。。。")]),s._v(" "),a("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),a("li",[s._v("其他等各种实战案例。。。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);