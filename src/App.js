import axios from "axios";
import { useQuery } from "react-query";
const App = () => {
  const onSuccess = (data) => console.log("Perform after success", data);
  const onError = (error) => console.log("Perform after success", error);
  const getData = () => axios.get('http://localhost:4000/api/projects');
  const { isLoading, data, isError, error } = useQuery('api-project', getData, {
    onSuccess,
    onError,
    select: (data) => data.data.data.map(project => project.name)

  });
  if (isLoading) {
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