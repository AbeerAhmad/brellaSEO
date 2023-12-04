import React from 'react';
import PropTypes from 'prop-types';

const useFetchApi = (callback, query, options) => {
  const [response, setResponse] = React.useState();
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await callback(query);
        if (mounted) {
          setResponse(response);
        }
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    fetchData();
    return () => (mounted = false);
  }, [callback, query]);
  return { response };
};
export default useFetchApi;

useFetchApi.propTypes = {
  callback: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
