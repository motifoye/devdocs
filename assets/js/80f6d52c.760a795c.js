"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20542],{38472:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),l=["components"],i={title:"Moodle 2.3.2",tags:["Release notes","Moodle 2.3"],sidebar_position:2,moodleVersion:"2.3.2"},d=void 0,p={unversionedId:"releases/2.3/2.3.2",id:"releases/2.3/2.3.2",title:"Moodle 2.3.2",description:"Release date: 10 September, 2012",source:"@site/general/releases/2.3/2.3.2.md",sourceDirName:"releases/2.3",slug:"/releases/2.3/2.3.2",permalink:"/devdocs/general/releases/2.3/2.3.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.3/2.3.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.3",permalink:"/devdocs/general/tags/moodle-2-3"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.3.2",tags:["Release notes","Moodle 2.3"],sidebar_position:2,moodleVersion:"2.3.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.3.1",permalink:"/devdocs/general/releases/2.3/2.3.1"},next:{title:"Moodle 2.3.3",permalink:"/devdocs/general/releases/2.3/2.3.3"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 September, 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20AND%20resolution%20%3D%20fixed%20AND%20fixVersion%20in%20(%222.3.2%22)%20ORDER%20BY%20priority%20DESC"},"the full list of fixed issues in 2.3.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34543"},"MDL-34543")," - New assignment retains feedback when re-grading."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25492"},"MDL-25492")," - Blackboard V6+ question import is fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34583"},"MDL-34583")," - Feedback is maintained during assignment upgrades."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34192"},"MDL-34192")," - Grading assignments with the new assignment module now works with Oracle.")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25347"},"MDL-25347")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Blog_settings"},"Blog entry associations")," can now be controlled at fine-grained levels."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-23219"},"MDL-23219")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Permissions#Checking_permissions"},"Role and permission checking")," in courses and activities has been enhanced and simplified."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34705"},"MDL-34705")," - When viewing a user's assigned roles, links are provided to the context of each role."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34727"},"MDL-34727")," - The ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_restore"},"Restore")," user interface now uses checkboxes for controlling the inclusion of user data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34866"},"MDL-34866")," - The ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_settings#Course_layout"},"course layout")," can be set in course defaults."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32705"},"MDL-32705")," - The ability to check and uncheck all checkboxes in a group has now returned to backup, restore and import interfaces."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28346"},"MDL-28346")," - Moodle handles backups that were created when files were missing and warns users about such missing files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-6424"},"MDL-6424")," - A warning is given when deleting blocks.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211555"},"MSA-12-0051")," File upload size constraint issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211556"},"MSA-12-0052")," Course topics permission issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211557"},"MSA-12-0053")," Blog file access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211558"},"MSA-12-0054")," Course reset permission issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211559"},"MSA-12-0055")," Web service access token issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=211560"},"MSA-12-0056")," Information leak in drag-and-drop")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32499"},"MDL-32499")," - Restoring a course with a rubric no longer results in an error."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34451"},"MDL-34451")," - Quiz functionality to return a user to their last question is now fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34290"},"MDL-34290")," - Shortcuts/aliases to Dropbox files now synchronise."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35147"},"MDL-35147")," - Question import into Lesson has been fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-13629"},"MDL-13629")," - Gradebook behaviour to drop the lowest grade now works as expected."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29563"},"MDL-29563")," - Duplication links are now hidden for modules that do not support backup and restore."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33030"},"MDL-33030")," - The Lesson progress bar now grows and shrinks as students advance and return."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28531"},"MDL-28531")," ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29470"},"MDL-29470")," - Automated backups run on time.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.3.2"},"Notes de mise \xe0 jour de Moodle 2.3.2"))))}c.isMDXComponent=!0}}]);