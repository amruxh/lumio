import CardSkeleton from "./CardSkeleton"

const ProductsSkeleton = ({rows}: {rows: number}) => {
  return (
    <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-evenly md:gap-5">
      {[...Array(rows*5)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}

export default ProductsSkeleton
