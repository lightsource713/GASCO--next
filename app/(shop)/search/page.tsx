import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { products } from '../../../db/products';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage() {

  return (
    <>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
