if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"5c45f83ba5524e947ce0b6c57ab88f09"},{url:"about/index.html",revision:"36784486e770bc89d977ef9711d15a87"},{url:"archives/2020/07/index.html",revision:"a7dea3a3a5822c9710c58e4158cf44af"},{url:"archives/2020/09/index.html",revision:"8e9860aa04b359156ea6cd25fc5fea0c"},{url:"archives/2020/10/index.html",revision:"e69db4c316e2bcf797ca329bc924237b"},{url:"archives/2020/12/index.html",revision:"aba295cecc4236ad152f52634b1c43bb"},{url:"archives/2020/index.html",revision:"460d50899d4d7078474754a93937f7bc"},{url:"archives/2021/01/index.html",revision:"1a62fdcfbcda5df68760470b55a9d92f"},{url:"archives/2021/03/index.html",revision:"b70231feccf0a20da024152b0fa3461d"},{url:"archives/2021/04/index.html",revision:"ff342d866105dfa4a13d263446c179d4"},{url:"archives/2021/06/index.html",revision:"30363f08ad772393af72fb8ff6a5b6ae"},{url:"archives/2021/07/index.html",revision:"7f11ce9efd4d745a9daa303d2c6fedaf"},{url:"archives/2021/08/index.html",revision:"fd6d290af6163a373ae351c5793aa4bd"},{url:"archives/2021/09/index.html",revision:"a2a06f7ff70817c5635a176537be70c7"},{url:"archives/2021/index.html",revision:"8bec29f8dc87e1b1199bcdc9d1f0f7b3"},{url:"archives/2021/page/2/index.html",revision:"4ddd96fe8f56ead4b36d9f0d2f17401b"},{url:"archives/2021/page/3/index.html",revision:"eb804d07c09e6cd48c25c7e5bebc1a68"},{url:"archives/index.html",revision:"5d5d0f64b767680002a7a170278f5ec0"},{url:"archives/page/2/index.html",revision:"ba1fca00685c80c8b6ac8cd924b5aa4c"},{url:"archives/page/3/index.html",revision:"15bb0ae780e134dda4dbf57098e7d7d7"},{url:"articles/[置顶]你好，Hexo.html",revision:"465458b5b345a33330645371cc79b7e7"},{url:"articles/Check-your-SSL.html",revision:"8bddc2e5d25bac7cfb431ac60d6c8b35"},{url:"articles/CloudFlare-搭建短网址程序.html",revision:"d0ac5804fa315cc85d22566fea0fd616"},{url:"articles/Create-fourm.html",revision:"30cd61385d60080ad7f9e7902d9973e2"},{url:"articles/get-freenom-domains.html",revision:"3b95d1b1ae7af01becf4f8986c35570a"},{url:"articles/Porkbun免费一年gay域名.html",revision:"077bcb6c05081befb3f36173669ebc70"},{url:"articles/QQ也能当图床！.html",revision:"224416958d5004af35dc18b8c61d7492"},{url:"articles/support-PWA.html",revision:"47b135f39922f54614243ff06078e651"},{url:"articles/使用cloudflare-page搭建小游戏，m3u8在线下载，图片加水印，音乐解锁等在线网页.html",revision:"46d3dff258d55a7384d61828ad1caf6d"},{url:"articles/使用Cloudflare-Workers免费搭建静态博客，还有后台！.html",revision:"6bbb5b502c6b96a37be52ee2c96618d2"},{url:"articles/使用Github-action给freenom自动续期！.html",revision:"014ca188ae2f0849cbff8d7fa7b6042e"},{url:"articles/使用Heroku免费服务器搭建Onedrive个人网盘！.html",revision:"f449bbdd5ed037d28c9b91fab8b8ec5f"},{url:"articles/使用Typecho搭建博客（一）.html",revision:"513ff3941dafcb97a8d4f40093dadfb8"},{url:"articles/免费主机列表.html",revision:"531bbfd27a09bac9659e2c059c7de295"},{url:"articles/免费白嫖EU-org顶级域名.html",revision:"a095689e7d6c31fde36cc2d0fc3e985b"},{url:"articles/免费白嫖获取微软E5开发者账号和续期.html",revision:"586f7abd530af5378b9d2c287cfa3cfd"},{url:"articles/发现了一个白嫖VPS的地方！.html",revision:"6ce37574db2a76af06a66c35277d6fac"},{url:"articles/在你的网站右下角添加SSL认证标志！.html",revision:"dc40d616c4b429b3f75ff791ec2a92f1"},{url:"articles/如何在QQ发自定义语音.html",revision:"d951fd70058249d82861da055e9f789a"},{url:"articles/如何把Typecho连接中的index-php去掉（伪静态教程）.html",revision:"37fc5f7c7f118e14fa70db766071934a"},{url:"articles/如何把WordPress连接中的index-php去掉（伪静态教程）.html",revision:"35fd77c5447de700d5285c37bd178d12"},{url:"articles/安卓手机使用Github-Pages-hexo免费搭建博客.html",revision:"8988e3b71d8ea91024aa1a34350b6e57"},{url:"articles/岚天二级域名分发使用须知.html",revision:"d90f60ccdad53b5d155ae605e4170822"},{url:"articles/岚天呀自己搭建的二级域名分发！.html",revision:"3a4316b55a90def22a3c1e04e7784dc0"},{url:"articles/白嫖8EB的Google-Team-Drive云端共享硬盘！.html",revision:"b9d023823e89dde73019e1b36aac7a40"},{url:"articles/自己搭建的白嫖主机网站！免费！.html",revision:"a629b0b3c6a588b33368659e498a50d6"},{url:"articles/获取-Outlook-超短邮箱！.html",revision:"745d308950c6b67e7a921e910dffa0f3"},{url:"articles/解决vercel国内被墙问题.html",revision:"78e14166e7d4a1659625bb7fa1f0d939"},{url:"categories/index.html",revision:"d989097fd918d8f4af63daeadf523292"},{url:"categories/岚天呀的福利/index.html",revision:"ade62577110484767d0878007031d98d"},{url:"categories/教程/index.html",revision:"5b756c8f1239772b0c8c680ac942125e"},{url:"categories/教程/page/2/index.html",revision:"4732b8452ef5016a0bbd57491508a6ec"},{url:"categories/源码/index.html",revision:"a4c7c1394f0ee25f8e4a3da3781a5638"},{url:"categories/福利/index.html",revision:"2b56ef117cea9a56624e20e25ccacc6d"},{url:"categories/经历/index.html",revision:"a1ce7d6eb96559982a341e1acb85de08"},{url:"categories/资源分享/index.html",revision:"f3a78b5b7857d7daba9dd4518dd8606e"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"e662b340ea942a19827f4b62f1b8948e"},{url:"icon-128.png",revision:"33f4fb591d057b87f5e3fcd465ca0949"},{url:"icon-512.png",revision:"b4937b4ddc6e26f12eefb6ed845df181"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"18fa84e63c5207d9bc5b0ed8777a5377"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"c6cf5c216322ed487d845c91d004b2a0"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"d5b5f8c32b663e0ee42a21be17585f83"},{url:"js/local-search.js",revision:"94369155d7ed57ddb6e464adaa0fbc0e"},{url:"js/plugins.js",revision:"a21bf058047d0f3a2ee95b8c911e6916"},{url:"js/utils.js",revision:"a19e10303f1fc4143cab109ba27dbf75"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"2720f4d739510359f3a44a59a7574c04"},{url:"messages/index.html",revision:"70a9fce47f6a2d8abc7219acfaac9094"},{url:"page/2/index.html",revision:"9a59513394fe8577ea03ed55a3c8f99a"},{url:"page/3/index.html",revision:"9cb795a369a956e56ea03e304a0029f5"},{url:"tags/CloudFlare/index.html",revision:"734f38478135249cbe678e8fcf894ace"},{url:"tags/flarum/index.html",revision:"78df5e04998b0c5b79f7b2d8ac106205"},{url:"tags/freenom/index.html",revision:"bfe348a60d33485273db33ef67cee4e9"},{url:"tags/git/index.html",revision:"7642349b5ea1d7fda6ffb7ffcb91a422"},{url:"tags/github/index.html",revision:"d952f17a75ebfb5eff929e6b964f1a6e"},{url:"tags/hexo/index.html",revision:"c4b057a75f799ca58e2150417c2770d0"},{url:"tags/hyperbeam/index.html",revision:"cd18db0942fd1d21614b0d2bfb2d5a34"},{url:"tags/index.html",revision:"8ef173334ce1d54be9f96b9c9e136db4"},{url:"tags/nodejs/index.html",revision:"efb76024b63e9d2b5d1cc2bfa39cdde5"},{url:"tags/office/index.html",revision:"deee725be302443864f730dc63a6c779"},{url:"tags/onedrive/index.html",revision:"6142da3727cec32466132b0dbf6ceded"},{url:"tags/onemanager/index.html",revision:"d39bc06f9150b3d2d1284312abaee779"},{url:"tags/outlook/index.html",revision:"ec606a6f0e5a9c5d62303f905a4771df"},{url:"tags/porkbun/index.html",revision:"585520331902baeb32cb60d7a5117261"},{url:"tags/PWA/index.html",revision:"576feb8cdf4d860d0b4245e61e0e174b"},{url:"tags/QQ/index.html",revision:"f953a1e2a2b44b1c34d750f5c89a5e48"},{url:"tags/ssl/index.html",revision:"be048559a26ce594a406e951ff27f73c"},{url:"tags/typecho/index.html",revision:"19bcc8f3f67fb6891646232a97f787ca"},{url:"tags/vercel/index.html",revision:"ca5ad4355698a51bf4a0fd16fa0328a6"},{url:"tags/vps/index.html",revision:"73d7cee44269913855f5a9073ad8eb1e"},{url:"tags/WordPress/index.html",revision:"0d1531dbca6a849ed938b417e2322f58"},{url:"tags/主机/index.html",revision:"36f8109df5eed1074a60af93370a37be"},{url:"tags/优化/index.html",revision:"eca7532f318d0534535bdbd934cbaac7"},{url:"tags/伪静态/index.html",revision:"4eba9988c0af6ce922b6408de8084fa3"},{url:"tags/免费/index.html",revision:"508e8ad6be025a9a2ff3e101d9e17349"},{url:"tags/免费/page/2/index.html",revision:"89ab06c465315e8b5f75e9124abb7644"},{url:"tags/免费主机/index.html",revision:"457924fb695d40ece7553f170c91a58d"},{url:"tags/博客/index.html",revision:"40ed75128496cc51d60799f9568f8357"},{url:"tags/咕鸽/index.html",revision:"7882e2886a5fdc4178e2fc4a5e39a6fa"},{url:"tags/域名/index.html",revision:"ac9159a1f3a6fe65b81d64dcaab997e7"},{url:"tags/微软/index.html",revision:"a91c433a7fbfad522e66fea96e6e4aed"},{url:"tags/托管/index.html",revision:"1921465036d9920d455ce34d0953844b"},{url:"tags/搭建/index.html",revision:"4e21d84d8fa2d5ae41f83dc1e721d2ad"},{url:"tags/教程/index.html",revision:"8bae5da8e8a83d1dea28095492edc6e1"},{url:"tags/服务器/index.html",revision:"1a399da32909d239825ef9f8273a8984"},{url:"tags/白嫖/index.html",revision:"8e9141a41a84f97b00e1437a219ed78e"},{url:"tags/白嫖/page/2/index.html",revision:"3614ca35d7b0b87990efa4f7a71d1567"},{url:"tags/短网址/index.html",revision:"c0468888b31a50bae8ab75bc7e54b378"},{url:"tags/续期/index.html",revision:"c3cd6a57cf63e85a39827376801e93e5"},{url:"tags/网盘/index.html",revision:"2398dac295f76c83fc6a03a4bdb72451"},{url:"tags/网站/index.html",revision:"d41d0fad7556d5cc4b8ed09ba32f0634"},{url:"tags/美化/index.html",revision:"2af80660ef92b3dd2c9938ad610906dd"},{url:"tags/论坛/index.html",revision:"68bd87e5bd683b7eedadf988939151be"},{url:"tags/证书透明/index.html",revision:"244baa92b219a461f9d68dde81d93ead"},{url:"tags/邮箱/index.html",revision:"ad3c4d5a503a418382ba42238b805536"}],{})}));
//# sourceMappingURL=service-worker.js.map
