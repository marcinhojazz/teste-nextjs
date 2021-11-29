import Titulo from './Titulo';

// Definicao do layout
interface LayoutProps {
  titulo: string
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`style.layout-content`}>
      <Titulo>{props.titulo}</Titulo>
      <div className="">{props.children}</div>
    </div>
  )
}
