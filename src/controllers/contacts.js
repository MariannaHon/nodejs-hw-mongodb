import { ContactsCollection } from '../db/models/Contact.js';

export const getContactsController = async (req, res) => {
    try {
        const contacts = await ContactsCollection.find();
        res.json({
            status: 200,
            message: `Successfully found contacts!`,
            data: contacts,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};
