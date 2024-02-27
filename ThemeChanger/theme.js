let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

function themeChanger(event) {
   
     if(event.key==="Enter")  { 
          let input=themeUserInputEl.value;
        if (input==="Light"){
            bgContainerEl.style.backgroundImage="url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
            headingEl.style.color="#014d40";
        }else if(input==="Dark"){
            bgContainerEl.style.backgroundImage="url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";
            headingEl.style.color="white";
        }else{
            alert("enter valid theme");
        }
     }
}
themeUserInputEl.addEventListener("keydown", themeChanger );