import React from "react";
import Row from "../Row";
import requests from "../requests";
import Banner from "../Banner";
import Nav from "../Nav";

export default function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetfilxOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}
