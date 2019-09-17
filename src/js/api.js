const API_KEY = 'GRY537X-A7BM9ZT-PVQ7J66-N8DQH94';
//
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
    const searchAPIEndpoint = `${API_URL}beers/shows?q=`;
    const showsAPIEndpoint = `${API_URL}beers`;
    return {
        getBeers: async text => {
            try{
                const requestURL = text ? `${searchAPIEndpoint}${text}` : showsAPIEndpoint;
                const response = await fetch(requestURL,  {
                      headers: {
                      'accept': 'application/json',
                      'X-API-KEY': API_KEY,
                    },
                  });
          


                if (!response.ok) {
                    throw new Error('Error fetching beers');
                }
                const data = await response.json();
                return data.beers;
                // const formatData = data.map(item => {
                //     if (item.show) {
                //         return item.show;
                //     }
                //     return item //?¿ no sería else --> return item
                // });
                //return formatData; 
            }
            catch (err) {
                console.error(err.message);
                throw err;
            }
        },
        
    };
};

export default api;