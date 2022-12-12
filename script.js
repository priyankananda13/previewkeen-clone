// Navigating the DOM so as to target the elements in the DOM
const sideBarMenu = document.querySelector('.sidebar-menu'),
keenlogo = document.getElementById('keenLOGO'),
navbar = document.querySelector('.navbar'),
sideBarLogo = document.querySelector('.sidebar-logo'),
leftNavbar = document.querySelector('.left-navbar'),
mainWebsite = document.querySelector('.main-website'),
collapseIcon = document.getElementById('collapseIcon'),
selCampaign = document.querySelector('.selCampaign'),
selCampaignDropdown = document.querySelector('.selCampaignDropdown'),
selCampaignContent = document.querySelectorAll('.selCampaignDropdown-list'),
activeSelectDropdown = document.querySelector('.activeDropdown'),
searchIcon = document.querySelector('.searchIcon'),
searchBox= document.querySelector('.searchBox'),
siteContent = document.querySelector('.siteContent'),
sidebarContent = document.querySelector('.sidebarContent'),
activity = document.querySelector('.activity'),
activityList= document.querySelector('.activityList'),
activityL = document.querySelector('.activityL'),
closeActivity = document.querySelector('.closeActivity'),
message = document.querySelector('.message'),
messagePopup = document.querySelector('.messagePopup'),
closeMessage = document.querySelector('.closeMessage'),
notification = document.querySelector('.notification'),
toggleSidebar = document.querySelector('.toggleSidebar'),
categorires = document.querySelectorAll('.categorires'),
notificationBox = document.querySelector('.notificationBox'),
showDashboard = document.querySelector('.showDashboard'),
sidebarDashboards = document.querySelector('.sidebarDashboards'),
dashboardDropdownIcon = document.querySelector('.dashboardDropdownIcon'),   
sidebarDashboardDropdown = document.querySelector('.sidebarDashboardDropdown'),
showText = document.querySelector('.showText'),
sidebarDashboardText = document.querySelector('.sidebarDashboardText'),
PlusMinus = document.querySelector('.PlusMinus'),
dropdownIcon = document.getElementById('dropdownIcon'),
pagesTxt = document.querySelectorAll('.pagesTxt'),
modeSelector = document.querySelectorAll('.modeSelector'),
showLessShowMore = document.querySelector('.showLessShowMore');




// writing functions for expanding and collapsing the sidebar
let expand= false;
let expandSideBar = ()=>{
    sideBarMenu.style.width = '300px';
    keenlogo.style.width = '110px';
    sidebarContent.style.overflowY = 'scroll';
    expand = true;
    pagesTxt.forEach(element => {
        element.style.opacity = '1';
    });
    if (sidebarDashboardStatus == 1) {
        sidebarDashboardDropdown.style.display = 'block';
        dropdownIcon.classList.remove('bx-chevron-down');
        dropdownIcon.classList.add('bx-chevron-up');
        // sidebarDashboardStatus = 1;
    } else {
        return;
    }
    
}
let collapseSideBar = ()=>{
    sideBarMenu.style.width = '60px';
    keenlogo.style.width = '0px';
    sidebarContent.style.overflowY = 'hidden';
    expand = false;
    pagesTxt.forEach(element => {
        element.style.opacity = '0';
    });
    if (sidebarDashboardStatus == 1) {
        sidebarDashboardDropdown.style.display = 'none';
        dropdownIcon.classList.remove('bx-chevron-up');
        dropdownIcon.classList.add('bx-chevron-down');
        // sidebarDashboardStatus = 0;
    } else {
        return;
    }
    
}



// hovering the sidebar to expand
sideBarMenu.addEventListener('mouseover',()=>{
    if ( expand ==false) {
        expandSideBar()
    } else {
        return;
    }
})
sideBarMenu.addEventListener('mouseout',()=>{
    if (expandSite == 0) {
        collapseSideBar()
    } else {
        return;
    }
})






// sidebar and main website expansion on clicking the arrow button
let expandSite = 0;
let expandMainWebsite = ()=>{
    collapseIcon.classList.remove('bx-chevrons-right');
    collapseIcon.classList.add('bx-chevrons-left');
    navbar.style.width = ' calc(100% - 300px)';
    mainWebsite.style.width = 'calc(100% - 300px)';
    mainWebsite.style.left = '300px';
    expandSite = 1
}

