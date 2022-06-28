const updateState = (prevState: any, getInitialData: any) => {
  return [...prevState, getInitialData.map((user: any) => user)];
};
export default updateState;
