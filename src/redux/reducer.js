
const initialState = {
    showModal:false,
    place:'',
    area:'',
    country:'',
    toggle:true,
    showLoginHome:false,
    CloseModal:true
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SHOW_MODAL':
            return {
                ...state,
                showModal:!state.showModal,
                toggle:action.payload.toggle,
                showLoginHome:false

            }
        case 'CLOSE_MODAL':
            return {
                // ...state,
                showModal:false,
                // toggle:action.payload.toggle,
                // showLoginHome:false

            }
        case 'DETECT_PLACE':
            return {
                area:action.payload.area,
                place : action.payload.city,
                country:action.payload.country,
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                toggle:action.payload.toggle
            }
        case 'SHOW_LOGIN_HOME':
            return {
                ...state,
                showLoginHome:!state.showLoginHome,
                showModal:false
            }
        default:return state
    }
}

export default reducer