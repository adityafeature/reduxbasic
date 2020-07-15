// these are for actions
// below is a function it will return object
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};
/*we are adding argument 5 here it will 5 then +5 then 10,15 ...
export const increment  = num => {
return {
    type: 'INCREMENT',
    //we will use piece of data most of guys use payload here
    payload: nr
};
};*/ 
//when we disptach it will go into counter.js and will check what typ of action type if it is increment or decrement
//NOW DECREMENT
export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
