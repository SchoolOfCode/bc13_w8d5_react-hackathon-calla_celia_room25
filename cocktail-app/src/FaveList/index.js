import "./favelist.css"
import FaveCard from "../FaveCard";

function FaveCardList(props) {
    return (
    <div className="card-list">
      {props.faveList.map(function (cocktail) {
        return (<FaveCard key={cocktail.id} cocktail={cocktail}/>);
      })}
    </div>
  );
}

export default FaveCardList;