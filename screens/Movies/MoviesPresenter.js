import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import { BG_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import AdMobB from "../../components/AdMobB";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const BannerView = styled.View`
    /* flex: 1; */
    /* justify-content: center;
    align-items: center; */
    position: absolute;
    bottom: 0;
`;

const PaddingView = styled.View`
    background-color: ${BG_COLOR};
    padding-bottom: 90px;
`;

const Touchable = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 13px;
    color: #ffffff;
`;

const MoviesPresenter = ({
    loading,
    upcoming,
    popular,
    nowPlaying,
    showInterstitial
}) =>
    loading ? (
        <Loader />
    ) : (
        <>
            <Container>
                {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
                {upcoming ? (
                    <>
                        {/* <Touchable onPress={() => showInterstitial()}>
                        <Text>Interstitial</Text>
                    </Touchable> */}
                        <Section title="🏖 Upcoming Movies">
                            {upcoming
                                .filter(movie => movie.poster_path !== null)
                                .map(movie => (
                                    <MovieItem
                                        key={movie.id}
                                        id={movie.id}
                                        posterPhoto={movie.poster_path}
                                        title={movie.title}
                                        voteAvg={movie.vote_average}
                                    />
                                ))}
                        </Section>
                    </>
                ) : null}
                {popular ? (
                    <Section title="🚀 Popular Movies">
                        {popular
                            .filter(movie => movie.poster_path !== null)
                            .map(movie => (
                                <MovieItem
                                    horizontal={true}
                                    key={movie.id}
                                    id={movie.id}
                                    posterPhoto={movie.poster_path}
                                    title={movie.title}
                                    overview={movie.overview}
                                    voteAvg={movie.vote_average}
                                />
                            ))}
                    </Section>
                ) : null}
            </Container>
            <PaddingView />
            <BannerView>
                <AdMobB />
            </BannerView>
        </>
    );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
    showInterstitial: PropTypes.func
};

export default MoviesPresenter;
