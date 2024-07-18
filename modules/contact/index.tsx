import SectionHead from '@/components/sectionHead';
import styles from './styles.module.scss';
import Input from '@/components/input';
import Button from '@/components/button';
import Textarea from '@/components/textarea';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead title="İletişim" />
        <form>
          <div className={styles.container}>
            <Input placeholder="Ad Soyad" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Mesaj" />
            <Button type="submit" label="Gönder" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
