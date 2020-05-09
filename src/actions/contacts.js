import {
  GetContact,
  EditContact,
  AddContact,
  DeleteContact,
} from "../constant";
export const mapStateToProps = (state) => {
  return { Contacts: state.Contacts };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getContactList: () => {
      dispatch({ type: GetContact });
    },

    addNewContact: (data) => {
      dispatch({ type: AddContact, data });
    },

    deleteContact: (id) => {
      dispatch({ type: DeleteContact, id });
    },

    saveEditContact: (data) => {
      dispatch({ type: EditContact, data });
    },
  };
};
