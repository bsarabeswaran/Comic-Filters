(this["webpackJsonpComic-Filter"]=this["webpackJsonpComic-Filter"]||[]).push([[0],{120:function(e,t){},121:function(e,t){},122:function(e,t){},123:function(e,t){},124:function(e,t){},152:function(e,t,o){"use strict";o.r(t);var i=o(0),a=o.n(i),n=o(6),l=o.n(n),c=(o(91),o(46)),r=o(47),s=o(51),d=o(50),j=o(17),h=o(22),b=o.n(h),u=o(12),m=o(7),g=o(179),p=Object(m.a)({root:{background:"linear-gradient(45deg, #28313B 30%, #485461 90%)",color:"white",height:24,boxShadow:"0 3px 5px 2px rgba(200, 200, 135, .3)"},label:{textTransform:"capitalize"}})(g.a),x=o(181),f=o(182),O=o(1);u.pdfjs.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";var v=function(e){var t=Object(i.useState)(null),o=Object(j.a)(t,2),a=o[0],n=o[1],l=Object(i.useState)(1),c=Object(j.a)(l,2),r=c[0],s=c[1],d=Object(i.useState)(null),h=Object(j.a)(d,2),m=h[0],g=h[1],v=Object(i.useState)("protanopia"),y=Object(j.a)(v,2),C=y[0],w=y[1],k=Object(i.useState)(null),N=Object(j.a)(k,2),P=N[0],S=N[1],T=function(){S(null)};var A=a?r:"0",B=a||"0",M=A<=1,D=A===a||null===a;window.innerWidth;var E=.695*window.innerHeight;return Object(O.jsxs)("div",{class:"overall",children:[Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("div",{class:"info-container",children:[Object(O.jsxs)("div",{class:"load-file",children:[Object(O.jsx)("div",{class:"label-file",children:Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Load from File: "})})}),Object(O.jsx)("div",{class:"choose-file",children:Object(O.jsx)("input",{onChange:function(e){g(e.target.files[0]),s(1);var t=document.getElementsByTagName("body")[0];setTimeout((function(){t.style.backgroundColor="#485461"}),1e3)},type:"file"})})]}),Object(O.jsx)("div",{class:"page-info",children:Object(O.jsx)("p",{children:Object(O.jsxs)("b",{children:["Page ",A," of ",B]})})}),Object(O.jsxs)("div",{class:"navigation-buttons",children:[Object(O.jsx)(p,{onClick:function(){s((function(e){return e-1}))},className:"grow",disabled:M,children:"Previous Page"}),Object(O.jsx)(p,{onClick:function(){s((function(e){return e+1}))},className:"grow",disabled:D,children:"Next Page"})]}),Object(O.jsxs)("div",{id:"choose-Color",children:["The left side is displayed without a filter. The right side is displayed with ",C,".",Object(O.jsxs)(p,{"aria-controls":"simple-menu","aria-haspopup":"true",className:"grow",onClick:function(e){S(e.currentTarget)},children:["Color: ",C]}),Object(O.jsxs)(x.a,{id:"simple-menu",anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:T,children:[Object(O.jsx)(f.a,{onClick:function(){w("protanopia"),T()},children:"Protanopia"}),Object(O.jsx)(f.a,{onClick:function(){w("protanomaly"),T()},children:"Protanomaly"}),Object(O.jsx)(f.a,{onClick:function(){w("deuteranopia"),T()},children:"Deuteranopia"}),Object(O.jsx)(f.a,{onClick:function(){w("deuteranomaly"),T()},children:"Deuteranomaly"}),Object(O.jsx)(f.a,{onClick:function(){w("tritanopia"),T()},children:"Tritanopia"}),Object(O.jsx)(f.a,{onClick:function(){w("tritanomaly"),T()},children:"Tritanomaly"}),Object(O.jsx)(f.a,{onClick:function(){w("achromatopsia"),T()},children:"Achromatopsia"}),Object(O.jsx)(f.a,{onClick:function(){w("achromatomaly"),T()},children:"Achromatomaly"})]})]})]}),Object(O.jsx)("div",{class:"pdfBox",children:Object(O.jsx)(b.a,{children:Object(O.jsxs)(u.Document,{file:m,renderMode:"svg",options:{workerSrc:"/pdf.worker.js"},onLoadSuccess:function(e){var t=e.numPages;n(t),s(1),window.innerWidth;var o=.695*window.innerHeight;document.getElementsByClassName("pdfBox")[0].style.height="".concat(o,"px")},children:[Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:E,loading:"",onLoadSuccess:function(e){var t=document.getElementsByClassName("react-pdf__Page__svg")[0];null!=t&&(t.style.position="absolute",t.style.left="0")}}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:E,onLoadSuccess:function(){var e=document.getElementsByClassName("react-pdf__Page__svg")[1];null!=e&&(e.style.position="absolute",e.style.right="0")},loading:"",className:C})]})})})]}),Object(O.jsxs)("div",{class:"info",children:["Types of Color Blindness:",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Protanopia - Complete shift of L-Cone (too little red light, too much green light)"}),Object(O.jsx)("li",{children:"Protanomaly - Partial shift of L-Cone (too little red light, too much green light)"}),Object(O.jsx)("li",{children:"Deuteranopia - Complete shift of M-Cone (too much red light, too little green light)"}),Object(O.jsx)("li",{children:"Deuteranomaly - Parital shift of M-Cone (too much red light, too little green light)"}),Object(O.jsx)("li",{children:"Tritanopia - Extremely reduced sensitivity to S-Cone cells (blue-yellow colorblindness)"}),Object(O.jsx)("li",{children:"Tritanomaly - Partially reduced sensitivity to S-Cone cells (blue-yellow colorblindness)"}),Object(O.jsx)("li",{children:"Achromatopsia - Near complete lack of color in vision"}),Object(O.jsx)("li",{children:"Achromatomaly - Faded colors in vision"})]}),"Made by ",Object(O.jsx)("a",{href:"https://github.com/Indian-Jones",children:"Sarabeswaran Balamurugan"}),Object(O.jsx)("br",{}),"Color Blind Filters (filters.svg) built by ",Object(O.jsx)("a",{href:"https://github.com/hail2u",children:"hail2u"})," in ",Object(O.jsx)("a",{href:"https://github.com/hail2u/color-blindness-emulation",children:"this repo"}),"."]})]})},y=Object(m.a)({root:{background:"linear-gradient(45deg, #28313B 30%, #485461 90%)",borderRadius:3,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(200, 200, 135, .3)"},label:{textTransform:"capitalize"}})(g.a),C=o(180),w=o(183),k=(Object(C.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),function(e){var t=Object(i.useState)(null),o=Object(j.a)(t,2),a=o[0],n=o[1],l=Object(i.useState)(1),c=Object(j.a)(l,2),r=c[0],s=c[1],d=Object(i.useState)(null),h=Object(j.a)(d,2),m=h[0],g=h[1],x=Object(i.useState)(100),f=Object(j.a)(x,2),v=f[0],y=f[1],k=window.innerWidth,N=window.innerHeight,P=.695*k+.04*N;function S(e){var t=e.numPages;n(t),s(1),console.log("loaded")}P*=v/300;var T=a?r:"0",A=a||"0",B=T<=1,M=T===a||null===a;var D=Object(C.a)({root:{width:200,paddingTop:10}})();return Object(O.jsx)("div",{children:Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("div",{class:"info-container",children:[Object(O.jsxs)("div",{class:"load-file",children:[Object(O.jsx)("div",{class:"label-file",children:Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Load from File: "})})}),Object(O.jsx)("div",{class:"choose-file",children:Object(O.jsx)("input",{onChange:function(e){g(e.target.files[0]),s(1);var t=document.getElementsByTagName("body")[0];setTimeout((function(){t.style.backgroundColor="#485461"}),1e3)},type:"file"})})]}),Object(O.jsx)("div",{class:"page-info",children:Object(O.jsx)("p",{children:Object(O.jsxs)("b",{children:["Page ",T," of ",A]})})}),Object(O.jsxs)("div",{class:"navigation-buttons",children:[Object(O.jsx)(p,{onClick:function(){s((function(e){return e-1}))},className:"grow",disabled:B,children:"Previous Page"}),Object(O.jsx)(p,{onClick:function(){s((function(e){return e+1}))},className:"grow",disabled:M,children:"Next Page"})]}),Object(O.jsx)("div",{id:"choose-size",children:Object(O.jsx)("div",{className:D.root,children:Object(O.jsx)(w.a,{value:v,color:"secondary",defaultValue:100,valueLabelFormat:function(e){return"".concat(e,"%")},"aria-labelledby":"discrete-slider-small-steps",step:20,marks:!0,min:20,max:200,valueLabelDisplay:"auto",onChange:function(e,t){if(y(t),null!==m){var o=document.getElementsByClassName("page-grid")[0];switch(P=.695*k+.04*N,P*=v/300,v){case 20:console.log(v),o.style.gridTemplateColumns="auto auto auto auto auto auto auto auto auto";break;case 40:console.log(v),o.style.gridTemplateColumns="repeat(5, minmax(400px, 19vw) [col-start])";break;case 60:console.log(v),o.style.gridTemplateColumns="repeat(4, minmax(400px, 24vw) [col-start])";break;case 80:console.log(v),o.style.gridTemplateColumns="repeat(3, minmax(400px, 32vw) [col-start])";break;case 100:console.log(v),o.style.gridTemplateColumns="repeat(2, minmax(400px, 45vw) [col-start])";break;case 120:case 140:break;case 160:case 180:case 200:console.log(v),o.style.gridTemplateColumns="auto"}}}})})})]}),Object(O.jsx)("div",{class:"pdfBox",children:function(){var e='<div>\n        <Document\n            file={file}\n            renderMode="svg"\n            options={{ workerSrc: "/pdf.worker.js" }}\n            onLoadSuccess={DocumentLoaded}\n        >\n            <div class="page-grid">';["","protanopia","protanomaly","deuteranopia","deuteranomaly","tritanopia","tritanomaly","achromatopsia","achromatomaly"].forEach((function(t){e=e+'<Page\n        pageNumber={pageNumber}\n        renderMode="svg"\n        height={remainingHeight}\n        loading=""className="'+t+'">\n        </Page>'})),e+="</div>\n        </Document>\n        </div>";Object(C.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))();return Object(O.jsx)("div",{children:Object(O.jsx)(u.Document,{file:m,renderMode:"svg",options:{workerSrc:"/pdf.worker.js"},onLoadSuccess:S,children:Object(O.jsxs)("div",{class:"page-grid",children:[Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"",children:"Normal"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"protanopia",children:"Protanopia"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"protanomaly",children:"Protanomaly"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"deuteranopia",children:"Deuteranopia"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"deuteranomaly",children:"Deuteranomaly"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"tritanopia",children:"Tritanopia"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"tritanomaly",children:"Tritanomaly"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"achromatopsia",children:"Achromatopsia"}),Object(O.jsx)(u.Page,{pageNumber:r,renderMode:"svg",height:P,loading:"",className:"achromatomaly",children:"Achromatomaly"})]})})})}()}),Object(O.jsxs)("div",{class:"infoAll",children:["Types of Color Blindness:",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Protanopia - Complete shift of L-Cone (too little red light, too much green light)"}),Object(O.jsx)("li",{children:"Protanomaly - Partial shift of L-Cone (too little red light, too much green light)"}),Object(O.jsx)("li",{children:"Deuteranopia - Complete shift of M-Cone (too much red light, too little green light)"}),Object(O.jsx)("li",{children:"Deuteranomaly - Parital shift of M-Cone (too much red light, too little green light)"}),Object(O.jsx)("li",{children:"Tritanopia - Extremely reduced sensitivity to S-Cone cells (blue-yellow colorblindness)"}),Object(O.jsx)("li",{children:"Tritanomaly - Partially reduced sensitivity to S-Cone cells (blue-yellow colorblindness)"}),Object(O.jsx)("li",{children:"Achromatopsia - Near complete lack of color in vision"}),Object(O.jsx)("li",{children:"Achromatomaly - Faded colors in vision"})]}),"Made by ",Object(O.jsx)("a",{href:"https://github.com/Indian-Jones",children:"Sarabeswaran Balamurugan"}),Object(O.jsx)("br",{}),"Color Blind Filters (filters.svg) built by ",Object(O.jsx)("a",{href:"https://github.com/hail2u",children:"hail2u"})," in ",Object(O.jsx)("a",{href:"https://github.com/hail2u/color-blindness-emulation",children:"this repo"}),"."]})]})})}),N=(i.Component,i.Component,function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(e){var i;return Object(c.a)(this,o),(i=t.call(this,e)).state={cbzAll:!1,cbzCompare:!1,pdfAll:!1,pdfCompare:!1},i}return Object(r.a)(o,[{key:"setter",value:function(e){var t=document.getElementsByTagName("body")[0];!0!==this.state.cbzAll&&!0!==this.state.cbzCompare&&!0!==this.state.pdfCompare&&!0!==this.state.pdfAll||setTimeout((function(){t.style.backgroundColor="#2a3e55",console.log(t),console.log(t.style.backgroundColor)}),1e3);var o={cbzAll:!1,cbzCompare:!1,pdfAll:!1,pdfCompare:!1};o[e]=!0,this.setState(o)}},{key:"render",value:function(){var e=this;return console.log(this.state),!1===this.state.pdfAll&&!1===this.state.cbzAll&&!1===this.state.pdfCompare&&!1===this.state.cbzCompare?Object(O.jsx)("div",{children:Object(O.jsx)("div",{id:"select",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h1",{id:"title",children:Object(O.jsx)("b",{children:"Color-Blind Comic Emulation"})}),Object(O.jsxs)("div",{id:"choose-file-type",children:[Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfCompare")},children:"PDF Compare"}),Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfAll")},children:"PDF All"})]})]})})}):!0===this.state.pdfCompare?Object(O.jsxs)("div",{id:"select",children:[Object(O.jsx)("h1",{id:"title",children:Object(O.jsx)("b",{children:"Color-Blind Comic Emulation"})}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("div",{id:"choose-file-type",children:[Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfCompare")},children:"PDF Compare"}),Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfAll")},children:"PDF All"})]}),Object(O.jsx)(v,{})]})]}):!0===this.state.pdfAll?(console.log("hey"),Object(O.jsxs)("div",{id:"select",children:[Object(O.jsx)("h1",{id:"title",children:Object(O.jsx)("b",{children:"Color-Blind Comic Emulation"})}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)("div",{id:"choose-file-type",children:[Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfCompare")},children:"PDF Compare"}),Object(O.jsx)(y,{className:"grow",variant:"contained",color:"primary",onClick:function(){e.setter("pdfAll")},children:"PDF All"})]}),Object(O.jsx)(k,{})]})]})):void 0}}]),o}(a.a.Component));l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))},69:function(e,t){},91:function(e,t,o){}},[[152,1,2]]]);
//# sourceMappingURL=main.ddee3bf9.chunk.js.map