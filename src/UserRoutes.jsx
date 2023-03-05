import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

const Home = lazy(() => import("./modules/TheMovies/Home/Home"));
const Movies = lazy(() => import("./modules/TheMovies/TheMovies"));
const MovieDetails = lazy(() =>
  import("./modules/TheMovies/Movies/MovieDetails/MovieDetails")
);
const Cast = lazy(() =>
  import("./modules/TheMovies/Movies/MovieDetails/Cast/Cast")
);
const Reviews = lazy(() =>
  import("./modules/TheMovies/Movies/MovieDetails/Reviews/Reviews")
);

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <FidgetSpinner
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
