import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import PostDetail from "./components/PostDetail/PostDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
