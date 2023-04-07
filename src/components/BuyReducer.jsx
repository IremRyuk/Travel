export const BuyReducer = (state,action) =>{
    switch (action.type) {
case 'bookName':
    return{...state,bookName:action.bookNameInfo}

case 'bookGmail':
        return{...state,bookGmail:action.bookGmailInfo}

case 'bookNumber':
    return{...state,bookNumber:action.bookNumberInfo}

case 'bookDate':
    return{...state,bookDate:action.bookDateInfo}

default:
return {state}
    }
}

export const Buy_Initial_Values = {
    bookName:'',
    bookGmail:'',
    bookNumber:'',
    bookDate:''
}