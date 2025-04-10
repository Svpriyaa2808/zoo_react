export const getIconUrl = (icon) => {
    return new URL(`../icons/${icon}`,import.meta.url).href;
}