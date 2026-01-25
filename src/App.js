import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

const styles = {
  ListDivider: {
    borderColor: "slategray",
  },
  ListTitle: {
    margin: "8px 0",
  },
};

function App() {
  const products = [{
    imageSrc: "images/iphone.png",
    title: "iphone 15 pro",
    specification: ["A17 pro chip with 6 core-GPU", "3x or 5x Telephoto camera", "upto 29 hours video playback"],
    stockCount: 10,
    price: "999",

  },
  {
    imageSrc: "images/airpods.png",
    title: "Airpods pro 2",
    specification: ["Noise cancellation", "Dust, sweat, and water resistant", "upto 6 hours listening"],
    stockCount: 0,
    price: "249",

  },
  {
    imageSrc: "images/apple-watch.png",
    title: "Apple watch 9",
    specification: ["45mm or 41mm case size", "Always-on retina display", "upto 18 hours normal use"],
    stockCount: 6,
    price: "399",

  },
  ];

  function handlePurchase(product) {
    alert(`You have clicked on ${product.title} which cost $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.title} product={product} onPurchase={handlePurchase} />
        ))}
      </ProductList>

      <h2>Product which cost upto $500</h2>
      {products.filter(({ price }) => price < 500).map(({ title, price }) => (
        <Fragment key={title}>
          <hr style={styles.ListDivider}/>
          <p style={styles.ListTitle}>{title} cost ${price}</p>
        </Fragment>
      ))}
    </div>
  );
}

export default App;
