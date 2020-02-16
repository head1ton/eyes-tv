import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title")
        };
    };

    constructor(props) {
        super(props);
        const {
            navigation: {
                state: {
                    params: {
                        id,
                        isMovie,
                        posterPhoto,
                        backgroundPhoto,
                        title,
                        voteAvg,
                        overview
                    }
                }
            }
        } = props;
        // console.log("______ : ", backgroundPhoto);

        this.state = {
            id,
            isMovie,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading: true
        };
    }

    async componentDidMount() {
        const { isMovie, id } = this.state;
        let error, genres, overview, status, date, backgroundPhoto;
        try {
            if (isMovie) {
                ({
                    data: {
                        genres,
                        overview,
                        status,
                        release_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await movies.getMovie(id));
            } else {
                ({
                    data: {
                        genres,
                        overview,
                        status,
                        first_air_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await tv.getShow(id));
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.setState(prev => {
                return {
                    ...prev,
                    loading: false,
                    genres,
                    backgroundPhoto,
                    overview,
                    status,
                    date
                };
            });
        }
    }

    render() {
        const {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading,
            date,
            status,
            genres
        } = this.state;
        // console.log("id : ", id);
        // console.log("posterPhoto : ", posterPhoto);
        // console.log("backgroundPhoto : ", backgroundPhoto);
        // console.log("title : ", title);
        // console.log("voteAvg : ", voteAvg);
        // console.log("overview : ", overview);
        return (
            <DetailPresenter
                id={id}
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
                date={date}
                status={status}
                isMovie={isMovie}
                genres={genres}
            />
        );
    }
}
