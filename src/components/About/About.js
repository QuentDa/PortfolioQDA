import './About.css';
import { useState } from 'react';

export default function About() {
    const [aboutState, setAboutState] = useState('Pro');
    const [animationKey, setAnimationKey] = useState(0); // Nouvel état pour réinitialiser l'animation

    const handleAboutClick = () => {
        setAnimationKey(animationKey + 1); // Incrémente la clé pour réinitialiser l'animation
        if (aboutState === 'Pro') {
            setAboutState('Perso');
        } else {
            setAboutState('Pro');
        }
    }

    return (
        <div className='AboutSection'>
            <div className='PageWidth'>
                <div onClick={handleAboutClick} className="SectionPicker">
                    <h2 className={`TheDeveloper ${aboutState === "Perso" ? "disabled" : ""}`}>THE DEVELOPER</h2>
                    <h2 className={`ThePerson ${aboutState === "Pro" ? "disabled" : ""}`}>THE PERSON</h2>
                </div>
                <div className={`AboutContent ${aboutState}`}>
                    {aboutState === "Pro" ? (
                        <p key={animationKey}>PRO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    ) : (
                        <p key={animationKey}>PERSO Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                    )}
                </div>
            </div>
        </div>
    );
}