export const getQueryParams = ({ url }) => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let params = {};
    let match;
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params;
}