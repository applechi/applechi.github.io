(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{394:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"第19节-通过aop统一打印请求链路日志-排错效率飞升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第19节-通过aop统一打印请求链路日志-排错效率飞升"}},[s._v("#")]),s._v(" 第19节 通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),a("p",[s._v("看过本文并实施之后，解决问题的效率将大幅提升。")]),s._v(" "),a("p",[a("span",{staticStyle:{color:"red","font-weight":"bold"}},[s._v("案例代码和文档，同样是放在我的《高并发 & 微服务 & 性能调优案例实战100讲中》，有需要的小伙伴，可以点击左下角小黄车下单后获取")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"思考一个问题-当一个接口报错的时候-如何能够快速定位问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考一个问题-当一个接口报错的时候-如何能够快速定位问题"}},[s._v("#")]),s._v(" 思考一个问题：当一个接口报错的时候，如何能够快速定位问题？")]),s._v(" "),a("p",[s._v("如果能够满足下面这些条件，咱们就可以快速定位错误")]),s._v(" "),a("ol",[a("li",[s._v("能够快速找到接口的详细调用日志")]),s._v(" "),a("li",[s._v("日志中最好知道出错的是哪个接口的哪个方法，即哪个controller的哪个方法")]),s._v(" "),a("li",[s._v("日志中最好有接口的入参、返参")]),s._v(" "),a("li",[s._v("日志中含有异常的详细堆栈信息（即：哪行代码报的错）")])]),s._v(" "),a("p",[s._v("有了这些信息之后，解决问题的效率将大幅提升。")]),s._v(" "),a("p",[s._v("本文就是帮你解决这些问题。")]),s._v(" "),a("h2",{attrs:{id:"下面-先带大家看效果-再看代码如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下面-先带大家看效果-再看代码如何实现"}},[s._v("#")]),s._v(" 下面，先带大家看效果，再看代码如何实现")]),s._v(" "),a("h3",{attrs:{id:"启动案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动案例"}},[s._v("#")]),s._v(" 启动案例")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lesson019"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Lesson019Application")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"访问一个正常的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问一个正常的接口"}},[s._v("#")]),s._v(" 访问一个正常的接口")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("//localhost:8080/userAdd?userName=路人&age=35&password=123456")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"先看下接口的返回值-里面有个traceid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先看下接口的返回值-里面有个traceid"}},[s._v("#")]),s._v(" 先看下接口的返回值，里面有个traceId")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"traceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b910649f02514cae8b015a862c7f6dca"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"拿着这个traceid的值-可以找到这个请求完整的日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拿着这个traceid的值-可以找到这个请求完整的日志"}},[s._v("#")]),s._v(" 拿着这个traceId的值，可以找到这个请求完整的日志")]),s._v(" "),a("p",[s._v("看后端控制台，通过traceId的值去检索，如下，可以看到接口的详细执行日志，包含（接口url、开始时间、结束时间、及处理这个请求的controller和方法、还有方法的入参、返回值，都输出了），前端给我们这个traceId，我们便可以快速定位到这个请求的完整调用日志。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240414160934535.png",alt:"image-20240414160934535"}})]),s._v(" "),a("h3",{attrs:{id:"再来看请求一个异常的接口-浏览器中打开下面地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再来看请求一个异常的接口-浏览器中打开下面地址"}},[s._v("#")]),s._v(" 再来看请求一个异常的接口，浏览器中打开下面地址")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("//localhost:8080/login?name=张三")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"浏览器中显示如下-可以看出接口报错了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中显示如下-可以看出接口报错了"}},[s._v("#")]),s._v(" 浏览器中显示如下，可以看出接口报错了")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名无效"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"traceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a3b2d88c85134e5dad4d3d7ccd8cd892"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"我们可以拿着上面的traceid的值-去后端控制台找对应的日志-看到的结果如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我们可以拿着上面的traceid的值-去后端控制台找对应的日志-看到的结果如下"}},[s._v("#")]),s._v(" 我们可以拿着上面的traceId的值，去后端控制台找对应的日志，看到的结果如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20240414161520911.png",alt:"image-20240414161520911"}})]),s._v(" "),a("h2",{attrs:{id:"源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[s._v("#")]),s._v(" 源码解析")]),s._v(" "),a("h3",{attrs:{id:"controllerlogaspect-打印接口的详细日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controllerlogaspect-打印接口的详细日志"}},[s._v("#")]),s._v(" ControllerLogAspect：打印接口的详细日志")]),s._v(" "),a("h3",{attrs:{id:"tracefilter-生成唯一的traceid-日志中会输出这个tracid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracefilter-生成唯一的traceid-日志中会输出这个tracid"}},[s._v("#")]),s._v(" TraceFilter：生成唯一的traceId，日志中会输出这个tracId")]),s._v(" "),a("h3",{attrs:{id:"resulttraceidaspect-将traceid统一丢到响应结果result类的traceid字段中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resulttraceidaspect-将traceid统一丢到响应结果result类的traceid字段中"}},[s._v("#")]),s._v(" ResultTraceIdAspect：将traceId统一丢到响应结果Result类的traceId字段中")]),s._v(" "),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[s._v("#")]),s._v(" 源码")]),s._v(" "),a("p",[s._v("源码同样是放在我的《高并发&微服务&性能调优实战案例100讲》的代码中（lesson019模块中），有兴趣的可以点击左下角的小黄车了解下，感谢大家的观看。")]),s._v(" "),a("h2",{attrs:{id:"下节内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下节内容"}},[s._v("#")]),s._v(" 下节内容")]),s._v(" "),a("p",[s._v("大批量任务处理常见的方案，会（模拟余额宝发放收益）这个场景。")]),s._v(" "),a("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),a("h2",{attrs:{id:"已更新-19-节课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已更新-19-节课"}},[s._v("#")]),s._v(" 已更新 19 节课")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" 使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 复杂业务，如何传参？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),a("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("ol",[a("li",[s._v("分片上传实战")]),s._v(" "),a("li",[s._v("通用并发处理工具类实战")]),s._v(" "),a("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),a("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),a("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),a("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),a("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),a("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),a("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),a("li",[s._v("动态线程池")]),s._v(" "),a("li",[s._v("使用SpringBoot实现动态Job实战")]),s._v(" "),a("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),a("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),a("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),a("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),a("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),a("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),a("li",[s._v("ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),a("li",[s._v("AOP实战接口日志打印功能")]),s._v(" "),a("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),a("li",[s._v("AOP实现业务操作日志记录功能")]),s._v(" "),a("li",[s._v("AOP实现MyBatis分页功能")]),s._v(" "),a("li",[s._v("SpringBoot读写分离实战")]),s._v(" "),a("li",[s._v("MQ专题：事务消息实战（防止消息丢失）")]),s._v(" "),a("li",[s._v("MQ专题：消息消息重试策略")]),s._v(" "),a("li",[s._v("MQ专题：消息幂等消费通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),a("li",[s._v("分布式事务：使用事务消息实现事务最终一致性")]),s._v(" "),a("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),a("li",[s._v("分布式锁案例实战")]),s._v(" "),a("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),a("li",[s._v("微服务链路日志追踪实战（原理&代码落地）")]),s._v(" "),a("li",[s._v("SpringBoot实现租户数据隔离")]),s._v(" "),a("li",[s._v("MyBatis进阶：封装MyBatis，实现通用的无SQL版CRUD功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：自己实现通用分表功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：实现多租户隔离ORM框架")]),s._v(" "),a("li",[s._v("SpringBoot中实现自动监听PO的变化，自动生成表结构")]),s._v(" "),a("li",[s._v("分布式专题：其他实战课程等")]),s._v(" "),a("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),a("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),a("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),a("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),a("li",[s._v("性能调优：远程debug")]),s._v(" "),a("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),a("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),a("li",[s._v("redis一些使用场景案例。。。")]),s._v(" "),a("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),a("li",[s._v("其他等各种实战案例。。。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);