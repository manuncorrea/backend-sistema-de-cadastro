import { isValidObjectId } from 'mongoose';
import User from '../models/User';


interface UserProps {
  id: string
  firstName: string;
  lastName: string;
  address: AdressProps;
  phone: string;
}

interface AdressProps{
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}


class UpdateUserService {
  public async execute({ id, firstName, lastName, address, phone}: UserProps) {
    if(!isValidObjectId(id)) {
      throw new Error('Invalid id argument type')
    }

    const userExists = await User.findById(id)

    if(!userExists) throw new Error('User not found' )

    const user = await User.findByIdAndUpdate(id, { firstName, lastName, address, phone })
    

    return user
  }
}

export default UpdateUserService



