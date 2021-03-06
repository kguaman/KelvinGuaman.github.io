let frontpage  = document.getElementById("front");
// getBoundingClientRect() -> return the element width,hight relative to the srenn

console.log(frontpage.getBoundingClientRect());

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -150;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
  // selectect all classes that contain hidden
    let sectionList = document.querySelectorAll('.hidden');
    console.log(sectionList);
    sectionList.forEach(function(section) {
      // for each node we chec if isVisible is true if it is we remove hiddden
        if(isVisible(section)) {
            section.classList.remove('hidden');

        };
    });

}

// sacnDoumnet is exectued everytime there is a scr;;
document.addEventListener("scroll",  _.throttle(scanDocument, 500));
