// Utils
import { AxiosInstance } from '../utils/AxiosInstance';

export class ItemsService {
 
  static getItems = async (items) => {
    let result;

    try {
      result = await AxiosInstance.post(`items`, { items });
    } catch (e) {
      console.log(e)
      throw(e);
    }

    return result.data;
  };
}

// export const userService = new UserService()