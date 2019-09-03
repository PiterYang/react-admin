import { combineReducers } from "redux";

const initialState = {
    step: 0,
    work_tab: 'tab1',
    work_setting_tab: 'set1',
    work_resource: 1,
    work_id: '',
    work_user_id: '',
    work_config_id: '',
    set1_id: '',
    set2_id: '',
    work_group_id: '',
    is_fresh: false,
    disable_tab2: false,
    work_type: ''
}
function work(state = initialState, action) {
    switch(action.type) {
        case 'SET_STEP':
            return {...state, step: action.text}
        case 'SET_WORK_TAB': 
            return {...state, work_tab: action.text}
        case 'SET_WORK_SETTING_TAB': 
            return {...state, work_setting_tab: action.text}
        case 'SET_WORK_RESOURCE':
            return {...state, work_resource: action.text}
        case 'SET_WORK_ID':
            return {...state, work_id: action.text}
        case 'SET_WORK_USER_ID':
            return {...state, work_user_id: action.text}
        case 'SET_CONFIG_ID':
            return {...state, work_config_id: action.text}
        case 'SET_SET1_ID':
            return {...state, set1_id: action.text}
        case 'SET_SET2_ID':
            return {...state, set2_id: action.text}
        case 'SET_WORK_GROUP_ID':
            return {...state, work_group_id: action.text}
        case 'SET_IS_FRESH':
            return {...state, is_fresh: action.isfresh}
        case 'SET_DISABLED_TAB2':
            return {...state, disable_tab2: action.disable_tab2}
        case 'SET_WORK_TYPE':
            return {...state, work_type: action.text}
        default:
            return state
    }
}

export default combineReducers({
    work
})