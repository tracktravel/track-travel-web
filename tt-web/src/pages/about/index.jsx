import React from 'react';
import styles from "./index.module.css"
import aboutImg from '../../assets/About.jpg'
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>About</h1>
      </div>
      <div className={styles.p1}>
        <Image className={styles.p1Image} src={aboutImg}></Image>
        <div>
          <h1>Nuestra historia</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ipsam aut repudiandae omnis, aperiam animi tenetur neque illo similique. Ab architecto perferendis ipsa consequuntur perspiciatis voluptates eos quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum perferendis, sapiente deserunt, quas provident inventore laboriosam, laudantium natus ipsa possimus magni! Cumque quae tempora doloribus exercitationem accusamus, numquam nesciunt.
            Corrupti aliquid excepturi fugit fuga facere, fugiat officiis obcaecati accusamus quas repellendus at eveniet commodi minus tenetur, necessitatibus quasi voluptatem, praesentium sunt mollitia. Voluptas, aliquid repellat dignissimos nam expedita reprehenderit?
            Voluptatibus veniam officiis quis sed in cum officia minima provident, harum magnam, qui aliquid.</p>
        </div>
      </div>
      <div className={styles.p1}>
        <div>
          <h1>Nuestra historia</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ipsam aut repudiandae omnis, aperiam animi tenetur neque illo similique. Ab architecto perferendis ipsa consequuntur perspiciatis voluptates eos quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum perferendis, sapiente deserunt, quas provident inventore laboriosam, laudantium natus ipsa possimus magni! Cumque quae tempora doloribus exercitationem accusamus, numquam nesciunt.
            Corrupti aliquid excepturi fugit fuga facere, fugiat officiis obcaecati accusamus quas repellendus at eveniet commodi minus tenetur, necessitatibus quasi voluptatem, praesentium sunt mollitia. Voluptas, aliquid repellat dignissimos nam expedita reprehenderit?
            Voluptatibus veniam officiis quis sed in cum officia minima provident, harum magnam, qui aliquid.</p>
        </div>
        <Image className={styles.p2Image} src={aboutImg}></Image>
      </div>
    </div>
  );
}

export default About;
