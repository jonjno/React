
export const reducer=(state,action)=>{
        const newPeople = [...state.people,action.payload]
        if( action.type==="ADD ITEM"){
           return{
            ...state,
            people:newPeople,
            isModel:true,
            ModalContent:"Hai Helo"
          }
        }if(action.type === "NO VALUE" ){
          return {
            ...state,
            isModel:true,
            ModalContent:"Add Value"
          } 
        }if(action.type === "CLOSE MODAL" ){
          return {
            ...state,
            isModel:false,   
          } 
        }if(action.type === "REMOVE ITEM" ){
           const newP = state.people.filter(
            (person)=>person.id!== action.payload);
          return {
            ...state,
               people:newP
          } 
        }
          throw new Error("An error found")
        
        
       }