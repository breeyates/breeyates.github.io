import "@fontsource/inter"; 
import "@fontsource/anton"; 
import { colors } from "../../../styles";

export const typographySx: any = (variant: any, color: string, sx: any, userSelect?: boolean) => ({
    ...variant,
    color,
    ...sx,
    userSelect: userSelect ? 'text' : 'none',
})

export const typographyVariants: any = {
    inter: {
        fontFamily: 'inter',
        userSelect: 'none',
    },
    anton: {
        fontFamily: 'anton',
        userSelect: 'none',
    },
}

export const chooseTypographyColor: any = (color: string): string => {
    switch(color) {
        case 'secondary':
          return colors.white;
        case 'yellow':
            return colors.main;
        default:
            return colors.black;
    }
}