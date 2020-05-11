export const camelCaseToText = (text) => {
    const devidedText = text.replace( /([A-Z])/g, " $1" );
    return devidedText.charAt(0).toUpperCase() + devidedText.slice(1);
}