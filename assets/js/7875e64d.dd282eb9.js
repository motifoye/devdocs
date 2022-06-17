(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[96134],{88698:function(e,n,t){"use strict";var a=t(75963);n.Z=void 0;var r=a(t(64938)),s=t(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");n.Z=o},85162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),s="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:t},n)}},65488:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(83117),r=t(67294),s=t(86010),o=t(72389),i=t(67392),l=t(7094),d=t(12466),c="tabList__CuJ",u="tabItem_LNqP";function m(e){var n,t,o=e.lazy,m=e.block,p=e.defaultValue,h=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.l)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,M=(0,r.useState)(y),A=M[0],Z=M[1],P=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=N[v];null!=I&&I!==A&&k.some((function(e){return e.value===I}))&&Z(I)}var T=function(e){var n=e.currentTarget,t=P.indexOf(n),a=k[t].value;a!==A&&(x(n),Z(a),null!=v&&E(v,String(a)))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;t=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var s,o=P.indexOf(e.currentTarget)-1;t=null!=(s=P[o])?s:P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":A===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==A})}))))}function p(e){var n=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},32798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle's Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},50793:function(e,n,t){"use strict";t.d(n,{dn:function(){return A.Z},vL:function(){return M},U6:function(){return w},E2:function(){return Z.Z},mQ:function(){return P.Z},Zh:function(){return E}});t(86134);var a=t(67294),r=t(87918),s=t(80102),o=t(83117),i=t(95408),l=t(98700),d=t(39707),c=t(59766),u=t(69348),m=t(54502),p=t(85893);const h=["component","direction","spacing","divider","children"];function v(e,n){const t=a.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,s)=>(e.push(r),s<t.length-1&&e.push(a.cloneElement(n,{key:`separator-${s}`})),e)),[])}const f=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,o.Z)({display:"flex"},(0,i.k9)({theme:n},(0,i.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,l.hB)(n),r=Object.keys(n.breakpoints.values).reduce(((n,t)=>(null==e.spacing[t]&&null==e.direction[t]||(n[t]=!0),n)),{}),s=(0,i.P$)({values:e.direction,base:r}),o=(0,i.P$)({values:e.spacing,base:r}),d=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=t?s[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,l.NA)(a,n)}};var r};t=(0,c.Z)(t,(0,i.k9)({theme:n},o,d))}return t})),g=a.forwardRef((function(e,n){const t=(0,m.Z)({props:e,name:"MuiStack"}),a=(0,d.Z)(t),{component:r="div",direction:i="column",spacing:l=0,divider:c,children:u}=a,g=(0,s.Z)(a,h),k={direction:i,spacing:l};return(0,p.jsx)(f,(0,o.Z)({as:r,ownerState:k,ref:n},g,{children:c?v(u,c):u}))}));var k=g,b=t(39960);function y(e,n,t){var s=function(e){return"number"==typeof e&&Number.isInteger(e)?e.toFixed(1):e}(n),o=a.createElement("span",null,function(e){if("since"===e)return"Since";if("deprecated"===e)return"Deprecated";throw new Error("Unknown <Since> type: '"+e+"'")}(e)," ",s),i=a.createElement(r.Z,{key:"chip-"+e+s,label:o,clickable:!!t});return t?a.createElement(b.Z,{to:"https://tracker.moodle.org/browse/"+t,key:"link-"+e+s},i):i}function w(e){var n,t,r,s,o,i,l,d,c,u=(t=(n=e).issueNumber,r=void 0===t?null:t,s=n.type,o=void 0===s?"since":s,i=n.versions,l=void 0===i?[]:i,d=n.version,(c=void 0===d?null:d)?y(o,c,r):l.map((function(e){return y(o,e,r)})));return a.createElement(k,{direction:"row",justifyContent:"flex-end",spacing:2},u)}var N=t(86010);function E(e){return a.createElement("div",{className:(0,N.Z)(" alert alert--success margin-bottom--lg ")},a.createElement("span",{className:(0,N.Z)(" badge badge--success ")},"An example of correct behaviour"),e.children)}function M(e){return a.createElement("div",{className:(0,N.Z)(" alert alert--danger margin-bottom--lg ")},a.createElement("span",{className:(0,N.Z)(" badge badge--danger ")},"An example of incorrect behaviour"),e.children)}t(80069);var A=t(46975),Z=t(85162),P=t(65488)},86134:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(67294),r=t(69119),s=t(39960),o=t(88698),i=t(32798),l=t.n(i),d=t(80684);function c(e){var n=e.courseName;if(!l().courses[n])throw Error("Unknown course "+n);var t=l().courses[n];return a.createElement(r.Z,{type:"info",icon:a.createElement(o.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",a.createElement("strong",null,e.subject)," ","from the"," ",a.createElement(d.Z,{title:t.summary},a.createElement(s.Z,{to:l().siteHome+"course/view.php?id="+t.id},t.name))," ","on Moodle Academy.")}},80069:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(67294),r=t(87918),s=t(80684),o=t(86886),i=t(34673),l=t(3905),d=function(e,n,t){return void 0===t&&(t="info"),a.createElement(o.ZP,{item:!0,key:e},a.createElement(s.Z,{title:n},a.createElement(r.Z,{label:e,color:t})))};function c(e){var n=e.filepath,t=e.summary,r=function(e){var n=e.required,t=void 0!==n&&n,a=e.legacy,r=void 0!==a&&a,s=e.deprecated,o=void 0!==s&&s,i=e.refreshedDuringUpgrade,l=void 0!==i&&i,c=e.refreshedDuringPurge,u=void 0!==c&&c,m=[];return l&&m.push(d("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),u&&m.push(d("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),t&&m.push(d("Required","This file must be present","success")),r&&m.push(d("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),o&&m.push(d("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),m}(e),s=e.description?a.createElement(o.ZP,{item:!0,xs:12},e.description):null;return a.createElement(l.Zo,null,a.createElement(o.ZP,{container:!0,spacing:2},a.createElement(o.ZP,{item:!0,xs:6},a.createElement("h4",null,t)),a.createElement(o.ZP,{item:!0,xs:6},a.createElement(o.ZP,{container:!0,spacing:2,justifyContent:"flex-end"},r)),a.createElement(o.ZP,{item:!0,xs:12},a.createElement("h5",null,"File path:"," ",n)),s,function(e){var n=e.example,t=e.open,r=void 0!==t&&t;return n?a.createElement(o.ZP,{item:!0,xs:12},a.createElement(i.Z,{summary:a.createElement("summary",null,"View example"),open:r},n)):null}(e)))}},86287:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});var a=t(83117),r=t(80102),s=(t(67294),t(3905)),o=t(13904),i=t(50793),l=["components"],d={title:"Advanced elements",tags:["core_form","core","Forms API","Advanced"]},c=void 0,u={unversionedId:"apis/subsystems/form/advanced/advanced-elements",id:"apis/subsystems/form/advanced/advanced-elements",title:"Advanced elements",description:"Form elements can be marked as 'advanced'. This has the effect that they are hidden initially.",source:"@site/docs/apis/subsystems/form/advanced/advanced-elements.md",sourceDirName:"apis/subsystems/form/advanced",slug:"/apis/subsystems/form/advanced/advanced-elements",permalink:"/devdocs/docs/apis/subsystems/form/advanced/advanced-elements",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/form/advanced/advanced-elements.md",tags:[{label:"core_form",permalink:"/devdocs/docs/tags/core-form"},{label:"core",permalink:"/devdocs/docs/tags/core"},{label:"Forms API",permalink:"/devdocs/docs/tags/forms-api"},{label:"Advanced",permalink:"/devdocs/docs/tags/advanced"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Advanced elements",tags:["core_form","core","Forms API","Advanced"]},sidebar:"docs",previous:{title:"Forms API",permalink:"/devdocs/docs/apis/subsystems/form/"},next:{title:"Repeat elements",permalink:"/devdocs/docs/apis/subsystems/form/advanced/repeat-elements"}},m={},p=[{value:"Setting a name",id:"setting-a-name",level:3},{value:"Marking an entire section as advanced",id:"marking-an-entire-section-as-advanced",level:2}],h={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,(0,a.Z)({frontMatter:d},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Form elements can be marked as 'advanced'. This has the effect that they are hidden initially."),(0,s.kt)("p",null,"To control whether an element is advanced, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"setAdvanced")," method on the MoodleQuickForm instance and set a specific element as being advanced, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Marking an element as advanced"',title:'"Marking',an:!0,element:!0,as:!0,'advanced"':!0},"$mform->addElement(\n    'select',\n    'display',\n    get_string('displaymode', 'choice'),\n    $CHOICE_DISPLAY\n);\n$mform->setAdvanced('display');\n")),(0,s.kt)("p",null,"It is also possible to unset the advanced status of a field - the ",(0,s.kt)("inlineCode",{parentName:"p"},"setAdvanced")," function takes a second, boolean, parameter which defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),". By passing a ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," value, the element's advanced flag will be removed, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Marking an element as advanced"',title:'"Marking',an:!0,element:!0,as:!0,'advanced"':!0},"// Mark a field as not advanced after it was previously marked as advanced.\n$mform->setAdvanced('display', false);\n")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You should be careful about marking too many elements as advanced."),(0,s.kt)("p",{parentName:"div"},"For more information on the risks of this, see the advice in ",(0,s.kt)("a",{parentName:"p",href:"/general/development/policies/designing-usable-forms#use-show-moreless-advanced-settings-sparingly"},"Designing usable forms"),"."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Location of Show and hide links")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Whenever you mark a form element as advanced, then the ",(0,s.kt)("em",{parentName:"p"},"Show / hide advanced"),"  links are shown automatically at relevant points within the form."),(0,s.kt)("p",{parentName:"div"},"The ",(0,s.kt)("em",{parentName:"p"},"Show advanced")," and ",(0,s.kt)("em",{parentName:"p"},"Hide advanced")," links are currently displayed at the top right of all fieldsets containing advanced controls."))),(0,s.kt)("h3",{id:"setting-a-name"},"Setting a name"),(0,s.kt)("p",null,"When adding a header element, the second parameter to ",(0,s.kt)("inlineCode",{parentName:"p"},"addElement()")," is a name field. You should pass a ",(0,s.kt)("em",{parentName:"p"},"unique")," name for each header."),(0,s.kt)("p",null,"If the name is not specified, or is not unique then this can have a range of unintended impacts, including marking multiple sections of the form as advanced. It is strongly encouraged to ",(0,s.kt)("em",{parentName:"p"},"always")," name headers."),(0,s.kt)(i.vL,{mdxType:"InvalidExample"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="An empty name is passed to these headings"',title:'"An',empty:!0,name:!0,is:!0,passed:!0,to:!0,these:!0,'headings"':!0},"$mform->addElement(\n    'header',\n    '',\n    get_string('miscellaneoussettings', 'form')\n);\n$mform->addElement(\n    'select',\n    'display',\n    get_string('displaymode', 'choice'),\n    $CHOICE_DISPLAY\n);\n$mform->setAdvanced('display');\n\n// Because this section has a non-unique name (an empty string),\n// the advanced flag set for the display element in the previous\n// section will also apply here.\n$mform->addElement(\n    'header',\n    '',\n    get_string('anothersection', 'form')\n);\n"))),(0,s.kt)("h2",{id:"marking-an-entire-section-as-advanced"},"Marking an entire section as advanced"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"setAdvanced")," function can mark an entire section as advanced by specifying the name of the header at the top of the section, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Marking an entire section as advanced"',title:'"Marking',an:!0,entire:!0,section:!0,as:!0,'advanced"':!0},"$mform->addElement(\n    'header',\n    'miscellaneoussettingshdr',\n    get_string('miscellaneoussettings', 'form')\n);\n$mform->setAdvanced('miscellaneoussettingshdr');\n")),(0,s.kt)("p",null,"In this example, all fields from this header until the next header will be marked as advanced."))}v.isMDXComponent=!0}}]);