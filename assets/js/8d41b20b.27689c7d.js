"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[45180],{48627:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return p}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.4.1",tags:["Release notes","Moodle 2.4"],sidebar_position:1,moodleVersion:"2.4.1"},d=void 0,m={unversionedId:"releases/2.4/2.4.1",id:"releases/2.4/2.4.1",title:"Moodle 2.4.1",description:"Release date: 14 January 2013",source:"@site/general/releases/2.4/2.4.1.md",sourceDirName:"releases/2.4",slug:"/releases/2.4/2.4.1",permalink:"/devdocs/general/releases/2.4/2.4.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.4/2.4.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.4",permalink:"/devdocs/general/tags/moodle-2-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 2.4.1",tags:["Release notes","Moodle 2.4"],sidebar_position:1,moodleVersion:"2.4.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.4",permalink:"/devdocs/general/releases/2.4"},next:{title:"Moodle 2.4.2",permalink:"/devdocs/general/releases/2.4/2.4.2"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 January 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.4.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.4.1"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32880"},"MDL-32880")," - Make 1.9 blocks restorable in 2.3 onwards"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34791"},"MDL-34791")," - Activity quick title edit updates name in gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35653"},"MDL-35653")," - Wiki module works if you activate the force format option")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30700"},"MDL-30700"),' - There is a new function "text_sorting($columnname)" for the class flexible_table which allows you to specify which columns are of type "text" so they can be sorted correctly in all databases.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35593"},"MDL-35593")," - core_webservice_get_site_info returns version number as PARAM_TEXT"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30961"},"MDL-30961")," - get_course_contents web service's name value is now PARAM_RAW")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220157"},"MSA-13-0001")," - Security issue in Google Spellchecker in TinyMCE"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220158"},"MSA-13-0002")," - Capability issue with Outcome editing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220160"},"MSA-13-0003")," - Potential server file access through backup restoration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220161"},"MSA-13-0004")," - Information leak through activity report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220162"},"MSA-13-0005")," - Potential phishing attack through URL redirects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220163"},"MSA-13-0006")," - Potential information leak in Assignment module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220164"},"MSA-13-0007")," - Potential exploit in messaging"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220165"},"MSA-13-0008")," - Information leak through Blog RSS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220166"},"MSA-13-0009")," - Information leak through Blog RSS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220167"},"MSA-13-0010")," - Failure to check capabilities in calendar")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36680"},"MDL-36680")," - Overview report now gives correct course total by not including hidden item grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37165"},"MDL-37165")," - Assignment summary displays on Oracle"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36963"},"MDL-36963")," - Automatic updates deployer needs checks directory permissions")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.4.1"},"Notes de mise \xe0 jour de Moodle 2.4.1"))))}h.isMDXComponent=!0}}]);