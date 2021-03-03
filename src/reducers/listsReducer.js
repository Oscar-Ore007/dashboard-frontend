import { CONSTANTS } from "../actions";

let listID = 2;

const initialState = [
    {
        title: "Last Entry",
        id: 0, 
        cards: [
            {
                id: 0,
                text: "we created a state list"
            },
            
            {
                id: 1,
                text: "Hello"
            }
        ]
    },
    {
        title: "This new card",
        id: 1, 
        cards: [
            {
                id: 0,
                text: "we will create our first card"
            },
            
            {
                id: 1,
                text: "Goodbye"
            },
            {
                id: 3,
                text: "we will make an update"
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList];
        default:
            return state;
    }
};

export default listsReducer;