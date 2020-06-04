(this.webpackJsonphelloocr=this.webpackJsonphelloocr||[]).push([[0],{109:function(e,t,a){e.exports=a(137)},135:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(23),l=a.n(s),o=a(42),r=a.n(o),c=a(54),u=a(24),m=a(25),h=a(31),d=a(30),p=a(2),g=a(12),f=a.n(g),v=(a(125),a(136),a(33)),b=a.n(v),y=a(140),E=a(142),k=a(139),w=a(141),_=(a(132),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[this.props.lat,this.props.lng];return i.a.createElement(y.a,{center:e,zoom:13,className:"small-map"},i.a.createElement(E.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(k.a,{position:e},i.a.createElement(w.a,null,"A pretty CSS3 popup. ",i.a.createElement("br",null)," Easily customizable.")))}}]),a}(n.Component)),S=(a(135),a(53)),I=a.n(S),A=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=n.getInitState(),a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=i.a.createElement(p.l,{activeModal:this.state.activeModal},i.a.createElement(p.j,{dynamicContentHeight:!0,settlingHeight:80,id:"modal_profile_photos",onClose:function(){return e.setState({activeModal:null})},header:i.a.createElement(p.k,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043e\u0442\u043e")},i.a.createElement(p.e,{style:{minHeight:1200}},0==this.state.profilePhotos.length&&i.a.createElement(p.e,null,i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(p.t,{size:"large",style:{marginTop:200}}))),this.state.profilePhotos.length>0&&i.a.createElement(p.e,null,this.state.profilePhotos.map((function(t){return i.a.createElement("img",{alt:"",onClick:function(){e.selectPhoto(t.sizes[2].url)},src:t.sizes[2].url,key:t.sizes[2].url,style:{width:"100%"},onerror:"this.style.display='none'"})}))))),i.a.createElement(p.j,{dynamicContentHeight:!0,settlingHeight:80,id:"modal_albums",onClose:function(){return e.setState({activeModal:null})},header:i.a.createElement(p.k,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u043b\u044c\u0431\u043e\u043c"),style:{minHeight:1200}},0==this.state.albums.length&&i.a.createElement(p.e,null,i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(p.t,{size:"large",style:{marginTop:200}}))),this.state.albums.length>0&&i.a.createElement(p.e,{style:{borderWidth:1}},this.state.albums.map((function(t){return i.a.createElement(p.s,{onClick:function(){e.setActiveAlbum(t)},key:t.thumb_src,before:i.a.createElement(p.a,{size:48,mode:"image",src:t.thumb_src})},t.title)})))));return i.a.createElement(p.r,{activeView:"mainView",modal:t},i.a.createElement(p.u,{id:"mainView",activePanel:this.state.activePanel},i.a.createElement(p.m,{id:"mainPanel"},i.a.createElement(p.n,null,i.a.createElement(p.o,{status:"\u043c\u0435\u0441\u0442\u0430 \u0438 \u043f\u0440\u0438\u0435\u0434\u043c\u0435\u0442\u044b"},"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435")),!this.state.displayResultsMode&&i.a.createElement(p.g,null,i.a.createElement(p.e,null,i.a.createElement(p.f,{top:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",onChange:function(t){return e.onDropFiles(t.target.files[0])},controlSize:"xl",mode:"secondary"})),i.a.createElement(p.e,null,i.a.createElement(p.c,{onClick:function(){return e.selectProfilePhoto()},mode:"secondary",size:"xl"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u0442\u043e \u0438\u0437 \u043f\u0440\u043e\u0444\u0438\u043b\u044f")),i.a.createElement(p.e,null,i.a.createElement(p.c,{onClick:function(){return e.selectWallPhoto()},mode:"secondary",size:"xl"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u0442\u043e \u0441\u043e \u0441\u0442\u0435\u043d\u044b")),i.a.createElement(p.e,null,i.a.createElement(p.c,{onClick:function(){return e.selectAlbumPhoto()},mode:"secondary",size:"xl"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u0442\u043e \u0438\u0437 \u0430\u043b\u044c\u0431\u043e\u043c\u0430")),this.state.error&&i.a.createElement(p.e,null,this.state.error),i.a.createElement(p.p,{icon:i.a.createElement(I.a,null)},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0451\u0442 \u043c\u0435\u0441\u0442\u0430 \u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0430.",i.a.createElement("br",null),"\u041d\u0430\u0445\u043e\u0434\u0438\u0442 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u0441\u0441\u044b\u043b\u043a\u0438.")),this.state.displayResultsMode&&i.a.createElement(p.g,null,i.a.createElement(p.b,{mode:"image",size:"m",header:i.a.createElement(p.e,null),subheader:"",background:i.a.createElement("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url("+this.state.preview+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),actions:i.a.createElement(p.c,{mode:"overlay",size:"l",onClick:function(){return e._refresh()}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c")})),this.state.showSpinner&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(p.t,{size:"large",style:{marginTop:20}})),this.state.landmarks.length>0&&i.a.createElement(p.g,{header:i.a.createElement(p.h,{mode:"secondary"},"\u041c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438:"),style:{marginTop:20}},this.state.landmarks.map((function(t,n){return i.a.createElement(p.e,{style:{marginVertical:20},key:JSON.stringify(t)},i.a.createElement(p.d,{mode:"shadow"},i.a.createElement(p.e,null,t.title),t.locations.length>0&&i.a.createElement(_,{lat:t.locations[0].latitude,lng:t.locations[0].longitude}),t.wiki&&i.a.createElement(p.g,{header:i.a.createElement(p.s,{before:i.a.createElement(p.a,{size:28,src:a(40)})},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0438\u0437 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438")},t.wiki.map((function(t){return i.a.createElement(p.d,{mode:"outline",key:JSON.stringify(t)},i.a.createElement(p.q,{disabled:!0,multiline:!0,before:i.a.createElement(p.a,{size:72,mode:"image",src:e.getWikiImage(t)}),caption:t.extract,actions:i.a.createElement(i.a.Fragment,null,i.a.createElement(p.i,{href:"https://en.wikipedia.org/wiki/"+t.title,target:"_blank"},i.a.createElement(p.c,{mode:"secondary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))},t.title))})))))}))),this.state.webEntities.length>0&&i.a.createElement(p.g,{header:i.a.createElement(p.h,{mode:"secondary"},"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430:")},i.a.createElement(p.e,{style:{marginVertical:20}},i.a.createElement(p.d,{mode:"shadow"},i.a.createElement(p.e,null,this.state.webEntities.join(", ")),i.a.createElement(p.e,null,i.a.createElement(p.c,{mode:"secondary",onClick:function(){e.translateWebEntities()}},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"))))),this.state.pagesWithMatchingImages.length>0&&i.a.createElement(p.g,{header:i.a.createElement(p.h,{mode:"secondary"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438:")},this.state.pagesWithMatchingImages.map((function(t){return i.a.createElement(p.q,{key:JSON.stringify(t),disabled:!0,multiline:!0,before:i.a.createElement(p.a,{size:72,style:{objectFit:"cover"},mode:"image",src:e.getPageImage(t)}),onError:e.addDefaultSrc,actions:i.a.createElement(i.a.Fragment,null,i.a.createElement(p.i,{href:t.url,target:"_blank"},i.a.createElement(p.c,{mode:"secondary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))},t.page_title)}))),this.state.visuallySimilarImages.length>0&&i.a.createElement(p.g,{header:i.a.createElement(p.h,{mode:"secondary"},"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:")},i.a.createElement(p.e,null,this.state.visuallySimilarImages.map((function(e){return i.a.createElement("img",{alt:"",src:e,key:e,style:{width:"100%",objectFit:"cover"},onerror:"this.style.display='none'"})})))))))}},{key:"onDropFiles",value:function(e){var t=[e],a=this;a.setState({showSpinner:!0,status:typeof t,pagesWithMatchingImages:[],webEntities:[],visuallySimilarImages:[],slideIndex:0,landmarks:[],displayResultsMode:!1,preview:null});var n=b.a.post("https://ocr.kurumbus.com/api/web");t.forEach((function(e){n.attach("file",e)})),n.then((function(e){var t,n,i,s;a.setState({pagesWithMatchingImages:null!==(t=e.body.pages_with_matching_images)&&void 0!==t?t:[],webEntities:null!==(n=e.body.web_entities)&&void 0!==n?n:[],landmarks:null!==(i=e.body.landmarks)&&void 0!==i?i:[],visuallySimilarImages:null!==(s=e.body.visually_similar_images)&&void 0!==s?s:[],showSpinner:!1,displayResultsMode:!0,preview:e.body.file_url})}))}},{key:"translateWebEntities",value:function(){var e=this;b.a.post("https://ocr.kurumbus.com/api/translate").send({text:this.state.webEntities.join(", ")}).then((function(t){var a;e.setState({webEntities:null!==(a=t.body.text.split(","))&&void 0!==a?a:[]})}))}},{key:"getPageImage",value:function(e){return e.partial_matching_images&&e.partial_matching_images.length>0?e.partial_matching_images[0].url:e.full_matching_images&&e.full_matching_images.length>0?e.full_matching_images[0].url:a(41)}},{key:"addDefaultSrc",value:function(e){e.target.src=a(41)}},{key:"getWikiImage",value:function(e){return e&&e.thumbnail?e.thumbnail.source:a(40)}},{key:"_refresh",value:function(){this.setState(n.getInitState())}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(c.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"selectProfilePhoto",value:function(){var e=this;this.setState({showSpinner:!0}),f.a.subscribe((function(e){return console.log(e)})),f.a.send("VKWebAppInit",{}),f.a.send("VKWebAppGetAuthToken",{app_id:7481050,scope:"photos"}).then((function(t){e.setState({access_token:t.access_token,error:null});var a=t.access_token;f.a.send("VKWebAppCallAPIMethod",{method:"photos.get",request_id:"32test",params:{rev:1,v:"5.107",album_id:"profile",access_token:a}}).then((function(t){e.setState({profilePhotos:t.response.items,showSpinner:!1},(function(){e.setActiveModal("modal_profile_photos")}))}))})).catch((function(t){return e.setState({error:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c",showSpinner:!1})}))}},{key:"selectWallPhoto",value:function(){var e=this;this.setState({showSpinner:!0}),f.a.subscribe((function(e){return console.log(e)})),f.a.send("VKWebAppInit",{}),f.a.send("VKWebAppGetAuthToken",{app_id:7481050,scope:"photos"}).then((function(t){e.setState({access_token:t.access_token,status:"request",error:null});var a=t.access_token;f.a.send("VKWebAppCallAPIMethod",{method:"photos.get",request_id:"32test",params:{rev:1,v:"5.107",album_id:"wall",access_token:a}}).then((function(t){e.setState({status:t,profilePhotos:t.response.items,showSpinner:!1},(function(){e.setActiveModal("modal_profile_photos")}))})).catch((function(t){e.setState({status:t})}))})).catch((function(t){return e.setState({error:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c",showSpinner:!1})}))}},{key:"selectAlbumPhoto",value:function(){var e=this;this.setState({showSpinner:!0}),f.a.subscribe((function(e){return console.log(e)})),f.a.send("VKWebAppInit",{}),f.a.send("VKWebAppGetAuthToken",{app_id:7481050,scope:"photos"}).then((function(t){e.setState({access_token:t.access_token,status:"request",error:null});var a=t.access_token;f.a.send("VKWebAppCallAPIMethod",{method:"photos.getAlbums",params:{v:"5.107",need_covers:1,access_token:a}}).then((function(t){e.setState({status:t,albums:t.response.items,showSpinner:!1},(function(){e.setActiveModal("modal_albums")}))})).catch((function(t){e.setState({status:t})}))})).catch((function(t){return e.setState({error:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c",showSpinner:!1})}))}},{key:"selectPhoto",value:function(e){this.setState({status:e}),this.setActiveModal(null),this.setState({showSpinner:!0,pagesWithMatchingImages:[],webEntities:[],visuallySimilarImages:[],slideIndex:0,landmarks:[],displayResultsMode:!1,preview:null});var t=this;b.a.post("https://ocr.kurumbus.com/api/web-url").send({file_url:e}).then((function(e){var a,n,i,s;t.setState({pagesWithMatchingImages:null!==(a=e.body.pages_with_matching_images)&&void 0!==a?a:[],webEntities:null!==(n=e.body.web_entities)&&void 0!==n?n:[],landmarks:null!==(i=e.body.landmarks)&&void 0!==i?i:[],visuallySimilarImages:null!==(s=e.body.visually_similar_images)&&void 0!==s?s:[],showSpinner:!1,displayResultsMode:!0,preview:e.body.file_url})}))}},{key:"setActiveAlbum",value:function(e){var t=this;this.setState({showSpinner:!0}),f.a.send("VKWebAppCallAPIMethod",{method:"photos.get",params:{rev:1,v:"5.107",album_id:e.id,access_token:this.state.access_token}}).then((function(e){t.setState({profilePhotos:e.response.items,status:e,showSpinner:!1},(function(){t.setActiveModal("modal_profile_photos")}))})).catch((function(e){return t.setState({status:e})}))}}],[{key:"getInitState",value:function(){return{activePanel:"mainPanel",albums:[],pagesWithMatchingImages:[],webEntities:[],showSpinner:!1,visuallySimilarImages:[],landmarks:[],slideIndex:0,displayResultsMode:!1,preview:null,photos:{},profilePhotos:[],activeModal:null,modalHistory:[],access_token:null,status:null}}}]),n}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.send("VKWebAppInit",{}),l.a.render(i.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hellovkmini",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/hellovkmini","/service-worker.js");M?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):W(e)}))}}()},40:function(e,t,a){e.exports=a.p+"static/media/wiki.87c938e6.svg"},41:function(e,t,a){e.exports=a.p+"static/media/no_image.4ca31efb.svg"}},[[109,1,2]]]);
//# sourceMappingURL=main.a45be3f1.chunk.js.map