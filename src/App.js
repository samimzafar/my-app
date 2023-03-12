import { useFetchAPI } from "./hooks";
const App = () => {
  const onSuccess = (data) => console.log("Perform after success", data);
  const onError = (error) => console.log("Perform after success", error);
  const { isLoading, data, isError, error, isFetching } = useFetchAPI(onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data);
  return (
    <>
      {data?.map((projectName) => {
        return <div key={projectName}>
          <h2>{projectName}</h2>
        </div>;
      })
      }
    </>
  );
};

export default App;