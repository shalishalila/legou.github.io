import{_ as f,u as $,o,c,a,b as u,F as b,d as p,t as g,e as k,p as I,f as C,g as R,r as h,h as t,w as v,i as x,n as w,j as H,k as N,v as P,l as y}from"./index-a5ee933b.js";import{f as A}from"./home-bbf1c23e.js";const m=n=>(I("data-v-bc7659fa"),n=n(),C(),n),B={class:"app-topnav"},F={class:"container"},M={href:"javascript:;"},V=m(()=>a("i",{class:"iconfont icon-user"},null,-1)),q=m(()=>a("li",null,[a("a",{href:"javascript:;"},"退出登录")],-1)),T=m(()=>a("li",null,[a("a",{href:"javascript:;"},"请先登录")],-1)),D=m(()=>a("li",null,[a("a",{href:"javascript:;"},"免费注册")],-1)),z=k('<li data-v-bc7659fa><a href="javascript:;" data-v-bc7659fa>我的订单</a></li><li data-v-bc7659fa><a href="javascript:;" data-v-bc7659fa>会员中心</a></li><li data-v-bc7659fa><a href="javascript:;" data-v-bc7659fa>帮助中心</a></li><li data-v-bc7659fa><a href="javascript:;" data-v-bc7659fa>关于我们</a></li><li data-v-bc7659fa><a href="javascript:;" data-v-bc7659fa><i class="iconfont icon-phone" data-v-bc7659fa></i>手机版</a></li>',5),E={__name:"app-topnav",setup(n){const s=$(),{profile:d}=s.state.user;return(_,e)=>(o(),c("nav",B,[a("div",F,[a("ul",null,[u(d).token?(o(),c(b,{key:0},[a("li",null,[a("a",M,[V,p(" "+g(u(d).account),1)])]),q],64)):(o(),c(b,{key:1},[T,D],64)),z])])]))}},W=f(E,[["__scopeId","data-v-bc7659fa"]]);const G={class:"app-header-nav"},J={class:"home"},K=["onMousemove","onMouseleave"],O=["src"],Q={__name:"app-header-nav",setup(n){const s=$(),d=R(()=>s.state.category.list),_=r=>{s.commit("category/show",r.id)},e=r=>{s.commit("category/hide",r.id)};return console.log("list",d),(r,ba)=>{const S=h("RouterLink"),j=h("router-link");return o(),c("ul",G,[a("li",J,[t(S,{to:"/"},{default:v(()=>[p("首页")]),_:1})]),(o(!0),c(b,null,x(u(d),i=>(o(),c("li",{key:i.id,onMousemove:l=>_(i),onMouseleave:l=>e(i)},[t(j,{onClick:l=>e(i),to:`/category/${i.id}`},{default:v(()=>[p(g(i.name),1)]),_:2},1032,["onClick","to"]),a("div",{class:w(["layer",{open:i.open}])},[a("ul",null,[(o(!0),c(b,null,x(i.children,l=>(o(),c("li",{key:l.id},[t(j,{onClick:ma=>e(i),to:`/category/sub/${l.id}`},{default:v(()=>[a("img",{src:l.picture,alt:""},null,8,O),a("p",null,g(l.name),1)]),_:2},1032,["onClick","to"])]))),128))])],2)],40,K))),128))])}}},L=f(Q,[["__scopeId","data-v-45844f7a"]]);const U={class:"app-header"},X={class:"container"},Y={class:"logo"},Z=k('<div class="search" data-v-c899e7f8><i class="iconfont icon-search" data-v-c899e7f8></i><input type="text" placeholder="搜一搜" data-v-c899e7f8></div><div class="cart" data-v-c899e7f8><a class="curr" href="#" data-v-c899e7f8><i class="iconfont icon-cart" data-v-c899e7f8></i><em data-v-c899e7f8>2</em></a></div>',2),aa={__name:"app-header",setup(n){return(s,d)=>{const _=h("RouterLink");return o(),c("header",U,[a("div",X,[a("h1",Y,[t(_,{to:"/"},{default:v(()=>[p("小兔鲜")]),_:1})]),t(L),Z])])}}},ta=f(aa,[["__scopeId","data-v-c899e7f8"]]),da="/assets/qrcode-520695e8.jpg";const ea={class:"app-footer"},sa=k('<div class="contact" data-v-dd5bf737><div class="container" data-v-dd5bf737><dl data-v-dd5bf737><dt data-v-dd5bf737>客户服务</dt><dd data-v-dd5bf737><i class="iconfont icon-kefu" data-v-dd5bf737></i> 在线客服</dd><dd data-v-dd5bf737><i class="iconfont icon-question" data-v-dd5bf737></i> 问题反馈</dd></dl><dl data-v-dd5bf737><dt data-v-dd5bf737>关注我们</dt><dd data-v-dd5bf737><i class="iconfont icon-weixin" data-v-dd5bf737></i> 公众号</dd><dd data-v-dd5bf737><i class="iconfont icon-weibo" data-v-dd5bf737></i> 微博</dd></dl><dl data-v-dd5bf737><dt data-v-dd5bf737>下载APP</dt><dd class="qrcode" data-v-dd5bf737><img src="'+da+'" data-v-dd5bf737></dd><dd class="download" data-v-dd5bf737><span data-v-dd5bf737>扫描二维码</span><span data-v-dd5bf737>立马下载APP</span><a href="javascript:;" data-v-dd5bf737>下载页面</a></dd></dl><dl data-v-dd5bf737><dt data-v-dd5bf737>服务热线</dt><dd class="hotline" data-v-dd5bf737>400-0000-000 <small data-v-dd5bf737>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-dd5bf737><div class="container" data-v-dd5bf737><div class="slogan" data-v-dd5bf737><a href="javascript:;" data-v-dd5bf737><i class="iconfont icon-footer01" data-v-dd5bf737></i><span data-v-dd5bf737>价格亲民</span></a><a href="javascript:;" data-v-dd5bf737><i class="iconfont icon-footer02" data-v-dd5bf737></i><span data-v-dd5bf737>物流快捷</span></a><a href="javascript:;" data-v-dd5bf737><i class="iconfont icon-footer03" data-v-dd5bf737></i><span data-v-dd5bf737>品质新鲜</span></a></div><div class="copyright" data-v-dd5bf737><p data-v-dd5bf737><a href="javascript:;" data-v-dd5bf737>关于我们</a><a href="javascript:;" data-v-dd5bf737>帮助中心</a><a href="javascript:;" data-v-dd5bf737>售后服务</a><a href="javascript:;" data-v-dd5bf737>配送与验收</a><a href="javascript:;" data-v-dd5bf737>商务合作</a><a href="javascript:;" data-v-dd5bf737>搜索推荐</a><a href="javascript:;" data-v-dd5bf737>友情链接</a></p><p data-v-dd5bf737>CopyRight © 小兔鲜儿</p></div></div></div>',2),oa=[sa],ca={__name:"app-footer",setup(n){return(s,d)=>(o(),c("footer",ea,oa))}},na=f(ca,[["__scopeId","data-v-dd5bf737"]]);const ia={class:"container"},_a={class:"right"},ra={__name:"app-header-sticky",setup(n){const{y:s}=H();return(d,_)=>{const e=h("RouterLink");return o(),c("div",{class:w(["app-header-sticky",{show:u(s)>=78}])},[N(a("div",ia,[t(e,{class:"logo",to:"/"}),t(L),a("div",_a,[t(e,{to:"/"},{default:v(()=>[p("品牌")]),_:1}),t(e,{to:"/"},{default:v(()=>[p("专题")]),_:1})])],512),[[P,u(s)>=78]])],2)}}},la=f(ra,[["__scopeId","data-v-393d655c"]]),va=a("span",null,"123",-1),pa=[va],fa={__name:"index",setup(n){const s=y(null),d=y(null);return(()=>{A().then(e=>{console.log(e);const r=y(e);d.value=r.value,console.log("list",d)})})(),console.log("productvalue",s),console.log("list",d),console.log("list.value",d.value),(e,r)=>(o(),c("div",null,pa))}};const ua={class:"app-body"},ha={__name:"Layout",setup(n){return $().dispatch("category/getList"),console.log("layout0"),(d,_)=>{const e=h("router-view");return o(),c("div",null,[t(W),t(ta),t(la),a("main",ua,[t(e)]),t(na),t(fa)])}}},$a=f(ha,[["__scopeId","data-v-0d8c0d7a"]]);export{$a as default};
