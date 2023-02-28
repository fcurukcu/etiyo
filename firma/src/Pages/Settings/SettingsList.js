import React, { Component } from 'react'
import { render } from "react-dom";
import axios from 'axios';
import { getUser } from '../../Utils/Common';
import Settings from './Settings';

export class SettingsList extends Component {
  constructor(props) {

    super(props);

    this.state = {

      posts: [],

    };

  }

  componentDidMount() {

    const user=getUser();
 console.log(user);

    axios.get(`https://localhost:44363/firma/firmabilgilerilistesi/`+user.firma_id)
      .then(res => {
        const posts = res.data.response;
        this.setState({ posts });
       console.log("deneme",posts);
        
       
      })

  }


  render() {
    const {posts } = this.state;
    return (
      <>
         {
            posts.map((post,i)=>{
                return(
                    <Settings key={i} props={post} />
                  )
            })
         }
   
                      
      </>
    )
  }
}

export default SettingsList