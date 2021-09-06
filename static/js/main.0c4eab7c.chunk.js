(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"myBox",class:"form-label"}),Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("On changed"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"12"})]}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Uppercase was clicked");var t=n.toUpperCase();s(t),e.showAlert("Converted to uppercase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){console.log("lowercase was cliked");var t=n.toLowerCase();s(t),e.showAlert("Converted to lowercase","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){console.log("Clear text");s(""),e.showAlert("Text cleared")},children:"Clear text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){console.log("copy to clipboard");var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces  removed","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something to preview it"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About text here"};var d=function(e){return e.alert&&Object(o.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),":",e.alert.msg]})})};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter the text to analyse:",mode:a,showAlert:m})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0c4eab7c.chunk.js.map