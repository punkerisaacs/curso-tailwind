module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
              'xs': {max: '768px'}
            },
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')",
                banner: "url('../img/bakbaner.png')"
            }),
            backgroundPosition: {
              'banner-position': "-400px -400px"
            },
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                "spin-slow": "spin 2s linear infinite",
                'bg-banner': 'backBanner 10s linear',
                'text-banner': 'textBanner 10s linear'
            },
            keyframes: {
                backBanner: {
                    '0%': { 'background-position': '0px 0px'},
                    '100%':{'background-position': '-400px -400px'},
                },
                textBanner: {
                    '0%': { transform: 'translate(-600%) scale(5,5)', opacity: 1},
                    '50%': { transform: 'translate(600%) scale(5,5)', opacity: 1},
                    '75%': { transform: 'translate(-600%) scale(5,5)', textShadow: 'none', color: 'transparent', opacity: 0},
                    '100%':{ transform: 'translate(0%) scale(1,1)', textShadow: '2px 2px 1px black', color: 'white', opacity: 1},
                }
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
    },
    plugins: [],
}