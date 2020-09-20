import chance from 'chance'
import { User } from '../model'
import { UserProfile } from "../model/user";
// import Avatars from '@dicebear/avatars'
// import sprite from '@dicebear/avatars-avataaars-sprites'

const mock = chance()

const profile: UserProfile = {
  name: mock.name(),
  description: mock.locale(),
  imageUrl: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 5000)}.svg`
}

export default {
  profile
}
