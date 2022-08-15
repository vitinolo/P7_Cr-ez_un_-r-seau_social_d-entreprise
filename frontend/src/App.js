
import {Routes, Route} from "react-router-dom";
import ConnexionPage from "./pages/ConnexionPage";
import InscriptionPage from "./pages/InscriptionPage";
import FeedPostsPage from "./pages/FeedPostsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<ConnexionPage/>} />
        <Route path="/Inscription" element={<InscriptionPage/>} />
        <Route path="/Feed" element={<FeedPostsPage/>} />
        <Route path="/*" element={<NotFoundPage/> } />
      </Routes>
    </div>
  );
};

export default App;
