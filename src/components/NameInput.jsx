export default function NameInput({ name, setName }) {
    return (
        <>
            <label htmlFor="name" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    )
}