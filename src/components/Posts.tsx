import '../styles/Posts.css';
import PostItem from './PostItem'

function Posts() {
    return (
        <>
            <div className="posts">
                <div className="posts-header">
                    <h2>Latest Posts</h2>
                </div>
                <div className="posts-content">
                    <ul>
                        <PostItem postDate='01 Mar 2023' postTitle='Investing for poeple in their 20s' />
                        <PostItem postDate='05 Apr 2023' postTitle='Leverage the concept of compounding in any aspect of your life' />
                        <PostItem postDate='25 Jun 2023' postTitle='Why Brothers Karamazov is the greatest book of all time' />
                        <PostItem postDate='25 Jun 2023' postTitle='Reading will change your life' />
                    </ul>
                </div>
            </div>

        </>
    )

}

export default Posts