import { reducerCases } from "./Constants";


export const initialState = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "6MoIQeKXq9hp5FHtsM5gWp",
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case reducerCases.SET_PLAYLISTS: //for sidebar
            return {
                ...state,
                playlists: action.playlists,
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SET_PLAYLIST: //for body
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        default:
            return state;
    }
}

export default reducer;