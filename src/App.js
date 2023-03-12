import axios from "axios";
import { useQuery } from "react-query";
const App = () => {
  const getData = () => axios.get('http://localhost:4000/api/projects/dsds');
  const { isLoading, data, isError, error } = useQuery('api-project', getData);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      {data.data.data?.map((values, index) => {
        return <div key={index}>
          <h2>{values.name}</h2>
        </div>;
      })
      }
    </>
  );
};

export default App;