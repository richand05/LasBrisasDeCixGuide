import { useState } from 'react';
import Luggage from '../../assets/img/Luggage.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'
import Header from '../../components/Header/Header';

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>Agregar esta guía web como acceso directo en su dispositivo móvil</div>),
        content: (
            <>
                <p>
                    Para facilitar el acceso a esta guía, le recomendamos añadirla a la pantalla principal de su dispositivo móvil. A continuación, le indicamos cómo hacerlo dependiendo del sistema operativo de su dispositivo:
                </p>
                <p>
                    <div className='mb-2'>
                        <strong>Dispositivos Apple:</strong>
                    </div>
                    <ol type="A">
                        <li>Para una mejor experiencia, se recomienda abrir el enlace de esta guía en el navegador Chrome o Safari.</li>
                        <li>Pulsar en la opción de compartir (ícono de cuadro con una flecha hacia arriba).</li>
                        <li>Seleccionar la opción "Añadir a la pantalla principal".</li>
                    </ol>
                    A continuación, encontrará un video explicativo que le guiará en el proceso para dispositivos Apple:
                </p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/V6A3B7M-M6I?si=bGQcHTbqRNGjTFVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className='mt-4'>
                    <div className='mb-2'>
                        <strong>Dispositivos Android:</strong>
                    </div>
                    <ol type="A">
                        <li>Abrir el enlace de esta guía en el navegador Chrome.</li>
                        <li>Tocar el ícono de menú (tres puntos verticales) en la esquina superior derecha del navegador.</li>
                        <li>Seleccionar la opción "Añadir a la pantalla de inicio".</li>
                    </ol>
                    A continuación, encontrará un video explicativo que le guiará en el proceso para dispositivos Android:
                </p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ImfF5l_bBzw?si=m6z3gTTtH1Wev_7S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </>
        )
    },
    {
        id: 'item2',
        title: (<div>Información de check-in</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={Luggage} style={{ width: "15em" }} alt="Luggage" className="img-fluid rounded" />
                </div>
                <p>
                    El check-in se realiza a partir de la 01 de la tarde (PM).
                </p>
                <p><strong>¿Desea llegar antes de esa hora?</strong></p>
                <p>
                    Si desea llegar antes de la 01 de la tarde y el apartamento aún está ocupado, puede dejar su equipaje con nosotros. En ese caso, le pedimos que regrese a partir de 01 de la tarde para el check-in. Sin embargo, si el apartamento está desocupado a su llegada, podrá ingresar antes de la hora establecida.
                </p>
                <p><strong>¿Por qué no se puede ingresar a las 11 de la mañana y debe esperar estas horas demás?</strong></p>
                <p>
                    Para garantizar su comodidad y una estancia placentera, necesitamos ese intervalo de tiempo entre las 11 a.m. y 01 p.m. para realizar la limpieza completa del apartamento.
                </p>
                <p>
                    <strong>NOTA:</strong> Si desea ingresar antes de la hora del check-in (01 pm), por favor, contáctenos. Estaremos encantados de revisar la posibilidad de ofrecerle un acceso anticipado.
                </p>
            </>
        )
    },
    {
        id: 'item3',
        title: (<div>Información sobre el clima</div>),
        content: (
            <>
                <div>
                    <p>
                        La ciudad de Chiclayo tiene un clima agradable, ideal para disfrutar de sus atractivos. A continuación, le resumimos el clima general:
                    </p>
                    <ul>
                        <li><strong>Temporada de calor:</strong> De diciembre a marzo</li>
                        <li><strong>Temporada fresca:</strong> De junio a octubre, Chiclayo experimenta temperaturas más frescas</li>
                        <li><strong>Temporada de transición:</strong> Abril, mayo y noviembre suelen ser meses de transición.</li>
                    </ul>
                    <p>
                        Para obtener información actualizada sobre el clima, le recomendamos visitar
                        <a href="https://www.clima.com/peru/lambayeque/chiclayo" target='_blank'> Clima en Chiclayo</a>.
                    </p>
                </div>

            </>
        )
    }
];

const BeforeTravel = () => {
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
            <Header title={"Antes de viajar"} prePage={"/menu"}/>

            <div className='container container-description'>
                <p>
                    En esta sección encontrará algunas recomendaciones importantes a tener en cuenta antes de viajar a la ciudad de Chiclayo:
                </p>
            </div>

            <div className="container mb-5">
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

export default BeforeTravel;
