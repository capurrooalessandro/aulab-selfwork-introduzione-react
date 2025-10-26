export default function List({ list }) {
    return (
        <ul>
            {list.map((list) => {
                return (
                    <li className="array-list" key={list}>{list}</li>
                )
            })}
        </ul>
    )
}