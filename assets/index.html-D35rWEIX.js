import{_ as s,e as a,j as e,o as i}from"./app-DtBkDhJN.js";const t={};function l(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h2 id="dot1x" tabindex="-1"><a class="header-anchor" href="#dot1x"><span>dot1x</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>radius scheme qax</span></span>
<span class="line"><span> primary authentication X.X.X.X</span></span>
<span class="line"><span> secondary authentication X.X.X.X</span></span>
<span class="line"><span> key authentication simple XXX</span></span>
<span class="line"><span> key accounting simple XXX</span></span>
<span class="line"><span> timer quiet 10</span></span>
<span class="line"><span> timer response-timeout 5</span></span>
<span class="line"><span> user-name-format without-domain</span></span>
<span class="line"><span></span></span>
<span class="line"><span>domain qax</span></span>
<span class="line"><span> authentication lan-access radius-scheme qax</span></span>
<span class="line"><span> authorization lan-access none</span></span>
<span class="line"><span> accounting lan-access none</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>dot1x auth eap</span></span>
<span class="line"><span>mac-authentication domain qax </span></span>
<span class="line"><span>domain default enable qax</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>dot1x</span></span>
<span class="line"><span>mac-authentication</span></span>
<span class="line"><span>interface range GigabitEthernet1/0/1</span></span>
<span class="line"><span> port link-mode bridge</span></span>
<span class="line"><span> port link-type hybrid</span></span>
<span class="line"><span> undo port hybrid vlan 1</span></span>
<span class="line"><span> port hybrid vlan 2811 untagged</span></span>
<span class="line"><span> port hybrid pvid vlan 2811</span></span>
<span class="line"><span> mac-vlan enable</span></span>
<span class="line"><span> stp edged-port</span></span>
<span class="line"><span> dot1x</span></span>
<span class="line"><span> mac-authentication</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提权" tabindex="-1"><a class="header-anchor" href="#提权"><span>提权</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>rule name level-1</span></span>
<span class="line"><span>rule 10 permit command screen-length disable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=s(t,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/network/t8pctssw/","title":"h3c","lang":"zh-CN","frontmatter":{"title":"h3c","createTime":"2025/03/04 14:47:50","permalink":"/network/t8pctssw/","description":"dot1x 提权","head":[["meta",{"property":"og:url","content":"http://git.x-cli.net/network/t8pctssw/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"h3c"}],["meta",{"property":"og:description","content":"dot1x 提权"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T15:24:16.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-24T15:24:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"h3c\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T15:24:16.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.4,"words":119},"git":{"updatedTime":1740410656000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":2,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"network/template/3.h3c.md"}');export{d as comp,r as data};
