import React from "react"
import { Switch, Route } from "react-router-dom"

import Beranda from "./beranda"
import event from "./event"
import keranjang from "./keranjang"

const main = () => (
	<Switch>
		<Route exact path='/' component={Beranda} />
		<Route path='/event' component={event} />
		<Route path='/keranjang' component={keranjang} />
	</Switch>
)

export default main
