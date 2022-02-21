import instance from "./instance";

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};
export const add = (data) => {
    const url = "/categories";
    return instance.post(url, data);
};
export const update = (data, id) => {
    const url = `/categories/${id}`;
    return instance.patch(url, data);
};