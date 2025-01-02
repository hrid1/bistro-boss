import OrderCard from "../../components/OrderCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
      {items?.map((item) => {
        return <OrderCard item={item} key={item._id}></OrderCard>;
      })}
    </div>
  );
};

export default OrderTab;
