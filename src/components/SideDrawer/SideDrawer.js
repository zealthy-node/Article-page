import React from 'react';

import './SideDrawer.css';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

    return (
      <nav className={drawerClasses}>
      <h1>CATEGORIES</h1>
      <div className="category">
        <ul>
          <li>
              <button class="dropdown-btn">Skin 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <ul>
               <li> <a href="#">Acne</a></li>
                <li><a href="#">Oily Skin</a></li>
                <li><a href="#">Dry Skin</a></li>
              </ul>
              </div>
          </li>
           <li><a href="#hairsub">Hair</a></li>
           <li><a href="/">Menstrual Health and Menopause</a></li>
           <li><a href="/">Sexual Wellness</a></li>
           <li><a href="/">Infertility, Contraception and Birth Control</a></li>
           <li><a href="/">Pregnency and Parenting</a></li>
           <li><a href="/">Kids Health</a></li>
        </ul>
        </div>
      </nav>
    );
};
export default sideDrawer;
