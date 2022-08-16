module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')",
            }),
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                "spin-slow": "spin 2s linear infinite"
            }
        },
    },
    variants: {

    },
    plugins: [],
}