import Main from "./components/main"
import { Link } from "react-router-dom"
import "./App.css"

function App() {
	return (
		<div className='App'>
			<nav class='navbar navbar-expand-lg navbar-dark bg-info'>
				<a class='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<Link to='/' class='nav-item active'>
							<a class='nav-link text-light' href='#'>
								Beranda <span class='sr-only'>(current)</span>
							</a>
						</Link>
						<Link to='/event' class='nav-item'>
							<a class='nav-link text-light' href='#'>
								Event
							</a>
						</Link>
						<Link to='/keranjang' class='nav-item'>
							<a class='nav-link text-light' href='#'>
								Keranjang
							</a>
						</Link>
					</ul>
				</div>
			</nav>
			<Main />
		</div>
	)
}

export default App
