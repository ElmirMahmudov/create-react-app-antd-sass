import React from 'react';
import NewsComponent from '../../components/News/NewsComponent';
import PostServices from "../../services/Post";
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        (async()=>{
            
            const posts = await PostServices.getPosts()
                .then((data)=>{
                    return data.data;
                });

            this.setState(prevState => {
                return {
                    ...prevState,
                    posts: posts
                }
            })
            
        })()
    }
    
    render() {
        return (
            <NewsComponent posts={this.state.posts}/>
        );
    }
}
export default News;