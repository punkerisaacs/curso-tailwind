module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
              'xs': {max: '768px'}
            },
            boxShadow: {
              headers3D: "0px 1px 0px #393D3F, 1px 2px #393D3F, 2px 3px 0px #393D3F, 3px 4px 0px #393D3F",
              box: "0px 0px 1px rgba(0,0,0, 0.3), 0px 3px 7px rgba(0,0,0, 0.3), 0px 1px white inset, 0px -3px rgba(0,0,0, 0.3) inset"
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
                'text-banner': 'textBanner 10s linear',
                "show-card-icon": 'showCardIcon 300ms linear',
                "show-card-category": 'showCardCategory 400ms linear',
                "show-card-description": 'showCardDescription 400ms linear'
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
                },
                showCardIcon: {
                    'from': { transform: 'translateY(-200%)'},
                    'to':{ transform: 'translateY(0%)'},
                },
                showCardCategory: {
                    'from': { transform: 'translateY(-300%)'},
                    'to':{ transform: 'translateY(0%)'},
                },
                showCardDescription: {
                    'from': { transform: 'translateX(-300%)'},
                    'to':{ transform: 'translateX(0%)'},
                },
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        translate: ['responsive', 'hover', 'group-hover'],
    },
    plugins: [],
}