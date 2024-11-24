(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{402:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),t("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),t("h1",{attrs:{id:"第21节-如何判断代码在并发情况下会否安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第21节-如何判断代码在并发情况下会否安全"}},[s._v("#")]),s._v(" 第21节 如何判断代码在并发情况下会否安全？")]),s._v(" "),t("p",[t("span",{staticStyle:{color:"red","font-weight":"bold"}},[s._v("案例代码和文档，同样是放在我的《高并发 & 微服务 & 性能调优案例实战100讲中》，有需要的小伙伴，可以点击左下角小黄车获取")])]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("1、比如我们写了个扣库存的方法，怎么知道此方法在并发情况下，是否会超卖？")]),s._v(" "),t("p",[s._v("2、或者其他一些类似的业务操作，怎么知道他们在并发的情况下，有没有问题？")]),s._v(" "),t("p",[t("strong",[s._v("这种问题统称为：在并发情况下，如何确定咱们的代码是否和预期的一致")])]),s._v(" "),t("p",[s._v("常用的方法，并发压测，但是有些情况可能不一定好测试，那么我们没有更简单的方法可以验证呢？")]),s._v(" "),t("p",[s._v("本文给大家介绍一种我自己用过的，感觉还不错。")]),s._v(" "),t("p",[s._v("下面通过2个案例，让大家看下这种方法怎么使用。")]),s._v(" "),t("h2",{attrs:{id:"案例1-下面来看一个减库存的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例1-下面来看一个减库存的操作"}},[s._v("#")]),s._v(" 案例1：下面来看一个减库存的操作")]),s._v(" "),t("h3",{attrs:{id:"商品表-t-goods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#商品表-t-goods"}},[s._v("#")]),s._v(" 商品表（t_goods）")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("goodsId")]),s._v(" "),t("td",[s._v("int")]),s._v(" "),t("td",[s._v("商品id")])]),s._v(" "),t("tr",[t("td",[s._v("stock")]),s._v(" "),t("td",[s._v("int")]),s._v(" "),t("td",[s._v("库存")])])])]),s._v(" "),t("h3",{attrs:{id:"扣减库存代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扣减库存代码"}},[s._v("#")]),s._v(" 扣减库存代码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Goods")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//商品id")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//库存")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" stock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 扣减库存\n * @param goodsId 商品id\n * @param num 扣减的数量\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rollback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduceStock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step1:根据商品id查询出商品信息")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Goods")]),s._v(" goods "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" select goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stock where t_goods where goodsId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step2:扣减库存")]),s._v("\n\tgoods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step3:将商品信息保存到db")]),s._v("\n\tupdate t_goods set stock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" where goodsId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("假设goodsId=1的商品库存是10，下面模拟2个线程同时对这个商品下单，购买的数量都是10")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("时间点")]),s._v(" "),t("th",[s._v("步骤")]),s._v(" "),t("th",[s._v("thread1")]),s._v(" "),t("th",[s._v("thread2")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("T1")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("入参：（goodsId：1，num：10）")]),s._v(" "),t("td",[s._v("入参：（goodsId：1，num：10）")])]),s._v(" "),t("tr",[t("td",[s._v("T2")]),s._v(" "),t("td",[s._v("step1")]),s._v(" "),t("td",[s._v("goodsId：1，stock：10")]),s._v(" "),t("td",[s._v("goodsId：1，stock：10")])]),s._v(" "),t("tr",[t("td",[s._v("T3")]),s._v(" "),t("td",[s._v("step2")]),s._v(" "),t("td",[s._v("goods.stock = 10-10 = 0")]),s._v(" "),t("td",[s._v("goods.stock = 10-10 = 0")])]),s._v(" "),t("tr",[t("td",[s._v("T4")]),s._v(" "),t("td",[s._v("step3")]),s._v(" "),t("td",[s._v("update t_goods set stock = 0 where goodsId = 1;")]),s._v(" "),t("td",[s._v("update t_goods set stock = 0 where goodsId = 1;")])]),s._v(" "),t("tr",[t("td",[s._v("T5")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("更新成功，库存变成0了")]),s._v(" "),t("td",[s._v("更新成功，库存变成0了")])])])]),s._v(" "),t("p",[s._v("这样最后两个线程都下单成功了，原本库存是10，但是2个线程共买了20件商品，超卖了。")]),s._v(" "),t("h2",{attrs:{id:"案例2-调整扣减库存的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例2-调整扣减库存的代码"}},[s._v("#")]),s._v(" 案例2：调整扣减库存的代码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 扣减库存\n * @param goodsId 商品id\n * @param num 扣减的数量\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rollback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduceStock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step1:通过sql扣减库存，where中加了个条件 stock-#{num}>=0")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" upCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("update t_goods \n                   \t\tset stock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                   \t\twhere \n                   \t\t\tgoodsId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n                   \t\t\tand stock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("#"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("upCount"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//扣减库存成功，执行后续业务代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//扣减库存失败，抛出异常，让事务回滚")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"库存不足，下单失败"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"验证-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证-2"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("同样，也是模拟2个线程对商品1同时下单，购买数量都是10")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("时间点")]),s._v(" "),t("th",[s._v("步骤")]),s._v(" "),t("th",[s._v("thread1")]),s._v(" "),t("th",[s._v("thread2")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("T1")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("入参：（goodsId：1，num：10）")]),s._v(" "),t("td",[s._v("入参：（goodsId：1，num：10）")])]),s._v(" "),t("tr",[t("td",[s._v("T2")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("spring开启db事务")]),s._v(" "),t("td",[s._v("spring开启db事务")])]),s._v(" "),t("tr",[t("td",[s._v("T3")]),s._v(" "),t("td",[s._v("step1")]),s._v(" "),t("td",[s._v("int upCount = (update t_goods "),t("br"),s._v("                   \t\tset stock = stock - 10"),t("br"),s._v("                   \t\twhere "),t("br"),s._v("                   \t\t\tgoodsId = 1 "),t("br"),s._v("                   \t\t\tand stock-10>=0)")]),s._v(" "),t("td",[s._v("int upCount = (update t_goods "),t("br"),s._v("                   \t\tset stock = stock - 10"),t("br"),s._v("                   \t\twhere "),t("br"),s._v("                   \t\t\tgoodsId = 1 "),t("br"),s._v("                   \t\t\tand stock-10>=0)")])]),s._v(" "),t("tr",[t("td",[s._v("T4")]),s._v(" "),t("td",[s._v("step2")]),s._v(" "),t("td",[s._v("upCount = 1"),t("br"),s._v("扣减库存成功")]),s._v(" "),t("td",[s._v("upCount = 0"),t("br"),s._v('throw new RuntimeException("库存不足，下单失败");')])]),s._v(" "),t("tr",[t("td",[s._v("T5")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("spring提交事务")]),s._v(" "),t("td",[s._v("spring回滚事务")])])])]),s._v(" "),t("p",[s._v("验证通过，和预期一样，没有超卖。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("上面通过2个案例，介绍了下如何验证代码的并发安全性，有些更复杂的场景可能2个线程还无法验证出来，此时可以横线再加入一些线程来验证。")]),s._v(" "),t("p",[s._v("或者使用第2节介绍的任务批处理工具并行测试下。")]),s._v(" "),t("h1",{attrs:{id:"高并发-微服务-性能调优实战案例100讲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高并发-微服务-性能调优实战案例100讲"}},[s._v("#")]),s._v(" 高并发 & 微服务 & 性能调优实战案例100讲")]),s._v(" "),t("h2",{attrs:{id:"已更新-21-节课"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已更新-21-节课"}},[s._v("#")]),s._v(" 已更新 21 节课")]),s._v(" "),t("p",[t("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 分片上传实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 通用并发处理工具类实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 实现一个好用接口性能压测工具类\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 超卖问题的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，也是防止并发修改数据出错的通用方案\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semaphore")]),s._v("实现接口限流实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v(" 并行查询，优化接口响应速度实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.")]),s._v(" 接口性能优化之大事务优化\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v(" 通用的"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Excel")]),s._v("动态导出功能实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.")]),s._v(" 手写线程池管理器，管理"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("监控所有线程池\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),s._v(" 动态线程池\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.")]),s._v(" 使用"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBoot")]),s._v("实现动态"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v("实战\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.")]),s._v(" 并行查询，性能优化利器，可能有坑\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.")]),s._v(" 幂等的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("种解决方案，吃透幂等性问题\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.")]),s._v(" 接口通用返回值设计与实现\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.")]),s._v(" 接口太多，各种dto、vo不计其数，如何命名？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.")]),s._v(" 复杂业务，如何传参？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.")]),s._v(" 接口报错，如何快速定位日志？\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.")]),s._v(" 线程数据共享必学的"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个工具类："),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadLocal")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InheritableThreadLocal")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TransmittableThreadLocal")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.")]),s._v(" 通过"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v("统一打印请求链路日志，排错效率飞升\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.")]),s._v(" 大批量任务处理常见的方案（模拟余额宝发放收益）\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.")]),s._v(" 并发情况下，如何验证代码是否安全？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"课程部分大纲-连载中。。。。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课程部分大纲-连载中。。。。"}},[s._v("#")]),s._v(" 课程部分大纲，连载中。。。。")]),s._v(" "),t("p",[s._v("以下课程均来源于个人多年的实战，均提供原理讲解 && 源码落地")]),s._v(" "),t("p",[t("span",{staticStyle:{"font-weight":"bold",color:"red"}},[s._v("目前整个课程59块钱，一杯咖啡的价格，还没下手的朋友，赶紧了，马上要涨价了")]),s._v("。")]),s._v(" "),t("ol",[t("li",[s._v("分片上传实战")]),s._v(" "),t("li",[s._v("通用并发处理工具类实战")]),s._v(" "),t("li",[s._v("实现一个好用接口性能压测工具类")]),s._v(" "),t("li",[s._v("超卖问题的4种解决方案，也是防止并发修改数据出错的通用方案")]),s._v(" "),t("li",[s._v("Semaphore实现接口限流实战")]),s._v(" "),t("li",[s._v("并行查询，优化接口响应速度实战")]),s._v(" "),t("li",[s._v("接口性能优化之大事务优化")]),s._v(" "),t("li",[s._v("通用的Excel动态导出功能实战")]),s._v(" "),t("li",[s._v("手写线程池管理器，管理&监控所有线程池")]),s._v(" "),t("li",[s._v("动态线程池")]),s._v(" "),t("li",[s._v("使用SpringBoot实现动态Job实战")]),s._v(" "),t("li",[s._v("并行查询，性能优化利器，可能有坑")]),s._v(" "),t("li",[s._v("幂等的4种解决方案，吃透幂等性问题")]),s._v(" "),t("li",[s._v("接口通用返回值设计与实现")]),s._v(" "),t("li",[s._v("接口太多，各种dto、vo不计其数，如何命名？")]),s._v(" "),t("li",[s._v("一个业务太复杂了，方法太多，如何传参？")]),s._v(" "),t("li",[s._v("接口报错，如何快速定位日志？")]),s._v(" "),t("li",[s._v("ThreadLocal、InheritableThreadLocal、TransmittableThreadLocal")]),s._v(" "),t("li",[s._v("通过AOP统一打印请求链路日志，排错效率飞升")]),s._v(" "),t("li",[s._v("大批量任务处理常见的方案（模拟余额宝发放收益）")]),s._v(" "),t("li",[s._v("并发情况下，如何验证代码是否安全？")]),s._v(" "),t("li",[s._v("MySql和Redis数据一致性")]),s._v(" "),t("li",[s._v("SpringBoot接口返回值脱敏")]),s._v(" "),t("li",[s._v("AOP实现业务操作日志记录功能")]),s._v(" "),t("li",[s._v("AOP实现MyBatis分页功能")]),s._v(" "),t("li",[s._v("SpringBoot读写分离实战")]),s._v(" "),t("li",[s._v("MQ专题：事务消息实战（防止消息丢失）")]),s._v(" "),t("li",[s._v("MQ专题：消息消息重试策略")]),s._v(" "),t("li",[s._v("MQ专题：消息幂等消费通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：延迟消息通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：顺序消息通用方案实战")]),s._v(" "),t("li",[s._v("MQ专题：消息积压问题")]),s._v(" "),t("li",[s._v("分布式事务：使用事务消息实现事务最终一致性")]),s._v(" "),t("li",[s._v("分布式事务：通用的TCC分布式事务生产级代码落地实战")]),s._v(" "),t("li",[s._v("分布式锁案例实战")]),s._v(" "),t("li",[s._v("微服务中如何传递上下文？实战")]),s._v(" "),t("li",[s._v("微服务链路日志追踪实战（原理&代码落地）")]),s._v(" "),t("li",[s._v("SpringBoot实现租户数据隔离")]),s._v(" "),t("li",[s._v("MyBatis进阶：封装MyBatis，实现通用的无SQL版CRUD功能，架构师必备")]),s._v(" "),t("li",[s._v("MyBatis进阶：自己实现通用分表功能，架构师必备")]),s._v(" "),t("li",[s._v("MyBatis进阶：实现多租户隔离ORM框架")]),s._v(" "),t("li",[s._v("SpringBoot中实现自动监听PO的变化，自动生成表结构")]),s._v(" "),t("li",[s._v("分布式专题：其他实战课程等")]),s._v(" "),t("li",[s._v("性能调优：如何排查死锁？")]),s._v(" "),t("li",[s._v("性能调优：如何排查内存溢出？")]),s._v(" "),t("li",[s._v("性能调优：CPU被打满，如何排查？")]),s._v(" "),t("li",[s._v("性能调优：生产代码没生效，如何定位？")]),s._v(" "),t("li",[s._v("性能调优：接口太慢，如何定位？")]),s._v(" "),t("li",[s._v("性能调优：如何查看生产上接口的入参和返回值？")]),s._v(" "),t("li",[s._v("性能调优：远程debug")]),s._v(" "),t("li",[s._v("生产上出现了各种故障，如何定位？")]),s._v(" "),t("li",[s._v("db和缓存一致性，常见的方案")]),s._v(" "),t("li",[s._v("redis一些使用场景案例。。。")]),s._v(" "),t("li",[s._v("系统资金账户设计案例（一些系统涉及到资金操作）")]),s._v(" "),t("li",[s._v("其他等各种实战案例。。。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);