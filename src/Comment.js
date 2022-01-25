import React from "react";

const Comment = (props) => {
	return (
		<div className="comments">
			{props.commentText}
		</div>
	)
}


export default Comment;

