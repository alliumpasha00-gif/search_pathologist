// Tiny stand-in for the site's React behaviour so the static preview feels right.
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem("theme") || localStorage.getItem("site-theme"); if (t) root.dataset.theme = t; } catch (e) {}
  document.querySelectorAll("button.nav-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var ul = document.querySelector(".nav-links"); if (!ul) return;
      var open = ul.classList.toggle("open"); b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.querySelectorAll("button.icon-btn").forEach(function (b) {
    var label = (b.getAttribute("aria-label") || "").toLowerCase();
    if (label.indexOf("mode") > -1) b.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark"; root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
    if (label.indexOf("search") > -1) b.addEventListener("click", function () {
      var p = document.querySelector(".search-popover"); if (p) p.style.display = p.style.display === "block" ? "none" : "block";
    });
  });
  document.querySelectorAll("form").forEach(function (f) {
    f.addEventListener("submit", function (e) { e.preventDefault(); alert("This is a static preview — forms and search work only on the real running site."); });
  });
});
