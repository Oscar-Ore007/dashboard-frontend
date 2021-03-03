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
                id: 2,
                text: "we will make an update"
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;