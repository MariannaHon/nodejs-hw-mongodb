import { ContactsCollection } from '../db/models/Contact.js';

export const getAllContacts = async () => {
    const contacts = await ContactsCollection.find();
    return contacts;
};

export const getContactById = async (contactId) => {
    try {
        const contact = await ContactsCollection.findById(contactId);
        if (!contact) {
            throw new Error('Contact not found');
        }
        return contact;
    } catch (error) {
        throw new Error(error.message);
    }
};
