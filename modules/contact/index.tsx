import { Formik } from 'formik';
import { useState } from 'react';
import SectionHead from '@/components/sectionHead';
import styles from './styles.module.scss';
import Input from '@/components/input';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import { useDispatch } from '@/hooks/useRedux';
import sendMessage from '@/store/actions/app/sendMessage';

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};
const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const [validateOnChange, setValidateOnChange] = useState<boolean>(false);

  const initialValues: ContactFormType = {
    name: '',
    email: '',
    message: '',
  };

  const handleFormSubmit = (values: ContactFormType) => {
    console.log('log');
    dispatch(sendMessage(values));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead title="İletişim" />
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validateOnChange={validateOnChange}>
          {({ handleChange, handleSubmit: formikSubmit, values, setFieldValue, errors }) => (
            <div className={styles.container}>
              <Input name="name" onChange={handleChange} placeholder="Ad Soyad" />
              <Input name="email" onChange={handleChange} type="email" placeholder="Email" />
              <Textarea name="message" onChange={handleChange} placeholder="Mesaj" />
              <Button type="submit" label="Gönder" onClick={formikSubmit} />
            </div>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default Contact;
