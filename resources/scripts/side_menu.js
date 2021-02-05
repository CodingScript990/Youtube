class SideMenu {
    static preLoad() {
        let main = ShowVideo.getMainElement();
        let header = window.document.body.querySelector(':scope > header');
        let image = header.querySelector(':scope > .logo > .image');
        image.addEventListener('click', () => {
            ShowVideo.getVideos(main.innerHTML);
        });
    }

    static postLoad() {
        let header = window.document.body.querySelector(':scope > header');
        let aside = window.document.body.querySelector(':scope > aside');
        let asideSpacer = aside.querySelector(':scope > div');
        let main = window.document.body.querySelector(':scope > main');
        asideSpacer.style.height = `${header.offsetHeight}px`;
        main.style.top = `${header.offsetHeight}px`;

        SimpleScrollbar.initEl(aside);

        window.document.body.classList.remove('preload');
    }
}