import { Route, Routes } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import PostDetail from "./components/PostDetail/PostDetail";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
