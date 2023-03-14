import { useFetchAPI } from "./hooks";
const Home = () => {
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
      {data?.map((project) => {
        return <div key={project.id}>
          <h2>{project.name}</h2>
        </div>;
      })
      }
    </>
  );
};
export default Home;