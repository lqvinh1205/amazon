import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (data) => {
    const url = "/products";
    return instance.post(url, data);
};
export const update = (data, id) => {
    const url = `/products/${id}`;
    return instance.patch(url, data);
};