window.addEventListener("resize", function () {
    let offcanvas = document.querySelector(".offcanvas-body");
    if (window.innerWidth < 768) {
        offcanvas.style.width = "250px";
    } else {
        offcanvas.style.width = "400px";
    }
});


// why choose us css
// Add a fade-in animation when the section comes into view
document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("why-choose-us");
    const options = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, options);

    observer.observe(section);
  });

//   what client says
// Enable touch swipe for mobile users
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = document.querySelector("#testimonialCarousel");
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000, // Auto-slide every 4 seconds
        pause: "hover"
    });

    // Add swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    myCarousel.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    myCarousel.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            carousel.next();
        } else if (touchEndX - touchStartX > 50) {
            carousel.prev();
        }
    });
});


// contact and chat section 
document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatWindow = document.getElementById("chatWindow");
    const closeChat = document.getElementById("closeChat");
    const sendChat = document.getElementById("sendChat");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.querySelector(".chat-body");

    // Open Chat Window
    chatButton.addEventListener("click", function () {
        chatWindow.style.display = "flex";
    });

    // Close Chat Window
    closeChat.addEventListener("click", function () {
        chatWindow.style.display = "none";
    });

    // Send Chat Message
    sendChat.addEventListener("click", function () {
        sendMessage();
    });

    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let message = chatInput.value.trim();
        if (message !== "") {
            let newMessage = document.createElement("p");
            newMessage.innerHTML = `<strong>You:</strong> ${message}`;
            chatBody.appendChild(newMessage);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }
});

// Register the GSAP ScrollTrigger plugin aos code
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});


// floting icon

function goToNavbar() {
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
}
