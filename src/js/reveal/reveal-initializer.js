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
        presentable.toc({
            framework: 'revealjs'
        });
    });

    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();

})(window);