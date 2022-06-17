"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99835],{43801:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),s=a(13904),r=["components"],l={title:"Backporting",tags:["Processes","Core development","Integration"]},p=void 0,c={unversionedId:"development/policies/backporting",id:"development/policies/backporting",title:"Backporting",description:"Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases.",source:"@site/general/development/policies/backporting.md",sourceDirName:"development/policies",slug:"/development/policies/backporting",permalink:"/devdocs/general/development/policies/backporting",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/backporting.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Integration",permalink:"/devdocs/general/tags/integration"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Backporting",tags:["Processes","Core development","Integration"]},sidebar:"coding",previous:{title:"Accessibility",permalink:"/devdocs/general/development/policies/accessibility"},next:{title:"Coding style",permalink:"/devdocs/general/development/policies/codingstyle/"}},d={},u=[{value:"General policy",id:"general-policy",level:2},{value:"Process for requesting a non bug-fix backport",id:"process-for-requesting-a-non-bug-fix-backport",level:2},{value:"Polite note about bug classification",id:"polite-note-about-bug-classification",level:2},{value:"Backport fixes to unsupported branches",id:"backport-fixes-to-unsupported-branches",level:2},{value:"See also...",id:"see-also",level:2}],m={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,n.Z)({frontMatter:l},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases."),(0,i.kt)("h2",{id:"general-policy"},"General policy"),(0,i.kt)("p",null,"Our general policy is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bug fixes will be backported to all (and only to) supported stable branches.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When fixing a bug, please provide a fix for all supported stable branches."),(0,i.kt)("li",{parentName:"ul"},"If a fix doesn't make sense to be backported to every branch, please make it clear in the issue."))),(0,i.kt)("li",{parentName:"ul"},"Improvements or new features will only land in master.")),(0,i.kt)("h2",{id:"process-for-requesting-a-non-bug-fix-backport"},"Process for requesting a non bug-fix backport"),(0,i.kt)("p",null,"Improvements or new features can be requested to be backported to the stable branches. We urge developers to consider this request carefully. In recent years, Moodle has moved to a short and predictable time based release schedule and we use a very effective distributed source control system. Both of these process changes should ensure that a change not being backported to the stable branches is not as problematic as it may have used to be."),(0,i.kt)("p",null,"Should you feel that a new feature or improvement needs backporting, please follow this process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"File a new issue."),(0,i.kt)("li",{parentName:"ol"},'Set the issue title using our backport template guide. (i.e. "Fix forum alignment (backport of MDL-99999)").'),(0,i.kt)("li",{parentName:"ol"},'Link the original issue using link type "Will help resolve".'),(0,i.kt)("li",{parentName:"ol"},"You should include clear rationale for the request to backport")),(0,i.kt)("p",null,"The integration team will process backport requests, with the following guidelines:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The integration team will together consider each request individually considering the needs of the community (influenced by forum posts, moodle partners, nagging developers etc)."),(0,i.kt)("li",{parentName:"ol"},"Backports will happen not earlier than 3 weeks and not later than 2 months after the request was performed."),(0,i.kt)("li",{parentName:"ol"},"Rationale will be given for rejection")),(0,i.kt)("p",null,"If the backport request is approved, please follow the usual development process to submit the feature or improvement on earlier branches. Just to be clear, this means using the new bug number. So, even if the fix you are back-porting cherry-picks cleanly, you will need to amend the commit comment to use the new MDL-XXXXX number."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It would be good practice to also add a line like "This is a backport of MDL-YYYYY." in the amended commit comment.'))),(0,i.kt)("p",null,'You can probably copy the testing instructions from the original issue. If so, make it clear you done this by saying something like "Copied from MDL-66327". Of course, if you can improve the instructions, feel free to edit. ',(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66614"},"MDL-66614")," and ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66327"},"MDL-66327")," are probably a reasonably good example fo what should be done."),(0,i.kt)("h2",{id:"polite-note-about-bug-classification"},"Polite note about bug classification"),(0,i.kt)("p",null,"Many issues can be appropriately classified as borderline bug-fix/improvements. We politely request that developers do not try and 'game the system' by classifying their improvements as bugs intentionally. If your fix is in a grey area, please state your case for it being a bug fix clearly. The integration team will use their discretion where necessary."),(0,i.kt)("h2",{id:"backport-fixes-to-unsupported-branches"},"Backport fixes to unsupported branches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Given the ",(0,i.kt)("a",{parentName:"li",href:"#general-policy"},"general policy")," above, only supported stable branches are candidates normally."),(0,i.kt)("li",{parentName:"ul"},"Also security, privacy, data-loss and regressions caused by any of the previous issue types are accepted to be fixed into security-only supported branches.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This doesn't include ",(0,i.kt)("a",{parentName:"p",href:"/general/development/tracker/labels"},(0,i.kt)("inlineCode",{parentName:"a"},"security_benefit")," labelled issues"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apart from the previous, issues required to keep the testing infrastructure working and passing (travis, behat, phpunit, random failures, new steps availability...) will also be accepted when possible into security-only branches."),(0,i.kt)("li",{parentName:"ul"},"Finally, backport to unsupported branches only will happen when the issue is a ",(0,i.kt)("strong",{parentName:"li"},"direct regression caused by a bug fix")," introduced by the very latest releases. This applies to both security-only and out-of-support branches.")),(0,i.kt)("p",null,"A new weekly release will be performed including all the cases above, but ",(0,i.kt)("a",{parentName:"p",href:"/general/development/process#security-issues"},"security issues that follow its own special process")," and are released bi-monthly."),(0,i.kt)("h2",{id:"see-also"},"See also..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/process/integration-review"},"Integration review process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/process"},"Process"))))}h.isMDXComponent=!0}}]);