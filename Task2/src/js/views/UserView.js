import {View} from 'backbone';
const userTemplate = require('../../templates/userTemplate.html');

export const UserView = View.extend({
    tagName:  "tr",
    attributes: {
        class: "table-row",
    },
    events: {
        'click .button-edit': 'editUser',
        'click .button-remove': 'removeUser',
        'click .button-save': 'saveUser',
    },
    template: userTemplate,
    initialize() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'invalid', this.showValidationError);
    },
    render() {
        const userData = this.model.toJSON();
        this.el.innerHTML = this.template(userData);

        // Вынес все элементы в отдельное свойство, чтобы в дальнейшем было удобнее к ним обращаться
        this.controls = {
            name: {
                input: this.el.getElementsByClassName('input-name')[0],
                text: this.el.getElementsByClassName('name')[0],
                errorSpan: this.el.getElementsByClassName('error-message-name')[0],
            },
            phone: {
                input: this.el.getElementsByClassName('input-phone')[0],
                text: this.el.getElementsByClassName('phone')[0],
                errorSpan: this.el.getElementsByClassName('error-message-phone')[0],
            },
            buttons: {
                save: this.el.getElementsByClassName('button-save')[0],
                edit: this.el.getElementsByClassName('button-edit')[0],
                remove: this.el.getElementsByClassName('button-remove')[0],
            }
        }

        return this;
    },
    removeUser() {
        this.model.destroy();
    },
    editUser() {
        this.model.set({isEdit: true})
    },
    saveUser() {
        this.model.set({
            isEdit: false,
            name: this.controls.name.input.value,
            phone: this.controls.phone.input.value,
        }, {
            validate: true
        });
    },
    showValidationError() {
        // Если  есть ошибки валидации, подсвечиваем невалидный инпут красным и выводим сообщение об ошибке
        if (this.model.validationError) {
            Object.keys(this.model.validationError).map( fieldName => {
                this.controls[fieldName].input.classList.add('invalid')
                this.controls[fieldName].errorSpan.innerText = this.model.validationError[fieldName];
            })
        }
    }
})