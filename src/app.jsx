import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import * as router from './views/routes'

ReactDOM.render(
	<Router routes={router.routes} />,
	document.getElementById('app')
);
