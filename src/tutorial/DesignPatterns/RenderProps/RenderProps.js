const RenderProps = props => <>
    {props.render('Ali')}
    {props.renderx('WTF')}
</>;

const Hi = () => {
    return <RenderProps render={(name) => <div>salam {name}!</div>} renderx={(name) => <p>bye bye {name}</p>}/>
}
export default Hi;