import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length === 0) return;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue;
            let itemData = JSON.parse(localStorage.getItem(localStorage.key(i)));
            // getItem으로 key값에 해당하는 값을 가져옴 그리고 parse로 객체로 만듬
            arr.push(itemData);
            // 객체데이터를 넣음.
        }
        return arr;

    }
}
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    }
});