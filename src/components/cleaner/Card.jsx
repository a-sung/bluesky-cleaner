function Card({header, message, action, children}) {
    return (
        <section className="cleaner-card">
            <div>
                <h1>{header}</h1>
                <h2>{message}</h2>
            </div>  
            <div>
                {children}
            </div>  
            <div>
                <button onClick={action}>Delete</button>
            </div>
        </section>
    )
}

export default Card;