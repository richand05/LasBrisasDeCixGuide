import { useState } from 'react';
import ImgHome from '../../assets/img/Home.jpg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'
import Header from '../../components/Header/Header';

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>¡Bienvenidos a <span translate="no"> "Las Brisas de Cix" </span>!</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={ImgHome} alt="Home" className="img-fluid rounded" />
                </div>
                <p>
                    Estamos encantados de que hayan elegido este apartamento para su estadía. Esta guía está diseñada para hacer que su experiencia sea lo más cómoda y placentera posible. Aquí encontrarán toda la información necesaria, desde antes de viajar hasta el momento de su partida.
                </p>
                <ul className="mb-4">
                    <strong>Menú de la guía:</strong>
                    <li>Antes de viajar: Consejos y preparativos para asegurar un viaje sin contratiempos.</li>
                    <li>Al llegar: Instrucciones para un check-in fácil y rápido.</li>
                    <li>Sobre el apartamento: Detalles sobre las comodidades y características del lugar.</li>
                    <li>WiFi / Internet: Información sobre cómo conectarse a nuestra red y disfrutar del internet.</li>
                    <li>Reglas: Normas para mantener un ambiente armonioso para todos.</li>
                    <li>Contacto: Números de contacto para cualquier necesidad, incluyendo autoridades para emergencias.</li>
                    <li>Sobre la ubicación: Recomendaciones y detalles sobre el área local.</li>
                    <li>Regrese pronto: Pasos para un check-out sin problemas.</li>
                </ul>
                <p>
                    Con esta guía, buscamos asegurar que su experiencia sea fluida y agradable. Si tienen alguna pregunta o necesitan asistencia, recuerden que siempre pueden contactarnos a través de la sección de "Contacto". Esperamos que su estadía en <span translate="no"> "Las Brisas de Cix" </span> sea inolvidable y llena de momentos felices. Les invitamos a explorar y disfrutar de la maravillosa ciudad de Chiclayo, Perú.
                </p>
                <p>
                    ¡Les deseamos una estancia maravillosa!
                </p>
            </>
        )
    }
];

const Welcome = () => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (id) => {
        setOpenItems((prevOpenItems) =>
            prevOpenItems.includes(id)
                ? prevOpenItems.filter(itemId => itemId !== id)
                : [...prevOpenItems, id]
        );
    };

    return (
        <>
            <Header title={"Bienvenido"} prePage={"/menu"}/>
            <>
                <div className="accordion mb-5" id="accordionExample">
                    {accordionItems.map((item, index) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${openItems.includes(item.id) ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={openItems.includes(item.id)}
                                    aria-controls={`collapse${index}`}
                                >
                                    <div className='title-accordion'>
                                        {item.title}
                                        <div className='underline'></div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openItems.includes(item.id) ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                            >
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    );
}

export default Welcome;
