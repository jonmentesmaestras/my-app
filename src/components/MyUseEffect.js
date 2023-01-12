import React, {useEffect, useState} from 'react'

const MyUseEffect = () => {
    const [quote, setQuote] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const res = await
            fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
            const data = await res.json()
            setQuote(data[0])
        }
        fetchData()
        }, []

        )


  return (
    <div>
        {
            quote ? (
                <>
                    <p>{quote.quote}</p>
                    <p>- {quote.character}</p>
                </>
            ) : (
                <h1>Loading...</h1>
            )
        }
    </div>
  )
}

export default MyUseEffect