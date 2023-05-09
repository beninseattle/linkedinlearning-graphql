import { reject } from 'lodash';
import { Widgets } from '../dbConnectors';

const resolvers = {
  getProduct: ({ id }) => {
    try {
      return Widgets.findById({_id: id});
    } catch (err) {
      reject(err);
    }
    // return new Promise((resolve) => {
    //   Widgets.findById({_id: id}, (err, product) => {
    //     if (err) reject(err)
    //     else resolve(product)
    //   })
    // });
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
    // return new Promise((resolve) => {
    //   newWidget.save((err) => {
    //     if (err) reject(err)
    //     else resolve(newWidget)
    //   });
    // });
  }
};

export default resolvers;