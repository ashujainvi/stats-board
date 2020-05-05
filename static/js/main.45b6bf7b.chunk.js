(this["webpackJsonpstats-board"]=this["webpackJsonpstats-board"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.a00925e7.svg"},22:function(e,t,a){e.exports=a.p+"static/media/login-background.8c9c4f9d.jpg"},43:function(e,t,a){e.exports=a(83)},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n,i,r=a(0),s=a.n(r),o=a(19),c=a.n(o),l=(a(48),a(1)),u=a(2),h=a(5),d=a(4),m=a(6),p=a(14),v=a(12),f=function(e){return function(t){t(e?{type:"SET_AUTHENTICATED"}:{type:"SET_UNAUTHENTICATED"})}},g=(a(53),a(21)),b=a.n(g),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLogout=function(e){e.preventDefault(),localStorage.removeItem("FBTokenId"),n.props.setAuth(!1),n.props.history.push("/")},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.user.isAuth,t="/login"===this.props.location.pathname;return e?s.a.createElement("button",{className:"button button-primary",onClick:this.handleLogout},"Logout"):t?s.a.createElement(m.b,{to:"/signup"},s.a.createElement("button",{className:"button button-primary"},"Signup")):s.a.createElement(m.b,{to:"/login"},s.a.createElement("button",{className:"button button-primary"},"Login"))}}]),a}(s.a.Component),E={setAuth:f},w=Object(v.b)((function(e){return{user:e.user}}),E)(Object(p.g)(y)),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement(m.b,{to:"/"},s.a.createElement("img",{src:b.a,className:"App-logo",alt:"stats board logo"})),s.a.createElement(w,null))}}]),a}(s.a.Component),O=(a(55),a(56),a(57),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).canvasRef=s.a.createRef(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted");var e=this.canvasRef.current,t=window.innerWidth,a=window.innerHeight;e.width=t,e.height=a;var i=e.getContext("2d");window.addEventListener("resize",(function(){t=window.innerWidth,a=window.innerHeight,e.width=t,e.height=a,s()}));var r=[];function s(){r=[];for(var e=t>768?120:50,a=0;a<=e;a++){var n=3*Math.random()+1,s={radius:n,minRadius:n,x:o("x",n),y:o("y",n),dx:3*(Math.random()-.5),dy:3*(Math.random()-.5),ctx:i};r.push(new j(s))}}function o(e,n){return"x"===e?Math.random()*(t-2*n)+n:Math.random()*(a-2*n)+n}s(),function e(){i.clearRect(0,0,t,a),r.forEach((function(e){e.update()})),n=requestAnimationFrame(e)}()}},{key:"componentWillUnmount",value:function(){n&&cancelAnimationFrame(n)}},{key:"render",value:function(){return s.a.createElement("canvas",{id:"circle-canvas",className:"circle-canvas",ref:this.canvasRef})}}]),a}(s.a.Component)),j=function(){function e(t){Object(l.a)(this,e),this.x=t.x,this.y=t.y,this.dx=t.dx,this.dy=t.dy,this.ctx=t.ctx,this.radius=t.radius,this.maxRadius=t.maxRadius||30,this.minRadius=t.minRadius||2,this.colorRange=t.colorRange||["#db2e3485","#101218cb"],this.color=this.colorRange[Math.floor(Math.random()*this.colorRange.length)],this.mouse={x:null,y:null},window.innerWidth>768&&this.addMouseListener()}return Object(u.a)(e,[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}},{key:"update",value:function(){var e=window.innerWidth,t=window.innerHeight;(this.x+this.radius>e||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>t||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.mouse.x&&(this.mouse.x-this.x<50&&this.mouse.x-this.x>-50&&this.mouse.y-this.y<50&&this.mouse.y-this.y>-50?this.radius<this.maxRadius&&(this.radius+=1):this.radius>this.minRadius&&(this.radius-=1)),this.draw()}},{key:"addMouseListener",value:function(){var e=this;window.addEventListener("mousemove",(function(t){e.mouse.x=t.x,e.mouse.y=t.y}))}}]),e}(),k=O,N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-container"},s.a.createElement(k,null),s.a.createElement("div",{className:"hero-background"}),s.a.createElement("span",{className:"hero-intro color-red"},"Introducing Statsboard"),s.a.createElement("h1",null,"All your data available in one central hub"),s.a.createElement("p",null,"Our tool allows you to put all your data at your fingertips within a single central hub. Statsboard improves the quality of your data by harmonizing all datasets into a consistent format."),s.a.createElement(m.b,{to:"/signup"},s.a.createElement("button",{className:"button button-primary"},"Get Started")))}}]),a}(s.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(N,null)}}]),a}(s.a.Component),R=a(13),S=(a(58),a(59),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).canvasRef=s.a.createRef(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted");var e=this.canvasRef.current,t=window.innerWidth,a=window.innerHeight;e.width=t,e.height=a;var n=e.getContext("2d");window.addEventListener("resize",(function(){t=window.innerWidth,a=window.innerHeight,e.width=t,e.height=a,s()}));var r=[];function s(){r=[];for(var e=t>768?420:210,a=0;a<=e;a++){var i=3*Math.random()+1,s={radius:i,minRadius:i,x:o("x",i),y:o("y",i),dx:3*(Math.random()-.5),dy:3*(Math.random()-.5),ctx:n};r.push(new M(s))}}function o(e,n){return"x"===e?Math.random()*(t-2*n)+n:Math.random()*(a-2*n)+n}var c=new A({backgroundColor:"#151a1f",ctx:n});s(),function e(){n.clearRect(0,0,t,a),c.update(),r.forEach((function(e){e.update()})),n.restore(),i=requestAnimationFrame(e)}()}},{key:"componentWillUnmount",value:function(){i&&cancelAnimationFrame(i)}},{key:"render",value:function(){return s.a.createElement("canvas",{id:"canvas",className:"canvas",ref:this.canvasRef})}}]),a}(s.a.Component)),M=function(){function e(t){Object(l.a)(this,e),this.x=t.x,this.y=t.y,this.dx=t.dx,this.dy=t.dy,this.ctx=t.ctx,this.radius=t.radius,this.maxRadius=t.maxRadius||30,this.minRadius=t.minRadius||2,this.colorRange=t.colorRange||["#fd413c","#1d2326"],this.color=this.colorRange[Math.floor(Math.random()*this.colorRange.length)],this.mouse={x:null,y:null},window.innerWidth>768&&this.addMouseListener()}return Object(u.a)(e,[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()}},{key:"update",value:function(){var e=window.innerWidth,t=window.innerHeight;(this.x+this.radius>e||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>t||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.mouse.x&&(this.mouse.x-this.x<50&&this.mouse.x-this.x>-50&&this.mouse.y-this.y<50&&this.mouse.y-this.y>-50?this.radius<this.maxRadius&&(this.radius+=1):this.radius>this.minRadius&&(this.radius-=1)),this.draw()}},{key:"addMouseListener",value:function(){var e=this;window.addEventListener("mousemove",(function(t){e.mouse.x=t.x,e.mouse.y=t.y}))}}]),e}(),A=function(){function e(t){Object(l.a)(this,e),this.ctx=t.ctx,this.backgroundColor=t.backgroundColor,this.TWO_PI=2*Math.PI,this.HALF_PI=Math.PI/2,this.wobbleIncrement=0,this.radius=t.size||700,this.segments=12,this.step=this.HALF_PI/this.segments,this.anchors=[],this.radii=[],this.thetaOff=[];for(var a=0;a<this.segments+2;a++)this.anchors.push(0,0),this.radii.push(80*Math.random()-40),this.thetaOff.push(2*Math.random()*Math.PI);this.theta=0,this.thetaRamp=0,this.thetaRampDest=12,this.rampDamp=25}return Object(u.a)(e,[{key:"update",value:function(){this.thetaRamp+=(this.thetaRampDest-this.thetaRamp)/this.rampDamp,this.theta+=.03,this.anchors=[0,this.radius];for(var e=0;e<=this.segments+2;e++){var t=Math.sin(this.thetaOff[e]+this.theta+this.thetaRamp),a=this.radius+this.radii[e]*t,n=a*Math.sin(this.step*e),i=a*Math.cos(this.step*e);this.anchors.push(n,i)}this.ctx.save(),this.ctx.translate(-5,-5),this.ctx.scale(1,1),this.ctx.fillStyle=this.backgroundColor,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.bezierSkin(this.anchors,!1),this.ctx.lineTo(0,0),this.ctx.fill(),this.ctx.clip()}},{key:"bezierSkin",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.calcAvgs(e),n=e.length;if(t){this.ctx.moveTo(a[0],a[1]);for(var i=2;i<n;i+=2){var r=i+1;this.ctx.quadraticCurveTo(e[i],e[r],a[i],a[r])}this.ctx.quadraticCurveTo(e[0],e[1],a[0],a[1])}else{this.ctx.moveTo(e[0],e[1]),this.ctx.lineTo(a[0],a[1]);for(var s=2;s<n-2;s+=2){var o=s+1;this.ctx.quadraticCurveTo(e[s],e[o],a[s],a[o])}this.ctx.lineTo(e[n-2],e[n-1])}}},{key:"calcAvgs",value:function(e){for(var t,a=[],n=e.length,i=2;i<n;i++)t=i-2,a.push((e[t]+e[i])/2);return a.push((e[0]+e[n-2])/2,(e[1]+e[n-1])/2),a}}]),e}(),T=S,P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"server-error"},this.props.error.error)}}]),a}(s.a.Component),I=a(22),L=a.n(I),D=a(18),U=a.n(D),W=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"signup",value:function(e){return U.a.post("https://us-central1-stats-board-2020.cloudfunctions.net/api/signup",e)}},{key:"login",value:function(e){return U.a.post("https://us-central1-stats-board-2020.cloudfunctions.net/api/login",e)}}]),e}(),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).http=new W,e.handleChange=function(t){var a;e.setState((a={},Object(R.a)(a,t.target.name,t.target.value),Object(R.a)(a,"error",{}),a))},e.handleLogin=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password};e.http.login(a).then((function(t){console.log(t),Object.keys(t.data).includes("error")?e.setState({error:t.data,loading:!1}):(localStorage.setItem("FBTokenId","Bearer ".concat(t.data.token)),e.props.setAuth(!0),e.props.history.push("/dashboard"))})).catch((function(t){console.log(t),e.setState({loading:!1,error:t})}))},e.state={loading:!1,email:"",password:"",error:{}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error;return s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"main-bg"},s.a.createElement("img",{src:L.a,tabIndex:"-1",alt:"background"})),s.a.createElement(T,null),s.a.createElement("form",{noValidate:!0,className:"card login-form"},s.a.createElement("h2",null,"Login to you account"),s.a.createElement("p",null,"Use your email to login"),a.error?s.a.createElement(P,{error:a}):null,s.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),s.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("button",{className:"button button-primary",onClick:this.handleLogin,disabled:t},t?"Loggin in":"Log in"),s.a.createElement("small",null,"Dont have an account?",s.a.createElement(m.b,{className:"color-red",to:"/signup"},"Sign Up"))))}}]),a}(s.a.Component),H={setAuth:f},B=Object(v.b)((function(e){return{user:e.user}}),H)(Object(p.g)(F)),V=(a(77),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).http=new W,e.handleChange=function(t){var a;e.setState((a={},Object(R.a)(a,t.target.name,t.target.value),Object(R.a)(a,"error",{}),a))},e.handleSignup=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,nickName:e.state.nickName};e.http.signup(a).then((function(t){Object.keys(t.data).includes("error")?e.setState({error:t.data,loading:!1}):(localStorage.setItem("FBTokenId","Bearer ".concat(t.data.token)),e.props.history.push("/dashboard"))})).catch((function(t){console.log(t),e.setState({loading:!1,error:t})}))},e.state={loading:!1,email:"",password:"",confirmPassword:"",nickName:"",error:{}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error;return s.a.createElement("div",{className:"signup-container"},s.a.createElement("div",{className:"main-bg"},s.a.createElement("img",{src:L.a,tabIndex:"-1",alt:"background"})),s.a.createElement(T,null),s.a.createElement("form",{noValidate:!0,className:"card login-form"},s.a.createElement("h2",null,"Create an account"),s.a.createElement("p",null,"Note: Use unique nickname"),a.error?s.a.createElement(P,{error:a}):null,s.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),s.a.createElement("input",{id:"nickName",name:"nickName",type:"text",placeholder:"Nickname",value:this.state.nickName,onChange:this.handleChange}),s.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChange}),s.a.createElement("button",{className:"button button-primary",onClick:this.handleSignup,disabled:t},"Sign up"),s.a.createElement("small",null,"Dont have an account?",s.a.createElement(m.b,{className:"color-red",to:"/login"},"Log in"))))}}]),a}(s.a.Component)),q=Object(p.g)(V),_=(a(78),a(79),function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"runPagespeedTest",value:function(){var e=this;return new Promise((function(t,a){var n=e.setUpQuery(),i=n.url,r=n.params;U.a.get(i,{params:r}).then((function(e){var n=e.data.lighthouseResult||{};if(n){var i=n.categories.performance.score,r={"First Contentful Paint":n.audits["first-contentful-paint"].displayValue,"Speed Index":n.audits["speed-index"].displayValue,"Time To Interactive":n.audits.interactive.displayValue,"First Meaningful Paint":n.audits["first-meaningful-paint"].displayValue,"First CPU Idle":n.audits["first-cpu-idle"].displayValue,"Estimated Input Latency":n.audits["estimated-input-latency"].displayValue};t({performanceScore:i,lighthouseMetrics:r})}else a(Error("No data found"))})).catch((function(e){console.log(e)}))}))}},{key:"setUpQuery",value:function(){return{url:"https://www.googleapis.com/pagespeedonline/v5/runPagespeed",params:{url:"https://www.ashutoshjainvi.com"}}}},{key:"showLighthouseContent",value:function(e){var t=document.createElement("h2");for(var a in t.textContent="Lighthouse Results",document.body.appendChild(t),e){var n=document.createElement("p");n.textContent="".concat(a,": ").concat(e[a]),document.body.appendChild(n)}}}]),e}()),z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).pageSpeedService=new _,n.state={data:{},isLoading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.pageSpeedService.runPagespeedTest().then((function(t){console.log(t),e.setState({isLoading:!1,data:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n={};return void 0!==t.lighthouseMetrics&&(n=Object.keys(t.lighthouseMetrics).map((function(e){return s.a.createElement("div",{className:"card metrics-card",key:e.toString()},s.a.createElement("h4",null,e),s.a.createElement("div",{className:"time-circle"},s.a.createElement("h6",{className:"color-red"},t.lighthouseMetrics[e])))}))),s.a.createElement("div",{className:"page-speed"},s.a.createElement("h2",{className:"heading"},"Page Speed"),s.a.createElement("div",{className:"card welcome-card"},s.a.createElement("p",null,"Welcome to your website's page speed test")),s.a.createElement("div",{className:"performance-results"},s.a.createElement("h3",null,"Performance Results"),s.a.createElement("div",{className:"metrics-container"},a?s.a.createElement("p",{className:"color-blue"},"Auditing your website"):n)))}}]),a}(s.a.Component),J=(a(80),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("nav",{className:"side-nav"},s.a.createElement(m.b,{to:"/"},s.a.createElement("img",{src:b.a,className:"app-logo",alt:"stats board logo"})),s.a.createElement("div",{className:"nav-item-container"},s.a.createElement(m.c,{to:"/dashboard/overview",className:"nav-item",activeClassName:"nav-item-active"},"Overview"),s.a.createElement(m.c,{to:"/dashboard/analytics",className:"nav-item",activeClassName:"nav-item-active"},"Analytics"),s.a.createElement(m.c,{to:"/dashboard/pagespeed",className:"nav-item",activeClassName:"nav-item-active"},"Page Speed")),s.a.createElement(w,null))}}]),a}(s.a.Component)),Q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.match.path;return s.a.createElement("div",{className:"dashboard"},s.a.createElement(J,null),s.a.createElement(p.d,null,s.a.createElement(p.b,{exact:!0,path:e},s.a.createElement(p.a,{to:"".concat(e,"/overview")})),s.a.createElement(p.b,{path:"".concat(e,"/overview")},s.a.createElement("h1",null,"overview")),s.a.createElement(p.b,{path:"".concat(e,"/analytics")},s.a.createElement("h1",null,"I'm analytics")),s.a.createElement(p.b,{path:"".concat(e,"/pagespeed")},s.a.createElement(z,null))))}}]),a}(s.a.Component),G=Object(p.g)(Q),$=a(40),K=a.n($),X=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.setAuth(function(){var e=!1,t=localStorage.FBTokenId;t&&(e=!(1e3*K()(t).exp<Date.now()));return e}())}},{key:"render",value:function(){return s.a.createElement(m.a,null,this.props.user.isAuth?null:s.a.createElement(x,null),s.a.createElement(p.d,null,s.a.createElement(p.b,{exact:!0,path:"/"},this.props.user.isAuth?s.a.createElement(p.a,{to:"/dashboard"}):s.a.createElement(C,null)),s.a.createElement(p.b,{path:"/login"},this.props.user.isAuth?s.a.createElement(p.a,{to:"/dashboard"}):s.a.createElement(B,null)),s.a.createElement(p.b,{path:"/signup"},this.props.user.isAuth?s.a.createElement(p.a,{to:"/dashboard"}):s.a.createElement(q,null)),s.a.createElement(p.b,{path:"/dashboard"},this.props.user.isAuth?s.a.createElement(G,null):s.a.createElement(p.a,{to:"/login"}))))}}]),a}(s.a.Component),Y={setAuth:f},Z=Object(v.b)((function(e){return{user:e.user}}),Y)(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(16),te=a(41),ae=a(42),ne=a.n(ae),ie=a(28),re={isAuth:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":e=Object(ie.a)({},e,{isAuth:!0});break;case"SET_UNAUTHENTICATED":e=Object(ie.a)({},e,{isAuth:!1})}return e},oe=[te.a,ne.a],ce=Object(ee.c)({user:se}),le=Object(ee.d)(ce,{},ee.a.apply(void 0,oe));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v.a,{store:le},s.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.45b6bf7b.chunk.js.map