export const persistStore = jest.fn();

export const mockPersistStore = () => {
  (persistStore as jest.Mock).mockImplementation((store, config, callback) => {
    callback(null);
    return store;
  });
};

export const restorePersistStore = () => {
  (persistStore as jest.Mock).mockRestore();
};
