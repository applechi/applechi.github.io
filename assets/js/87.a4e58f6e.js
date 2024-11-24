(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{403:function(s,t,a){"use strict";a.r(t);var v=a(8),_=Object(v.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),t("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),t("h1",{attrs:{id:"第22节-mysql和redis数据一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第22节-mysql和redis数据一致性"}},[s._v("#")]),s._v(" 第22节 MySql和Redis数据一致性")]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("假如我们有个电商系统，为了提升商品详情页访问速度，我们使用redis来缓存商品信息，提升效率。")]),s._v(" "),t("p",[s._v("获取商品信息，先从redis中获取，如果没有，则从db中获取后丢到redis，然后返回。")]),s._v(" "),t("p",[s._v("而后台又可以修改商品的信息，这时如何确保redis和缓存数据一致呢？")]),s._v(" "),t("p",[s._v("即：如何确保通过商品详情接口返回的数据和db中的数据是一致的？")]),s._v(" "),t("h2",{attrs:{id:"方案1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案1"}},[s._v("#")]),s._v(" 方案1")]),s._v(" "),t("h3",{attrs:{id:"准备一张表-商品表-t-goods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备一张表-商品表-t-goods"}},[s._v("#")]),s._v(" 准备一张表：商品表（t_goods）")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("goodsId")]),s._v(" "),t("td",[s._v("int")]),s._v(" "),t("td",[s._v("商品id")])]),s._v(" "),t("tr",[t("td",[s._v("stock")]),s._v(" "),t("td",[s._v("int")]),s._v(" "),t("td",[s._v("库存")])])])]),s._v(" "),t("h3",{attrs:{id:"获取商品详情接口逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取商品详情接口逻辑"}},[s._v("#")]),s._v(" 获取商品详情接口逻辑")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("step1：先从redis中获取，若能获取到，则直接返回，若没有继续向下\nstep2：从db中获取出商品信息\nstep3：放入redis\nstep4：返回商品信息\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"后台更新商品逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台更新商品逻辑"}},[s._v("#")]),s._v(" 后台更新商品逻辑")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("step1：更新商品到db\nstep2：删除redis中的对应的商品记录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"预期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预期"}},[s._v("#")]),s._v(" 预期")]),s._v(" "),t("p",[s._v("预期并发情况下，数据库中和redis中的数据应该是一致的，即看到的商品信息应该是一致的，比如db中库存是10，那么通过商品详情接口获取到的一定也是10。")]),s._v(" "),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("下面咱们来验证下，并发情况下，是否能够达到预期。")]),s._v(" "),t("p",[s._v("假如现在商品1的库存是10，下面模拟3个线程同时对商品1进行操作")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("时间点")]),s._v(" "),t("th",[s._v("thread1（执行更新商品）")]),s._v(" "),t("th",[s._v("thread2（调用获取商品信息接口）")]),s._v(" "),t("th",[s._v("thread3(调用获取商品信息接口)")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("T1")]),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step1")]),s._v("：从redis中发现没有商品")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T2")]),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step2")]),s._v("：从db中取出商品信息(goodsId：1，stock：10)")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T3")]),s._v(" "),t("td",[t("strong",[s._v("step1")]),s._v("：修改库存为0，"),t("br"),s._v("此时db中商品信息："),t("br"),s._v("（goodsId：1，stock：0）")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T4")]),s._v(" "),t("td",[t("strong",[s._v("step2")]),s._v("：删除redis中商品1的记录")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T5")]),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step3")]),s._v("：将数据写入redis（goodsId：1，stock：10）")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T6")]),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step4")]),s._v("：返回商品信息（goodsId：1，stock：10）")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("T7")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step1")]),s._v("：从redis获取商品信息，此时缓存中有数据")])]),s._v(" "),t("tr",[t("td",[s._v("T8")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[t("strong",[s._v("step2")]),s._v("：返回商品信息（goodId：1，stock：10）")])])])]),s._v(" "),t("p",[s._v("此时db中的数据和redis的数据并不是一致的。")]),s._v(" "),t("h2",{attrs:{id:"方案2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案2"}},[s._v("#")]),s._v(" 方案2")]),s._v(" "),t("h2",{attrs:{id:"如何解决这个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何解决这个问题"}},[s._v("#")]),s._v(" 如何解决这个问题")]),s._v(" "),t("p",[s._v("这个问题，大家应该看到很多相关的文章，比如提到的双删，双删可以最大限度的解决这个问题，但是极端情况下没有解决这个问题。")]),s._v(" "),t("p",[s._v("还有根据binlog更新缓存、通过MQ更新缓存，但是binlog的日志、mq的日志还未消费的这个时间段内，通过详情接口获取的数据可能和db中是不一致的，短暂的不一致，如果可以接受短暂的不一致，可以使用这两种方法。")]),s._v(" "),t("p",[s._v("下面给大家介绍一种可以实现强一致的方案，让详情接口返回的数据和db的商品数据是强一致的。")]),s._v(" "),t("p",[s._v("先分析下，导致这个不一致的原因，定位原因，解决方案就容易了。")]),s._v(" "),t("p",[s._v("如下图，主要是下图红框中的2个部分出现了并行导致的，如果让他们排队执行，这个问题是不是就化解了？")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20240416163212127.png",alt:"image-20240416163212127"}})]),s._v(" "),t("p",[s._v("如何让他们排队执行呢？加互斥锁，即其中一个在执行的时候，另一个需要等待，等前一个执行完毕之后，后一个才能执行。")]),s._v(" "),t("p",[s._v("由于我们的系统是集群部署的，所以需要分布式锁，这里我们我们使用数据的锁来解决这个问题。")]),s._v(" "),t("p",[s._v("下面带大家看下怎么实现的。")]),s._v(" "),t("h3",{attrs:{id:"商品更新逻辑调整如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#商品更新逻辑调整如下"}},[s._v("#")]),s._v(" 商品更新逻辑调整如下")]),s._v(" "),t("p",[s._v("大家先看下，重点在于step3，这里会对这条商品记录for update，如果有其他线程同样执行这个sql的时候，会等待，一直等待下面这个事务执行完毕才能继续。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("step1：开启数据库事务\nstep2：更新商品信息到db\nstep3：select "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from t_goods where t_goods "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstep4：删除redis中的对应的商品记录\nstep5：提交数据库事务\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"获取商品信息的接口调整如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取商品信息的接口调整如下"}},[s._v("#")]),s._v(" 获取商品信息的接口调整如下")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("step1：通过商品id，从redis中查询商品信息，如果可以找到，直接返回，否则继续向下\nstep2：开启数据库事务\nstep3：获取商品信息，获取的sql：select "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from t_goods where t_goods "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstep4：将商品信息写入redis\nstep5：提交事务\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这样如果商品信息在更新过程中，还没有提交事务的时候，此时如果有其他线程来获取商品信息，会走到获取商品信息接口的step3，这个地方会执行for update，会等待，等待商品更新的事务提交后，才能继续。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("从这个方案中，我们可以看出，并发问题看似比较复杂，但是将其转换为顺序执行，可能看似很复杂的问题，就被解决了。")]),s._v(" "),t("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),t("h2",{attrs:{id:"已更新-22-节课"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已更新-22-节课"}},[s._v("#")]),s._v(" 已更新 22 节课")]),s._v(" "),t("p",[t("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 一个业务太复杂了，方法太多，如何传参？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" 线程数据共享必学的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个工具类："),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.")]),s._v(" 大批量任务处理常见的方案（模拟余额宝发放收益）\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.")]),s._v(" 并发环境下，如何验证代码是否正常？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySql")]),s._v("和"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redis")]),s._v("数据一致性\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),t("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),t("p",[t("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),t("ol",[t("li",[s._v("分片上传实战")]),s._v(" "),t("li",[s._v("通用并发处理工具类实战")]),s._v(" "),t("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),t("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),t("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),t("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),t("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),t("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),t("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),t("li",[s._v("动态线程池")]),s._v(" "),t("li",[s._v("SpringBoot实现动态Job实战")]),s._v(" "),t("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),t("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),t("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),t("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),t("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),t("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),t("li",[s._v("线程数据共享必学的3个工具类：ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),t("li",[s._v("通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),t("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),t("li",[s._v("并发环境下，如何验证代码是否正常？")]),s._v(" "),t("li",[s._v("MySql和Redis数据一致性")]),s._v(" "),t("li",[s._v("SpringBoot接口返回值脱敏")]),s._v(" "),t("li",[s._v("AOP实现业务操作日志记录功能")]),s._v(" "),t("li",[s._v("AOP实现MyBatis分页功能")]),s._v(" "),t("li",[s._v("SpringBoot读写分离实战")]),s._v(" "),t("li",[s._v("MQ专题：事务消息实战（防止消息丢失）")]),s._v(" "),t("li",[s._v("MQ专题：消息消息重试策略")]),s._v(" "),t("li",[s._v("MQ专题：消息幂等消费通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),t("li",[s._v("分布式事务：事务消息实现事务最终一致性")]),s._v(" "),t("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),t("li",[s._v("分布式锁案例实战")]),s._v(" "),t("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),t("li",[s._v("微服务链路日志追踪实战（原理&代码落地）")]),s._v(" "),t("li",[s._v("SpringBoot实现租户数据隔离")]),s._v(" "),t("li",[s._v("MyBatis进阶：封装MyBatis，实现通用的无SQL版CRUD功能，架构师必备")]),s._v(" "),t("li",[s._v("MyBatis进阶：自己实现通用分表功能，架构师必备")]),s._v(" "),t("li",[s._v("MyBatis进阶：实现多租户隔离ORM框架")]),s._v(" "),t("li",[s._v("SpringBoot中实现自动监听PO的变化，自动生成表结构")]),s._v(" "),t("li",[s._v("分布式专题：其他实战课程等")]),s._v(" "),t("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),t("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),t("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),t("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),t("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),t("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),t("li",[s._v("性能调优：远程debug")]),s._v(" "),t("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),t("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),t("li",[s._v("Redis场景案例。。。")]),s._v(" "),t("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),t("li",[s._v("其他等各种实战案例。。。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);