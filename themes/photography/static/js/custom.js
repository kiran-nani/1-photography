$(document).ready(function() {
    $(function() {
        $('#FFLD055').vegas({
            slides: [
                { src: 'images/slide-img1.jpg' },
                { src: 'images/slide-img2.jpg' },
                { src: 'images/slide-img3.jpg' }
            ],
            timer: false,
            transition: ['zoomIn', ],
            animation: ['kenburns']
        });
    });
    new WOW({ mobile: false }).init();
});
