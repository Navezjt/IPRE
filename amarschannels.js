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
new Channel("FRESH Radio", "https://cdn-radiotime-logos.tunein.com/s181489q.png", "http://stream.hopemedia.com.au/fresh-mp3", "Music, CCM, Christian Pop, Indie Pop, CCM", "", "live"),
new Channel("God's DJs", "https://cdn-radiotime-logos.tunein.com/s140701q.png", "http://www.godsdjsradio.com:8080/stream", "Music, CEDM, EDM", "", "live"),
new Channel("Hit Nation", "https://i.iheart.com/v3/re/new_assets/34da42a4-45ef-44b5-b587-8587b2cad460", "http://stream.revma.ihrhls.com/zc4422", "Music, Pop, Top 40", "", "live"),
new Channel("Hit Nation Top 20", "https://i.iheart.com/v3/re/new_assets/30d852e9-235d-4c0a-bd90-197c5ee4db64", "http://stream.revma.ihrhls.com/zc4422", "Music, Pop, Top 40", "", "live"),
new Channel("HLN", "https://cdn-profiles.tunein.com/s20408/images/logog.png", "http://tunein.streamguys1.com/cnnhln", "Talk, TV, Entertainment", "", "live"),
new Channel("I Love 2 Dance", "https://cdn-radiotime-logos.tunein.com/s167727q.png", "http://stream01.iloveradio.de/iloveradio2.mp3", "Music, EDM", "", "live"),
new Channel("iHeartRadio Countdown", "https://i.iheart.com/v3/re/assets/images/6455.png", "https://n32b-e2.revma.ihrhls.com/zc6455", "Pop, Music, Top 40", "", "live"),
new Channel("iHeartRadio Music Festival", "https://i.iheart.com/v3/re/new_assets/5d03aad93a01a2ea44a48a43", "https://n32b-e2.revma.ihrhls.com/zc5158", "Pop, Music, Live Event", "", "live"),
new Channel("Infowars", "https://www.logolynx.com/images/logolynx/97/9728c04cedf2e93a2b0e17c4d7980965.jpeg", "https://streams.infowars.com/alexjonesshow", "Talk", "", "live"),
new Channel("Infowars.com Live Events", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Infowars.com_Logo.svg/512px-Infowars.com_Logo.svg.png", "https://streams.infowars.com/stream/7/;", "Talk, Live Event", "", "live"),
new Channel("K-LOVE", "https://cdn-profiles.tunein.com/s33828/images/logoq.png?t=1", "https://emf.streamguys1.com/sk018_mp3_high_web", "Music, CCM, Worship", "", "dead"),
new Channel("Majesty Radio", "https://cdn-profiles.tunein.com/s102763/images/logog.jpg", "http://primary.moodyradiostream.org/majesty-high.aac.m3u", "Music, Worship", "", "dead"),
new Channel("Mark Levin Show", "https://i.iheart.com/v3/re/assets/images/5522.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/MARK_LEVINAAC.aac", "Talk, Podcast", "", "live"),
new Channel("Moody Campus Radio", "http://db.radioline.fr/pictures/radio_168c3fa9a0addfbeff46a86d56ea3dbf/logo600.jpg?size=600", "http://primary.moodyradiostream.org/mcr.mp3.m3u", "Christianity, CCM, Talk, Music", "", "dead"),
new Channel("Moody Music of Christmas", "https://cdn-profiles.tunein.com/s308881/images/logog.jpg?t=157434", "http://primary.moodyradiostream.org/christmas.aac.m3u", "Christianity, Music, Holiday", "", "dead"),
new Channel("Moody Praise and Worship", "https://cdn-radiotime-logos.tunein.com/s105741q.png", "http://primary.moodyradiostream.org/inspo.aac.m3u", "Music, Worship, CCM", "", "dead"),
new Channel("Moody Radio", "https://cdn-radiotime-logos.tunein.com/s96786q.png", "https://primary.moodyradiostream.org/MB1Network.mp3", "Christianity", "", "live"),
new Channel("Moody Radio Northwest", "https://cdn-radiotime-logos.tunein.com/s33968q.png", "http://primary.moodyradiostream.org/kmbi.mp3", "Christianity", "", "live"),
new Channel("Moody Radio Network", "https://cdn-radiotime-logos.tunein.com/s96786q.png", "http://primary.moodyradiostream.org/Network.mp3", "Christianity", "", "live"),
new Channel("Radio CCM", "https://logopond.com/logos/a1017b5692a77ac2ffad55d7c9a17915.png", "http://primary.moodyradiostream.org/radioccm", "Music, CCM", "", "live"),
new Channel("Radio FEST", "https://www.radio.net/images/broadcasts/32/06/17229/c300.png", "http://primary.moodyradiostream.org/radiofest", "Music, CCM, Christian Pop", "", "live"),
new Channel("MPIR Comedy OTR", "https://cdn-radiotime-logos.tunein.com/s283968q.png", "http://s3.voscast.com:8454/;", "Comedy, OTR", "", "live"),
new Channel("MSNBC", "https://cdn-profiles.tunein.com/s297990/images/logog.jpg", "http://tunein.streamguys1.com/msnbc-free", "News, Talk, TV", "", "live"),
new Channel("NBC News Radio", "https://i.iheart.com/v3/re/new_assets/d9466b96-953d-4965-8f43-cfd42aca24fe", "http://stream.revma.ihrhls.com/zc6043", "News", "", "live"),
new Channel("No Agenda Stream", "https://upload.wikimedia.org/wikipedia/commons/b/ba/No_Agenda_cover_placeholder.jpg", "http://listen.noagendastream.com/noagenda", "Talk", "", "live"),
new Channel("Proclaim Channel", "https://cdn-radiotime-logos.tunein.com/s142659q.png", "http://primary.moodyradiostream.org/proclaim-high.aac.m3u", "Christianity, Music, Worship", "", "dead"),
new Channel("Real News with David Knight", "https://i.iheart.com/v3/catalog/podcast/29787299", "https://streams.infowars.com/stream/3/;", "Talk", "", "live"),
new Channel("RefNet", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/0000", "Christianity, Drama, Music, Worship", "", "live"),
new Channel("RefNet East", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0500", "Christianity, Drama, Music, Worship", "", "live"),
new Channel("RefNet West", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0800", "Christianity, Drama, Music, Worship", "", "live"),
new Channel("RefNet Central", "https://pbs.twimg.com/profile_images/467306937197948928/0T1iVTYt_400x400.png", "https://icecast.refnet.fm/utc/-0600", "Christianity, Drama, Music, Worship", "", "live")
]
