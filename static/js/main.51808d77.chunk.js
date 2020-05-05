(this["webpackJsonpstats-board"]=this["webpackJsonpstats-board"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.a00925e7.svg"},22:function(e,t,a){e.exports=a.p+"static/media/login-background.8c9c4f9d.jpg"},43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),s=a(19),o=a.n(s),c=(a(48),a(1)),l=a(2),u=a(5),h=a(4),d=a(6),m=a(14),p=a(12),f=function(e){return function(t){t(e?{type:"SET_AUTHENTICATED"}:{type:"SET_UNAUTHENTICATED"})}},g=(a(53),a(21)),b=a.n(g),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(t){t.preventDefault(),localStorage.removeItem("FBTokenId"),e.props.setAuth(!1),e.props.history.push("/")},e}return Object(l.a)(a,[{key:"render",value:function(){return this.props.user.isAuth?i.a.createElement("button",{className:"button button-primary",onClick:this.handleLogout},"Logout"):i.a.createElement(d.b,{to:"/login"},i.a.createElement("button",{className:"button button-primary"},"Login"))}}]),a}(i.a.Component),y={setAuth:f},E=Object(p.b)((function(e){return{user:e.user}}),y)(Object(m.g)(v)),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"header"},i.a.createElement(d.b,{to:"/"},i.a.createElement("img",{src:b.a,className:"App-logo",alt:"stats board logo"})),i.a.createElement(E,null))}}]),a}(i.a.Component),O=(a(55),a(56),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"hero-container"},i.a.createElement("span",{className:"hero-intro color-red"},"Introducing Statsboard"),i.a.createElement("h1",null,"All your data available in one central hub"),i.a.createElement("p",null,"Our tool allows you to put all your data at your fingertips within a single central hub. Statsboard improves the quality of your data by harmonizing all datasets into a consistent format."),i.a.createElement(d.b,{to:"/signup"},i.a.createElement("button",{className:"button button-primary"},"Get Started")))}}]),a}(i.a.Component)),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(O,null)}}]),a}(i.a.Component),x=a(13),k=(a(57),a(58),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).canvasRef=i.a.createRef(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted");var e=this.canvasRef.current,t=window.innerWidth,a=window.innerHeight;e.width=t,e.height=a;var r=e.getContext("2d");window.addEventListener("resize",(function(){t=window.innerWidth,a=window.innerHeight,e.width=t,e.height=a,s()}));var i=[];function s(){i=[];for(var e=t>768?420:210,a=0;a<=e;a++){var n=3*Math.random()+1,s={radius:n,minRadius:n,x:o("x",n),y:o("y",n),dx:3*(Math.random()-.5),dy:3*(Math.random()-.5),ctx:r};i.push(new C(s))}}function o(e,n){return"x"===e?Math.random()*(t-2*n)+n:Math.random()*(a-2*n)+n}var c=new N({backgroundColor:"#151a1f",ctx:r});s(),function e(){r.clearRect(0,0,t,a),c.update(),i.forEach((function(e){e.update()})),r.restore(),n=requestAnimationFrame(e)}()}},{key:"componentWillUnmount",value:function(){n&&cancelAnimationFrame(n)}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"canvas",className:"canvas",ref:this.canvasRef})}}]),a}(i.a.Component)),C=function(){function e(t){Object(c.a)(this,e),this.x=t.x,this.y=t.y,this.dx=t.dx,this.dy=t.dy,this.ctx=t.ctx,this.radius=t.radius,this.maxRadius=t.maxRadius||30,this.minRadius=t.minRadius||2,this.colorRange=t.colorRange||["#fd413c","#1d2326"],this.color=this.colorRange[Math.floor(Math.random()*this.colorRange.length)],this.mouse={x:null,y:null},window.innerWidth>768&&this.addMouseListener()}return Object(l.a)(e,[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}},{key:"update",value:function(){var e=window.innerWidth,t=window.innerHeight;(this.x+this.radius>e||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>t||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.mouse.x&&(this.mouse.x-this.x<50&&this.mouse.x-this.x>-50&&this.mouse.y-this.y<50&&this.mouse.y-this.y>-50?this.radius<this.maxRadius&&(this.radius+=1):this.radius>this.minRadius&&(this.radius-=1)),this.draw()}},{key:"addMouseListener",value:function(){var e=this;window.addEventListener("mousemove",(function(t){e.mouse.x=t.x,e.mouse.y=t.y}))}}]),e}(),N=function(){function e(t){Object(c.a)(this,e),this.ctx=t.ctx,this.backgroundColor=t.backgroundColor,this.TWO_PI=2*Math.PI,this.HALF_PI=Math.PI/2,this.wobbleIncrement=0,this.radius=t.size||700,this.segments=12,this.step=this.HALF_PI/this.segments,this.anchors=[],this.radii=[],this.thetaOff=[];for(var a=0;a<this.segments+2;a++)this.anchors.push(0,0),this.radii.push(80*Math.random()-40),this.thetaOff.push(2*Math.random()*Math.PI);this.theta=0,this.thetaRamp=0,this.thetaRampDest=12,this.rampDamp=25}return Object(l.a)(e,[{key:"update",value:function(){this.thetaRamp+=(this.thetaRampDest-this.thetaRamp)/this.rampDamp,this.theta+=.03,this.anchors=[0,this.radius];for(var e=0;e<=this.segments+2;e++){var t=Math.sin(this.thetaOff[e]+this.theta+this.thetaRamp),a=this.radius+this.radii[e]*t,n=a*Math.sin(this.step*e),r=a*Math.cos(this.step*e);this.anchors.push(n,r)}this.ctx.save(),this.ctx.translate(-5,-5),this.ctx.scale(1,1),this.ctx.fillStyle=this.backgroundColor,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.bezierSkin(this.anchors,!1),this.ctx.lineTo(0,0),this.ctx.fill(),this.ctx.clip()}},{key:"bezierSkin",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.calcAvgs(e),n=e.length;if(t){this.ctx.moveTo(a[0],a[1]);for(var r=2;r<n;r+=2){var i=r+1;this.ctx.quadraticCurveTo(e[r],e[i],a[r],a[i])}this.ctx.quadraticCurveTo(e[0],e[1],a[0],a[1])}else{this.ctx.moveTo(e[0],e[1]),this.ctx.lineTo(a[0],a[1]);for(var s=2;s<n-2;s+=2){var o=s+1;this.ctx.quadraticCurveTo(e[s],e[o],a[s],a[o])}this.ctx.lineTo(e[n-2],e[n-1])}}},{key:"calcAvgs",value:function(e){for(var t,a=[],n=e.length,r=2;r<n;r++)t=r-2,a.push((e[t]+e[r])/2);return a.push((e[0]+e[n-2])/2,(e[1]+e[n-1])/2),a}}]),e}(),S=k,A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"server-error"},this.props.error.error)}}]),a}(i.a.Component),T=a(22),I=a.n(T),P=a(18),M=a.n(P),R=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"signup",value:function(e){return M.a.post("https://us-central1-stats-board-2020.cloudfunctions.net/api/signup",e)}},{key:"login",value:function(e){return M.a.post("https://us-central1-stats-board-2020.cloudfunctions.net/api/login",e)}}]),e}(),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).http=new R,e.handleChange=function(t){var a;e.setState((a={},Object(x.a)(a,t.target.name,t.target.value),Object(x.a)(a,"error",{}),a))},e.handleLogin=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password};e.http.login(a).then((function(t){console.log(t),Object.keys(t.data).includes("error")?e.setState({error:t.data,loading:!1}):(localStorage.setItem("FBTokenId","Bearer ".concat(t.data.token)),e.props.setAuth(!0),e.props.history.push("/dashboard"))})).catch((function(t){console.log(t),e.setState({loading:!1,error:t})}))},e.state={loading:!1,email:"",password:"",error:{}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error;return i.a.createElement("div",{className:"login-container"},i.a.createElement("div",{className:"main-bg"},i.a.createElement("img",{src:I.a,tabIndex:"-1",alt:"background"})),i.a.createElement(S,null),i.a.createElement("form",{noValidate:!0,className:"card login-form"},i.a.createElement("h2",null,"Login to you account"),i.a.createElement("p",null,"Use your email to login"),a.error?i.a.createElement(A,{error:a}):null,i.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),i.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),i.a.createElement("button",{className:"button button-primary",onClick:this.handleLogin,disabled:t},t?"Loggin in":"Log in"),i.a.createElement("small",null,"Dont have an account?",i.a.createElement(d.b,{className:"color-red",to:"/signup"},"Sign Up"))))}}]),a}(i.a.Component),D={setAuth:f},U=Object(p.b)((function(e){return{user:e.user}}),D)(Object(m.g)(L)),F=(a(76),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).http=new R,e.handleChange=function(t){var a;e.setState((a={},Object(x.a)(a,t.target.name,t.target.value),Object(x.a)(a,"error",{}),a))},e.handleSignup=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,nickName:e.state.nickName};e.http.signup(a).then((function(t){Object.keys(t.data).includes("error")?e.setState({error:t.data,loading:!1}):(localStorage.setItem("FBTokenId","Bearer ".concat(t.data.token)),e.props.history.push("/dashboard"))})).catch((function(t){console.log(t),e.setState({loading:!1,error:t})}))},e.state={loading:!1,email:"",password:"",confirmPassword:"",nickName:"",error:{}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error;return i.a.createElement("div",{className:"signup-container"},i.a.createElement("div",{className:"main-bg"},i.a.createElement("img",{src:I.a,tabIndex:"-1",alt:"background"})),i.a.createElement(S,null),i.a.createElement("form",{noValidate:!0,className:"card login-form"},i.a.createElement("h2",null,"Create an account"),i.a.createElement("p",null,"Note: Use unique nickname"),a.error?i.a.createElement(A,{error:a}):null,i.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),i.a.createElement("input",{id:"nickName",name:"nickName",type:"text",placeholder:"Nickname",value:this.state.nickName,onChange:this.handleChange}),i.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),i.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChange}),i.a.createElement("button",{className:"button button-primary",onClick:this.handleSignup,disabled:t},"Sign up"),i.a.createElement("small",null,"Dont have an account?",i.a.createElement(d.b,{className:"color-red",to:"/login"},"Log in"))))}}]),a}(i.a.Component)),H=Object(m.g)(F),W=(a(77),a(78),function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"runPagespeedTest",value:function(){var e=this;return new Promise((function(t,a){var n=e.setUpQuery(),r=n.url,i=n.params;M.a.get(r,{params:i}).then((function(e){var n=e.data.lighthouseResult||{};if(n){var r=n.categories.performance.score,i={"First Contentful Paint":n.audits["first-contentful-paint"].displayValue,"Speed Index":n.audits["speed-index"].displayValue,"Time To Interactive":n.audits.interactive.displayValue,"First Meaningful Paint":n.audits["first-meaningful-paint"].displayValue,"First CPU Idle":n.audits["first-cpu-idle"].displayValue,"Estimated Input Latency":n.audits["estimated-input-latency"].displayValue};t({performanceScore:r,lighthouseMetrics:i})}else a(Error("No data found"))})).catch((function(e){console.log(e)}))}))}},{key:"setUpQuery",value:function(){return{url:"https://www.googleapis.com/pagespeedonline/v5/runPagespeed",params:{url:"https://www.ashutoshjainvi.com"}}}},{key:"showLighthouseContent",value:function(e){var t=document.createElement("h2");for(var a in t.textContent="Lighthouse Results",document.body.appendChild(t),e){var n=document.createElement("p");n.textContent="".concat(a,": ").concat(e[a]),document.body.appendChild(n)}}}]),e}()),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).pageSpeedService=new W,n.state={data:{},isLoading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.pageSpeedService.runPagespeedTest().then((function(t){console.log(t),e.setState({isLoading:!1,data:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n={};return void 0!==t.lighthouseMetrics&&(n=Object.keys(t.lighthouseMetrics).map((function(e){return i.a.createElement("div",{className:"card metrics-card",key:e.toString()},i.a.createElement("h4",null,e),i.a.createElement("div",{className:"time-circle"},i.a.createElement("h6",{className:"color-red"},t.lighthouseMetrics[e])))}))),i.a.createElement("div",{className:"page-speed"},i.a.createElement("h2",{className:"heading"},"Page Speed"),i.a.createElement("div",{className:"card welcome-card"},i.a.createElement("p",null,"Welcome to your website's page speed test")),i.a.createElement("div",{className:"performance-results"},i.a.createElement("h3",null,"Performance Results"),i.a.createElement("div",{className:"metrics-container"},a?i.a.createElement("p",{className:"color-blue"},"Auditing your website"):n)))}}]),a}(i.a.Component),V=(a(79),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"side-nav"},i.a.createElement(d.b,{to:"/"},i.a.createElement("img",{src:b.a,className:"app-logo",alt:"stats board logo"})),i.a.createElement("div",{className:"nav-item-container"},i.a.createElement(d.b,{to:"/dashboard",className:"nav-item"},"Overview"),i.a.createElement(d.b,{to:"/dashboard/analytics",className:"nav-item"},"Analytics"),i.a.createElement(d.b,{to:"/dashboard/pagespeed",className:"nav-item"},"Page Speed")),i.a.createElement(E,null))}}]),a}(i.a.Component)),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"dashboard"},i.a.createElement(V,null),i.a.createElement(m.d,null,i.a.createElement(m.b,{exact:!0,path:"/dashboard"},i.a.createElement(U,null)),i.a.createElement(m.b,{path:"/dashboard/analytics"},i.a.createElement("h1",null,"I'm analytics")),i.a.createElement(m.b,{path:"/dashboard/pagespeed"},i.a.createElement(B,null))))}}]),a}(i.a.Component),q=a(40),z=a.n(q),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.setAuth(function(){var e=!1,t=localStorage.FBTokenId;t&&(e=!(1e3*z()(t).exp<Date.now()));return e}())}},{key:"render",value:function(){return console.log(window.location.href),i.a.createElement(d.a,null,this.props.user.isAuth?null:i.a.createElement(w,null),i.a.createElement(m.d,null,i.a.createElement(m.b,{exact:!0,path:"/"},this.props.user.isAuth?i.a.createElement(m.a,{to:"/dashboard"}):i.a.createElement(j,null)),i.a.createElement(m.b,{path:"/login"},this.props.user.isAuth?i.a.createElement(m.a,{to:"/dashboard"}):i.a.createElement(U,null)),i.a.createElement(m.b,{path:"/signup"},this.props.user.isAuth?i.a.createElement(m.a,{to:"/dashboard"}):i.a.createElement(H,null)),i.a.createElement(m.b,{path:"/dashboard"},i.a.createElement(_,null))))}}]),a}(i.a.Component),Q={setAuth:f},G=Object(p.b)((function(e){return{user:e.user}}),Q)(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(16),K=a(41),X=a(42),Y=a.n(X),Z=a(28),ee={isAuth:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":e=Object(Z.a)({},e,{isAuth:!0});break;case"SET_UNAUTHENTICATED":e=Object(Z.a)({},e,{isAuth:!1})}return e},ae=[K.a,Y.a],ne=Object($.c)({user:te}),re=Object($.d)(ne,{},$.a.apply(void 0,ae));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p.a,{store:re},i.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.51808d77.chunk.js.map