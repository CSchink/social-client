import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Image, Transition } from "semantic-ui-react";
import PostCard from "../components/postcard";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import PostForm from "../components/PostForm";
import "../App.css";
import { AuthContext } from "../context/auth";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={2} >
      <Grid.Row className="page-title" color='purple'>
        <h1>Recent Posts</h1>
      </Grid.Row>
      {user && (
        <Grid.Row className="page-title">
          <Grid.Column>
            <PostForm />
          </Grid.Column>
          </Grid.Row>
        )}
      <Grid.Row>
        
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
         <Transition.Group>
           { data &&
          data.getPosts.map((post) => (
            <Grid.Column width={6}  style={{ marginBottom: "20px", marginRight: 'auto', marginLeft: 'auto' }} key={post.id}>
              <PostCard post={post} />
            </Grid.Column>))}
         </Transition.Group>
          
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
