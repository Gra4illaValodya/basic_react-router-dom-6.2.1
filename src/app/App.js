import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "../header/Header";
import Main from '../main/Main';
import Users from '../users/Users';
import UserId from '../users/UserId';
import Error from '../error/Error';

export default function App() {
    return(
        <div>     
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/users" element={<Users />} />
                    <Route path="/users/:userName" element={<UserId />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
