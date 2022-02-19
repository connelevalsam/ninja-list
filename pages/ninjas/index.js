import Head from 'next/head';
import Styles from '../../ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {ninjas: data}
  }
}

const Ninjas = ({ ninjas }) => {
    return (
      <>
        <Head>
          <title>Ninja List | Ninjas</title>
          <meta name="keywords" content="ninja" />
        </Head>
        <div>
            <h1>Ninjas</h1>
            {ninjas.map(ninja => (
              <div key={ninja.id}>
                <a>
                  <h3>{ ninja.name }</h3>
                </a>
              </div>
            ))}
        </div>
      </>
    )
  }
  
  export default Ninjas;