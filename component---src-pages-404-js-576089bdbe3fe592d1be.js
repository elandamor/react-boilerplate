(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143);t.default=function(){return r.a.createElement(i.b,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},136:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(134),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(136),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e){e.exports={data:{site:{siteMetadata:{title:"React Boilerplate"}}}}},140:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(50),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},142:function(e,t,n){},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(135),l=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1qsqc6n-0"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:100vh;flex-shrink:0;padding:5rem 2rem;font-size:14px;font-weight:300;line-height:1.35;text-align:center;color:#7d93aa;background-image:linear-gradient(0deg,#dae6f1,transparent);position:fixed;width:100vw;z-index:1;@media (min-width:600px){font-size:1.35rem;}"]),c=s.a.p.withConfig({displayName:"styles__Tagline",componentId:"sc-1qsqc6n-1"})(["max-width:640px;text-align:center;"]),u=l,d=function(){return r.a.createElement(u,null,r.a.createElement(c,null,"A scalable, offline-first foundation for your next React project, with a focus on performance and best practices."))};d.propTypes={siteTagline:o.a.string,siteTitle:o.a.string},d.defaultProps={siteTagline:"",siteTitle:""};var p=d,f=n(139),m=n(137),h=n(141),g=(n(28),n(6)),w=n.n(g),x={networkStatus:{__typename:"NetworkStatus",isConnected:!0},setNetworkStatus:function(){}},y=r.a.createContext(x),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getNetworkStatus=!0,t.state=x,t.setNetworkStatus=function(e){return t.getNetworkStatus=!1,e?(t.setState({networkStatus:{__typename:"NetworkStatus",isConnected:Boolean("online"===e)}}),!0):null},t}w()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;navigator.onLine?this.online():this.offline(),window.addEventListener("online",function(){return e.online()}),window.addEventListener("offline",function(){return e.offline()})},n.componentWillUnmount=function(){var e=this;window.removeEventListener("online",function(){return e.online()}),window.removeEventListener("offline",function(){return e.offline()})},n.render=function(){return r.a.createElement(y.Provider,{value:Object.assign({},this.state,{setNetworkStatus:this.setNetworkStatus})},r.a.createElement(r.a.Fragment,null,this.props.children,!this.state.networkStatus.isConnected&&r.a.createElement(L,null)))},n.offline=function(){this.setNetworkStatus("offline")},n.online=function(){this.setNetworkStatus("online")},t}(r.a.Component),b=(n(142),function(e){var t=e.children;return r.a.createElement(m.StaticQuery,{query:"755544856",render:function(){return r.a.createElement(v,null,r.a.createElement(h.Helmet,null,r.a.createElement("html",{lang:"en"})),t)},data:f})});b.propTypes={children:o.a.node.isRequired};var E=b,N=n(138),k=n.n(N),S=Object(s.b)(["0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}"]),q=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-12nd6mh-0"})(["align-items:center;display:flex;justify-content:center;width:100px;height:100px;overflow:hidden;&:not(.-noanimation){.react{animation:",' 10s linear infinite;}}.react-inner{position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;transform:rotate(120deg);}.react-innerdot{position:absolute;top:50%;left:50%;width:20px;height:20px;border-radius:50%;background:#61dafb;margin-top:-10px;margin-left:-10px;}.react{display:block;position:relative;width:100%;height:40%;border-radius:50%;z-index:11;&:before{content:"";position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;transform:rotate(-120deg);}&:after{content:"";position:absolute;top:0px;left:0px;right:0px;bottom:0px;border-radius:50%;border:6px solid #61dafb;}}'],S),T=function(e){var t=e.className,n=e.noanimation;return r.a.createElement(q,{className:k()("c-logo",t,{"-noanimation":n})},r.a.createElement("div",{className:"react"},r.a.createElement("div",{className:"react-inner"}),r.a.createElement("div",{className:"react-innerdot"})))};T.propTypes={className:o.a.string,noanimation:o.a.bool};var C=T,_=n(145),j=s.a.div.withConfig({displayName:"styles__Wrapper",componentId:"y4j1ya-0"})(["align-items:center;display:flex;height:64px;justify-content:center;position:fixed;top:0;right:0;width:64px;svg{color:#eaeaea;height:24px;width:24px;}"]),R=function(e){var t=e.className;return r.a.createElement(j,{className:k()("",t)},r.a.createElement(_.WifiOff,null))};R.propTypes={className:o.a.string};var L=R;n.d(t,"a",function(){return p}),n.d(t,"b",function(){return E}),n.d(t,"c",function(){return C}),n.d(t,"d",function(){return L})}}]);
//# sourceMappingURL=component---src-pages-404-js-576089bdbe3fe592d1be.js.map