import React from 'react'
import Image from 'next/image'
import styles from './Team.module.css'

const team = [
  {
    name: 'David Ezequiel Cunha Quinteros',
    rol: 'Estética y estructura de front',
    linkedin: 'https://www.linkedin.com/in/david-cunha-quinteros/',
    github: 'https://github.com/regenerik',
    image: '../../assets/team/david.jpg'
  },
  {
    name: 'Emiliano Villa',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/emiliano-villa-686364241/',
    github: 'https://github.com/e0212',
    image: '../../assets/team/emi.jpg'
  },
  {
    name: 'Tomás Arregui Bellino',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/tomasarreguib/',
    github: 'https://github.com/noisyBrain',
    image: '../../assets/team/tomi.jpg'
  },
  {
    name: 'Florencia Fernandez',
    rol: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/florencia-fernandez-fullstack-developer/',
    github: 'https://github.com/FlorenciaF1',
    image: '../../assets/team/flor.jpg'
  },
  {
    name: 'Andres Felipe Pastor Ferrer',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/andres-felipe-pastor-ferrer-8080b01ab/',
    github: 'https://github.com/MrAleew',
    image: '../../assets/team/andres.jpg'
  },
  {
    name: 'Alan Delgado',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/alan-delgado8/',
    github: 'https://github.com/alandelgado10',
    image: '../../assets/team/alan.jpg'
  },
  {
    name: 'Geovanni Casadiegos Rodriguez',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    github: '',
    image: '../../assets/team/geo.jpg'
  },
  {
    name: 'Carlos Mario Reyes Pena',
    rol: 'Full Stack',
    linkedin: 'https://www.linkedin.com/in/carlosmario-pro/',
    github: 'https://github.com/CarlosMario-Pro',
    image: '../../assets/team/carlosmario.jpg'
  },
  {
    name: 'Matias Ezequiel Santero Ojeda',
    rol: 'Diseño UX/UI Marketing',
    linkedin: 'https://www.linkedin.com/in/matias-santero-ojeda/',
    github: '',
    image: '../../assets/team/mati.jpg'
  },
  {
    name: 'Bastián Alberto Garces Galvez',
    rol: 'Full Stack',
    linkedin: 'https://www.linkedin.com/in/bastian-garces-759a81140',
    github: 'https://github.com/MrSix13',
    image: '../../assets/team/bastian.jpg'
  },
  {
    name: 'Hernan Javier Rinaldi',
    rol: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/hernan-javier-rinaldi/',
    github: 'https://github.com/HernanRinaldi',
    image: '../../assets/team/herni.jpg'
  },
  {
    name: 'Federico Birman',
    rol: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/federico-birman-b11695269/',
    github: 'https://github.com/02fede02',
    image: '../../assets/team/fede.jpg'
  },
  {
    name: 'Luis Carlos Rangel Lagunes',
    rol: 'Backend',
    linkedin: 'https://www.linkedin.com/in/luisrangel-lagunes/',
    github: 'https://github.com/luisillo619',
    image: '../../assets/team/luiscarlos.jpg'
  }
]

const Team = () => {
  return (
    <div className={styles.container}>
      {
        team.map((person, index) => (
          <div key={index} className={styles.container__card}>
            <Image src={`/${person.image}`} width={150} height={150}/>
            <h1>{person.name}</h1>
            <p>{person.rol}</p>
            <p>Linkedin: {person.linkedin}</p>
            <p>Github: {person.github}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default Team
