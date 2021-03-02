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
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;