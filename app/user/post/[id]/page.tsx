import React from "react"

const Post = ({ params }: { params: { id: string } }) => {
  return <div>Post of ID: {params.id}</div>
}

export default Post
