import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledAppContainer } from './App.styled';

export const App = () => {
  return (
    <StyledAppContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledAppContainer>
  );
};
