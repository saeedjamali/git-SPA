function router(params) {
  const routes = [
    { path: "/", view: () => console.log("Dashboard Page") },
    { path: "/products", view: () => console.log("Products Page") },
    { path: "/post", view: () => console.log("Post Page") },
  ];

  const potentialroute = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname == route.path,
    };
  });

  const match = potentialroute.find((route) => route.isMatch);
  if (!match) {
    match = { path: "/not-found", view: () => console.log("Not Found Page") };
  }
  console.log(match.route.view());
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
