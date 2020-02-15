import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        let upcoming, popular, nowPlaying, error;
        try {
            // axios 0.18.0
            // const upcoming = await movies.getUpcoming();
            // const popular = await movies.getPopular();
            // const nowPlaying = await movies.getNowPlaying();
            // console.log(upcoming, popular, nowPlaying);
            ({
                data: { results: upcoming }
            } = await movies.getUpcoming());
            ({
                data: { results: popular }
            } = await movies.getPopular());
            ({
                data: { results: nowPlaying }
            } = await movies.nowPlaying());
        } catch {
            // this.setState({ error: "Can't get Movies." });
            error = "Can't get Movies.";
        } finally {
            // this.setState({ loading: false });
            this.setState({
                loading: false,
                error,
                upcoming,
                popular,
                nowPlaying
            });
        }
    }

    render() {
        const { loading, upcoming, popular, nowPlaying } = this.state;
        return <MoviesPresenter loading={loading} />;
    }
}
