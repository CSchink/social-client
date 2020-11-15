import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Container, Grid, Header, Transition } from "semantic-ui-react";
import UserAvatar from "../components/avatar";
import PostCard from "../components/postcard";
import UserFeed from "../components/userfeed";
import { AuthContext } from "../context/auth";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function ProfilePage() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const { user } = useContext(AuthContext);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const userFind = (posts) => {
    let results = posts
      .map(user => user.username)
      .filter(onlyUnique)
      .map((user) => (
        <ul>
          <li>{user}</li>
        </ul>
      ));

    return results;
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <Container fluid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <UserAvatar />
            </Grid.Column>

            <Grid.Column>
              <Header as="h2">My Posts</Header>
              {loading ? (
                <h1>Loading posts..</h1>
              ) : (
                <Transition.Group>
                  {data &&
                    data.getPosts
                      .filter((post) => post.username === user.username)
                      .map((post) => (
                        <Grid.Column
                          width={6}
                          style={{
                            marginBottom: "20px",
                            marginRight: "auto",
                            marginLeft: "auto",
                          }}
                          key={post.id}
                        >
                          <PostCard post={post} />
                          {userFind(data.getPosts)}
                        </Grid.Column>
                      ))}
                </Transition.Group>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
export default ProfilePage;
