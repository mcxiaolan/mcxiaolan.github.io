if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"fb4e06e3a2ee4a18455430d408aa027b"},{url:"about/index.html",revision:"5664589d9e6fe81a0569a2c51995bd39"},{url:"archives/2020/07/index.html",revision:"b862e3d578bbff2482c88011a8308782"},{url:"archives/2020/09/index.html",revision:"5b8e89f8a56d79744ae8cdcf3b413fd3"},{url:"archives/2020/10/index.html",revision:"d7bef73f083f1657ba22467597a69369"},{url:"archives/2020/12/index.html",revision:"da5d991817376037908e5945c05106d7"},{url:"archives/2020/index.html",revision:"5eb485035f6dfabd6123f60b187d30df"},{url:"archives/2021/01/index.html",revision:"c06de9bb29721a5e7264c2ab4533a04c"},{url:"archives/2021/03/index.html",revision:"f593556408e050b57419c54f7fa3ad15"},{url:"archives/2021/04/index.html",revision:"84c38bd285f9fc56bbc77098d2d8a26a"},{url:"archives/2021/06/index.html",revision:"324545bfe7d3333b6d41da5b057c7701"},{url:"archives/2021/07/index.html",revision:"b5b1c30fd304412a15f0659796462841"},{url:"archives/2021/08/index.html",revision:"6d1f3155c54aec3fa6f3ad2df7e0a397"},{url:"archives/2021/index.html",revision:"1275041c5f9cd0ac3fd1986e13f0a03a"},{url:"archives/2021/page/2/index.html",revision:"1f496c5c84cff737800564bbcc04355a"},{url:"archives/index.html",revision:"82ecf054316b23616dca52306386b652"},{url:"archives/page/2/index.html",revision:"0f9aa8f25e47e41fdf6850df42b9c3d4"},{url:"archives/page/3/index.html",revision:"11217271efc67f94e100b088d7a59bd2"},{url:"articles/[置顶]你好，Hexo.html",revision:"f2b79b3396ffc605ded3e252972221fe"},{url:"articles/CloudFlare-搭建短网址程序.html",revision:"38c1ee8330bdfad2db21feaf525545aa"},{url:"articles/Porkbun免费一年gay域名.html",revision:"05be7382737ed30463d74f899f0aa273"},{url:"articles/QQ也能当图床！.html",revision:"5e9662282ca566182ec98e181059148b"},{url:"articles/support-PWA.html",revision:"3588fb9414a1155c381b97196a49ba92"},{url:"articles/使用cloudflare-page搭建小游戏，m3u8在线下载，图片加水印，音乐解锁等在线网页.html",revision:"0374c6077db05468befb9f5355659a54"},{url:"articles/使用Cloudflare-Workers免费搭建静态博客，还有后台！.html",revision:"5e2435c5d2be6848a9285f36cadb3a68"},{url:"articles/使用Github-action给freenom自动续期！.html",revision:"66a4c4b13c5f0a6207ec351b6ca55436"},{url:"articles/使用Heroku免费服务器搭建Onedrive个人网盘！.html",revision:"0b01ca1cf3a1dbc8c3ab270a93864bb1"},{url:"articles/使用Typecho搭建博客（一）.html",revision:"59aa6a012d1f872eff6f8bbaedde561a"},{url:"articles/免费主机列表.html",revision:"67ca8ef61bcd2aee317bc127a890e20d"},{url:"articles/免费白嫖EU-org顶级域名.html",revision:"21c9dd061956da81615a94150eb063e4"},{url:"articles/免费白嫖获取微软E5开发者账号和续期.html",revision:"f3c9f8c1a433b0f49308055e9fe736d4"},{url:"articles/发现了一个白嫖VPS的地方！.html",revision:"0e7dec1b255df57055b3d57ae0f14cff"},{url:"articles/在你的网站右下角添加SSL认证标志！.html",revision:"9894aa9104f44bd7da27abeb90a7ee12"},{url:"articles/如何在QQ发自定义语音.html",revision:"0a4c8ba171f8a49ddbc8747b6fd7aec0"},{url:"articles/如何把Typecho连接中的index-php去掉（伪静态教程）.html",revision:"4a05e818d890ac92fd8e18f2cdb18d1f"},{url:"articles/如何把WordPress连接中的index-php去掉（伪静态教程）.html",revision:"5a6908b1d0632e921fc26e919ab3f31c"},{url:"articles/安卓手机使用Github-Pages-hexo免费搭建博客.html",revision:"7fa1cdcf22a682e7920e03475a127288"},{url:"articles/岚天二级域名分发使用须知.html",revision:"d4f0f10c44adeaa83ce45a4ae3693b5b"},{url:"articles/岚天呀自己搭建的二级域名分发！.html",revision:"4d5cfc203cc4cf875d1e0f13c9ea8ae6"},{url:"articles/白嫖8EB的Google-Team-Drive云端共享硬盘！.html",revision:"bfe0440e09ea48f2c2dad9226089fb60"},{url:"articles/自己搭建的白嫖主机网站！免费！.html",revision:"0b6dcb02f224e31d05afcafae1c10dba"},{url:"articles/获取-Outlook-超短邮箱！.html",revision:"4b2ba346689f72b65d6db95a37e2fb45"},{url:"articles/解决vercel国内被墙问题.html",revision:"b26eafa18d3fafac7bb707e929428c22"},{url:"categories/index.html",revision:"1050feca6de8050bd769ad9743162bb7"},{url:"categories/岚天呀的福利/index.html",revision:"d443fcb119bec36e2d0eedf6ed3ac969"},{url:"categories/教程/index.html",revision:"ec6307aad550a0c79dd04fc4ea1b397d"},{url:"categories/教程/page/2/index.html",revision:"84fd5baa4398a8cb3daf842f61296cfb"},{url:"categories/源码/index.html",revision:"fc607b1144bf3d2875edf407d90b6e81"},{url:"categories/福利/index.html",revision:"b3cb9d0b7e7c03a61da54afc2e1eeaee"},{url:"categories/经历/index.html",revision:"afb8acf72bfd42afd5f504fde1fa6a0b"},{url:"categories/资源分享/index.html",revision:"44863765e8e49839282fa256c9d6cc91"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"e662b340ea942a19827f4b62f1b8948e"},{url:"icon-128.png",revision:"33f4fb591d057b87f5e3fcd465ca0949"},{url:"icon-512.png",revision:"b4937b4ddc6e26f12eefb6ed845df181"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"3c4d1c34d6499a5d63aca3d5ca5f21b7"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"c6cf5c216322ed487d845c91d004b2a0"},{url:"js/events.js",revision:"d1ad0ef23e2b8f5330d37b9432e564af"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"d5b5f8c32b663e0ee42a21be17585f83"},{url:"js/local-search.js",revision:"94369155d7ed57ddb6e464adaa0fbc0e"},{url:"js/plugins.js",revision:"a21bf058047d0f3a2ee95b8c911e6916"},{url:"js/utils.js",revision:"a19e10303f1fc4143cab109ba27dbf75"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"1d5a0a1e8314caa660a9dbce439b0daf"},{url:"messages/index.html",revision:"32255ffbd1c2b1853624cbf114c8942f"},{url:"page/2/index.html",revision:"5d1a5ece1068b69cf0856779e02c902a"},{url:"page/3/index.html",revision:"af2982577051e6c6fa7a019379dc0830"},{url:"tags/CloudFlare/index.html",revision:"cce5c8c15a6d887c0db94bdd5ac94cec"},{url:"tags/freenom/index.html",revision:"37410762418433cab4b10f2d6b96c4b4"},{url:"tags/git/index.html",revision:"77941b5bbe8d7bcf85942f851162d5de"},{url:"tags/github/index.html",revision:"0be4465d7749d1b77b612f30ecc7c439"},{url:"tags/hexo/index.html",revision:"11e1d4b9d8371eaebb95389e2e145b16"},{url:"tags/index.html",revision:"ab94e151e05ba85c361259b7768c6fba"},{url:"tags/nodejs/index.html",revision:"c45dc85a48e3f44f7151b50ff13f5c5c"},{url:"tags/office/index.html",revision:"0b3bab6417e660d63f00bf13a2db83ef"},{url:"tags/onedrive/index.html",revision:"cf42d615f28e25fabfa4fab05a036040"},{url:"tags/onemanager/index.html",revision:"57f9e282a4facace28892e778cca772f"},{url:"tags/outlook/index.html",revision:"114ab2cfafc3af04b77ab638f58efb2d"},{url:"tags/porkbun/index.html",revision:"eb2e8b53ec4d723f2995032bae53d530"},{url:"tags/PWA/index.html",revision:"26957d750dac5f61a7789eda3c427671"},{url:"tags/QQ/index.html",revision:"ec63b69d2a59536933e7c0ad95a6d447"},{url:"tags/ssl/index.html",revision:"558f3761bd745981969e10ca3b851dfa"},{url:"tags/typecho/index.html",revision:"e2c39221ef1da04e6c7e37e08047485c"},{url:"tags/vercel/index.html",revision:"e52e28aab2732010812900ab75c7b46f"},{url:"tags/vps/index.html",revision:"b5707cc4b269b45c047d8bbc24a3a3e0"},{url:"tags/WordPress/index.html",revision:"4703336da4ac263fea67d70d7bd4b065"},{url:"tags/主机/index.html",revision:"ae438a306958a00be1aeeb721f0b3c7f"},{url:"tags/优化/index.html",revision:"bc11c69c15567484ace735622c0f3eb2"},{url:"tags/伪静态/index.html",revision:"04821f599fce3e1c3bb78e1d439b3a14"},{url:"tags/免费/index.html",revision:"a8d09e4b020bcf81a91087834f2e837e"},{url:"tags/免费/page/2/index.html",revision:"f5312085233e93218b8b903e0f08564d"},{url:"tags/免费主机/index.html",revision:"9a34959ef966eebf06164e89def0208c"},{url:"tags/博客/index.html",revision:"70b698fd1768610713083635e11d2ef0"},{url:"tags/咕鸽/index.html",revision:"7680df3dd1a48097b4e5206e0b860b53"},{url:"tags/域名/index.html",revision:"b3f190acc9f4bfbc9c59636ee3ee0815"},{url:"tags/微软/index.html",revision:"a55f33083e49192c4d9b9f942a4e48a2"},{url:"tags/托管/index.html",revision:"f4193ea30dac661477272e147af49318"},{url:"tags/搭建/index.html",revision:"3cc49b9b1a83299f47d17a3870d3b2d0"},{url:"tags/教程/index.html",revision:"c6f03ce22193d33931d4515700ad1d8b"},{url:"tags/服务器/index.html",revision:"9db92a700909ca71ef8b72d0dcfbe9ea"},{url:"tags/白嫖/index.html",revision:"269f08b4cc1b180903e9c70c17544b4d"},{url:"tags/白嫖/page/2/index.html",revision:"12275fe0339882f590b6f6d8a978aa5a"},{url:"tags/短网址/index.html",revision:"6caeabc08c84719bdb354b31c71beea9"},{url:"tags/续期/index.html",revision:"cc7b89ed6d3d5409862f4c678b5a2ab8"},{url:"tags/网盘/index.html",revision:"a66b8d501263bf9b0948f7f1866c2512"},{url:"tags/网站/index.html",revision:"3be3eba8d230666c9ce4d9cf755b69f7"},{url:"tags/美化/index.html",revision:"a0d82004ec03aa94110e8656b084aad6"},{url:"tags/邮箱/index.html",revision:"f8224980c19bd71f5fc914bded564426"}],{})}));
//# sourceMappingURL=service-worker.js.map
