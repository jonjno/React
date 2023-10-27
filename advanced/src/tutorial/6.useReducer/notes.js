// used when we have more complicated setup
// for to do list ,usestate is enough but if app is more complicated
// index js will be main entry it will load in app.js until we chnage manually 
// useReducer,
// when we invoke useRedicer function we get 2 values one is state and other is dispatch function
// in useReducer fucntion,first we pass is reducer function
// reducer takes old state,perform action and give new state
// and the reducer function starts execute once we call dispatch or dispatch action
// intial state is default state
// if we write dispatch then return statement should be there in reducer new sttae should be return 
// otherwise all other return sttaement in the main function will not work.
// dispatch(it is an action object and one property is type )
