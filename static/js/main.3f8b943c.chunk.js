(this.webpackJsonphelloocr=this.webpackJsonphelloocr||[]).push([[0],{111:function(e,t,a){e.exports=a(136)},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(27),o=a.n(r),l=a(40),s=a.n(l),c=a(22),m=a(23),u=a(25),g=a(24),d=a(4),h=(a(126),a(50)),p=a(29),f=a.n(p),b=a(138),v=a(140),E=a(137),y=a(139),k=(a(39),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[this.props.lat,this.props.lng];return i.a.createElement(b.a,{center:e,zoom:13,className:"small-map"},i.a.createElement(v.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(E.a,{position:e},i.a.createElement(y.a,null,"A pretty CSS3 popup. ",i.a.createElement("br",null)," Easily customizable.")))}}]),a}(n.Component)),w=(a(135),n.Component,function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state=n.getInitState(),a}return Object(m.a)(n,[{key:"onDropFiles",value:function(){var e=this;return function(t){console.log(t),e.setState({showSpinner:!0,pagesWithMatchingImages:[],webEntities:[],visuallySimilarImages:[],slideIndex:0,landmarks:[],displayResultsMode:!1,preview:null});var a=f.a.post("https://ocr.kurumbus.com/api/web");t.forEach((function(e){a.attach("file",e)})),a.then((function(t){var a,n,i,r;console.log(t),e.setState({pagesWithMatchingImages:null!==(a=t.body.pages_with_matching_images)&&void 0!==a?a:[],webEntities:null!==(n=t.body.web_entities)&&void 0!==n?n:[],landmarks:null!==(i=t.body.landmarks)&&void 0!==i?i:[],visuallySimilarImages:null!==(r=t.body.visually_similar_images)&&void 0!==r?r:[],showSpinner:!1,displayResultsMode:!0,preview:t.body.file_url})}))}}},{key:"render",value:function(){var e=this;Object(d.r)();return i.a.createElement(d.n,{activeView:"mainView"},i.a.createElement(d.q,{id:"mainView",activePanel:this.state.activePanel},i.a.createElement(d.j,{id:"mainPanel"},i.a.createElement(d.k,null,i.a.createElement(d.l,{status:"\u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u043f\u043e \u0444\u043e\u0442\u043e"},"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435")),i.a.createElement(d.g,null,!this.state.displayResultsMode&&i.a.createElement(d.e,null,i.a.createElement(h.a,{onDrop:this.onDropFiles(),accept:"image/jpeg,image/jpg,image/png"},(function(e){var t=e.getRootProps,a=e.getInputProps;return i.a.createElement("section",null,i.a.createElement(d.b,Object.assign({},t(),{mode:"image",size:"m",header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b",subheader:i.a.createElement("span",null,"\u0434\u043b\u044f \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f"),background:i.a.createElement("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)",backgroundPosition:"right bottom",backgroundSize:"102%",backgroundRepeat:"no-repeat"}},i.a.createElement("input",a())),actions:i.a.createElement(d.c,{mode:"overlay",size:"l"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")})))}))),this.state.displayResultsMode&&i.a.createElement(d.e,null,i.a.createElement(d.b,{mode:"image",size:"m",style:{height:128},className:"result-banner",background:i.a.createElement("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url("+this.state.preview+")",backgroundPosition:"center center",backgroundSize:"100%",backgroundRepeat:"no-repeat"}}),actions:i.a.createElement(d.c,{mode:"overlay",size:"l",onClick:function(){return e._refresh()}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c")}))),this.state.showSpinner&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(d.p,{size:"large",style:{marginTop:20}})),this.state.webEntities.length>0&&i.a.createElement(d.g,{header:i.a.createElement(d.h,{mode:"secondary"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f:")},i.a.createElement(d.e,null,this.state.webEntities.join(", "))),this.state.landmarks.length>0&&i.a.createElement(d.g,{header:i.a.createElement(d.h,{mode:"secondary"},"\u041c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438:")},this.state.landmarks.map((function(t,n){return i.a.createElement(d.e,{style:{marginVertical:20},key:JSON.stringify(t)},i.a.createElement(d.d,{mode:"shadow"},i.a.createElement(d.e,null,t.title),t.locations.length>0&&i.a.createElement(k,{lat:t.locations[0].latitude,lng:t.locations[0].longitude}),t.wiki&&i.a.createElement(d.g,{header:i.a.createElement(d.o,{before:i.a.createElement(d.a,{size:28,src:a(26)})},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0438\u0437 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438")},t.wiki.map((function(t){return i.a.createElement(d.d,{mode:"outline",key:JSON.stringify(t)},i.a.createElement(d.m,{disabled:!0,multiline:!0,before:i.a.createElement(d.a,{size:72,mode:"image",src:e.getWikiImage(t)}),caption:t.extract,actions:i.a.createElement(i.a.Fragment,null,i.a.createElement(d.i,{href:"https://en.wikipedia.org/wiki/"+t.title,target:"_blank"},i.a.createElement(d.c,{mode:"secondary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))},t.title))})))))}))),this.state.pagesWithMatchingImages.length>0&&i.a.createElement(d.g,{header:i.a.createElement(d.h,{mode:"secondary"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438:")},this.state.pagesWithMatchingImages.map((function(t){return i.a.createElement(d.m,{key:JSON.stringify(t),disabled:!0,multiline:!0,before:i.a.createElement(d.a,{size:72,mode:"image",src:e.getPageImage(t)}),actions:i.a.createElement(i.a.Fragment,null,i.a.createElement(d.i,{href:t.url,target:"_blank"},i.a.createElement(d.c,{mode:"secondary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))},t.page_title)}))),this.state.visuallySimilarImages.length>0&&i.a.createElement(d.g,{header:i.a.createElement(d.h,{mode:"secondary"},"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:")},i.a.createElement(d.f,{slideWidth:"90%",align:"center",style:{height:300},slideIndex:this.state.slideIndex,onChange:function(t){return e.setState({slideIndex:t})}},this.state.visuallySimilarImages.map((function(e){return i.a.createElement("div",{style:{backgroundImage:"url("+e+")",backgroundPosition:"right bottom",backgroundSize:"100%",backgroundRepeat:"no-repeat"},key:e})})))))))}},{key:"getPageImage",value:function(e){return e.partial_matching_images&&e.partial_matching_images.length>0?e.partial_matching_images[0].url:e.full_matching_images&&e.full_matching_images.length>0?e.full_matching_images[0].url:a(26)}},{key:"getWikiImage",value:function(e){return e&&e.thumbnail?e.thumbnail.source:a(26)}},{key:"getPreview",value:function(){if(!this.state.preview)return a(26);var e=new FileReader;e.onabort=function(){return console.log("file reading was aborted")},e.onerror=function(){return console.log("file reading has failed")},e.onload=function(){var t=e.result;return console.log(t),e.result},e.readAsArrayBuffer(this.state.preview)}},{key:"_refresh",value:function(){this.setState(n.getInitState())}}],[{key:"getInitState",value:function(){return{activePanel:"mainPanel",pagesWithMatchingImages:[],webEntities:[],showSpinner:!1,visuallySimilarImages:[],landmarks:[],slideIndex:0,displayResultsMode:!1,preview:null}}}]),n}(n.Component)),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.send("VKWebAppInit",{}),o.a.render(i.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hellovkmini",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/hellovkmini","/service-worker.js");I?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()},26:function(e,t,a){e.exports=a.p+"static/media/wiki.87c938e6.svg"}},[[111,1,2]]]);
//# sourceMappingURL=main.3f8b943c.chunk.js.map