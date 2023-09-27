import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {

    return (
        <div className='application'>
<TodoProvider>
   < AppUI/ >
</TodoProvider>
</div>

    );
}

export default App;