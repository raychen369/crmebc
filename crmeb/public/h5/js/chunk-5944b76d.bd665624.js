(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5944b76d"],{"0e52":function(t,e,s){},5608:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time"},[t._v("\n  "+t._s(t.tipText)),!0===t.isDay?s("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.dayText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.hourText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.minuteText))]),s("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),s("span",{staticClass:"timeTxt"},[t._v(t._s(t.secondText))])])},r=[],o=(s("163d"),{name:"CountDown",props:{tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,s=0,a=0,r=0,o=0;e>0?(s=!0===t.isDay?Math.floor(e/86400):0,a=Math.floor(e/3600)-24*s,r=Math.floor(e/60)-24*s*60-60*a,o=Math.floor(e)-24*s*60*60-60*a*60-60*r,a<=9&&(a="0"+a),r<=9&&(r="0"+r),o<=9&&(o="0"+o),t.day=s,t.hour=a,t.minute=r,t.second=o):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}}),i=o,n=s("623f"),c=Object(n["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},"861d":function(t,e,s){"use strict";var a=s("0e52"),r=s.n(a);r.a},adbf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.domStatus,expression:"domStatus"}],class:[t.posterImageStatus?"noscroll product-con":"product-con"]},[s("ProductConSwiper",{attrs:{imgUrls:t.imgUrls}}),s("div",{staticClass:"nav acea-row row-between-wrapper"},[s("div",{staticClass:"money"},[t._v("\n      ￥"),s("span",{staticClass:"num",domProps:{textContent:t._s(t.storeInfo.price)}}),s("span",{staticClass:"y-money",domProps:{textContent:t._s("￥"+t.storeInfo.ot_price)}})]),s("div",{staticClass:"acea-row row-middle"},[s("div",{staticClass:"times"},[s("div",[t._v("距秒杀结束仅剩")]),s("CountDown",{attrs:{"is-day":!1,"tip-text":"","day-text":"","hour-text":" : ","minute-text":" : ","second-text":"",datatime:t.datatime}})],1)])]),s("div",{staticClass:"wrapperRush"},[s("div",{staticClass:"introduce acea-row row-between"},[s("div",{staticClass:"infor",domProps:{textContent:t._s(t.storeInfo.title)}}),s("div",{staticClass:"iconfont icon-fenxiang",on:{click:t.setPosterImageStatus}})]),s("div",{staticClass:"label acea-row row-middle"},[s("div",{staticClass:"stock"},[t._v("\n        累计销售："+t._s(t.storeInfo.total?t.storeInfo.total:0)+" 件\n      ")]),s("div",[t._v("限量: "+t._s(t.storeInfo.quota?t.storeInfo.quota:0)+" 件")])])]),t.attr.productAttr.length?s("div",{staticClass:"attribute acea-row row-between-wrapper",on:{click:t.selecAttrTap}},[s("div",[t._v("\n      "+t._s(t.attrTxt)+"："),s("span",{staticClass:"atterTxt"},[t._v(t._s(t.attrValue))])]),s("div",{staticClass:"iconfont icon-jiantou"})]):t._e(),s("div",{staticClass:"product-intro"},[s("div",{staticClass:"title"},[t._v("产品介绍")]),s("div",{staticClass:"conter",domProps:{innerHTML:t._s(t.storeInfo.description)}})]),s("div",{staticStyle:{height:"1.2rem"}}),s("div",{staticClass:"footerRush acea-row row-between-wrapper"},[s("div",{staticClass:"customerSer acea-row row-center-wrapper row-column",on:{click:function(e){return t.$router.push({path:"/customer/list"})}}},[s("div",{staticClass:"iconfont icon-kefu"}),s("div",[t._v("客服")])]),s("div",{staticClass:"item acea-row row-center-wrapper row-column",on:{click:t.setCollect}},[s("div",{staticClass:"iconfont",class:t.storeInfo.userCollect?"icon-shoucang1":"icon-shoucang"}),s("div",[t._v("收藏")])]),"1"===t.$route.params.status&&t.attr.productSelect.quota>0&&t.attr.productSelect.product_stock>0?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy",on:{click:t.tapBuy}},[t._v("立即抢购")])]):t._e(),"1"===t.$route.params.status&&t.attr.productSelect.quota<=0&&t.attr.productSelect.product_stock<=0?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("已售罄")])]):t._e(),"2"===t.$route.params.status?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("即将开始")])]):t._e(),"0"===t.$route.params.status?s("div",{staticClass:"bnt acea-row"},[s("div",{staticClass:"joinCart",on:{click:t.openAlone}},[t._v("原价购买")]),s("div",{staticClass:"buy bg-color-hui"},[t._v("已结束")])]):t._e()]),s("ProductWindow",{attrs:{attr:t.attr},on:{changeFun:t.changeFun}}),s("StorePoster",{attrs:{posterImageStatus:t.posterImageStatus,posterData:t.posterData},on:{setPosterImageStatus:t.setPosterImageStatus}})],1)},r=[],o=(s("c904"),s("9a33"),s("3bf2")),i=(s("cc57"),s("c5f8")),n=s("5608"),c=s("c6da"),u=s("cbd6"),l=s("ca41"),d=s("73f5"),p=s("e876"),h=s("ed08"),f=s("74f9"),m=s("c24f"),v="SeckillDetails",g={name:"SeckillDetails",components:{ProductConSwiper:i["a"],CountDown:n["a"],ProductWindow:c["a"],StorePoster:u["a"]},props:{},data:function(){return{domStatus:!1,posterData:{image:"",title:"",price:"",code:""},posterImageStatus:!1,action:"",imgUrls:[],storeInfo:[],replyCount:0,reply:[],cartNum:1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:"",unique:"",cart_num:1},productAttr:[]},datatime:0,attrTxt:"请选择",isOpen:!1,attrValue:"",cart_num:1,productValue:[]}},watch:{$route:function(t){var e=this;t.name===v&&e.mountedStart()}},mounted:function(){this.mountedStart()},methods:{setCollect:function(){var t=this,e=t.storeInfo.product_id,s="product";t.storeInfo.userCollect?Object(m["n"])(e,s).then((function(){t.storeInfo.userCollect=!t.storeInfo.userCollect})):Object(m["m"])(e,s).then((function(){t.storeInfo.userCollect=!t.storeInfo.userCollect}))},selecAttrTap:function(){"1"===this.$route.params.status&&(this.attr.cartAttr=!0,this.isOpen=!0)},openAlone:function(){this.$router.push({path:"/detail/"+this.storeInfo.product_id})},mountedStart:function(){var t=this,e=t.$route.params.id;t.datatime=parseInt(t.$route.params.time),Object(l["s"])(e).then((function(e){t.$set(t,"storeInfo",e.data.storeInfo),t.$set(t,"imgUrls",e.data.storeInfo.images),t.$set(t,"replyCount",e.data.replyCount),t.$set(t,"reply",e.data.reply),t.posterData.image=t.storeInfo.image_base,t.attr.productAttr=e.data.productAttr,t.productValue=e.data.productValue,t.updateTitle(),t.storeInfo.title.length>30?t.posterData.title=t.storeInfo.title.substring(0,30)+"...":t.posterData.title=t.storeInfo.title,t.posterData.price=t.storeInfo.price,t.posterData.code=t.storeInfo.code_base,t.setProductSelect(),t.domStatus=!0,t.getImageBase64(),t.setShare(),0!=t.attr.productAttr&&t.DefaultSelect()}))},setShare:function(){Object(h["d"])()&&Object(f["openShareAll"])({desc:this.storeInfo.info,title:this.storeInfo.title,link:location.href,imgUrl:this.storeInfo.image})},getImageBase64:function(){var t=this;Object(p["l"])(this.posterData.image,t.posterData.code).then((function(e){t.posterData.image=e.data.image,t.posterData.code=e.data.code}))},updateTitle:function(){document.title=this.storeInfo.title||this.$route.meta.title},setPosterImageStatus:function(){var t=document.body||document.documentElement;t.scrollTop=0,this.posterImageStatus=!this.posterImageStatus},changeFun:function(t){"object"!==Object(o["a"])(t)&&(t={});var e=t.action||"",s=void 0===t.value?"":t.value;this[e]&&this[e](s)},changeattr:function(t){var e=this;e.attr.cartAttr=t},ChangeAttr:function(t){var e=this.productValue[t];e?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"quota",e.quota),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var s=e.quota||0,a=this.attr.productSelect;t?(a.cart_num++,a.cart_num>s&&(this.$set(this.attr.productSelect,"cart_num",s),this.$set(this,"cart_num",s))):(a.cart_num--,a.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var s in this.productValue)if(this.productValue[s].quota>0){e=this.attr.productAttr.length?s.split(","):[];break}for(var a=0;a<t.length;a++)this.$set(t[a],"index",e[a]);var r=this.productValue[e.sort().join(",")];r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"quota",r.quota),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",r.quota_show),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt","已选择")):!r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):r||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.title),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},setProductSelect:function(){var t=this,e=t.attr;e.productSelect.image=t.storeInfo.image,e.productSelect.store_name=t.storeInfo.title,e.productSelect.price=t.storeInfo.price,e.productSelect.quota=t.storeInfo.stock,e.cartAttr=!1,t.$set(t,"attr",e)},tapBuy:function(){var t=this,e=this;if(0==e.attr.cartAttr)e.attr.cartAttr=!this.attr.attrcartAttr;else{var s={};s.productId=e.storeInfo.product_id,s.cartNum=e.attr.productSelect.cart_num,s.uniqueId=e.attr.productSelect.unique,s.secKillId=e.storeInfo.id,s.new=1,Object(d["m"])(s).then((function(t){e.$router.push({path:"/order/submit/"+t.data.cartId})})).catch((function(e){t.$dialog.error(e.msg)}))}}}},_=g,S=(s("861d"),s("623f")),C=Object(S["a"])(_,a,r,!1,null,"b8d268c0",null);e["default"]=C.exports},ca41:function(t,e,s){"use strict";s.d(e,"n",(function(){return r})),s.d(e,"m",(function(){return o})),s.d(e,"o",(function(){return i})),s.d(e,"q",(function(){return n})),s.d(e,"p",(function(){return c})),s.d(e,"r",(function(){return u})),s.d(e,"t",(function(){return l})),s.d(e,"s",(function(){return d})),s.d(e,"f",(function(){return p})),s.d(e,"a",(function(){return h})),s.d(e,"h",(function(){return f})),s.d(e,"i",(function(){return m})),s.d(e,"b",(function(){return v})),s.d(e,"e",(function(){return g})),s.d(e,"c",(function(){return _})),s.d(e,"j",(function(){return S})),s.d(e,"d",(function(){return C})),s.d(e,"g",(function(){return $})),s.d(e,"l",(function(){return I})),s.d(e,"k",(function(){return b}));var a=s("b775");function r(t){return a["a"].get("/combination/list",t,{login:!1})}function o(t){return a["a"].get("/combination/detail/"+t,{},{login:!1})}function i(t){return a["a"].get("/combination/pink/"+t)}function n(t){return a["a"].post("/combination/remove",t)}function c(t){return a["a"].post("/combination/poster",t)}function u(){return a["a"].get("/seckill/index",{},{login:!1})}function l(t,e){return a["a"].get("/seckill/list/"+t,e,{login:!1})}function d(t){return a["a"].get("/seckill/detail/"+t,{},{login:!1})}function p(t){return a["a"].get("/bargain/list",t,{login:!1})}function h(t){return a["a"].get("/bargain/detail/"+t)}function f(t){return a["a"].post("/bargain/share",t)}function m(t){return a["a"].post("/bargain/start",t)}function v(t){return a["a"].post("/bargain/help",t)}function g(t){return a["a"].post("/bargain/help/price",t)}function _(t){return a["a"].post("/bargain/help/count",t)}function S(t){return a["a"].post("/bargain/start/user",t)}function C(t){return a["a"].post("/bargain/help/list",t)}function $(t){return a["a"].post("/bargain/poster",t)}function I(t){return a["a"].get("/bargain/user/list",t)}function b(t){return a["a"].post("/bargain/user/cancel",t)}}}]);
//# sourceMappingURL=chunk-5944b76d.bd665624.js.map