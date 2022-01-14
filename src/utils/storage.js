const ITEMS = "items";
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const ItemsStorage = {
  get() {
    return localStorage.getItem(ITEMS)
      ? JSON.parse(localStorage.getItem(ITEMS))
      : [];
  },
  save(DATA = null) {
    localStorage.setItem(
      ITEMS,
      JSON.stringify(DATA)
    );
  },
};

export { ItemsStorage };
