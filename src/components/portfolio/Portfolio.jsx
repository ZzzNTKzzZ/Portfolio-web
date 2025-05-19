function Portfolio({info}) {
    const {name, age, description} = info;

    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>{description}</p>
        </div>
    )
}

export default Portfolio