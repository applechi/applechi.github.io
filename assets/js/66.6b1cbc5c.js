(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{380:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("高并发、微服务 、性能调优实战案例100讲，所有案例均源于个人工作实战，均配合代码落地")])]),s._v(" "),a("p",[s._v("加我微信：itsoku，所有案例均提供在线答疑。")]),s._v(" "),a("h1",{attrs:{id:"多线程任务批处理通用工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程任务批处理通用工具类"}},[s._v("#")]),s._v(" 多线程任务批处理通用工具类")]),s._v(" "),a("h2",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),a("p",[s._v("使用线程池批量发送短信，当短信发送完毕之后，方法继续向下走。")]),s._v(" "),a("h2",{attrs:{id:"技术点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术点"}},[s._v("#")]),s._v(" 技术点")]),s._v(" "),a("ul",[a("li",[s._v("线程池：ExecutorService")]),s._v(" "),a("li",[s._v("CountDownLatch：可以让一个或者多个线程等待一批任务执行完毕之后，继续向下走")])]),s._v(" "),a("h2",{attrs:{id:"新手版代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新手版代码实现"}},[s._v("#")]),s._v(" 新手版代码实现")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("SimpleBatchTask")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"高手如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高手如何实现"}},[s._v("#")]),s._v(" 高手如何实现？")]),s._v(" "),a("p",[s._v("这个场景属于通用型的场景，很多业务都会用到，将通用的代码提取出来，可以丢到一个工具类中来实现这个功能。")]),s._v(" "),a("p",[s._v("下面来看下高手版如何实现。")]),s._v(" "),a("h2",{attrs:{id:"高手版代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高手版代码实现"}},[s._v("#")]),s._v(" 高手版代码实现")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itsoku"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("TaskDisposeUtils")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("重点在于下面2行代码，简化了很多")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" executorService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//调用工具类批处理任务")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TaskDisposeUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("taskList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TaskDisposeUtils")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("disposeTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" executorService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"源码如何获取-加我微信-itsoku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码如何获取-加我微信-itsoku"}},[s._v("#")]),s._v(" 源码如何获取？加我微信：itsoku")]),s._v(" "),a("p",[s._v("视频号：程序员路人甲")]),s._v(" "),a("p",[s._v("公众号：路人甲Java")]),s._v(" "),a("p",[s._v("个人网站：http://itsoku.com/")]),s._v(" "),a("h2",{attrs:{id:"所有案例均提供在线技术支持-答疑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所有案例均提供在线技术支持-答疑"}},[s._v("#")]),s._v(" 所有案例均提供在线技术支持&答疑")])])}),[],!1,null,null,null);a.default=n.exports}}]);