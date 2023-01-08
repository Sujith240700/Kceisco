AOS.init({ once: true });

function active(id) {
  console.log(id);
  document.getElementById("Homenav").classList.remove("active");
  document.getElementById("Aboutnav").classList.remove("active");
  document.getElementById("Schedulenav").classList.remove("active");
  document.getElementById("MechandAutonav").classList.remove("active");
  document.getElementById("CsandItnav").classList.remove("active");
  document.getElementById("Civilnav").classList.remove("active");
  document.getElementById("Einav").classList.remove("active");
  document.getElementById("Ecnav").classList.remove("active");
  document.getElementById("Paymentnav").classList.remove("active");
  document.getElementById("Publicationnav").classList.remove("active");
  document.getElementById("Commiteenav").classList.remove("active");
  document.getElementById("Contactnav").classList.remove("active");
  document.getElementById(id).classList.add("active");
}

function toogle() {
  var present = document.getElementById("toogler").classList[1];
  if (present === "fa-bars") {
    document.getElementById("toogler").classList.remove("fa-bars");
    document.getElementById("toogler").classList.add("fa-close");
  } else {
    document.getElementById("toogler").classList.remove("fa-close");
    document.getElementById("toogler").classList.add("fa-bars");
  }
}

function openNav(id) {
  document.getElementById(id).style.display = "block";
}

function closeNav(id) {
  document.getElementById(id).style.display = "none";
}
