
  const prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
  };
