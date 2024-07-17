import { Router } from 'express';

import { getContactsController, getContactByIdController, createContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkUser } from '../middlewares/checkUser.js';

const router = Router();
router.use(authenticate);

router.get('/', checkUser, ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, checkUser, ctrlWrapper(getContactByIdController));

router.post('/', checkUser, validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/:contactId', isValidId, checkUser, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

router.delete('/:contactId', isValidId, checkUser, ctrlWrapper(deleteContactController));

export default router;
