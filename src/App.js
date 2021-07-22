/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 30/06/2021 - 14:56:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 30/06/2021
 * - Author          : surya12
 * - Modification    :
 **/
import Fabrics from './components/Fabrics';
import Ecofriendly from './components/Ecofriendly';
import Home from './components/Home';
import Leathers from './components/Leathers';
import Knits from './components/Knits';
import Brands from './components/Brands';
import Yarn from './components/Yarn'
import Navbard from './components/Navbard';
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fiber from './components/Fiber';
function App() {
	return (
		<div className="App">
			<Router>
				<Navbard> </Navbard>
				<Route exact path="/" component={Home}></Route>
				<Route path="/Fiber" component={Fiber}></Route>
				<Route exact path="/Yarn" component={Yarn}></Route>
				<Route  path="/Fabrics" component={Fabrics}></Route>
				<Route exact path="/Leathers" component={Leathers}></Route>
				<Route path="/Knits" component={Knits}></Route>
				<Route exact path="/Brands" component={Brands}></Route>
				<Route path="/Ecofriendly" component={Ecofriendly}></Route>
				
			</Router>
			
		</div>
	);
}
export default App;
