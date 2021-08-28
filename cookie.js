const set = (cookieName, cookieValue, {
    maxAge = 3600,
    domain,
    path,
    secure
} = {}) => {
    let cookieText = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}`;
    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; ${secure}`;
    }
    document.cookie = cookieText;
};

const get = (cookieName) => {
    //return cookieValue
    cookieName = encodeURIComponent(cookieName);
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [n, v] = cookie.split('=');
        if (n === cookieName) {
            return v;
        }
    }
    return;
};

const remove = (cookieName, {
    domain,
    path
} = {}) => {
    set(cookieName, '', {
        domain,
        path,
        maxAge: -1
    });
};
export {
    set,
    get,
    remove
};