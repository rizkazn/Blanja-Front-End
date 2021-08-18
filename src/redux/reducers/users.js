// const initialState = {
//     data: {},
//     isAuth: false,
//     token: null,
// }

// const Users = (state= initialState, action) => {
//     const {type, payload} = action
 
//    swtich (type) 
//         case "SET_AUTH": {
//             return {
//                 ...state,
//                 isAuth: true,
//                 token: payload,
//         }
//     }

//     case "UNSET_AUTH": {
//         return {
//             ...state,
//             isAuth: false,
//             token: null,
//             data: {},
//         }
//     }

//     case "SET_USERS": {
//         return {
//             ...state,
//             data: payload,
//         }
//     }

//     default:
//             return state
//     }
// }

// export default Users