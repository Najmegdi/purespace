
import SectionTitle from './SectionTitle';
import  ProductsGrid  from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <div className='p-3 bg-base-100 rounded-3xl w-full'>
        <SectionTitle text='Featured Products'/>
      <ProductsGrid paddingFeaturedProducts="pt-0" />
    </div>
  );
};

export default FeaturedProducts;
