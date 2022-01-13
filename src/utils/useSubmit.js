import { useState } from 'react';


export default function useSubmit({values}) {

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

   

    async function submitForm(e) {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);

       

        const body = {
            name:values.name,
            companyName: values.companyName,
            email:values.email,
            mapleSyrup:values.mapleSyrup,
            phoneNumber:values.phoneNumber,
            description:values.description,
        }

        const res = await fetch(`${process.env.GATSBY_SEVERLESS_BASE}/sendEmail` , {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        });
        const text = JSON.parse(await res.text());

        if (res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);

        } else {
            setLoading(false);
            setMessage('Success! We will call you in under 24hrs and please check your email when you can!')
        }
        
        const response = await fetch(`${process.env.GATSBY_SEVERLESS_BASE}/receiveFormData` , {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        });
        const formData = JSON.parse(await response.text());

        if (res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(formData.message);

        } else {
            setLoading(false);
            setMessage('Success! We will call you in under 24hrs and please check your email when you can!')
        }
    }

    return { 
        error,
        message,
        loading,
        submitForm,
    }

}