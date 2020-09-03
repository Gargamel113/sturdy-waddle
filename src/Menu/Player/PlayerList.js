const list = ["Robbin", "Sofie", "Tobbe", "Fia", "Viktor"];

export function add(e) {
  list.push(e);
}

export function remove(e) {
  console.log("Removing " + e);
  privateRemove(e);
}

export function exists(e) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === e) {
      return true;
    }
  }
  return false;
}

export function getList() {
  return list;
}

function privateRemove(e) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === e) {
      list.splice(i, 1);
    }
  }
}