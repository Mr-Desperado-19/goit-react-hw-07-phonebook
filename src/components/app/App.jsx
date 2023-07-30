import { ContactList } from '../contacts/ContactList';
import { ContactForm } from '../contactForm/ContactForm';
import { Filter } from '../filter/Filter';
import { StyledLayout } from '../layout/Layout.styled';
import {
  StyledPhonebookWrap,
  StyledContactsTitle,
  StyledTitle,
  StyledTitleWrap,
} from './App.styled';
import { FaBook } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';

export const App = () => {
  return (
    <StyledLayout>
      <StyledPhonebookWrap>
        <StyledTitleWrap>
          <StyledTitle>Phonebook</StyledTitle>
          <FaBook />
        </StyledTitleWrap>

        <ContactForm />
        <StyledTitleWrap>
          <StyledContactsTitle>Contacts</StyledContactsTitle>
          <IoMdContacts />
        </StyledTitleWrap>

        <Filter />
        <ContactList />
      </StyledPhonebookWrap>
    </StyledLayout>
  );
};
