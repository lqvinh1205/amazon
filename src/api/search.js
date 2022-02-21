import instance from "./instance";

export const searchValue = (key, value) => {
    const url = `/${key}?${value}`;
    return instance.get(url);
};
export const searchLike = (key, value) => {
    const url = `/${key}?${value}`;
    return instance.get(url);
};

export const sortValue = (key, value, arrow) => {
    const url = `/${key}?_sort=${value}&_order=${arrow || "asc"}`;
    return instance.get(url);
};