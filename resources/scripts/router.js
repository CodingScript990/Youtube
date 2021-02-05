class ShowVideo {
    static getMainElement() {
        return document.body.querySelector(':scope > main');
    }

    static getVideos(){
        let main = ShowVideo.getMainElement();
        Ajax.request('GET', 'api/get-videos.json');
        (response) => {
            let json = JSON.parse(response);
            let videos = json['videos'];
            
        }
    }
}