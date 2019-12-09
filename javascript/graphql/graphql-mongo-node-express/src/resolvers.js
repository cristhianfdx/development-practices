//Model
import Car from './models/Cars';

export default {    
    Query: {
      allCars: async (parent, args) => {
        const cars = await Car.find();
        return cars.map(x => {
          x._id = x._id.toString();
          return x;
        })
      }
    },
    Mutation: {
      createCar: async (parent, args) => {
        const car = await new Car(args).save();
        car._id = car._id.toString();
        return car;
      }
    }
}

