import React from 'react'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          users: []
        };
      }


    async  componentDidMount() {
        this.setState({isLoaded: true});
      let res = await  fetch("https://reqres.in/api/users?page=2",{
          method: 'GET',
          headers: {
            'content-type':'application/json'
          }
      });
      let resJson = await res.json();
          
      this.setState({users: resJson.data, isLoaded: false})
            
        
      }

      render() {
        return (
            <div>
                {!this.state.loading ? this.state.users.map((user) => {
                    return (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={user.avatar} alt="kekw"/>
                            <div>
                                {user.email}
                            </div>
                            <div>
                                {user.first_name} {" "} {user.last_name}
                            </div>
                            
                            
                        </div>
                        )
                }) : <div>Users loading ...</div>}
            </div>
        )
    }
}

export default Users;