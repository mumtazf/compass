import '../App.css'

const AdminCard = (props) => {

   
    const approvePost = (event) => {
        event.preventDefault();
        console.log(props.post.id);

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ approved: 1}),
        }

        try{
            fetch(`http://localhost:3001/postsRoute/${props.post.id}`, options);
        } catch(error){
            console.log('Error: ', error);
        }
    }

    const rejectPost = (event) => {   
        event.preventDefault();
        console.log(props.post.id);

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ approved: 2}),
        }

        try{
            fetch(`http://localhost:3001/postsRoute/${props.post.id}`, options);
            window.location = '/adminView'
        } catch(error){
            console.log('Error: ', error);
        }
    }
    
    return (
      <div className="card">

        <div className="card_info">
          <div className="user_info">
            <p>{props.post.date}</p>
            <p>{props.post.username}</p>
          </div>

            <h3>{props.post.title}</h3>
            <div className="card_description">
              <p>{props.post.description.substring(0,100)}</p>
          </div>

          <div>
            <button onClick={approvePost}>Approve ✅</button>
            <button onClick = {rejectPost}>Don't Approve ❌</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminCard;
  