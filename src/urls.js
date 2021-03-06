export const appUrls = {
    ROOT: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    ACTIVATE: '/activate',
    REGISTER_SUCCESS: '/register-success',
    USER_ID: '/user/:id',
    AREA_ID: '/area/:id',
    AREA: '/area/',
    USER: '/user/',
    SEARCH_AREAS: '/search-areas',
    SEARCH_USERS: '/search-users',
    EDIT_PROFILE: '/editprofile',
    GROUP_ID: '/group/:id',
    GROUP: '/group/',
    EVENT: '/event/',
    EVENT_ID: '/event/:id',
}
export const requestUrls = {
    CHECK_TOKEN: '/checkToken',
    LOGIN: '/api/authenticate',
    LOGOUT: '/api/logout',
    REGISTER: '/api/register',
    CURRENT_USER: '/api/getCurrentUser',
    GET_USER_BY_USERNAME: '/api/getUserByLogin',
    EDIT_USER: '/api/editUser',
    SEARCH_USER: '/api/userSearch/',
    SEARCH_ARENAS: '/api/skiArenaSearch',
    GET_AREA_BY_ID: '/api/getArenaById',
    GET_GROUPS: '/api/groups',
    GET_GROUP_BY_ID: '/api/group-by-id/',
    SEARCH_GROUP: '/api/groups/search/',
    GET_USER_GROUPS: '/api/groups-of-user',
    DELETE_GROUP: '/api/delete-group',
    ADD_MEMBER: '/api/groups-add-member',
    DELETE_MEMBER: '/api/delete-user',
    ADD_EVENT: '/api/add_event',
    GET_EVENT_ID: '/api/getEventById',
    ADD_MEMBER_EVENT: '/api/addMemberToEvent',
    DELETE_EVENT: '/api/delete_event',
    DELETE_FROM_EVENT: '/api/removeMemberFromEvent',
}
