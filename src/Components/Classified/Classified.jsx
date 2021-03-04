import { useEffect, useState } from "react"
import { useQuery, useSubscription } from "@apollo/client";
import { CLASSIFIEDS, SUBSCRIPTION } from "./Query.js";

import Loader from "../Loader/Loader";
import ErrorMessage from "../Error/Error";

function Classified () {

  const [cat, setCat] = useState("")

  const { loading, error, data } = useQuery(CLASSIFIEDS, {
		variables: {
			cat,
		}
  })

  useSubscription(SUBSCRIPTION, {

		onSubscriptionData: ({ client: { cache }, subscriptionData: { data } }) => {

			cache.modify({
				fields: {
					classifieds: () => {}
				}
			})
		},
	})

  useEffect(() => {

		if (data) {

			console.log(data.classifieds)
		}

	}, [
		data,
	])

  return (
    <>
      { loading && <Loader /> }

      	{ error && <ErrorMessage error={error} /> }
			
			<input type="text" onChange={e => {

				setCat(e.target.value)
			
			}} />

			{ data && <ul>

				{
					data.classifieds.map(c => <li key={c.id}>{c.title}</li>)
				}

      </ul>}
    </>
  )
}

export default Classified