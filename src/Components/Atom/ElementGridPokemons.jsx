const ElementGridPokemons = ({img, name, id}) => {
    return (
        <div key={id} className="templateViewPokemons">
            <p className="idPokemons">{id}</p>
            <img src={img} alt={name} />
        </div>
    )
}

export default ElementGridPokemons