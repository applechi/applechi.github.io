(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{391:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"第15节-解决dto、vo泛滥-命名困难的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第15节-解决dto、vo泛滥-命名困难的问题"}},[s._v("#")]),s._v(" 第15节 解决DTO、VO泛滥，命名困难的问题")]),s._v(" "),a("h2",{attrs:{id:"痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#痛点"}},[s._v("#")]),s._v(" 痛点")]),s._v(" "),a("p",[s._v("有些项目接口很多，而接口入参一般我们使用XxxDTO这种类型参数，返回值通常使用XxxVO这种类型，很多开发按照自己项目搞事情，时间久了，导致系统中充斥着大量的dto、vo命名的类，各种命名千奇百怪。")]),s._v(" "),a("p",[s._v("问题来了，然后我们再添加新的接口的时候，入参和返回值不知道如何命名了，大家有没有这种经历？")]),s._v(" "),a("h2",{attrs:{id:"如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决"}},[s._v("#")]),s._v(" 如何解决？")]),s._v(" "),a("p",[s._v("当我们遇到问题的时候，别人肯定也会遇到这种问题。")]),s._v(" "),a("p",[s._v("那我们就去看高手遇到这种问题的时候，是如何解决的？")]),s._v(" "),a("p",[s._v("elasticsearch，这个框架框架大家应该比较熟悉吧，非常出名的一个搜索引擎解决方案，他通过restfull接口对外提供搜索服务。")]),s._v(" "),a("p",[s._v("我们来看一下他在SpringBoot中的源码，需要在SpringBoot中引入下面配置，然后可看到的他的源码。")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-boot-starter-data-elasticsearch"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("看下面这个类，这个就是elasticsearch为springboot端提供的一个用于调用elasticsearch服务端接口的工具类")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("co"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("ElasticsearchClient")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面是一些方法的定义，大家先看下")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IndexResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IndexRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReindexResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reindex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReindexRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteByQueryResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteByQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteByQueryRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteScriptResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeleteScriptRequest")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("不知道大家有没有发现规律，可能有些朋友已经看出来了，上面方法的特点")]),s._v(" "),a("ul",[a("li",[s._v("入参的类型是：方法名称+Request")]),s._v(" "),a("li",[s._v("返回值的类型是：方法名称+Response")])]),s._v(" "),a("p",[s._v("大家觉得这种怎么样？本人觉得这种方式挺好的，最少解决了我们命名的痛点")]),s._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),a("p",[s._v("再来给大家看一下我写的接口的命名，和上面es的也类似，大家也可以看下。"),a("img",{attrs:{src:"/img/image-20240410131448057.png",alt:"image-20240410131448057"}})]),s._v(" "),a("h2",{attrs:{id:"大家有什么更好的方法呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大家有什么更好的方法呢"}},[s._v("#")]),s._v(" 大家有什么更好的方法呢？")]),s._v(" "),a("p",[s._v("这个问题本身缺少规范导致的问题，如果规范中能够指引大家很容易的解决这个问题，那就没有这个痛点了。")]),s._v(" "),a("p",[s._v("大家在项目中有没有碰到这个问题呢？你们是如何解决的？可以留言一起交流")]),s._v(" "),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[s._v("#")]),s._v(" 源码")]),s._v(" "),a("p",[s._v("源码同样是放在我的《高并发&微服务&性能调优实战案例100讲》的代码中，有兴趣的可以点击左下角的小黄车了解下，感谢大家的观看。")]),s._v(" "),a("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),a("h2",{attrs:{id:"已更新-15-节课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已更新-15-节课"}},[s._v("#")]),s._v(" 已更新 15 节课")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" 使用"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),a("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),a("p",[a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),a("ol",[a("li",[s._v("分片上传实战")]),s._v(" "),a("li",[s._v("通用并发处理工具类实战")]),s._v(" "),a("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),a("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),a("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),a("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),a("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),a("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),a("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),a("li",[s._v("动态线程池")]),s._v(" "),a("li",[s._v("使用SpringBoot实现动态Job实战")]),s._v(" "),a("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),a("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),a("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),a("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),a("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),a("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),a("li",[s._v("AOP实战接口日志打印功能")]),s._v(" "),a("li",[s._v("AOP实现业务操作日志记录功能")]),s._v(" "),a("li",[s._v("AOP实现MyBatis分页功能")]),s._v(" "),a("li",[s._v("SpringBoot读写分离实战")]),s._v(" "),a("li",[s._v("MQ专题：事务消息实战（防止消息丢失）")]),s._v(" "),a("li",[s._v("MQ专题：消息消息重试策略")]),s._v(" "),a("li",[s._v("MQ专题：消息幂等消费通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),a("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),a("li",[s._v("分布式事务：使用事务消息实现事务最终一致性")]),s._v(" "),a("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),a("li",[s._v("分布式锁案例实战")]),s._v(" "),a("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),a("li",[s._v("微服务链路日志追踪实战（原理&代码落地）")]),s._v(" "),a("li",[s._v("SpringBoot实现租户数据隔离")]),s._v(" "),a("li",[s._v("MyBatis进阶：封装MyBatis，实现通用的无SQL版CRUD功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：自己实现通用分表功能，架构师必备")]),s._v(" "),a("li",[s._v("MyBatis进阶：实现多租户隔离ORM框架")]),s._v(" "),a("li",[s._v("SpringBoot中实现自动监听PO的变化，自动生成表结构")]),s._v(" "),a("li",[s._v("分布式专题：其他实战课程等")]),s._v(" "),a("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),a("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),a("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),a("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),a("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),a("li",[s._v("性能调优：远程debug")]),s._v(" "),a("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),a("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),a("li",[s._v("redis一些使用场景案例。。。")]),s._v(" "),a("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),a("li",[s._v("其他等各种实战案例。。。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);