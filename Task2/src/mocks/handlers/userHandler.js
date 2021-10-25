import {rest} from 'msw';
import {name, phone} from 'faker';

import {USER_ENDPOINT} from "../../js/collections";

const DEFAULT_USER_COUNT = 4;
const DEFAULT_PHONE_MASK = '+7-###-###-##-##';

let userListRespData = [];

for (let i = 0; i < DEFAULT_USER_COUNT; i++) {
    userListRespData.push({
        name: `${name.firstName()} ${name.lastName()}`,
        phone: phone.phoneNumber(DEFAULT_PHONE_MASK),
    })
}

export const getUser = rest.get(USER_ENDPOINT, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(userListRespData)
    )
})

export const postUser = rest.post(USER_ENDPOINT, (req, res, ctx) => {
    const {name, phone} = req.body;
    userListRespData.push({
        name, phone
    })

    return res(
        ctx.status(200),
        ctx.json(userListRespData)
    )
})