
import React from 'react';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';
import { now } from 'moment';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
}

const PostRow: React.FC<PostRowProps> = (props) => (
  <div className="post-row" style={
    {
    backgroundColor: new Date(props.createdAt).toDateString() == new Date().toDateString() ? 'antiquewhite' : 'none'
  }
    }>
    <Points
      onUpvoteClicked={() => props.onUpvoteClicked()}
      onDownvoteClicked={() => props.onDownvoteClicked()}
      points={props.points}
      isLoggedIn={props.isLoggedIn}
    />
    <PostMeta {...props} />
  </div>
)

export default PostRow;