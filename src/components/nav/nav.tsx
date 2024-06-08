import { Link } from '../../../node_modules/react-router-dom/dist/index'
import './styles.css'

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/bag' className="nav-link">Sacola</Link></li>
          <li><Link to='/payment' className="nav-link">Pagamento</Link></li>
          <li>Confirmaçâo</li>
        </ul>
      </nav>
    </> 
  )
}