export const useSearchParams = jest.fn();
export const useRouter = jest.fn();

export const mockUseSearchParams = () => {
  (useSearchParams as jest.Mock).mockImplementation(
    () => new URLSearchParams("id:1"),
  );
};

export const mockUseRouter = () => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    query: {},
    asPath: "",
  }));
};

export const restoreMocks = () => {
  (useSearchParams as jest.Mock).mockRestore();
  (useRouter as jest.Mock).mockRestore();
};
