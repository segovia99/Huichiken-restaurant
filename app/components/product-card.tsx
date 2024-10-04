import { Link } from "next-view-transitions";
import { ShoppingBag } from "lucide-react";

function ProductCard({
  id,
  title,
  img,
  price,
  addToCart,
}: {
  id: number;
  title: string;
  img: string;
  price: string;
  addToCart?: () => void;
}) {
  return (
    <div
      className="product-card-one w-full h-full bg-white relative group overflow-hidden"
      style={{ boxShadow: " rgba(0, 0, 0, 0.05) 0px 15px 64px 0px" }}
    >
      <div
        className="product-card-img w-full h-[300px]"
        style={{
          background: `url("${img}") center center no-repeat`,
          backgroundSize: "300px 300px",
        }}
      />
      <div className="product-card-details px-[30px] pb-[30px] relative">
        <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[50px] transition-all duration-300 ease-in-out">
          <button className="red-btn text-red-600">
            <div className="flex items-center space-x-3">
              <span className="text-red-600"><ShoppingBag /></span>
              <span className="text-red-600">Agregar a la orden</span>
            </div>
          </button>
        </div>
        <Link href={`/detail/${id}`}>
          <p className="title mb-2 text-[15px] font-600 text-black leading-[24px] line-clamp-2 hover:text-blue-600">
            {title}
          </p>
        </Link>
        <p className="price">
          <span className=" text-red-600 font-600 text-[18px] ml-2">
            ${price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
