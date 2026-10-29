const express = require('express');
const router = express.Router();
const { z } = require('zod');
const { authenticate } = require('../middleware/auth');
const validate = require('../middleware/validate');
const UserDataService = require('../services/userDataService');

// Données personnelles du compte connecté (tous les comptes, visiteurs compris)
const saveSchema = z.object({
  body: z.object({
    entries: z.array(z.object({ key: z.string().max(100), value: z.any() }).strict()).min(1).max(50),
  }).strict(),
});

router.use(authenticate);

router.get('/data', async (req, res, next) => {
  try {
    res.json({ success: true, data: await UserDataService.list(req.user.id) });
  } catch (error) {
    next(error);
  }
});

router.put('/data', validate(saveSchema), async (req, res, next) => {
  try {
    const entries = req.body.entries.map((e) => ({ key: e.key, value: e.value === undefined ? null : e.value }));
    res.json({ success: true, data: await UserDataService.save(req.user.id, entries) });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
