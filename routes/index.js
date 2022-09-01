import express from "express";
import { getSubs , postSubs,getAllSubs, deleteSubs, patchSubs, putSubs} from "../controllers/subscribers.js";

const router = express.Router();

router.get('/', getAllSubs)

router.post('/',postSubs)

router.get('/:id', getSubs)

router.delete('/:id',deleteSubs)

router.patch('/:id', patchSubs)

router.put('/:id',putSubs)

export default router;