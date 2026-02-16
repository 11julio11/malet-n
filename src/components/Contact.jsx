import { useState } from 'react'

function Contact() {
    const [phone, setPhone] = useState('')

    const handlePhoneInput = (e) => {
        let value = e.target.value
        if (!value.startsWith('+57')) {
            value = '+57' + value.replace(/^\+57/, '')
        }
        setPhone(value)
    }

    return (
        <section className="contact" id="contact">
            <div className="content">
                <div className="title"><span>Contacto</span></div>
                <div className="text">
                    <div className="topic">¿Tiene algún proyecto?</div>
                    <p>
                        ¿Estás buscando dar vida a tu próximo proyecto? ¡Estás en el lugar correcto! Como
                        desarrollador apasionado y dedicado, me encanta tener la oportunidad de transformar ideas
                        en realidad. Mi portfolio es un reflejo de mi rango de habilidades y experiencia. Si te
                        gusta lo que ves y tienes un proyecto en mente, no dudes en contactarme. ¡Estoy listo
                        para llevar tus ideas al siguiente nivel! ¡Hagamos algo grandioso juntos!
                    </p>
                    <div className="button">
                        <h3>Charlemos</h3>
                        <br /><br />
                        <form action="https://formsubmit.co/romerojesusdavid76@gmail.com" method="POST">
                            <p>
                                <label>Nombres  y Apellidos</label>
                                <input type="text" name="fullname" />
                            </p>

                            <p>
                                <label>Correo Electronico</label>
                                <input type="email" name="email" />
                            </p>

                            <p>
                                <label>Numero de Telefono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handlePhoneInput}
                                />
                            </p>

                            <p>
                                <label>Asunto</label>
                                <input type="text" name="affair" />
                            </p>

                            <p className="block">
                                <label>Mensaje</label>
                                <textarea name="message" rows="3"></textarea>
                            </p>

                            <input type="hidden" name="_next" value="https://lucent-kitsune-13784e.netlify.app" />
                            <input type="hidden" name="_captcha" value="false" />

                            <p className="block">
                                <button type="submit">Enviar</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
