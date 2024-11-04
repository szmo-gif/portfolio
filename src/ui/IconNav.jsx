export default function IconNav({href, icone, style}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={style}> 
    <i className={icone}></i>
    </a>
  )
}