"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[25811],{90630:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return k}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),s=["components"],i={title:"Moodle App 3.7.0 release notes",sidebar_label:"Moodle App 3.7.0",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v3/v3.7.0",id:"app_releases/v3/v3.7.0",title:"Moodle App 3.7.0 release notes",description:"Release date: 7th June 2019",source:"@site/general/app_releases/v3/v3.7.0.md",sourceDirName:"app_releases/v3",slug:"/app_releases/v3/v3.7.0",permalink:"/devdocs/general/app_releases/v3/v3.7.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v3/v3.7.0.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655447807,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Moodle App 3.7.0 release notes",sidebar_label:"Moodle App 3.7.0",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle App 3.6.1",permalink:"/devdocs/general/app_releases/v3/v3.6.1"},next:{title:"Moodle App 3.7.1",permalink:"/devdocs/general/app_releases/v3/v3.7.1"}},d={},k=[{value:"New features and improvements",id:"new-features-and-improvements",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Epic",id:"epic",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Improvement",id:"improvement",level:3}],u={toc:k};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 7th June 2019"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=16681"},"Complete list of fixed issues in Moodle App 3.7.0"),"."),(0,l.kt)("h2",{id:"new-features-and-improvements"},"New features and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Various UX improvements"),(0,l.kt)("li",{parentName:"ul"},"Support for forum improvements in Moodle 3.7"),(0,l.kt)("li",{parentName:"ul"},"Support for group messaging improvements in Moodle 3.7 (including Push notifications for group messaging and mute conversations)"),(0,l.kt)("li",{parentName:"ul"},"Improved storage management (user can manage storage within any course)"),(0,l.kt)("li",{parentName:"ul"},"Big performance improvements (especially when connecting to a site running Moodle 3.7 onwards)"),(0,l.kt)("li",{parentName:"ul"},"Offline support for Nextcloud"),(0,l.kt)("li",{parentName:"ul"},"Vimeo embedding improvements")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For developers:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved custom URL scheme API allowing SSO from other apps")),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2840"},"MOBILE-2840")," - SCORM module is not being launched automatically in some cases"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2842"},"MOBILE-2842")," - Database: Only one offline action is stored for each entry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2882"},"MOBILE-2882")," - Restore browser SSO in Mac apps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2901"},"MOBILE-2901")," - Support Nextcloud offline files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2927"},"MOBILE-2927")," - Desktop: Adapt push notifications simulation to the new behaviour"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2928"},"MOBILE-2928")," - Content links and push clicks doesn't use the openCourse function"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2940"},"MOBILE-2940")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"<core-icon>")," label attribute does not work on Ionic icons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2948"},"MOBILE-2948")," - Assign: Prefetching not working for teachers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2949"},"MOBILE-2949")," - Database: Content jumps when navigating entries individually"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2952"},"MOBILE-2952")," - Matching question dropdowns are not properly aligned"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2969"},"MOBILE-2969")," - Quiz: Student can always review an attempt if he's reviewed it in the past"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2980"},"MOBILE-2980")," - Phonegap Build auto-generated activity name causes problem for apps with non-latin names"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2981"},"MOBILE-2981")," - ion-select arrow is black by default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2982"},"MOBILE-2982")," - Site plugins not loaded in Moodlecloud sites"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2983"},"MOBILE-2983")," - Set a new reminder button is confusing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2993"},"MOBILE-2993")," - Grade report - null is not an object (evaluating 'src","[1]","')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2996"},"MOBILE-2996")," - Logout + SSO: User is able to override the stored site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2998"},"MOBILE-2998")," - ddimageortext and ddmarker are broken in Moodle 3.7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2999"},"MOBILE-2999")," - Travis is failing with Node 12 because of node-sass"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3003"},"MOBILE-3003")," - Feedback: Numeric answer show the the range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3005"},"MOBILE-3005")," - Docker images are failing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3008"},"MOBILE-3008"),' - Course format site plugin: "Invalid parameter value detected"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3017"},"MOBILE-3017")," - Default time for calendar events is not visible in some languages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3033"},"MOBILE-3033")," - Some site plugins can use the same name to store the data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3049"},"MOBILE-3049")," - Site home activities are not displayed in new sites"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3050"},"MOBILE-3050")," - Essay lesson questions don't work in offline in Moodle 3.7")),(0,l.kt)("h3",{id:"epic"},"Epic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2942"},"MOBILE-2942")," - Forum facelift for Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2943"},"MOBILE-2943")," - Group messaging improvements for 3.7")),(0,l.kt)("h3",{id:"new-feature"},"New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2905"},"MOBILE-2905")," - Allow user to manage storage within course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2945"},"MOBILE-2945")," - Display custom course fields in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2962"},"MOBILE-2962")," - Support self conversations in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2978"},"MOBILE-2978"),' - Forum: Implement a "Private Reply" option'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2988"},"MOBILE-2988")," - Forum: Add the ability to lock discussions manually"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2989"},"MOBILE-2989")," - Forum: Add ability to star and pin discussions")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2817"},"MOBILE-2817")," - Lesson UX improvements for multiple attempts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2835"},"MOBILE-2835")," - Sites saved even if reinstalled Moodle Desktop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2838"},"MOBILE-2838")," - Use tool_mobile_call_external_functions when available"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2851"},"MOBILE-2851")," - Display / use last course access where necessary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2856"},"MOBILE-2856")," - Database: Offline entries cannot be viewed, edited, deleted and approved"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2860"},"MOBILE-2860")," - Allow conversations to be muted/unmuted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2873"},"MOBILE-2873")," - Improve activity synchronisation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2894"},"MOBILE-2894"),' - Assignment requiring groups - App shows "Not a member of any group" instead of "Member of more than one group"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2895"},"MOBILE-2895")," - Download icon should change to a different icon, not disappear"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2898"},"MOBILE-2898")," - User is not able to know course is downloaded"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2900"},"MOBILE-2900")," - Exclude enrolledusercount from enrol_get_users_courses web service call"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2903"},"MOBILE-2903")," - Show menu items depending on device width and show on a side when on tablet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2906"},"MOBILE-2906")," - Create course menu delegate so addons can add menu items"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2907"},"MOBILE-2907")," - Obtain the resource file mimetype and other required information from the course_get_contents WS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2914"},"MOBILE-2914"),' - The "star" switch for adding to Contacts is completely confusing, can\'t tell between ON and OFF modes'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2921"},"MOBILE-2921")," - Improve handling push notification clicks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2935"},"MOBILE-2935")," - Support site plugins for blocks on dashboard page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2937"},"MOBILE-2937")," - Smooth show/hide top tabs on scroll"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2938"},"MOBILE-2938")," - Allow site plugins to specify it own URLs for the app and handle the contexturl field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2939"},"MOBILE-2939")," - Improve download size warnings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2944"},"MOBILE-2944")," - Hide completion bar and completion menu option for teachers (or any non-tracked user)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2947"},"MOBILE-2947")," - Push notifications icons should support colors when displayed in the notifications center"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2951"},"MOBILE-2951")," - Make it easier to see what web services requests are made"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2953"},"MOBILE-2953")," - Use the new customdata sent by push notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2954"},"MOBILE-2954")," - Ensure Firebase analytics are disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2955"},"MOBILE-2955")," - Quiz entry page should be refreshed when a download finishes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2956"},"MOBILE-2956")," - Improve the notifications page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2957"},"MOBILE-2957")," - Support Firebase analytics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2959"},"MOBILE-2959")," - Custom status bar color in Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2960"},"MOBILE-2960")," - Improve Vimeo embedding for 3.7 onwards"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2961"},"MOBILE-2961")," - Support push notification images, pictures and messages grouped"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2963"},"MOBILE-2963")," - Apply UI changes in messaging for 3.7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2964"},"MOBILE-2964")," - Allow teachers to delete messages for all users within their conversations in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2966"},"MOBILE-2966")," - Quiz: Allow clearing answer choice in multiple choice in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2974"},"MOBILE-2974")," - Assignment: Improve submission statement to cover all possible settings, support for the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2975"},"MOBILE-2975")," - Support new features indicated in 3.7 to be disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2977"},"MOBILE-2977")," - Post-release process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2979"},"MOBILE-2979")," - Align the download icons on the course page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2984"},"MOBILE-2984")," - Allow changing the title of dashboard page using a config.json variable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2985"},"MOBILE-2985")," - Forum: Simplified form when adding discussions and replies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2986"},"MOBILE-2986")," - Allow enabling developer tools in the desktop version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2992"},"MOBILE-2992")," - Sort forum discussions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2994"},"MOBILE-2994")," - File support for Lesson Essay"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3001"},"MOBILE-3001")," - Retrieving the course users details has a big impact on performance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3004"},"MOBILE-3004")," - Add the hability to personalize status bar background color"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3010"},"MOBILE-3010")," - Support bootstrap tooltips"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3013"},"MOBILE-3013")," - Allow to SSO from external apps via the Custom URL Scheme API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3016"},"MOBILE-3016")," - Local notifications icon in Android should be a calendar icon"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3018"},"MOBILE-3018"),' - Support the "Post a copy to all groups" option when a teacher is creating a new discussion'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3019"},"MOBILE-3019")," - Support the new forum due dates in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3031"},"MOBILE-3031")," - Create a gulp command to combine all SCSS files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3034"},"MOBILE-3034")," - Improve module restrictions styles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3035"},"MOBILE-3035")," - Delete cache when cleaning storage of a site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3036"},"MOBILE-3036")," - Define different cache expiration times"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3037"},"MOBILE-3037")," - Execute gulp before running ionic serve"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3038"},"MOBILE-3038")," - Link Course competencies to learning plans"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3045"},"MOBILE-3045")," - Change splash screen to white")))}h.isMDXComponent=!0}}]);