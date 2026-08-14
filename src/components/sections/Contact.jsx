import { useState } from 'react';

function Contact() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const handlePhoneInput = (e) => {
    let value = e.target.value;
    if (!value.startsWith('+57')) {
      value = '+57' + value.replace(/^\+57/, '');
    }
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        form.reset();
        setPhone('+57');
      } else {
        setStatus('Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('Error de conexión.');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>Contacto</span>
        </div>
        <div className="text">
          <div className="topic">¿Tiene algún proyecto?</div>
          <p>
            ¿Estás buscando dar vida a tu próximo proyecto? ¡Estás en el lugar correcto! Como
            desarrollador apasionado y dedicado, me encanta tener la oportunidad de transformar
            ideas en realidad. Mi portfolio es un reflejo de mi rango de habilidades y experiencia.
            Si te gusta lo que ves y tienes un proyecto en mente, no dudes en contactarme. ¡Estoy
            listo para llevar tus ideas al siguiente nivel! ¡Hagamos algo grandioso juntos!
          </p>
          <div className="button">
            <h3>Charlemos</h3>
            {status && (
              <div
                className="status-message"
                style={{
                  color: status.includes('éxito') ? '#08b70e' : '#ff4d4d',
                  marginBottom: '20px',
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                {status}
              </div>
            )}
            <form
              action="https://formsubmit.co/ajax/romerojesusdavid76@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <p>
                <label>Nombres y Apellidos</label>
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
  );
}

export default Contact;
