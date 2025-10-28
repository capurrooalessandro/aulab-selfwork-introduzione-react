export default function EmailInput({ email, setEmail }) {
    return (
        <>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="johndoe123@email.com"
                onChange={(e) => setEmail(e.target.value)}
            />
        </>
    )
}