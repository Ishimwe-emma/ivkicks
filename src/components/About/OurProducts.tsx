import OurProduct, { OurProductProps } from "./OurProduct";

const OurProducts = () => {
  const products: OurProductProps[] = [
    {
      imgSrc: "/server-assets/image 1.png",
      id: 0,
      summary: "Running shoes for men",
      description:
        "Best Men's shoes for marathon and other running related activities",
      productUrl: "/men",
    },
    {
      imgSrc: "/server-assets/image 4.png",
      id: 1,
      summary: "Nike shoes for women",
      description:
        "Best Men's shoes for marathon and other running related activities",
      productUrl: "/men",
    },
    {
      imgSrc: "/server-assets/lastImage.png",
      id: 2,
      summary: "Adidas Shoes for women",
      description:
        "Best Men's shoes for marathon and other running related activities",
      productUrl: "/men",
    },
  ];
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-[2rem] bg-[#f5f5f5] py-[3rem] lsm:gap-[5rem] xl:items-center">
      <span className="w-full text-start font-bold text-4xl text-[#0A083A] pl-[2rem] lsm:text-center lg:text-5xl">
        Our Products
      </span>
      <div className="w-full flex flex-col items-center justify-center gap-[4rem] miniTablet:flex-row xl:w-[80%]">
        {products.map((product) => {
          const { imgSrc, id, summary, description, productUrl } = product;
          return (
            <OurProduct
              key={id}
              id={id}
              imgSrc={imgSrc}
              summary={summary}
              description={description}
              productUrl={productUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
