import { Router } from 'express';

import { getContactsController, getContactController } from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContactsController);
router.get('/contacts/:id', getContactController);

export default router;
