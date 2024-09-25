javascript:
var s = document.createElement('style');
s.textContent = 
`:root {
    /*Variables*/
    /*Images*/
    --helpTrayImg: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcD_iSm8l_0fpnPIJBbUkHZWcSmjc2B2MjQ&usqp=CAU=);
    --bgImg: url(https://static.miraheze.org/projectsekaiwiki/thumb/a/aa/Toya_19_trained_art.png/1218px-Toya_19_trained_art.png);
    --dashboardICON: url(https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F1029196625723260998.gif%3Fv%3D1&w=64&q=75);
    --coursesICON: url(https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F1008084467644125305.gif%3Fv%3D1&w=64&q=75);
    --calendarICON: url(https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F1058053725173850242.png%3Fv%3D1&w=64&q=75);
    --inboxICON: url(https://static.miraheze.org/projectsekaiwiki/thumb/e/e2/Stamp0126.png/128px-Stamp0126.png);
    --historyICON: url(https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F1092980876423462972.png%3Fv%3D1&w=64&q=75);
    --helpICON: url(https://static.miraheze.org/projectsekaiwiki/thumb/b/b7/Stamp0142.png/128px-Stamp0142.png);

    /*Colors*/
    --tcolor: hsl(207, 100%, 61%);
    /*Color of Text*/
    --bgcolor: var(--trans);
    /*Color of non-text stuff*/
    --subcolor: #565656;
    /*Other Color*/
    --glowcolor: #7492ab;
    /*Glow*/
    --accent: hsl(207, 100%, 24%);
    /*Color of Glow*/
    --notif-color: #ED4245;
    /*Inbox notification color*/
    /*Courses Hover*/
    --assignmentsColor: #ffa53d;
    --quizsColor: #fc6262;
    --formsColor: #fcf262;
    --attachmentsColor: #5fff57;
    --externalurlsColor: #62fcd3;

    /*MISC.*/
    --name: "Who tf?";
    /*Account display name*/

    /*DONT CHANGE / REMOVE*/
    --br: 10px;
    --mgWidth: 10px;
    --opacity: 0.7;
    --trans: transparent;
    --glow: 0 0 5px var(--glowcolor),
        0 0 10px var(--glowcolor),
        0 0 20px var(--accent),
        0 0 40px var(--accent);
    --progressGlow: 0 0 10px var(--accent),
        0 0 15px var(--accent),
        0 0 25px var(--accent),
        0 0 45px var(--accent);

    /*Overwrites Canvas Set Colors*/
    --ic-brand-primary: var(--tcolor) !important;
    --ic-link-color: var(--tcolor) !important;
    --ic-brand-global-nav-avatar-border: var(--tcolor) !important;
    --ic-brand-global-nav-ic-icon-svg-fill: var(--tcolor) !important;
}

/*Decoration None*/
* {
    text-decoration: none !important;
}

/* Setup */
a,
td,
div,
span,
input,
button {
    color: var(--tcolor) !important;
    border-color: var(--tcolor) !important;
}

a:hover {
    color: var(--tcolor);
    text-shadow: var(--glow);
}

btn,
button:hover {
    background: var(--trans);
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

span,
a,
div,
td,
nav,
label {
    background-color: var(--trans) !important;
}


/*Fonts*/
@font-face {
    font-family: "DIN Next LT W01";
    src: url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.eot");
    src: url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.woff") format("woff"), url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/25c8d3f21fac75e401fe67e5c3878ae4.svg#DIN Next LT W01") format("svg");
}

input {
    font-family: "DIN Next LT W01" !important;
}

@font-face {
    font-family: gamefont;
    src: url(https://raw.githubusercontent.com/RestrictedWord/kirka/main/css/lore/client/fonts/BF_Modernista-Regular.ttf);
}

* {
    font-family: gamefont;
    background-color: hsla(198, 100%, 75%, 0.25);
    border-radius: 3px;
}

/*Scroll Bar*/
::-webkit-scrollbar {
    width: 4px !important;
    border-radius: var(--br) !important;
    background-color: var(--bgcolor) !important;
}

::-webkit-scrollbar-thumb {
    background-color: var(--bgcolor) !important;
}

/*Checkbox*/
input[type=checkbox] {
    accent-color: var(--accent) !important;
}

/*Box Glow*/
/*
{
    background-color: var(--accent) !important;
    text-shadow: var(--glow) !important;
    color: var(--tcolor) !important;
    box-shadow: var(--glow) !important;
}

/*Text Glow*/
/*
{
    color: var(--tcolor);
    text-shadow: var(--glow);
}

/*Display None*/
.ic-Instructure-Logo,
#footer-links.ic-app-footer__links,
#footer.ic-app-footer,
.Grouping-styles__hero.Grouping-styles__heroHover,
.css-mu6wdj-view--inlineBlock-badge,
#PlannerEmptyState_AddToDo,
.header-bar,
.css-1mifp20-view-tab {
    display: none !important;
}

/*MISC.*/
/*Loading*/
.css-11wqaaa-view-spinner {
    content: var(--loadingImg) !important;
}

/* Login Page */
.ic-app {
    /*background: var(--bg);*/
    background: var(--bgImg) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

.ic-Login__content {
    background: var(--trans) !important;
    border: var(--trans) !important;
}

.ic-Login-header__logo,
.ic-app-header__logomark {
    background: var(--trans) !important;
    content: var(--profileIcon) !important;
}

.ic-Login__link:hover,
#pseudonym_session_remember_me~label:hover {
    color: var(--tcolor) !important;
    text-shadow: var(--glow);
}

.ic-Input.text:hover,
.Button.Button--login:hover {
    background: var(--trans);
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow);
}

#footer-epilogue .external {
    font-size: 0;
}

#footer-epilogue .external::before {
    color: var(--tcolor);
    font-size: 15px;
    content: "CSS Made by -Renine-";
}

/* Dashboard */
#PlannerEmptyState_AddToDo {
    text-decoration: none !important;
}

.Day-styles__root.planner-day,
.PlannerApp.large,
.css-1xepshn-pill,
.css-1esqpht-pill,
.PlannerHeader-styles__root.PlannerHeader,
.css-1f6zcte-baseButton__content,
.StickyButton-styles__newActivityButton,
.large.ic-Dashboard-header__layout {
    background-color: var(--trans) !important;
}

.css-19i4e00-textInput__layout,
.css-1xvmiv1-optionItem__container,
#Selectable_3-list.css-1mlh18k-view--inlineBlock,
.css-1uz7kmt-view--block-contextView__content {
    background: var(--bgcolor) !important;
}

.css-r7xho6-view,
.css-1kdtqv3-tray__content,
.css-9ca8iq-textInput,
.css-18m4bch-textArea,
.Opportunities-styles__root,
.css-njggem-view-tabs__tabList,
.Opportunity-styles__oppNameAndTitle,
.Opportunity-styles__footer,
.css-17lqh84-view-panel__content.transition--fade-entered,
.Opportunity-styles__root,
.css-ktk67h-menuItemGroup__label,
.css-dlvexy-menuItem,
.css-a6zj6t-menu,
#Selectable_0-list,
.css-1tp02dz-view-alert {
    background-color: var(--bgcolor) !important;
    background: var(--trans);
    color: var(--tcolor);
}

.css-1f6zcte-baseButton__content,
.css-1eaecfq-baseButton__content,
.css-10dz9lm-toggleDetails__summary,
.css-1xepshn-pill,
.css-j68kdy-formFieldLabel,
.css-9ca8iq-textInput,
.css-1sp24u-text,
.css-x3tlo3-view--inlineBlock-contextView div {
    color: var(--tcolor) !important;
}

.Day-styles__secondary,
.css-xqopp9-text,
.css-tz46fa-view-heading,
.PlannerEmptyState-styles__subtitle,
.css-fqvta1-calenderDay__day span {
    color: var(--subcolor) !important;
}

.css-sg8c9f-view--block-badge {
    background-color: var(--notif-color) !important;
}

.css-6t42ud-view-link:hover,
.css-f32ptg-toggleDetails__summaryText:hover,
.StickyButton-styles__newActivityButton:hover,
.css-1xvmiv1-optionItem__container:hover {
    color: var(--tcolor);
    text-shadow: var(--glow);
}

.css-7tutmp-view--inlineBlock-baseButton:hover,
.css-hcyq0y-view--inlineBlock-baseButton:hover,
.css-f3koyy-view--inlineBlock-baseButton:hover .css-dlvexy-menuItem:hover {
    background: var(--trans);
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

.Day-styles__secondary,
.css-xqopp9-text {
    color: var(--tcolor) !important;
    opacity: var(--opacity);
}

.PlannerEmptyState-styles__root.planner-empty-state svg {
    content-visibility: hidden;
    background: var(--nothingMoreToDoImg);
}

.css-menplw-view--block {
    display: none;
}

.css-mum2ig-text,
.css-1vfp3rz-text {
    color: var(--tcolor);
    opacity: var(--opacity);
}

/* Calendar */
.fc-day-number:hover,
.navigate_prev:hover,
.navigate_next:hover,
.navigate_today.btn:hover,
.ui-datepicker-trigger.btn:hover {
    background: var(--trans);
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

.navigation_title_text:hover {
    color: var(--tcolor);
    text-shadow: var(--glow);
}

#ui-datepicker-div,
.ui-datepicker-header,
#edit_calendar_event_form_holder,
.fc-widget-content td,
.ui-dialog {
    background-color: var(--bgcolor) !important;
}

.fc-day,
.fc-day-number,
.navigate_today.btn,
.navigate_prev,
.navigate_next,
.header-bar,
.ui-datepicker-trigger.btn,
.date_field {
    background-color: var(--bgcolor) !important;
    background: var(--trans);
    color: var(--tcolor);
}

#undated-events div {
    background-color: var(--trans) !important;
}

/* Sidebar */
.menu-item-icon-container img,
.css-pasg4i-view--block-avatar,
.css-1btsr0p-view--block-avatar {
    content: var(--profileIcon);
    background-color: var(--trans);
}

.css-16jy445-baseButton__content {
    background: var(--trans);
}

.ic-app-header__main-navigation,
.ic-app-header__menu-list-link,
.ic-app-header__menu-list-link--nav-toggle {
    background-color: var(--bgcolor) !important;
    color: var(--tcolor) !important;
    background: var(--bgcolor) !important;
}

.ic-app-header__menu-list-link:hover,
.ic-app-header__menu-list-link--nav-toggle:hover,
.css-16jy445-baseButton__content:hover,
.navigate_today.btn:hover {
    background: var(--bgcolor) !important;
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

.menu-item__badge {
    background: var(--notif-color) !important;
}

.css-1sr6v3o-text {
    color: var(--tcolor) !important;
    opacity: var(--opacity);
}

/* Sidebar Icons*/
.menu-item-icon-container>.fs-exclude {
    border-color: var(--bgcolor) !important;
    border-radius: 10px;
    border-width: 0px;
}

.ic-icon-svg.ic-icon-svg--dashboard,
.ic-icon-svg.ic-icon-svg--courses,
.ic-icon-svg.ic-icon-svg--calendar,
.ic-icon-svg.ic-icon-svg--inbox,
.ic-icon-svg.menu-item__icon.svg-icon-history,
.ic-icon-svg.ic-icon-svg--lti.menu-item__icon,
.ic-icon-svg.menu-item__icon.svg-icon-help {
    content-visibility: hidden;
}

#global_nav_dashboard_link svg {
    background: var(--dashboardICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

#global_nav_courses_link svg {
    background: var(--coursesICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

#global_nav_calendar_link svg {
    background: var(--calendarICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

#global_nav_conversations_link svg {
    background: var(--inboxICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

#global_nav_history_link svg {
    background: var(--historyICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

#context_external_tool_85_menu_item {
    display: none !important;
}

#global_nav_help_link svg {
    background: var(--helpICON);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
}

/*Courses*/
.context_module_item,
.btn {
    background-color: var(--trans) !important;
    color: var(--tcolor) !important;
}

#Select_0:hover,
#right-side-wrapper span:hover {
    background: var(--trans) !important;
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

#right-side-wrapper {
    color: var(--tcolor);
}

#right-side-wrapper div th,
.course-list-table-row,
.ui-button {
    background-color: var(--trans) !important;
}

#content,
.mini-cal-header i {
    color: var(--tcolor);
}

.ui-button:hover {
    background: var(--trans) !important;
    text-shadow: var(--glow);
    color: var(--tcolor);
    box-shadow: var(--glow) !important;
}

/*User*/
.css-wj8vot-view-flexItem th,
.css-wj8vot-view-flexItem td {
    background-color: var(--bgcolor) !important;
}

.css-vgffo1-view--block span {
    background-color: var(--bgcolor) !important;
}

.css-h20mns-view--flex-flex h1 input {
    background-color: var(--bgcolor) !important;
}

.css-ev0s2h-view h2 {
    font-size: 0 !important;
}

.css-ev0s2h-view h2::before{
    font-size: 30px !important;
    content: var(--name);
}

/*Help*/
#help_tray span img {
    content: var(--helpTrayImg);
}

/*Courses Style Hover*/
.ig-header.header,
.ig-row.ig-published.student-view {
    border-width: 1px;
    border-radius: 10px !important;
}

.context_module_item.student-view>.ig-row.ig-published {
    transition: margin-left .1s, margin-right .1s;
}

.context_module_item.student-view.assignment>.ig-row.ig-published {
    padding-block: 5px;
}

.item-group-condensed.context_module.student-view>.ig-header.header {
    border-left: 7px solid var(--tcolor) !important;
    border-right: 7px solid var(--tcolor) !important;
    margin-left: -15px;
    margin-right: -15px;
    padding-block: 20px;
}

.context_module_item.student-view.context_module_sub_header>.ig-row.ig-published {
    border-left: 5px solid var(--tcolor) !important;
    border-right: 5px solid var(--tcolor) !important;
    margin-top: 10px;
    margin-left: -5px;
    margin-right: -5px;
    padding-block: 15px;
}

.context_module_item.student-view.assignment>.ig-row.ig-published:hover {
    border-left: 5px solid var(--assignmentsColor) !important;
    border-right: 5px solid var(--assignmentsColor) !important;
    margin-left: var(--mgWidth) !important;
    margin-right: var(--mgWidth) !important;
}

.context_module_item.student-view.lti-quiz>.ig-row.ig-published:hover {
    border-left: 5px solid var(--quizsColor) !important;
    border-right: 5px solid var(--quizsColor) !important;
    margin-left: var(--mgWidth) !important;
    margin-right: var(--mgWidth) !important;
}

.context_module_item.student-view.wiki_page>.ig-row.ig-published:hover {
    border-left: 5px solid var(--formsColor) !important;
    border-right: 5px solid var(--formsColor) !important;
    margin-left: var(--mgWidth) !important;
    margin-right: var(--mgWidth) !important;
}

.context_module_item.student-view.attachment>.ig-row.ig-published:hover {
    border-left: 5px solid var(--attachmentsColor) !important;
    border-right: 5px solid var(--attachmentsColor) !important;
    margin-left: var(--mgWidth) !important;
    margin-right: var(--mgWidth) !important;
}

.context_module_item.student-view.external_url>.ig-row.ig-published:hover {
    border-left: 5px solid var(--externalurlsColor) !important;
    border-right: 5px solid var(--externalurlsColor) !important;
    margin-left: var(--mgWidth) !important;
    margin-right: var(--mgWidth) !important;
}

/*Section Tab Hover*/
#section-tabs>.section:hover {
    transition: border-left .1s, margin-left .1s;
    border-left: 5px solid var(--tcolor);
    margin-left: 10px;
}

/*Sidebar Style Hover*/
.ic-app-header__menu-list-link {
    transition: padding-top .1s, padding-bottom .1s;
}

.ic-app-header__menu-list-link:hover {
    border: 2px solid var(--tcolor) !important;
    padding-bottom: 15px;
    padding-top: 15px;
}

.ic-app-header.no-print {
    background-color: var(--trans);
}

/*Slide Hover*/
.ic-app-header__main-navigation>.ic-app-header__menu-list {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s linear;
}

.ic-app-header__main-navigation:hover>.ic-app-header__menu-list {
    transition-delay: .1s;
    bottom: 0;
    height: 100%;
}

/*Course Home Page*/
    /*Banner*/
.show-content.user_content.clearfix.enhanced > p > img{
    content: var(--bannerImg);
}
    /*Hide Useless*/
.show-content.user_content.clearfix.enhanced > table{
    display: none;
}

/**/
/**/
/**/
/**/
/**/
/**?
/**/
/**/
/**/
/**/`;
document.head.appendChild(s);

(function(){
    Notification.requestPermission().then(perm => {
        if(perm === 'granted'){
            new Notification('Wao~', {
                body: 'Successfully Applied CSS!',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3J5WcqjK7Csi7k-z0Gv8k59H-fdl5EgL-beJdsqKhy58mryDjnlyjztPMPvBRqj-jjQ&usqp=CAU',
                tag: 'applied css',
                renotify: true
            })
        }
    })
})()
