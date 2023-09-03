import { useState, useEffect } from 'react';
import './Carousel.css';
import data from './data.json';
import RightArrowIcon from './ArrowSVG';
import GitHubSVG from './GithubSVG';
import InternetSVG from './InternetSVG';

export default function Carousel() {
    const [activeData, setActiveData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Initialiser les données actives
    useEffect(() => {
        setLoading(true); // Activer le chargement
        setTimeout(() => {
            setActiveData(data[0]); // Définir les données initiales après le délai
            setLoading(false); // Désactiver le chargement
        }, 300); // Définir le délai en millisecondes
    }, []);

    // Gestion clic pour les blocs secondaires
    const handleSecondaryBlockClick = (clickedData) => {
        setLoading(true); // Activer le chargement
        setTimeout(() => {
            setActiveData(clickedData); // Mettre à jour les données actives après le délai
            setLoading(false); // Désactiver le chargement
        }, 600); // Définir le délai en millisecondes
    };

    return (
        <div className="CarouselSection">
            <div className='BlocksWrapper'>
                <div className='TitleContainer TitleContainerD'>
                    <h2 className='BackgroundTitle BackgroundTitleD'>PROJECTS</h2>
                    <h2 className='BackgroundTitleD'>PROJECTS</h2>
                </div>
                <div className="MainBlock">
                    {/* Afficher le bloc principal si des données actives sont présentes */}
                    {activeData && (
                        <>
                            <div className={`ImgWrapper ${loading ? 'loading' : ''}`}>
                                <img src={activeData.img} alt={activeData.title} />
                            </div>
                            <div className='MainBlockInfo'>
                                <div className='LinkWrapper'>
                                    {activeData.github === "disabled" ?
                                    <span class="LinkDisabled"><GitHubSVG fill='#aaa' /></span> :
                                    <a href={activeData.github} target="_blank" rel="noreferrer">
                                        <GitHubSVG fill="#fff" />
                                    </a>
                                    }
                                    <a href={activeData.live} target="_blank" rel="noreferrer"><InternetSVG /></a>
                                </div>
                            </div>
                            <div className='MainBlockTechno'>

                            </div>
                        </>
                    )}
                </div>
                <br />
                <br />
                <div className="SecondaryBlocks">
                    <div className='TitleContainer TitleContainerM'>
                        <h2 className='BackgroundTitle BackgroundTitleM'>PROJECTS</h2>
                        <h2 className='BackgroundTitleM'>PROJECTS</h2>
                    </div>
                    {/* Mapper et afficher les blocs secondaires */}
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`SecondaryBlock ${item === activeData ? 'active' : ''}`}
                            onClick={() => handleSecondaryBlockClick(item)}
                        >
                            <span className='SecondaryBlockTitle'>{item.title}</span>
                            <div className='SecondaryBlockWrapper'>
                                <span className='SecondaryBlockContent'>{item.content}</span>
                                <div className='SecondaryBlockContent SecondaryBlockTechno'>{item.techno}</div>
                                <div className='SecondaryBlockLink'>Check it out <RightArrowIcon /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
