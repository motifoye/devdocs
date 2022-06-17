"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[11787],{94307:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),s=r(13904),i=["components"],n={title:"Moodle 3.11.5",tags:["Release notes","Moodle 3.11"],sidebar_position:5,moodleVersion:"3.11.5"},p=void 0,m={unversionedId:"releases/3.11/3.11.5",id:"releases/3.11/3.11.5",title:"Moodle 3.11.5",description:"Release date: 17 January 2022",source:"@site/general/releases/3.11/3.11.5.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.5",permalink:"/devdocs/general/releases/3.11/3.11.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/devdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.11.5",tags:["Release notes","Moodle 3.11"],sidebar_position:5,moodleVersion:"3.11.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.4",permalink:"/devdocs/general/releases/3.11/3.11.4"},next:{title:"Moodle 3.11.6",permalink:"/devdocs/general/releases/3.11/3.11.6"}},d={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 17 January 2022"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.11.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.11.5"),"."),(0,l.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68944"},"MDL-68944")," - Workshop skips scheduled allocation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69467"},"MDL-69467")," - H5P attempts not recorded when multiple users have same email address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69496"},"MDL-69496")," - mod_quiz: Or all available attempts completed setting value lost"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68773"},"MDL-68773")," - Adhoc tasks for backup and restore are stuck in endless fail delay loop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59115"},"MDL-59115")," - OAuth2 does not pass in all user mapped settings into new account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72796"},"MDL-72796")," - retry interval in milliseconds for redis session cache is far too high"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72791"},"MDL-72791")," - Custom course field content for new course not found in global search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72443"},"MDL-72443")," - SVG files do not support the preview mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72716"},"MDL-72716")," - You should not be able to add more than one instance of most blocks to your Dashboard"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72925"},"MDL-72925")," - Forum grading separate group filter shows discussion topics in the other groups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73414"},"MDL-73414"),' - Impossible to turn on only "Enable web services" from site admin page'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73189"},"MDL-73189")," - File upload limits not always enforced if there are many simultaneous uploads in progress"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69061"},"MDL-69061")," - Lack of files reported during upgrade to 3.9 when $CFG->admin differs from 'admin'"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73046"},"MDL-73046")," - HTML5 video in the mediaplugin fails when using  .MOV files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72988"},"MDL-72988")," - PHP Notices detected in web server logs (mod_lti)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72966"},"MDL-72966")," - File upload: Uncaught TypeError from JavaScript when uploading a single file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73195"},"MDL-73195")," - mod_url: Error makes course/view.php unreachable if an invalid URL is saved"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73207"},"MDL-73207")," - $CFG->scheduled_tasks has incorrect order for dayofweek and months in cron spec"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72701"},"MDL-72701")," - Expand unit test coverage defaults"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73128"},"MDL-73128")," - Image caption warning for external badges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73155"},"MDL-73155")," - Essay qtype: Error message is displayed when Allow attachments field is reset to 'No'"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73256"},"MDL-73256"),' - Disabling "Require email verification" doesn\'t persist properly the first time'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73086"},"MDL-73086")," - User profile fields are broken when having uppercase in shortname"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73153"},"MDL-73153")," - External badge image not displayed in some cases"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72992"},"MDL-72992")," - Cannot enter feedback from grader report when feedback was previously deleted from assign grader"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72785"},"MDL-72785")," - Can't delete course category"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73176"},"MDL-73176")," - JS exception filtering course participants for keyword containing quotes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73402"},"MDL-73402")," - Admin bookmarks block is too aggressive at cleaning bookmarked section"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72870"},"MDL-72870")," - Quiz attempt navigation buttons misaligned"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73039"},"MDL-73039")," - Double encoding of site/course name in course download"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73140"},"MDL-73140")," - Badly formatted lists in the grade history report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72982"},"MDL-72982")," - Data request email breaks organisation signature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61671"},"MDL-61671")," - Admin mobile certificate check can return errors on valid certificate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72789"},"MDL-72789")," - Improve filtering by component in eventlist report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72908"},"MDL-72908")," - Purge all caches only purges the selected cache if selected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73074"},"MDL-73074")," - Course autocomplete duplicated in report condition/filter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73255"},"MDL-73255")," - User Participants filter leaves invalid group filter row if no groups are present")),(0,l.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70274"},"MDL-70274")," - The WCAG (cynthia.exe) validator links in the footer is no longer available"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73026"},"MDL-73026")," - Focus outline for modal close button is clipped and has insufficient colour contrast"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70721"},"MDL-70721")," - Need a Mustache helper method for html entities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73142"},"MDL-73142")," - File extension in Essay accepted file type list is failing accessibility color contrast limits")),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73175"},"MDL-73175")," - Add behat generators for glossary entries and categories"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73202"},"MDL-73202")," - Add behat generators for forum discussions and posts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72846"},"MDL-72846")," - Create default block generator for testing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73269"},"MDL-73269")," - Add PHP version and required/optional extensions to composer.json")),(0,l.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72096"},"MDL-72096")," - New helper function for cleaning SQL ORDER BY clauses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73295"},"MDL-73295")," - sesskey is exposed in url for /user/managetoken.php")),(0,l.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431099"},"MSA-22-0001")," SQL injection risk in code fetching h5p activity user attempts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431100"},"MSA-22-0002")," calendar:manageentries capability allows CRUD access to all calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431102"},"MSA-22-0003")," Capability gradereport/user:view not always respected when navigating to a user's course grade report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=431103"},"MSA-22-0004")," CSRF risk in badge alignment deletion")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.11.5"},"Notes de mise \xe0 jour de Moodle 3.11.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.11.5"},"Notas de Moodle 3.11.5"))))}k.isMDXComponent=!0}}]);