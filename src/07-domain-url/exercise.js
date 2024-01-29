function parseDomain(url) {
    const domainMatch = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/);

    if (domainMatch) {
        return domainMatch[1];
    } else {
        return ''
    }
}

console.log(parseDomain("http://github.com/carbonfive/raygun")); 
console.log(parseDomain("http://www.zombie-bites.com"));
console.log(parseDomain("https://www.cnet.com"));