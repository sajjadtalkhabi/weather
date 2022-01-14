const createFilterObject = filters => {
    let filterObject = {};
    for (const key in filters) {
        if (Object.hasOwnProperty.call(filters, key)) {
            if (filters[key] && typeof filters[key]["type"] !== "undefined") {
                let filterValue = window[filters[key]["type"]](filters[key]);
                if (filterValue) {
                    filterObject[key] = filterValue;
                }
            } else if (typeof filters[key] !== 'object') {
                filterObject[key] = filters[key];
            }
        }
    }
    filters = {};
    for (var filter in filterObject) {
        if (Object.hasOwnProperty.call(filterObject, filter)) {
            filters[`${filter}`] = filterObject[filter];
        }
    }
    return filters;
};
window["like"] = function (filter) {
    var value = null;
    if (filter.val !== null) {
        value = `${filter.val}`;
    }
    return value;
};

export default createFilterObject;
