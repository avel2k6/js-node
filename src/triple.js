export const make = (x, y, z) => f => f(x, y, z);

export const get1 = triple => triple((x, y, z) => x);
export const get2 = triple => triple((x, y, z) => y);
export const get3 = triple => triple((x, y, z) => z);
