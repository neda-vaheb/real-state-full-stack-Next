function ItemList({ data }) {
  return (
    <div className="pr-[20px] mb-[50px]">
      {data.length ? (
        <ul>
          {data.map((amenity, index) => (
            <li className="marker-custom" key={index}>
              {amenity}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
