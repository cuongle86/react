import type { NextPage } from 'next'


const Home: NextPage = (props) => {
  
  return (
    <div>
        {props.data ? props.data.slice(0,20).map((item, idx) =>
          <div key={idx}>
            {item.symbol}: 
            {item.price}
          </div>)
        : null}
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://api.binance.com/api/v3/ticker/price').catch((err) =>
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
