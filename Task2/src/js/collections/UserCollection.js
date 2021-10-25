import {Collection} from 'backbone';

import {UserModel} from "../models";

export const USER_ENDPOINT = '/user';

export const UserCollection = Collection.extend({
    model: UserModel,
    url: USER_ENDPOINT,
})