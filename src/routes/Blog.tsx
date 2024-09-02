import Header from '../components/Header'
import Footer from '../components/Footer'
import Posts from '../components/Posts';
import WelcomeBlog from '../components/WelcomeBlog';

function Blog() {
    return(
        <>
            <Header />
            <WelcomeBlog />
            <Posts />
            <Footer />
        </>
    )

}

export default Blog;