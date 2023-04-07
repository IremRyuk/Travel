export const reudcer = (state,action) =>{
    switch(action.type){
case 'search':
    return{...state,search:action.searched}
case 'places':
    return{...state,place:action.places}
case 'min':
    return{...state,minprice:action.minprice}
case 'max':
    return{...state,maxprice:action.maxprice}
default:
    return{state}
    }
} 
export const Initial_Values = {
// filter boxes
 search:'',
 place:'',
// for  price filter
 minprice:0,
 maxprice:10000,
}