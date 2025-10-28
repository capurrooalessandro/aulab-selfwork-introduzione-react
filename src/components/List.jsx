import Items from "./Items"

export default function List({ children }) {
    return (
        <ul>
            {children}
        </ul>
    )
}

List.Items = Items