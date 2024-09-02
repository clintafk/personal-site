import '../styles/PostItem.css'

interface PostItemProp {
    postDate: string;
    postTitle: string;
}

function PostItem({ postDate, postTitle }: PostItemProp) {
    return (
        <li>{postDate} - <a href="">{postTitle}</a></li>
    )
}

export default PostItem;