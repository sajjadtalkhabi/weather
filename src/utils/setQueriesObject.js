import createFilterObject from "./createFilterObject";
export const SetQueriesObject = ({ filters, sorts, pagination }) => {

    let Query = {};

    if (typeof filters === 'object') {
        filters = createFilterObject(filters);
        Query = { ...Query, ...filters };
    }

    if (typeof sorts === 'string') {
        sorts = sorts ? { 'sorts[]': sorts } : {};
        Query = { ...Query, ...sorts };
    }

    if (typeof pagination === 'object') {
        pagination = {
            per_page: pagination.itemsPerPage,
            page: pagination.page
        };
        Query = { ...Query, ...pagination };
    }
    return Query;
};
