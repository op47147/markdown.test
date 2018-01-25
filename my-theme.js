require('gitbook', function(gitbook) {
    var FONT_FAMILIES = [
        {
            config: 'sans',
            text: 'Sans',
            id: 0
        },
        {
            config: 'serif',
            text: 'serif',
            id: 1
        }
    ];
    // Default themes
    var THEMES = [
        {
            config: 'white',
            text: 'White',
            id: 0
        },
        {
            config: 'sepia',
            text: 'Sepia',
            id: 1
        },
        {
            config: 'night',
            text: 'Night',
            id: 2
        }
    ];

    gitbook.events.on('start', function(e, config) {
        // Read configuration
        var themeConfig = config['my-theme'],
            defaultFont = themeConfig['font-family'];

        // Initialize new font families
        gitbook.fontsettings.setFamilies(FONT_FAMILIES);
        // Set to configured font-family
        gitbook.fontsettings.setFamily(defaultFont);
        // Set
        gitbook.fontsettings.setTheme('night');
    });
});
