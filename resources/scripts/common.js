window.addEventListener('DOMContentLoaded', () => {
    SideMenu.preLoad();

    ShowVideo.getVideos();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        SideMenu.postLoad();
    }, 100);
});