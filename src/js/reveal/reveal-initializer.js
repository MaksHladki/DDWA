;(function () {

    if(!window.Reveal)
        throw Error('Reveal.js not found!');

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        slideNumber: true,
        transition: 'slide'
    });

    Reveal.addEventListener('ready', function (event) {
        //hljs.initHighlightingOnLoad(); //There is a bug, the method doesn't call sometimes
        presentable.toc({
            framework: "revealjs"
        });
    });

    hljs.initHighlightingOnLoad();

})();