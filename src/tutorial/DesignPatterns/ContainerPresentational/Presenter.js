const Presenter = ({data}) => {
    return <>
        {
            data.map(a => {
                return <div key={a.id}>
                    <p>{a.id} : {a.login}</p>
                </div>
            })
        }
    </>
}

export default Presenter;