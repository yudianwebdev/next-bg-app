import "reactn";

declare module "reactn/default" {
  export interface Reducers {
    append: (
      global: State,
      dispatch: Dispatch,
      ...strings: any[]
    ) => Pick<State, "value">;

    increment: (
      global: State,
      dispatch: Dispatch,
      i: number
    ) => Pick<State, "count">;

    doNothing: (global: State, dispatch: Dispatch) => null;
  }

  interface Err {
    [key: string]: string[];
  }
  export interface State {
    count: number;
    value: string;
    addOne: number;
    Err: string;
    dataErr: Err;
    Username: string;
    // email: string;
    password: string;
  }
}
