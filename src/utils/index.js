export const reRender = async (component, position) => {
    if (component) {
        document.getElementById(position).innerHTML = await component.render();
    }
    if (component.afterRender) {
        await component.afterRender();
    }
};
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
// eslint-disable-next-line consistent-return
export const getLocalStorage = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
};