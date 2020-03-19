import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
    // setTestDeviceIDAsync
} from "expo-ads-admob";

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
            } = await movies.getNowPlaying());
        } catch (error) {
            // this.setState({ error: "Can't get Movies." });
            console.log(error);
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

        // AdMobInterstitial.setTestDeviceID("EMULATOR");
        // ALWAYS USE TEST ID for Admob ads
        // AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
        // AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
        //     console.log("interstitialDidLoad")
        // );
        // AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
        //     console.log("interstitialDidFailToLoad")
        // );
        // AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
        //     console.log("interstitialDidOpen")
        // );
        // AdMobInterstitial.addEventListener("interstitialDidClose", () =>
        //     console.log("interstitialDidClose")
        // );
        // AdMobInterstitial.addEventListener(
        //     "interstitialWillLeaveApplication",
        //     () => console.log("interstitialWillLeaveApplication")
        // );
    }

    // componentWillUnmount() {
    //     AdMobInterstitial.removeAllListeners();
    // }

    // showInterstitial = async () => {
    //     console.log("==========");
    //     AdMobInterstitial.setAdUnitID("ca-app-pub-6088344770092597/3209014200");
    //     await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    //     await AdMobInterstitial.showAdAsync();
    //     // AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd());
    // };

    render() {
        const { loading, upcoming, popular, nowPlaying } = this.state;
        return (
            <MoviesPresenter
                upcoming={upcoming}
                popular={popular}
                nowPlaying={nowPlaying}
                loading={loading}
                showInterstitial={this.showInterstitial}
            />
        );
    }
}
