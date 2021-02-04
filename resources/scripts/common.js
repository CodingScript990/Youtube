window.addEventListener('DOMContentLoaded', () => {
    SideMenu.preLoad();

    Router.getVideos();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        SideMenu.postLoad();
    }, 100);
});