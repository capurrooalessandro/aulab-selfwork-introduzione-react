import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(formData);
        setFormData({ name: "", email: "" }) //svuota i campi dopo il submit
    }

    return (
        <section className="form-container">
            <h3 className="form-title">Form:</h3>
            <form onSubmit={handleSubmit} className="form-group">

                <div className="form-field">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="johndoe123@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-submit">Add to card</button>
            </form>

            {submitted && (
                <article className="card">
                    <h3>Name: {submitted.name}</h3>
                    <p>Email: {submitted.email}</p>
                </article>
            )}
        </section>
    )
}