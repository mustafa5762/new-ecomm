import { useState } from 'react';
import ProductGrid from '../components/Product/ProductGrid';


export default function Home({ products, error }) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log('Fetched Data:', products);

  return (
    <main>
      <ProductGrid products={products} />
    </main>
  );
}

export async function getServerSideProps() {
  const apiUrl = 'https://api-ap-south-1.hygraph.com/v2/cloriy67er8r301uqcs3x1fer/master';
  const query = `
    query Products {
      products {
        createdAt
        dateAdded
        description
        featured
        id
        name
        publishedAt
        sdn
        shortDescription
        sizeDescription
        slug
        updatedAt
        tags {
          name
        }
        sizes {
          name
          inStock
        }
        prices {
          country
          price
          sign
        }
        colors {
          name
          class
          images {
            url
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(errors[0].message);
    }

    return {
      props: {
        products: data.products,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
        error: error.message || 'An error occurred while fetching data.',
      },
    };
  }
}
