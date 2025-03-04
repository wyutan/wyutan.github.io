import{_ as i,e,j as t,o}from"./app-DtBkDhJN.js";const n={};function r(a,l){return o(),e("div",null,l[0]||(l[0]=[t('<h2 id="bgp的四种报文" tabindex="-1"><a class="header-anchor" href="#bgp的四种报文"><span>BGP的四种报文</span></a></h2><ol><li><strong>open message</strong>： <ul><li>在TCP连接建立后产生</li><li>用于协商邻居建立的关键参数（as number,hold time,router ID）</li><li>hold time以比较小的一方数值为准</li><li>router ID选择方式与OSPF一致</li><li>修改router ID会重置邻居关系</li></ul></li><li><strong>keepalive message</strong>： <ul><li>相当于IGP协议的hello报文</li><li>在open之后产生，用作心跳，确保邻居关系的存在</li><li>消息本身不携带任何参数，依靠IP包头内源地址确认邻居</li><li>默认频率60s，若180s内没有收到下一个keepalive，则认为邻居无效</li><li>keepalive发送频率为协商后的hold time/3</li><li>keepalive可能与open合为一个message发送</li></ul></li><li><strong>update message</strong>： <ul><li>用于在邻居之间交互路由信息</li><li>该消息采用触发更新和增量更新的方式发送</li><li>包含路径的路由前缀以及该路由携带的attribute</li><li>按照共性的方式进行排列（将attribute完全相同的归为一组） <ul><li>一条update可以只通告一条路由，携带多个属性</li><li>一条update也可以通告多条路由，但是属性必须一致</li><li>一条update可以同时撤销多条路由</li></ul></li></ul></li><li><strong>notification</strong>： <ul><li>用于向邻居发送一些错误通告（例：hello time无法协商或者超时、AS号不匹配）</li></ul></li></ol><h2 id="状态机" tabindex="-1"><a class="header-anchor" href="#状态机"><span>状态机</span></a></h2><ol><li><p><strong>Idle（空闲）</strong>：</p><ul><li>路由器启动时的初始状态，表示BGP进程尚未启动或者已经停止。</li><li>如果neighbor指定的为ebgp邻居，则启动直连检测，检测失败保持idle状态，如果检测成功进入active状态，开始尝试TCP连接</li><li>如果neighbor指定的为ibgp邻居，则直接开始查询路由表，无论是否存在路由都转换状态为active，准备尝试TCP连接</li><li>当 BGP 进程启动时，路由器会进入 Idle 状态，等待配置的 BGP 邻居信息。</li></ul></li><li><p><strong>Connect（连接）</strong>：</p><ul><li>连接状态，被动等待TCP连接完成</li><li>如果TCP连接建立成功则直接进入open sent状态</li><li>如果TCP连接建立失败，则进入active状态，尝试重新建立TCP连接</li><li>connect状态一定要从idle状态进入</li></ul></li><li><p><strong>Active（激活）</strong>：</p><ul><li>活动状态，开始进行TCP连接建立</li><li>启动随机延时，确保两边不会同时开始TCP会话</li><li>如果查不到去往邻居的路由，并作为被动连接方，则继续保持该状态，等待对方发起的TCP连接</li><li>如果存在去往邻居的路由，并作为主动连接方，但是收不到对方回应，则继续保持该状态，每30s尝试一次重新连接</li><li>如果存在去往邻居的路由，但是作为被动连接方，并且收到了对端产生的TCP连接，则退回到idle，并立即进入connect状态</li><li>如果TCP连接成功，则立即进入open sent状态，并开始协商，如果协商失败则退回到idle，并重新进入active状态，开始循环</li></ul></li><li><p><strong>OpenSent（已发送Open消息）</strong>：</p><ul><li>打开发送，双方进行参数协商，即产生open message</li><li>如果open message协商成功，则进入到open confirm状态</li><li>如果open message协商失败，则产生notification message并退回到idle</li></ul></li><li><p><strong>OpenConfirm（已确认Open消息）</strong>：</p><ul><li>打开确认，协商取得一致</li><li>如果对等体收到了keepalive，则进入establish状态</li><li>如果对等体收到了notification，则退回到idle状态</li></ul></li><li><p><strong>Established（已建立）</strong>：</p><ul><li>邻居建立成功</li><li>BGP将开始通过update message交互路由信息</li></ul></li></ol><ul><li>配置bgp进程并制定neighbor后，双方初始处于idle状态，开始检查路由</li><li>路由检测完毕后，进入active状态，并启动随机延时计时器</li><li>延时计时器比较小的一方会主动发起TCP连接，而另一方将退回idle并立即进入connect状态</li><li>连接建立后双方进入open sent状态，开始发送open message以及keepalive</li><li>协商完成后，双方进入open confirm状态，并随即进入establish，邻居建立完成</li></ul><h2 id="停留在不同状态原因" tabindex="-1"><a class="header-anchor" href="#停留在不同状态原因"><span>停留在不同状态原因</span></a></h2><ol><li><p><strong>Idle（空闲）状态</strong>：</p><ul><li>EBGP直连检测没有通过</li><li>因为某些BGP feature导致的连接错误，例如：maximum-prefix。</li></ul></li><li><p><strong>Connect（连接）状态</strong>：</p><ul><li>TCP 连接失败，可能是由于网络故障、防火墙配置、路由器配置错误等原因导致的连接问题。</li><li>对端路由器没有正确监听 BGP 连接端口。</li></ul></li><li><p><strong>Active（激活）状态</strong>：</p><ul><li>没有去往邻居的路由</li><li>邻居没有回包路由</li><li>邻居没有neighbor指令</li><li>邻居neighbor指令中的地址错误</li><li>两端AS号不匹配</li><li>两端authentication不通过</li></ul></li><li><p><strong>OpenSent（已发送Open消息）状态</strong>：</p><ul><li>路由器已发送 Open 消息，但是对端没有响应。</li><li>对端返回了错误的 Open 消息，导致参数不匹配。</li></ul></li><li><p><strong>OpenConfirm（已确认Open消息）状态</strong>：</p><ul><li>对端的 Open 消息未能成功确认，可能是由于网络延迟、数据包丢失或者对端配置错误等原因导致的。</li><li>对端的 Open 消息包含了错误的参数，导致无法确认。</li></ul></li><li><p><strong>Established（已建立）状态</strong>：</p><ul><li>正常情况下，进入 Established 状态后，BGP 邻居关系已经建立成功，可以开始交换路由信息。</li><li>如果停留在 Established 状态，但是路由信息没有正确交换，可能是由于路由策略、过滤规则、ACL（访问控制列表）等配置问题导致的。</li></ul></li></ol><h2 id="选路原则" tabindex="-1"><a class="header-anchor" href="#选路原则"><span>选路原则</span></a></h2><h1 id="生成树" tabindex="-1"><a class="header-anchor" href="#生成树"><span>生成树</span></a></h1><h2 id="生成树选举" tabindex="-1"><a class="header-anchor" href="#生成树选举"><span>生成树选举</span></a></h2><ol><li><p><strong>Bridge ID（桥标识）的比较</strong>：</p><ul><li>每个交换机都有一个唯一的 Bridge ID，由优先级（Priority）和 MAC 地址组成。选举过程开始时，所有交换机都自称为根桥，并将自己的 Bridge ID 设置为根桥的 Bridge ID。</li></ul></li><li><p><strong>Bridge ID 的比较</strong>：</p><ul><li>如果有多个交换机具有相同的 Bridge ID，则比较它们的 MAC 地址，MAC 地址较小的交换机将成为根桥。如果 MAC 地址也相同，则比较交换机的优先级，优先级较小的交换机将成为根桥。</li></ul></li><li><p><strong>Root Port（根端口）的选择</strong>：</p><ul><li>在每个非根交换机上，选择到根桥具有最低路径成本的端口作为根端口。路径成本是通过端口到达根桥的路径上的链路成本之和。</li></ul></li><li><p><strong>Designated Port（指定端口）的选择</strong>：</p><ul><li>在每个网段上，选择到根桥具有最低路径成本的交换机端口作为指定端口。其他端口将被设置为阻塞端口，以防止环路的形成。</li></ul></li><li><p><strong>阻塞端口的确定</strong>：</p><ul><li>除了根端口和指定端口外，其余端口将被设置为阻塞状态，不参与数据转发，以确保生成树拓扑结构无环。</li></ul></li><li><p><strong>信息交换和更新</strong>：</p><ul><li>当交换机间的拓扑发生变化时，例如链路故障或新交换机加入网络，生成树协议会通过发送 Bridge Protocol Data Units (BPDU) 来通知其他交换机，从而触发重新选举过程。</li></ul></li></ol>',11)]))}const p=i(n,[["render",r],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/network/3ylf0blz/","title":"bgp","lang":"zh-CN","frontmatter":{"title":"bgp","createTime":"2025/03/04 14:47:50","permalink":"/network/3ylf0blz/","description":"BGP的四种报文 open message： 在TCP连接建立后产生 用于协商邻居建立的关键参数（as number,hold time,router ID） hold time以比较小的一方数值为准 router ID选择方式与OSPF一致 修改router ID会重置邻居关系 keepalive message： 相当于IGP协议的hello报文 ...","head":[["meta",{"property":"og:url","content":"http://git.x-cli.net/network/3ylf0blz/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"bgp"}],["meta",{"property":"og:description","content":"BGP的四种报文 open message： 在TCP连接建立后产生 用于协商邻居建立的关键参数（as number,hold time,router ID） hold time以比较小的一方数值为准 router ID选择方式与OSPF一致 修改router ID会重置邻居关系 keepalive message： 相当于IGP协议的hello报文 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T15:24:56.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-24T15:24:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bgp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T15:24:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":5.94,"words":1783},"git":{"updatedTime":1740410696000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"network/protocol/2.bgp.md"}');export{p as comp,g as data};
