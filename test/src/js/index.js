$(document).ready(function () {

    function loadPageFromHash() {
        const page = location.hash ? location.hash.substring(2) : "home";
        $("main").load(`pages/${page}.html`);
        localStorage.setItem("lastPage", `pages/${page}.html`);
    }

    loadPageFromHash();

    $(window).on("hashchange", loadPageFromHash);

    $(document).on("click", "a[href='./index.html']", function (e) {
        e.preventDefault();
        loadPage("home");
    });

    $(document).on("click", ".home", function (e) {
        e.preventDefault();
        location.hash = "/home";
    });

    
    $(document).on("click", ".test", function (e) {
        e.preventDefault();
        location.hash = "/test";
    });

})