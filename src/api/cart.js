import instance from "./instance";

export const getAll = () => {
    const url = "/carts";
    return instance.get(url);
};
export const getAllDetails = (id) => {
    const url = `/carts?id=${id}`;
    return instance.get(url);
};
export const getAllDetailsForUser = (id) => {
    const url = `/carts?userId=${id}`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/carts/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/carts/${id}`;
    return instance.delete(url);
};
export const add = (data) => {
    const url = "/carts";
    return instance.post(url, data);
};
export const update = (data, id) => {
    const url = `/carts/${id}`;
    return instance.patch(url, data);
};