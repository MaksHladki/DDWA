(function (window) {

    if (!window.Reveal) {
        throw new Error('Reveal.js not found!');
    }

    if (!window.hljs) {
        throw new Error('Highlight.js not found!');
    }

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
            framework: 'revealjs'
        });
    });

    hljs.initHighlightingOnLoad();

})(window);