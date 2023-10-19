import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initilaValue = {
  contactList: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initilaValue,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactList.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contactList;
