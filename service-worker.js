if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a07700ca8a3c31c5f4b5dfd81c7e50cd"},{url:"about/index.html",revision:"8779a61525ae460efe6a300e1061ebe7"},{url:"archives/2020/07/index.html",revision:"6dabb65df4be5868fe40eacf9ff30de8"},{url:"archives/2020/09/index.html",revision:"05e646835c44c5e5bc92a8c2ef4bcb5b"},{url:"archives/2020/10/index.html",revision:"16437fa42fdbb26f9c5ca5030730a457"},{url:"archives/2020/12/index.html",revision:"e445212efd843c81363a328aa347c8b0"},{url:"archives/2020/index.html",revision:"d14c90503ee22b19e627b734d1119f7b"},{url:"archives/2021/01/index.html",revision:"8061e8b278183d685db977258980b6ac"},{url:"archives/2021/03/index.html",revision:"830f8d687809972cd24b199e225710ae"},{url:"archives/2021/04/index.html",revision:"e2f09906c76746a9df12e7262eb89e93"},{url:"archives/2021/06/index.html",revision:"35db8137be9d75e8ee996e79a39d86e0"},{url:"archives/2021/07/index.html",revision:"9f31185271344df26328f55a6a4b9d86"},{url:"archives/2021/08/index.html",revision:"abbcee099f91d72d65301946df35caa4"},{url:"archives/2021/index.html",revision:"8251e919decdea351fcab1ca0aa90906"},{url:"archives/2021/page/2/index.html",revision:"460998115114f484da5a8c26b82dc046"},{url:"archives/index.html",revision:"2f1dc19b36b0d7dd4752f8d210c6892b"},{url:"archives/page/2/index.html",revision:"61f9c2b1db0549d5f773f9e44c41fde7"},{url:"archives/page/3/index.html",revision:"b9091d6453273ec662dd82a323690611"},{url:"articles/[置顶]你好，Hexo.html",revision:"38b21681edaf32c55e0fe7c5b31eb558"},{url:"articles/CloudFlare-搭建短网址程序.html",revision:"1c755f6b58128be4137813dfc43f7598"},{url:"articles/Porkbun免费一年gay域名.html",revision:"bb0592efde7917b7af9c0c67b08c5d83"},{url:"articles/QQ也能当图床！.html",revision:"aeba3d9c2ee54a273589ff9ad0429c32"},{url:"articles/support-PWA.html",revision:"de226017296c978d92860b6f34e034c3"},{url:"articles/使用cloudflare-page搭建小游戏，m3u8在线下载，图片加水印，音乐解锁等在线网页.html",revision:"09d1bd5be05a6a3ec3551473653d2e00"},{url:"articles/使用Cloudflare-Workers免费搭建静态博客，还有后台！.html",revision:"9dec336f914c0313d68c731f557d2f55"},{url:"articles/使用Github-action给freenom自动续期！.html",revision:"6203985628964c370d4657c01cdf4b86"},{url:"articles/使用Heroku免费服务器搭建Onedrive个人网盘！.html",revision:"1b417c28af45766a28a61b23ba554bca"},{url:"articles/使用Typecho搭建博客（一）.html",revision:"ca58ef73d610d890746289fe85a9692f"},{url:"articles/免费主机列表.html",revision:"6322bade412cc27f72e0c8a1deb3c6be"},{url:"articles/免费白嫖EU-org顶级域名.html",revision:"fb78843d6b6d56546a57e3545d4f99f7"},{url:"articles/免费白嫖获取微软E5开发者账号和续期.html",revision:"7b4b7b2b437a397b9a08fb1da64d3224"},{url:"articles/发现了一个白嫖VPS的地方！.html",revision:"35fef7195821c748a28702693d7ce201"},{url:"articles/在你的网站右下角添加SSL认证标志！.html",revision:"3b2b77364132b59201f3dbd33e54573c"},{url:"articles/如何在QQ发自定义语音.html",revision:"a22e3eca5ae1bbd0158b49ca8e79fb31"},{url:"articles/如何把Typecho连接中的index-php去掉（伪静态教程）.html",revision:"df7ce42e8a3ce26ff4a7537849dd5f6f"},{url:"articles/如何把WordPress连接中的index-php去掉（伪静态教程）.html",revision:"149a1171a472ad8a496a8b20bfea83d0"},{url:"articles/安卓手机使用Github-Pages-hexo免费搭建博客.html",revision:"12a1dc156d561e08b3c3fd415a437b9a"},{url:"articles/岚天二级域名分发使用须知.html",revision:"ab9fcf1384a62125ecb6bb24b14528b0"},{url:"articles/岚天呀自己搭建的二级域名分发！.html",revision:"6f20fdf8f33a9dbaf464ecdf364f085b"},{url:"articles/白嫖8EB的Google-Team-Drive云端共享硬盘！.html",revision:"2acb864cfd55a87597e38b256f3c76da"},{url:"articles/自己搭建的白嫖主机网站！免费！.html",revision:"db96a33a95f7dae9bdbc8e1c3fc58005"},{url:"articles/获取-Outlook-超短邮箱！.html",revision:"4431ec1fdbbba4dd89c1787bff05096c"},{url:"articles/解决vercel国内被墙问题.html",revision:"059d217ef1c2bacb4737784647a14a82"},{url:"categories/index.html",revision:"d9cc07dd6cd6b457e6dbcb05037d2967"},{url:"categories/岚天呀的福利/index.html",revision:"be2803667dfda3079e9847af05c120ba"},{url:"categories/教程/index.html",revision:"b2bd1e629de33ca71aed8f8341869ed9"},{url:"categories/教程/page/2/index.html",revision:"b7f11885597201494c47afc593ab9142"},{url:"categories/源码/index.html",revision:"c6e6a18f3c4267495b02a7a8b200f6a9"},{url:"categories/福利/index.html",revision:"7eb7fd1a64af6e024f66c64e25770e4d"},{url:"categories/经历/index.html",revision:"5cf407eda9a5e06fc5561cca0e5a6d6d"},{url:"categories/资源分享/index.html",revision:"e1a17b45bcb8a43d931d86024de7c642"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"e662b340ea942a19827f4b62f1b8948e"},{url:"icon-128.png",revision:"33f4fb591d057b87f5e3fcd465ca0949"},{url:"icon-512.png",revision:"b4937b4ddc6e26f12eefb6ed845df181"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"b03caa432c11082e60b43ee7610cfbed"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"c6cf5c216322ed487d845c91d004b2a0"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"d5b5f8c32b663e0ee42a21be17585f83"},{url:"js/local-search.js",revision:"94369155d7ed57ddb6e464adaa0fbc0e"},{url:"js/plugins.js",revision:"a21bf058047d0f3a2ee95b8c911e6916"},{url:"js/utils.js",revision:"a19e10303f1fc4143cab109ba27dbf75"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"d8f4fd5db59a1436ba1263947241bed3"},{url:"messages/index.html",revision:"4a465d41bd2036390b6177ea524d8f3a"},{url:"page/2/index.html",revision:"4b2d01d988addb60a10e404accd2ab8f"},{url:"page/3/index.html",revision:"38956d6197cf9e4b2449f1e867fe41f6"},{url:"tags/CloudFlare/index.html",revision:"0f52ec6dd965b681c3cac64844ceb22b"},{url:"tags/freenom/index.html",revision:"504389c4aeeee7bdc87cba73b6b25489"},{url:"tags/git/index.html",revision:"7a785735eef1f878fe9db746152d3ff3"},{url:"tags/github/index.html",revision:"77f2f89819eec8f7be267bac10d7318a"},{url:"tags/hexo/index.html",revision:"02fd1c53a7f5a48247df588df85a9633"},{url:"tags/index.html",revision:"80351b05c10351bb4e8129e41b058a91"},{url:"tags/nodejs/index.html",revision:"02e8168fe90196da9dc9c86cb79c35fd"},{url:"tags/office/index.html",revision:"dd75386e8d5a59d8b41dc7c2e8da0a28"},{url:"tags/onedrive/index.html",revision:"f0d0a28a019bd4dd09cd83ac3d06b3f5"},{url:"tags/onemanager/index.html",revision:"0f20a1c38642edec2406f6b88f87239a"},{url:"tags/outlook/index.html",revision:"ecee89b8ecabc045f55ce16d1999e7fa"},{url:"tags/porkbun/index.html",revision:"92c5ff3db2bb9b27b5e6a4fd777b9d47"},{url:"tags/PWA/index.html",revision:"df4cb7f9efff7039708752ab1c2c6a6b"},{url:"tags/QQ/index.html",revision:"625b3af13f46a296392352ce687f680c"},{url:"tags/ssl/index.html",revision:"0818a23a8eb9a15aa96b4161ca7538b4"},{url:"tags/typecho/index.html",revision:"0f1c7cb7d53dc9b2a9e652e583eab8b8"},{url:"tags/vercel/index.html",revision:"96e66fa2ac96ba8172a65dc58e898e30"},{url:"tags/vps/index.html",revision:"a0e93f6cedfe20a768c443e93aaab5e9"},{url:"tags/WordPress/index.html",revision:"3da7d573e0c5b0b61e2947db0a0e1dda"},{url:"tags/主机/index.html",revision:"b3056a22797a2b1c8d681ee13e7574f4"},{url:"tags/优化/index.html",revision:"d51fd5d3aea5daf5085ce13bac7e6418"},{url:"tags/伪静态/index.html",revision:"c9cb5b3c60cf8633a12c858394794ab3"},{url:"tags/免费/index.html",revision:"dd43b96fdf20ecc9125bc18d108b98be"},{url:"tags/免费/page/2/index.html",revision:"b87436e596de36f3015d17fd1bf06314"},{url:"tags/免费主机/index.html",revision:"4fdd629d2e03eee66bf96e53b221ca8a"},{url:"tags/博客/index.html",revision:"38ee85fad66d75f6aa18d5c634c35e81"},{url:"tags/咕鸽/index.html",revision:"e06365ba8c7809dcfc950a0f38583783"},{url:"tags/域名/index.html",revision:"165090ef28ce15cb1bddb47fbeee66d9"},{url:"tags/微软/index.html",revision:"0b1f3a64c79229b760e25477a32d46e4"},{url:"tags/托管/index.html",revision:"9fc736e09a5f6696cc282fec50303022"},{url:"tags/搭建/index.html",revision:"6dcd72f1c06827a919b4af252d710c7e"},{url:"tags/教程/index.html",revision:"570b447927e8b51fda7aa6b63147f1ed"},{url:"tags/服务器/index.html",revision:"84db175da09e89a1129f6a83a26f7fb7"},{url:"tags/白嫖/index.html",revision:"89e4a39abd5ff3668296e1788480ec54"},{url:"tags/白嫖/page/2/index.html",revision:"8d262966fcf67144f2b703fd4c68f8c2"},{url:"tags/短网址/index.html",revision:"e6bb764bc757165236d239e102f1ff69"},{url:"tags/续期/index.html",revision:"6b174fcb3ea7f55c5fdaaa7da960c5ae"},{url:"tags/网盘/index.html",revision:"85120abf1b6e49fadfd878e96219f945"},{url:"tags/网站/index.html",revision:"eefd9a11c8b821877fd61c059e651292"},{url:"tags/美化/index.html",revision:"0965e9d90fd52319f5f1a616049c240c"},{url:"tags/邮箱/index.html",revision:"3d47bf7779c331ef9d7045f19618e479"}],{})}));
//# sourceMappingURL=service-worker.js.map
