export default function Titulo(props) {
  return (
    <div className="flex">
      <h1 className="">{props.children}</h1>
      <hr className=""/>
    </div>
  )
}