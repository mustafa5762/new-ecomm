import { useState } from 'react';
import ProductDetail from '@/components/Product/ProductDetail';

export default function Home({ product, error }) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log('Fetched Data:', product);

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
}

export async function getServerSideProps() {
  const apiUrl = 'https://api-ap-south-1.hygraph.com/v2/cloriy67er8r301uqcs3x1fer/master';
  const query = `
    query Product {
      product(where: {slug: "ghoulishcottondelighttee"}) {
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
        product: data.product,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        product: [],
        error: error.message || 'An error occurred while fetching data.',
      },
    };
  }
}
