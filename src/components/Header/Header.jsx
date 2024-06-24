import getRandomInt from '../../utils/getRandomInt';
import headerImg from '../../assets/react-core-concepts.png';

function Header() {
    const descList = ['Fundamental', 'Crucial', 'Core'];
    const desc = descList[getRandomInt(descList.length - 1)];

    return (
        <header>
            <img src={headerImg} alt='Stylized atom' />
            <h1>React Essentials</h1>
            <p>{desc} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

export default Header;
