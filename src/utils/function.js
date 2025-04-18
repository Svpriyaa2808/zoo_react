export const getIconUrl = (icon) => {
    return new URL(`../icons/${icon}`,import.meta.url).href;
}

export const getImageUrl = (image) => {
    return new URL(`../assets/${image}`,import.meta.url).href;
}