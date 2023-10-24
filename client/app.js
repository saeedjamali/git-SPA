//*  What Todo
//1- Create Object contain path and view()
//2- get current location path and set isMatch
//3- find match object and current path to show view in content loaded
//4- use Push State for navigate to target.href
//5- use Pop State for history (back page)
//6- use hasAttribue for disable refresh page 



import { Dashboard } from "./pages/dashboard.js";
import { Products } from "./pages/product.js";
import { Post } from "./pages/post.js";
import { NotFound } from "./pages/not-found.js";

const app = document.querySelector("#app");
document.addEventListener("DOMContentLoaded", () => {

    router();
});


window.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
    router();
})

addEventListener("popstate", router);


function router(params) {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/products", view: Products },
        { path: "/post", view: Post }
    ];
    const potentialRoutes = routes.map((route) => {
        return {
            route,
            isMatch: location.pathname == route.path
        };
    });

    let matchView = potentialRoutes.find((route) => route.isMatch);
    if (!matchView) {
        matchView = {
            route: { path: "/not-found", view: NotFound }, isMatch: true
        }
        console.log("Ey ");
    }

    app.innerHTML = matchView.route.view();
}


function navigateTo(url) {
    history.pushState(null, null, url);
    // router();
}


