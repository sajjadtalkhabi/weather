const urlGenerator = (urls) => {
    return function (routeAddress, parameters) {
        let urlPath = urls[routeAddress].split("/");
        let newPath = [];
        for (const iterator of urlPath) {
            if (iterator.startsWith(":")) {
                if (iterator.endsWith("?")) {
                    if (Object.prototype.hasOwnProperty.call(parameters, iterator.slice(1, -1))) {
                        newPath.push(parameters[iterator.slice(1, -1)]);
                    }
                } else {
                    newPath.push(parameters[iterator.slice(1)]);
                }
            } else {
                newPath.push(iterator);
            }
        }
        return '/' + newPath.join("/");
    }
};

export {
    urlGenerator
}
