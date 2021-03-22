export function fullPathCreator(array, parentPath = undefined) {
  return array.map((el) => {
    const route = {
      ...el,
      path: parentPath ? `${parentPath}${el.path}` : el.path,
    };

    if (route.children) {
      route.children = fullPathCreator(route.children, route.path);
    }

    return route;
  });
}

export function flatten(array) {
  const flat = [];
  array.forEach((item) => {
    flat.push({
      name: item.name,
      path: item.path,
    });
    if (Array.isArray(item.children)) {
      flat.push(...flatten(item.children));
    }
  });

  return flat;
}
