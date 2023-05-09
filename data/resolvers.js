import { reject } from 'lodash';
import { Widgets } from '../dbConnectors';

const resolvers = {
  getProduct: ({ id }) => {
    try {
      return Widgets.findById({_id: id});
    } catch (err) {
      reject(err);
    }
  },
  getAllProducts: () => {
    try {
      return Widgets.find({});
    } catch (err) {
      reject(err);
    }
  },
  createProduct: ({input}) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      souldout: input.souldout,
      inventory: input.inventory,
      stores: input.stores,
    });

    newWidget.id = newWidget._id;

    try {
      return newWidget.save();
    } catch (err) {
      reject(err);
    }
  },
  updateProduct: ({input}) => {
    try {
      return Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true });
    } catch(err) {
      reject(err);
    }
  },
  deleteProduct: async ({id}) => {
    try {
      await Widgets.findByIdAndRemove(id);
      return 'Deleted product: ' + id;
    } catch (err) {
      reject(err);
    }
  }
};

export default resolvers;