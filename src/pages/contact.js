import React from 'react';
import styled from '@emotion/styled';
import useForm from '../utils/useForm';
import useSubmit from '../utils/useSubmit';
import Loading from '../components/Loading';
import { breakpoints } from '../utils/breakpoints';
import { MdOutlineEmail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import MessageComponent from '../components/Message';
import SEO from '../components/SEO';

const MobileIcon = styled(FaMobileAlt)`
    color: var(--light-green);
    font-size: 2.3rem;
    margin: 0 1rem;

    @media ${breakpoints.md} {
        font-size: 2.7rem;
    }
`;

const EmailIcon = styled(MdOutlineEmail)`
    color: var(--light-green);
    font-size: 2.3rem;
    margin: 0 1rem;

    @media ${breakpoints.md} {
        font-size: 2.7rem;
    }
`;

const PageHeadingComponent = styled("div")`
    padding: 2rem 0;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h2 {
        font-size: 3rem;
        color: var(--light-green);
    }

    @media ${breakpoints.md} {
        font-size: 3.2rem;
    }
`;

const FormSection = styled("div")`
    margin: 3rem 0;

    @media ${breakpoints.lg} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const TextSection = styled("div")`

   h3 {
        font-size: 2.5rem;
        margin: 1rem;
        padding: 1rem 0;
        color: var(--dark-green);
    }
    p {
        font-size: 1.7rem;
        margin: 1rem;
        padding: 1rem 0;
        line-height: 1.80rem;
        color: var(--dark-grey)
    }
    a {
        display: block;
        color: var(--dark-grey);
        text-decoration: none;
        font-size: 1.7rem;
        padding: 1rem 0;
        margin: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    @media ${breakpoints.md} {
        h3 {
            font-size: 3rem;
        }

        p {
            font-size: 2.1rem;
        }

        a {
            font-size: 2.1rem;
        }
    }

    @media ${breakpoints.lg} {
        width: 400px;
        margin: 0 auto;
    }
`;

const FormInput = styled("form")`
    display: grid;
    grid-template-column: 1fr 1fr;
    margin: 1rem;
    gap: 3rem;
    box-sizing: border-box;
    background-color: var(--light-grey);
    border-radius: 15px;
    outline: none;
    .mapleSyrup {
        display: none;
    }
    
    legend {
        text-align: center;

        h4 {
            font-size: 2rem;
            color: var(--dark-green);
        }
    }
    
    fieldset {
        display: grid;
        border: none;
        label {
            font-size: 2rem;
            color: var(--dark-green);
            margin: 0.5rem 0;
        }
        input, textarea {
            height: 50px;
            border: none;
            border-radius: 15px;
            padding: 0.5rem;
            background-color: var(--white);
            margin: 1.5rem 0;
            color: var(--dark-grey);
            box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
            font-size: 2rem;
            &:focus, &:hover {
                border: 2px solid var(--light-green);
                outline: none;
            }
        }
        textarea {
            color: var(--dark-grey);
            padding: 15px;
        }

        button {
            width: 100px;
            height: 55px;
            margin: 0 auto;
            margin-bottom: 1rem;
            padding: 0.5rem;
            font-size: 1.5rem;

        }
    }

    @media ${breakpoints.md} {
        legend {
            h4 {
                font-size: 2.5rem;
            }
        }

        fieldset {
            label {
                font-size: 2.4rem;
            }

            input, textarea {
                font-size: 2.3rem;
            }

            button {
                height: 65px;
                width: 120px;
                font-size: 2rem;
            }
        }
    }

    @media ${breakpoints.lg} {
        width: 600px;
        margin: 0 auto;
    }
`;

    

export default function ContactPage() {

    const { values, updateValue } = useForm({
        name:'',
        companyName: '',
        email:'',
        mapleSyrup:'',
        phoneNumber:'',
        description:'',
    })

    const { submitForm, error, message, loading } = useSubmit({values})

    if (message) {
        return <MessageComponent message={message} />
    }

    if (error) {
        return <MessageComponent message={error} />
    }

    if (loading) {
        return <Loading />
    }

    return ( 
        <>
            <SEO />
            <PageHeadingComponent>
                <h2>Speak To Us</h2>
            </PageHeadingComponent>
            <FormSection>
                <TextSection>
                    <h3>Performant Web Design</h3>
                    <p>Fast and Powerful Website Designers</p>
                    <p>Fill the form and let us know what challanges you are facing if you have a website right now and how you want to represent your brand online</p>
                    <a href="mailto:knunezweb@gmail.com">
                        <EmailIcon />knunezweb@gmail.com
                    </a>
                    <a href="tel:13472379288">
                        <MobileIcon />(347)237-9288
                    </a>
                </TextSection>
                <FormInput onSubmit={submitForm}>
                    <fieldset disabled={loading}>
                        <legend>
                            <h4>
                                Let's Talk!
                            </h4>
                        </legend>
                        <label htmlFor="name">Name :</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={updateValue}
                        />
                        <label htmlFor="companyName">Company Name :</label>
                        <input 
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={values.companyName}
                            onChange={updateValue}
                            />
                        <label htmlFor="email">Email :</label>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={updateValue}
                        />
                        <input 
                            type="mapleSyrup"
                            name="mapleSyrup"
                            id="mapleSyrup"
                            value={values.mapleSyrup}
                            onChange={updateValue}
                            className="mapleSyrup"
                        />
                        <label htmlFor="phoneNumber">Phone Number :</label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={values.phoneNumber}
                            onChange={updateValue}
                        />
                        <label htmlFor="description">Tell us what is it you want to do :</label>
                        <textarea 
                            value={values.description}
                            onChange={updateValue}
                            id="description"
                            name="description"
                            cols={15}
                            rows={6}
                        />
                    </fieldset>
                    <fieldset>
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </fieldset>
                </FormInput>
            </FormSection>
        </>
    )
}