let collapseMainWebsite = ()=>{
    collapseIcon.classList.remove('bx-chevrons-left');
    collapseIcon.classList.add('bx-chevrons-right');
    navbar.style.width = ' calc(100% - 60px)';
    mainWebsite.style.width = ' calc(100% - 60px)';
    mainWebsite.style.left = '60px';
    expandSite = 0;
}
collapseIcon.addEventListener('click',()=>{
    if (window.matchMedia("(min-width: 984px)").matches) {
        if (expandSite == 0 ) {
            expandMainWebsite();
            expandSideBar();
        } else {
            collapseMainWebsite();
            collapseSideBar();
            
        }
    } else {
        return;
        
    }
})





// listening to the click event on select campaign so as to give a dropdown
let dropdownStatus = 0;
let selCampaignDropdownCollapse = ()=>{
    selCampaignDropdown.style.visibility = 'hidden';
    dropdownStatus = 0;
    
}
let selCampaignDropdownExpand =  ()=>{
    selCampaignDropdown.style.visibility = 'visible';
    dropdownStatus = 1;
    
}


selCampaign.addEventListener('click',()=>{
    if (dropdownStatus==0) {
        selCampaignDropdownExpand();
    } else {
        selCampaignDropdownCollapse();
    }
})





// listening to the click event on search icon
let searchbox=0;
siteContent.addEventListener('click',()=>{
    if (searchbox == 1) {
        searchBox.style.visibility = 'hidden';
        searchbox = 0;  
    }
})

searchIcon.addEventListener('click',()=>{
    if (searchbox==0) {
        searchBox.style.visibility = 'visible';
        searchBox.style.animation = 'dropdownAnimation 0.35s ease-out 0s 1 normal'
        searchbox = 1;
        
    } 
    else{
        searchBox.style.visibility = 'hidden';
        searchbox = 0 
    }
})






// listening to the click event on activity list icon
let activityState = 0;
let activityPopUp = ()=>{
    activityL.style.animation = 'activityPopUp 0.35s ease-out 0s 1 normal'
    activityL.style.width = "58vw";
    activityL.style.display = "block";
    leftNavbar.style.opacity = '0.9';
    sideBarMenu.style.opacity = '0.9';
    siteContent.style.opacity = '0.9';
    leftNavbar.style.pointerEvents = 'none';
    sideBarMenu.style.pointerEvents = 'none';
    activityState = 1;
}
let activityPopCollapse = ()=>{
    activityL.style.animation = 'activityPopDown 0.35s ease-out 0s 1 normal'
    activityL.style.width = "0vw";
    leftNavbar.style.opacity = '1';
    sideBarMenu.style.opacity = '1';
    siteContent.style.opacity = '1';
    leftNavbar.style.pointerEvents = 'auto';
    sideBarMenu.style.pointerEvents = 'auto';
    activityState = 0;
}
activity.addEventListener('click',activityPopUp);

siteContent.addEventListener('click',()=>{
    if (activityState == 1 ) {
        activityPopCollapse();
        
    } else {
            return;
    }
})

closeActivity.addEventListener('click',()=>{
    activityPopCollapse();
});




// listening to the click event on activity list icon
let messageStatus = 0;
let messageTabOpen = ()=>{
    messagePopup.style.animation = 'messagePopUp 0.35s ease-out 0s 1 normal';
    messagePopup.style.width = '30vw';
    messagePopup.style.display = 'block';
    leftNavbar.style.opacity = '0.9';
    sideBarMenu.style.opacity = '0.9';
    siteContent.style.opacity = '0.9';
    leftNavbar.style.pointerEvents = 'none';
    sideBarMenu.style.pointerEvents = 'none';
    messageStatus = 1;
}
let messageTabClose = ()=>{
    messagePopup.style.animation = 'messagePopDown 0.35s ease-out 0s 1 normal';
    messagePopup.style.width = '0vw';
    // messagePopup.style.display = 'none';
    leftNavbar.style.opacity = '1';
    sideBarMenu.style.opacity = '1';
    siteContent.style.opacity = '1';
    leftNavbar.style.pointerEvents = 'auto';
    sideBarMenu.style.pointerEvents = 'auto';
    messageStatus = 0;
}

