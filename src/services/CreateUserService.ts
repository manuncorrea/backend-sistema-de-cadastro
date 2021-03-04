import User from '../models/User';

interface UserProps {
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


class CreateUserServices {
  public async execute({ firstName, lastName, address, phone }: UserProps) {
    const user = await User.create({ firstName, lastName, address, phone})

    return user;
  }
   
}

export default CreateUserServices;