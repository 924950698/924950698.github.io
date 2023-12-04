(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{357:function(e,a,v){"use strict";v.r(a);var t=v(10),_=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"存储篇优化-浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储篇优化-浏览器缓存"}},[e._v("#")]),e._v(" 存储篇优化 - 浏览器缓存")]),e._v(" "),a("p",[a("b",[e._v("浏览器缓存机制介绍与缓存策略剖析")])]),e._v(" "),a("p",[e._v("通过网络获取内容既速度缓慢又开销巨大。较大的响应需要在客户端与服务器之间进行多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费用。因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。")]),e._v(" "),a("p",[e._v("浏览器缓存四个方面：")]),e._v(" "),a("ol",[a("li",[e._v("Memory Cache")]),e._v(" "),a("li",[e._v("Service Worker Cache")]),e._v(" "),a("li",[e._v("HTTP Cache")]),e._v(" "),a("li",[e._v("Push Cache")])]),e._v(" "),a("h1",{attrs:{id:"http缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制"}},[e._v("#")]),e._v(" Http缓存机制")]),e._v(" "),a("p",[a("b",[e._v(" 强缓存 和 协商缓存 ")])]),e._v(" "),a("p",[e._v("优先级较高的是强缓存，在强缓存失败的情况下，才会走协商缓存。")]),e._v(" "),a("h3",[e._v(" 强缓存的特征 ")]),e._v(" "),a("p",[e._v("强缓存是利用 http 头中的 "),a("b",[a("font",{attrs:{color:"red",size:"4"}},[e._v(" Expires 和 Cache-Control ")])],1),e._v(" 两个字段来控制的。强缓存中，当请求再次发出时，浏览器会根据其中的 expires 和 cache-control 判断目标资源是否“命中”强缓存，若命中则直接从缓存中获取资源，"),a("b",[e._v("不会再与服务端发生通信。")])]),e._v(" "),a("p",[a("br"),e._v("命中强缓存的情况下，返回的 HTTP 状态码为 200 （如下图）。\n"),a("img",{attrs:{src:"https://i.loli.net/2020/03/10/4Dsx13dQkgcpjKf.png",alt:"微信图片_20200310141642.png"}})]),e._v(" "),a("p",[e._v("之前我们使用expires命中强缓存的方式："),a("br"),e._v(" 先通过expires设定一个时间戳，在浏览器请求服务器资源时，浏览器会先把本地时间和expires时间戳做对比，如果小于expires设定的时间，那么就取缓存中的数据。")]),e._v(" "),a("p",[a("br"),e._v(" "),a("code",[e._v("expires: Wed, 11 Sep 2019 16:12:18 GMT")])]),e._v(" "),a("p",[e._v("但是也存在问题：expirse最大的问题时对本地时间的依赖。如果客户端时间不准确或者服务器端与客户端的时间不一致，就受到了局限性。expirse无法达到我们的预期。")]),e._v(" "),a("p",[a("br"),e._v(" HTTP1.1新增了 Cache-Control字段来替代expirse完成任务。当下的前端项目中继续使用expirse唯一的目的就是向下兼容。")]),e._v(" "),a("p",[a("code",[e._v("cache-control: max-age=31536000")])]),e._v(" "),a("p",[e._v("在 Cache-Control 中，通过 max-age 来控制资源的有效期。max-age 不是一个时间戳，而是一个时间长度。在本例中，max-age 是 31536000 秒，它意味着该资源在 31536000 秒以内都是有效的，完美地规避了时间戳带来的潜在问题。")]),e._v(" "),a("p",[a("b",[e._v("Cache-Control 相对于 expires 更加准确，它的优先级也更高。当 Cache-Control 与 expires 同时出现时，我们以 Cache-Control 为准")])]),e._v(" "),a("h3",{attrs:{id:"cache-control-应用分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-应用分析"}},[e._v("#")]),e._v(" Cache-Control 应用分析")]),e._v(" "),a("p",[a("code",[e._v("cache-control: max-age=3600, s-maxage=31536000")])]),e._v(" "),a("p",[a("b",[e._v("s-maxage 优先级高于 max-age，两者同时出现时，优先考虑 s-maxage。如果 s-maxage 未过期，则向代理服务器请求其缓存内容。")])]),e._v(" "),a("p",[e._v("特殊的应用场景：在依赖各种代理的大型架构中，我们不得不考虑代理服务器的缓存问题。s-maxage 就是用于表示 cache 服务器上（比如 cache CDN）的缓存的有效时间的，并只对 public 缓存有效。")]),e._v(" "),a("p",[e._v("关于public缓存，集中总结下。")]),e._v(" "),a("h3",{attrs:{id:"public-与-private"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-与-private"}},[e._v("#")]),e._v(" public 与 private")]),e._v(" "),a("p",[e._v("public 与 private 是针对资源是否能够被代理服务缓存而存在的一组对立概念。")]),e._v(" "),a("p",[e._v("如果我们为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。private 为默认值。但多数情况下，public 并不需要我们手动设置，比如有很多线上网站的 cache-control 是这样的：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/03/10/jmnxGPTE4rQYLuv.png",alt:"微信图片_20200310144701.png"}})]),e._v(" "),a("p",[e._v("设置了s-maxage，没有设置public，cdn通过max-age依然得到答案--可以缓存。")]),e._v(" "),a("h3",{attrs:{id:"no-store与no-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-store与no-cache"}},[e._v("#")]),e._v(" no-store与no-cache")]),e._v(" "),a("p",[e._v("no-cache 绕开了浏览器：我们为资源设置了 no-cache 后，每一次发起请求都不会再去询问浏览器的缓存情况，而是直接向服务端去确认该资源是否过期（即走我们下文即将讲解的协商缓存的路线）。")]),e._v(" "),a("p",[a("br"),e._v("no-store 比较绝情，顾名思义就是不使用任何缓存策略。在 no-cache 的基础上，它连服务端的缓存确认也绕开了，只允许你直接向服务端发送请求、并下载完整的响应。")]),e._v(" "),a("h3",[e._v("协商缓存：浏览器与服务器合作之下的缓存策略")]),e._v(" "),a("p",[e._v("协商缓存依赖于服务端与浏览器之间的通信。协商缓存机制下，浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求、下载完整的响应，还是从本地获取缓存的资源。")]),e._v(" "),a("p",[a("br"),e._v("如果服务端提示缓存资源未改动（Not Modified），资源会被"),a("b",[e._v("重定向到浏览器缓存，这种情况下网络请求对应的状态码是 304")]),e._v("（如下图）。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/03/10/VY3XuGczaZTxMsW.png",alt:"微信图片_20200310145431.png"}})]),e._v(" "),a("h3",{attrs:{id:"协商缓存的实现-从last-modified-到-etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存的实现-从last-modified-到-etag"}},[e._v("#")]),e._v(" 协商缓存的实现（从last-Modified 到 Etag）")]),e._v(" "),a("ol",[a("li",[e._v("last-Modified是一个时间戳，当启用协商缓存后，它会在首次请求时随着Response Headers返回：")])]),e._v(" "),a("p",[a("code",[e._v("Last-Modified: Fri, 27 Oct 2017 06:35:57 GMT")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("之后在此请求时，会携带一个叫做 if-Modified-Since的时间戳字段，它的值是上一次response返回给它的last-modified值：")])]),e._v(" "),a("p",[a("code",[e._v("If-Modified-Since: Fri, 27 Oct 2017 06:35:57 GMT")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("服务器接收到这个时间戳后，会比对该时间戳和资源在服务器上的最后修改时间是否一致，从而判断资源是否发生了变化。如果发生了变化，就会返回一个完整的响应内容，并在 Response Headers 中添加新的 Last-Modified 值；否则，返回如上图的 304 响应，Response Headers 不会再添加 Last-Modified 字段。")])]),e._v(" "),a("p",[e._v("但是，在使用lost—Modified存在一些弊端：")]),e._v(" "),a("ol",[a("li",[e._v("我们编辑了文件，但是文件内容没有改变 —— 不该重新请求时，也会重新请求。")]),e._v(" "),a("li",[e._v("当修改文件速度过快时，100ms左右，if-modified-Since只能识别以秒为单位的时间差。所以，它感知不到这个改动的 —— 该重新请求时，没有重新请求。")])]),e._v(" "),a("p",[e._v("这两个问题指向了服务器没办法正确感知文件的变化，为了解决这种问题，Etag作为弥补last-modified的补充出现了。")]),e._v(" "),a("p",[a("b",[e._v("Etag是由服务器为每个资源生成的唯一标志字符串")]),e._v("，该字符串是基于文件内容编码，只要文件内容不同，他们对应的Etag就是不同的。反之亦然。因此Etag可以准确的感知文件的变化。")]),e._v(" "),a("p",[e._v("Etag 和 Last-Modified 类似，当首次请求时，我们会在响应头里获取到一个最初的标识符字符串，举个🌰，它可以是这样的：")]),e._v(" "),a("p",[a("code",[e._v('ETag: W/"2a3b-1602480f459"')])]),e._v(" "),a("p",[e._v("那么下一次请求时，请求头里就会带上一个值相同的、名为 if-None-Match 的字符串供服务端比对了：")]),e._v(" "),a("p",[a("code",[e._v('If-None-Match: W/"2a3b-1602480f459"')])]),e._v(" "),a("p",[e._v("Etag 的生成过程需要服务器额外付出开销，会影响服务端的性能，这是它的弊端。因此启用 Etag 需要我们审时度势。正如我们刚刚所提到的——Etag 并不能替代 Last-Modified，它只能作为 Last-Modified 的补充和强化存在。"),a("b",[e._v(" Etag 在感知文件变化上比 Last-Modified 更加准确，优先级也更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。")])]),e._v(" "),a("h3",[e._v("HTTP 缓存决策指南")]),e._v(" "),a("p",[e._v("那么在面对一个具体的缓存需求时，我们到底该怎么决策呢？")]),e._v(" "),a("p",[a("br"),e._v(" "),a("b",[e._v(" Chrome 官方给出的流程图：")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/03/10/uh9271mcLSYFrBP.png",alt:"微信图片_20200310151927.png"}})]),e._v(" "),a("p",[e._v("我们现在一起解读一下这张流程图：")]),e._v(" "),a("ol",[a("li",[e._v("当我们的资源内容不可复用时，直接为 Cache-Control 设置 no-store，拒绝一切形式的缓存；")]),e._v(" "),a("li",[e._v("否则考虑是否每次都需要向服务器进行缓存有效确认，如果需要，那么设 Cache-Control 的值为 no-cache；")]),e._v(" "),a("li",[e._v("否则考虑该资源是否可以被代理服务器缓存，根据其结果决定是设置为 private 还是 public；")]),e._v(" "),a("li",[e._v("然后考虑该资源的过期时间，设置对应的 max-age 和 s-maxage 值；")]),e._v(" "),a("li",[e._v("最后，配置协商缓存需要用到的 Etag、Last-Modified 等参数。")])]),e._v(" "),a("p",[e._v("推荐大家在理解以上知识点的基础上，将这张图保存下来、在日常开发中用用看，它的可行度非常高。")]),e._v(" "),a("h3",{attrs:{id:"memorycache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memorycache"}},[e._v("#")]),e._v(" MemoryCache")]),e._v(" "),a("p",[e._v("指内存中的缓存数据，当tab关闭时，随即消失。")]),e._v(" "),a("p",[e._v("哪些文件会被放入内存缓存中？\nbase64格式图片 —— 浏览器为节省渲染做的“自保行为”\n体积不大的js，css文件，也有较大的可能写进内存的几率")]),e._v(" "),a("h3",{attrs:{id:"service-worker-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker-cache"}},[e._v("#")]),e._v(" Service Worker Cache")]),e._v(" "),a("p",[e._v("Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。")]),e._v(" "),a("p",[e._v("Service Worker 的生命周期包括 install、active、working 三个阶段。")]),e._v(" "),a("p",[e._v("大家注意 Server Worker 对协议是有要求的，必须以 https 协议为前提。")]),e._v(" "),a("h3",{attrs:{id:"push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[e._v("#")]),e._v(" Push Cache")]),e._v(" "),a("p",[e._v("Push Cache 是指 HTTP2 在 server push 阶段存在的缓存。")]),e._v(" "),a("p",[e._v("Push Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、HTTP Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。"),a("br"),e._v("\nPush Cache 是一种存在于会话阶段的缓存，当 session 终止时，缓存也随之释放。"),a("br"),e._v("\n不同的页面只要共享了同一个 HTTP2 连接，那么它们就可以共享同一个 Push Cache。")]),e._v(" "),a("p",[a("b",[e._v("后记：")])]),e._v(" "),a("p",[e._v("缓存非常重要，它几乎是我们性能优化的首选方案。")]),e._v(" "),a("p",[e._v("但页面的数据存储方案除了缓存，还有本地存储。")])])}),[],!1,null,null,null);a.default=_.exports}}]);