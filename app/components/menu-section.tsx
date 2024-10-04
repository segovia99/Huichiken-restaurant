import products from '../../db.json'
import ProductCard from "./product-card"

function MenuSection () {
  

  return (
    <section className='section-style-one category-products mb-[60px] aos-init aos-animate'>
      <div className='section-wrapper w-full '>
        <div className='container-x mx-auto'>
          <div className='section-content'>
            <div className='products-section w-full'>
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5'>
                {
                products.slice(0, 4).map((product) => {
                  return (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price} img={product.img}
                        id={product.id}
                    />
                  )
                })
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection