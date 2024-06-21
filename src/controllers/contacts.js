import { getAllContacts, getContactById } from '../services/contacts.js';

export const getContactsController = async (req, res) => {
    try {
        const contacts = await getAllContacts();
        res.json({
            status: 200,
            message: `Successfully found contacts!`,
            data: contacts,
        });
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
};

export const getContactController = async (req, res) => {
    try {
        const contact = await getContactById(req.params.id);
        res.json({
            status: 200,
            message: `Successfully found contact with id {id}!`,
            data: contact,
        });
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message,
        });
    }
};
