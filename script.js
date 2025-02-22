window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let controller = document.getElementById('controller');
    let vibration = Math.sin(scrollY * 0.01) * 30; // Creates a vibrating effect
    controller.style.transform = `translate(-50%, -50%) rotate(${vibration}deg)`;
});

document.getElementById("explore").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/MY%20PC/Desktop/New%20folder/img/project/Project%20No.1/product.html";
});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let image = document.getElementById("imgcon");
    
    if (scrollY > 400) {
        image.style.transform = "translateX(0) translateY(-50%)";
    } else {
        image.style.transform = "translateX(100vw) translateY(-50%)";
    }
    
    if (scrollY > 1200) {
        image.style.transform = "translateX(-100vw) translateY(-50%)";
    }
});

document.getElementById("img1").addEventListener("click", function() {
    window.location.href = "https://example.com"; // Change to desired URL
})
;document.getElementById("img2").addEventListener("click", function() {
    window.location.href = "https://example.com"; // Change to desired URL
})
;document.getElementById("img3").addEventListener("click", function() {
    window.location.href = "https://example.com"; // Change to desired URL
})
;document.getElementById("img4").addEventListener("click", function() {
    window.location.href = "https://example.com"; // Change to desired URL
});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let textFl = document.getElementById("text-fl");
    
    if (scrollY > 800) {
        textFl.style.transform = "translateX(0) translateY(-50%)";
    } else {
        textFl.style.transform = "translateX(100vw) translateY(-50%)";
    }
    if (scrollY > 1800) {
        textFl.style.transform = "translateX(-100vw) translateY(-50%)";
    }
});

window.addEventListener("scroll", function() {
    let scrollX = window.scrollY;
    let imgFl = document.getElementById("img-fl");

    if (scrollX > 800) {
        imgFl.style.transform = "translateY(-50%) translateX(0)";
    } else {
        imgFl.style.transform = "translateX(100vw) translateY(-50%)";
    }
    if (scrollX > 1800) {
        imgFl.style.transform = "translateX(-100vw) translateY(-50%)";
    }
});

document.getElementById("btn").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/MY%20PC/Desktop/New%20folder/img/project/Project%20No.1/product.html";
});