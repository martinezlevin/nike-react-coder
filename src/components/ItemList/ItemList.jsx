import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="list">
      {products.map((indumentaria) => (
        <Item key={indumentaria.id} {...indumentaria} />
      ))}
    </div>
  );
};

export default ItemList;
