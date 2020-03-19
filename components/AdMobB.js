import React from "react";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
    // setTestDeviceIDAsync
} from "expo-ads-admob";

const AdMobB = () => (
    <AdMobBanner
        bannerSize="smartBannerPortrait" //fullBanner
        adUnitID="ca-app-pub-6088344770092597/9701080991"
        servePersonalizedAds={true}
    />
);

export default AdMobB;
