"use strict";

// selecting element for adding some design functionality here
/////////////////////////////////////////////////
//                                             //
//    Dom Element decleration  section         //
//                                             //
/////////////////////////////////////////////////

//search section dom Element  (1)
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("search");
const clearSearchInput = document.querySelector(".search__clear");

//mobile-nav-toggle dom Element  (2)
const mobileNavEl = document.querySelector(".mobile-nav-content");
const openMobileNav = document.querySelector(".open-nav-btn");
const closedMobileNav = document.querySelector(".mb-nav-closed");

// dropdown mobile nav dom Element  (3)
const dropDownEl = document.querySelectorAll(".dropdown-ele");

// nav sub header2 dom Eleemnt  (4)
const nabSubHeader2 = document.querySelector(".nav-sub-header2");
const mobileNavBottom = document.querySelector(".mobile-nav-bottom");
const nabLinks = document.querySelectorAll(".nav-ele-link");
const nabLinksMb = document.querySelectorAll(
  ".mobile-nav-bottom .nav-ele-link"
);

/////////////////////////////////////////////////
//                                             //
//       Implementation section                //
//                                             //
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//                 (1)                         //
//-----search box feature implementation-------//
searchContainer.addEventListener("click", function (e) {
  searchContainer.classList.add("search-container--active");
  searchInput.focus();

  if (e.target.closest(".search__clear")) {
    searchInput.value = "";
  }
  if (searchInput.value.length !== 0) {
    document.querySelector(".search__clear").style.display = "block";
  }
  document.addEventListener("click", searchDeactive);
});

//removing input text when clearsearch btn is clicked
const searchDeactive = function (e) {
  if (e.target.closest(".search-container")) return;
  else {
    searchContainer.classList.remove("search-container--active");
    document.querySelector(".search__clear").style.display = "none";
    document.removeEventListener("click", searchDeactive);
  }
};

document.addEventListener("click", searchDeactive);

searchInput.addEventListener("input", function () {
  if (searchInput.value.length !== 0) {
    document.querySelector(".search__clear").style.display = "block";
  } else {
    document.querySelector(".search__clear").style.display = "none";
  }
});

/////////////////////////////////////////////////
//                 (2)                         //
//------mobile nav toggle implementation-------//
openMobileNav.addEventListener("click", function () {
  mobileNavEl.classList.add("mobile-nav-open");
});

closedMobileNav.addEventListener("click", function () {
  mobileNavEl.classList.remove("mobile-nav-open");

  //removing all dropdown--active when nav is closed
  dropDownEl.forEach((el) => {
    el.classList.remove("dropdown--active");
  });
});

//////////////////////////////////////////////////
//                 (3)                          //
//-------mobile nav dropdown implementation-----//
dropDownEl.forEach((el) => {
  el.addEventListener("click", function (e) {
    if (e.target.closest(".drop-content")) return;
    el.classList.toggle("dropdown--active");
  });
});

//////////////////////////////////////////////////
//                    (4)                       //
//------ nav active implementaion  -------------//

const clearPreviousSelectedLink = function () {
  nabLinks.forEach((nablink) => {
    nablink.classList.remove("nav-ele-link--active");
  });
};

nabSubHeader2.addEventListener("click", function (e) {
  if (e.target.closest(".nav-ele-link")) {
    clearPreviousSelectedLink();

    let clicked = e.target.closest(".nav-ele-link");
    let linkUrl = clicked.getAttribute("href");
    //selscting mobile nav
    let mobileNavIcon = document.querySelectorAll(
      `.nav-ele-link[href="${linkUrl}"]`
    );
    mobileNavIcon[1]?.classList.add("nav-ele-link--active");
    clicked.classList.add("nav-ele-link--active");
  }
});

mobileNavBottom.addEventListener("click", function (e) {
  if (e.target.closest(".nav-ele-link")) {
    clearPreviousSelectedLink();
    let clicked = e.target.closest(".nav-ele-link");
    let linkUrl = clicked.getAttribute("href");

    //selscting mobile nav
    let desltopNavIcon = document.querySelectorAll(
      `.nav-ele-link[href="${linkUrl}"]`
    );
    desltopNavIcon[0].classList.add("nav-ele-link--active");
    clicked.classList.add("nav-ele-link--active");
  }
});
