"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[687],{87530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),n=a(13904),i=["components"],s={title:"Moodle 3.4",tags:["Release notes","Moodle 3.4"],sidebar_position:-304,moodleVersion:"3.4"},p=void 0,m={unversionedId:"releases/3.4",id:"releases/3.4",title:"Moodle 3.4",description:"Release date: 13 November 2017",source:"@site/general/releases/3.4.md",sourceDirName:"releases",slug:"/releases/3.4",permalink:"/devdocs/general/releases/3.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.4",permalink:"/devdocs/general/tags/moodle-3-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:-304,frontMatter:{title:"Moodle 3.4",tags:["Release notes","Moodle 3.4"],sidebar_position:-304,moodleVersion:"3.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.18",permalink:"/devdocs/general/releases/3.5/3.5.18"},next:{title:"Moodle 3.4.1",permalink:"/devdocs/general/releases/3.4/3.4.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Calendar improvements",id:"calendar-improvements",level:3},{value:"Management of course participants",id:"management-of-course-participants",level:3},{value:"Other highlights",id:"other-highlights",level:3},{value:"Backup, restore and import",id:"backup-restore-and-import",level:3},{value:"Global search",id:"global-search",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Functional changes",id:"functional-changes",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"For developers",id:"for-developers",level:3},{value:"Upgrading plugins",id:"upgrading-plugins",level:4},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,r.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 13 November 2017"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20AND%20resolution%20%3D%20fixed%20AND%20fixVersion%20in%20(3.4)%20ORDER%20BY%20priority%20DESC"},"the full list of fixed issues in 3.4"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/34/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.4 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/34/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 3.0 or later (if upgrading from earlier versions, you must upgrade to 3.0.10 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 7.0.0 ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.3"),". PHP 7.1.x and 7.2.x are supported too. PHP 7.x could have some ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP7#Can_I_use_PHP7_yet.3F"},"engine limitations"),"."),(0,l.kt)("li",{parentName:"ul"},"PHP extension ",(0,l.kt)("strong",{parentName:"li"},"intl")," is now required in Moodle 3.4 (it was recommended in 2.0 onwards)")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.3"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://whatbrowser.org"},"https://whatbrowser.org")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"calendar-improvements"},"Calendar improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59333"},"MDL-59333")," - Calendar Improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-1322"},"MDL-1322")," - Calendar entries in monthly view should include course shortname"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59382"},"MDL-59382")," - Create calendar event quick-add"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59390"},"MDL-59390")," - Add navigation of all calendar views without page reload"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59394"},"MDL-59394")," - Add support for drag and drop of calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59386"},"MDL-59386")," - Add support for creation and update of calendar events using a modal dialogue"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59890"},"MDL-59890")," - Add support for calendar events at the category level")),(0,l.kt)("h3",{id:"management-of-course-participants"},"Management of course participants"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59290"},"MDL-59290")," - Merge Course Participants and Enrolled Users pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59564"},"MDL-59564")," - Add bulk editing of enrolment status/dates for users in the course participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59364"},"MDL-59364"),' - Remove the "Brief / User Details" functionality from the participants page'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59365"},"MDL-59365")," - Enrol Users button on participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59366"},"MDL-59366")," - Add filter controls to the participants page to allow custom filtering"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59367"},"MDL-59367")," - Add a roles column to participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59368"},"MDL-59368")," - Add a groups column to the participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59369"},"MDL-59369")," - Add a status column to the participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59436"},"MDL-59436")," - Remove the columns from the participants page that are not in showuseridentity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59821"},"MDL-59821"),' - Add "Proceed to course content" to participants page')),(0,l.kt)("h3",{id:"other-highlights"},"Other highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57791"},"MDL-57791")," - Implement analytics engine in Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59313"},"MDL-59313")," - Add links and a drop down to navigate between activities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37361"},"MDL-37361")," - Allow teachers to mark activities as completed")),(0,l.kt)("h3",{id:"backup-restore-and-import"},"Backup, restore and import"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35429"},"MDL-35429")," - Correct the permissions required to download and restore course automated backups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-9367"},"MDL-9367")," - Restore with roll forward changes dates for user data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59518"},"MDL-59518")," - Restore date should not roll for user created data - Core components")),(0,l.kt)("h3",{id:"global-search"},"Global search"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55356"},"MDL-55356")," - Index contents of the restored courses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59523"},"MDL-59523")," - Course reset doesn't always shift dates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58957"},"MDL-58957")," - Global search: Make it possible to search blocks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59039"},"MDL-59039")," - Global search: Allow partial indexing (in scheduled task)")),(0,l.kt)("h3",{id:"authentication"},"Authentication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30634"},"MDL-30634")," - Assign arbitrary system roles via LDAP sync"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58544"},"MDL-58544")," - Add option to trust email of an OAuth provider"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59844"},"MDL-59844")," - Enable OAuth 2 token-based authentication for requests in webdav_client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59459"},"MDL-59459")," - Global Search: Increase file indexing coverage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59913"},"MDL-59913")," - Global search: Allow search of non-enrolled courses")),(0,l.kt)("h3",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55358"},"MDL-55358")," - LIS Group Variables support in LTI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36501"},"MDL-36501")," - Should have checkbox for extra credit when you add a grade item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28574"},"MDL-28574")," - Web services: Manage tokens page should show tokens for all users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26976"},"MDL-26976")," - Display space used in My Private Files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35668"},"MDL-35668")," - Performance improvement in Server files repository"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49398"},"MDL-49398")," - Performance improvement due to Role definition caching & accesslib refactoring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60002"},"MDL-60002"),' - Assignment grading: Adding back "Save and show next"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58889"},"MDL-58889")," - Make section titles and course titles more accessible in Boost"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57455"},"MDL-57455")," - Allow to tag database entries"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36985"},"MDL-36985"),' - Assignment: automatically remove embedded files that are no longer linked from submission text. Reduce the size of "Download all submissions"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59702"},"MDL-59702")," - Lesson overview report does not respect value of showuseridentity setting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59460"},"MDL-59460")," - Forum: make Subscription mode setting configurable")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("p",null,"Please read carefully: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/34/en/Upgrading#Possible_issues_that_may_affect_you_in_Moodle_3.4"},"Possible issues that may affect you in Moodle 3.4")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42834"},"MDL-42834")," - Deprecate loginhttps. Sites that used to use this setting will now be served via https always"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46269"},"MDL-46269")," - Tool to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/34/en/HTTPS_conversion_tool"},"convert http embedded content to https")," where available"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58388"},"MDL-58388")," - Let the admin control if the course end date form field in course settings is enabled by default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60211"},"MDL-60211")," - New filters for User Tours"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59123"},"MDL-59123")," - Compile SCSS files on the command-line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58567"},"MDL-58567")," - Upgrade: Show upgrade times"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55652"},"MDL-55652")," - Missing index on (timemodified) in grade_items_history table and several other grade history tables. This will increase performance of various reports but may also slow down Moodle upgrade"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60094"},"MDL-60094")," - Add CLI script to kill all sessions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59495"},"MDL-59495")," - Register and publish courses with moodle.net only, remove support for alternative hubs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59206"},"MDL-59206")," - Trigger an event in add_to_config_log function"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57115"},"MDL-57115"),' - Move "Messages" block out from the standard Moodle distribution'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57734"},"MDL-57734")," - SEO - Create admin setting to be able to enable or disable search engine indexing for sites with forcelogin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60309"},"MDL-60309")," - Boost: Add a setting for background image"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56751"},"MDL-56751")," - Create new security setting to configure the expiration time of tokens created via login/token.php or tool/mobile/launch.php")),(0,l.kt)("h3",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=361784"},"MSA-17-0021")," Students can find out email addresses of other students in the same course")),(0,l.kt)("p",null,"This list only includes security issues fixed after 3.3.2 release. Refer to other ",(0,l.kt)("a",{parentName:"p",href:"/general/releases"},"release notes")," for security issues fixed in earlier releases."),(0,l.kt)("h3",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60611"},"MDL-60611")," - Upgrade PHPUnit to 6.4 to ensure compatibility with PHP 7.2 - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Writing_PHPUnit_tests#Upgrading_unit_tests_to_work_with_Moodle_3.4_and_up_.28PHPUnit_6.29"},"may require changes in unittests"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58948"},"MDL-58948")," - Compatibility with chrome mink driver"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53169"},"MDL-53169")," - Provide a way to retrieve all courses a user can potentially access."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59459"},"MDL-59459")," - Global Search: Increase file indexing coverage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58957"},"MDL-58957")," - Global search: Make it possible to search blocks. See the new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Search_API#Base_class"},"\\core_search\\base_block class"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53240"},"MDL-53240")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#filetypes"},"Form element")," and admin setting type to choose file types and type groups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53848"},"MDL-53848")," - Formslib - add function to $mform that makes it possible to hide form elements dependent on selected values"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60234"},"MDL-60234")," - Add possibility to disable admin warning if a development libs directory exists"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57886"},"MDL-57886")," - Plagiarism: onlinetext submission should pass raw submissiontext to plagiarism get_links()")),(0,l.kt)("h4",{id:"upgrading-plugins"},"Upgrading plugins"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Check for changes in core APIs")),(0,l.kt)("p",null,"Read lib/upgrade.txt to check for the deprecations and core API changes, make sure you applied them to your plugin. Note that entries there are not sorted by priority but rather by integration time. Below is the list of upgrade.txt files that contain information about upgrading from Moodle 3.3 to Moodle 3.4 (note that if you upgrade from earlier versions there may be more files):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/lib/upgrade.txt"},"lib/upgrade.txt")," changes to various core APIs, deprecations, functions removal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/calendar/upgrade.txt"},"calendar/upgrade.txt")," changes to Calendar API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/search/upgrade.txt"},"search/upgrade.txt")," changes to Global search API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/webservice/upgrade.txt"},"webservice/upgrade.txt")," changes to WebServices API")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Check for changes in the API of your plugin type")),(0,l.kt)("p",null,"Below is the list of plugin types that had API changes between Moodle 3.3 and 3.4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/blocks/upgrade.txt"},"Block plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/dataformat/upgrade.txt"},"Dataformat plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/enrol/upgrade.txt"},"Enrolment method plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/upgrade.txt"},"Activity module plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/plagiarism/upgrade.txt"},"Plagiarism plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/repository/upgrade.txt"},"Repository plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/theme/upgrade.txt"},"Themes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/user/profile/field/upgrade.txt"},"User profile fields"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Check for changes in the depended plugins")),(0,l.kt)("p",null,"If your plugin depends on another plugin or calls methods from another plugin, read upgrade.txt in this plugin directory (if it exists). Below is the list of standard plugins that had changes between Moodle 3.3 and 3.4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/admin/tool/log/store/database/upgrade.txt"},"logstore_database")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/admin/tool/mobile/upgrade.txt"},"tool_mobile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/auth/ldap/upgrade.txt"},"auth_ldap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/blocks/calendar_upcoming/upgrade.txt"},"block_calendar_upcoming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/lib/editor/atto/upgrade.txt"},"editor_atto")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/assign/upgrade.txt"},"mod_assign")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/data/upgrade.txt"},"mod_data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/forum/upgrade.txt"},"mod_forum")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/glossary/upgrade.txt"},"mod_glossary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/lesson/upgrade.txt"},"mod_lesson")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/lti/upgrade.txt"},"mod_lti")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/mod/workshop/upgrade.txt"},"mod_workshop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.4.0/theme/boost/upgrade.txt"},"theme_boost"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Do a smoke test of your plugin with developer debugging mode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Run all behat and phpunit tests")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.4"},"Notes de mise \xe0 jour de Moodle 3.4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.4"},"Notas de Moodle 3.4"))))}k.isMDXComponent=!0}}]);