webpackJsonp([1],{"/pAg":function(t,e){},"1VAm":function(t,e){},"4py4":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("tkVl")},null,null).exports,o=a("/ocq"),r=(a("mtWM"),a("kxiW")),c=a.n(r),l={name:"Game",data:function(){return{channel:0,answers:[2,1,2,2,3,3,2,3,3,2,2,1,2,2,1,2,2,2],questions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],qTxt:["請問Durdart內含哪兩種成分","CombAT研究結果中，在IPSS 症狀上何組病人改善最佳?\t","請問Avodart 是哪一家公司的產品\t","請問最適合1st Avodart CoRx的族群\t","下列何項治療準則建議BPH患者具惡化風險因子應接受第一線5ARIs +alpha-blocker合併治療\t","CombAT研究結果中，5ARIs +alpha-blocker合併治療好處可以持續超過多久\t","下列哪個是無法縮小攝護腺,控制長期疾病惡化的藥物\t","關於影片的敘述何者錯誤\t","關於Avodart的敘述何者錯誤\t","唯一複方Dutasteride +alpha-blocker 產品名是\t","一群太監在聊天，猜一成語\t","哪一個有不孕症？\t\t","5ARI用藥滿多久以後就不需再施行TRUSP或尿流速覆檢\t","根據2018 EAU Guideline Prostate volumn大於多少，可能是BPH高風險進展因子\t","死掉的腎 (猜一本小說)\t","什麼油最適合用來炒飯\t","猩猩跟猴子很怕一種線，請問那是什麼線\t","下列哪一種藥品不適合一線處方給Pvo>30g BPH病人\t"],aTxt:[{a:"Dutasteride + Silodosin",b:"Dutasteride + Tamsulosin",c:"Dutasteride + Fintasteride"},{a:"5ARI Combination組",b:" Dutasteride mono use 組",c:"Tamsulosin mono use 組"},{a:"Astellas",b:"GSK",c:"JJ"},{a:"學齡前期兒童",b:"PVol>30g ; PSA>1.5的BPH pt",c:"未成年少女"},{a:"EAU Guideline",b:"AUA Guileline",c:"已上皆是"},{a:"6分鐘",b:"9小時",c:"4年"},{a:"Avodart",b:"Harnalidge",c:"Duodart"},{a:"prostate volume >30g",b:"年紀>60歲",c:"提到mono-alpha-blocker是最佳的治療選擇"},{a:"黃色膠囊",b:"可縮小攝護腺",c:"一天服用2次(Bid)"},{a:"Avodart",b:"Duodart",c:"Proscar"},{a:"說三道四",b:"無稽之談",c:"天方夜譚"},{a:"唐三藏",b:"牛魔王",c:"二郎神"},{a:"半年",b:"一年",c:"一直要做"},{a:"60g",b:"40g",c:"20g"},{a:"西遊記",b:"紅樓夢",c:"水滸傳"},{a:"豬油",b:"印度神油",c:"橄欖油 "},{a:"姻緣線",b:"平行線",c:"拋物線"},{a:"Duodart",b:"新寶納多",c:"Avodart"}],userAnsNow:-1,totalTime:0,totalQuestions:5,score:0,userChoosed:!1,timeLeft:10}},computed:{question:function(){return this.questions[this.channel-1]},answer:function(){return this.answers[this.question-1]},questionTxt:function(){return this.qTxt[this.question-1]},answerTxt:function(){return this.aTxt[this.question-1]},rightAns:function(){return-1===this.userAnsNow?-1:this.answer},wrongAns:function(){return-1!==this.userAnsNow&&this.userAnsNow!=this.answer?this.userAnsNow:-1}},mounted:function(){console.log("game mounted"),this.questions=this.shuffleArray(this.questions),this.startPlayTime(),this.nextQuestion()},created:function(){console.log("game created")},methods:{chooseAnswer:function(t){var e=this;this.userChoosed||(clearInterval(this.answerTimer),this.userAnsNow=t,this.userChoosed=!0,this.userAnsNow===this.answer&&(this.score=Math.floor(100/this.totalQuestions)+this.score),setTimeout(function(){e.nextQuestion()},1500))},nextQuestion:function(){this.channel>=this.totalQuestions?this.endGame():(this.channel+=1,this.userAnsNow=-1,this.userChoosed=!1,this.startAnswerTimer())},startAnswerTimer:function(){var t=this;t.timeLeft=10,t.answerTimer=setInterval(function(){t.timeLeft<=0?t.chooseAnswer(4):t.timeLeft-=1},1e3)},startPlayTime:function(){var t=this;t.totalTime=0,t.playTimer=setInterval(function(){t.totalTime+=1},1e3)},endGame:function(){clearInterval(this.playTimer),console.log("game ended"),this.$emit("gameover",{playTime:this.totalTime,score:this.score})},shuffleArray:function(t){for(var e=t.slice(0),a=e.length-1;a>0;a--){var s=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[s],e[s]=i}return e}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"count"},[t._v(t._s(t.timeLeft))]),t._v(" "),a("div",{staticClass:"gameBox"},[a("div",{staticClass:"question"},[t._v(t._s(t.questionTxt))]),t._v(" "),a("div",{staticClass:"optionBox"},[a("div",{staticClass:"option op1 btn",class:[{right:1==t.rightAns},{wrong:1==t.wrongAns}],on:{click:function(e){t.chooseAnswer(1)}}},[t._v(t._s(t.answerTxt.a))]),t._v(" "),a("div",{staticClass:"option op2 btn",class:[{right:2==t.rightAns},{wrong:2==t.wrongAns}],on:{click:function(e){t.chooseAnswer(2)}}},[t._v(t._s(t.answerTxt.b))]),t._v(" "),a("div",{staticClass:"option op3 btn",class:[{right:3==t.rightAns},{wrong:3==t.wrongAns}],on:{click:function(e){t.chooseAnswer(3)}}},[t._v(t._s(t.answerTxt.c))])])]),t._v(" "),a("div",{staticClass:"info hide"},[a("p",[t._v("\n      channel : "+t._s(t.channel)+"\n    ")]),t._v(" "),a("p",[t._v("\n      quesNo. : "+t._s(t.question)+"\n    ")]),t._v(" "),a("p",[t._v("\n      answer  : "+t._s(t.answer)+"\n    ")]),t._v(" "),a("p",[t._v("\n      score: "+t._s(t.score)+"\n    ")]),t._v(" "),a("p",[t._v("\n      userAnsNow : "+t._s(t.userAnsNow)+"\n    ")]),t._v(" "),a("p",[t._v("\n      right: "+t._s(t.rightAns)+" , wrong: "+t._s(t.wrongAns)+"\n    ")]),t._v(" "),a("p",[t._v("\n      time: "+t._s(t.timeLeft)+"\n    ")])])])},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("/pAg")},"data-v-155a7f18",null).exports,h=(a("sbrb"),a("xJhF"),{name:"MoblieCameraBtn",data:function(){return{oringinalPhoto:"",photoOrientation:null,resetPhoto:null,maxWidth:500,maxHeight:500,callbackFrom:""}},computed:{},mounted:function(){},created:function(){},methods:{onPhotoSelected:function(t){var e=this,a=t.target.files[0],s=new FileReader,i=this;s.onloadend=function(){console.log("load image end"),i.$refs.imgDiv.addEventListener("load",function(){i.resetOrientation(i.$refs.imgDiv.src)}),e.getOrientation(a,function(t){console.log("photo originalOrientation: ",t),i.oringinalPhoto=s.result,t<0||(i.photoOrientation=t)})},s.readAsDataURL(a)},getOrientation:function(t,e){var a=new FileReader;a.onload=function(t){var a=new DataView(t.target.result);if(65496!=a.getUint16(0,!1))return e(-2);for(var s=a.byteLength,i=2;i<s;){var n=a.getUint16(i,!1);if(i+=2,65505==n){if(1165519206!=a.getUint32(i+=2,!1))return e(-1);var o=18761==a.getUint16(i+=6,!1);i+=a.getUint32(i+4,o);var r=a.getUint16(i,o);i+=2;for(var c=0;c<r;c++)if(274==a.getUint16(i+12*c,o))return e(a.getUint16(i+12*c+8,o))}else{if(65280!=(65280&n))break;i+=a.getUint16(i,!1)}}return e(-1)},a.readAsArrayBuffer(t)},ratio:function(t,e,a,s){var i=Math.min(a/t,s/e);return{width:t*i,height:e*i}},resetOrientation:function(t){var e=this.photoOrientation,a=this;console.log("reset image");var s=new Image;s.onload=function(){var t=a.ratio(s.width,s.height,a.maxWidth,a.maxHeight);s.width=t.width,s.height=t.height;var i=s.width,n=s.height,o=a.$refs.canvasDiv,r=o.getContext("2d");switch([5,6,7,8].indexOf(e)>-1?(o.width=n,o.height=i):(o.width=i,o.height=n),e){case 2:r.transform(-1,0,0,1,i,0);break;case 3:r.transform(-1,0,0,-1,i,n);break;case 4:r.transform(1,0,0,-1,0,n);break;case 5:r.transform(0,1,1,0,0,0);break;case 6:r.transform(0,1,-1,0,n,0);break;case 7:r.transform(0,-1,-1,0,n,i);break;case 8:r.transform(0,-1,1,0,0,i);break;default:r.transform(1,0,0,1,0,0)}if(r.drawImage(s,0,0,s.width,s.height),a.resetPhoto=o.toDataURL(),"blob"==a.callbackFrom){var c=a.dataURLtoFile(a.resetPhoto,"a.png");a.$emit("getResetPhoto",c)}else a.$emit("getResetPhoto",o.toDataURL())},s.src=t},dataURLtoFile:function(t,e){for(var a=t.split(","),s=a[0].match(/:(.*?);/)[1],i=atob(a[1]),n=i.length,o=new Uint8Array(n);n--;)o[n]=i.charCodeAt(n);return new File([o],e,{type:s})}}}),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"btn",on:{click:function(e){t.$refs.photoBtn.click()}}},[""==t.oringinalPhoto?a("span",[t._v("請點選(以正面清晰照為主)")]):t._e(),t._v(" "),""!=t.oringinalPhoto?a("span",[t._v("已上傳")]):t._e()]),t._v(" "),a("input",{ref:"photoBtn",staticClass:"hide",attrs:{id:"inputimage",type:"file"},on:{change:t.onPhotoSelected}}),t._v(" "),a("img",{ref:"imgDiv",staticClass:"hide",attrs:{id:"myImg",crossorigin:"anonymous",src:t.oringinalPhoto}}),t._v(" "),a("canvas",{ref:"canvasDiv",staticClass:"hide",attrs:{id:"myCanvas"}})])},staticRenderFns:[]};var g={name:"HelloWorld",data:function(){return{pageChannel:"video",loading:!1,pageChannelArr:["video","form","rule","game","board","finish","Ingredients","ice"],iceArr:[],userData:{hospital:"",username:"",photoName:"",score:0,playTime:0},serialNumber:"",userphotobase64:null,userBoardPhoto:"",videoId:"",videoArr:["W9kGGmSfVeY","RBcov7wMxlM"],videoVars:{autoplay:1,rel:0,showInfo:0},scoreList:[]}},watch:{iceArr:function(t){console.log(t),t.length>3&&this.iceArr.shift()}},computed:{sortScoreList:function(){return this.scoreList.sort(function(t,e){return e.score-t.score||t.playTime-e.playTime})}},mounted:function(){console.log("created"),this.getUrlVideoId(),this.initFirebase(),this.getSerialNumber()},created:function(){},methods:{playerEnd:function(){this.pageChannel="form"},gameover:function(t){console.log(t.playTime,t.score),this.userData.score=t.score,this.userData.playTime=t.playTime,this.uploadUserData()},uploadPhoto:function(t){if(null!=this.userphotobase64&&""!=this.userData.username&&""!=this.userData.hospital){this.pageChannel=this.pageChannelArr[2];var e=this.userphotobase64;this.storage.ref(this.userData.photoName).putString(e,"data_url").then(function(t){console.log("Uploaded a data_url string!")})}else alert("請完成表單")},uploadUserData:function(){var t=this;console.log("upload data"),this.database.push(this.userData).then(function(e){t.pageChannel=t.pageChannelArr[4],t.getBoardData()})},getUrlVideoId:function(){var t=+this.getUrlParameter("vIndex")-1;NaN!=t?(t=t<this.videoArr.length?t:0,this.videoId=this.videoArr[t]):this.videoId=this.videoArr[0]},getUrlParameter:function(t){var e,a,s=decodeURIComponent(window.location.search.substring(1)).split("&");for(a=0;a<s.length;a++)if((e=s[a].split("="))[0]===t)return void 0===e[1]||e[1]},initFirebase:function(){c.a.initializeApp({apiKey:"AIzaSyAfSyBKDOds7c5qRLRHHg2Ug3RHLpNj_HE",authDomain:"gsk-319c7.firebaseapp.com",databaseURL:"https://gsk-319c7.firebaseio.com",projectId:"gsk-319c7",storageBucket:"gsk-319c7.appspot.com",messagingSenderId:"735059452550"}),this.database=c.a.database().ref("posts/"),this.serialDatabase=c.a.database().ref("serialNumber"),this.storage=c.a.storage()},getBoardData:function(){this.loading=!0;var t=this,e=this.storage;this.database.limitToLast(10).once("value",function(a){var s=[];a.forEach(function(t){s.unshift(t.val())}),function(a){var s=0;!function i(){if(s>=a.length)return console.log(a),t.scoreList=a,void(t.loading=!1);var n=e.ref(a[s].photoName);n.getDownloadURL().then(function(t){a[s].photoName=t,s++,i()})}()}(s)})},addIngredient:function(t){var e=this.iceArr.indexOf(t),a=this.iceArr;if(-1!=e)a.splice(e,1);else{if(a.length>=3)return void alert("最多選三種配料，按已選擇配料可以取消");a.push(t)}},getSerialNumber:function(){var t=this;this.serialDatabase.once("value",function(e){var a=+e.val();t.serialNumber=1+a,t.serialDatabase.set(t.serialNumber),t.serialNumber=t.addZero(4,t.serialNumber),t.userData.photoName="photo-"+t.serialNumber})},addZero:function(t,e){for(var a=t;a>0;)e="0"+e,a--;return e.slice(-t)},getResetPhoto:function(t){console.log("getResetPhoto"),this.userphotobase64=t}},components:{Game:d,MoblieCameraBtn:a("VU/8")(h,v,!1,function(t){a("1VAm")},"data-v-0b87e4d6",null).exports}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[1==t.loading?a("div",{staticClass:"page loading"},[a("div",{staticClass:"loadingContainer"},[t._v("\n        計算成績ing\n      ")])]):t._e(),t._v(" "),"video"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"video"}},[a("div",{staticClass:"t1 center"}),t._v(" "),a("youtube",{staticClass:"youtube center mt-50",attrs:{"video-id":t.videoId,"player-vars":t.videoVars,"player-width":"90%"},on:{ended:t.playerEnd}}),t._v(" "),a("div",{staticClass:"btn center mt-50",on:{click:t.playerEnd}},[t._v("下一步")])],1):t._e(),t._v(" "),"form"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"form"}},[a("div",{staticClass:"pageContainer"},[a("div",{staticClass:"t2 mb-100"}),t._v(" "),a("div",{staticClass:"inputWrap form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.hospital,expression:"userData.hospital"}],staticClass:"textInput",attrs:{type:"text",placeholder:""},domProps:{value:t.userData.hospital},on:{input:function(e){e.target.composing||t.$set(t.userData,"hospital",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.username,expression:"userData.username"}],staticClass:"textInput",attrs:{type:"text",placeholder:""},domProps:{value:t.userData.username},on:{input:function(e){e.target.composing||t.$set(t.userData,"username",e.target.value)}}}),t._v(" "),a("MoblieCameraBtn",{staticClass:"textInput",on:{getResetPhoto:t.getResetPhoto}})],1),t._v(" "),a("div",{staticClass:"btn",on:{click:t.uploadPhoto}},[t._v("進入遊戲說明")])])]):t._e(),t._v(" "),"rule"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"rule"}},[a("div",{staticClass:"pageContainer"},[a("div",{staticClass:"t3"}),t._v(" "),a("div",{staticClass:"btn",on:{click:function(e){t.pageChannel="game"}}},[t._v("開始遊戲")])])]):t._e(),t._v(" "),"game"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"game"}},[a("div",{staticClass:"pageContainer"},[a("Game",{on:{gameover:t.gameover}})],1)]):t._e(),t._v(" "),"board"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"board"}},[a("div",{staticClass:"pageContainer"},[a("div",{staticClass:"board mb-50"},[a("div",{staticClass:"manContainer"},[t._l(t.sortScoreList,function(e,s){return a("div",{key:s,staticClass:"man"},[a("span",{staticClass:"u_name"},[t._v(t._s(e.username))]),t._v(" "),a("span",{staticClass:"u_pic",style:{backgroundImage:"url("+e.photoName+")"}}),t._v(" "),a("span",{staticClass:"u_scroe"},[t._v(" "+t._s(e.score))]),t._v(" "),a("span",{staticClass:"u_playtime"},[t._v(t._s(e.playTime)+" 秒")])])}),t._v(" "),a("div",{staticClass:"user man"},[a("span",{staticClass:"u_name"},[t._v(t._s(t.userData.username))]),t._v(" "),a("span",{staticClass:"u_pic",style:{backgroundImage:"url("+t.userphotobase64+")"}}),t._v(" "),a("span",{staticClass:"u_scroe"},[t._v(" "+t._s(t.userData.score))]),t._v(" "),a("span",{staticClass:"u_playtime"},[t._v(t._s(t.userData.playTime)+" 秒")])])],2)]),t._v(" "),a("div",{staticClass:"btn",on:{click:function(e){t.pageChannel="finish"}}},[t._v("領取獎品")])])]):t._e(),t._v(" "),"finish"==t.pageChannel?a("div",{staticClass:"page",attrs:{id:"finish"}},[a("div",{staticClass:"pageContainer"},[a("div",{staticClass:"win"}),t._v(" "),a("div",{staticClass:"btn",on:{click:function(e){t.pageChannel="Ingredients"}}},[t._v("請先選擇配料")])])]):t._e(),t._v(" "),"Ingredients"==t.pageChannel||"ice"==t.pageChannel?a("div",{staticClass:"page bg2",attrs:{id:"Ingredients"}},[a("div",{staticClass:"pageContainer"},["Ingredients"==t.pageChannel?a("div",{staticClass:"t4"}):t._e(),t._v(" "),"Ingredients"==t.pageChannel?a("div",{staticClass:"iceBtns"},[a("div",{staticClass:"ingBtn ingBtn1",on:{click:function(e){t.addIngredient(1)}}}),t._v(" "),a("div",{staticClass:"ingBtn ingBtn2",on:{click:function(e){t.addIngredient(2)}}}),t._v(" "),a("div",{staticClass:"ingBtn ingBtn3",on:{click:function(e){t.addIngredient(3)}}}),t._v(" "),a("div",{staticClass:"ingBtn ingBtn4",on:{click:function(e){t.addIngredient(4)}}}),t._v(" "),a("div",{staticClass:"ingBtn ingBtn5",on:{click:function(e){t.addIngredient(5)}}}),t._v(" "),a("div",{staticClass:"ingBtn ingBtn6",on:{click:function(e){t.addIngredient(6)}}})]):t._e(),t._v(" "),"ice"==t.pageChannel?a("div",{staticClass:"t5"}):t._e(),t._v(" "),a("div",{staticClass:"ice"},[-1!=t.iceArr.indexOf(6)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e6.png")'}}):t._e(),t._v(" "),-1!=t.iceArr.indexOf(5)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e5.png")'}}):t._e(),t._v(" "),-1!=t.iceArr.indexOf(1)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e1.png")'}}):t._e(),t._v(" "),-1!=t.iceArr.indexOf(2)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e2.png")'}}):t._e(),t._v(" "),-1!=t.iceArr.indexOf(4)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e4.png")'}}):t._e(),t._v(" "),-1!=t.iceArr.indexOf(3)?a("div",{staticClass:"ing",staticStyle:{"background-image":'url("../assets/images/e3.png")'}}):t._e()]),t._v(" "),"Ingredients"==t.pageChannel?a("div",{staticClass:" btn",on:{click:function(e){t.pageChannel="ice"}}},[t._v("完成")]):t._e(),t._v(" "),"ice"==t.pageChannel?a("div",{staticClass:"endBox"},[a("div",{staticClass:"number"},[t._v(t._s(t.serialNumber))]),t._v(" "),a("div",{staticClass:"endBtn"})]):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"logo"})])},staticRenderFns:[]};var m=a("VU/8")(g,p,!1,function(t){a("4py4")},"data-v-7b643fb4",null).exports;s.a.use(o.a);var f=new o.a({routes:[{path:"/",name:"HelloWorld",component:m}]}),_=a("5/be");s.a.use(_.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:f,components:{App:n},template:"<App/>"})},tkVl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ed8223e90bea116ade96.js.map