const initialState = [
  {
    id: 0,
    name: "Raman Sharma",
    email: "raman@gmail.com",
    number: 25252525,
  },
  {
    id: 1,
    name: " name",
    email: "name@gmail.com",
    number: 142536142,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactReducer;