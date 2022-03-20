export const state = () => ({
  items: [],
});

export const mutations = {
  removeItem(state, key) {
    state.items = state.items.filter(({ key: _key }) => _key !== key);
    localStorage.setItem("items", JSON.stringify(state.items));
  },
  pushItem(state, value) {
    state.items.push({ ...value, key: state.items.length });
    localStorage.setItem("items", JSON.stringify(state.items));
  },
  setItems(state) {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    state.items = items;
    console.log(items);
  },
};
