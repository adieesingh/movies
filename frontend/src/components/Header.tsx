interface HeaderProps{
    text:string
}
const front ="font-bold text-2xl text-center"
export function Header(props:HeaderProps){
    return <h2 className={`${front}`}>{props.text}</h2>
}