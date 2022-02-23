import instance from "./instance";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
export const add = (data) => {
    const url = "/users";
    return instance.post(url, data);
};
export const update = (data, id) => {
    const url = `/users/${id}`;
    return instance.patch(url, data);
};