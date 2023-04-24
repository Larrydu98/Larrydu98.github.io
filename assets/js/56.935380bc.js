(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{626:function(_,v,a){"use strict";a.r(v);var t=a(10),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("总结JVM")]),_._v(" "),a("h2",{attrs:{id:"_1-简述jvm内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述jvm内存模型"}},[_._v("#")]),_._v(" 1 简述JVM内存模型")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202206301638222.png",alt:"jvm"}})]),_._v(" "),a("p",[_._v("线程私有的运行时数据区: 程序计数器、Java 虚拟机栈、本地方法栈。")]),_._v(" "),a("p",[_._v("线程共享的运行时数据区:Java堆、方法区、直接内存（非运行时数据区一部分）")]),_._v(" "),a("h3",{attrs:{id:"_1-1-程序计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-程序计数器"}},[_._v("#")]),_._v(" 1.1 程序计数器")]),_._v(" "),a("p",[_._v("程序计数器是一块较小的内存空间")]),_._v(" "),a("p",[a("strong",[_._v("作用")]),_._v("：")]),_._v(" "),a("ul",[a("li",[_._v("字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。")]),_._v(" "),a("li",[_._v("在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。")])]),_._v(" "),a("p",[a("strong",[_._v("注意")]),_._v("：程序计数器是唯一一个不会出现 "),a("code",[_._v("OutOfMemoryError")]),_._v(" 的内存区域，它的生命周期随着线程的创建而创建，随着线程的结束而死亡。")]),_._v(" "),a("h3",{attrs:{id:"_1-2-java虚拟机栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-java虚拟机栈"}},[_._v("#")]),_._v(" 1.2 Java虚拟机栈")]),_._v(" "),a("p",[_._v("Java 虚拟机栈用来描述 Java 方法执行的内存模型。线程创建时就会分配一个栈空间，线程结束后栈空间 被回收。")]),_._v(" "),a("p",[_._v("栈中元素用于支持虚拟机进行方法调用，每一次方法调用都会有一个对应的栈帧被压入栈中，每一个方法调用结束后，都会有一个栈帧被弹出。")]),_._v(" "),a("p",[_._v("栈帧用来存储方法的"),a("strong",[_._v("局部变量表")]),_._v("、 "),a("strong",[_._v("操作栈")]),_._v("、"),a("strong",[_._v("动态链接")]),_._v("和"),a("strong",[_._v("返回地址")]),_._v("等信息。")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("局部变量表")]),_._v(" 主要存放了编译期可知的各种数据类型（boolean、byte、char、short、int、float、long、double）、对象引用")]),_._v(" "),a("li",[a("strong",[_._v("操作数栈")]),_._v(" 主要作为方法调用的中转站使用，用于存放方法执行过程中产生的中间计算结果。")]),_._v(" "),a("li",[a("strong",[_._v("动态链接")]),_._v(" 主要服务一个方法需要调用其他方法的场景。")]),_._v(" "),a("li",[a("strong",[_._v("返回地址")])])]),_._v(" "),a("p",[_._v("虚拟机栈会产生两类异常：")]),_._v(" "),a("p",[a("code",[_._v("StackOverflowError")]),_._v("：线程请求的栈深度大于虚拟机允许的深度抛出。")]),_._v(" "),a("p",[a("code",[_._v("OutOfMemoryError")]),_._v("：如果 JVM 栈容量可以动态扩展，虚拟机栈占用内存超出抛出。")]),_._v(" "),a("h3",{attrs:{id:"_1-3-本地方法栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-本地方法栈"}},[_._v("#")]),_._v(" 1.3 本地方法栈")]),_._v(" "),a("p",[_._v("和虚拟机栈所发挥的作用非常相似，区别是： "),a("strong",[_._v("虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。")])]),_._v(" "),a("p",[_._v("地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。")]),_._v(" "),a("p",[_._v("方法执行完毕后相应的栈帧也会出栈并释放内存空间，也会出现 "),a("code",[_._v("StackOverFlowError")]),_._v(" 和 "),a("code",[_._v("OutOfMemoryError")]),_._v(" 两种错误。")]),_._v(" "),a("h3",{attrs:{id:"_1-4-堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-堆"}},[_._v("#")]),_._v(" 1.4 堆")]),_._v(" "),a("p",[_._v("此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。Java的垃圾回收主要就是针对堆这一区域进行")]),_._v(" "),a("p",[_._v("堆会抛出 "),a("code",[_._v("OutOfMemoryError")]),_._v("异常。")]),_._v(" "),a("h3",{attrs:{id:"_1-5-方法区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-方法区"}},[_._v("#")]),_._v(" 1.5 方法区")]),_._v(" "),a("p",[_._v("方法区用于存储被虚拟机加载的类信息、常量、静态变量等数据。")]),_._v(" "),a("p",[_._v("JDK6之前使用永久代实现方法区，容易内存溢出。JDK7 把放在永久代的字符串常量池、静态变量等移 出，JDK8 中抛弃永久代，改用在本地内存中实现的元空间来实现方法区；")]),_._v(" "),a("p",[_._v("方法区会抛出 OutOfMemoryError异常。")]),_._v(" "),a("h3",{attrs:{id:"_1-6-运行时常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-运行时常量池"}},[_._v("#")]),_._v(" 1.6 运行时常量池")]),_._v(" "),a("p",[_._v("运行时常量池存放常量池表，用于存放编译器生成的各种字面量与符号引用。一般除了保存 Class 文件 中描述的符号引用外，还会把符号引用翻译的直接引用也存储在运行时常量池。除此之外，也会存放字 符串基本类型。")]),_._v(" "),a("p",[_._v("JDK8之前，放在方法区，大小受限于方法区。JDK8将运行时常量池存放堆中。")]),_._v(" "),a("h3",{attrs:{id:"_1-7-直接内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-直接内存"}},[_._v("#")]),_._v(" 1.7 直接内存")]),_._v(" "),a("p",[_._v("直接内存也称为堆外内存，就是把内存对象分配在JVM堆外的内存区域。这部分内存不是虚拟机管理， 而是由操作系统来管理。Java通过通过DriectByteBuffer对其进行操作，避免了在 Java 堆和 Native堆来 回复制数据。")]),_._v(" "),a("h2",{attrs:{id:"_2-虚拟机对象探秘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-虚拟机对象探秘"}},[_._v("#")]),_._v(" 2 虚拟机对象探秘")]),_._v(" "),a("h3",{attrs:{id:"_2-1-对象的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-对象的创建"}},[_._v("#")]),_._v(" 2.1 对象的创建")]),_._v(" "),a("ol",[a("li",[a("p",[a("strong",[_._v("类加载检查")]),_._v("：检查该指令的参数能否在常量池中定位到一个类的符号引用，并检查引用代表的类是否已被加载、 解析和初始化，如果没有就先执行类加载。")]),_._v(" "),a("p",[_._v("类加载过程："),a("strong",[_._v("加载->连接->初始化")]),_._v("。连接过程又可分为三步："),a("strong",[_._v("验证->准备->解析")]),_._v("。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Larrydu98/BlogIMage/main/202207011720300.png",alt:"类加载过程"}})])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("分配内存")]),_._v("：通过检查通过后虚拟机将为新生对象分配内存。")]),_._v(" "),a("ul",[a("li",[_._v("指针碰撞：这种方式在内存中放一个指针作为分界指示器将使用过的内存放在一边，空闲的放在另一边，通过指针挪动完成分配。")]),_._v(" "),a("li",[_._v("空闲列表：对于Java堆内存不规整的情况，虚拟机必须维护一个列表记录哪些内存可用，在分配时从列表中找到一块足够大的空间划分给对象并更新列表记录。")])])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("初始化零值")]),_._v("：完成内存分配后虚拟机将成员变量设为零值")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("设置对象头")]),_._v("：设置对象头，包括哈希码、GC 信息、锁信息、对象所属类的类元信息等。")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("执行 init 方法")]),_._v(":执行 init 方法，初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的首地址赋值给引用变量。")])])]),_._v(" "),a("h3",{attrs:{id:"_2-2-对象内存分配是如何保证线程安全的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-对象内存分配是如何保证线程安全的"}},[_._v("#")]),_._v(" 2.2 对象内存分配是如何保证线程安全的")]),_._v(" "),a("ol",[a("li",[_._v("对分配内存空间采用CAS机制，配合失败重试的方式保证更新操作的原子性。该方式效率低。")]),_._v(" "),a("li",[_._v('每个线程在Java堆中预先分配一小块内存，然后再给对象分配内存的时候，直接在自己这块"私 有"内存中分配。一般采用这种策略。')])]),_._v(" "),a("h3",{attrs:{id:"_2-3-对象的内存布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-对象的内存布局"}},[_._v("#")]),_._v(" 2.3 对象的内存布局")]),_._v(" "),a("p",[_._v("对象在堆内存的存储布局可分为对象头、实例数据和对齐填充。 对象头主要包含两部分数据：MarkWord、类型指针。MarkWord 用于存储哈希码（HashCode）、GC 分代年龄、锁状态标志位、线程持有的锁、偏向线程ID等信息。类型指针即对象指向他的类元数据指 针，如果对象是一个 Java 数组，会有一块用于记录数组长度的数据， 实例数据存储代码中所定义的各种类型的字段信息。")]),_._v(" "),a("h2",{attrs:{id:"_4-垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-垃圾回收"}},[_._v("#")]),_._v(" 4 垃圾回收")]),_._v(" "),a("h3",{attrs:{id:"_3-1-判断对象是否是垃圾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-判断对象是否是垃圾"}},[_._v("#")]),_._v(" 3.1 判断对象是否是垃圾")]),_._v(" "),a("ul",[a("li",[_._v("引用计数法：设置引用计数器，对象被引用计数器加 1，引用失效时计数器减 1，如果计数器为 0 则被 标记为垃圾。会存在对象间循环引用的问题，一般不使用这种方法。")]),_._v(" "),a("li",[_._v("可达性分析：通过 GC Roots 的根对象作为起始节点，从这些节点开始，根据引用关系向下搜索，如果某个对象没有被搜到，则会被标记为垃圾。可作为 GC Roots 的对象包括虚拟机栈和本地方法栈中引用 的对象、类静态属性引用的对象、常量引用的对象。")])]),_._v(" "),a("h3",{attrs:{id:"_3-2-java的引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-java的引用类型"}},[_._v("#")]),_._v(" 3.2 java的引用类型")]),_._v(" "),a("ul",[a("li",[_._v("强引用：被强引用关联的对象不会被回收。一般采用 new 方法创建强引用。")]),_._v(" "),a("li",[_._v("软引用：被软引用关联的对象只有在内存不够的情况下才会被回收。一般采用 SoftReference 类来创建 软引用。")]),_._v(" "),a("li",[_._v("弱引用：垃圾收集器碰到即回收，也就是说它只能存活到下一次垃圾回收发生之前。一般采用 WeakReference 类来创建弱引用。")]),_._v(" "),a("li",[_._v("虚引用：无法通过该引用获取对象。唯一目的就是为了能在对象被回收时收到一个系统通知。虚引用必须与引用队列联合使用。")])]),_._v(" "),a("h3",{attrs:{id:"_3-3-垃圾回收算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-垃圾回收算法"}},[_._v("#")]),_._v(" 3.3 垃圾回收算法")]),_._v(" "),a("ul",[a("li",[_._v("标记清除算法：先标记需清除的对象，之后统一回收。这种方法效率不高，会产生大量不连续的碎片。")]),_._v(" "),a("li",[_._v("标记整理算法：先标记存活对象，然后让所有存活对象向一端移动，之后清理端边界以外的内存")]),_._v(" "),a("li",[_._v("标记复制算法：将可用内存按容量划分为大小相等的两块，每次只使用其中一块。当使用的这块空间用 完了，就将存活对象复制到另一块，再把已使用过的内存空间一次清理掉。")]),_._v(" "),a("li",[_._v("分代收集算法：根据对象存活周期将内存划分为几块，不同块采用适当的收集算法。一般将堆分为新生代和老年代，对这两块采用不同的算法。\n"),a("ul",[a("li",[a("strong",[_._v("新生代使用")]),_._v("：标记复制算法")]),_._v(" "),a("li",[a("strong",[_._v("老年代使用")]),_._v("：标记清除或者标记整理算法")])])])]),_._v(" "),a("h2",{attrs:{id:"_5-垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-垃圾收集器"}},[_._v("#")]),_._v(" 5 垃圾收集器")]),_._v(" "),a("p",[_._v("串行收集器:Serial,Serial Old 并行收集器:Parallel Scavenge,Parallel Old 并发收集器：CMS,G1")]),_._v(" "),a("h3",{attrs:{id:"_5-1-serial垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-serial垃圾收集器"}},[_._v("#")]),_._v(" 5.1 Serial垃圾收集器")]),_._v(" "),a("p",[_._v("单线程串行收集器。垃圾回收的时候，必须暂停其他所有线程。新生代使用标记复制算法，老年代使用 标记整理算法。简单高效。")]),_._v(" "),a("h3",{attrs:{id:"_5-2-parnew垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-parnew垃圾收集器"}},[_._v("#")]),_._v(" 5.2 ParNew垃圾收集器")]),_._v(" "),a("p",[_._v("可以看作Serial垃圾收集器的多线程版本，新生代使用标记复制算法，老年代使用标记整理算法。")]),_._v(" "),a("h3",{attrs:{id:"_5-3-parnew垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-parnew垃圾收集器"}},[_._v("#")]),_._v(" 5.3 ParNew垃圾收集器")]),_._v(" "),a("p",[_._v("注重吞吐量，即cpu运行代码时间/cpu耗时总时间（cpu运行代码时间+ 垃圾回收时间）。新生代使用标 记复制算法，老年代使用标记整理算法。")]),_._v(" "),a("h3",{attrs:{id:"_5-4-cms垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-cms垃圾收集器"}},[_._v("#")]),_._v(" 5.4 CMS垃圾收集器")]),_._v(" "),a("p",[_._v("CMS垃圾收集器为最早提出的并发收集器，垃圾收集线程与用户线程同时工作。采用标记清除算法。该收集器分为初始标记、并发标记、并发预清理、并发清除、并发重置这么几个步骤。")]),_._v(" "),a("p",[a("strong",[_._v("主要优点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[_._v("并发收集、低停顿")])]),_._v(" "),a("p",[a("strong",[_._v("主要缺点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[_._v("对cpu资源敏感，")]),_._v(" "),a("li",[_._v("无法处理浮动垃圾，使用回收算法：")]),_._v(" "),a("li",[_._v("标记-清楚会导致收集结束时会有大量的空间碎片产生")])]),_._v(" "),a("p",[a("strong",[_._v("处理过程")])]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("初始标记")]),_._v("：暂停其他线程(stop the world)，标记与GC roots直接关联的对象。")]),_._v(" "),a("li",[a("strong",[_._v("并发标记")]),_._v("：可达性分析过 程(程序不会停顿)。")]),_._v(" "),a("li",[a("strong",[_._v("并发预清理")]),_._v("：查找执行并发标记阶段从年轻代晋升到老年代的对象，重新标记，暂停虚拟机（stop the world）扫描CMS堆中剩余对象。")]),_._v(" "),a("li",[a("strong",[_._v("并发清除")]),_._v("：清理垃圾对象，(程序不会停顿)。")]),_._v(" "),a("li",[a("strong",[_._v("并发重置")]),_._v("：重置CMS收集器的数据结构。")])]),_._v(" "),a("h3",{attrs:{id:"_5-5-g1垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-g1垃圾收集器"}},[_._v("#")]),_._v(" 5.5 G1垃圾收集器")]),_._v(" "),a("p",[_._v("一款面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征.它具备以下特点：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("并行与并发")]),_._v("：G1 能充分利用 CPU、多核环境下的硬件优势")]),_._v(" "),a("li",[a("strong",[_._v("分代收集")]),_._v("：虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但是还是保留了分代的概念。")]),_._v(" "),a("li",[a("strong",[_._v("空间整合")]),_._v("：G1 从整体来看是基于“标记-整理”算法实现的收集器；从局部上来看是基于“标记-复制”算法实现的。")]),_._v(" "),a("li",[a("strong",[_._v("可预测的停顿")]),_._v("：但 G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为 M 毫秒的时间片段内。")])]),_._v(" "),a("p",[_._v("G1 收集器的运作大致分为以下几个步骤：")]),_._v(" "),a("ul",[a("li",[_._v("初始标记：标记与GC roots直接关联的对象。")]),_._v(" "),a("li",[_._v("并发标记：可达性分析。")]),_._v(" "),a("li",[_._v("最终标记，对并发标记过程中，用户线程修改的对象再次标记一下。")]),_._v(" "),a("li",[_._v("筛选回收：对各个Region的回收价值和成本进行排序，然后根据用户所期望的GC停顿时间制定回收计划 并回收。")])]),_._v(" "),a("h2",{attrs:{id:"_6-双亲委派模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-双亲委派模型"}},[_._v("#")]),_._v(" 6 双亲委派模型")]),_._v(" "),a("p",[_._v("一个类加载器收到类加载请求之后，首先判断当前类是否被加载过。已经被加载的类会直接返回，如果 没有被加载，首先将类加载请求转发给父类加载器，一直转发到启动类加载器，只有当父类加载器无法 完成时才尝试自己加载。")]),_._v(" "),a("h3",{attrs:{id:"_6-1-双亲委派机制的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-双亲委派机制的优点"}},[_._v("#")]),_._v(" 6.1 双亲委派机制的优点")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("避免类的重复加载。相同的类被不同的类加载器加载会产生不同的类，双亲委派保证了java程序的稳定运行。")])]),_._v(" "),a("li",[a("p",[_._v("保证核心API不被修改。")])])]),_._v(" "),a("h3",{attrs:{id:"_6-2-不想用双亲委派模型怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-不想用双亲委派模型怎么办"}},[_._v("#")]),_._v(" 6.2 不想用双亲委派模型怎么办？")]),_._v(" "),a("p",[_._v("自定义加载器的话，需要继承 "),a("code",[_._v("ClassLoader")]),_._v(" ,如果想打破双亲委派模型则需重写"),a("code",[_._v("loadClass（）")]),_._v("方法")]),_._v(" "),a("h3",{attrs:{id:"_6-3-如何构建自定义类加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-如何构建自定义类加载器"}},[_._v("#")]),_._v(" 6.3 如何构建自定义类加载器")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("新建自定义类继承自java.lang.ClassLoader")])]),_._v(" "),a("li",[a("p",[_._v("重写findClass、loadClass、defineClass方法")])])]),_._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[_._v("参考文献")]),_._v(" "),a("p",[a("a",{attrs:{href:"https://javaguide.cn/java/jvm/memory-area.html#%E8%BF%90%E8%A1%8C%E6%97%B6%E5%B8%B8%E9%87%8F%E6%B1%A0",target:"_blank",rel:"noopener noreferrer"}},[_._v("java内存区域详解"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);