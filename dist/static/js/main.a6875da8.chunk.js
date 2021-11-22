(this["webpackJsonpjsonforms-playground"]=this["webpackJsonpjsonforms-playground"]||[]).push([[0],{506:function(e){e.exports=JSON.parse('{"type":"object","properties":{"name":{"type":"string","minLength":1},"description":{"title":"Long Description","type":"string"},"done":{"type":"boolean"},"due_date":{"type":"string","format":"date"},"rating":{"type":"integer","maximum":5},"recurrence":{"type":"string","enum":["Never","Daily","Weekly","Monthly"]},"recurrence_interval":{"type":"integer"}},"required":["name","due_date"]}')},507:function(e){e.exports=JSON.parse('{"type":"VerticalLayout","elements":[{"type":"Control","label":"Completed","scope":"#/properties/done"},{"type":"Control","scope":"#/properties/name"},{"type":"HorizontalLayout","elements":[{"type":"Control","scope":"#/properties/due_date"},{"type":"Control","scope":"#/properties/rating"}]},{"type":"HorizontalLayout","elements":[{"type":"Control","scope":"#/properties/recurrence"},{"type":"Control","scope":"#/properties/recurrence_interval","rule":{"effect":"HIDE","condition":{"type":"LEAF","scope":"#/properties/recurrence","expectedValue":"Never"}}}]},{"type":"Control","scope":"#/properties/description","options":{"multi":true}}]}')},527:function(e,t,r){},649:function(e,t){},657:function(e,t){},659:function(e,t){},852:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(16),c=r.n(o),i=(r(527),r(106)),s=r(105),l=r(294),u=r(295),p=r(12),d=r(454),j=r(881),m=r(289),O=r(466),b=r(504),h=r(505),f=r(509),y=r(508),g=r(23),x=function(e){Object(f.a)(r,e);var t=Object(y.a)(r);function r(e){var n;return Object(b.a)(this,r),(n=t.call(this,e)).state={error:null},n}return Object(h.a)(r,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.error?Object(g.jsxs)("div",{style:{color:"red",overflow:"scroll"},children:[Object(g.jsx)("h3",{children:"OOPS! Something went wrong!"}),Object(g.jsx)("pre",{children:this.state.error.message}),Object(g.jsx)("pre",{children:this.state.error.stack})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log({error:e}),{error:e}}}]),r}(a.a.Component),v=r(506),S=r(507),C=u.materialRenderers,N={name:"Send email to Adrian",description:"Confirm if you have passed the subject\nHereby ...",done:!0,recurrence:"Daily",rating:3},J=Object(d.a)((function(e){return{container:{padding:"1em",width:"100%"},title:{padding:"0.25em"},dataContent:{fontFamily:"monospace !important"},resetButton:{margin:"auto",display:"block"},demoForm:{margin:"auto",padding:"1rem"}}}));function F(){var e=J(),t=Object(n.useState)(N),r=Object(s.a)(t,2),a=r[0],o=r[1],c=Object(n.useState)(v),d=Object(s.a)(c,2),b=d[0],h=d[1],f=Object(n.useState)(S),y=Object(s.a)(f,2),F=y[0],D=y[1],E=Object(n.useState)(""),k=Object(s.a)(E,2),w=k[0],L=k[1],P=Object(n.useState)(""),R=Object(s.a)(P,2),I=R[0],T=R[1],_=Object(n.useState)(""),H=Object(s.a)(_,2),V=H[0],B=H[1],M=Object(n.useRef)(null),z=JSON.stringify(a,null,2);Object(n.useEffect)((function(){M.current.value!==z&&(M.current.value=z)}),[z]);var A={InputProps:{style:{fontFamily:"monospace"}},multiline:!0,fullWidth:!0,minRows:10,maxRows:10,variant:"outlined"};return Object(g.jsxs)(j.a,{container:!0,spacing:1,className:e.container,children:[Object(g.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.a,{mx:2,children:Object(g.jsx)("div",{className:e.demoForm,children:Object(g.jsx)(x,{children:Object(g.jsx)(p.JsonForms,{schema:b,uischema:F,data:a,renderers:C,cells:u.materialCells,onChange:function(e){Object(l.a)(a,e.data)||(console.debug("Data edited from FORM"),o(e.data))}})})})})}),Object(g.jsxs)(j.a,{item:!0,xs:12,md:6,children:[Object(g.jsx)(m.a,{mx:2,children:Object(g.jsx)(O.a,Object(i.a)(Object(i.a)({},A),{},{onChange:function(e){try{var t=JSON.parse(e.target.value);Object(l.a)(a,t)||(console.debug("Data edited from EDITOR"),o(t)),L(null)}catch(r){L("JSON Parse Error!")}},error:!!w,helperText:w||" ",label:"Data",inputRef:function(e){M.current=e}}))}),Object(g.jsx)(m.a,{mx:2,children:Object(g.jsx)(O.a,Object(i.a)(Object(i.a)({},A),{},{onChange:function(e){try{D(JSON.parse(e.target.value)),T(null)}catch(t){T("JSON Parse Error!")}},defaultValue:JSON.stringify(F,null,2),error:!!I,helperText:I||" ",label:"UI-Schema"}))}),Object(g.jsx)(m.a,{mx:2,children:Object(g.jsx)(O.a,Object(i.a)(Object(i.a)({},A),{},{onChange:function(e){try{h(JSON.parse(e.target.value)),B(null)}catch(t){B("JSON Parse Error!")}},defaultValue:JSON.stringify(b,null,2),error:!!V,helperText:V||" ",label:"Schema"}))})]})]})}var D=a.a.memo(F),E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,887)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root")),E()}},[[852,1,2]]]);