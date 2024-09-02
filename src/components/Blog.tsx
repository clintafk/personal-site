import Header from '../components/Header'
import Footer from '../components/Footer'
import Posts from './Posts';
import WelcomeBlog from './WelcomeBlog';

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