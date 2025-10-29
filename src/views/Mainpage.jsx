import Navbar from "../components/Navbar";
import Header from "../components/Header";
import List from "../components/List";
import Counter from "../components/Counter";
import Form from "../components/Form";
import LoadingData from "../components/LoadingData";

import { useState } from "react";

let idCounter = 0;

export default function Mainpage() {
    const list = ["Marco", "Alessandro", "Matteo", "Simone", "Roberto"];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formData, setFormData] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData([
            ...formData, 
            {id: idCounter++, name: name, email: email}
        ]);
        setSubmitted(formData);
    }
    return (
        <>
            <Header title="Home" />

            <List>
                {list.map((list) => {
                    return (
                        <List.Items key={list}>{list}</List.Items>
                    )
                })}
            </List>

            <Counter/>

            <LoadingData/>

            <Form handleSubmit={handleSubmit}>
                <Form.Title>Form:</Form.Title>
                <Form.Group>
                    <Form.Field>
                        <Form.NameInput name={name} setName={setName}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.EmailInput email={email} setEmail={setEmail}/>
                    </Form.Field>

                    <Form.SubmitButton>Add to card</Form.SubmitButton>
                </Form.Group>
            </Form>
            
            {submitted && formData.map(({name, email, id}) => 
                <Form.Card key={id}>
                    <Form.CardName>Name: {name}</Form.CardName>
                    <Form.CardEmail>Email: {email}</Form.CardEmail>
                </Form.Card>
            )}
        </>
    )
}