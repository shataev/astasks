import {Model} from 'backbone'

export const PHONE_VALIDATION_REGEXP = /^\+?\d+[\d+|\-]+\d+/gm

export const UserModel = Model.extend({
    defaults: () => ({
        phone: '',
        name: '',
        isEdit: false
    }),
    validate: ({name, phone}) => {
        let errors = {};

        if (!name) {
            errors.name = 'Name is required'
        }

        if (!phone.match(PHONE_VALIDATION_REGEXP)) {
            errors.phone = 'Incorrect phone format'
        }

        if (!!Object.keys(errors).length) {
            return errors;
        }
    },
});