import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookProvider } from "./components/BookContext";
import BookPage from "./components/BookPageReview/BookPage";
import BookList from "./components/BookStyles/BookList";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import Favorites from "./components/FavoriteBooks";
import NewBook from "./components/NewBook/NewBookForm";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <h3 id="bookList-heading">Popular Now</h3>
                <BookList />
              </>
            }
          />
          <Route path="/booklist/:id" element={<BookPage />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/addBook" element={<NewBook />} />
        </Routes>
      </BookProvider>

      <Footer />
    </div>
  );
}

export default App;
