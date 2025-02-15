import { useState } from 'react';
import DoorThirdFloor from '../../assets/img/DoorThirdFloor.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';
import Header from '../../components/Header/Header';

const accordionItems = [
    {
        id: 'location',
        title: (<div>Ubicación</div>),
        content: (
            <>
                <p>
                    El apartamento se encuentra en una ubicación estratégica que ofrece fácil acceso en automóvil a centros comerciales, al centro histórico de Chiclayo, salida hacia la playa de Pimentel y a otras playas cercanas. Además, en los alrededores se puede encontrar una variedad de negocios locales como restaurantes, panaderías, farmacias, cevicherías y bodegas, entre otros, lo que hará que su estancia sea más conveniente y agradable.
                </p>
                <div className='text-center mb-4'>
                    <iframe
                        className='img-fluid rounded'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.61727600408983!2d-79.86364217641199!3d-6.784890677724521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDcnMDUuMyJTIDc5wrA1MSc0OC42Ilc!5e0!3m2!1sen!2spe!4v1723049063739!5m2!1sen!2spe"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <p>
                    <a href="https://las-brisas-de-cix.vercel.app/" target='_blank'   style={{ backgroundColor: '#FFB66E', fontWeight: 'bold' , padding: '5px', borderRadius: '5px', color: 'black' }}>Haciendo clic aquí</a> podrá ubicar los negocios que se encuentran alrededor del apartamento, centros comerciales, restaurantes, así como lugares turísticos dentro y fuera de Chiclayo.
                </p>
            </>
        )
    }
    
];

const Location = () => {
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
            <Header title={"Sobre ubicación"} prePage={"/menu"}/>
            <div className='container mb-5'>
                {/* Sección de ubicación dentro del acordeón */}
                <div className="accordion" id="accordionExample">
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
            </div>
        </>
    );
}

export default Location;
