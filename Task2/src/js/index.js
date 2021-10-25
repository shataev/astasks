import css from '../css/index.css';

import {AppView} from "./views";
import {worker} from '../mocks';

worker.start().then(()=>{
    const appView = new AppView({
        el: '#app',
    });
})



