
import React from 'react';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';
import { now } from 'moment';
import { PostFilterType } from '../../filters/components/PostFilters';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
  filter: PostFilterType;
}

const PostRow: React.FC<PostRowProps> = (props) => (
  <div className="post-row" style={
    {
    backgroundColor: new Date(props.createdAt).toDateString() == new Date().toDateString() 
    && props.filter == 'NEW' ? 'antiquewhite' : '#F9F9F9'
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