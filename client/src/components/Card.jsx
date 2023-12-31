import '../App.css'

const Card = (props) => {
    
    return (
      <div className="card">

        <div className="card_info">
          <div className="user_info">
            <p>{props.post.date.substring(0,10)}</p>
            <p>{props.post.username}</p>
          </div>

            <h3>{props.post.title}</h3>
            <div className="card_description">
              <p>{props.post.description.substring(0,100)}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  