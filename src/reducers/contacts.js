import {
  GetContact,
  EditContact,
  AddContact,
  DeleteContact,
} from "../constant";

const initialstate = {
  Contacts: [
    {
      id: 1,
      Name: "Inayat",
      Email: "Inayat@gmail.com",
      CreatedDate: "2020-5-4 5:0:21",
      ModifiedDate: "2020-5-4 7:0:21",
    },
    {
      id: 2,
      Name: "Ali",
      Email: "Ali@gmail.com",
      CreatedDate: "2020-5-4 4:0:21",
      ModifiedDate: "2020-5-4 8:0:21",
    },
  ],
};
const Contacts = (state = initialstate, action) => {
  switch (action.type) {
    case GetContact:
      return {
        ...state,
      };
    case AddContact:
      return {
        ...state,
        Contacts: state.Contacts.concat(action.data),
      };
    case DeleteContact:
      return {
        ...state,
        Contacts: state.Contacts.filter((item) => item.id !== action.id),
      };
    case EditContact:
      return {
        ...state,
        Contacts: state.Contacts.map((content, i) =>
          content.id == action.data.id
            ? {
                ...content,
                Name: action.data.Name,
                Email: action.data.Email,
                ModifiedDate: action.data.ModifiedDate,
              }
            : content
        ),
      };
    default:
      return state;
  }
};

export default Contacts;
