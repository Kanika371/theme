alert("Click on Sun/Moon for switching to dark/light mode 😊")

let sun = document.querySelector(".sun");
const root = document.documentElement;
let body = document.getElementsByTagName("body")[0];
let isDark = false;

sun.addEventListener("click",dark);

function dark() {
    console.log("click");
    if(isDark){
   root.style.removeProperty("--color-1");
   root.style.removeProperty("--color-2");
   root.style.removeProperty("--color-3");
   root.style.removeProperty("--color-4");
   root.style.removeProperty("--color-5");
   root.style.removeProperty("--color-6");
   root.style.removeProperty("--color-7");
   root.style.removeProperty("--color-8");
   root.style.removeProperty("--color-9");
   root.style.removeProperty("--color-10");
   root.style.removeProperty("--color-11");
   root.style.removeProperty("--color-12");
   root.style.removeProperty("--color-13");
   root.style.removeProperty("--color-14");
   root.style.removeProperty("--color-15");
   root.style.removeProperty("--color-16");
   body.style.background = "skyblue";
   console.log("light");
    }
    else{
        root.style.setProperty("--color-1","#28282B");
        root.style.setProperty("--color-2","#848884");
        root.style.setProperty("--color-3","#23232B");
        root.style.setProperty("--color-4","#848884");
        root.style.setProperty("--color-5","black");
        root.style.setProperty("--color-6","#848880");
        root.style.setProperty("--color-7","black");
        root.style.setProperty("--color-8","#848880");
        root.style.setProperty("--color-9","#23232B");
        root.style.setProperty("--color-10","lightgrey");
        root.style.setProperty("--color-11","black");
        root.style.setProperty("--color-12","#23232B");
        root.style.setProperty("--color-13","grey");
        root.style.setProperty("--color-14","grey");
        root.style.setProperty("--color-15","black");
        root.style.setProperty("--color-16","white");
     body.style.background = "linear-gradient(to right, #485563, #29323c)";
     console.log("dark");
    }
    isDark = !isDark;
   
}

//1,2,3,4,6,7,8,15,16