message.addEventListener('click',()=>{
    messageTabOpen();
})
closeMessage.addEventListener('click',()=>{
    messageTabClose();
})
siteContent.addEventListener('click',()=>{
    if (messageStatus == 1 ) {
        messageTabClose();
        
    } else {
            return;
    }
})





// listening to the click event on toggle menu
let expandToggleMenu = ()=>{
    toggleSidebar.style.display='none';
    // sideBarMenu.style.display = 'block';
    sidebarContent.style.display = 'block';
    sideBarLogo.style.display = 'flex';
    sideBarMenu.style.width = '300px';
    collapseIcon.classList.remove('bx-chevrons-right');
    collapseIcon.classList.add('bx-chevrons-left');
    expandSideBar();
}
let collapseToggleMenu = ()=>{
    toggleSidebar.style.display='flex';
    // sideBarMenu.style.display = 'none';
    sidebarContent.style.display = 'none';
    sideBarLogo.style.display = 'none';
    collapseIcon.classList.remove('bx-chevrons-left');
    collapseIcon.classList.add('bx-chevrons-right');
    collapseSideBar();
    sideBarMenu.style.width = '0';
}
toggleMenuOpen = 0;
toggleSidebar.addEventListener('click',()=>{
    if (screen.width< 984) {
        if (toggleMenuOpen == 0 ) {
            expandToggleMenu();
            toggleMenuOpen = 1;
        } else { 
            return;
        }
    } else {
        return;
        
    }
})

siteContent.addEventListener('click',()=>{
    if (screen.width< 984) {
        if (toggleMenuOpen == 0 ) {
            return;
        } else { 
            collapseToggleMenu();
            toggleMenuOpen = 0;
        }
    } else {
        return;
        
    }
})

collapseIcon.addEventListener('click',()=>{
    if (window.matchMedia("(max-width: 984px)").matches) {
        if (toggleMenuOpen == 0 ) {
            return;
        } else { 
            collapseToggleMenu();
            toggleMenuOpen = 0;
        }
    } else {
        return;
        
    }
})







// setting the properties same again
window.addEventListener('resize',()=>{
    if (screen.width< 984) {
        mainWebsite.style.width = ' 100%';
        mainWebsite.style.left = '0px';
        toggleSidebar.style.display='flex';
        sideBarMenu.style.width = '0';
        sidebarContent.style.display = 'none';
        sideBarLogo.style.display = 'none';
    } else {
        mainWebsite.style.width = ' calc(100% - 60px)';
        mainWebsite.style.left = '60px';
        toggleSidebar.style.display='none';
        sideBarMenu.style.width = '60px';
        sidebarContent.style.display = 'block';
        sideBarLogo.style.display = 'flex';
    }
})

// listening to the click event for expanding the dashboard dropdown of sidebar
let sidebarDashboardStatus = 0;
sidebarDashboardText.addEventListener('click',()=>{
    if (sidebarDashboardStatus == 0) {
        sidebarDashboardDropdown.style.display = 'block';
        dropdownIcon.classList.remove('bx-chevron-down');
        dropdownIcon.classList.add('bx-chevron-up');
        sidebarDashboardStatus = 1;

    } else {
        sidebarDashboardDropdown.style.display = 'none';
        dropdownIcon.classList.remove('bx-chevron-up');
        dropdownIcon.classList.add('bx-chevron-down');
        sidebarDashboardStatus = 0;
    }
})


// listening to click event on show more and show less tag in dashboard of sidebar

let showStatus = 0;
showDashboard.addEventListener('click',()=>{
    if (showStatus == 0) {
        showLessShowMore.style.display = 'block';
        showText.innerText = 'Show Less';
        PlusMinus.classList.remove('bxs-plus-square');
        PlusMinus.classList.add('bxs-minus-square');
        showStatus = 1;
    } else {
        showLessShowMore.style.display = 'none';
        showText.innerText = 'Show 4 More';
        PlusMinus.classList.remove('bxs-minus-square');
        PlusMinus.classList.add('bxs-plus-square');
        showStatus = 0;
    }
})


