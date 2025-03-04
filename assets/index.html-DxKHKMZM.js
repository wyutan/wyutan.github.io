import{_ as t,e as s,j as i,o as a}from"./app-DtBkDhJN.js";const n={};function l(o,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h2 id="重置rhel7-9密码" tabindex="-1"><a class="header-anchor" href="#重置rhel7-9密码"><span>重置RHEL7.9密码</span></a></h2><ol><li>重启系统开机过程按<code>E</code></li><li>在以linux16开头的行末尾添加<code>rd.break</code></li><li>按下<code>Ctrl</code> + <code>X</code>启动系统</li><li>挂载根文件系统为可写</li></ol><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mount -o remount,rw /sysroot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>chroot /sysroot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>passwd root</span></span>
<span class="line"><span>touch /.autorelabel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>exit</span></span>
<span class="line"><span>exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const d=t(n,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/os/linux/34hes2b6/","title":"重置RHEL密码","lang":"zh-CN","frontmatter":{"title":"重置RHEL密码","createTime":"2025/03/04 14:47:50","permalink":"/os/linux/34hes2b6/","description":"重置RHEL7.9密码 重启系统开机过程按E 在以linux16开头的行末尾添加rd.break 按下Ctrl + X启动系统 挂载根文件系统为可写","head":[["meta",{"property":"og:url","content":"http://git.x-cli.net/os/linux/34hes2b6/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"重置RHEL密码"}],["meta",{"property":"og:description","content":"重置RHEL7.9密码 重启系统开机过程按E 在以linux16开头的行末尾添加rd.break 按下Ctrl + X启动系统 挂载根文件系统为可写"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T00:23:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-25T00:23:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重置RHEL密码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T00:23:50.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.29,"words":88},"git":{"updatedTime":1740443030000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"os/linux/常用/1.重置RHEL密码.md"}');export{d as comp,c as data};
