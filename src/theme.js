import { extendTheme } from "@chakra-ui/react"

//config dark/light mode

const theme = extendTheme ({ 
    config: {
        initialColorMode: "system",
        useSystemColorMode: false,
    },
    colors: {
        custom: {
            bgDark: '#4A503D', //#3C486B opcion #1, #343A40 #2
            bgLight: '#e3d7dd', //F0F0F0
            darkHighlight: '#db6858',
            lightHighlight: '#3f9968',
            darkHighlightOpacity: 'rgba(219, 104, 88, 0.7)',
            lightHighlightOpacity: 'rgba(63, 153, 104, 0.7)',
        },
        ...extendTheme().colors,
    }
})

export default theme;