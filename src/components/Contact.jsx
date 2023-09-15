import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const GetContacts = async () => {
  const resJson = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await resJson.json();
  console.log(res);
  return res;
}

export const GetContact = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const contact = await res.json();
  return contact;
}

const Contact = () => {
  const {contacts} = useLoaderData();
  console.log(contacts);
  console.log(useLoaderData());
  return (
    <div>
      Contact page 
      {
        contacts.map(item => {
          return <h1> {item.name} </h1>
        })
      }
    </div>
  )
}

export default Contact