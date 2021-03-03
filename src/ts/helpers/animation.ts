// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// const navbar = document.querySelector(".navigation") as HTMLElement;

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//     console.log("working!");
//   } else {
//     navbar.classList.remove("sticky");
//     console.log("removing!");
//   }
// }

document.querySelector(".navigation__mobile")!.addEventListener("click", () => {
    
    console.log("Hello");

    let navigation__background = document.querySelector(".navigation") as HTMLElement;
    let navigation__contents = document.querySelector(".navigation__list") as HTMLDataListElement;
    let menu = document.querySelector(".navigation__mobile") as HTMLElement;
    let menu_icon = document.querySelector(".navigation__mobile svg") as HTMLElement;
    
    if (menu_icon.classList.contains("navigation__mobile__menu")) {
        // menu.innerHTML = "";
        menu.innerHTML = `
        <svg class="navigation__mobile__cancel">
            <use xlink:href="#cancel"></use>
        </svg>
        `;
        navigation__background.style.height = "25rem";
        navigation__contents.style.display = "flex";
    } else {
        // menu.innerHTML = "";
        menu.innerHTML = `
        <svg class="navigation__mobile__menu">
            <use xlink:href="#menu"></use>
        </svg>
        `
        navigation__background.style.height = "6rem";
        navigation__contents.style.display = "none";
    }
})

