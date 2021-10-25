import {View} from 'backbone';

import {UserCollection} from "../collections";
import {UserView} from "./UserView";
const appTemplate = require('../../templates/appTemplate.html');

const Users = new UserCollection();

export const AppView = View.extend({
    events: {
        'click .button-add-user': 'createUser',
    },
    initialize() {
        this.template = appTemplate;

        this.listenTo(Users, 'add', this.addUser);

        Users.fetch();
        this.render();

        this.addUserForm = document.getElementById('addUserForm')
        this.userListContainer = document.getElementById('table-body');
    },
    render() {
        this.el.innerHTML = this.template();
    },
    addUser(user) {
        const userView = new UserView({
            model: user
        });

        this.userListContainer.append(userView.render().el);
    },
    createUser() {
        const name = this.addUserForm.name.value;
        const phone = this.addUserForm.phone.value;

        const newUser = Users.create({
            name,
            phone,
        }, {
            wait: true,
        })

        // Показ ошибок валидации данных юзера
        // TODO: подумать, как сделать общую валидацию для таблицы и формы
        if (newUser.validationError) {
            Object.keys(newUser.validationError).map( fieldName => {
                this.addUserForm[fieldName].classList.add('invalid')
                this.addUserForm.querySelector(`.error-message-${fieldName}`).innerText = newUser.validationError[fieldName];
            })
        } else {
            this.addUserForm.name.value = null;
            this.addUserForm.phone.value = null;

            // Очищаем текст в блоках с ошибками
            [...this.addUserForm.querySelectorAll(`.error-message`)].map( errorMessageEl => errorMessageEl.innerText = '' );
        }
    }
})