import { TextInput, PasswordInput, Textarea,Text, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Contact(){
    const [visible, { toggle }] = useDisclosure(false);
    const navigate = useNavigate()
  const form = useForm({
    initialValues: { name: '', email: '', subject: '', message: ''},
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  async function handleSubmit() {
    
    const value = form.values
    console.log(value)
    axios.post("http://localhost:3001/add-contact",{
      value
    }).then((response)=>{
      console.log(response)
      navigate("/user/login")
    })
    
    console.log(value);
  }
    return (
        <div>
            <Box maxWidth={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className="form">
        <Text  ta="center" fz="xl" fw={700}>
          Contact Form
        </Text>
        <div className='forminside'>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your name"
          {...form.getInputProps('name')}
          error={form.errors.name}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
          error={form.errors.email}
        />
          <TextInput
          withAsterisk
          label="Subject"
          placeholder="Enter your Subject"
          {...form.getInputProps('subject')}
          error={form.errors.subject}
        />
         <Textarea
        placeholder="Your message"
        // label="Autosize with no rows limit"
        autosize
        minRows={2}
        {...form.getInputProps('message')}
        error={form.errors.message}
      />
        
        
        </div>
        <Group justify="center" mt="md">
  <Button type="submit"  loaderPosition="center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
    Submit
  </Button>
</Group>

      
      </form>
      <ToastContainer />
    </Box>

        </div>
    )
}
