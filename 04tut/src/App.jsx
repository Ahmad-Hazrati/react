import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<NewPost />} />
        <Route exact path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
