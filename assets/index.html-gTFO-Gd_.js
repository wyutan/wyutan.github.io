import{_ as t,e,j as o,o as i}from"./app-DtBkDhJN.js";const r={};function n(a,l){return i(),e("div",null,l[0]||(l[0]=[o('<h2 id="状态机" tabindex="-1"><a class="header-anchor" href="#状态机"><span>状态机</span></a></h2><ol><li><p><strong>Down（关闭）</strong>：初始状态或者邻居关系被断开时的状态。在这个状态下，路由器还没有收到任何邻居的Hello消息。</p></li><li><p><strong>Init（初始化）</strong>：在路由器发送Hello消息后，等待邻居的Hello响应的状态。在这个状态下，路由器已经发送了Hello消息，但还没有收到相应的Hello消息。</p></li><li><p><strong>Two-Way（双向）</strong>：当路由器收到了邻居的Hello消息，并且能够在Hello消息中发现自己的路由器ID时，就会进入双向状态。在这个状态下，路由器之间建立了双向通信。</p></li><li><p><strong>ExStart（起始）</strong>：在这个状态下，路由器开始协商用于建立邻居关系的参数。这包括选举Master/Slave以及协商DBD（数据库描述）序列号。</p></li><li><p><strong>Exchange（交换）</strong>：在这个状态下，路由器交换DBD消息以请求对方的LSDB副本。在这个状态下，路由器还没有完全建立邻居关系，但已经在协商建立邻居关系所需的信息。</p></li><li><p><strong>Loading（加载）</strong>：在这个状态下，路由器从邻居处获取LSDB副本，并开始从邻居处请求缺失的LSA。</p></li><li><p><strong>Full（完全）</strong>：在这个状态下，路由器已经与邻居建立了完全的邻居关系，并且已经同步了LSDB。在这个状态下，路由器可以向其他路由器发送和接收路由更新信息。</p></li></ol><h2 id="卡在不同状态可能的原因" tabindex="-1"><a class="header-anchor" href="#卡在不同状态可能的原因"><span>卡在不同状态可能的原因</span></a></h2><p>在 OSPF 协议中，路由器在建立邻居关系和交换路由信息时，可能会因为各种原因而卡在每个状态。以下是每个状态可能出现的原因：</p><ol><li><p><strong>Down（关闭）</strong>：</p><ul><li>路由器刚启动，还未发送或接收到 Hello 消息。</li><li>邻居关系被手动关闭或由于网络问题导致邻居关系断开。</li></ul></li><li><p><strong>Init（初始化）</strong>：</p><ul><li>路由器发送了 Hello 消息，但尚未收到相应的 Hello 消息。</li><li>Hello 消息丢失或被延迟，导致邻居关系未能建立。</li></ul></li><li><p><strong>Two-Way（双向）</strong>：</p><ul><li>路由器收到了邻居的 Hello 消息，并且能够在消息中发现自己的路由器ID。</li><li>网络连接正常，但路由器配置错误导致邻居关系未能建立。</li></ul></li><li><p><strong>ExStart（起始）</strong>：</p><ul><li>路由器开始协商用于建立邻居关系的参数，如 Master/Slave 和 DBD 序列号。</li><li>网络连接正常，但路由器间参数协商失败。</li></ul></li><li><p><strong>Exchange（交换）</strong>：</p><ul><li>路由器交换 DBD 消息以请求对方的 LSDB 副本。</li><li>邻居间链路状态数据库（LSDB）不一致，导致交换信息失败。</li></ul></li><li><p><strong>Loading（加载）</strong>：</p><ul><li>路由器从邻居处获取 LSDB 副本，并开始从邻居处请求缺失的 LSA。</li><li>邻居间网络延迟或丢包导致 LSDB 同步失败。</li></ul></li><li><p><strong>Full（完全）</strong>：</p><ul><li>路由器与邻居建立了完全的邻居关系，并且已经同步了 LSDB。</li><li>邻居之间网络连接稳定，路由器间路由信息同步成功。</li></ul></li></ol><h2 id="lsa" tabindex="-1"><a class="header-anchor" href="#lsa"><span>LSA</span></a></h2><p>常见的 LSA 类型：</p><ol><li><p><strong>Type 1 LSA（Router LSA）</strong>：</p><ul><li>每个 OSPF 路由器在其所属的网络上都会生成一个 Type 1 LSA，并将其发送给相邻路由器。Type 1 LSA 包含了该路由器的链路状态信息，包括其连接到的所有网络和链路的状态。</li></ul></li><li><p><strong>Type 2 LSA（Network LSA）</strong>：</p><ul><li>这种类型的 LSA 由 DR（Designated Router，指定路由器）生成，并描述了所属网络上的所有路由器的状态。Network LSA 用于在非点对点网络上描述连接到该网络的所有 OSPF 路由器。</li></ul></li><li><p><strong>Type 3 LSA（Summary LSA）</strong>：</p><ul><li>Type 3 LSA 用于在 OSPF 区域之间传输路由信息。它描述了一个区域的子网在另一个区域的路径，使得 OSPF 可以进行区域间路由选择。</li></ul></li><li><p><strong>Type 4 LSA（ASBR Summary LSA）</strong>：</p><ul><li>Type 4 LSA 用于描述 ASBR（AS 边界路由器）的汇总信息，以便在 OSPF 区域内部传播到其他区域。</li></ul></li><li><p><strong>Type 5 LSA（External LSA）</strong>：</p><ul><li>Type 5 LSA 用于描述从其他路由协议或手动配置的外部路由信息。它们由 ASBR 发送到 OSPF 区域，并在 OSPF 网络中传播。</li></ul></li><li><p><strong>Type 7 LSA（NSSA External LSA）</strong>：</p><ul><li>Type 7 LSA 是在 NSSA（Not-So-Stubby Area，非完全稳定区域）中使用的外部 LSA 类型，类似于 Type 5 LSA，但在 NSSA 内部传播。NSSA 是 OSPF 的扩展，允许在 OSPF 网络中引入外部路由，而不会影响到其他区域。</li></ul></li></ol><h2 id="路由类型" tabindex="-1"><a class="header-anchor" href="#路由类型"><span>路由类型</span></a></h2><ol><li><p><strong>Intra-Area（区域内路由）</strong>：</p><ul><li>区域内路由指的是在同一个 OSPF 区域内部传输的路由信息。在同一个区域内，OSPF 使用链路状态路由算法计算最短路径，因此这些路由被称为区域内路由。</li></ul></li><li><p><strong>Inter-Area（区域间路由）</strong>：</p><ul><li>区域间路由指的是在不同 OSPF 区域之间传输的路由信息。当一个 OSPF 区域无法直接连接到目的地时，路由将通过其他 OSPF 区域进行转发。这些路由被称为区域间路由。</li></ul></li><li><p><strong>External（外部路由）</strong>：</p><ul><li>外部路由指的是由其他路由协议或手动配置的路由信息。当 OSPF 路由器接收到外部路由信息时，它会将其转换为 OSPF 路由，并在 OSPF 网络中传播。外部路由通常用于连接 OSPF 网络与其他网络，如 BGP 网络或静态路由。</li></ul></li><li><p><strong>AS-External（AS外部路由）</strong>：</p><ul><li>AS 外部路由是一种特殊的外部路由，它通常由另一个自治系统（AS）中的路由协议生成，例如 BGP。AS 外部路由在 OSPF 内部路由表中标记为类型 5 路由，并且具有特殊的属性。</li></ul></li></ol><h2 id="ospf属性" tabindex="-1"><a class="header-anchor" href="#ospf属性"><span>OSPF属性</span></a></h2><table><thead><tr><th></th><th>p2p</th><th>p2mp</th><th>broadcast</th><th>NBMA</th></tr></thead><tbody><tr><td>是否选举DR/BDR</td><td>否</td><td>否</td><td>是</td><td>是</td></tr><tr><td>hello间隔</td><td>10s</td><td>30s</td><td>10s</td><td>30s</td></tr></tbody></table>',12)]))}const s=t(r,[["render",n],["__file","index.html.vue"]]),S=JSON.parse('{"path":"/network/6uzc07te/","title":"ospf","lang":"zh-CN","frontmatter":{"title":"ospf","createTime":"2025/03/04 14:47:50","permalink":"/network/6uzc07te/","description":"状态机 Down（关闭）：初始状态或者邻居关系被断开时的状态。在这个状态下，路由器还没有收到任何邻居的Hello消息。 Init（初始化）：在路由器发送Hello消息后，等待邻居的Hello响应的状态。在这个状态下，路由器已经发送了Hello消息，但还没有收到相应的Hello消息。 Two-Way（双向）：当路由器收到了邻居的Hello消息，并且能够在...","head":[["meta",{"property":"og:url","content":"http://git.x-cli.net/network/6uzc07te/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"ospf"}],["meta",{"property":"og:description","content":"状态机 Down（关闭）：初始状态或者邻居关系被断开时的状态。在这个状态下，路由器还没有收到任何邻居的Hello消息。 Init（初始化）：在路由器发送Hello消息后，等待邻居的Hello响应的状态。在这个状态下，路由器已经发送了Hello消息，但还没有收到相应的Hello消息。 Two-Way（双向）：当路由器收到了邻居的Hello消息，并且能够在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T15:24:40.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-24T15:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ospf\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T15:24:40.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.96,"words":1488},"git":{"updatedTime":1740410680000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":2,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"network/protocol/1.ospf.md"}');export{s as comp,S as data};
