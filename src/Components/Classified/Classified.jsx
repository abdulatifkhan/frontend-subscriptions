import { useQuery, useSubscription } from "@apollo/client";
import { CLASSIFIEDS, SUBSCRIPTION } from "./Query.js";

import Loader from "../Loader/Loader";
import ErrorMessage from "../Error/Error";

function Classified () {

  const { loading, error, data } = useQuery(CLASSIFIEDS)

  const { data: sData, loading: sLoading } = useSubscription(SUBSCRIPTION)

  console.log(data);

  return (
    <>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }

      { data && <ul>
        
        {
          data.classifieds.map(( c ) => <li key={c.id}>{c.title}</li>)
        }

        {
          !sLoading && sData && <>Ok</>
        }

      </ul>}
    </>
  )
}

export default Classified