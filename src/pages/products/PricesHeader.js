function PricesHeader(props) {
  return (
    <div className={`pricesHeader ${props.pricesImage}`}>
      <div className="pricesHeaderTitle">
        <h1>{props.titlePricesHeader}</h1>
      </div>
    </div>
  );
}

export default PricesHeader;
