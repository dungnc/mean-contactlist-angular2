export class Contact {
  _id?: string;
  name: string;
  email: string;
  avatarURL: string;
  phone: {
    mobile: string;
    work: string;
  }
}