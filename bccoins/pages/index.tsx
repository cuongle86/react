import type { NextPage } from 'next'


const Home: NextPage = (props) => {
  return (
    <div>
       {props.data.map((item) => {
          return (
            <div key={item.id}>
              {item.symbol}: {item.market_data.current_price.btc}
            </div>
          );
        })}
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://api.coingecko.com/api/v3/coins').catch((err) =>
    console.log(err)
  )
  const response = await data.json()
  
  return{
    props: {
      data: response
    }
  }
}


export default Home
