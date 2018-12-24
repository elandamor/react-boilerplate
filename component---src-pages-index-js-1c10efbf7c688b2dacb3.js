(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(141),o=n(143);t.default=function(){return r.a.createElement(o.c,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"React Boilerplate - Built with love by @elandamor"),r.a.createElement("meta",{name:"description",content:"A scalable, offline-first foundation for your next React project, with a focus on performance and best practices."})),r.a.createElement(o.b,{grayscale:!0}),r.a.createElement(o.a,null))}},137:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(134),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(137),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var u=n(29);n.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e){e.exports={data:{site:{siteMetadata:{title:"React Boilerplate"}}}}},140:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(50),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,n){},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(135),c=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1qsqc6n-0"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:100vh;flex-shrink:0;padding:5rem 1.5rem;font-size:1rem;line-height:1.35;text-align:center;color:#7d93aa;background-image:linear-gradient(transparent,#dae6f1);position:fixed;width:100vw;z-index:1;.c-extendedLogo{height:96px;position:relative;width:96px;.c-logo{height:100%;width:100%;}}@media (min-width:600px){font-size:1.35rem;padding:5rem 2rem;.c-extendedLogo{height:120px;position:relative;width:120px;}}"]),l=s.a.p.withConfig({displayName:"styles__Tagline",componentId:"sc-1qsqc6n-1"})(["display:none;font-weight:400;max-width:448px;text-align:center;@media (min-width:600px){display:block;font-weight:300;max-width:640px;}"]),d=c,u=function(){return r.a.createElement(d,null,r.a.createElement(l,null,"A scalable, offline-first foundation for your next React project, with a focus on performance and best practices."))};u.propTypes={siteTagline:o.a.string,siteTitle:o.a.string},u.defaultProps={siteTagline:"",siteTitle:""};var p=u,f=n(136),m=n.n(f),h=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"bk4c9h-0"})(["align-items:center;display:flex;justify-content:center;width:100%;height:100%;opacity:.6;position:fixed;top:50%;&:not(.-grayscale){opacity:1;.c-logo{.react:after,.react:before,.react-inner{border:thin solid #aeaeae;}}.c-logo:first-child{.react:after,.react:before,.react-inner{border:thin solid #61dafb;border-width:3px;}}}.c-logo{height:90vw;position:absolute;width:90vw;z-index:0;&:first-child{z-index:1;}&:nth-child(2){transform:rotate(30deg);}&:nth-child(3){transform:rotate(45deg);}&:nth-child(4){transform:rotate(75deg);}&:nth-child(5){transform:rotate(7deg);}&:nth-child(6){transform:rotate(22deg);}&:nth-child(7){transform:rotate(38deg);}&:nth-child(8){transform:rotate(53deg);}.react:after,.react:before,.react-inner{border:thin solid #eaeaea;}.react-innerdot{display:none;}}@media (max-width:600px){.c-logo{height:90vh;width:90vh;}}"]),g=Object(s.b)(["0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}"]),x=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-12nd6mh-0"})(["align-items:center;display:flex;justify-content:center;width:100px;height:100px;overflow:hidden;&:not(.-noanimation){.react{animation:",' 10s linear infinite;}}.react-inner{position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;transform:rotate(120deg);}.react-innerdot{position:absolute;top:50%;left:50%;width:20px;height:20px;border-radius:50%;background:#61dafb;margin-top:-10px;margin-left:-10px;}.react{display:block;position:relative;width:100%;height:40%;border-radius:50%;z-index:11;&:before{content:"";position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;transform:rotate(-120deg);}&:after{content:"";position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;}}'],g),w=function(e){var t=e.className,n=e.noanimation;return r.a.createElement(x,{className:m()("c-logo",t,{"-noanimation":n})},r.a.createElement("div",{className:"react"},r.a.createElement("div",{className:"react-inner"}),r.a.createElement("div",{className:"react-innerdot"})))};w.propTypes={className:o.a.string,noanimation:o.a.bool};var y=w,b=function(e){var t=e.className,n=e.grayscale;return r.a.createElement(h,{className:m()("c-extendedLogo",t,{"-grayscale":n})},r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}),r.a.createElement(y,{noanimation:!0}))},v=n(139),E=n(138),N=n(141),k=(n(28),n(6)),S=n.n(k),q={networkStatus:{__typename:"NetworkStatus",isConnected:!0},setNetworkStatus:function(){}},_=r.a.createContext(q),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getNetworkStatus=!0,t.state=q,t.setNetworkStatus=function(e){return t.getNetworkStatus=!1,e?(t.setState({networkStatus:{__typename:"NetworkStatus",isConnected:Boolean("online"===e)}}),!0):null},t}S()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;navigator.onLine?this.online():this.offline(),window.addEventListener("online",function(){return e.online()}),window.addEventListener("offline",function(){return e.offline()})},n.componentWillUnmount=function(){var e=this;window.removeEventListener("online",function(){return e.online()}),window.removeEventListener("offline",function(){return e.offline()})},n.render=function(){return r.a.createElement(_.Provider,{value:Object.assign({},this.state,{setNetworkStatus:this.setNetworkStatus})},r.a.createElement(r.a.Fragment,null,this.props.children,!this.state.networkStatus.isConnected&&r.a.createElement(O,null)))},n.offline=function(){this.setNetworkStatus("offline")},n.online=function(){this.setNetworkStatus("online")},t}(r.a.Component),T=(n(142),function(e){var t=e.children;return r.a.createElement(E.StaticQuery,{query:"755544856",render:function(){return r.a.createElement(C,null,r.a.createElement(N.Helmet,null,r.a.createElement("html",{lang:"en"})),t)},data:v})});T.propTypes={children:o.a.node.isRequired};var j=T,R=Object(s.b)(["0%{opacity:0;}10%{transform:translateY(0);opacity:1;}100%{transform:translateY(8px);opacity:0;}"]),L=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-5uy08a-0"})(["border:thin solid #aeaeae;border-radius:24px;bottom:24px;height:calc(24px * 1.5);left:0;margin:0 auto;position:absolute;right:0;width:24px;z-index:5;&:after{background-color:#aeaeae;border-radius:4px;content:'';display:block;height:6px;margin:8px auto;animation:"," 2s ease-in-out infinite;width:2px;}@media (min-width:600px){bottom:48px;}"],R),z=function(e){var t=e.className;return r.a.createElement(L,{className:m()("",t)})};z.propTypes={className:o.a.string};var I=n(145),P=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"y4j1ya-0"})(["align-items:center;display:flex;height:64px;justify-content:center;position:fixed;top:0;right:0;width:64px;svg{color:#aeaeae;height:24px;width:24px;}"]),W=function(e){var t=e.className;return r.a.createElement(P,{className:m()("",t)},r.a.createElement(I.WifiOff,null))};W.propTypes={className:o.a.string};var O=W;n.d(t,"a",function(){return p}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return j}),n.d(t,"d",function(){return O})}}]);
//# sourceMappingURL=component---src-pages-index-js-1c10efbf7c688b2dacb3.js.map