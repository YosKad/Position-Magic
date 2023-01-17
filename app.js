const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    const static = document.getElementById("static");
    const relative = document.getElementById("relative");
    const absolute = document.getElementById("absolute");
    const fixed = document.getElementById("fixed");
    const sticky = document.getElementById("sticky");
    if (static.style.position === "static") {
        static.style.position = "static";
        static.innerHTML = "Static";
        relative.style.position = "relative";
        relative.style.left = "10px";
        relative.style.top = "10px";
        relative.innerHTML = "Relative";
        absolute.style.position = "absolute";
        absolute.style.right = "10px";
        absolute.style.bottom = "10px";
        absolute.innerHTML = "Absolute";
        fixed.style.position = "fixed";
        fixed.style.top = "5px";
        fixed.style.right = "5px";
        fixed.innerHTML = "Fixed";
        sticky.style.position = "sticky";
        sticky.style.top = "10px";
        sticky.innerHTML = "Sticky"
    } else {
        static.style.position = "static";
        static.innerHTML = "Static";
        relative.style.position = "static";
        relative.innerHTML = "Static";
        absolute.style.position = "static";
        absolute.innerHTML = "Static";
        fixed.style.position = "static";
        fixed.innerHTML = "Static";
        sticky.style.position = "static";
        sticky.innerHTML = "Static";
    }
    setTimeout(function(){
        static.innerHTML = "Static stay static";
        relative.innerHTML = "Relative with 10px top and left";
        absolute.innerHTML = "Absolute with 10px bottom and right";
        fixed.innerHTML = "Fixed with 5px top and right";
        sticky.innerHTML = "Sticky with 10px top";
    },2500);
});
