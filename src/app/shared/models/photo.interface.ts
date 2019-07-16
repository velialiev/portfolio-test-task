import {IUser} from './user.interface';
import {IUserCollection} from './user-collection.interface';
import {IUrls} from './urls.interface';
import {ILinks} from './links.interface';

export interface IPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: IUser;
  current_user_collections: Array<IUserCollection>;
  urls: IUrls;
  links: ILinks;
}
