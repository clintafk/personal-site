import Welcome from '../components/Welcome'
import Posts from '../components/Posts'
import UserImage from '../../public/userImage.jpg'
import '../styles/Body.css'

const userDescription: JSX.Element = (
    <div>
        <p>
            I'm a Computer Science Student @<a href="https://www.xu.edu.ph/">Xavier University Ateneo de Cagayan</a>. I love technology, my areas of interest currently are in web development, game development, and cybersecurity. 
        </p>
        <p>
            This website is going to be the hub for everything about me. 
            The purpose of this website is to 
        </p>

    </div>
)

function Body() {

    return (
        <>
            <div className="body">
                <Welcome userName='Clint' imagePath={UserImage} userDescription={userDescription}/>
            </div>
        </>
    )
}

export default Body;