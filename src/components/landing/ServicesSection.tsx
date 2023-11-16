import './ServicesSectionStyles.css'; // Import your CSS file

import female_doctor from '../../assets/3d-female-doctor.png';
import male_doctor_image from '../../assets/3d-doctor-male-standing.png';
import male_doctor from '../../assets/3d-doctor-male.png';

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Service 1',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Tenetur labore repudiandae, consectetur odit neque id eveniet, 
      laborum enim, nostrum obcaecati vitae accusantium ipsam nobis illo 
      voluptatibus nisi. Debitis, ab rerum!`,
      image: female_doctor,
    },
    {
      id: 2,
      title: 'Service 2',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Tenetur labore repudiandae, consectetur odit neque id eveniet, 
      laborum enim, nostrum obcaecati vitae accusantium ipsam nobis illo 
      voluptatibus nisi. Debitis, ab rerum!`,
      image: male_doctor_image,
    },
    {
      id: 3,
      title: 'Service 3',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Tenetur labore repudiandae, consectetur odit neque id eveniet, 
      laborum enim, nostrum obcaecati vitae accusantium ipsam nobis illo 
      voluptatibus nisi. Debitis, ab rerum!`,
      image: male_doctor,
    },
    // Add more services as needed
  ];

  return (
    <>
      <section className="min-h-[70vh]">
        <div className="font-robo font-extrabold text-4xl text-ghost_white-300 text-center">
            <h2>Our Services</h2>
        </div>
        <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`service-item ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="service-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
      </section>
      
    </>
  )
}

export default ServicesSection