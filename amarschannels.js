class Channel {
constructor(name, img, url, category, description, status) {
this.name = name;
this.img = img;
this.url = url;
this.category = category;
this.description = description;
this.status = status;
this.id = 0;
this.rating = 0;
}
}

const channels = [
new Channel("20th Century Radio", "https://cdn-radiotime-logos.tunein.com/s129131q.png", "http://audioartsradio.com:6006/;", "OTR", "", "dead"),
new Channel("210 Holy Hip Hop", "https://cdn-profiles.tunein.com/s188550/images/logog.jpg", "http://108.59.11.81:8167/;", "Music, CHH, Hip-Hop", "", "dead"),
new Channel("Antioch OTR", "https://cdn-radiotime-logos.tunein.com/s50924q.png", "http://209.95.56.101:8000/listen", "OTR", "", "dead"),
new Channel("AP News", "https://cdn-radiotime-logos.tunein.com/p686763q.png", "http://apnews.streamguys1.com/apnews", "News", "", "live"),
new Channel("BBC Radio 4", "https://cdn-radiotime-logos.tunein.com/s25419q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm", "News, Talk, Comedy, Drama", "", "live"),
new Channel("BBN English", "https://cdn-radiotime-logos.tunein.com/s20438q.png", "https://stream2.bbnradio.org:8443/english", "Christianity, Talk, Music, Worship", "", "live"),
new Channel("Bloomberg TV", "https://cdn-profiles.tunein.com/s47135/images/logog.png", "http://tunein.streamguys1.com/BloombergTV", "Talk, News, Finance, TV", "", "live"),
new Channel("Bott Radio Network", "https://cdn-profiles.tunein.com/s31976/images/logog.png", "https://ic1.sslstream.com/bottradio.mp3", "Talk, Christianity", "", "live"),
new Channel("C-SPAN Radio", "https://cdn-profiles.tunein.com/s28047/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3", "Talk, News, TV", "", "live"),
new Channel("CEDM Radio", "https://cdn-profiles.tunein.com/s269340/images/logog.png", "http://173.82.208.105:8096/stream", "Music, EDM, CEDM, Christianity", "", "live"),
new Channel("CNBC", "https://cdn-profiles.tunein.com/s110052/images/logog.png", "http://tunein.streamguys1.com/cnbc", "Talk, News, Finance, TV", "", "live"),
new Channel("CNN", "https://cdn-profiles.tunein.com/s20407/images/logog.png", "http://tunein.streamguys1.com/cnn-new", "Talk, News, TV", "", "live"),
new Channel("CNN International", "https://cdn-profiles.tunein.com/s292162/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3", "Talk, News, TV", "", "live"),
new Channel("ESPN Radio", "https://cdn-profiles.tunein.com/s25876/images/logog.jpg", "http://live.wostreaming.net/direct/espn-network-48", "Talk, Sports", "", "live"),
new Channel("ESPN TV Show Podcasts", "https://cdn-radiotime-logos.tunein.com/s224540q.png", "http://tunein.streamguys1.com/ESPNTV", "Talk, Sports, TV", "", "live"),
new Channel("ESPN2", "https://www.logolynx.com/images/logolynx/e5/e5d85d854d02d7cfa3d1139508b84c73.jpeg", "http://tunein.streamguys1.com/ESPNTV", "Talk, Sports, TV", "", "dead"),
new Channel("ESPNews", "https://www.dieselhdtv.com/wp-content/uploads/2019/06/espnews_color.png", "http://espn-news.akacast.akamaistream.net/7/44/126490/v1/espn.akacast.akamaistream.net/espn-news?c_yob=2000&c_gender=m&source=TuneIn", "Talk, Sports, TV", "", "dead"),
new Channel("ESPNU", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/ESPN_U_logo.svg/512px-ESPN_U_logo.svg.png", "http://espnu.akacast.akamaistream.net/7/313/126490/v1/espn.akacast.akamaistream.net/espnu?c_yob=2000&c_gender=m&source=TuneIn", "Talk, Sports, TV", "", "dead"),
new Channel("Evolution", "https://i.iheart.com/v3/re/new_assets/7b78fd03-66b1-4b9a-bd41-fb9638a82a24", "http://stream.revma.ihrhls.com/zc5953", "Music, EDM", "", "live"),
new Channel("Fox News Talk", "https://cdn-profiles.tunein.com/s20431/images/logog.jpg", "http://tunein.streamguys1.com/foxnews", "Talk, News, TV, Comedy", "", "live"),
new Channel("FRESH Radio", "https://cdn-radiotime-logos.tunein.com/s181489q.png", "http://stream.hopemedia.com.au/fresh-mp3", "Music, CCM, Christian Pop, Indie Pop", "", "live"),
new Channel("God's DJs", "https://cdn-radiotime-logos.tunein.com/s140701q.png", "http://www.godsdjsradio.com:8080/stream", "Music, CEDM, EDM", "", "live"),
new Channel("Hit Nation", "https://i.iheart.com/v3/re/new_assets/34da42a4-45ef-44b5-b587-8587b2cad460", "http://stream.revma.ihrhls.com/zc4422", "Music, Pop, Top 40", "", "live"),
new Channel("Hit Nation Top 20", "https://i.iheart.com/v3/re/new_assets/30d852e9-235d-4c0a-bd90-197c5ee4db64", "http://stream.revma.ihrhls.com/zc4422", "Music, Pop, Top 40", "", "live"),
new Channel("HLN", "https://cdn-profiles.tunein.com/s20408/images/logog.png", "http://tunein.streamguys1.com/cnnhln", "Talk, TV, Entertainment", "", "live"),
new Channel("I Love 2 Dance", "https://cdn-radiotime-logos.tunein.com/s167727q.png", "http://stream01.iloveradio.de/iloveradio2.mp3", "Music, EDM", "", "live"),
new Channel("iHeartRadio Countdown", "https://i.iheart.com/v3/re/assets/images/6455.png", "https://n32b-e2.revma.ihrhls.com/zc6455", "Pop, Music, Top 40", "", "live"),
new Channel("iHeartRadio Music Festival", "https://i.iheart.com/v3/re/new_assets/5d03aad93a01a2ea44a48a43", "https://n32b-e2.revma.ihrhls.com/zc5158", "Pop, Music, Live Event", "", "live"),
new Channel("Infowars", "https://www.logolynx.com/images/logolynx/97/9728c04cedf2e93a2b0e17c4d7980965.jpeg", "https://streams.infowars.com/alexjonesshow", "Talk", "", "dead"),
new Channel("Infowars.com Live Events", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Infowars.com_Logo.svg/512px-Infowars.com_Logo.svg.png", "https://streams.infowars.com/stream/7/;", "Talk, Live Event", "", "live"),
new Channel("K-LOVE", "https://cdn-profiles.tunein.com/s33828/images/logoq.png?t=1", "https://emf.streamguys1.com/sk018_mp3_high_web", "Music, CCM, Worship", "", "dead"),
new Channel("Majesty Radio", "https://cdn-profiles.tunein.com/s102763/images/logog.jpg", "http://primary.moodyradiostream.org/majesty-high.aac.m3u", "Music, Worship", "", "dead"),
new Channel("Mark Levin Show", "https://i.iheart.com/v3/re/assets/images/5522.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/MARK_LEVINAAC_SC", "Talk, Podcast", "", "live"),
new Channel("Moody Campus Radio", "http://db.radioline.fr/pictures/radio_168c3fa9a0addfbeff46a86d56ea3dbf/logo600.jpg?size=600", "http://primary.moodyradiostream.org/mcr.mp3.m3u", "Christianity, CCM, Talk, Music", "", "dead"),
new Channel("Moody Music of Christmas", "https://cdn-profiles.tunein.com/s308881/images/logog.jpg?t=157434", "http://primary.moodyradiostream.org/christmas.aac.m3u", "Christianity, Music, Holiday", "", "dead"),
new Channel("Moody Praise and Worship", "https://cdn-radiotime-logos.tunein.com/s105741q.png", "http://primary.moodyradiostream.org/inspo.aac.m3u", "Music, Worship, CCM", "", "dead"),
new Channel("Moody Radio", "https://cdn-radiotime-logos.tunein.com/s96786q.png", "https://primary.moodyradiostream.org/MB1Network.mp3", "Christianity", "", "live"),
new Channel("Moody Radio Northwest", "https://cdn-radiotime-logos.tunein.com/s33968q.png", "http://primary.moodyradiostream.org/kmbi.mp3", "Christianity", "", "live"),
new Channel("Moody Radio Network", "https://cdn-radiotime-logos.tunein.com/s96786q.png", "http://primary.moodyradiostream.org/Network.mp3", "Christianity", "", "live"),
new Channel("Radio CCM", "https://logopond.com/logos/a1017b5692a77ac2ffad55d7c9a17915.png", "http://primary.moodyradiostream.org/radioccm", "Music, CCM", "", "live"),
new Channel("Radio FEST", "https://www.radio.net/images/broadcasts/32/06/17229/c300.png", "http://primary.moodyradiostream.org/radiofest", "Music, CCM, Christian Pop", "", "live"),
new Channel("MPIR Comedy OTR", "https://cdn-radiotime-logos.tunein.com/s283968q.png", "https://s3.voscast.com:8454/;", "Comedy, OTR", "", "dead"),
new Channel("MSNBC", "https://cdn-profiles.tunein.com/s297990/images/logog.jpg", "http://tunein.streamguys1.com/msnbc-free", "News, Talk, TV", "", "live"),
new Channel("NBC News Radio", "https://i.iheart.com/v3/re/new_assets/d9466b96-953d-4965-8f43-cfd42aca24fe", "http://stream.revma.ihrhls.com/zc6043", "News", "", "live"),
new Channel("No Agenda Stream", "https://upload.wikimedia.org/wikipedia/commons/b/ba/No_Agenda_cover_placeholder.jpg", "http://listen.noagendastream.com/noagenda", "Talk, Podcast", "", "live"),
new Channel("Proclaim Channel", "https://cdn-radiotime-logos.tunein.com/s142659q.png", "http://primary.moodyradiostream.org/proclaim-high.aac.m3u", "Christianity, Music, Worship", "", "dead"),
new Channel("Real News with David Knight", "https://i.iheart.com/v3/catalog/podcast/29787299", "https://streams.infowars.com/stream/3/;", "Talk, Podcast", "", "live"),
new Channel("RefNet", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/0000", "Christianity, Talk, Music, Worship", "", "live"),
new Channel("RefNet East", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0500", "Christianity, Talk, Music, Worship", "", "live"),
new Channel("RefNet West", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0800", "Christianity, Talk, Music, Worship", "", "live"),
new Channel("RefNet Central", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0600", "Christianity, Talk, Music, Worship", "", "live"),
new Channel("ROKiT American Comedy", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "https://streaming01.zfast.co.uk/proxy/roksta16?mp=/stream", "OTR, Comedy", "", "live"),
new Channel("ROKiT Crime & Suspense", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "https://streaming01.zfast.co.uk/proxy/roksta17?mp=/stream", "OTR, Drama, Crime", "", "live"),
new Channel("ROKiT Old Time Gold", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "https://streaming01.zfast.co.uk/proxy/roksta18?mp=/stream", "OTR, Drama, Crime, Comedy", "", "live"),
new Channel("ROKiT Science Fiction", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8110/stream", "OTR, Drama, Science Fiction", "", "dead"),
new Channel("ROKiT 1940s Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8256/stream", "OTR, Drama, Science Fiction, Mystery, Comedy", "", "dead"),
new Channel("ROKiT Adventure Stories", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8162/stream", "OTR, Drama, Action", "", "dead"),
new Channel("ROKiT American Classics", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8043/stream", "OTR, Drama, Science Fiction, Mystery, Comedy", "", "dead"),
new Channel("ROKiT British Comedy 1", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8077/stream", "OTR, Comedy", "", "dead"),
new Channel("ROKiT British Comedy 2", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8009/stream", "OTR, Comedy", "", "dead"),
new Channel("ROKiT Classical Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8029/stream", "Music, Classical", "", "dead"),
new Channel("ROKiT Comedy Gold Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8150/stream", "OTR, Comedy", "", "dead"),
new Channel("ROKiT Crime Radio Extra", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8039/stream", "OTR, Drama, Crime", "", "dead"),
new Channel("ROKiT Drama Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming03.zfast.co.uk:8174/stream", "OTR, Drama, Crime", "", "dead"),
new Channel("ROKiT Jazz Central Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming03.zfast.co.uk:8027/stream", "Music, Jazz", "", "dead"),
new Channel("ROKiT Mystery Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming03.zfast.co.uk:8168/stream", "OTR, Drama, Crime, Mystery", "", "dead"),
new Channel("ROKiT Nostalgia Lane Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8180/stream", "OTR, Drama, Crime, Mystery, Science Fiction", "", "dead"),
new Channel("ROKiT Saturn X Radio", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/amtj7ccnnghf.png", "http://streaming02.zfast.co.uk:8122/stream", "OTR, Science Fiction", "", "dead"),
new Channel("SEC Radio Network", "https://cdn-radiotime-logos.tunein.com/s234828q.png", "http://tunein.streamguys1.com/ESPNSEC", "Sports, Live Event, College Sports", "", "live"),
new Channel("SLAM!", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361412_SLAM_.jpg&w=1000&h=1000&cropped=0", "https://playerservices.streamtheworld.com/api/livestream-redirect/100PNL_MP3_SC", "Music, Pop, Top 40", "", "live"),
new Channel("SLAM! 40", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361418_SLAM_40.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB14", "Music, Pop, Top 40", "", "live"),
new Channel("SLAM! 00s", "https://scale.slam.nl/imageScaled/?site=slam&file=1606751580_00s-site.png&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB15", "Music, Pop, 2000s", "", "live"),
new Channel("SLAM! Hardstyle", "https://scale.slam.nl/imageScaled/?site=slam&file=1558426723_Hardstyle.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB11", "Music, EDM", "", "live"),
new Channel("SLAM! The Boom Room", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361443_Theboomroom.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB12", "Music, EDM", "", "live"),
new Channel("SLAM! MixMarathon", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361450_Mixmarathon.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB13", "Music, EDM, Live Event", "", "live"),
new Channel("SLAM! Non-stop", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361457_Non-Stop.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB10", "Music, Pop, Top 40", "", "live"),
new Channel("SLAM! Juize", "https://scale.slam.nl/imageScaled/?site=slam&file=1558361463_Juize.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB09", "Music, Pop, Top 40", "", "live"),
new Channel("SLAM! Housuh In De Pauzuh", "https://scale.slam.nl/imageScaled/?site=slam&file=1568041496_hidp.jpg&w=1000&h=1000&cropped=0", "https://stream.slam.nl/WEB16", "Music, Pop, Hip-Hop, 2000s, 90s", "", "live"),
new Channel("Spin Cycle", "https://radiostationusa.fm/assets/image/radio/180/Spin-Cycle.png", "http://stream.revma.ihrhls.com/zc4776", "Music, EDM, Pop, Hip-Hop, Live Event", "", "live"),
new Channel("TEDTalks", "https://cdn-radiotime-logos.tunein.com/s159861q.png", "http://tunein.streamguys1.com/TEDTalks", "Talk, Podcast, Live Event", "", "live"),
new Channel("The Alex Jones Show", "https://m.media-amazon.com/images/M/MV5BYmVlZWY2NGMtNzRiMC00YjVmLWE5YTUtMjllOThjOTY2M2I0XkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_.jpg", "https://streams.infowars.com/alexjonesshow", "Talk, Podcast", "", "live"),
new Channel("The Buck Sexton Show", "https://i.iheart.com/v3/re/new_assets/5c49f8d4eeefff361052f0d9", "http://stream.revma.ihrhls.com/zc7315", "Talk, Podcast", "", "live"),
new Channel("The Pulse Channel", "https://cdn-profiles.tunein.com/s150906/images/logog.png", "http://147.135.84.28/pulse", "Music, CCM, Christian Pop, Indie Pop, Indie", "", "live"),
new Channel("The Schnitt Show", "https://i.iheart.com/v3/re/assets/images/4824.png", "http://stream.revma.ihrhls.com/zc4824", "Talk, Podcast", "", "dead"),
new Channel("The Sean Hannity Show", "https://i.iheart.com/v3/re/assets/images/bc6a4135-e869-45e3-a217-5946b5f84f94.png", "http://stream.revma.ihrhls.com/zc6706", "Talk, Podcast", "", "live"),
new Channel("theBlaze Radio Network", "https://i.iheart.com/v3/re/new_assets/5ca5372135c7fd6e5680bf8e", "https://playerservices.streamtheworld.com/api/livestream-redirect/BLZE_1AAC_SC", "Talk", "", "live"),
new Channel("TWiT Live", "https://cdn-profiles.tunein.com/s97079/images/logog.png", "http://shoutcast.twit.am/listen/;", "Talk, Tech", "", "live"),
new Channel("Urban Praise", "https://cdn-profiles.tunein.com/s105742/images/logog.jpg", "http://primary.moodyradiostream.org/urban-high.aac.m3u", "Music, Worship", "", "dead"),
new Channel("VCY America", "https://cdn-radiotime-logos.tunein.com/s36008q.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/KVCXFM_SC", "Christianity, Talk, Worship, Drama, Mystery, Music", "", "live"),
new Channel("VCY Sacred Stylings", "https://cdn-radiotime-logos.tunein.com/s36008q.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/VCY_SACRED_STYLINGS_S01_SC", "Music, Worship", "", "live"),
new Channel("War Room with Owen Shroyer", "https://is5-ssl.mzstatic.com/image/thumb/Podcasts118/v4/bd/87/7e/bd877e44-bae9-b29c-2b64-b7ece358ed91/mza_1200762605813509501.jpg/400x400bb.jpg", "https://streams.infowars.com/warrooom", "Talk, Podcast", "", "live"),
new Channel("WEEB 990", "https://cdn-profiles.tunein.com/s28449/images/logog.jpg", "http://ice.weeb990.com:8000/weeb990", "Talk, News", "", "live"),
new Channel("Hot 99.5", "https://i.iheart.com/v3/re/assets.brands/5b3a2f8f0abf50ca9a24a060", "https://stream.revma.ihrhls.com/zc2509", "Music, Pop, Top 40", "", "live"),
new Channel("CBN Radio Classic", "https://cdn-radiotime-logos.tunein.com/s128894q.png", "https://streams.cbnradio.com/Classic-Christian-128K?app=cbnplayer", "Music, 90s, 2000s", "", "live"),
new Channel("YesFM", "https://cdn-profiles.tunein.com/s14405/images/logod.png", "https://stream.streamgenial.stream/ydyh67w4xp8uv", "Music, Pop, Top 40", "", "live"),
new Channel("BBC Radio 1", "https://cdn-radiotime-logos.tunein.com/s24939q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one", "Music, Pop, Top 40", "", "live"),
new Channel("BBC Radio 2", "https://cdn-radiotime-logos.tunein.com/s24940q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_two", "Music, Pop, Hot AC", "", "live"),
new Channel("BBC Radio 3", "https://cdn-radiotime-logos.tunein.com/s24941q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_three", "Music, Classical", "", "live"),
new Channel("BBC Radio 5 Live", "https://cdn-radiotime-logos.tunein.com/s24943q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_five_live_online_nonuk", "Talk, Sports", "", "live"),
new Channel("BBC Radio 6 Music", "https://cdn-radiotime-logos.tunein.com/s44491q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_6music", "Music, Indie Pop, Indie", "", "live"),
new Channel("BBC Radio 1Xtra", "https://cdn-radiotime-logos.tunein.com/s20277q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_1xtra", "Music, Hip-Hop", "", "live"),
new Channel("BBC Radio 4 Extra", "https://cdn-radiotime-logos.tunein.com/s6839q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_four_extra", "Drama, Comedy", "", "live"),
new Channel("BBC Radio 5 Live Sports Extra", "https://mytuner.global.ssl.fastly.net/media/tvos_radios/jNFcZfxdwS.png ", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_five_live_sports_extra", "Sports, Live Event", "", "geo-locked"),
new Channel("BBC Asian Network", "https://cdn-radiotime-logos.tunein.com/s44490q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_asian_network", "Talk, Music, K-Pop", "", "live"),
new Channel("Bloomberg Radio", "https://cdn-profiles.tunein.com/s165740/images/logog.png", "http://tunein.streamguys1.com/bloomberg991", "Talk, News, Finance", "", "live"),
new Channel("RPGamers Network", "https://cdn-radiotime-logos.tunein.com/s209618d.png", "http://stream.rpgamers.net:8000/rpgn", "Music, Soundtrack, Chiptune", "", "dead"),
new Channel("Fox Sports Radio", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fox_Sports_Radio_logo.svg/1024px-Fox_Sports_Radio_logo.svg.png", "http://stream.revma.ihrhls.com/zc4732", "Sports, Talk, Live Event", "", "live"),
new Channel("FOX Sports Radio 1270 AM/105.9 FM", "https://cdn-profiles.tunein.com/s21511/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/WFWNAMAAC_SC", "Sports, Talk, Live Event", "", "live"),
new Channel("The Herd With Colin Cowherd", "https://i.iheart.com/v3/re/new_assets/f80261f4-86b4-4544-949b-1d4194019447", "http://stream.revma.ihrhls.com/zc6973", "Sports, Talk, Podcast", "", "live"),
new Channel("NBA TV", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/1024px-NBA_TV.svg.png", "http://tunein.streamguys1.com/fallback-secure-NBA24", "Sports, Talk, Live Event, TV", "", "dead"),
new Channel("All Things Elon", "https://ws.shoutcast.com/images/contacts/3/31fa/31faf22c-fce7-4460-afdb-e37b58fd38a7/radios/6e49dc47-fa17-44d2-8799-8c3e68877c64/6e49dc47-fa17-44d2-8799-8c3e68877c64.png", "http://streamingv2.shoutcast.com/all-things-elon?lang=en-US%2cen%3bq%3d0.9", "Sports, Live Event", "", "dead"),
new Channel("Nightline Radio", "https://static.radio.net/images/broadcasts/6f/d8/6957/c175.png", "http://212.91.253.34:8000/;?type=http&nocache=185476", "Music, EDM", "", "dead"),
new Channel("One World Radio International", "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/70/6f/42/706f428e-db94-30c7-dbc3-6021cde39c61/AppIcon-iOS-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_SC", "Music, EDM", "", "live"),
new Channel("CBS News Radio", "https://cdn-profiles.tunein.com/s129948/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/CBSNEWSAAC_SC", "Talk, News", "", "live"),
new Channel("Current FM", "https://cdn-radiotime-logos.tunein.com/s21660q.png", "http://ic2.christiannetcast.com/wjlz-fm", "Music, CCM, Christian Pop", "", "live"),
new Channel("SoundCloud Radio", "https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1", "https://wz2drp.scahw.com.au/live/2soundcloud_128.stream", "Music, Hip-Hop, Indie Rap", "", "live"),
new Channel("1WAY FM", "https://pbs.twimg.com/profile_images/1794079317/tuneinlogo_400x400.jpg", "http://s2.viastreaming.net:6165/;", "Music, CCM", "", "dead"),
new Channel("Insomniac Radio", "https://www.insomniacradio.com/wp-content/assets/splashpages/insomniac-radio/images/logo_middle.png", "https://ice55.securenetsystems.net/DASH65", "Music, EDM, Live Event", "", "live"),
new Channel("Alpha Geek Radio Channel 1", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "https://listen.alphageekradio.com:8000/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Coverville Radio 24/7", "https://1.bp.blogspot.com/-ft3bZc6xkfM/Uwi2jGFZx4I/AAAAAAAAC1Q/tKE9K0eLc7Y/s1600/covervilleradio.jpg", "http://listen.alphageekradio.com:9075/;", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 2", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:8050/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 3", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:9050/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 4", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:10050/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 5", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:11000/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 6", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:11050/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 7", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:12000/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Alpha Geek Radio Channel 8", "https://pbs.twimg.com/profile_images/738444788530216960/mzt2nSwH_400x400.jpg", "http://listen.alphageekradio.com:12050/;stream/1", "Talk, Tech, Podcast", "", "dead"),
new Channel("Kohina", "https://static-media.streema.com/media/cache/b5/80/b580959d3d24b2876e626ce019b7b01d.jpg", "http://kohina.duckdns.org:8000/stream.ogg", "Music, Soundtrack, Chiptune", "", "dead"),
new Channel("Culture War Radio", "https://wiki.culturewar.radio/_media/logo.png", "https://live.culturewar.radio/", "Talk", "", "live"),
new Channel("WTOP", "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_WTOP-FM_%282014%29.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/WTOPFMAAC_SC", "News", "", "live"),
new Channel("Fly Nation", "https://i.iheart.com/v3/re/assets/images/f7456306-62bf-49bb-ba4e-4ea704680ae2.png", "http://stream.revma.ihrhls.com/zc6732", "Music, Hip-Hop", "", "live"),
new Channel("Master of the Mix", "https://i.iheart.com/v3/re/assets/images/5164.png", "http://stream.revma.ihrhls.com/zc5164", "Music, Hip-Hop", "", "live"),
new Channel("All My Jams Top 20", "https://i.iheart.com/v3/re/assets/images/4940.png", "http://stream.revma.ihrhls.com/zc4940", "Music, Hip-Hop", "", "live"),
new Channel("Hot 97", "https://i.iheart.com/v3/re/assets/~52e852a823d90a7e7f281dfa/images/6046.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/WQHTAAC_SC", "Music, Hip-Hop", "", "live"),
new Channel("Cheddar", "https://i.iheart.com/v3/re/new_assets/5ecd29ccb058125a94db6b69", "http://cheddar.streamguys1.com/live-aac", "News, Talk", "", "live"),
new Channel("Dave Ramsey Channel", "https://i.iheart.com/v3/re/new_assets/5bbcdb461373a130ed4e48e2", "http://stream.revma.ihrhls.com/zc5859", "Talk, Finance", "", "live"),
new Channel("77 WABC", "https://i.iheart.com/v3/re/assets/images/5349.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/WABCAMAAC_SC", "Talk, Sports", "", "live"),
new Channel("KCRW World News", "https://i.iheart.com/v3/re/assets/images/5257.png", "http://kcrw.streamguys1.com/kcrw_128k_aac_news_iheart", "Talk", "", "live"),
new Channel("KCRW Eclectic24", "https://i.iheart.com/v3/re/assets/images/5256.png", "http://kcrw.streamguys1.com/kcrw_128k_aac_e24_iheart", "Music, Indie", "", "live"),
new Channel("iHeart 80s Radio", "https://i.iheart.com/v3/re/new_assets/0a01b40d-6206-49dd-85f4-06d89f5f2065", "http://stream.revma.ihrhls.com/zc5060", "Music, 80s", "", "live"),
new Channel("iHeart 90s Radio", "https://i.iheart.com/v3/re/new_assets/329ab2f0-5d1a-4e71-9f9a-e6d5674ad982", "http://stream.revma.ihrhls.com/zc6834", "Music, 90s", "", "live"),
new Channel("iHeart 70s Radio", "https://i.iheart.com/v3/re/new_assets/a69a3c10-27f8-4d80-be9e-a03b1994779c", "http://stream.revma.ihrhls.com/zc6843", "Music, 70s", "", "live"),
new Channel("American Top 40", "https://i.iheart.com/v3/re/new_assets/5d2ba8e4f347e6500ef3db5a", "http://stream.revma.ihrhls.com/zc4802", "Music, Pop, Top 40", "", "live")
]
