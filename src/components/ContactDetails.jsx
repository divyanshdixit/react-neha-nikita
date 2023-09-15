import React from 'react'
import { GetContact } from './Contact';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({params}) => {
    console.log(params)
    const contact = await GetContact(params.contactId);
    console.log(contact);
    return {contact};
}

const ContactDetails = () => {
    const {contact} = useLoaderData();
  return (
    <div>
        ContactDetails
        <h1> {contact.title}</h1>
    </div>
  )
}

export default ContactDetails