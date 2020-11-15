import React, { useContext } from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
// import DeleteButton from "./deletebutton";
import LikeButton from "./likebutton";
import DeleteButton from "./deletebutton";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          // as={Link} to={`/users/${user.id}`}
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Button as="div" labelPosition="right" as={Link} to={`/posts/${id}`}>
          <Button color="teal" basic>
            <Icon name="comments" />
          </Button>
          <Label as="a" basic color="teal" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          
          <DeleteButton/>
        )}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
