// Express
import { Router } from 'express';
import itemModel from '../schemes/ItemsModel';

class ItemRouter {
  router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes = () => {
    // GET /api/items/
    this.router.post('/', this.getItems);
  }

  getItems = async (req, res) => {
    const { items } = req.body;

    try {
      let tmpItems = items.split(',');
      let splittedItems = [];

      for (const item of tmpItems) {
        const tmpItem = item.split('-');
        if (tmpItem[0] && tmpItem[2]) {
          const result = await itemModel.findOne({id: tmpItem[0], series: tmpItem[2]}).lean();
          splittedItems.push({
            id: tmpItem[0],
            series: tmpItem[2],
            name: result.name,
            details: result.details, 
            amount: tmpItem[1],
          });
        }
      }

      return res.status(200).send(splittedItems)
    } catch (e) {
      return res.status(404).send(e);
    }
  };
}

export const itemRouter = new ItemRouter();