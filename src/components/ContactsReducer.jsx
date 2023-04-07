export const conReducer = (state,action) =>{
    switch(action.type){
        case 'name':
            return{...state,name:action.perName}
        case 'lastName':
                return{...state,lastName:action.perLastName}
        case 'gmail':
            return{...state,gmail:action.perGmail}
        case 'information':
                return{...state,information:action.perInfo}
    }
}
export const Contact_Values ={
    name:'',
    lastName:'',
    gmail:'',
    information:''
}