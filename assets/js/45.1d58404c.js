(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{616:function(t,_,v){"use strict";v.r(_);var a=v(10),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tcp-ip四层协议族"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip四层协议族"}},[t._v("#")]),t._v(" TCP/IP四层协议族")]),t._v(" "),v("h2",{attrs:{id:"_1-网络连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-网络连接"}},[t._v("#")]),t._v(" 1. 网络连接")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("OSI七层模型")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("TCP/IP四层协议族")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("对应网络协议")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("应用层（Application）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("应用层")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP、TFTP, FTP, NFS, WAIS、SMTP")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("表示层（Presentation）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}}),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Telnet, Rlogin, SNMP, Gopher")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("会话层（Session）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}}),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("SMTP, DNS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("传输层（Transport）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("传输层")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("TCP, UDP")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("网络层（Network）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("网络层")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("IP, ICMP, ARP, RARP, AKP, UUCP")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("数据链路层（Data Link）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("网络接口层")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("FDDI, Ethernet, Arpanet, PDN, SLIP, PPP")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("物理层（Physical）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}}),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("IEEE 802.1A, IEEE 802.2到IEEE 802.11")])])])]),t._v(" "),v("ul",[v("li",[t._v("OSI 模型，全称为 Open System Interconnection，即开放系统互联模型，这个是由 ISO(International Organization for Standardization) 国际标准化组织提出的。\n它主要是用来解决当时各个网络技术供应商在协议上无法统一的问题，通过将整个网络体系结构抽象为 7层，从最底层的物理层、数据链路层一直到最上面的应用层都做了定义。")]),t._v(" "),v("li",[t._v("TCP/IP，即 TCP/IP Protocol Suite(协议套件)是一个以TCP协议和IP协议为核心的通信模型，该模型采用协议堆栈的方式来实现许多通信协议，并将通讯体系抽象为4层。\nTCP/IP 模型最早发源于美国国防部（缩写为DoD）的ARPA网项目，此后就交由IETF组织来维护。")])]),t._v(" "),v("h2",{attrs:{id:"_2-网络层-简化的ip网络三层传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络层-简化的ip网络三层传输"}},[t._v("#")]),t._v(" 2. 网络层：简化的IP网络三层传输")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202205011011338.png",alt:"01_简化的ip网络三层传输-图"}}),t._v(" "),v("h3",{attrs:{id:"_2-1-ip头信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ip头信息"}},[t._v("#")]),t._v(" 2.1 IP头信息")]),t._v(" "),v("p",[t._v("IP 头是 IP 数据包开头的信息，包含 IP 版本、源 IP 地址、目标 IP 地址、生存时间等信息")]),t._v(" "),v("h3",{attrs:{id:"_2-2-ip层数据传输步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-ip层数据传输步骤"}},[t._v("#")]),t._v(" 2.2 IP层数据传输步骤")]),t._v(" "),v("ol",[v("li",[t._v("上层将含有“data”的数据包交给网络层；")]),t._v(" "),v("li",[t._v("网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；")]),t._v(" "),v("li",[t._v("底层通过物理网络将数据包传输给主机 B；")]),t._v(" "),v("li",[t._v("数据包被传输到主机 B 的网络层，在这里主机 B 拆开数据包的 IP 头信息，并将拆开来的数据部分交给上层；最终，含有“data”信息的数据包就到达了主机 B 的上层了。")])]),t._v(" "),v("h2",{attrs:{id:"_3-传输层-简化的udp四层网络连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-传输层-简化的udp四层网络连接"}},[t._v("#")]),t._v(" 3. 传输层：简化的UDP四层网络连接")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202205011015262.png",alt:"02_简化的UDP网络四层传输-图"}})]),t._v(" "),v("h3",{attrs:{id:"_3-1-udp作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-udp作用"}},[t._v("#")]),t._v(" 3.1 UDP作用")]),t._v(" "),v("p",[t._v("IP 通过 IP 地址信息把数据包发送给指定的电脑，而 UDP 通过端口号把数据包分发给正确的程序")]),t._v(" "),v("h3",{attrs:{id:"_3-2-udp头信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-udp头信息"}},[t._v("#")]),t._v(" 3.2 UDP头信息")]),t._v(" "),v("p",[t._v("端口号会被装进 UDP 头里面，UDP 头再和原始数据包合并组成新的 UDP 数据包。UDP 头中除了目的端口，还有源端口号等信息")]),t._v(" "),v("h3",{attrs:{id:"_3-3-udp层传输步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-udp层传输步骤"}},[t._v("#")]),t._v(" 3.3 UDP层传输步骤")]),t._v(" "),v("ol",[v("li",[t._v("上层将含有“data”的数据包交给传输层；")]),t._v(" "),v("li",[t._v("传输层会在数据包前面附加上 UDP 头，组成新的 UDP 数据包，再将新的 UDP 数据包交给网络层；")]),t._v(" "),v("li",[t._v("网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；")]),t._v(" "),v("li",[t._v("数据包被传输到主机 B 的网络层，在这里主机 B 拆开 IP 头信息，并将拆开来的数据部分交给传输层；")]),t._v(" "),v("li",[t._v("在传输层，数据包中的 UDP 头会被拆开，并根据 UDP 中所提供的端口号，把数据部分交给上层的应用程序；最终，含有“data”信息的数据包就旅行到了主机 B 上层应用程序这")])]),t._v(" "),v("h3",{attrs:{id:"_3-4-udp数据传输的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-udp数据传输的特点"}},[t._v("#")]),t._v(" 3.4 UDP数据传输的特点")]),t._v(" "),v("p",[t._v("在使用 UDP 发送数据时，有各种因素会导致数据包出错，虽然 UDP 可以校验数据是否正确，但是对于错误的数据包，UDP 并不提供重发机制，只是丢弃当前的包，而且UDP在发送之后也无法知道是否能达到目的地")]),t._v(" "),v("h3",{attrs:{id:"_3-5-udp的应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-udp的应用"}},[t._v("#")]),t._v(" 3.5 UDP的应用")]),t._v(" "),v("p",[v("strong",[t._v("UDP 不能保证数据可靠性，但是传输速度却非常快，所以 UDP 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等")]),t._v("，没有像TCP一样进行三次握手四次挥手。")]),t._v(" "),v("h2",{attrs:{id:"_4-传输层-简化的tcp四层网络连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-传输层-简化的tcp四层网络连接"}},[t._v("#")]),t._v(" 4. 传输层：简化的TCP四层网络连接")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202205011018525.png",alt:"03_简化的TCP网络四层传输-图 "}})]),t._v(" "),v("h3",{attrs:{id:"_4-1-tcp头信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-tcp头信息"}},[t._v("#")]),t._v(" 4.1 TCP头信息")]),t._v(" "),v("p",[t._v("TCP 头除了包含了目标端口和本机端口号外还有")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("序号（32bit）：传输方向上字节流的字节编号。初始时序号会被设置一个随机的初始值（ISN）， 之后每次发送数据时，序号值 = ISN + 数据在整个字节流中的偏移。假设A -> B且ISN = 1024，第 一段数据512字节已经到B，则第二段数据发送时序号为1024 + 512。用于解决网络包乱序问题。")])]),t._v(" "),v("li",[v("p",[t._v("确认号（32bit）：接收方对发送方TCP报文段的响应，其值是收到的序号值 + 1。")])]),t._v(" "),v("li",[v("p",[t._v("首部长（4bit）：标识首部有多少个4字节 * 首部长，最大为15，即60字节。")])]),t._v(" "),v("li",[v("p",[t._v("标志位（6bit）：")]),t._v(" "),v("ul",[v("li",[t._v("URG：标志紧急指针是否有效。 知识星球[蓝蓝银行小分队]")]),t._v(" "),v("li",[t._v("ACK：标志确认号是否有效（确认报文段）。用于解决丢包问题。")]),t._v(" "),v("li",[t._v("PSH：提示接收端立即从缓冲读走数据。")]),t._v(" "),v("li",[t._v("RST：表示要求对方重新建立连接（复位报文段）。")]),t._v(" "),v("li",[t._v("SYN：表示请求建立一个连接（连接报文段）。")]),t._v(" "),v("li",[t._v("FIN：表示关闭连接（断开报文段）。")])])]),t._v(" "),v("li",[v("p",[t._v("窗口（16bit）：接收窗口。用于告知对方（发送方）本方的缓冲还能接收多少字节数据。用于解 决流控。")])]),t._v(" "),v("li",[v("p",[t._v("校验和（16bit）：接收端用CRC检验整个报文段有无损坏。")])])]),t._v(" "),v("h3",{attrs:{id:"_4-2-tcp连接的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-tcp连接的生命周期"}},[t._v("#")]),t._v(" 4.2 TCP连接的生命周期")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/blogs/Http/URL的输入到浏览器解析的一系列事件.html"}},[t._v("详细")])],1),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("建立建立阶段")]),t._v("（三次握手）")]),t._v(" "),v("ul",[v("li",[t._v("**初始状态：**客户端处于 closed(关闭) 状态，服务器处于 listen(监听) 状态。")]),t._v(" "),v("li",[v("strong",[t._v("第一次握手")]),t._v("：客户端发送请求报文将 SYN = 1 同步序列号和初始化序列号 seq = x 发送给服务端，发送完之后客户端处于 SYN_Send 状态。（验证了客户端的发送能力和服务端的接收能力）")]),t._v(" "),v("li",[v("strong",[t._v("第二次握手")]),t._v("：服务端收到 SYN 请求报文之后，如果同意连接，会以自己的同步序列号 SYN(服务端) = 1 、初始化序列号 seq = y 和确认序列号（期望下次收到的数据包） ack = x+ 1 以及确认号 ACK = 1 报文作为应答，服务器为 SYN_Received 状态。")]),t._v(" "),v("li",[v("strong",[t._v("第三次握手")]),t._v("： 客户端接收到服务端的 SYN + ACK 之后，知道可以下次可以发送了下一序列的数据包了，然后发送同步序列号 ack = y + 1 和数据包的序列号 seq = x + 1 以及确认号 ACK = 1 确认包作为应答，客户端转为 established 状态。（分别站在双方的角度上思考，各自ok）")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("数据传输阶段")]),t._v("\n对于单个数据包："),v("strong",[t._v("接收端需要对每个数据包进行确认操作。")]),t._v("\n也就是接收端在接收到数据包之后，需要发送确认数据包给发送端。\n所以当发送端发送了一个数据包之后，在规定时间内没有接收到接收端反馈的确认消息，\n"),v("strong",[t._v("则判断为数据包丢失，并触发发送端的重发机制")]),t._v("（根据seq进行判断）\n对于大文件：一个大的文件在传输过程中会被拆分成很多小的数据包，这些数据包到达接收端后，\n接收端会按照 TCP 头中的序号为其排序，从而保证组成完整的数据")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("断开连接阶段")]),t._v("（四次挥手）\n可由客户端或者服务器端任何一端发起断开请求\n客户端和服务器端都需要是断开就绪状态，才能真正断开。\n如：客户端发起断开请求，服务器端确认，返回断开确认信息，客户端处于断开就绪状态。当服务器端处 理完毕，向客户端发送断开请求，客户端返回信息可以断开，服务器端就处于\n断开就绪状态，此时客户端和服务器端都是断开就绪状态，则连接断开")]),t._v(" "),v("p",[t._v("**第一次挥手：**客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态。 即发出连接释放报文段（FIN=1，序号seq=u），并停止再发送数据，主动关闭TCP连接， 进入FIN_WAIT1（终止等待1）状态，等待服务端的确认。")]),t._v(" "),v("p",[t._v("**第二次挥手：**服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文 的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态。 即服务端收到 连接释放报文段后即发出确认报文段（ACK=1，确认号ack=u+1，序号seq=v），服务端进入 CLOSE_WAIT（关闭等待）状态，此时的TCP处于半关闭状态，客户端到服务端的连接释放。客户 端收到服务端的确认后，进入FIN_WAIT2（终止等待2）状态，等待服务端发出的连接释放报文段。")]),t._v(" "),v("p",[t._v("**第三次挥手：**如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一 个序列号。此时服务端处于 LAST_ACK 的状态。 即服务端没有要向客户端发出的数据，服务端发 出连接释放报文段（FIN=1，ACK=1，序号seq=w，确认号ack=u+1），服务端进入LAST_ACK（最 后确认）状态，等待客户端的确认。")]),t._v(" "),v("p",[t._v("**第四次挥手：**客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的确认号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子以确保服务端收 到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了， 处于 CLOSED 状态。 即客户端收到服务端的连接释放报文段后，对此发出确认报文段（ACK=1， seq=u+1，ack=w+1），客户端进入TIME_WAIT（时间等待）状态。此时TCP未释放掉，需要经过 时间等待计时器设置的时间2MSL后，客户端才进入CLOSED状态。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("四次挥手后的2MLS的意义")])]),t._v(" "),v("p",[t._v("为了保证客户端发送的最后一个ACK报文段能够到达服务器。因为这个ACK有可能丢失，从而导致处在 LAST-ACK状态的服务器收不到对FIN-ACK的确认报文。服务器会超时重传这个FIN-ACK，接着客户端再 重传一次确认，重新启动时间等待计时器。最后客户端和服务器都能正常的关闭。假设客户端不等待 2MSL，而是在发送完ACK之后直接释放关闭，一但这个ACK丢失的话，服务器就无法正常的进入关闭连 接状态。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202205011110652.png",alt:"06"}})]),t._v(" "),v("h3",{attrs:{id:"_4-3-tcp如何实现数据的可靠性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-tcp如何实现数据的可靠性"}},[t._v("#")]),t._v(" 4.3 TCP如何实现数据的可靠性")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("校验和（每一个数据段都会进行校验）")])]),t._v(" "),v("li",[v("p",[t._v("序列和（对每个字节的数据进行编号）")])]),t._v(" "),v("li",[v("p",[t._v("确认应答（每次接收方收到数据就会对传输方进行确认应答，发送ACK报文）")])]),t._v(" "),v("li",[v("p",[t._v("超时重传（如果传输方迟迟没有收到接收方的ACK报文，就会重新进行发送）")])]),t._v(" "),v("li",[v("p",[t._v("连接管理（三次握手，四次挥手）")])]),t._v(" "),v("li",[v("p",[t._v("流量控制")]),t._v(" "),v("p",[t._v("如果发送方的发送速度太快，会导致接收方的接收缓冲区填充满了，这时候继续传输数据，就会造成大 量丢包，进而引起丢包重传等等一系列问题。TCP 支持根据接收端的处理能力来决定发送端的发送速 度，这就是流量控制机制。")]),t._v(" "),v("p",[t._v("具体实现方式：接收端将自己的接收缓冲区大小放入 TCP 首部的『窗口大小』字段中，通过 ACK 通知 发送端。")])]),t._v(" "),v("li",[v("p",[t._v("拥塞控制（慢启动，当开始发送数据的时候会先发送少量的数据进行探路）")])])]),t._v(" "),v("h3",{attrs:{id:"_4-4-tcp如何实现传输效率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-tcp如何实现传输效率"}},[t._v("#")]),t._v(" 4.4 TCP如何实现传输效率")]),t._v(" "),v("p",[t._v("一句话，TCP协议提高效率的方法有"),v("code",[t._v("滑动窗口、快重传、延迟应答、捎带应答")])]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("滑动窗口")])]),t._v(" "),v("p",[t._v("如果每一个发送的数据段，都要收到 ACK 应答之后再发送下一个数据段，这样的话我们效率很低，大部 分时间都用在了等待 ACK 应答上了。")]),t._v(" "),v("p",[t._v("为了提高效率我们可以一次发送多条数据，这样就能使等待时间大大减少，从而提高性能。窗口大小指 的是无需等待确认应答而可以继续发送数据的最大值。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("快重传也叫高速重发控制")])]),t._v(" "),v("p",[t._v("那么如果出现了丢包，需要进行重传。一般分为两种情况：")]),t._v(" "),v("p",[t._v("情况一：数据包已经抵达，ACK被丢了。这种情况下，部分ACK丢了并不影响，因为可以通过后续的 ACK进行确认；")]),t._v(" "),v("p",[t._v("情况二：数据包直接丢了。发送端会连续收到多个相同的 ACK 确认，发送端立即将对应丢失的数据重传。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("延迟应答")])]),t._v(" "),v("p",[t._v("如果接收数据的主机立刻返回ACK应答，这时候返回的窗口大小可能比较小。")]),t._v(" "),v("p",[t._v("假设接收端缓冲区为1M，一次收到了512K的数据；如果立刻应答，返回的窗口就是512K； 但实际上可能处理端处理速度很快，10ms之内就把512K的数据从缓存区消费掉了； 在这种情况下，接收端处理还远没有达到自己的极限，即使窗口再放大一些，也能处理过来； 如果接收端稍微等一会在应答，比如等待200ms再应答，那么这个时候返回的窗口大小就是1M；")]),t._v(" "),v("p",[t._v("窗口越大，网络吞吐量就越大，传输效率就越高；我们的目标是在保证网络不拥塞的情况下尽量提高传 输效率。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("捎带应答")])]),t._v(" "),v("p",[t._v("在延迟应答的基础上，很多情况下，客户端服务器在应用层也是一发一收的。这时候常常采用捎带应答 的方式来提高效率，而ACK响应常常伴随着数据报文共同传输。如：三次握手。")])])]),t._v(" "),v("h3",{attrs:{id:"_4-5-tcp如何处理阻塞的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-tcp如何处理阻塞的"}},[t._v("#")]),t._v(" 4.5 TCP如何处理阻塞的")]),t._v(" "),v("p",[t._v("拥塞控制是处理网络拥塞现象的一种机制。"),v("strong",[t._v("拥塞控制")]),t._v("的四个阶段:"),v("code",[t._v("慢启动 拥塞避免 快速重传 快速恢复")])]),t._v(" "),v("ul",[v("li",[t._v("慢开始 & 拥塞避免：先试探网络拥塞程度再逐渐增大拥塞窗口。每次收到确认后拥塞窗口翻 倍，直到达到阀值ssthresh，这部分是慢开始过程。达到阀值后每次以一个MSS为单位增长拥 塞窗口大小，当发生拥塞（超时未收到确认），将阀值减为原先一半，继续执行线性增加，这 个过程为拥塞避免。")]),t._v(" "),v("li",[t._v("快速重传 & 快速恢复：")]),t._v(" "),v("li",[t._v("最后拥塞窗口会收敛到稳定值")])]),t._v(" "),v("h2",{attrs:{id:"_5-tcp-和-udp-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-tcp-和-udp-区别"}},[t._v("#")]),t._v(" 5. TCP 和 UDP 区别？")]),t._v(" "),v("p",[t._v("TCP 和 UDP 都是传输层的协议，但二者有着截然不同的基因。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("UDP")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("面向连接（数据传输先建立连接）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("无连接")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("提供可靠交付的服务")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不能让你和保证可靠的交付")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("面型字节流（把数据看成一连串无结构的字节流）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("面向报文")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("存在拥塞控制")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("没有拥塞控制")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP连接是点到点的")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP支持一对一，一对多，多对一甚至多对多的交互通信")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP的首部开销为20个字节")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("UDP首部开销很小只有8个字节")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP是全双工的，允许通信双方的应用进程在任何时候都能发送数据"),v("br"),t._v("TCP连接的两端都 设有发送缓存和接收缓存，用来临时存放双方通信的数据；")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})])])])])}),[],!1,null,null,null);_.default=e.exports}}]);